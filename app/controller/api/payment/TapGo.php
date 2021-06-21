<?php


namespace app\controller\api\payment;
use app\common\repositories\store\order\StoreGroupOrderRepository;
use app\common\repositories\store\order\StoreOrderRepository;
use crmeb\basic\BaseController;
use crmeb\payment\tapgo\TapGo as TapgoSdk;
use think\facade\Db;

class TapGo extends BaseController
{
    public function orderStatus(){
        if(isset($this->request->param()['order_sn'])){
            $merTradeNo = $this->request->param()['order_sn'];
            $tapgo = new TapgoSdk();
            $res = $tapgo->orderStatus($merTradeNo);
            if($res){
                event('pay_success_order', ['order_sn' => $merTradeNo]);
                return app('json')->success('pay ok');
            }else{
                return app('json')->fail('not pay');
            }
        }
    }
    public function test($merTradeNo = ''){
        if(isset($this->request->param()['order_sn'])){
            $merTradeNo = $this->request->param()['order_sn'];
        }
            $tapgo = new TapgoSdk();
            $res = $tapgo->orderStatus($merTradeNo);
            if($res){
                event('pay_success_order', ['order_sn' => $merTradeNo]);
                return true;
            }else{
                return false;
            }
    }
}