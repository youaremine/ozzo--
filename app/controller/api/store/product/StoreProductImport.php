<?php

namespace app\controller\api\store\product;

use think\App;
use crmeb\basic\BaseController;
use crmeb\services\HttpService;
use think\facade\Db;

class StoreProductImport extends BaseController
{
    private $get_cate_url = 'https://apis.price.com.hk/quotation/v1/quote/categoryFilter?platform=W&merchantId=11520';
    private $get_product_url = 'https://apis.price.com.hk/quotation/v1/quote?platform=W&merchantId=11520&pageSize=15&sort=D&mode=F&page=';
    private $cookic = 'Cookie: price_ui_cookie=e4b30d2b89ec93d87bf9ae667bb749cd; nwtc=60c81686df0697.46386785; dfp_seg_ids=%5B%5D; ui_curr_category=0; nw_group_id=1; _gcl_au=1.1.775113989.1623725706; _ga=GA1.3.954014815.1623725706; _gid=GA1.3.1602649813.1623725706; __auc=154e6f8817a0d980b03c5833b33; cto_bundle=CV-3Dl93YkFTZ0lHUmVrVWkwZ2pmMHZlTVFEa1ozT2Qwd0ZNUVc4V05wSnEyVWp2JTJGVGhoaUNXbXpjNlQlMkZDYU1RbHM4V2ZUSFhZOEZCU0s5SURNcTJ6MUtRSFZzZE9TTzFPSyUyQndDN0dlYVVoS1VWYllHUEZacFBNd3AlMkIlMkZPWVpTN0dqYUhkbWhwYkIwdGN6aWcyWnhVTXc0bEF3JTNEJTNE; lotaud_t=1; dthm=1; up_c=1623736450; ttd_c=1623736450; ui_currency=HKD; ui_currency_time=1623736450; __gads=ID=46558c5b35792d6c:T=1623736454:S=ALNI_MZuWIotDtQg_-ozDWBCddKW1IAcjA; tr_h2=183972037760c9556402f238_61068320; __asc=20abb37e17a12759eb416321160; _gat_priceAsync=1; _gat_priceAsyncWeb=1; tr_h=135252914760c95b2b838167_42721746';
    private $mer_id = '78'; // 商戶id
    private $sensitive_text = [
        '電話',
        '號碼',
        '安心訂購',
        '營業時間',
        '電郵',
        '出口',
        '實體店',
        'WHATAPPS',
    ]; // 敏感文本
    private $sensitive_icon = [
        '7aC97bOe',
        '4piO',
    ]; // 敏感圖標 base64碼

    public function import(){
       $cate_res = HttpService::getRequest($this->get_cate_url,[],[$this->cookic]); // 1. 網絡請求商品分類
        if(!is_array($cate_res)) $cate_res = json_decode($cate_res,true);
        if(!empty($cate_res)){
            $cates = $this->handleCate($cate_res); // 1.1 處理商品分類

            $page = 1; // 獲取第一頁商品
            $get_product_url = $this->get_product_url . $page;
            $products = HttpService::getRequest($get_product_url); // 2. 網絡請求商品
            if(!is_array($products)) $cate_res = json_decode($products,true);
            if(!empty($products)){
                if(isset($products['totalCount']) && $products['totalCount'] > 0){
                    $pageSize = 15; // 每頁條數
                    $page = ceil($products['totalCount'] / $pageSize); // 縂页码
                }
                $products = $this->handleProduct($products,$cates);// 2.1 處理商品
                $this->addProductData($products); // 2.2 商品插入
            }


        }
    }
    public function handleCate($cate){
        // 1. zones  該分類沒有子類
        if(isset($cate['zones']) && is_array($cate['zones'])){
            $zones = [];
            foreach ($cate['zones'] as $key => $value){
                $zones[] = ['pid' => 0,'cate_name' => $value['name']];
            }
            Db::table('shop_store_category')->insertAll($zones);
        }
        if(isset($cate['groups']) && is_array($cate['groups'])){
            //2. groups 該分類有子類
            foreach ($cate['groups'] as $key => $value){
                $id = Db::table('shop_store_category')->insert([
                    'pid' => 0,
                    'cate_name' => $value['name'],
                ],false,true);
                //2.1 顶级分类下的子类
                foreach ($cate['categories'] as $k => &$v) {
                    if($v['groupId'] == $value['id']){
                        $tmp = ['pid' => $id,'cate_name' => $v['name']];
                        $cate_id =  Db::table('shop_store_category')->insert($tmp,false,true);
                        $v['cate_id'] = $cate_id;
                    }
                }

            }
        }
        return $cate;
    }
    public function handleProdect($products,$cates){
        if(isset($products['quotes']) && is_array($products['quotes'])){
            foreach ($products['quotes'] as $key => &$value){
                $categoryId = $value['product']['categoryId'];
                foreach ($cates['categories'] as $k => $v){
                    if($categoryId == $v['id']){
                        $value['cate_id'] = $v['cate_id'];
                    }
                }
            }
        }
        return $products;
    }
    public function addProductData($products){
        if(isset($products['quotes']) && is_array(isset($products['quotes']))){
            foreach ($products as $key => $value){
                // 1. 價格 * 1.2
                if(!empty($value['hongPrice']) && $value['hongPrice'] > 0){
                    $value['hongPriceAfter'] =  $value['hongPrice'] * 1.2;
                }
                // base码 小电话图标  '7aC97bOe' '4piO'
                // 2. 过滤敏感信息
                if(!empty($value['quoteDescription'])){
                    $value['quoteDescription'] = $this->filter($value['quoteDescription'],$this->sensitive_text,$this->sensitive_icon);
                }
                // 3. 获取商品内容中是否有其他价格 其他價格作爲規格
                $attr = $this->getAttrPrice($value['quoteDescription']);
                // 4.多表插入
                Db::startTrans();
                try {
                    // 4.1  shop_store_product 商品表
                    $product_id = Db::table('shop_store_product')->insert(
                        [
                            'mer_id' => $this->mer_id,
                            'store_name' => $value['product']['brand'] . ' ' . $value['product']['model'],
                            'cate_id' => $value['cate_id'],
                            'image' => $value['product']['imagePath'] ? $value['product']['imagePath'] : '',
                            'slider_image' => implode(',',$value['product']['imagePaths']),
                            'price' => $value['hongPriceAfter'],
                            'keyword' => $value['product']['brand'] . ' ' . $value['product']['model'],
                            'stock' => 10
                        ],false,true
                    );
                    // 4.2  shop_store_attr_template 商品规格表
                    if($attr){
                        $eq = 0;
                        foreach ($attr as $attrkey => $attrvalue){
                            if($attrvalue['price'] == $value['hongPriceAfter']){
                                $eq = 1;
                            }
                        }
                        if($eq == 0){
                            $attr[] = ['title' => '單機','price' => $value['hongPriceAfter']];
                        }
                        $res_2 = Db::table('shop_store_attr_template')->insert([
                            'template_name' => '选项',
                            'template_value' => json_encode(['value' => '','detail' => $attr]),
                            'mer_id' => $this->mer_id
                        ]);
                    }
                    // 4.3  shop_store_product_attr 商品屬性表
                    if(!empty($attr)){
                        $prices = [];
                        foreach ($attr as $attrkey => $attrvalue){
                            $prices[] = $attrvalue['price'];
                        }
                        $res_3 = Db::table('shop_store_product_attr')->insert([
                            'product_id' => $product_id,
                            'attr_name' => '',
                            'attr_values' => implode('-!-',$prices),
                        ]);
                        foreach ($attr as $kk => $vv){
                            $res_4 = Db::table('shop_store_product_attr_value')->insert([
                                'product_id' => $product_id,
                                'detail' => json_encode(['' => $vv['title']],JSON_UNESCAPED_UNICODE),
                                'sku' => $vv['title'],
                                'price' => $vv['price']
                            ]);
                        }
                    }
                    // 4.4  shop_store_product_attr_value 商品屬性值表
                    $all = [];
                    foreach ($attr as $kk => $vv){
                         $all[] = ['detail' => json_encode(['' => $vv['title']]),'sku' => $vv['title'],'stock' => 10,'price' => $vv['price'],'unique' => time()];
                    }
                    Db::table('shop_store_product_attr_value')->insertAll(
                        $all
                    );
                    // 4.5  shop_store_product_cate  商品商户分类关联表
                    Db::table('shop_store_product_cate')->insert([
                        'product_id' => $product_id,
                        'mer_id' => $this->mer_id,
                        'mer_cate_id' => $value['cate_id'],
                    ]);
                    // 4.6  shop_store_product_content 商品介紹表
                    $content = explode("\r\n",$value['quoteDescription']);
                    $tmp = '';

                    foreach ($value['product']['attributes'] as $k => $v){
                        $tmp = $tmp . "<p>" . $v['name']  . ' ' . $v['value']  . ' '  . $v['unit']. "</p>";
                    }

                    foreach ($content as $k => $v){
                        //  $tmp = $tmp . "<p>" . base64_encode($v) . "</p>";
                        $tmp = $tmp . "<p>" . $v . "</p>";
                    }
                    Db::table('shop_store_product_content')->insert(
                        [
                            'product_id' => $product_id,
                            'content' => $tmp
                        ]
                    );
                    // 提交事务
                    Db::commit();
                } catch (\Exception $e) {
                    // 回滚事务
                    Db::rollback();
                }
            }
        }
    }
    // 过滤敏感信息
    public function filter($content,$sensitive_text,$sensitive_icon){
        if(!is_array($content)) $content = explode("\r\n",$content);
        if(!empty($content)){
             foreach ($content as $key => $value){
                 // 1. 是否有敏感字
                 foreach ($sensitive_text as $text_k => $text_v){
                     if(strstr($value,$text_v)){
                         unset($content[$key]);
                     }
                 }
                 // 2. 是否有敏感圖標
                 foreach ($sensitive_icon as $icon_k => $icon_v){
                     if(strstr(base64_encode($value),$icon_v)){
                         unset($content[$key]);
                     }
                 }
             }
             $content = implode("\r\n",$content);
        }
        return $content;
    }
    // 获取其他价格
    public function getAttrPrice($content){
        $attr = [];
        if(!is_array($content)) $content = explode("\r\n",$content);
        if(!empty($content)){
            foreach ($content as $key => $value){
                $index = strpos($value,'$');
                if($index !== false){
                    // 正则
                    preg_match('/\$([0-9]+[\.]*[0-9]*)/', $value, $match);
                    if(isset($match[0]) && isset($match[1])){
                        $value = str_replace($match[0],'',$value);
                        // 原價格都需要 * 1.2
                        // base64 icon 去除
                        $message = ['title' => $value,'price' => $match[1] * 1.2];
                        $attr[] =  $message;
                    }
                }
            }
        }
        return $attr;
    }
    public function getHtml($content){

    }
}
