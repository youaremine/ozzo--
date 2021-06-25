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


namespace crmeb\listens;


use app\common\repositories\system\sms\SmsRecordRepository;
use crmeb\interfaces\ListenerInterface;
use crmeb\services\TimerService;
use crmeb\services\YunxinSmsService;
use Swoole\Timer;

class SyncSmsResultCodeListen extends TimerService implements ListenerInterface
{

    public function handle($event): void
    {
        $this->tick(1000 * 60 * 5, function () {
            $smsRecordRepository = app()->make(SmsRecordRepository::class);
            $time = date('Y-m-d H:i:s', strtotime("- 10 minutes"));
            $ids = $smsRecordRepository->getTimeOutIds($time);
            if (count($ids)) return;
            $list = (array)YunxinSmsService::create()->getStatus($ids);
            foreach ($list as $item) {
                if (isset($item['id'])) {
                    if ($item['resultcode'] == '' || $item['resultcode'] == null) $item['resultcode'] = 134;
                    $smsRecordRepository->updateRecordStatus($item['id'], $item['resultcode']);
                }
            }
        });
    }
}
