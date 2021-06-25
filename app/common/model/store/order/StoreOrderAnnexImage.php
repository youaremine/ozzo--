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


namespace app\common\model\store\order;


use app\common\model\BaseModel;

class StoreOrderAnnexImage extends BaseModel
{

    protected $hidden = ['mer_id'];
    public static function tablePk(): ?string
    {
        return null;
    }

    public static function tableName(): string
    {
        return 'store_order_annex_image';
    }

    public function getImageAttr($value)
    {
        if(!empty($value) && !is_array($value)){
            $value = json_decode($value,true);
        }
        return $value;
    }
}