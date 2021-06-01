<?php


namespace crmeb\payment\weichat;


class Wechat
{
    private $config = [];
    private $notify_url = 'https://www.weixin.qq.com/wxpay/pay.php';// 回調地址
    private $order_placement_url = 'https://api.mch.weixin.qq.com/hk/v3/transactions/app'; // Order Placement API

    public function __construct()
    {
        $config = include('Config.php');
        $this->config = $config;
    }

    public function getPrepayId($out_trade_no = 'wx892156904',$mchid,$appid,$description,$notify_url,$trade_type,$merchant_category_code,$amount = []){
        $payload = [
            'mchid' => $mchid,
            'appid' => $appid,
            'description' => $description,
            'notify_url' => $this->notify_url,
            'out_trade_no' => $out_trade_no,
            'trade_type' => 'APP',
        ];
        $res = httpRequest($payload);
        return $res;
    }
    public function unificationOrder($out_trade_no,$description, $total,$currency = 'HKD'){
        $noncestr = 'abcerteqwdssdsazx';
        $timestamp = time();
        $notify_url = $this->notify_url;
        $prepayid = $this->getPrepayId($out_trade_no,$description, $total,$currency);
        $str = 'appid=' . $this->config['appid'] .
            '&partnerid=' . $this->config['partnerid'] .
            '&prepayid=' .$this->getPrepayId() .
            '&package=' . 'Sign=WXPay' .
            '&noncestr=' . $noncestr .
            '&timestamp-' . $timestamp;
        $sign_tmp = $str . '&key=' . $this->config['apikey'];
        $sign = $this->getSign($sign_tmp);
        $onderInfo = [
            'appid' => $this->config['appid'],
            'noncestr' => $noncestr,
            'package' => 'Sign=WXPay',
            'partnerid' => $this->config['partnerid'],
            'prepayid' => $prepayid,
            'timestamp' => $timestamp,
            'sign' => $sign,
        ];
        return $onderInfo;
    }
    public function randomStr(){
        return 'abc123';
    }
    public function getSign($str){
        return md5($str);
    }

}