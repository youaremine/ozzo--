(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_cate-goods_cate"],{"01d9":function(t,e,o){"use strict";o.r(e);var n=o("2951"),r=o("f2e6");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("40b1");var a,u=o("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"150f4baf",null,!1,n["a"],a);e["default"]=c.exports},2138:function(t,e,o){var n=o("c41a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=o("4f06").default;r("54c0ecfe",n,!0,{sourceMap:!1,shadowMode:!1})},2951:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"productSort",style:"height:"+t.winHeight+"px"},[o("v-uni-view",{staticClass:"header acea-row row-center-wrapper"},[o("v-uni-navigator",{staticClass:"acea-row row-between-wrapper input",attrs:{url:"/pages/columnGoods/goods_search/index","hover-class":"none"}},[o("v-uni-text",{staticClass:"iconfont icon-sousuo"}),o("v-uni-view",{staticClass:"input-box"},[t._v("点击搜索商品信息")])],1)],1),o("v-uni-view",{staticClass:"con-box"},[o("v-uni-view",{staticClass:"aside"},[o("v-uni-scroll-view",{staticStyle:{height:"100%",overflow:"hidden"},attrs:{"scroll-y":"true","scroll-with-animation":"true","scroll-into-view":t.intoindex}},t._l(t.productList,(function(e,n){return o("v-uni-view",{key:e.store_category_id,staticClass:"item acea-row row-center-wrapper",class:n==t.navActive?"on":"",attrs:{id:"sort"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tap(n,"b"+n)}}},[o("v-uni-text",{staticClass:"item_text"},[t._v(t._s(e.cate_name))])],1)})),1)],1),t.productList.length>0?o("v-uni-view",{staticClass:"conter"},[o("v-uni-scroll-view",{staticStyle:{height:"100%",overflow:"hidden"},attrs:{"scroll-y":"true","scroll-with-animation":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t.productList[t.navActive]?t._l(t.productList[t.navActive].children,(function(e,n){return o("v-uni-view",{key:e.store_category_id,staticClass:"listw",attrs:{id:"b"+n}},[o("v-uni-view",{staticClass:"title acea-row"},[o("v-uni-view",{staticClass:"name"},[t._v(t._s(e.cate_name))])],1),o("v-uni-view",{staticClass:"list acea-row"},[t._l(e.children,(function(e,n){return[o("v-uni-navigator",{key:e.store_category_id+"_0",staticClass:"item acea-row row-column row-middle",attrs:{"hover-class":"none",url:"/pages/columnGoods/goods_list/index?id="+e.store_category_id+"&title="+e.cate_name}},[o("v-uni-view",{staticClass:"picture"},[o("v-uni-image",{attrs:{src:e.pic}})],1),o("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.cate_name))])],1)]}))],2)],1)})):t._e()],2)],1):t._e()],1)],1)},i=[]},"2b58":function(t,e,o){"use strict";var n=o("4ea4");o("99af"),o("d3b7"),o("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=a,e.getProductCode=u,e.collectAdd=c,e.collectDel=d,e.postCartAdd=s,e.getCategoryList=l,e.getProductslist=f,e.getBrandlist=p,e.getProductHot=g,e.collectAll=h,e.getGroomList=v,e.getCollectUserList=b,e.getReplyList=w,e.getReplyConfig=m,e.getSearchKeyword=x,e.storeListApi=y,e.storeMerchantList=_,e.getStoreDetail=A,e.getStoreGoods=S,e.getStoreCategory=k,e.followStore=C,e.unfollowStore=L,e.getStoreCoupon=P,e.getMerchantLst=I,e.express=G,e.storeCategory=H,e.bagExplain=z,e.bagRecommend=D,e.productBag=R,e.merchantQrcode=T,e.merchantProduct=$,e.getHotBanner=M,e.create=B,e.verify=E,e.getSeckillProductDetail=V,e.getLiveList=j,e.getBroadcastListApi=F,e.merClassifly=O,e.getPresellProductDetail=q,e.getApplicationRecordList=J,e.getGoodsDetails=U,e.updateGoodsRecord=K,e.getGeocoder=Q;var r=n(o("5530")),i=n(o("112d"));function a(t){return i.default.get("store/product/detail/"+t,{},{noAuth:!0})}function u(t,e){return i.default.get("store/product/qrcode/"+t,e,{noAuth:!0})}function c(t){return i.default.post("user/relation/create",t)}function d(t){return i.default.post("user/relation/delete",t)}function s(t){return i.default.post("user/cart/create",t)}function l(){return i.default.get("store/product/category/lst",{},{noAuth:!0})}function f(t){return t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,r.default)({},t),t.brand_id=t.brand_id.toString()),i.default.get("product/spu/lst",t,{noAuth:!0})}function p(t){return i.default.get("store/product/brand/lst",t,{noAuth:!0})}function g(t,e){return i.default.get("product/spu/recommend",{page:void 0===t?1:t,limit:void 0===e?10:e},{noAuth:!0})}function h(t){return i.default.post("user/relation/batch/create",t)}function v(t,e){return i.default.get("product/spu/hot/"+t,e,{noAuth:!0})}function b(t){return i.default.get("user/relation/product/lst",t)}function w(t,e){return i.default.get("store/product/reply/lst/"+t,e,{noAuth:!0})}function m(t){return i.default.get("reply/config/"+t)}function x(){return i.default.get("common/hot_keyword",{},{noAuth:!0})}function y(t){return i.default.get("store_list",t,{noAuth:!0})}function _(t){return i.default.get("store/merchant/lst",t,{noAuth:!0})}function A(t,e){return i.default.get("store/merchant/detail/"+t,e,{noAuth:!0})}function S(t,e){return i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function k(t,e){return i.default.get("store/merchant/category/lst/"+t,e,{noAuth:!0})}function C(t){return i.default.post("user/relation/create",{type:10,type_id:t})}function L(t){return i.default.post("user/relation/delete",{type:10,type_id:t})}function P(t){return i.default.get("coupon/store/"+t,{noAuth:!0})}function I(t){return i.default.get("user/relation/merchant/lst",t,{noAuth:!0})}function G(t){return i.default.post("ordero/express/"+t,{noAuth:!0})}function H(t){return i.default.get("store/product/category",t,{noAuth:!0})}function z(){return i.default.get("store/product/bag/explain")}function D(){return i.default.get("product/spu/bag/recommend")}function R(t){return i.default.get("product/spu/bag",t,{noAuth:!0})}function T(t,e){return i.default.get("store/merchant/qrcode/"+t,e,{noAuth:!0})}function $(t,e){return e.brand_id&&Array.isArray(e.brand_id)&&(e=(0,r.default)({},e),e.brand_id=e.brand_id.toString()),i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function M(t){return i.default.get("common/hot_banner/"+t,{},{noAuth:!0})}function B(t){return i.default.post("intention/create",t)}function E(t){return i.default.post("auth/verify",t)}function V(t){return i.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function j(){return i.default.get("broadcast/hot",{},{noAuth:!0})}function F(t){return i.default.get("broadcast/lst",t,{noAuth:!0})}function O(){return i.default.get("intention/cate")}function q(t){return i.default.get("store/product/presell/detail/"+t,{},{noAuth:!0})}function J(t){return i.default.get("intention/lst",t)}function U(t){return i.default.get("intention/detail/"+t,{})}function K(t,e){return i.default.post("intention/update/"+t,e)}function Q(t){return i.default.get("lbs/geocoder?location=".concat(t.lat,",").concat(t.long),{},{noAuth:!0})}},"40b1":function(t,e,o){"use strict";var n=o("2138"),r=o.n(n);r.a},c41a:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.productSort[data-v-150f4baf]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.productSort .con-box[data-v-150f4baf]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}.productSort .header[data-v-150f4baf]{width:100%;height:%?96?%;background-color:#fff;border-bottom:%?1?% solid #f5f5f5}.productSort .header .input[data-v-150f4baf]{width:%?700?%;height:%?60?%;background-color:#f5f5f5;-webkit-border-radius:%?50?%;border-radius:%?50?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?25?%}.productSort .header .input .iconfont[data-v-150f4baf]{font-size:%?35?%;color:#555}.productSort .header .input .placeholder[data-v-150f4baf]{color:#999}.productSort .header .input .input-box[data-v-150f4baf]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;height:100%;width:%?597?%;color:#999}.productSort .aside[data-v-150f4baf]{background-color:#fff;overflow-y:auto;overflow-x:hidden;width:%?200?%;height:100%;overflow:hidden}.productSort .aside .item[data-v-150f4baf]{height:%?100?%;width:100%;font-size:%?26?%;color:#424242}.productSort .aside .item_text[data-v-150f4baf]{padding-left:%?20?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.productSort .aside .item.on[data-v-150f4baf]{background-color:#f7f7f7;border-left:%?4?% solid #fc4141;width:100%;text-align:center;color:#fc4141;font-weight:700}.productSort .conter[data-v-150f4baf]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;padding:0 %?14?%;background-color:#f7f7f7}.productSort .conter .listw .title[data-v-150f4baf]{height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.productSort .conter .listw .title .line[data-v-150f4baf]{width:%?100?%;height:%?2?%;background-color:#f0f0f0}.productSort .conter .listw .title .name[data-v-150f4baf]{font-size:%?28?%;color:#333;margin:0 %?30?%;font-weight:700}.productSort .conter .list[data-v-150f4baf]{-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;-webkit-border-radius:%?16?%;border-radius:%?16?%;padding-bottom:%?26?%}.productSort .conter .list .item[data-v-150f4baf]{width:%?174?%;margin-top:%?26?%}.productSort .conter .list .item .picture[data-v-150f4baf]{width:%?110?%;height:%?110?%;-webkit-border-radius:50%;border-radius:50%}.productSort .conter .list .item .picture uni-image[data-v-150f4baf]{width:100%;height:100%}.productSort .conter .list .item .name[data-v-150f4baf]{font-size:%?24?%;color:#333;height:%?56?%;line-height:%?56?%;width:%?120?%;text-align:center}',""]),t.exports=e},d1c5:function(t,e,o){"use strict";o("d81d"),o("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("2b58"),r=(getApp(),{data:function(){return{navlist:[],productList:[],navActive:0,number:"",height:0,hightArr:[],toView:"",winHeight:0,pidIndex:0,intoindex:""}},onLoad:function(t){var e=this;uni.getSystemInfo({success:function(t){e.winHeight=t.windowHeight}}),document.body.addEventListener("touchmove",(function(t){"/pages/goods_cate/goods_cate"==e.$route.path&&t.preventDefault()}),{passive:!1})},onShow:function(){this.productList.length||this.getAllCategory()},onHide:function(){},onTabItemTap:function(){this.getAllCategory()},onReady:function(){},methods:{infoScroll:function(){var t=this;t.productList.length;uni.getSystemInfo({success:function(e){t.height=e.windowHeight*(750/e.windowWidth)-98}})},tap:function(t,e){this.toView=e,this.navActive=t},getAllCategory:function(){var t=this;(0,n.getCategoryList)().then((function(e){t.productList=e.data,t.getCateFrom(t.productList),t.tap(t.pidIndex,"b"+t.pidIndex),t.infoScroll(),t.intoindex="",uni.removeStorageSync("storeIndex")}))},getCateFrom:function(t){var e=this,o=uni.getStorageSync("storeIndex"),n="";t.map((function(t,r){if(t.store_category_id==o)return e.pidIndex=r,void(n="sort"+r)})),this.$nextTick((function(){e.intoindex=n}))},scroll:function(t){for(var e=t.detail.scrollTop,o=this.hightArr,n=0;n<o.length;n++)e>=0&&e<o[1]-o[0]?this.navActive=0:e>=o[n]-o[0]&&e<o[n+1]-o[0]?this.navActive=n:e>=o[o.length-1]-o[0]&&(this.navActive=o.length-1)},searchSubmitValue:function(t){if(!(this.$util.trim(t.detail.value).length>0))return this.$util.Tips({title:"请填写要搜索的产品信息"});uni.navigateTo({url:"/pages/columnGoods/goods_list/index?searchValue="+t.detail.value})}}});e.default=r},f2e6:function(t,e,o){"use strict";o.r(e);var n=o("d1c5"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a}}]);