(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_store_attention-index"],{"1d76":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.user_store_attention .item[data-v-faa041f6]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?30?% %?20?%;background-color:#fff}.user_store_attention .item[data-v-faa041f6]::after{content:" ";position:absolute;bottom:0;left:%?30?%;right:0;height:1px;background:#f0f0f0}.user_store_attention .item uni-image[data-v-faa041f6]{width:%?88?%;height:%?88?%;border-radius:50%}.user_store_attention .item .info[data-v-faa041f6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-left:%?20?%;position:relative}.user_store_attention .item .info .name[data-v-faa041f6]{width:%?410?%;font-weight:700}.user_store_attention .item .info .des[data-v-faa041f6]{color:#666;font-size:%?22?%}.user_store_attention .item .info .btn[data-v-faa041f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;right:0;top:50%;width:%?150?%;height:%?50?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #bbb;border-radius:%?25?%;font-size:%?26?%}',""]),t.exports=e},"47b6":function(t,e,n){"use strict";n.r(e);var o=n("785a"),r=n("a430");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("d847");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"faa041f6",null,!1,o["a"],a);e["default"]=s.exports},"785a":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user_store_attention"},[t._l(t.storeList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goStore(e)}}},[n("v-uni-image",{attrs:{src:e.merchant.mer_avatar,mode:""}}),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.merchant.mer_name)),e.merchant.is_trader?n("v-uni-text",{staticClass:"font-bg-red ml8"},[t._v("自營")]):t._e()],1),n("v-uni-view",{staticClass:"des"},[t._v(t._s(e.merchant.care_count||0)+"人關注")]),n("v-uni-view",{staticClass:"btn",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.bindDetele(e,o)}}},[t._v("取消關注")])],1)],1)})),0==t.storeList.length?n("v-uni-view",{staticClass:"empty-txt"},[t._v("暫無數據")]):t._e()],2)},i=[]},a430:function(t,e,n){"use strict";n.r(e);var o=n("fb35"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},aed6:function(t,e,n){var o=n("1d76");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("2ae3004b",o,!0,{sourceMap:!1,shadowMode:!1})},ccb6:function(t,e,n){"use strict";var o=n("4ea4");n("99af"),n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=a,e.getProductCode=u,e.collectAdd=s,e.collectDel=c,e.postCartAdd=d,e.getCategoryList=l,e.getProductslist=f,e.getBrandlist=p,e.getProductHot=g,e.collectAll=h,e.getGroomList=b,e.getCollectUserList=m,e.getReplyList=_,e.getReplyConfig=v,e.getSearchKeyword=y,e.storeListApi=w,e.storeMerchantList=A,e.getStoreDetail=x,e.getStoreGoods=k,e.getStoreCategory=L,e.followStore=C,e.unfollowStore=S,e.getStoreCoupon=D,e.getMerchantLst=P,e.express=j,e.storeCategory=R,e.bagExplain=M,e.bagRecommend=B,e.productBag=G,e.merchantQrcode=$,e.merchantProduct=E,e.getHotBanner=T,e.create=O,e.verify=q,e.getSeckillProductDetail=z,e.getLiveList=H,e.getBroadcastListApi=J,e.merClassifly=U,e.getPresellProductDetail=Y,e.getApplicationRecordList=F,e.getGoodsDetails=K,e.updateGoodsRecord=Q,e.getGeocoder=I;var r=o(n("5530")),i=o(n("9999"));function a(t){return i.default.get("store/product/detail/"+t,{},{noAuth:!0})}function u(t,e){return i.default.get("store/product/qrcode/"+t,e,{noAuth:!0})}function s(t){return i.default.post("user/relation/create",t)}function c(t){return i.default.post("user/relation/delete",t)}function d(t){return i.default.post("user/cart/create",t)}function l(){return i.default.get("store/product/category/lst",{},{noAuth:!0})}function f(t){return t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,r.default)({},t),t.brand_id=t.brand_id.toString()),i.default.get("product/spu/lst",t,{noAuth:!0})}function p(t){return i.default.get("store/product/brand/lst",t,{noAuth:!0})}function g(t,e){return i.default.get("product/spu/recommend",{page:void 0===t?1:t,limit:void 0===e?10:e},{noAuth:!0})}function h(t){return i.default.post("user/relation/batch/create",t)}function b(t,e){return i.default.get("product/spu/hot/"+t,e,{noAuth:!0})}function m(t){return i.default.get("user/relation/product/lst",t)}function _(t,e){return i.default.get("store/product/reply/lst/"+t,e,{noAuth:!0})}function v(t){return i.default.get("reply/config/"+t)}function y(){return i.default.get("common/hot_keyword",{},{noAuth:!0})}function w(t){return i.default.get("store_list",t,{noAuth:!0})}function A(t){return i.default.get("store/merchant/lst",t,{noAuth:!0})}function x(t,e){return i.default.get("store/merchant/detail/"+t,e,{noAuth:!0})}function k(t,e){return i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function L(t,e){return i.default.get("store/merchant/category/lst/"+t,e,{noAuth:!0})}function C(t){return i.default.post("user/relation/create",{type:10,type_id:t})}function S(t){return i.default.post("user/relation/delete",{type:10,type_id:t})}function D(t){return i.default.get("coupon/store/"+t,{noAuth:!0})}function P(t){return i.default.get("user/relation/merchant/lst",t,{noAuth:!0})}function j(t){return i.default.post("ordero/express/"+t,{noAuth:!0})}function R(t){return i.default.get("store/product/category",t,{noAuth:!0})}function M(){return i.default.get("store/product/bag/explain")}function B(){return i.default.get("product/spu/bag/recommend")}function G(t){return i.default.get("product/spu/bag",t,{noAuth:!0})}function $(t,e){return i.default.get("store/merchant/qrcode/"+t,e,{noAuth:!0})}function E(t,e){return e.brand_id&&Array.isArray(e.brand_id)&&(e=(0,r.default)({},e),e.brand_id=e.brand_id.toString()),i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function T(t){return i.default.get("common/hot_banner/"+t,{},{noAuth:!0})}function O(t){return i.default.post("intention/create",t)}function q(t){return i.default.post("auth/verify",t)}function z(t){return i.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function H(){return i.default.get("broadcast/hot",{},{noAuth:!0})}function J(t){return i.default.get("broadcast/lst",t,{noAuth:!0})}function U(){return i.default.get("intention/cate")}function Y(t){return i.default.get("store/product/presell/detail/"+t,{},{noAuth:!0})}function F(t){return i.default.get("intention/lst",t)}function K(t){return i.default.get("intention/detail/"+t,{})}function Q(t,e){return i.default.post("intention/update/"+t,e)}function I(t){return i.default.get("lbs/geocoder?location=".concat(t.lat,",").concat(t.long),{},{noAuth:!0})}},d847:function(t,e,n){"use strict";var o=n("aed6"),r=n.n(o);r.a},fb35:function(t,e,n){"use strict";n("99af"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("ccb6"),r=getApp(),i={data:function(){return{storeList:[],isScroll:!0,page:1,limit:20,hide_mer_status:r.globalData.hide_mer_status}},onLoad:function(){this.getList()},onReady:function(){var t=this;uni.$on("update",(function(e){t.hide_mer_status=e.hide_mer_status}))},mounted:function(){var t=this,e=getApp();this.$nextTick((function(){t.hide_mer_status=e.globalData.hide_mer_status}))},methods:{goStore:function(t){1!=this.hide_mer_status&&uni.navigateTo({url:"/pages/store/home/index?id=".concat(t.merchant.mer_id)})},getList:function(){var t=this;this.isScroll&&(0,o.getMerchantLst)({page:this.page,limit:this.limit}).then((function(e){t.isScroll=e.data.list.length>=t.limit,t.storeList=t.storeList.concat(e.data.list),t.page+=1}))},bindDetele:function(t,e){var n=this;(0,o.collectDel)({type:10,type_id:t.type_id}).then((function(t){uni.showToast({title:"已取消",icon:"none"}),n.storeList.splice(e,1)}))}},onReachBottom:function(){this.getList()}};e.default=i}}]);