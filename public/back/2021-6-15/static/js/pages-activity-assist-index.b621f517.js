(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-assist-index"],{"0496":function(t,e,i){t.exports=i.p+"static/img/assist.628af859.png"},"06a3":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=s,e.getCombinationUser=a,e.getActivitycategory=r,e.getCombinationDetail=c,e.getCombinationPink=u,e.postCombinationRemove=d,e.getSeckillDetail=l,e.getCombinationPoster=f,e.seckillCode=g,e.scombinationCode=b,e.getSeckillIndexTime=p,e.getSeckillList=v,e.getPresellList=h,e.getAssistList=m,e.initiateAssistApi=w,e.getAssistDetail=_,e.assistHelpList=C,e.presellAgreement=x,e.assistUserData=S,e.postAssistHelp=y,e.getAssistUser=A,e.getBargainUserList=E,e.getBargainUserCancel=k;var o=n(i("db75"));function s(t){return o.default.get("store/product/group/lst",t,{noAuth:!0})}function a(t){return o.default.get("store/product/group/count",t,{noAuth:!0})}function r(t){return o.default.get("product/spu/active/category/"+t,{},{noAuth:!0})}function c(t){return o.default.get("store/product/group/detail/"+t,{},{noAuth:!0})}function u(t){return o.default.get("store/product/group/get/"+t)}function d(t){return o.default.post("store/product/group/cancel",t)}function l(t){return o.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function f(t){return o.default.post("combination/poster",t)}function g(t,e){return o.default.get("seckill/code/"+t,e)}function b(t){return o.default.get("combination/code/"+t)}function p(){return o.default.get("store/product/seckill/select",{},{noAuth:!0})}function v(t){return o.default.get("store/product/seckill/lst",t,{noAuth:!0})}function h(t){return o.default.get("store/product/presell/lst",t,{noAuth:!0})}function m(t){return o.default.get("store/product/assist/lst",t,{noAuth:!0})}function w(t){return o.default.post("store/product/assist/create/"+t)}function _(t){return o.default.get("store/product/assist/detail/"+t)}function C(t,e){return o.default.get("store/product/assist/user/"+t,e)}function x(){return o.default.get("store/product/presell/agree")}function S(){return o.default.get("store/product/assist/count",{},{noAuth:!0})}function y(t){return o.default.post("store/product/assist/set/"+t)}function A(t){return o.default.get("store/product/assist/share/"+t)}function E(t){return o.default.get("store/product/assist/set/lst",t)}function k(t){return o.default.post("store/product/assist/set/delete/"+t)}},"0ff7":function(t,e,i){"use strict";i.r(e);var n=i("fbdd"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},3763:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"bargain-list"},[n("v-uni-view",{staticClass:"header"},[n("img",{staticClass:"assistBg",attrs:{mode:"widthFix",src:i("0496"),alt:""}})]),n("v-uni-view",{staticClass:"list"},[t._l(t.assistList,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openSubscribe(e.product_assist_id)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.product.image}})],1),n("v-uni-view",{staticClass:"text acea-row row-column-around"},[n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),n("v-uni-view",{staticClass:"num"},[n("v-uni-text",{staticClass:"iconfont icon-pintuan"}),t._v(t._s(e.user_count)+"人正在參與")],1),n("v-uni-view",{staticClass:"money color-red"},[t._v("助力價:"),n("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),n("v-uni-text",{staticClass:"price"},[t._v(t._s(e.assistSku?e.assistSku[0].assist_price:""))])],1)],1),n("v-uni-view",{staticClass:"cutBnt bg-color"},[t._v("發起助力")])],1)]}))],2)],1),n("home")],1)},s=[]},"4d1e":function(t,e,i){var n=i("bc9a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3239ec29",n,!0,{sourceMap:!1,shadowMode:!1})},5079:function(t,e,i){"use strict";i.r(e);var n=i("3763"),o=i("0ff7");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("c13c");var a,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"498dc2be",null,!1,n["a"],a);e["default"]=c.exports},"561e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},s=[]},7881:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-498dc2be]{background-color:#e93323}.noCommodity[data-v-498dc2be]{border-top:none}.bargain-list .header[data-v-498dc2be]{width:100%;position:relative}.bargain-list .header .assistBg[data-v-498dc2be]{width:%?750?%}.bargain-list .list[data-v-498dc2be]{background-color:#fff;border:%?6?% solid #fc8b42;border-radius:%?30?%;margin:%?-90?% %?30?% %?66?% %?30?%;padding:0 %?24?%}.bargain-list .list .item[data-v-498dc2be]{border-bottom:%?1?% solid #eee;position:relative;height:%?223?%}.bargain-list .list .item .pictrue[data-v-498dc2be]{width:%?160?%;height:%?160?%}.bargain-list .list .item .pictrue uni-image[data-v-498dc2be]{width:100%;height:100%;border-radius:%?6?%}.bargain-list .list .item .text[data-v-498dc2be]{width:%?450?%;font-size:%?30?%;color:#282828;height:%?160?%}.bargain-list .list .item .text .name[data-v-498dc2be]{width:100%}.bargain-list .list .item .text .num[data-v-498dc2be]{font-size:%?26?%;color:#999}.bargain-list .list .item .text .num .iconfont[data-v-498dc2be]{font-size:%?35?%;margin-right:%?7?%}.bargain-list .list .item .text .money[data-v-498dc2be]{font-size:%?24?%;font-weight:700}.color-red[data-v-498dc2be]{color:#e93323}.bargain-list .list .item .text .money .price[data-v-498dc2be]{font-size:%?32?%}.bargain-list .list .item .cutBnt[data-v-498dc2be]{position:absolute;width:%?180?%;height:%?50?%;border-radius:%?50?%;font-size:%?24?%;color:#fff;text-align:center;line-height:%?46?%;right:%?24?%;bottom:%?28?%;box-shadow:0 %?7?% 0 #f8c1bd}.bargain-list .list .item .cutBnt .iconfont[data-v-498dc2be]{margin-right:%?8?%;font-size:%?30?%}.bargain-list .list .load[data-v-498dc2be]{font-size:%?24?%;height:%?85?%;text-align:center;line-height:%?85?%}body.?%PAGE?%[data-v-498dc2be]{background-color:#e93323}',""]),t.exports=e},8690:function(t,e,i){"use strict";i.r(e);var n=i("561e"),o=i("9629");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("a8d1");var a,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"4b22b7b1",null,!1,n["a"],a);e["default"]=c.exports},"88b9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),o={name:"Home",props:{},data:function(){return{top:"",bottom:""}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY,e.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=o},9629:function(t,e,i){"use strict";i.r(e);var n=i("88b9"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},a8d1:function(t,e,i){"use strict";var n=i("4d1e"),o=i.n(n);o.a},b644:function(t,e,i){"use strict";i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=o,e.openPaySubscribe=s,e.openOrderSubscribe=a,e.openExtrctSubscribe=r,e.openPinkSubscribe=c,e.openBargainSubscribe=u,e.openOrderRefundSubscribe=d,e.openRechargeSubscribe=l,e.openEextractSubscribe=f,e.subscribe=g;var n=i("3e0d");function o(){var t={},e=uni.getStorageSync(n.SUBSCRIBE_MESSAGE);return t=e||{},t}function s(){var t=o();return g([t.ORDER_POSTAGE_SUCCESS,t.ORDER_DELIVER_SUCCESS,t.ORDER_PAY_SUCCESS])}function a(){var t=o();return g([t.ORDER_DELIVER_SUCCESS,t.ORDER_POSTAGE_SUCCESS])}function r(){var t=o();return g([t.user_extract])}function c(){var t=o();return g([t.pink_true])}function u(){var t=o();return g([t.bargain_success])}function d(){var t=o();return g([t.ORDER_REFUND_NOTICE])}function l(){var t=o();return g([t.RECHARGE_SUCCESS])}function f(){var t=o();return g([t.USER_EXTRACT])}function g(t){wx;return new Promise((function(e,i){uni.requestSubscribeMessage({tmplIds:t,success:function(t){return e(t)},fail:function(t){return e(t)},complete:function(t){}})}))}},bbae:function(t,e,i){var n=i("7881");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3080130e",n,!0,{sourceMap:!1,shadowMode:!1})},bc9a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-4b22b7b1]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4b22b7b1]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4b22b7b1]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4b22b7b1]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4b22b7b1]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4b22b7b1]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4b22b7b1]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},c13c:function(t,e,i){"use strict";var n=i("bbae"),o=i.n(n);o.a},fbdd:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("06a3"),s=n(i("8690")),a=(i("b644"),i("5446")),r=i("3135"),c=i("2f62"),u={components:{home:s.default},data:function(){return{topImage:"",assistList:[],active:0,type:0,scrollLeft:0,interval:0,status:1,page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,userInfo:{},isAuto:!1,isShowAuth:!1}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getUserInfo(),this.getAssistProductList())},deep:!0}},onLoad:function(){this.getAssistProductList(),this.isLogin&&this.getUserInfo()},methods:{onLoadFun:function(t){this.getUserInfo(),this.isShowAuth=!1},getAssistProductList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,o.getAssistList)(e).then((function(e){var i=e.data.list,n=i.length<t.limit;t.page++,t.assistList=t.assistList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=n})).catch((function(e){t.pageloading=!1})))},openSubscribe:function(t){this.isLogin?(0,o.initiateAssistApi)(t).then((function(t){var e=t.data.product_assist_set_id;uni.hideLoading(),uni.navigateTo({url:"/pages/activity/assist_detail/index?id="+e})})).catch((function(t){uni.showToast({title:t,icon:"none"})})):(0,r.toLogin)()},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,a.getUserInfo)().then((function(e){t.$set(t,"userInfo",e.data)}))}},onReachBottom:function(){this.getAssistProductList()}};e.default=u}}]);