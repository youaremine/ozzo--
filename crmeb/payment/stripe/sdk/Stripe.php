<?php


namespace crmeb\payment\stripe\sdk;
use think\facade\Db;

require(__DIR__ . '/vendor/autoload.php');

class Stripe
{
    // tips : html key 和這裏的key 不同
    public $stripe_test_key = 'sk_test_51IBweYKfjMsC8JpVz6GDo5KWc9OrKQx1nJx1xQhndcLcQ7nPBdH0VMHfYABSxofUPjLTB2OH5PHUvNQZjngMEMn9007tcNpG4X';
    public $stripe_live_key = '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';
    public $mode = 'test';
    public $host_name = 'http://hklive.ozzotec.com/';
    protected $stripe_endpoint_secret_test = 'whsec_5gBUevqVZTXBcX45wXhYLwQ8LbAiGqcw';
    protected $stripe_endpoint_secret_live = 'whsec_7A2Hxo147REXNzST8vun8taLNhPNLpxw';

    public function create_session($goods,$groupOrder){
        $key = $this->mode == 'live' ? $this->stripe_live_key : $this->stripe_test_key;
        \Stripe\Stripe::setApiKey($key);
//        $images = $this->get_images_url($goods->img_url);
        $checkout_session = \Stripe\Checkout\Session::create([
            'payment_method_types' =>  ['card'],//['card','alipay'],
            'client_reference_id'=> $groupOrder['group_order_sn'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'hkd',
                    'unit_amount' => $groupOrder['pay_price'] * 100,
                    'product_data' => [
                        'name' => 'ozzo',
                        'images' => ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625816070&t=6d670a7f118370c567a6deb3e2eb2323','https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625816070&t=7c5247126bfc8f66f53754ae09ddc500','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx2.sinaimg.cn%2Flarge%2F008fHVgdly4gqfhfts4vrj30u00ji75u.jpg&refer=http%3A%2F%2Fwx2.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625816070&t=45ab1b0af8c5cbc81df1973cb5862678'],
                    ],
                ],
                'quantity' => 1,
            ]],
            'locale'=>'zh-HK',
            'mode' => 'payment',
            'success_url' =>  'https://hklive.ozzotec.com/api/stripe/redirect?notice_type=success&order_id='.$groupOrder['group_order_id'],
            'cancel_url' => 'https://hklive.ozzotec.com/api/stripe/redirect?notice_type=cancel&order_id='.$groupOrder['group_order_id'],
        ]);
        return $checkout_session->id;
    }
    /**
     * 获取商品图片
     * */
    public function get_images_url($goods_img_str){
        $goods_url_arr = explode(',',$goods_img_str);
        foreach($goods_url_arr as &$v){
            $v = $this->host_name.$v;
        }

        return $goods_url_arr;
    }
    /**
     * stripe 支付成功回调
     * */
    public function notice($header,$notifyData){
        // 请求头的签名
        $stripe_signature = $header['stripe-signature'];
        $endpoint_secret = $this->stripe_endpoint_secret_test;
        $event = null;
        try {
            // 驗證是否為stripe回調
            $event = \Stripe\Webhook::constructEvent(
                $notifyData,$stripe_signature,$endpoint_secret
            );
        } catch(\UnexpectedValueException $e) {
            // Invalid payload
            $this->setLog('\UnexpectedValueException http_response_code 400'.json_encode($e->getMessage()));
//            http_response_code(400);
            throw new ValidateException('UnexpectedValueException 系统错误');
        } catch(\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            $this->setLog('\SignatureVerificationException http_response_code 400 '.json_encode($e->getMessage()));
//            http_response_code(400);
            throw new ValidateException('驗簽失敗');
        }
        switch ($event->type) {
            // 支付成功
            case 'payment_intent.succeeded':
                $this->setLog('payment_intent.succeeded');
                $paymentIntent = $event->data->object; // contains a \Stripe\PaymentIntent
                $this->checkout_payment_success_notice($paymentIntent);
                break;
            default:
//                echo 'Received unknown event type ' . $event->type;
                $this->setLog('Received unknown event type' . json_encode($event->type));
        }
    }
    // checkout.payment.success
    private function checkout_payment_success_notice($object){
        // 獲取訂單號
        $order_sn = Db::table('shop_store_stripe_order')->where('stripe_payment_intent',$object->id)->field('group_order_sn')->find();
        $order_sn = $order_sn['group_order_sn'];
        // 判斷訂單號 狀態 金額
        $this->setLog('$object->id'.$object->id);
        $this->setLog('$order_sn2'. json_encode($order_sn));
        $this->setLog('$object status:'. $object->status);
        $this->setLog('$object amount:'. $object->amount);
        $this->setLog('$order_sn'. $order_sn);
        if(!empty($object) && $object->status == 'succeeded' && !empty($order_sn) && $object->amount > 0){
            $orderInfo = Db::table('shop_store_group_order')->where('group_order_sn',$order_sn)->where('paid',0)->field('pay_price')->find();
            // 1.判斷未支付訂單是否存在 金額是否一樣
            if(isset($orderInfo['pay_price']) && $orderInfo['pay_price'] * 100 == $object->amount){
                // 2. 支付成功邏輯
                $this->setLog('check_payment_success :'. $order_sn);
                event('pay_success_order', ['order_sn' => $order_sn]);
            }else{
                $this->setLog('order info not eq');
            }
        }else{
            $this->setLog('checkout_payment_success_notice param fail');
        }
    }
    // 回调日志
    private function setLog($data){
        $time = time();
        // 拼接时间目录写入日志
        $log_path = dirname(dirname(__DIR__)) . '/log/stripe/';
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
    public function getPaymentIntend($session_id){
        $key = $this->mode == 'live' ? $this->stripe_live_key : $this->stripe_test_key;
        \Stripe\Stripe::setApiKey($key);
        $session = \Stripe\Checkout\Session::retrieve($session_id);
        return  $session['payment_intent'];
    }
}