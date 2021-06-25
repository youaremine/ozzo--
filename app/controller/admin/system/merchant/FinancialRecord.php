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


namespace app\controller\admin\system\merchant;


use app\common\repositories\store\ExcelRepository;
use app\common\repositories\system\merchant\FinancialRecordRepository;
use crmeb\basic\BaseController;
use think\App;

class FinancialRecord extends BaseController
{
    protected $repository;

    public function __construct(App $app, FinancialRecordRepository $repository)
    {
        parent::__construct($app);
        $this->repository = $repository;
    }

    public function lst()
    {
        [$page, $limit] = $this->getPage();
        $where = $this->request->params(['keyword', 'date', 'mer_id']);
        $merId = $this->request->merId();
        if ($merId) {
            $where['mer_id'] = $merId;
            $where['financial_type'] = ['order', 'mer_accoubts', 'brokerage_one', 'brokerage_two', 'refund_brokerage_one', 'refund_brokerage_two', 'refund_order'];
        } else {
            $where['financial_type'] = ['order', 'sys_accoubts', 'brokerage_one', 'brokerage_two', 'refund_brokerage_one', 'refund_brokerage_two', 'refund_order'];
        }
        return app('json')->success($this->repository->getList($where, $page, $limit));
    }

    public function export()
    {
        $where = $this->request->params(['keyword', 'date', 'mer_id']);
        $merId = $this->request->merId();
        if ($merId) {
            $where['mer_id'] = $merId;
            $where['financial_type'] = ['order', 'mer_accoubts', 'brokerage_one', 'brokerage_two', 'refund_brokerage_one', 'refund_brokerage_two', 'refund_order'];
        } else {
            $where['financial_type'] = ['order', 'sys_accoubts', 'brokerage_one', 'brokerage_two', 'refund_brokerage_one', 'refund_brokerage_two', 'refund_order'];
        }
        app()->make(ExcelRepository::class)->create($where, $this->request->adminId(), 'financial',$merId);
        return app('json')->success('开始导出数据');
    }


    /**
     * TODO 头部统计
     * @return \think\response\Json
     * @author Qinii
     * @day 3/23/21
     */
    public function getTitle()
    {
        $where = $this->request->params(['date']);
        $where['is_mer'] = $this->request->merId() ?? 0 ;
        if($where['is_mer'] == 0){
            $data = $this->repository->getAdminTitle($where);
        }else{
            $data = $this->repository->getMerchantTitle($where);
        }
        return app('json')->success($data);
    }


    /**
     * TODO 列表
     * @return \think\response\Json
     * @author Qinii
     * @day 3/23/21
     */
    public function getList()
    {
        [$page, $limit] = $this->getPage();
        $where = $this->request->params(['type','date']);
        $where['is_mer'] = $this->request->merId() ?? 0 ;
        $data = $this->repository->getAdminList($where,$page, $limit);
        return app('json')->success($data);
    }


    /**
     * TODO 详情
     * @param $type
     * @return \think\response\Json
     * @author Qinii
     * @day 3/23/21
     */
    public function detail($type)
    {
        $date = $this->request->param('date');
        $where['date'] = empty($date) ? date('Y-m-d',time()) : $date ;
        $where['is_mer'] = $this->request->merId() ?? 0 ;
        if($this->request->merId()){
            $data = $this->repository->merDetail($type,$where);
        }else{
            $data = $this->repository->adminDetail($type,$where);
        }

        return app('json')->success($data);
    }

    /**
     * TODO 导出文件
     * @param $type
     * @author Qinii
     * @day 3/25/21
     */
    public function exportDetail($type)
    {
        $date = $this->request->param('date');
        $where['date'] = empty($date) ? date('Y-m-d',time()) : $date ;
        $where['type'] = $type;
        $where['is_mer'] = $this->request->merId() ?? 0 ;
        app()->make(ExcelRepository::class)->create($where, $this->request->adminId(), 'exportFinancial',$where['is_mer']);
        return app('json')->success('开始生成文件');
    }

    /**
     * TODO 流水统计
     * @return \think\response\Json
     * @author Qinii
     * @day 5/7/21
     */
    public function title()
    {
        $where = $this->request->params(['date']);

        $data = $this->repository->getFiniancialTitle($this->request->merId(),$where);
        return app('json')->success($data);
    }

}
