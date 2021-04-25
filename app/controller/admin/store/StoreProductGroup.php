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
namespace app\controller\admin\store;

use app\common\repositories\store\product\ProductGroupRepository;
use app\common\repositories\store\product\ProductRepository;
use app\validate\merchant\StoreProductAdminValidate as validate;
use crmeb\basic\BaseController;
use crmeb\jobs\ChangeSpuStatusJob;
use crmeb\services\SwooleTaskService;
use think\App;

class StoreProductGroup extends BaseController
{
    protected $repository;

    /**
     * Product constructor.
     * @param App $app
     * @param repository $repository
     */
    public function __construct(App $app, ProductGroupRepository $repository)
    {
        parent::__construct($app);
        $this->repository = $repository;
    }


    public function lst()
    {
        [$page, $limit] = $this->getPage();
        $where = $this->request->params(['product_status','keyword','status','active_type','mer_id','is_trader','level','us_status','star','product_group_id']);
        $data = $this->repository->getAdminList($where,$page,$limit);
        return app('json')->success($data);
    }

    /**
     * TODO 详情
     * @param $id
     * @return mixed
     * @author Qinii
     * @day 2020-10-12
     */
    public function detail($id)
    {
        $data = $this->repository->detail(null,$id);
        return app('json')->success($data);
    }

    /**
     * TODO 获取商品
     * @param $id
     * @return mixed
     * @author Qinii
     * @day 2020-11-02
     */
    public function get($id)
    {
        $data = $this->repository->get($id);
        if(!$data) return app('json')->fail('数据不存在');
        $res = app()->make(ProductRepository::class)->getAdminOneProduct($data['product_id'],$id);
        $res['product_group_id'] = $id;
        if(!$data) return app('json')->fail('数据不存在');
        return app('json')->success($res);
    }

    /**
     * TODO 编辑商品
     * @param $id
     * @param validate $validate
     * @return mixed
     * @author Qinii
     * @day 2020-11-02
     */
    public function update($id,validate $validate)
    {
        $data = $this->checkParams($validate);
        if(!$this->repository->getWhereCount([$this->repository->getPk() => $id]))
            return  app('json')->fail('数据不存在');
        $this->repository->updateProduct($id,$data);
        return app('json')->success('编辑成功');
    }
    public function switchStatus($id)
    {
        $status = $this->request->param('status', 0) == 1 ? 1 : 0;
        if(!$ret = $this->repository->get($id))
            return app('json')->fail('数据不存在');
        $this->repository->update($id, ['status' => $status]);
//        if(!$status) SwooleTaskService::merchant('notice', [
//            'type' => 'product_group',
//            'data' => [
//                'title' => '下架提醒',
//                'message' => '您有一个拼团商品被下架',
//                'id' => $id
//            ]
//        ], $ret->mer_id);
        queue(ChangeSpuStatusJob::class,['id' => $id,'product_type' => 4]);
        return app('json')->success('修改成功');
    }

    public function checkParams(validate $validate)
    {
        $data = $this->request->params(['is_hot','is_best','is_benefit','is_new','store_name','keyword','content','rank','star']);
        $validate->check($data);
        return $data;
    }

    public function productStatus()
    {
        $id = $this->request->param('id');
        if(!$ret = $this->repository->get($id))
            return  app('json')->fail('数据不存在');
        $data = $this->request->params(['status','refusal']);
        if($data['status'] == -1 && empty($data['refusal']))
            return app('json')->fail('请填写拒绝理由');
        if(!is_array($id)) $id = [$id];
        $status = 0;
        if($data['status'] == 1){
            $status = 1;
            $title = '审核结果';
            $message = '审核通过';
            $type = 'product_group_success';
        }
        if($data['status'] == -1){
            $title = '审核结果';
            $message = '审核失败';
            $type = 'product_group_fail';
        }
        if($data['status'] == -2){
            $title = '下架提醒';
            $message = '被下架';
            $type = 'product_group_fail';
        }
        $this->repository->updates($id,['product_status' => $data['status'],'refusal' => $data['refusal'],'status' => $status]);
        SwooleTaskService::merchant('notice', [
            'type' => $type,
            'data' => [
                'title' => $title,
                'message' => '您有一个拼团商品'. $message,
                'id' => $id[0]
            ]
        ], $ret->mer_id);
        foreach ($id as $item){
            queue(ChangeSpuStatusJob::class,['id' => $item,'product_type' => 4]);
        }

        return app('json')->success('操作成功');
    }

    public function updateSort($id)
    {
        $sort = $this->request->param('sort');
        $this->repository->updateSort($id,null,['rank' => $sort]);
        return app('json')->success('修改成功');
    }
}
