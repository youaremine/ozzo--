(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-liveBroadcast-index"],{"11c7":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=o,e.getProductCode=s,e.collectAdd=u,e.collectDel=c,e.postCartAdd=l,e.getCategoryList=d,e.getProductslist=p,e.getBrandlist=f,e.getProductHot=g,e.collectAll=v,e.getGroomList=b,e.getCollectUserList=h,e.getReplyList=m,e.getReplyConfig=w,e.getSearchKeyword=y,e.storeListApi=_,e.storeMerchantList=x,e.getStoreDetail=k,e.getStoreGoods=A,e.getStoreCategory=C,e.followStore=L,e.unfollowStore=B,e.getStoreCoupon=j,e.getMerchantLst=z,e.express=P,e.storeCategory=S,e.bagExplain=M,e.bagRecommend=R,e.productBag=T,e.merchantQrcode=E,e.merchantProduct=O,e.getHotBanner=D,e.create=$,e.verify=G,e.getSeckillProductDetail=H,e.getLiveList=F,e.getBroadcastListApi=I,e.merClassifly=Y,e.getPresellProductDetail=q,e.getApplicationRecordList=J,e.getGoodsDetails=K,e.updateGoodsRecord=U,e.getGeocoder=N;var n=a(i("5530")),r=a(i("5a6c"));function o(t){return r.default.get("store/product/detail/"+t,{},{noAuth:!0})}function s(t,e){return r.default.get("store/product/qrcode/"+t,e,{noAuth:!0})}function u(t){return r.default.post("user/relation/create",t)}function c(t){return r.default.post("user/relation/delete",t)}function l(t){return r.default.post("user/cart/create",t)}function d(){return r.default.get("store/product/category/lst",{},{noAuth:!0})}function p(t){return t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,n.default)({},t),t.brand_id=t.brand_id.toString()),r.default.get("product/spu/lst",t,{noAuth:!0})}function f(t){return r.default.get("store/product/brand/lst",t,{noAuth:!0})}function g(t,e){return r.default.get("product/spu/recommend",{page:void 0===t?1:t,limit:void 0===e?10:e},{noAuth:!0})}function v(t){return r.default.post("user/relation/batch/create",t)}function b(t,e){return r.default.get("product/spu/hot/"+t,e,{noAuth:!0})}function h(t){return r.default.get("user/relation/product/lst",t)}function m(t,e){return r.default.get("store/product/reply/lst/"+t,e,{noAuth:!0})}function w(t){return r.default.get("reply/config/"+t)}function y(){return r.default.get("common/hot_keyword",{},{noAuth:!0})}function _(t){return r.default.get("store_list",t,{noAuth:!0})}function x(t){return r.default.get("store/merchant/lst",t,{noAuth:!0})}function k(t,e){return r.default.get("store/merchant/detail/"+t,e,{noAuth:!0})}function A(t,e){return r.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function C(t,e){return r.default.get("store/merchant/category/lst/"+t,e,{noAuth:!0})}function L(t){return r.default.post("user/relation/create",{type:10,type_id:t})}function B(t){return r.default.post("user/relation/delete",{type:10,type_id:t})}function j(t){return r.default.get("coupon/store/"+t,{noAuth:!0})}function z(t){return r.default.get("user/relation/merchant/lst",t,{noAuth:!0})}function P(t){return r.default.post("ordero/express/"+t,{noAuth:!0})}function S(t){return r.default.get("store/product/category",t,{noAuth:!0})}function M(){return r.default.get("store/product/bag/explain")}function R(){return r.default.get("product/spu/bag/recommend")}function T(t){return r.default.get("product/spu/bag",t,{noAuth:!0})}function E(t,e){return r.default.get("store/merchant/qrcode/"+t,e,{noAuth:!0})}function O(t,e){return e.brand_id&&Array.isArray(e.brand_id)&&(e=(0,n.default)({},e),e.brand_id=e.brand_id.toString()),r.default.get("product/spu/merchant/"+t,e,{noAuth:!0})}function D(t){return r.default.get("common/hot_banner/"+t,{},{noAuth:!0})}function $(t){return r.default.post("intention/create",t)}function G(t){return r.default.post("auth/verify",t)}function H(t){return r.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function F(){return r.default.get("broadcast/hot",{},{noAuth:!0})}function I(t){return r.default.get("broadcast/lst",t,{noAuth:!0})}function Y(){return r.default.get("intention/cate")}function q(t){return r.default.get("store/product/presell/detail/"+t,{},{noAuth:!0})}function J(t){return r.default.get("intention/lst",t)}function K(t){return r.default.get("intention/detail/"+t,{})}function U(t,e){return r.default.post("intention/update/"+t,e)}function N(t){return r.default.get("lbs/geocoder?location=".concat(t.lat,",").concat(t.long),{},{noAuth:!0})}},3328:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),n={name:"Home",props:{},data:function(){return{top:"",bottom:""}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY,e.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=n},"43f0":function(t,e,i){"use strict";i.r(e);var a=i("3328"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"4d81":function(t,e,i){"use strict";var a=i("e6aa"),n=i.n(a);n.a},"6b0e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.main[data-v-11701830]{padding:0 %?20?%;margin-top:%?20?%}.main .row-between-wrapper[data-v-11701830]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-radius:%?18?%}.main .row-between-wrapper .live-image[data-v-11701830]{position:relative;width:50%;height:%?272?%;border-radius:%?18?% 0 0 %?18?%}.main .row-between-wrapper .live-image .image[data-v-11701830]{width:100%;height:100%;border-radius:%?18?% 0 0 %?18?%}.main .row-between-wrapper .live-wrapper[data-v-11701830]{width:50%;height:%?272?%;padding:%?20?%;background:#fff;border-radius:0 %?18?% %?18?% 0;position:relative}.main .row-between-wrapper .live-wrapper .live-title[data-v-11701830]{font-size:%?30?%;color:#282828;font-weight:700}.main .row-between-wrapper .live-wrapper .live-store[data-v-11701830]{font-size:%?24?%;color:#666}.main .row-between-wrapper .live-wrapper .pro-count[data-v-11701830]{width:%?330?%;height:%?100?%;white-space:nowrap;position:absolute;bottom:%?20?%}.main .row-between-wrapper .live-wrapper .item[data-v-11701830]{width:%?100?%;height:%?100?%;margin-right:%?15?%;border-radius:%?8?%;position:relative}.main .row-between-wrapper .live-wrapper .item .pro-img[data-v-11701830]{width:%?100?%;height:%?100?%}.main .row-between-wrapper .live-wrapper .item uni-image[data-v-11701830]{width:%?100?%;height:%?100?%;max-width:100%;border-radius:%?8?%}.main .row-between-wrapper .live-wrapper .item .price[data-v-11701830]{text-align:center;color:#fefefe;position:absolute;bottom:%?4?%;left:0;width:100%;font-size:%?22?%;background:rgba(0,0,0,.5);border-radius:0 0 %?8?% %?8?%}.main .row-between-wrapper .live-wrapper .item .more[data-v-11701830]{width:%?100?%;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?28?%;color:#fefefe;font-weight:700;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.2);border-radius:%?8?%}.live-top[data-v-11701830]{z-index:20;position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;min-width:%?130?%;max-width:%?140?%;height:%?50?%;font-size:%?22?%}.live-top.playRadius[data-v-11701830]{border-radius:%?18?% 0 0 0}.live-top.notPlayRadius[data-v-11701830]{border-radius:%?18?% 0 %?18?% 0}.live-top uni-image[data-v-11701830]{width:%?30?%;height:%?30?%;margin-right:%?10?%;display:block}.broadcast-time[data-v-11701830]{z-index:20;position:absolute;left:%?120?%;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;width:%?160?%;height:%?50?%;background:rgba(0,0,0,.4);font-size:%?22?%;border-radius:0 0 %?18?% 0}',""]),t.exports=e},"6b73":function(t,e,i){"use strict";var a=i("eff5"),n=i.n(a);n.a},"743b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},r=[]},"7e7b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-4b22b7b1]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4b22b7b1]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4b22b7b1]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4b22b7b1]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4b22b7b1]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4b22b7b1]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4b22b7b1]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},a0cb:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("11c7"),r=a(i("f671")),o={components:{home:r.default},data:function(){return{topImage:"",broadcastList:[],loadTitle:"加載更多",scrollLeft:0,interval:0,status:1,page:1,limit:5,loading:!1,loadend:!1,pageloading:!1,endBg:"linear-gradient(#666666, #999999)",notBg:"rgb(26, 163, 246)",playBg:"linear-gradient(#FF0000, #FF5400)"}},onLoad:function(){this.getBroadcastList()},methods:{getBroadcastList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getBroadcastListApi)(e).then((function(e){var i=e.data.list,a=i.length<t.limit;t.page++,t.broadcastList=t.broadcastList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=a,t.loadTitle=a?"我也是有底線的":"加載更多"})).catch((function(e){t.pageloading=!1,t.loadTitle="我也是有底線的"})))}},onReachBottom:function(){this.getBroadcastList()}};e.default=o},d030:function(t,e,i){"use strict";i.r(e);var a=i("a0cb"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},dcbc:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("v-uni-view",{staticClass:"flash-sale"},[i("v-uni-view",{staticClass:"list"},[t._l(t.broadcastList,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-navigator",{attrs:{"hover-class":"none",url:103==e.live_status&&e.replay_status||101===e.live_status||102===e.live_status?"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id="+e.room_id:""}},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"live-image"},[i("img",{staticClass:"image",attrs:{src:e.share_img}}),i("v-uni-view",{staticClass:"live-top",class:102==e.live_status?"playRadius":"notPlayRadius",style:"background:"+(101==e.live_status?t.playBg:101!=e.live_status&&102!=e.live_status?t.endBg:t.notBg)+";"},[101==e.live_status?[i("v-uni-image",{attrs:{src:"/static/images/live-01.png",mode:""}}),i("v-uni-text",[t._v("直播中")])]:t._e(),103==e.live_status&&1===e.replay_status?[i("v-uni-image",{attrs:{src:"/static/images/live-02.png",mode:""}}),i("v-uni-text",[t._v("回放")])]:t._e(),101!=e.live_status&&102!=e.live_status&&103!=e.live_status||103==e.live_status&&0==e.replay_status?[i("v-uni-image",{attrs:{src:"/static/images/live-02.png",mode:""}}),i("v-uni-text",[t._v("已結束")])]:t._e(),102==e.live_status?[i("v-uni-image",{attrs:{src:"/static/images/live-03.png",mode:""}}),i("v-uni-text",[t._v("預告")])]:t._e()],2),101==e.live_status||102==e.live_status?i("v-uni-view",{staticClass:"broadcast-time"},[t._v(t._s(e.show_time))]):t._e()],1),i("v-uni-view",{staticClass:"live-wrapper"},[i("v-uni-view",{staticClass:"live-title"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"live-store"},[t._v(t._s(e.anchor_name))]),e.broadcast.length>0?i("v-uni-view",{staticClass:"pro-count",staticStyle:{"white-space":"nowrap",display:"flex"}},t._l(e.broadcast,(function(a,n){return i("v-uni-navigator",{key:n,staticClass:"item",attrs:{"hover-class":"none"}},[n<3?i("v-uni-view",{staticClass:"pro-img"},[i("v-uni-image",{attrs:{src:a.goods.cover_img}}),n<2?i("v-uni-view",{staticClass:"price"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(a.goods.price))],1):i("v-uni-view",{staticClass:"more"},[t._v("+"+t._s(e.broadcast.length-2))])],1):t._e()],1)})),1):t._e()],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1)],2)],1),i("home")],1)},r=[]},e6aa:function(t,e,i){var a=i("6b0e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0379198f",a,!0,{sourceMap:!1,shadowMode:!1})},eeda:function(t,e,i){"use strict";i.r(e);var a=i("dcbc"),n=i("d030");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4d81");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"11701830",null,!1,a["a"],o);e["default"]=u.exports},eff5:function(t,e,i){var a=i("7e7b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c1c5ec06",a,!0,{sourceMap:!1,shadowMode:!1})},f671:function(t,e,i){"use strict";i.r(e);var a=i("743b"),n=i("43f0");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("6b73");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4b22b7b1",null,!1,a["a"],o);e["default"]=u.exports}}]);