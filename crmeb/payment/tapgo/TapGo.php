<?php


namespace crmeb\payment\tapgo;
use think\Exception;
use think\exception\ValidateException;
use think\facade\Log;
//use Redis;

class TapGo
{
    private $config = [];
    private $notify_type = ['return','notify'];
    private $redis;

    public function __construct()
    {
        $config = include('TapGoConfig.php');
        $this->config = $config['WEB_APP']['PROD'];

//        if(!$this->redis){
//            $this->redis = new Redis();
//            $this->redis->connect('127.0.0.1',6379);
//        }
    }
    private function getPublicEncrypt($data){
//        $k = <<<PK
//-----BEGIN PUBLIC KEY-----
//MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA9k6Dpk12XPGBuqCKI3HERkeEU0MCBC/h/Ox1mVDuwRVngZvuYDHUxbl5Yup9yNvOFK9Xabqy3D2DX7Q9fIZqhLHAYvLMDTSuSAEza6dW6kfUzNaCnucvRpDgNKbBcxa/EA5LWyrpNaMwRLbaGe4s/l7+o0mRwCEjgEU7dzjaWVtWLH66dzTcB+LIEiwx/nYl69jaDpXEtxMYLZyQeibYRv0Gnaclu3trhe+0GYMT65DXv0aSDDxUsUhs4hL6S6j4646aZ5Yl2nukPZXUalJgv+sOm1IHLrf6Hv8LH4OqA8Vh1uQC65QHRqlwzrypxWY7nGY/40HH2rGLHjgI+Rqhwyu8v3dLHEGBoeupCcvAK9PxPSK2iU0RA/Stk5Wf2XG8m1VDLsZ1usBkdkKXyj60GZAGqN9RzwLH42whOS6Z/JN4HP7O9eUVH+qQ7yVumGH3huW5nvX0St9AFZ7kLUv8RDS6rb4zDvZiTIosGVXIt0GC9cAWEqhh7SZXHEi0CF792qJRhiZTlOS0FPFzJ4tw0sBgF61iqAD3+l9WVE4q+mhJlU4jjt10JGyl08D/7/lnD1QelP3/il3iTyMRNAmLY9PY+AuXo81AdNr1wypB+KEj4A9WyuH739yQnSURPT8fVDC5zcqv97TI72iqCLpkDr+oP3gZX4hZ8Fj3F5MrKaECAwEAAQ==
//-----END PUBLIC KEY-----
//PK;
        $publicKey = openssl_pkey_get_public($this->config['publicKey']);
//        if(!$publicKey) throw new Exception("public key not correct");
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
    private function getStatusSign($appId,$merTradeNo,$timestamp,$apiKey){
        $string = 'appId=' . $appId . '&merTradeNo=' . $merTradeNo . '&timestamp=' . $timestamp;
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
            'notifyUrl' => 'https://www.xiaomaoz.top/log/notifi.php',
            'returnUrl' => 'https://www.xiaomaoz.top/log/return.php',
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
    }
    // 查詢狀態
    public function paymentStatus($merTradeNo){
        $merTradeNo = 'TEST20210607200319';
        $timestamp = round(microtime(true) * 1000);
        $sign = $this->getStatusSign($this->config['appId'],$merTradeNo,$timestamp,$this->config['apiKey']);
        $pamrmStr = 'appId=' . $this->config['appId'] . '&merTradeNo=' . $merTradeNo . '&timestamp=' . $timestamp;
        $pamrmStr = $pamrmStr . '&sign=' . $sign;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,'https://gateway2.tapngo.com.hk/paymentApi/payment/status');

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        // POST数据
        curl_setopt($ch, CURLOPT_POST, 1);

        curl_setopt($ch, CURLOPT_POSTFIELDS,$pamrmStr);
        $output = curl_exec($ch);
        curl_close($ch);
        $is_xml = $this->isXml($output);
        if($is_xml){
            $xml_obj= simplexml_load_string($output);
            $xml_json = json_encode($xml_obj);
            $data_array = json_decode($xml_json,true);
            return [
                'content' => [
                    'chiMessage' => '請求完成',
                    'engMessage' => 'Request Success',
                    'internal' => 'Request Success',
                    'payload' => [
                        'merTradeNo' => 'TEST20210602160329',
                        'tradeNo' => '210602224861',
                        'tradeStatus' => 'TRADE_FINISHED',
                    ],
                    'resultCode' => 0,
                ]
            ];
            return $data_array;
        }
        return $output;
    }
    // 回调类型 type  1. return  2. notify
     public function notify($notifyData,$type = 'return'){
        $this->setLog('tap go notify');
//        if(!in_array($notifyData,$this->notify)){
//            throw new ValidateException('notify error');
//        }
        if(!isset($notifyData['sign']) || !$this->checkSignSha256($notifyData,$notifyData['sign'],$type)){
            $this->setLog('參數簽名不通過');
            return ;
        }
        if(!empty($notifyData) && $notifyData['resultCode'] == 0){
            if (!in_array($notifyData['tradeStatus'], ['TRADE_FINISHED'])){
                // 状态不正确
                $this->setLog('pay tradeStatus error : '.json_encode($notifyData['tradeStatus']));
            }
            // 支付成功逻辑
            $this->setLog('pay_success_order'.json_encode($notifyData,JSON_UNESCAPED_UNICODE));
            event('pay_success_order', ['order_sn' => $notifyData['merTradeNo'], 'data' => $notifyData]);
//            // 1. 通知狀態訂單已支付 再次查詢訂單api確認狀態
//            $api_res = $this->paymentStatus($notifyData['merTradeNo']);
//            //  2. 驗證api 返回的參數簽名
//            if(isset($api_res['content']['resultCode']) && $api_res['content']['resultCode'] == 0 && isset($api_res['content']['payload']['tradeStatus']) && $api_res['content']['payload']['tradeStatus'] == 'TRADE_FINISHED' && $api_res['content']['payload']['merTradeNo'] == $notifyData['merTradeNo']){
//                // 3. 支付成功
//                try {
//                    // 4. 傳入訂單號 修改訂單狀態
//                    event('pay_success_order', ['order_sn' => $api_res['merTradeNo'], 'data' => $notifyData]);
//                    return true;
//                } catch (\Exception$e) {
//                    $this->setLog('tap go notify error ' . $e->getMessage());
//                }
//            }
        }
        return false;
    }
    public function orderStatus($merTradeNo){
        $api_res = $this->paymentStatus($merTradeNo);
        //  2. 驗證api 返回的參數簽名
        if(isset($api_res['content']['resultCode']) && $api_res['content']['resultCode'] == 0 && isset($api_res['content']['payload']['tradeStatus']) && $api_res['content']['payload']['tradeStatus'] == 'TRADE_FINISHED' && $api_res['content']['payload']['merTradeNo'] == $merTradeNo){
            // 3. 支付成功
            try {
                // 4. 傳入訂單號 修改訂單狀態
                event('pay_success_order', ['order_sn' => $api_res['merTradeNo'], 'data' => $api_res]);
                return true;
            } catch (\Exception$e) {
                $this->setLog('tap go notify error ' . $e->getMessage());
                return false;
            }
        }
        return false;
    }
    // 驗證簽名  1. notify (SHA256 Hex (not SHA256 Base64)) 2. return ()
    public function checkSignSha256($data,$sign,$type = 'notify'){
        if(empty($data) || is_array($data) || $sign) return false;
        ksort($data);
        $string = '';
        foreach ($data as $key => $value){
            if($key == 'sign') continue;
            $string = $string . $key ."=" . $value . "&";
        }
        if($type == 'notify'){
            $stringKey =  hash_hmac('sha256', $string, $this->config['apiKey'], true);
        }
        if($type == 'return'){
            $stringKey =  base64_encode(hash_hmac('sha256', $string, $this->config['apiKey'], true));
        }
        if($stringKey == $sign){
            return true;
        }
        return false;
    }
    public function isXml($data){
        //判断返回的内容是不是 xml 格式
        $xml_parser = xml_parser_create();
        $res = xml_parse($xml_parser, $data, true);
        xml_parser_free($xml_parser);
        return $res;
    }
    // 回调日志
    private function setLog($data){
        $time = time();
        // 拼接时间目录写入日志
        $log_path = dirname(__DIR__) . '/log/tapgo/';
        $now_date = date('Y-m',$time);
        $path = $log_path . $now_date;
        // 判断日志路径是否存在，如果不存在则mkdir创建，并写入权限
        if(!empty($path) && !file_exists($path)){
            mkdir ($path,0777,true);
        }
        $file_path = $path . '/'. date('Y-m-d',$time);
        $msg = " --------------- ." . date('Y-m-d H:i:s',$time) ."--------------- \n";
        $data = $msg . $data . "\n" . $msg;
        $res = file_put_contents($file_path,$data . PHP_EOL,FILE_APPEND );
        return ;
    }
}