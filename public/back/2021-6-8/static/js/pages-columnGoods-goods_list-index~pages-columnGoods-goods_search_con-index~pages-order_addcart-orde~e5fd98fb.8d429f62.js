(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-columnGoods-goods_list-index~pages-columnGoods-goods_search_con-index~pages-order_addcart-orde~e5fd98fb"],{"06a3":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=i,e.getCombinationUser=u,e.getActivitycategory=a,e.getCombinationDetail=c,e.getCombinationPink=s,e.postCombinationRemove=d,e.getSeckillDetail=l,e.getCombinationPoster=f,e.seckillCode=p,e.scombinationCode=g,e.getSeckillIndexTime=m,e.getSeckillList=v,e.getPresellList=b,e.getAssistList=A,e.initiateAssistApi=h,e.getAssistDetail=_,e.assistHelpList=y,e.presellAgreement=k,e.assistUserData=S,e.postAssistHelp=C,e.getAssistUser=P,e.getBargainUserList=x,e.getBargainUserCancel=j;var o=r(n("db75"));function i(t){return o.default.get("store/product/group/lst",t,{noAuth:!0})}function u(t){return o.default.get("store/product/group/count",t,{noAuth:!0})}function a(t){return o.default.get("product/spu/active/category/"+t,{},{noAuth:!0})}function c(t){return o.default.get("store/product/group/detail/"+t,{},{noAuth:!0})}function s(t){return o.default.get("store/product/group/get/"+t)}function d(t){return o.default.post("store/product/group/cancel",t)}function l(t){return o.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function f(t){return o.default.post("combination/poster",t)}function p(t,e){return o.default.get("seckill/code/"+t,e)}function g(t){return o.default.get("combination/code/"+t)}function m(){return o.default.get("store/product/seckill/select",{},{noAuth:!0})}function v(t){return o.default.get("store/product/seckill/lst",t,{noAuth:!0})}function b(t){return o.default.get("store/product/presell/lst",t,{noAuth:!0})}function A(t){return o.default.get("store/product/assist/lst",t,{noAuth:!0})}function h(t){return o.default.post("store/product/assist/create/"+t)}function _(t){return o.default.get("store/product/assist/detail/"+t)}function y(t,e){return o.default.get("store/product/assist/user/"+t,e)}function k(){return o.default.get("store/product/presell/agree")}function S(){return o.default.get("store/product/assist/count",{},{noAuth:!0})}function C(t){return o.default.post("store/product/assist/set/"+t)}function P(t){return o.default.get("store/product/assist/share/"+t)}function x(t){return o.default.get("store/product/assist/set/lst",t)}function j(t){return o.default.post("store/product/assist/set/delete/"+t)}},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},5549:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"recommend"},[n("v-uni-view",{staticClass:"common-hd"},[n("v-uni-view",{staticClass:"title"},[t._v("為你推薦")])],1),n("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper",class:t.indexP?"on":""},t._l(t.hostProduct,(function(e,r){return n("v-uni-view",{key:r,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.image}}),e.activity&&"1"===e.activity.type?n("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒殺")]):t._e(),e.activity&&"2"===e.activity.type?n("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍價")]):t._e(),e.activity&&"3"===e.activity.type?n("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼團")]):t._e()],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name line1"},[e.merchant.is_trader&&0==e.product_type?n("v-uni-text",{staticClass:"font-bg-red"},[t._v("自營")]):t._e(),0!=e.product_type?n("span",{class:"font_bg-red type"+e.product_type},[t._v(t._s(1==e.product_type?"秒殺":2==e.product_type?"預售":3==e.product_type?"助力":4==e.product_type?"拼團":""))]):t._e(),t._v(t._s(e.store_name))],1),n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-view",{staticClass:"money font-color"},[n("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1),e.issetCoupon?n("v-uni-text",{staticClass:"coupon font-color-red"},[t._v("領券")]):t._e()],1)],1)],1)})),1)],1)},i=[]},"5f76":function(t,e,n){var r=n("24fb"),o=n("1de5"),i=n("cd6a");e=r(!1);var u=o(i);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.common-hd[data-v-aedc8006]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?118?%}.common-hd .title[data-v-aedc8006]{padding:0 %?80?%;font-size:%?34?%;color:#e93323;font-weight:700;background-image:url('+u+");background-repeat:no-repeat;background-size:100% auto;background-position:0}.recommend .recommendList[data-v-aedc8006]{padding:0 %?20?%}.recommend .recommendList.on[data-v-aedc8006]{padding:0}.recommend .recommendList .item[data-v-aedc8006]{width:%?340?%;margin-bottom:%?30?%;background-color:#fff;border-radius:%?16?%;padding-bottom:%?20?%}.recommend .recommendList .item .text[data-v-aedc8006]{padding:0 %?20?%}.recommend .recommendList .item .coupon[data-v-aedc8006]{background:#fff8f7;border:1px solid #e93323;border-radius:%?4?%;font-size:%?20?%;margin-left:%?18?%;padding:%?1?% %?4?%}.recommend .recommendList .item .pictrue[data-v-aedc8006]{position:relative;width:100%;height:%?345?%}.recommend .recommendList .item .pictrue uni-image[data-v-aedc8006]{width:100%;height:100%;border-radius:%?16?% %?16?% 0 0}.recommend .recommendList .item .name[data-v-aedc8006]{font-size:%?28?%;color:#282828;margin:%?20?% 0 %?10?% 0}.recommend .recommendList .item .money[data-v-aedc8006]{font-size:%?20?%;font-weight:700}.recommend .recommendList .item .money .num[data-v-aedc8006]{font-size:%?34?%}",""]),t.exports=e},"7a04":function(t,e,n){"use strict";var r=n("7ce2"),o=n.n(r);o.a},"7ce2":function(t,e,n){var r=n("5f76");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("8c71d17a",r,!0,{sourceMap:!1,shadowMode:!1})},9140:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),o=n("c39d"),i=(n("b644"),n("06a3")),u=n("3135"),a={computed:(0,r.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}},indexP:{type:Boolean,default:!1},isLogin:{type:Boolean,default:!1}},data:function(){return{}},methods:{goDetail:function(t){var e=this;(0,o.goShopDetail)(t,this.uid).then((function(n){e.isLogin?(0,i.initiateAssistApi)(t.activity_id).then((function(t){var e=t.data.product_assist_set_id;uni.hideLoading(),uni.navigateTo({url:"/pages/activity/assist_detail/index?id="+e})})).catch((function(t){uni.showToast({title:t,icon:"none"})})):(0,u.toLogin)()}))}}};e.default=a},b0c8:function(t,e,n){"use strict";n.r(e);var r=n("5549"),o=n("efe1");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("7a04");var u,a=n("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"aedc8006",null,!1,r["a"],u);e["default"]=c.exports},b644:function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=o,e.openPaySubscribe=i,e.openOrderSubscribe=u,e.openExtrctSubscribe=a,e.openPinkSubscribe=c,e.openBargainSubscribe=s,e.openOrderRefundSubscribe=d,e.openRechargeSubscribe=l,e.openEextractSubscribe=f,e.subscribe=p;var r=n("3e0d");function o(){var t={},e=uni.getStorageSync(r.SUBSCRIBE_MESSAGE);return t=e||{},t}function i(){var t=o();return p([t.ORDER_POSTAGE_SUCCESS,t.ORDER_DELIVER_SUCCESS,t.ORDER_PAY_SUCCESS])}function u(){var t=o();return p([t.ORDER_DELIVER_SUCCESS,t.ORDER_POSTAGE_SUCCESS])}function a(){var t=o();return p([t.user_extract])}function c(){var t=o();return p([t.pink_true])}function s(){var t=o();return p([t.bargain_success])}function d(){var t=o();return p([t.ORDER_REFUND_NOTICE])}function l(){var t=o();return p([t.RECHARGE_SUCCESS])}function f(){var t=o();return p([t.USER_EXTRACT])}function p(t){wx;return new Promise((function(e,n){uni.requestSubscribeMessage({tmplIds:t,success:function(t){return e(t)},fail:function(t){return e(t)},complete:function(t){}})}))}},c39d:function(t,e,n){"use strict";function r(t,e){return new Promise((function(e){1===t.product_type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.product_id,"&time=").concat(t.stop_time)}):2===t.product_type?uni.navigateTo({url:"/pages/activity/presell_details/index?id=".concat(t.activity_id)}):0===t.product_type?uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.product_id)}):4===t.product_type?uni.navigateTo({url:"/pages/activity/combination_details/index?id=".concat(t.activity_id)}):e(t)}))}n("99af"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=r},cd6a:function(t,e){t.exports="data:image/png;base64,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"},e774:function(t,e,n){"use strict";var r=n("4ea4");n("99af"),n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=u,e.getProductCode=a,e.collectAdd=c,e.collectDel=s,e.postCartAdd=d,e.getCategoryList=l,e.getProductslist=f,e.getBrandlist=p,e.getProductHot=g,e.collectAll=m,e.getGroomList=v,e.getCollectUserList=b,e.getReplyList=A,e.getReplyConfig=h,e.getSearchKeyword=_,e.storeListApi=y,e.storeMerchantList=k,e.getStoreDetail=S,e.getStoreGoods=C,e.getStoreCategory=P,e.followStore=x,e.unfollowStore=j,e.getStoreCoupon=D,e.getMerchantLst=w,e.express=T,e.storeCategory=E,e.bagExplain=z,e.bagRecommend=L,e.productBag=R,e.merchantQrcode=H,e.merchantProduct=U,e.getHotBanner=B,e.create=O,e.verify=V,e.getSeckillProductDetail=G,e.getLiveList=F,e.getBroadcastListApi=X,e.merClassifly=M,e.getPresellProductDetail=q,e.getApplicationRecordList=Z,e.getGoodsDetails=I,e.updateGoodsRecord=J,e.getGeocoder=Q;var o=r(n("5530")),i=r(n("db75"));function u(t){return i.default.get("store/product/detail/"+t,{},{noAuth:!0})}function a(t,e){return i.default.get("store/product/qrcode/"+t,e,{noAuth:!0})}function c(t){return i.default.post("user/relation/create",t)}function s(t){return i.default.post("user/relation/delete",t)}function d(t){return i.default.post("user/cart/create",t)}function l(){return i.default.get("store/product/category/lst",{},{noAuth:!0})}function f(t){return t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,o.default)({},t),t.brand_id=t.brand_id.toString()),i.default.get("product/spu/lst",t,{noAuth:!0})}function p(t){return i.default.get("store/product/brand/lst",t,{noAuth:!0})}function g(t,e){return i.default.get("product/spu/recommend",{page:void 0===t?1:t,limit:void 0===e?10:e},{noAuth:!0})}function m(t){return i.default.post("user/relation/batch/create",t)}function v(t,e){return i.default.get("product/spu/hot/"+t,e,{noAuth:!0})}function b(t){return i.default.get("user/relation/product/lst",t)}function A(t,e){return i.default.get("store/product/reply/lst/"+t,e,{noAuth:!0})}function h(t){return i.default.get("reply/config/"+t)}function _(){return i.default.get("common/hot_keyword",{},{noAuth:!0})}function y(t){return i.default.get("store_list",t,{noAuth:!0})}function k(t){return i.default.get("store/merchant/lst",t,{noAuth:!0})}function S(t,e){return i.default.get("store/merchant/detail/"+t,e,{noAuth:!0})}function C(t,e){return i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function P(t,e){return i.default.get("store/merchant/category/lst/"+t,e,{noAuth:!0})}function x(t){return i.default.post("user/relation/create",{type:10,type_id:t})}function j(t){return i.default.post("user/relation/delete",{type:10,type_id:t})}function D(t){return i.default.get("coupon/store/"+t,{noAuth:!0})}function w(t){return i.default.get("user/relation/merchant/lst",t,{noAuth:!0})}function T(t){return i.default.post("ordero/express/"+t,{noAuth:!0})}function E(t){return i.default.get("store/product/category",t,{noAuth:!0})}function z(){return i.default.get("store/product/bag/explain")}function L(){return i.default.get("product/spu/bag/recommend")}function R(t){return i.default.get("product/spu/bag",t,{noAuth:!0})}function H(t,e){return i.default.get("store/merchant/qrcode/"+t,e,{noAuth:!0})}function U(t,e){return e.brand_id&&Array.isArray(e.brand_id)&&(e=(0,o.default)({},e),e.brand_id=e.brand_id.toString()),i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function B(t){return i.default.get("common/hot_banner/"+t,{},{noAuth:!0})}function O(t){return i.default.post("intention/create",t)}function V(t){return i.default.post("auth/verify",t)}function G(t){return i.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function F(){return i.default.get("broadcast/hot",{},{noAuth:!0})}function X(t){return i.default.get("broadcast/lst",t,{noAuth:!0})}function M(){return i.default.get("intention/cate")}function q(t){return i.default.get("store/product/presell/detail/"+t,{},{noAuth:!0})}function Z(t){return i.default.get("intention/lst",t)}function I(t){return i.default.get("intention/detail/"+t,{})}function J(t,e){return i.default.post("intention/update/"+t,e)}function Q(t){return i.default.get("lbs/geocoder?location=".concat(t.lat,",").concat(t.long),{},{noAuth:!0})}},efe1:function(t,e,n){"use strict";n.r(e);var r=n("9140"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a}}]);