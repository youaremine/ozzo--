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
namespace app\controller\admin\system\financial;

use app\common\repositories\system\financial\FinancialRepository;
use crmeb\basic\BaseController;
use think\App;

class Financial extends BaseController
{
    public $repository;

    public function __construct(App $app, FinancialRepository $repository)
    {
        parent::__construct($app);
        $this->repository = $repository;
    }


    public function lst()
    {
        [$page, $limit] = $this->getPage();
        $where = $this->request->params(['date','status','financial_type','financial_status','keyword','is_trader','mer_id']);
        $data = $this->repository->getAdminList($where,$page,$limit);
        return app('json')->success($data);
    }

    /**
     * TODO
     * @param $id
     * @return \think\response\Json
     * @author Qinii
     * @day 3/19/21
     */
    public function detail($id)
    {
        $data = $this->repository->detail($id);
        return app('json')->success($data);
    }

    /**
     * TODO 审核
     * @param $id
     * @return \think\response\Json
     * @author Qinii
     * @day 3/19/21
     */
    public function switchStatus($id)
    {
        $data = $this->request->params(['status', 'refusal']);
        $data['status_time'] = date('Y-m-d H:i:s');
        if (($data['status'] == -1)){
            if(empty($data['refusal'])) return app('json')->fail('请输入拒绝理由');
            $this->repository->cancel(null,$id,$data);
        }else{
            $this->repository->update($id,['status' => $data['status'],'status_time' => $data['status_time']]);
        }
        return app('json')->success('审核完成');
    }

    /**
     * TODO 修改凭证
     * @param $id
     * @return \think\response\Json
     * @author Qinii
     * @day 3/19/21
     */
    public function update($id)
    {
        $image = $this->request->param('image');
        if(empty($image)) return app('json')->fail('请上传凭证');
        $res = $this->repository->get($id);
        if($res['status'] != 1) return app('json')->success('申请未通过审核');
        $data['image'] = implode(',',$image);
        $data['admin_id'] = $this->request->adminId();
        $data['update_time'] = date('Y-m-d H:i:s');
        $data['financial_status'] = 1;
        $this->repository->update($id,$data);
        return app('json')->success('修改完成');
    }

    public function markForm($id)
    {
        return app('json')->success(formToData($this->repository->adminMarkForm($id)));
    }

    public function mark($id)
    {
        $ret = $this->repository->getWhere([$this->repository->getPk() => $id]);

        if(!$ret) return app('json')->fail('数据不存在');
        $data = $this->request->params(['admin_mark']);
        $this->repository->update($id,$data);

        return app('json')->success('备注成功');
    }

    /**
     * TODO 头部统计
     * @return \think\response\Json
     * @author Qinii
     * @day 4/22/21
     */
    public function title()
    {
        $ret = $this->repository->getTitle();
        return app('json')->success($ret);
    }
}
