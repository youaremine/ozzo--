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
        $config = systemConfig(['tap_go_appid', 'tap_go_apikey', 'tap_go_publicKey']);
        $config['tap_go_publicKey'] = root_path() .'public'. $config['tap_go_publicKey'];
        $this->config = $config;
    }

    private function getPublicEncrypt($data){
        $publicKey = openssl_pkey_get_public(file_get_contents($this->config['tap_go_publicKey']));
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
        if(empty($totalPrice) || $totalPrice <= 0) throw Exception('total price param error');

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
        $sign = $this->getSign($this->config['tap_go_appid'],$merTradeNo,$b64_encryptedWithPublic,'S','CR',$this->config['tap_go_apikey']);
        // 3. return data
        $res = $this->postRequest('',
            [
                'appId' => $this->config['tap_go_appid'],
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
            // ?????? schemes ?????????
            $isMatched = preg_match("/'tapngowallet.*?'/", $res, $matches);
            if($isMatched && !empty($matches) && count($matches) == 1){
                $schemes_url = substr($matches[0],1,strlen($matches[0]) - 2);
                return $schemes_url;
            }
        }
        return '';

    }
    public function time(){

    }
    public function postRequest($url = '',$array = []){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,'https://gateway2.tapngo.com.hk/web/payments');

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

        // POST??????

        curl_setopt($ch, CURLOPT_POST, 1);

        // ???post???????????????
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
    // ????????????
    public function paymentStatus($merTradeNo){
        $timestamp = round(microtime(true) * 1000);
        $sign = $this->getStatusSign($this->config['tap_go_appid'],$merTradeNo,$timestamp,$this->config['tap_go_apikey']);
        $pamrmStr = 'appId=' . $this->config['tap_go_appid'] . '&merTradeNo=' . $merTradeNo . '&timestamp=' . $timestamp;
        $pamrmStr = $pamrmStr . '&sign=' . $sign;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,'https://gateway2.tapngo.com.hk/paymentApi/payment/status');

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        // POST??????
        curl_setopt($ch, CURLOPT_POST, 1);

        curl_setopt($ch, CURLOPT_POSTFIELDS,$pamrmStr);
        $output = curl_exec($ch);
        curl_close($ch);
        $is_xml = $this->isXml($output);
        if($is_xml){
            $xml_obj= simplexml_load_string($output);
            $xml_json = json_encode($xml_obj);
            $data_array = json_decode($xml_json,true);
            return $data_array;
        }
        return $output;
    }
    // ???????????? type  1. return  2. notify
//     public function notify($notifyData,$type = 'return'){
//        $this->setLog('tap go notify');
////        if(!in_array($notifyData,$this->notify)){
////            throw new ValidateException('notify error');
////        }
//        if(!isset($notifyData['sign']) || !$this->checkSignSha256($notifyData,$notifyData['sign'],$type)){
//            $this->setLog('?????????????????????');
//            return ;
//        }
//        if(!empty($notifyData) && $notifyData['resultCode'] == 0){
//            if (!in_array($notifyData['tradeStatus'], ['TRADE_FINISHED'])){
//                // ???????????????
//                $this->setLog('pay tradeStatus error : '.json_encode($notifyData['tradeStatus']));
//            }
//            // ??????????????????
//            $this->setLog('pay_success_order'.json_encode($notifyData,JSON_UNESCAPED_UNICODE));
//            event('pay_success_order', ['order_sn' => $notifyData['merTradeNo'], 'data' => $notifyData]);
////            // 1. ??????????????????????????? ??????????????????api????????????
////            $api_res = $this->paymentStatus($notifyData['merTradeNo']);
////            //  2. ??????api ?????????????????????
////            if(isset($api_res['content']['resultCode']) && $api_res['content']['resultCode'] == 0 && isset($api_res['content']['payload']['tradeStatus']) && $api_res['content']['payload']['tradeStatus'] == 'TRADE_FINISHED' && $api_res['content']['payload']['merTradeNo'] == $notifyData['merTradeNo']){
////                // 3. ????????????
////                try {
////                    // 4. ??????????????? ??????????????????
////                    event('pay_success_order', ['order_sn' => $api_res['merTradeNo'], 'data' => $notifyData]);
////                    return true;
////                } catch (\Exception$e) {
////                    $this->setLog('tap go notify error ' . $e->getMessage());
////                }
////            }
//        }
//        return false;
//    }
    public function orderStatus($merTradeNo){
        $api_res = $this->paymentStatus($merTradeNo);
        //  2. ??????api ?????????????????????
        if(isset($api_res['content']['resultCode']) && $api_res['content']['resultCode'] == 0 && isset($api_res['content']['payload']['tradeStatus']) && $api_res['content']['payload']['tradeStatus'] == 'TRADE_FINISHED' && $api_res['content']['payload']['merTradeNo'] == $merTradeNo){
            // 3. ????????????
            try {
                // 4. ??????????????? ??????????????????
                return true;
            } catch (\Exception$e) {
                $this->setLog('tap go notify error ' . $e->getMessage());
                return false;
            }
        }
        return false;
    }
    // ????????????
    public function checkSignHaml_512(){

    }
    // ????????????  1. notify (SHA256 Hex (not SHA256 Base64)) 2. return ()
//    public function checkSignSha256($data,$sign,$type = 'notify'){
//        if(empty($data) || is_array($data) || $sign) return false;
//        ksort($data);
//        $string = '';
//        foreach ($data as $key => $value){
//            if($key == 'sign') continue;
//            $string = $string . $key ."=" . $value . "&";
//        }
//        if($type == 'notify'){
//            $stringKey =  hash_hmac('sha256', $string, $this->config['apiKey'], true);
//        }
//        if($type == 'return'){
//            $stringKey =  base64_encode(hash_hmac('sha256', $string, $this->config['apiKey'], true));
//        }
//        if($stringKey == $sign){
//            return true;
//        }
//        return false;
//    }
    public function isXml($data){
        //?????????????????????????????? xml ??????
        $xml_parser = xml_parser_create();
        $res = xml_parse($xml_parser, $data, true);
        xml_parser_free($xml_parser);
        return $res;
    }
    // ????????????
    private function setLog($data){
        $time = time();
        // ??????????????????????????????
        $log_path = dirname(__DIR__) . '/log/tapgo/';
        $now_date = date('Y-m',$time);
        $path = $log_path . $now_date;
        // ???????????????????????????????????????????????????mkdir????????????????????????
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