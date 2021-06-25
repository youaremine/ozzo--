<?php

// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace crmeb\services;

use app\common\repositories\store\order\StoreImportDeliveryRepository;
use app\common\repositories\store\order\StoreOrderRepository;
use app\common\repositories\store\ExcelRepository;
use app\common\repositories\store\order\StoreRefundOrderRepository;
use app\common\repositories\system\merchant\FinancialRecordRepository;
use think\Exception;
use think\facade\Db;

class ExcelService
{

    public function getAll($data)
    {
        $this->{$data['type']}($data['where'],$data['excel_id']);
    }

    /**
     * TODO 导出操作
     * @param $id
     * @param $path
     * @param $header
     * @param $title
     * @param array $export
     * @param string $filename
     * @param array $end
     * @param string $suffix
     * @author Qinii
     * @day 3/17/21
     */
    public function export($id, $path, $header, $title, $export = [], $filename = '',$end = [],$suffix = 'xlsx')
    {
        try{
            $_path = SpreadsheetExcelService::instance()
                ->createOrActive()
                ->setExcelHeader($header,count($title['mark']) + 2)
                ->setExcelTile($title)
                ->setExcelContent($export)
                ->setExcelEnd($end)
                ->excelSave($filename, $suffix, $path);

            app()->make(ExcelRepository::class)->update($id,[
                'name' => $filename.'.'.$suffix,
                'status' => 1,
                'path' => '/'.$_path
            ]);
        }catch (Exception $exception){
            app()->make(ExcelRepository::class)->update($id,[
                'name' => $filename.'.'.$suffix,
                'status' => 2,
                'message' => $exception->getMessage()
            ]);
        }
    }

    /**
     * TODO 导出订单
     * @param array $where
     * @param int $id
     * @author Qinii
     * @day 2020-08-10
     */
    public function order(array $where,int $id)
    {
        $make = app()->make(StoreOrderRepository::class);
        $status = $where['status'];
        $del = $where['mer_id'] > 0 ? 0 : null;
        unset($where['status']);
        $query = $make->search($where,$del)->where($make->getOrderType($status))->order('order_id ASC');
        $list = $query->with([
            'orderProduct',
            'merchant' => function ($query) {return $query->field('mer_id,mer_name');},
            'user.spread'
            ])->select()->each(function($item){
                $item['refund_price'] = app()->make(StoreRefundOrderRepository::class)->refundPirceByOrder([$item['order_id']]);
            return $item;
            });

        $header = ['序号','订单编号','订单类型','推广人','用户信息', '商品名称','商品规格','单商品总数','商品价格(元)','优惠','实付邮费(元)','实付金额(元)','已退款金额(元)', '收货人','收货人电话','收货地址','物流单号','下单时间','支付方式','支付状态','商家备注'];
        $title = [
            'title' => '订单列表',
            'sheets' => '订单信息',
            'mark' => ['生成时间:' . date('Y-m-d H:i:s',time())],
        ];

        $export = $this->orderList($list->toArray());

        $filename = '订单列表_'.date('YmdHis');
        $end = [];
        return $this->export($id, 'order', $header, $title, $export,$filename, $end);
    }

    /**
     * TODO 整理订单信息
     * @param array $data
     * @return array
     * @author Qinii
     * @day 2020-08-10
     */
    public function orderList(array $data)
    {
        $result = [];
        if(empty($data)) return $result;
        $i = 1;
        foreach ($data as $item){
            foreach ($item['orderProduct'] as $key => $value){
                $result[] = [
                    $i,
                    $item['order_sn'],
                    $item['order_type'] ? '核销订单':'普通订单',
                    $item['user']['spread']['nickname'],
                    $item['user']['nickname'],
                    $value['cart_info']['product']['store_name'],
                    $value['cart_info']['productAttr']['sku'],
                    $value['product_num'],
                    $value['cart_info']['productAttr']['price'],
                    ($key == 0 ) ? $item['coupon_price'] : 0,
                    ($key == 0 ) ? $item['pay_postage'] : 0,
                    $value['product_price'],
                    ($key == 0 ) ? $item['refund_price'] : 0,
                    $item['real_name'],
                    $item['user_phone'],
                    $item['user_address'],
                    $item['delivery_id'],
                    $item['create_time'],
                    $item['pay_type'] ? '微信': '余额',
                    $item['paid'] ? '已支付':'未支付',
                    $item['remark']
                ];
                $i++;
            }
        }
        return $result;
    }

    /**
     * TODO 流水记录导出
     * @param array $where
     * @param int $id
     * @author Qinii
     * @day 2020-08-10
     */
    public function financial(array $where,int $id)
    {
        $_key = [
            'mer_accoubts' => '财务对账',
            'sys_accoubts' => '财务对账',
            'refund_order' => '退款订单',
            'brokerage_one' => '一级分佣',
            'brokerage_two' => '二级分佣',
            'refund_brokerage_one' => '返还一级分佣',
            'refund_brokerage_two' => '返还二级分佣',
            'order' => '订单支付',
        ];
        $make = app()->make(FinancialRecordRepository::class);
        $query = $make->search($where)->with(['merchant']);
        $list = $query->select()->toArray();

        $header = ['序号','商户名称','交易流水单号','订单号','用户名','用户ID','交易类型','收入/支出','金额','创建时间'];
        $title = [
            'title' => '流水列表',
            'sheets' => '流水信息',
            'mark' => ['生成时间:' . date('Y-m-d H:i:s',time())],
        ];


        $export = [];
        foreach ($list as $k => $v){
            $export[]=[
                $k + 1,
                $v['merchant']['mer_name'],
                $v['financial_record_sn'],
                $v['order_sn'],
                $v['user_info'],
                $v['user_id'],
                $_key[$v['financial_type']],
                $v['financial_pm'] ? '收入' : '支出',
                ($v['financial_pm'] ? '+ ' : '- ') . $v['number'],
                $v['create_time'],
            ];
        }

        $filename = '流水列表_'.date('YmdHis');

        return $this->export($id,'financial',$header,$title,$export,$filename,[],'xlsx');
    }


    /**
     * TODO 获取待发货订单 发货信息
     * @param array $where
     * @param int $id
     * @author Qinii
     * @day 3/13/21
     */
    public function delivery(array $where,int $id)
    {
        $make = app()->make(StoreOrderRepository::class);
        $list = $make->search($where)->where('order_type',0)->with(['orderProduct'])->order('order_id ASC')->select();
        $header =    ['序号','订单编号','物流公司','物流编码','物流单号', '发货地址','用户信息','手机号','商品信息','支付时间'];
        $title = [
            'title' => '批量发货单',
            'sheets' => '发货信息',
            'mark' => ['生成时间:' . date('Y-m-d H:i:s',time())],
        ];
        $filename = '批量发货单_'.date('YmdHis');
        $export = [];
        if($list){
            $data = $list->toArray();
            foreach ($data as $key => $item){
                $product = '';
                foreach ($item['orderProduct'] as $value){
                    $product = $product.$value['cart_info']['product']['store_name'].'【'. $value['cart_info']['productAttr']['sku'] .'】【' . $value['product_num'].'】'.PHP_EOL;
                }
                $export[] = [
                    $key + 1,
                    $item['order_sn'] ?? '',
                    '',
                    $item['delivery_name']??"",
                    $item['delivery_id']??"",
                    $item['user_address']??"",
                    $item['real_name'] ?? '',
                    $item['user_phone'] ?? '',
                    $product,
                    $item['pay_time'] ?? '',
                ];
            }
        }
        $end = [];
        return $this->export($id,'delivery',$header,$title,$export,$filename,$end);
    }

    /**
     * TODO 导出 发货导入记录
     * @param array $where
     * @param int $id
     * @author Qinii
     * @day 3/17/21
     */
    public function importDelivery(array $where,int $id)
    {
        $make = app()->make(StoreImportDeliveryRepository::class);
        $list = $make->getSearch($where)->order('create_time ASC')->select();
        $title = [
            'title' => '发货记录',
            'sheets' => '发货信息',
            'mark' => [
                '生成时间:' . date('Y-m-d H:i:s',time())
            ],
        ];
        $header = ['序号','订单编号','物流公司','物流单号', '发货状态','备注'];
        $filename = '发货单记录_'.date('YmdHis');
        $export = [];
        if($list){
            $data = $list->toArray();
            foreach ($data as $key => $item){
                $export[] = [
                    $key + 2,
                    $item['order_sn'],
                    $item['delivery_name'],
                    $item['delivery_id'],
                    $item['status'],
                    $item['mark'],
                ];
            }
        }
        $end = [];
        return $this->export($id,'delivery',$header,$title,$export,$filename,$end);
    }


    /**
     * TODO 平台/商户 导出日月账单信息
     * @param array $where
     * @param int $id
     * @author Qinii
     * @day 3/25/21
     */
    public function exportFinancial(array $where,int $id)
    {
        /*
           order 收入 公共 新订单
           brokerage_one 支出 公共 一级佣金
           brokerage_two 支出 公共 二级佣金
           order_charge 支出 商户 手续费
           order_true 支出 平台 商户入账
           refund_order 支出 公共 退款
           refund_brokerage_one 收入 公共 返还一级佣金
           refund_brokerage_two 收入 公共 返还二级佣金
           refund_charge 收入 商户 返还手续费
           refund_true 收入 平台 商户返还入账
           presell 收入 公共 新订单
           presell_charge 支出 商户 手续费
           presell_true 支出 平台 商户入账
        */
        $financialType = [
            'order'         => '订单支付',
            'presell'       => '预售订单（尾款）',
            'brokerage_one' => '一级佣金',
            'brokerage_two' => '二级佣金',
            'order_charge'  => '手续费',
            'order_true'    => '商户入账',
            'refund_order'  => '退款',
            'refund_charge' => '返还手续费',
            'refund_true'   => '商户返还入账',
            'presell_charge'=> '预售订单（手续费）',
            'presell_true'  => '商户入账',
            'refund_brokerage_one' => '返还一级佣金',
            'refund_brokerage_two' => '返还二级佣金',
            'mer_presell'   => '预售订单（总额）',
            'order_presell'   => '预售订单（定金）'
        ];
        $sys_pm_1 = ['order','presell','order_charge','order_presell','presell_charge','refund_brokerage_one','refund_brokerage_two'];
        $mer_pm_1 = ['order','presell','refund_charge','refund_brokerage_one','refund_brokerage_two','mer_presell'];
        $date_ = $where['date'];unset($where['date']);
        $make = app()->make(FinancialRecordRepository::class);

        $query = $make->search($where)->with(['orderInfo','refundOrder','merchant.merchantCategory']);

        if($where['type'] == 1){
            $title_ = '日账单';
            $start_date = $date_.' 00:00:00';
            $end_date = $date_.' 23:59:59';
            $query->whereDay('create_time',$date_);
        }else{
            $title_ = '月账单';
            $start_date = (date('Y-m-01', strtotime($date_)));
            $end_date = date('Y-m-d', strtotime("$start_date +1 month -1 day"));
            $query->whereMonth('create_time',$date_);
        }

        $list = $query->order('create_time DESC')->select();

        $income = $make->countIncome($where['type'],$where,$date_);
        $expend = $make->countExpend($where['type'],$where,$date_);
        $refund = $make->countRefund($where['type'],$where,$date_);
//        $charge = $make->countCharge($where['type'],$where,$date_);
        $charge = bcsub($income['number'],$expend['number'],2);
        $filename = $title_.'('.$date_.')'.time();
        $title = [];
        $header = [];
        $export = [];
        $end = [];
        //平台
        if(!$where['is_mer']){
            $header = ['序号','商户类别','商户分类','商户名称','订单编号','交易流水号','交易时间', '对方信息','交易类型','收支金额','备注'];
            foreach ($list as $key => $value){
                $export[] = [
                    $key + 1,
                    $value['merchant']['is_trader'] ? '自营' : '非自营',
                    $value['merchant']['merchantCategory']['category_name'] ?? '平台',
                    $value['merchant']['mer_name'] ?? '平台',
                    $value['order_sn'],
                    $value['financial_record_sn'],
                    $value['create_time'],
                    $value['user_info'],
                    $financialType[$value['financial_type']],
                    (in_array($value['financial_type'],$sys_pm_1) ? '+' : '-') . $value['number'],
                    ''
                ];
            }
            $end = [
                '合计：平台应入账手续费 '.$charge,
                '收入合计： '.'订单支付'.$income['count'].'笔,'.'实际支付金额共:'.$income['number'].'元;',
                '支出合计： '.'佣金支出'.$expend['count_brokerage'].'笔,支出金额：'.$expend['number_brokerage'].'元；商户入账支出'.$expend['count_order'].'笔，支出金额：'.$expend['number_order'].'元；退款手续费'.$expend['count_charge'].'笔，支出金额'.$expend['number_charge'].'元；合计支出'.$expend['number'],
            ];
         //商户
        }else{
            $header = ['序号','订单编号','交易流水号','交易时间', '对方信息','交易类型','收支金额','备注'];
            $mer_name = '';
            foreach ($list as $key => $value){
                $export[] = [
                    $key + 1,
                    $value['order_sn'],
                    $value['financial_record_sn'],
                    $value['create_time'],
                    $value['user_info'],
                    $financialType[$value['financial_type']],
                    (in_array($value['financial_type'],$mer_pm_1) ? '+' : '-') . $value['number'],
                    ''
                ];
                $mer_name = $mer_name ? $mer_name : ($value['merchant']['mer_name'] ?? '');
            }
            $count_brokeage = $expend['count_brokerage'] + $expend['count_refund_brokerage'];
            $number_brokeage = bcsub($expend['number_brokerage'],$expend['number_refund_brokerage'],2);
            $count_charge = $expend['count_charge']+$expend['count_order_charge'];
            $number_charge = bcsub($expend['number_order_charge'],$expend['number_charge'],2);
            $end = [
                '合计：商户应入金额 '.$charge,
                '收入合计： '.'订单支付'.$income['count'].'笔,'.'实际支付金额共:'.$income['number'].'元;',
                '支出合计： '.'佣金支出'.$count_brokeage.'笔,支出金额：'.$number_brokeage.'元；退款'.$expend['count_refund'].'笔，支出金额:'.$expend['number_refund'].'元；平台手续费'.$count_charge.'笔，支出金额：'.$number_charge.'元；合计支出金额：'.$expend['number'].'元；',
                //'商户应入金额 '.$charge,
            ];
            $mer_name = '商户名称:'.$mer_name;
        }

        $title = [
            'title' => $title_,
            'sheets' => $title_.'信息',
            'mark' => [
                $mer_name ?? '平台',
                '结算账期：【' .$start_date.'】至【'.$end_date.'】',
                '生成时间:' . date('Y-m-d H:i:s',time())
            ],
        ];
        return $this->export($id,'financial',$header,$title,$export,$filename,$end);
    }

}
