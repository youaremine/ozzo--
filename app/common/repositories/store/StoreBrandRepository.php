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


namespace app\common\repositories\store;

use app\common\repositories\BaseRepository;
use app\common\dao\store\StoreBrandDao as dao;
use app\common\repositories\store\product\ProductRepository;
use FormBuilder\Factory\Elm;
use FormBuilder\Form;
use think\facade\Route;

class StoreBrandRepository extends BaseRepository
{


    public function __construct(dao $dao)
    {
        $this->dao = $dao;

    }

    public function parentExists(int $id)
    {
        $make = app()->make(StoreBrandCategoryRepository::class);
        return ($make->get($id)) ?? false;
    }

    public function meExists($id)
    {
        return $this->dao->merFieldExists($this->dao->getPk(), $id);
    }

    public function merExistsBrand(string $value)
    {
        return $this->dao->merFieldExists('brand_name', $value);
    }

    public function getCategorySearch($where, $page, $limit)
    {
        $make = app()->make(ProductRepository::class);
        $where = array_merge($where,$make->productShow());
        $brandIds = app()->make(ProductRepository::class)->getBrandByCategory($where);
        $query = $this->dao->search(['ids' => $brandIds]);
        $count = $query->count();
        $list = $query->page($page, $limit)->select();
        return compact('count', 'list');
    }

    public function getList(array $where, $page, $limit)
    {
        $query = $this->dao->search($where)
            ->with('brandCategory', function ($query) {
                $query->field('store_brand_category_id,cate_name,path');
            });
        $count = $query->count();
        $list = $query->page($page, $limit)->select();
        return compact('count', 'list');
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/27
     * @param $id
     * @return Form
     */
    public function updateForm($id)
    {
        return $this->form($id, $this->dao->get($id)->toArray());
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/27
     * @param int|null $id
     * @param array $formData
     * @return Form
     */
    public function form(?int $id = null, array $formData = [])
    {
        $form = Elm::createForm(is_null($id) ? Route::buildUrl('systemStoreBrandCreate')->build() : Route::buildUrl('systemStoreBrandUpdate', ['id' => $id])->build());
        $form->setRule([
            Elm::cascader('brand_category_id', '上级分类')->options(function () use ($id) {
                $menus = app()->make(StoreBrandCategoryRepository::class)->getAncestorsChildList();
                return $menus;
            })->props(['props' => ['emitPath' => false]]),
            Elm::input('brand_name', '品牌名称')->required(),
            Elm::switches('is_show', '是否显示',1)->activeValue(1)->inactiveValue(0)->inactiveText('关闭')->activeText('开启'),
            Elm::number('sort', '排序', 0),
        ]);
        return $form->setTitle(is_null($id) ? '添加品牌' : '编辑品牌')->formData($formData);
    }

    /**
     * TODO 品牌下是否存在商品
     * @param int $id
     * @return bool
     * @author Qinii
     * @day 12/15/20
     */
    public function getBrandHasProduct(int $id)
    {
        $make = app()->make(ProductRepository::class);
        $count = $make->getSearch(['brand_id' => [$id]])->where('is_del',0)->count();
        return $count ? true : false;
    }
}
