(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_coupon-index"],{"0e0a":function(t,e,n){"use strict";var i=n("c48f"),o=n.n(i);o.a},"510f":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=s,e.getLogo=a,e.setFormId=u,e.setCouponReceive=r,e.getCoupons=c,e.getShopCoupons=l,e.getUserCoupons=d,e.getArticleCategoryList=f,e.getArticleList=p,e.getArticleHotList=g,e.getArticleBannerList=v,e.getArticleDetails=h,e.loginMobile=b,e.verifyCode=m,e.registerVerify=w,e.phoneRegister=_,e.phoneRegisterReset=y,e.phoneLogin=x,e.switchH5Login=k,e.bindingPhone=C,e.logout=A,e.getTemlIds=L,e.pink=T,e.getCity=S,e.getLiveList=I;var o=i(n("db75"));function s(){return o.default.get("common/home",{},{noAuth:!0})}function a(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function u(t){return o.default.post("wechat/set_form_id",{formId:t})}function r(t){return o.default.post("coupon/receive/"+t)}function c(t){return o.default.get("coupon/product",t,{noAuth:!0})}function l(t){return o.default.get("coupon/store/"+t,{},{noAuth:!0})}function d(t){return o.default.get("coupon/list",t)}function f(){return o.default.get("article/category/lst",{},{noAuth:!0})}function p(t,e){return o.default.get("article/lst/"+t,e,{noAuth:!0})}function g(){return o.default.get("article/hot/list",{},{noAuth:!0})}function v(){return o.default.get("article/banner/list",{},{noAuth:!0})}function h(t){return o.default.get("article/detail/"+t,{},{noAuth:!0})}function b(t){return o.default.post("login/mobile",t,{noAuth:!0})}function m(){return o.default.get("verify_code",{},{noAuth:!0})}function w(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function _(t){return o.default.post("register",t,{noAuth:!0})}function y(t){return o.default.post("register/reset",t,{noAuth:!0})}function x(t){return o.default.post("login",t,{noAuth:!0})}function k(t){return o.default.post("user/switch",t)}function C(t){return o.default.post("user/binding",t)}function A(){return o.default.get("logout")}function L(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function T(){return o.default.get("pink",{},{noAuth:!0})}function S(){return o.default.get("system/city/lst",{},{noAuth:!0})}function I(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}},"67ef":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"navTabBox"},[n("v-uni-view",{staticClass:"longTab"},t._l(t.tabList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tab-item",class:{on:i==t.tabIndex-1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTab(i)}}},[n("v-uni-text",[t._v(t._s(e.title))])],1)})),1)],1),t.couponsList.length?n("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item acea-row row-center-wrapper",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goStore(e)}}},[n("v-uni-view",{staticClass:"money",class:0==e.status?"":"moneyGray"},[n("v-uni-view",[n("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),n("v-uni-view",{staticClass:"pic-num"},[t._v("滿"+t._s(e.use_min_price)+"元可用")])],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"condition line1"},[e.coupon&&0===e.coupon.type?n("v-uni-view",{staticClass:"line-title",class:0===e.status?"bg-color-huic":"bg-color-check"},[t._v("品牌券")]):1===e.applicable_type?n("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("品類券")]):n("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("商品券")]),n("v-uni-view",[t._v(t._s(e.coupon_title))])],1),n("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[n("v-uni-view",[t._v(t._s(t._f("timeYMD")(e.start_time))+"-"+t._s(t._f("timeYMD")(e.end_time)))]),0==e.status?n("v-uni-view",[n("v-uni-view",{staticClass:"bnt gray bg-color"},[t._v("可使用")])],1):t._e(),1==e.status?n("v-uni-view",{staticClass:"bnt gray"},[t._v("已使用")]):t._e(),2==e.status?n("v-uni-view",{staticClass:"bnt gray"},[t._v("已過期")]):t._e()],1)],1)],1)})),1):t._e(),t.couponsList.length||1!=t.loading?t._e():n("v-uni-view",{staticClass:"noCommodity"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:"/static/images/noCoupon.png"}})],1)],1)],1)},s=[]},"6f91":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navTabBox[data-v-376e5168]{background:#fff;height:%?90?%}.longTab[data-v-376e5168]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center}.tab-item[data-v-376e5168]{width:50%;display:inline-block;line-height:%?90?%}.tab-item uni-text[data-v-376e5168]{position:relative;display:inline-block}.tab-item.on[data-v-376e5168]{color:#ea3424}.tab-item.on uni-text[data-v-376e5168]:after{content:"";display:inline-block;width:90%;height:%?3?%;background:#ea3424;position:absolute;left:5%;bottom:0}.money[data-v-376e5168]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.pic-num[data-v-376e5168]{color:#fff;font-size:%?20?%}.coupon-list .item .text .condition[data-v-376e5168]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.condition .line-title[data-v-376e5168]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;height:%?40?%!important;padding:0 %?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff7f7;border:1px solid #e83323;opacity:1;border-radius:%?22?%;font-size:%?20?%!important;color:#e83323;margin-right:%?12?%}.noCommodity[data-v-376e5168]{width:100%}.noCommodity .pictrue[data-v-376e5168]{margin:0 auto}',""]),t.exports=e},"92a2":function(t,e,n){"use strict";n("99af"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("510f"),o=n("3135"),s=n("2f62"),a=getApp(),u={components:{},data:function(){return{tabIndex:1,couponsList:[],loading:!1,isAuto:!1,isShowAuth:!1,isUsed:0,hide_mer_status:a.globalData.hide_mer_status,tabList:[{title:"未使用"},{title:"已使用/已過期"}],limit:15,page:1,isScroll:!0}},computed:(0,s.mapGetters)(["isLogin"]),filters:{timeYMD:function(t){if(t){var e=/\d{4}-\d{1,2}-\d{1,2}/g.exec(t);return e[0]}}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,o.toLogin)()},mounted:function(){var t=this,e=getApp();this.$nextTick((function(){t.hide_mer_status=e.globalData.hide_mer_status}))},methods:{onLoadFun:function(){this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},bindTab:function(t){this.tabIndex=t+1,this.page=1,this.isScroll=!0,this.couponsList=[],this.getUseCoupons()},goStore:function(t){1!=this.hide_mer_status&&0==t.status&&uni.navigateTo({url:"/pages/store/home/index?id=".concat(t.mer_id)})},getUseCoupons:function(){var t=this;this.isScroll&&(0,i.getUserCoupons)({statusTag:this.tabIndex,page:this.page,limit:this.limit}).then((function(e){t.loading=!0,t.couponsList=t.couponsList.concat(e.data.list),t.isScroll=t.couponsList.length<e.data.count,t.page++}))}},onReachBottom:function(){this.getUseCoupons()}};e.default=u},ad37:function(t,e,n){"use strict";n.r(e);var i=n("92a2"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},c48f:function(t,e,n){var i=n("6f91");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("52f9f131",i,!0,{sourceMap:!1,shadowMode:!1})},d153:function(t,e,n){"use strict";n.r(e);var i=n("67ef"),o=n("ad37");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("0e0a");var a,u=n("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"376e5168",null,!1,i["a"],a);e["default"]=r.exports}}]);