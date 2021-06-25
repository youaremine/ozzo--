<?php


namespace app\controller\api\payment;
use app\common\repositories\store\order\StoreGroupOrderRepository;
use app\common\repositories\store\order\StoreOrderRepository;
use app\common\repositories\store\service\StoreServiceLogRepository;
use crmeb\basic\BaseController;
use crmeb\payment\tapgo\TapGo as TapgoSdk;
use crmeb\services\SwooleTaskService;
use think\exception\ValidateException;
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
//        if(isset($this->request->param()['order_sn'])){
//            $merTradeNo = $this->request->param()['order_sn'];
//        }
//            $tapgo = new TapgoSdk();
//            $res = $tapgo->orderStatus($merTradeNo);
//            if($res){
//                event('pay_success_order', ['order_sn' => $merTradeNo]);
//                return true;
//            }else{
//                return false;
//            }
        $text = '910';
//        $id = Db::table('shop_store_service_log')->insert([
//            'mer_id' => 77,
//            'msn' => $text,
//            'uid' => '1',
//            'service_id' => '17',
//            "create_time" => "2021-06-22 17:50:43",
//            'type' => 1,
//            'send_type' => '0',
//            'msn_type' => 5,
//        ],false,true);

        $data = [
            'msn' => $text,
            'msn_type' => 5,
            'mer_id'=> 77,
            'uid' => 1,
            "service_id" =>17,
            "send_type" => 0,
//            'service_log_id' => (string)'',
//            "create_time" => "2021-06-22 17:50:43",
            "service" => [
                "service_id" =>  17,
                "avatar" => "/static/images/f.png",
                "nickname"=>  "M"
            ],
            'type' => 0,
            'service_type' => 0,
        ];
        $storeServiceLogRepository = app()->make(StoreServiceLogRepository::class);
//        try {
//            $storeServiceLogRepository->checkMsn($data['mer_id'], $frame->uid, $data['msn_type'], $data['msn']);
//        } catch (ValidateException $e) {
//            return app('json')->message('err_tip', $e->getMessage());
//        }
        $log = $storeServiceLogRepository->create($data);
        $storeServiceLogRepository->getSendData($log);
        $storeServiceLogRepository->userToChat($data['uid'], $data['mer_id']);
        $log->user;
        $log = $log->toArray();
//        Db::table('shop_text')->insert(['text' => json_encode($log)]);
        SwooleTaskService::chatToUser([
            'uid' => '1',
            'data' => $log,
            'except' => []
        ]);
        SwooleTaskService::chatToService([
            'uid' => '2',
            'data' => $log,
            'except' => []
        ]);
    }
}