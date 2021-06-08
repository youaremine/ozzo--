<?php


namespace crmeb\payment\wechat;

include (dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php');
use GuzzleHttp\Exception\RequestException;
use WechatPay\GuzzleMiddleware\Util\AesUtil;
use WechatPay\GuzzleMiddleware\WechatPayMiddleware;
use WechatPay\GuzzleMiddleware\Util\PemUtil;
use think\facade\Db;

class Wechat
{
    private $config = [];
    private $notify_url = 'https://hklive.ozzotec.com/api/notice/weixin_app_pay';// 回調地址
    private $order_placement_url = 'https://api.mch.weixin.qq.com/hk/v3/transactions/app'; // Order Placement API

    public function __construct()
    {
        $config = include('WechatConfig.php');
        $this->config = $config;
    }
    public function wechatpay($out_trade_no,$total){
        $merchantId = '126125418'; // 商户号
        $merchantSerialNumber = '76709B83E5A0494EA3F25ADBC38939778B7B94F2'; // 商户API证书序列号
        $merchantPrivateKey = PemUtil::loadPrivateKey(__DIR__.'/key/apiclient_key.pem'); // 商户私钥
        // 微信支付平台配置
        $wechatpayCertificate = PemUtil::loadCertificate(__DIR__.'/key/wechatpay_447B76563F1BDE4DEAE64000D34758F4378542CC.pem'); // 微信支付平台证书
        // 构造一个WechatPayMiddleware
        $wechatpayMiddleware = WechatPayMiddleware::builder()
        ->withMerchant($merchantId, $merchantSerialNumber, $merchantPrivateKey) // 传入商户相关配置
        ->withWechatPay([ $wechatpayCertificate ]) // 可传入多个微信支付平台证书，参数类型为array
        ->build();
        // 将WechatPayMiddleware添加到Guzzle的HandlerStack中
        $stack = \GuzzleHttp\HandlerStack::create();
        $stack->push($wechatpayMiddleware, 'wechatpay');
        // 创建Guzzle HTTP Client时，将HandlerStack传入
        $client = new \GuzzleHttp\Client(['handler' => $stack]);
        try {
            if($total > 0 && ($total == 0.01 || $total < 0.01)) $total = 0.02 * 100;
            else $total = $total * 100;
            $resp = $client->request('POST', 'https://api.mch.weixin.qq.com/hk/v3/transactions/app', [
                'json' => [ // JSON请求体
                    'appid' => 'wx8507d8fe31b9e386',
                    'mchid' => '126125418',
                    'description' => 'test',
                    'out_trade_no' => $out_trade_no,
                    'notify_url' => 'https://hklive.ozzotec.com/api/notice/weixin_app_pay',
                    "trade_type"=>"APP",
                    "merchant_category_code"=> "7032",

                    'amount' => ["total"=>$total,"currency"=>'HKD'],
                ],
                'headers' => [ 'Accept' => 'application/json' ]
            ]);
            $data = json_decode($resp->getBody(),true);

            $noncestr = $this->getRandomStr(32,false);
            $timestamp = (String)time();
            $data['prepay_id'] = $data['prepay_id'];
            $package = 'Sign=WXPay';
            $stringa = 'appid=wx8507d8fe31b9e386'.'&noncestr='.$noncestr.'&package='.$package.'&partnerid=126125418&prepayid='. $data['prepay_id'].'&timestamp='.$timestamp;
            $stringa = $stringa . '&key=RoriN4KyomwaAFL4KyMvjrFuJlbGoNGg';
            $payload = [
                    'appid' => 'wx8507d8fe31b9e386',
                    'noncestr' => $noncestr,
                    'partnerid' => '126125418',
                    "package" => $package,
                    'prepayid' => $data['prepay_id'],
                    'timestamp' => $timestamp,
                    'sign' => strtoupper(md5($stringa)),
                ];
//            echo $resp->getStatusCode().' '.$resp->getReasonPhrase()."\n";
//            echo $resp->getBody()."\n";
        } catch (RequestException $e) {
            return json_encode($e->getMessage().$e->getResponse()->getStatusCode().' '.$e->getResponse()->getReasonPhrase());
            // 进行错误处理
            echo $e->getMessage()."\n";
            if ($e->hasResponse()) {
                echo $e->getResponse()->getStatusCode().' '.$e->getResponse()->getReasonPhrase()."\n";
                echo $e->getResponse()->getBody();
            }
        }
        return $payload;
    }
    /**
     * 發起下單
     */
    public function unificationOrder($out_trade_no,$description = '', $total = 100,$currency = 'HKD'){
        $res = $this->wechatpay($out_trade_no,$total);
        return $res;
    }
    /**
     * 回调处理
     */
    public function notice($notifyData,$http_headers,$data){
        // 这里不把转义\转换签名会不成功
        $notifyData = str_replace("\\/", "/", json_encode($notifyData,JSON_UNESCAPED_UNICODE));
        // 1. 驗證參數
        if(!isset($http_headers['wechatpay-timestamp']) || !isset($http_headers['wechatpay-serial'])
            || !isset($http_headers['wechatpay-signature']) ){
            // 2. 非法回调 没有相应请求头
            $this->setLog('http request header fail');
            echo json_encode(['code'=>'FAILED','msg'=>'failed']);exit;
        }
        $nonce = $http_headers['wechatpay-nonce'];
        $signature = $http_headers['wechatpay-signature'];
        $timestamp = $http_headers['wechatpay-timestamp'];
        $contents = json_decode($notifyData,true)['resource'];
        // 3. 微信支付平台证书解密是否微信回调
        $request_params = $timestamp . "\n" . $nonce . "\n" . $notifyData . "\n";
        if(!$this->checkSource($request_params,base64_decode($signature))) {
            $this->setLog('checkSource check false ');
            echo json_encode(['code'=>'FAILED','msg'=>'failed']);exit;
        }
        // 4. 解密
        $params = $this->decryptGetParrm($contents['associated_data'], $contents['nonce'], $contents['ciphertext']);
        if(empty($params) || !is_array($params)){
            $this->setLog('decryptGetParrm type fail ');
            echo json_encode(['code'=>'FAILED','msg'=>'failed']);exit;
        }
        if(empty($params['appid']) || $params['appid'] != $this->config['appid']){
            $this->setLog('appid not equal ');
            echo json_encode(['code'=>'FAILED','msg'=>'failed']);exit;
        }
        if(!empty($params['trade_state']) && $params['trade_state'] == 'SUCCESS'){
            // 5. 支付成功逻辑
            $this->setLog('params : '.json_encode($params,JSON_UNESCAPED_UNICODE));
            event('pay_success_order', ['order_sn' => $params['out_trade_no'], 'data' => $params]);
            echo json_encode(['code'=>'SUCCESS','msg'=>'success']);exit;
        }
    }
    // 验证来源
    private function checkSource($data,$signature){
        $wechatpayCertificate = openssl_pkey_get_public(file_get_contents($this->config['wechatpay_certificate_path']));
        $res = openssl_verify($data, $signature, $wechatpayCertificate, OPENSSL_ALGO_SHA256);
        if ($res == 1) {
            return true;
        }
        return false;
    }
    // 解密获取参数
    private function decryptGetParrm($associatedData, $nonceStr, $ciphertext){
        $aes = new AesUtil($this->config['api_key']);
        $param_obj = $aes->decryptToString($associatedData,$nonceStr,$ciphertext);
        $params = json_decode($param_obj,true);
        return $params;
    }
    public function getRandomStr($len, $special=false){
        $chars = array(
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
            "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
            "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
            "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
            "3", "4", "5", "6", "7", "8", "9"
        );

        if($special){
            $chars = array_merge($chars, array(
                "!", "@", "#", "$", "?", "|", "{", "/", ":", ";",
                "%", "^", "&", "*", "(", ")", "-", "_", "[", "]",
                "}", "<", ">", "~", "+", "=", ",", "."
            ));
        }

        $charsLen = count($chars) - 1;
        shuffle($chars);                            //打乱数组顺序
        $str = '';
        for($i=0; $i<$len; $i++){
            $str .= $chars[mt_rand(0, $charsLen)];    //随机取出一位
        }
        return $str;
    }
    // 回调日志
    private function setLog($data){
        $time = time();
        // 拼接时间目录写入日志
        $log_path = dirname(__DIR__) . '/log/wechat/';
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