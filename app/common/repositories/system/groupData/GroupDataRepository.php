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


namespace app\common\repositories\system\groupData;


use app\common\dao\BaseDao;
use app\common\dao\system\groupData\GroupDataDao;
use app\common\repositories\BaseRepository;
use app\common\repositories\store\StoreCategoryRepository;
use FormBuilder\Exception\FormBuilderException;
use FormBuilder\Factory\Elm;
use FormBuilder\Form;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\exception\ValidateException;
use think\facade\Route;
use think\Model;

/**
 * Class GroupDataRepository
 * @package app\common\repositories\system\groupData
 * @mixin GroupDataDao
 * @author xaboy
 * @day 2020-03-30
 */
class GroupDataRepository extends BaseRepository
{
    /**
     * GroupDataRepository constructor.
     * @param GroupDataDao $dao
     */
    public function __construct(GroupDataDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * @param int $merId
     * @param array $data
     * @param array $fieldRule
     * @return BaseDao|Model
     * @author xaboy
     * @day 2020-03-30
     */
    public function create(int $merId, array $data, array $fieldRule)
    {
        $this->checkData($data['value'], $fieldRule);
        $data['mer_id'] = $merId;

        return $this->dao->create($data);
    }

    /**
     * @param $merId
     * @param $id
     * @param $data
     * @param $fieldRule
     * @return int
     * @throws DbException
     * @author xaboy
     * @day 2020/9/23
     */
    public function merUpdate($merId, $id, $data, $fieldRule)
    {
        $this->checkData($data['value'], $fieldRule);
        return $this->dao->merUpdate($merId, $id, $data);
    }

    /**
     * @param array $data
     * @param array $fieldRule
     * @author xaboy
     * @day 2020/9/23
     */
    public function checkData(array $data, array $fieldRule)
    {
        foreach ($fieldRule as $rule) {
            if (!isset($data[$rule['field']]) || $data[$rule['field']] === '') {
                throw new ValidateException($rule['name'] . '不能为空');
            }
            if ($rule['type'] === 'number' && $data[$rule['field']] < 0)
                throw new ValidateException($rule['name'] . '不能小于0');
        }
    }

    /**
     * @param int $merId
     * @param int $groupId
     * @param int $page
     * @param int $limit
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020-03-30
     */
    public function getGroupDataLst(int $merId, int $groupId, int $page, int $limit): array
    {
        $query = $this->dao->getGroupDataWhere($merId, $groupId);
        $count = $query->count();
        $list = $query->field('group_data_id,value,sort,status,create_time')->page($page, $limit)->select()->toArray();
        foreach ($list as $k => $data) {
            $value = $data['value'];
            unset($data['value']);
            $data += $value;
            $list[$k] = $data;
        }
        return compact('count', 'list');
    }

    /**
     * @param int $groupId
     * @param int|null $id
     * @param array $formData
     * @return Form
     * @throws FormBuilderException
     * @author xaboy
     * @day 2020-04-02
     */
    public function form(int $groupId, ?int $id = null, ?int $merId = null, array $formData = []): Form
    {
        $fields = app()->make(GroupRepository::class)->fields($groupId);
        if (is_null($merId) || empty($merId)) {
            $url = is_null($id)
                ? Route::buildUrl('groupDataCreate', compact('groupId'))->build()
                : Route::buildUrl('groupDataUpdate', compact('groupId', 'id'))->build();
        } else {
            $url = is_null($id)
                ? Route::buildUrl('merchantGroupDataCreate', compact('groupId'))->build()
                : Route::buildUrl('merchantGroupDataUpdate', compact('groupId', 'id'))->build();
        }

        $form = Elm::createForm($url);
        $rules = [];
        foreach ($fields as $field) {
            if ($field['type'] == 'image') {
                $rules[] = Elm::frameImage($field['field'], $field['name'], '/' . config('admin.' . ($merId ? 'merchant' : 'admin') . '_prefix') . '/setting/uploadPicture?field=' . $field['field'] . '&type=1')->modal(['modal' => false])->width('896px')->height('480px')->props(['footer' => false]);
                continue;
            } else if ($field['type'] == 'cate') {
                $rules[] = Elm::cascader($field['field'], $field['name'])->options(function () use ($id) {
                    $storeCategoryRepository = app()->make(StoreCategoryRepository::class);
                    $menus = $storeCategoryRepository->getAllOptions(0, 1, null);
                    if ($id && isset($menus[$id])) unset($menus[$id]);
                    $menus = formatCascaderData($menus, 'cate_name');
                    return $menus;
                })->props(['props' => ['checkStrictly' => true, 'emitPath' => false]])->filterable(true)->appendValidate(Elm::validateInt()->required()->message('请选择分类'));
                continue;
            } else if (in_array($field['type'], ['select', 'checkbox', 'radio'])) {
                $options = array_map(function ($val) {
                    [$value, $label] = explode(':', $val, 2);
                    return compact('value', 'label');
                }, explode("\n", $field['param']));
                $rule = Elm::{$field['type']}($field['field'], $field['name'])->options($options);
                if ($field['type'] == 'select') {
                    $rule->filterable(true)->prop('allow-create', true);
                }
                $rules[] = $rule;
                continue;
            }
            if ($field['type'] == 'file') {
                $rules[] = Elm::uploadFile($field['field'], $field['name'], Route::buildUrl('configUpload', ['field' => 'file'])->build())->headers(['X-Token' => request()->token()]);
                continue;
            }
            $rules[] = Elm::{$field['type']}($field['field'], $field['name'], '');
        }
        $rules[] = Elm::number('sort', '排序', 0);
        $rules[] = Elm::switches('status', '是否显示', 1)->activeValue(1)->inactiveValue(0)->inactiveText('关闭')->activeText('开启');

        $form->setRule($rules);

        return $form->setTitle(is_null($id) ? '添加数据' : '编辑数据')->formData($formData);
    }

    /**
     * @param int $groupId
     * @param int $merId
     * @param int $id
     * @return Form
     * @throws DataNotFoundException
     * @throws DbException
     * @throws FormBuilderException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020-04-02
     */
    public function updateForm(int $groupId, int $merId, int $id)
    {
        $data = $this->dao->getGroupDataWhere($merId, $groupId)->where('group_data_id', $id)->find()->toArray();
        $value = $data['value'];
        unset($data['value']);
        $data += $value;
        return $this->form($groupId, $id, $merId, $data);
    }

    /**
     * @param string $key
     * @param int $merId
     * @param int|null $page
     * @param int|null $limit
     * @return array
     * @author xaboy
     * @day 2020/5/27
     */
    public function groupData(string $key, int $merId, ?int $page = null, ?int $limit = 10)
    {
        /** @var GroupRepository $make */
        $make = app()->make(GroupRepository::class);
        $groupId = $make->keyById($key);
        if (!$groupId) return [];
        return $this->dao->getGroupData($merId, $groupId, $page, $limit);
    }

    /**
     * @param string $key
     * @param int $merId
     * @param int|null $page
     * @param int|null $limit
     * @return int
     * @author xaboy
     * @day 2020/5/27
     */
    public function getGroupDataCount(string $key, int $merId)
    {
        /** @var GroupRepository $make */
        $make = app()->make(GroupRepository::class);
        $groupId = $make->keyById($key);
        if (!$groupId) 0;
        return $this->dao->groupDataCount($merId, $groupId);
    }

    /**
     * @param int $id
     * @param int $merId
     * @return mixed|void
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020/6/2
     */
    public function idByData(int $id, int $merId)
    {
        $data = $this->dao->merGet($id, $merId);
        if (!$data) return;
        return json_decode($data['value']);
    }

    /**
     * @param string $key
     * @param int $merId
     * @param int|null $page
     * @param int|null $limit
     * @return array
     * @author xaboy
     * @day 2020/6/3
     */
    public function groupDataId(string $key, int $merId, ?int $page = null, ?int $limit = 10)
    {
        $make = app()->make(GroupRepository::class);
        $groupId = $make->keyById($key);
        if (!$groupId) return [];
        return $this->dao->getGroupDataId($merId, $groupId, $page, $limit);
    }
}