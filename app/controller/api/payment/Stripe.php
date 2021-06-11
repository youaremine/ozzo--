<?php


namespace app\controller\api\payment;
use think\facade\View;

use crmeb\basic\BaseController;
class Stripe extends  BaseController
{
    // stripe 支付 webview
   public function pay(){
       $data = $this->request->param();
       if(empty($data['session_id'])){
           echo '參數錯誤';
           exit;
       }
       View::assign('session_id',$data['session_id']);
       return View::fetch('index',[
           'session_id' => $data['session_id']
       ]);
   }
    // stripe 支付回調跳轉app 頁面
    public function redirectNotice(){
        $data = $this->request->param();
        return View::fetch('stripe_notice',[
            'order_id' => $data['order_id'],
            'notice_type' => $data['notice_type'],
        ]);
    }
}