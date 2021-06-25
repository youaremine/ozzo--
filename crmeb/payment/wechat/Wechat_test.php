<?php


namespace crmeb\payment\wechat;

include (dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php');
use GuzzleHttp\Exception\RequestException;
use WechatPay\GuzzleMiddleware\WechatPayMiddleware;
use WechatPay\GuzzleMiddleware\Util\PemUtil;

class Wechat
{
    private $config = [];
    private $notify_url = 'https://www.weixin.qq.com/wxpay/pay.php';// 回調地址
    private $order_placement_url = 'https://api.mch.weixin.qq.com/hk/v3/transactions/app'; // Order Placement API

    public function __construct()
    {
        $config = include('WechatConfig.php');
        $this->config = $config;
    }
    /**
     * 獲取預支付id的token
     */
    public function getAuth(){
//        $auth = "WECHATPAY2-SHA256-RSA2048 ";
        $mchid = '126125418';
        $serial_no = '76709B83E5A0494EA3F25ADBC38939778B7B94F2';
        $nonce_str = 'wxm162269sds4529';
        $timestamp = time();
        $key = openssl_get_privatekey(file_get_contents('apiclient_key.pem'));
        $url_parts = parse_url('/hk/v3/transactions/app');
        $canonical_url = ($url_parts['path'] . (!empty($url_parts['query']) ? "?${url_parts['query']}" : ""));
        $body = '{
    "mchid": "126125418",
    "appid": "wxcfd86c246a46ff84", 
    "description": "test",
    "notify_url": "https://www.weixin.qq.com/wxpay/pay.php",
    "out_trade_no": "1217752565643587573680189",
    "trade_type": "APP",
    "merchant_category_code": "7032",
    "amount": {
      "total": 100,
      "currency" : "HKD"
    }
}';

        $message = 'POST'."\n".
            $canonical_url."\n".
            $timestamp."\n".
            $nonce_str."\n".
            $body."\n";
        $message = utf8_encode($message);
        openssl_sign($message, $raw_sign, $key, 'sha256WithRSAEncryption');
        $sign = base64_encode($raw_sign);
        echo 'sign'."\n\n" . $sign;
        $schema = 'WECHATPAY2-SHA256-RSA2048 ';
        $token = sprintf('mchid="%s",nonce_str="%s",timestamp="%d",serial_no="%s",signature="%s"',
            $mchid, $nonce_str, $timestamp, $serial_no, $sign);
        return $schema . $token;
    }
    /**
     * 獲取預支付id
     */
    public function getPrepayId($out_trade_no = 'wx892156904',$description = '',$trade_type = '',$merchant_category_code = '',$amount = []){
        $payload = [
            'mchid' => $this->config['mchid'],
            'appid' => $this->config['appid'],
            'description' => $description,
            'notify_url' => $this->notify_url,
            'out_trade_no' => '1217752565643587573680189',
            'trade_type' => 'APP',
            'merchant_category_code' => "7032",
            'amount' => json_encode(['total' => 100,'currency' => 'CNY']),
        ];

        $curl = curl_init();
        $auth = $this->getAuth();
        echo "\n\n\n";
//        var_dump($auth);
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.mch.weixin.qq.com/hk/v3/transactions/app',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => '{
            "mchid": "126125418",
            "appid": "wxcfd86c246a46ff84", 
            "description": "test",
            "notify_url": "https://www.weixin.qq.com/wxpay/pay.php",
            "out_trade_no": "1217752565643587573680189",
            "trade_type": "APP",
            "merchant_category_code": "7032",
            "amount": {
              "total": 100,
              "currency" : "HKD"
            }
        }',
            CURLOPT_HTTPHEADER => array(
                'Authorization:' . $auth,
                'Content-Type: application/json',
                'Accept: */*',
                'User-Agent : PostmanRuntime/7.28.0'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;

    }
    /**
     * 發起下單
     */
    public function unificationOrder($out_trade_no = 'wx892156904',$description = '', $total,$currency = 'HKD'){
        $noncestr = 'wxm16226945229';
        $timestamp = '1622707295';
        $notify_url = $this->notify_url;
//        $prepayid = $this->getPrepayId($out_trade_no,$description, $total,$currency);
        $prepayid = 'wx031603462421501d35b658af9d576c0000';
        $str = 'appid=' . $this->config['appid'] .
            '&partnerid=' . '126125418' .
            '&prepayid=' . $prepayid .
            '&package=' . 'Sign=WXPay' .
            '&noncestr=' . $noncestr .
            '&timestamp-' . $timestamp;
        $sign_tmp = $str . '&key=' . $this->config['apikey'];
        $sign = $this->getSign($sign_tmp);
        $onderInfo = [
            'appid' => $this->config['appid'],
            'noncestr' => $noncestr,
            'package' => 'Sign=WXPay',
            'partnerid' => '126125418',
            'prepayid' => $prepayid,
            'timestamp' => $timestamp,
            'sign' => $sign,
        ];
        return $onderInfo;
    }

    /**
     * 獲取隨機字符串
     */
    public function randomStr(){
        return 'abc123';
    }
    public function getSign($str){
        return md5($str);
    }
    public function notice($notifyData){
        // 驗證參數
    }
}
$a = new Wechat;
//$a->getPrepayId();
//$a->unificationOrder('wx892156904','','HKD');