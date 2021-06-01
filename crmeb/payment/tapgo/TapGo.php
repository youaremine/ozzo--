<?php


namespace crmeb\tapgo;
use think\Exception;
use think\exception\ValidateException;
use think\facade\Log;

class TapGo
{
    private $config = [];
    private $notify = ['return','notify'];

    public function __construct()
    {
        $config = include('Config.php');
        $this->config = $config['WEB_APP']['PROD'];
    }

    private function getPublicEncrypt($data){
        $k = <<<PK
-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA9k6Dpk12XPGBuqCKI3HERkeEU0MCBC/h/Ox1mVDuwRVngZvuYDHUxbl5Yup9yNvOFK9Xabqy3D2DX7Q9fIZqhLHAYvLMDTSuSAEza6dW6kfUzNaCnucvRpDgNKbBcxa/EA5LWyrpNaMwRLbaGe4s/l7+o0mRwCEjgEU7dzjaWVtWLH66dzTcB+LIEiwx/nYl69jaDpXEtxMYLZyQeibYRv0Gnaclu3trhe+0GYMT65DXv0aSDDxUsUhs4hL6S6j4646aZ5Yl2nukPZXUalJgv+sOm1IHLrf6Hv8LH4OqA8Vh1uQC65QHRqlwzrypxWY7nGY/40HH2rGLHjgI+Rqhwyu8v3dLHEGBoeupCcvAK9PxPSK2iU0RA/Stk5Wf2XG8m1VDLsZ1usBkdkKXyj60GZAGqN9RzwLH42whOS6Z/JN4HP7O9eUVH+qQ7yVumGH3huW5nvX0St9AFZ7kLUv8RDS6rb4zDvZiTIosGVXIt0GC9cAWEqhh7SZXHEi0CF792qJRhiZTlOS0FPFzJ4tw0sBgF61iqAD3+l9WVE4q+mhJlU4jjt10JGyl08D/7/lnD1QelP3/il3iTyMRNAmLY9PY+AuXo81AdNr1wypB+KEj4A9WyuH739yQnSURPT8fVDC5zcqv97TI72iqCLpkDr+oP3gZX4hZ8Fj3F5MrKaECAwEAAQ==
-----END PUBLIC KEY-----
PK;
        $publicKey = openssl_pkey_get_public($k);
        if(!$publicKey) throw new Exception("public key not correct");
        if (!openssl_public_encrypt(json_encode($data), $encryptedWithPublic, $publicKey, OPENSSL_PKCS1_OAEP_PADDING)) {
            echo "error encrypting with public key";
        }
        $b64_encryptedWithPublic = base64_encode($encryptedWithPublic);
        return $b64_encryptedWithPublic;

    }
    private function getSign($appId,$merTradeNo,$b64_encryptedWithPublic,$paymentType,$transactionType,$apiKey){
        $string = 'appId=' . $appId . '&merTradeNo=' . $merTradeNo . '&payload=' .$b64_encryptedWithPublic . '&paymentType=' . $paymentType . '&transactionType=' . $transactionType;
        $sign = hash_hmac('sha512', $string, $apiKey, true);
        $b64_sign = base64_encode($sign);
        return $b64_sign;
    }
    public function paymentBackEnd($merTradeNo = '',$totalPrice = '',$remark = '',$paymentType = 'S',$transactionType = 'CR'){
//        if(empty($totalPrice) || $totalPrice <= 0) throw Exception('total price param error');
        $data = array(
            'totalPrice' => $totalPrice,
            'currency' => 'HKD',
            'merTradeNo' => $merTradeNo,
            'notifyUrl' => '',
            'returnUrl' => '',
            'remark' => $remark,
            'lang' => 'en'
        );
        // 1. get openssl public key
        $b64_encryptedWithPublic = $this->getPublicEncrypt($data);
        // 2. send sign
        $sign = $this->getSign($this->config['appId'],$merTradeNo,$b64_encryptedWithPublic,'S','CR',$this->config['apiKey']);
        // 3. return data
        $res = $this->postRequest('',
            [
                'appId' => $this->config['appId'],
                'merTradeNo' => $merTradeNo,
                'paymentType' => $paymentType,
                'transactionType' => $transactionType,
                'payload' => $b64_encryptedWithPublic,
                'sign' => $sign,
                'totalPrice' => $totalPrice,
                'remark' => 'remark',
            ]
        );
        if(!empty($res)){
            // 匹配 schemes 字符串
            $isMatched = preg_match("/'tapngowallet.*?'/", $res, $matches);
            if($isMatched && !empty($matches) && count($matches) == 1){
                $schemes_url = substr($matches[0],1,strlen($matches[0]) - 2);
                return $schemes_url;
            }
        }
        return '';

    }
    public function postRequest($url = '',$array = []){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,'https://gateway2.tapngo.com.hk/web/payments');

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

        // POST数据

        curl_setopt($ch, CURLOPT_POST, 1);

        // 把post的变量加上
        $data['appId'] = $array['appId'];
        $data['merTradeNo'] = $array['merTradeNo'];
        $data['paymentType'] = 'S';
        $data['transactionType'] = 'CR';
        $data['payload'] = $array['payload'];
        $data['sign'] = $array['sign'];
        $data['totalPrice'] = $array['totalPrice'];
        $data['remark'] = 'remark';
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
        die;
    }
    public function notify($notifyData){
        if(!in_array($notifyData,$this->notify)){
            throw new ValidateException('notify error');
        }
        Log::info('tap go 支付回调' . var_export($notifyData, 1));
        if (!in_array($notifyData['tradeStatus'], ['TRADE_FINISHED']))
            throw new ValidateException('未支付');
        try {
            // 傳入訂單號
            event('pay_success_order', ['order_sn' => $notifyData['merTradeNo'], 'data' => $notifyData]);
            return true;
        } catch (\Exception$e) {
            Log::info('tap go 支付回调失败:' . $e->getMessage());
        }
        return false;
    }
}