<?php


namespace app\controller\api\payment;
use crmeb\basic\BaseController;
use crmeb\payment\tapgo\TapGo as TapgoSdk;

class TapGo extends BaseController
{
    public function orderStatus(){
        if(isset($this->request->param()['order_sn'])){
            $merTradeNo = $this->request->param()['order_sn'];
            $tapgo = new TapgoSdk();
            $res = $tapgo->orderStatus($merTradeNo);
            if($res){
                return app('json')->success('pay ok');
            }else{
                return app('json')->fail('not pay');
            }
        }
    }
}