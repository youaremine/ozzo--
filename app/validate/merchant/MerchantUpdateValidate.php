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


namespace app\validate\merchant;


use think\Validate;

class MerchantUpdateValidate extends Validate
{
    protected $failException = true;

    protected $rule = [
        'mer_info|店铺简介' => 'max:200',
        'service_phone|服务电话' => 'require|isPhone',
        'mer_avatar|店铺头像' => 'require|max:128',
        'mer_banner|店铺banner' => 'require|max:128',
        'mini_banner|店铺街banner' => 'max:128',
        'mer_keyword|店铺关键字' => 'max:128',
        'mer_address|店铺地址' => 'max:128',
        'long|店铺经度' => 'max:24',
        'lat|店铺纬度' => 'max:24',
        'mer_state|是否开启' => 'require|in:0,1',
    ];

    protected function isPhone($val)
    {
        $res = preg_match('/^((\+86|\+86\-)|(86|86\-)|(0086|0086\-))?1\d{10}$|^(0\d{2,3}\-)?([2-9]\d{6,7})+(\-\d{1,6})?$/', $val);
        if ($res) return true;
        return '服务电话格式有误';
    }
}