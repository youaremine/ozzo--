<?php


namespace crmeb\listens;


use app\common\repositories\store\order\StoreGroupOrderRepository;
use app\common\repositories\store\order\StoreOrderRepository;
use app\common\repositories\store\product\ProductGroupBuyingRepository;
use crmeb\interfaces\ListenerInterface;
use Swoole\Timer;
use think\facade\Log;
use crmeb\payment\tapgo\TapGo;
use think\facade\Db;

class TapgoOrderStatusListen implements ListenerInterface
{
    public function handle($data): void
    {
        $make = app()->make(TapGo::class);
        Timer::tick(1000 * 20, function () use ($make) {
            try {
                $res = Db::table('shop_store_group_order')->where('paid',0)->where('pay_type',7)
                    ->where('create_time','>',date('Y-m-d H:i:s',time() - 15 * 60))->column('group_order_sn');
                if(!empty($res)){
                    foreach ($res as $key => $value){
                        $is_pay = $make->orderStatus($value,true);
                        if($is_pay){
                            $res = app()->event->trigger('pay_success_order', ['order_sn' => $value]);
                        }
                    }
                }
            } catch (\Exception $e) {
                Log::info('自动检查tapgo订单' . date('Y-m-d H:i:s', time()));
            }
        });
    }
}