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


namespace app\common\model\system\notice;


use app\common\model\BaseModel;

/**
 * Class SystemNoticeLog
 * @package app\common\model\system\notice
 * @author xaboy
 * @day 2020/11/6
 */
class SystemNoticeLog extends BaseModel
{

    /**
     * @return string|null
     * @author xaboy
     * @day 2020/11/6
     */
    public static function tablePk(): ?string
    {
        return 'notice_log_id';
    }

    /**
     * @return string
     * @author xaboy
     * @day 2020/11/6
     */
    public static function tableName(): string
    {
        return 'system_notice_log';
    }

    /**
     * @return \think\model\relation\HasOne
     * @author xaboy
     * @day 2020/11/6
     */
    public function notice()
    {
        return $this->hasOne(SystemNotice::class, 'notice_id', 'notice_id');
    }
}