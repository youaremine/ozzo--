(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-columnGoods-goods_search-index"],{"0204":function(t,e,n){var o=n("fd9f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("c756d496",o,!0,{sourceMap:!1,shadowMode:!1})},"0e9b":function(t,e,n){"use strict";n.r(e);var o=n("58bb"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a},"27da":function(t,e,n){"use strict";n.r(e);var o=n("9882"),r=n("0e9b");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5fe9"),n("a383");var i,s=n("f0c5"),u=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"3629dd8a",null,!1,o["a"],i);e["default"]=u.exports},"58bb":function(t,e,n){"use strict";n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("ccb6"),r={data:function(){return{hostProduct:[],searchValue:"",focus:!0,bastList:[],hotSearchList:[],first:0,limit:8,page:1,loading:!1,loadend:!1,loadTitle:"加載更多",hotPage:1,isScroll:!0,historyList:[],tempStorage:[],historyBox:!1,hotSearchBox:!1}},onLoad:function(){},onShow:function(){try{this.historyList=[],this.tempStorage=[];var t=uni.getStorageSync("historyList");t.length>0?this.historyList=t:this.historyList=[],this.tempStorage=this.historyList}catch(e){}this.getRoutineHotSearch()},methods:{remove:function(){var t=this;uni.showModal({title:"提示",content:"確認刪除全部搜索歷史記錄？",success:function(e){if(e.confirm){t.tempStorage=[];try{uni.setStorageSync("historyList",t.tempStorage),t.historyList=[]}catch(n){}}else e.cancel}})},getRoutineHotSearch:function(){var t=this;(0,o.getSearchKeyword)().then((function(e){t.$set(t,"hotSearchList",e.data)}))},setHotSearchValue:function(t,e){var n=this;this.focus=!1,e?this.$set(this,"searchValue",t.keyword):this.$set(this,"searchValue",t),this.$nextTick((function(){n.focus=!0})),this.searchBut()},setValue:function(t){this.$set(this,"searchValue",t.detail.value)},searchBut:function(){var t=this,e=!1;this.tempStorage.forEach((function(n,o){n==t.searchValue&&(e=!0)})),!e&&this.searchValue&&this.tempStorage.unshift(this.searchValue);try{uni.setStorageSync("historyList",this.tempStorage)}catch(n){}uni.navigateTo({url:"/pages/columnGoods/goods_search_con/index?searchValue="+this.searchValue})}}};e.default=r},"5fe9":function(t,e,n){"use strict";var o=n("63b9"),r=n.n(o);r.a},"63b9":function(t,e,n){var o=n("a571");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("d3967088",o,!0,{sourceMap:!1,shadowMode:!1})},9882:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"status_bar"}),n("v-uni-view",{staticClass:"searchGood"},[n("v-uni-view",{staticClass:"search acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"input acea-row row-between-wrapper"},[n("v-uni-text",{staticClass:"iconfont icon-sousuo2"}),n("v-uni-input",{attrs:{type:"text",value:t.searchValue,focus:t.focus,placeholder:"點擊搜索商品、品牌名稱","placeholder-class":"placeholder"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.setValue.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"bnt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchBut.apply(void 0,arguments)}}},[t._v("搜索")])],1),n("v-uni-view",{staticClass:"title"},[t._v("歷史記錄"),n("v-uni-text",{staticClass:"iconfont icon-shanchu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove.apply(void 0,arguments)}}})],1),t.historyList.length>0?n("v-uni-view",{staticClass:"list acea-row",style:{height:t.historyBox?"auto":"150rpx"}},[t._l(t.historyList,(function(e,o){return[n("v-uni-view",{key:o+"_0",staticClass:"item line1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setHotSearchValue(e,0)}}},[t._v(t._s(e))])]}))],2):t._e(),n("v-uni-view",[t.historyList.length>9&&!t.historyBox?n("v-uni-view",{staticClass:"more-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.historyBox=!0}}},[t._v("展開全部"),n("v-uni-text",{staticClass:"iconfont icon-xiangxia"})],1):t._e(),t.historyList.length>9&&t.historyBox?n("v-uni-view",{staticClass:"more-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.historyBox=!1}}},[t._v("收起"),n("v-uni-text",{staticClass:"iconfont icon-xiangshang"})],1):t._e()],1),0==t.historyList.length?n("v-uni-view",{staticStyle:{"text-align":"center",color:"#999"}},[t._v("暫無歷史記錄~")]):t._e(),n("v-uni-view",{staticClass:"title"},[t._v("熱門搜索")]),n("v-uni-view",{staticClass:"list acea-row",style:{height:t.hotSearchBox?"auto":"150rpx"}},[t._l(t.hotSearchList,(function(e,o){return[n("v-uni-view",{key:o+"_0",staticClass:"item line1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setHotSearchValue(e,1)}}},[t._v(t._s(e.keyword))])]}))],2),n("v-uni-view",[t.hotSearchList.length>8&&!t.hotSearchBox?n("v-uni-view",{staticClass:"more-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hotSearchBox=!0}}},[t._v("展開全部"),n("v-uni-text",{staticClass:"iconfont icon-xiangxia"})],1):t._e(),t.hotSearchList.length>8&&t.hotSearchBox?n("v-uni-view",{staticClass:"more-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hotSearchBox=!1}}},[t._v("收起"),n("v-uni-text",{staticClass:"iconfont icon-xiangshang"})],1):t._e()],1)],1)],1)},a=[]},a383:function(t,e,n){"use strict";var o=n("0204"),r=n.n(o);r.a},a571:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-3629dd8a]{background-color:#fff}body.?%PAGE?%[data-v-3629dd8a]{background-color:#fff}",""]),t.exports=e},ccb6:function(t,e,n){"use strict";var o=n("4ea4");n("99af"),n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=i,e.getProductCode=s,e.collectAdd=u,e.collectDel=c,e.postCartAdd=d,e.getCategoryList=l,e.getProductslist=h,e.getBrandlist=f,e.getProductHot=g,e.collectAll=p,e.getGroomList=v,e.getCollectUserList=b,e.getReplyList=y,e.getReplyConfig=m,e.getSearchKeyword=w,e.storeListApi=x,e.storeMerchantList=_,e.getStoreDetail=S,e.getStoreGoods=A,e.getStoreCategory=L,e.followStore=k,e.unfollowStore=C,e.getStoreCoupon=G,e.getMerchantLst=B,e.express=V,e.storeCategory=$,e.bagExplain=E,e.bagRecommend=P,e.productBag=M,e.merchantQrcode=z,e.merchantProduct=R,e.getHotBanner=H,e.create=D,e.verify=j,e.getSeckillProductDetail=T,e.getLiveList=O,e.getBroadcastListApi=q,e.merClassifly=J,e.getPresellProductDetail=K,e.getApplicationRecordList=U,e.getGoodsDetails=Y,e.updateGoodsRecord=F,e.getGeocoder=Q;var r=o(n("5530")),a=o(n("9999"));function i(t){return a.default.get("store/product/detail/"+t,{},{noAuth:!0})}function s(t,e){return a.default.get("store/product/qrcode/"+t,e,{noAuth:!0})}function u(t){return a.default.post("user/relation/create",t)}function c(t){return a.default.post("user/relation/delete",t)}function d(t){return a.default.post("user/cart/create",t)}function l(){return a.default.get("store/product/category/lst",{},{noAuth:!0})}function h(t){return t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,r.default)({},t),t.brand_id=t.brand_id.toString()),a.default.get("product/spu/lst",t,{noAuth:!0})}function f(t){return a.default.get("store/product/brand/lst",t,{noAuth:!0})}function g(t,e){return a.default.get("product/spu/recommend",{page:void 0===t?1:t,limit:void 0===e?10:e},{noAuth:!0})}function p(t){return a.default.post("user/relation/batch/create",t)}function v(t,e){return a.default.get("product/spu/hot/"+t,e,{noAuth:!0})}function b(t){return a.default.get("user/relation/product/lst",t)}function y(t,e){return a.default.get("store/product/reply/lst/"+t,e,{noAuth:!0})}function m(t){return a.default.get("reply/config/"+t)}function w(){return a.default.get("common/hot_keyword",{},{noAuth:!0})}function x(t){return a.default.get("store_list",t,{noAuth:!0})}function _(t){return a.default.get("store/merchant/lst",t,{noAuth:!0})}function S(t,e){return a.default.get("store/merchant/detail/"+t,e,{noAuth:!0})}function A(t,e){return a.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function L(t,e){return a.default.get("store/merchant/category/lst/"+t,e,{noAuth:!0})}function k(t){return a.default.post("user/relation/create",{type:10,type_id:t})}function C(t){return a.default.post("user/relation/delete",{type:10,type_id:t})}function G(t){return a.default.get("coupon/store/"+t,{noAuth:!0})}function B(t){return a.default.get("user/relation/merchant/lst",t,{noAuth:!0})}function V(t){return a.default.post("ordero/express/"+t,{noAuth:!0})}function $(t){return a.default.get("store/product/category",t,{noAuth:!0})}function E(){return a.default.get("store/product/bag/explain")}function P(){return a.default.get("product/spu/bag/recommend")}function M(t){return a.default.get("product/spu/bag",t,{noAuth:!0})}function z(t,e){return a.default.get("store/merchant/qrcode/"+t,e,{noAuth:!0})}function R(t,e){return e.brand_id&&Array.isArray(e.brand_id)&&(e=(0,r.default)({},e),e.brand_id=e.brand_id.toString()),a.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function H(t){return a.default.get("common/hot_banner/"+t,{},{noAuth:!0})}function D(t){return a.default.post("intention/create",t)}function j(t){return a.default.post("auth/verify",t)}function T(t){return a.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function O(){return a.default.get("broadcast/hot",{},{noAuth:!0})}function q(t){return a.default.get("broadcast/lst",t,{noAuth:!0})}function J(){return a.default.get("intention/cate")}function K(t){return a.default.get("store/product/presell/detail/"+t,{},{noAuth:!0})}function U(t){return a.default.get("intention/lst",t)}function Y(t){return a.default.get("intention/detail/"+t,{})}function F(t,e){return a.default.post("intention/update/"+t,e)}function Q(t){return a.default.get("lbs/geocoder?location=".concat(t.lat,",").concat(t.long),{},{noAuth:!0})}},fd9f:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.searchGood .search[data-v-3629dd8a]{padding-left:%?30?%}.searchGood .search[data-v-3629dd8a]{margin-top:%?20?%}.searchGood .search .input[data-v-3629dd8a]{width:%?598?%;background-color:#f7f7f7;border-radius:%?33?%;padding:0 %?35?%;box-sizing:border-box;height:%?66?%}.searchGood .search .input uni-input[data-v-3629dd8a]{width:%?472?%;font-size:%?28?%}.searchGood .search .input .placeholder[data-v-3629dd8a]{color:#bbb}.searchGood .search .input .iconfont[data-v-3629dd8a]{color:#000;font-size:%?35?%}.searchGood .search .bnt[data-v-3629dd8a]{width:%?120?%;text-align:center;height:%?66?%;line-height:%?66?%;font-size:%?30?%;color:#282828}.searchGood .title[data-v-3629dd8a]{position:relative;font-size:%?28?%;color:#282828;margin:%?50?% %?30?% %?25?% %?30?%}.searchGood .title .icon-shanchu[data-v-3629dd8a]{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#999}.searchGood .list[data-v-3629dd8a]{padding:0 %?10?%;overflow:hidden}.searchGood .list .item[data-v-3629dd8a]{font-size:%?26?%;color:#666;padding:0 %?21?%;height:%?60?%;background:#f2f2f2;border-radius:%?22?%;line-height:%?60?%;margin:0 0 %?20?% %?20?%;max-width:%?150?%}.searchGood .line[data-v-3629dd8a]{border-bottom:%?1?% solid #eee;margin:%?20?% %?30?% 0 %?30?%}.more-btn[data-v-3629dd8a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:0 0 %?20?% %?20?%;height:%?60?%;font-size:%?24?%;color:#999}.more-btn .iconfont[data-v-3629dd8a]{font-size:%?22?%;margin-left:%?10?%}',""]),t.exports=e}}]);