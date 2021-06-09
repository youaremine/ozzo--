<?php


namespace crmeb\payment\stripe\sdk;

require(__DIR__ . '/vendor/autoload.php');
require(__DIR__.'/StripeConfig.php');

class Stripe
{
    // tips : html key 和這裏的key 不同
    public $stripe_test_key = 'sk_test_51IBweYKfjMsC8JpVz6GDo5KWc9OrKQx1nJx1xQhndcLcQ7nPBdH0VMHfYABSxofUPjLTB2OH5PHUvNQZjngMEMn9007tcNpG4X';
    public $stripe_live_key = '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';
    public $mode = '2';
    public $host_name = 'http://hklive.ozzotec.com/';

    public function create_session($goods,$order_no){
        $key = $this->mode == 'line' ? $this->stripe_live_key : $this->stripe_test_key;
        \Stripe\Stripe::setApiKey($key);

        $images = $this->get_images_url($goods->img_url);
        $checkout_session = \Stripe\Checkout\Session::create([
            'payment_method_types' =>  ['card','alipay'],
            'client_reference_id'=>$order_no,
            'line_items' => [[
                'price_data' => [
                    'currency' => 'hkd',
                    'unit_amount' => 10 * 100,
                    'product_data' => [
                        'name' => 'pi',
                        'images' => ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3d3bbb5626df7c0a52b0e665eea40a45dde19b051b795-9m8Sul_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625801869&t=baa283e8927929fdde19488b01fde684','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fac-r.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F175%2F17552265.jpg&refer=http%3A%2F%2Fac-r.static.booking.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625801891&t=fde330d97f1737ceda7416fec67a6247'],
                    ],
                ],
                'quantity' => 1,
            ]],
            'locale'=>'zh-HK',
            'mode' => 'payment',
            'success_url' =>  'http://www.baidu.com',
            'cancel_url' => 'http://www.baidu.com',
        ]);
        var_dump($checkout_session->id);
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
     * stripe 回调
     * */
    public function notice(){
        // 验签成功 支付成功逻辑
        event('pay_success_order', ['order_sn' => '', 'data' => '']);
    }
    // 回调日志
    private function setLog($data){
        $time = time();
        // 拼接时间目录写入日志
        $log_path = dirname(__DIR__) . '/log/stripe/';
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
(new Stripe)->create_session(['img_url'=>'https://img0.baidu.com/it/u=2567670815,24101428&fm=26&fmt=auto&gp=0.jpg'],'wx'.time());