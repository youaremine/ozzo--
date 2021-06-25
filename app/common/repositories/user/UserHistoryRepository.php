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

use think\facade\Log;
use app\common\repositories\BaseRepository;
use app\common\dao\user\UserHistoryDao;
use app\common\repositories\store\product\SpuRepository;

class UserHistoryRepository extends BaseRepository
{

    protected $dao;

    /**
     * UserHistoryRepository constructor.
     * @param UserHistoryDao $dao
     */
    public function __construct(UserHistoryDao $dao)
    {
        $this->dao = $dao;
    }

    public function getApiList($page,$limit,$uid,$type)
    {
        $with = [];
        if($type == 1)$with = ['spu'];

        $query = $this->dao->search($uid,$type);
        $query->with($with)->order('update_time DESC');
        $count = $query->count();
        $list = $query->page($page,$limit)->select()->each(function($item){
            if(isset($item['spu']['product_type']) && $item['spu']['product_type'] == 1){
                $item['spu']['stop_time'] = $item->stop_time;
                unset($item['spu']['seckillActive']);
            }
            return $item;
        });
        return compact('count','list');
    }

    public function createOrUpdate(array $data)
    {
        $make = app()->make(SpuRepository::class);
        $where['product_type'] = $data['product_type'];
        switch ($data['product_type']) {
            case 0:
                $where['product_id'] = $data['id'];
                break;
            case 1:
                $where['product_id'] = $data['id'];
                break;
            default:
                $where['activity_id'] = $data['id'];
                break;
        }
        try{
            $ret = $make->getSearch($where)->find();
            if($ret['spu_id']){
                $arr = [
                    'res_type' => $data['res_type'],
                    'res_id'   => $ret['spu_id'],
                    'uid'      => $data['uid']
                ];
                $this->dao->createOrUpdate($arr);
            }
        }catch (\Exception $exception){
            Log::info('浏览记录添加失败，ID：'.$data['id'].'类型：'.$data['product_type']);
        }
    }

    /**
     * TODO 商品推荐列表
     * @param int|null $uid
     * @return array
     * @author Qinii
     * @day 4/9/21
     */
    public function getRecommend(?int $uid)
    {
        $ret = $this->dao->search($uid,1)->with(['spu.product'])->limit(10)->select();
        if(!$ret) return [];
        $i = [];
        foreach ($ret as $item){
            if(isset($item['spu']['product']['cate_id'])) $i[] = $item['spu']['product']['cate_id'];
        }
        if($i) $i = array_unique($i);
        return $i;
    }
}
