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


namespace app\controller\api\store\product;


use crmeb\basic\BaseController;
use app\common\repositories\store\coupon\StoreCouponProductRepository;
use app\common\repositories\store\coupon\StoreCouponRepository;
use app\common\repositories\store\coupon\StoreCouponUserRepository;
use app\common\repositories\store\product\ProductRepository;
use think\App;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;

/**
 * Class StoreCoupon
 * @package app\controller\api\store\product
 * @author xaboy
 * @day 2020/6/1
 */
class StoreCoupon extends BaseController
{
    /**
     * @var
     */
    protected $uid;

    /**
     * StoreCoupon constructor.
     * @param App $app
     */
    public function __construct(App $app)
    {
        parent::__construct($app);
        if ($this->request->isLogin()) $this->uid = $this->request->uid();
    }

    /**
     * @param StoreCouponUserRepository $repository
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020/6/3
     */
    public function lst(StoreCouponUserRepository $repository)
    {
        [$page, $limit] = $this->getPage();
        $where = $this->request->params(['statusTag']);
        $where['uid'] = $this->uid;
        return app('json')->success($repository->userList($where, $page, $limit));
    }

    /**
     * @param StoreCouponRepository $repository
     * @param StoreCouponProductRepository $couponProductRepository
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020/6/1
     */
    public function coupon(StoreCouponRepository $repository, StoreCouponProductRepository $couponProductRepository)
    {
        $ids = array_filter(explode(',', $this->request->param('ids')));
        if (!count($ids))
            return app('json')->success([]);
        $productCouponIds = $couponProductRepository->productByCouponId($ids);
        $productCoupon = count($productCouponIds) ? $repository->validProductCoupon($productCouponIds, $this->uid)->toArray() : [];
        return app('json')->success($productCoupon);
    }

    /**
     * @param $id
     * @param StoreCouponRepository $repository
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020/6/1
     */
    public function merCoupon($id, StoreCouponRepository $repository)
    {
        $all = (int)$this->request->param('all');
        $coupon = $repository->validMerCoupon($id, $this->uid, $all === 1 ? null : 0)->toArray();
        return app('json')->success($coupon);
    }

    /**
     * @param $id
     * @param StoreCouponRepository $repository
     * @return mixed
     * @author xaboy
     * @day 2020/6/1
     */
    public function receiveCoupon($id, StoreCouponRepository $repository)
    {
        if (!$repository->exists($id))
            return app('json')->fail('优惠券不存在');
        try {
            $repository->receiveCoupon($id, $this->uid);
        } catch (\Exception $e) {
            return app('json')->fail('优惠券已被领完');
        }
        return app('json')->success('领取成功');
    }
}