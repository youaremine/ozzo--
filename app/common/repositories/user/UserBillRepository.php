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


namespace app\common\repositories\user;


use app\common\dao\BaseDao;
use app\common\dao\user\UserBillDao;
use app\common\repositories\BaseRepository;
use crmeb\jobs\SendTemplateMessageJob;
use think\facade\Queue;
use think\Model;

/**
 * Class UserBillRepository
 * @package app\common\repositories\user
 * @author xaboy
 * @day 2020-05-07
 * @mixin UserBillDao
 */
class UserBillRepository extends BaseRepository
{
    /**
     * @var UserBillDao
     */
    protected $dao;

    const TYPE_INFO = [
        'presell' => '支付预售尾款',
        'pay_product' => '购买商品',
        'order_one' => '获得一级推广佣金',
        'order_two' => '获得二级推广佣金',
        'refund_one' => '退回一级推广佣金',
        'refund_two' => '退回二级推广佣金',
        'refund' => '商品退款',
        'recharge' => '余额充值',
        'sys_inc_money' => '系统增加余额',
        'sys_dec_money' => '系统减少余额',
        'brokerage' => '佣金转入余额',
    ];

    /**
     * UserBillRepository constructor.
     * @param UserBillDao $dao
     */
    public function __construct(UserBillDao $dao)
    {
        $this->dao = $dao;
    }

    public function userList($where, $uid, $page, $limit)
    {
        $where['uid'] = $uid;
        $query = $this->dao->search($where)->order('create_time DESC');
        $count = $query->count();
        $list = $query->setOption('field', [])->field('bill_id,pm,title,number,balance,mark,create_time,status')->page($page, $limit)->select();
        return compact('count', 'list');
    }

    public function getList($where, $page, $limit)
    {
        $query = $this->dao->searchJoin($where)->order('a.create_time DESC');
        $count = $query->count();
        $list = $query->page($page, $limit)->select();
        return compact('count', 'list');
    }

    /**
     * @param int $uid
     * @param string $category
     * @param string $type
     * @param int $pm
     * @param array $data
     * @return BaseDao|Model
     * @author xaboy
     * @day 2020-05-07
     */
    public function bill(int $uid, string $category, string $type, int $pm, array $data)
    {
        $data['category'] = $category;
        $data['type'] = $type;
        $data['uid'] = $uid;
        $data['pm'] = $pm;
        $bill = $this->dao->create($data);
        if($category == 'now_money'){
            $tempData = ['tempCode' => 'USER_BALANCE_CHANGE','id' => $bill->bill_id];
            Queue::push(SendTemplateMessageJob::class,$tempData);
        }
        return $bill;
    }

    /**
     * @param int $uid
     * @param string $category
     * @param string $type
     * @param array $data
     * @return BaseDao|Model
     * @author xaboy
     * @day 2020-05-07
     */
    public function incBill(int $uid, string $category, string $type, array $data)
    {
        return $this->bill($uid, $category, $type, 1, $data);
    }

    /**
     * @param int $uid
     * @param string $category
     * @param string $type
     * @param array $data
     * @return BaseDao|Model
     * @author xaboy
     * @day 2020-05-07
     */
    public function decBill(int $uid, string $category, string $type, array $data)
    {
        return $this->bill($uid, $category, $type, 0, $data);
    }

    public function type()
    {
        $data = [];
        foreach (self::TYPE_INFO as $type => $title) {
            $data[] = compact('type', 'title');
        }
        return $data;
    }
}
