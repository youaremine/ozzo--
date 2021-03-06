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


namespace crmeb\jobs;


use crmeb\interfaces\JobInterface;
use think\facade\Log;
use think\queue\Job;
use app\common\repositories\store\product\ProductRepository;

class UserHistoryJob implements JobInterface
{

    public function fire($job, $data)
    {
        try{
            app()->make(ProductRepository::class)->checkProductByExtension();
            $job->delete();
        }catch (\Exception $exception){
            Log::info(var_export($exception, 1));
        }
    }

    public function failed($data)
    {
        // TODO: Implement failed() method.
    }
}
