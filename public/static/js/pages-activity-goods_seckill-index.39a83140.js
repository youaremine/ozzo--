(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_seckill-index"],{"00f6":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("d81d"),i("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("1279"),n=a(i("f671")),o={components:{home:n.default},data:function(){return{seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:""}},onLoad:function(){this.getSeckillConfig()},methods:{getSeckillConfig:function(){var t=this;(0,s.getSeckillIndexTime)().then((function(e){var i;t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.map((function(t){i=t.start_time>9?t.start_time+":00":"0"+t.start_time+":00",t.time=i})),t.timeList.length&&(t.scrollLeft=100*(t.active-1.37),setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList())}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit,start_time:t.timeList[t.active].start_time,end_time:t.timeList[t.active].end_time};t.loadend||t.pageloading||(this.pageloading=!0,(0,s.getSeckillList)(e).then((function(e){var i=e.data.list;i.map((function(t){t.percent=0===t.stock?"0%":(100*t.sales/t.stock).toFixed(2)+"%"}));var a=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=a})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){var i=this;this.active=e,i.interval&&(clearInterval(i.interval),i.interval=null),i.interval=0,i.countDownHour="00",i.countDownMinute="00",i.countDownSecond="00",i.status=i.timeList[i.active].status,i.loadend=!1,i.page=1,i.seckillList=[],i.getSeckillList()},goDetails:function(t){uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+t.product_id+"&time="+t.stop})}},onReachBottom:function(){this.getSeckillList()}};e.default=o},"0d0e":function(t,e,i){"use strict";var a=i("916e"),s=i.n(a);s.a},1279:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=n,e.getCombinationUser=o,e.getActivitycategory=r,e.getCombinationDetail=l,e.getCombinationPink=c,e.postCombinationRemove=u,e.getSeckillDetail=d,e.getCombinationPoster=f,e.seckillCode=g,e.scombinationCode=v,e.getSeckillIndexTime=h,e.getSeckillList=m,e.getPresellList=p,e.getAssistList=b,e.initiateAssistApi=w,e.getAssistDetail=k,e.assistHelpList=x,e.presellAgreement=_,e.assistUserData=C,e.postAssistHelp=y,e.getAssistUser=L,e.getBargainUserList=A,e.getBargainUserCancel=T;var s=a(i("5a6c"));function n(t){return s.default.get("store/product/group/lst",t,{noAuth:!0})}function o(t){return s.default.get("store/product/group/count",t,{noAuth:!0})}function r(t){return s.default.get("product/spu/active/category/"+t,{},{noAuth:!0})}function l(t){return s.default.get("store/product/group/detail/"+t,{},{noAuth:!0})}function c(t){return s.default.get("store/product/group/get/"+t)}function u(t){return s.default.post("store/product/group/cancel",t)}function d(t){return s.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})}function f(t){return s.default.post("combination/poster",t)}function g(t,e){return s.default.get("seckill/code/"+t,e)}function v(t){return s.default.get("combination/code/"+t)}function h(){return s.default.get("store/product/seckill/select",{},{noAuth:!0})}function m(t){return s.default.get("store/product/seckill/lst",t,{noAuth:!0})}function p(t){return s.default.get("store/product/presell/lst",t,{noAuth:!0})}function b(t){return s.default.get("store/product/assist/lst",t,{noAuth:!0})}function w(t){return s.default.post("store/product/assist/create/"+t)}function k(t){return s.default.get("store/product/assist/detail/"+t)}function x(t,e){return s.default.get("store/product/assist/user/"+t,e)}function _(){return s.default.get("store/product/presell/agree")}function C(){return s.default.get("store/product/assist/count",{},{noAuth:!0})}function y(t){return s.default.post("store/product/assist/set/"+t)}function L(t){return s.default.get("store/product/assist/share/"+t)}function A(t){return s.default.get("store/product/assist/set/lst",t)}function T(t){return s.default.post("store/product/assist/set/delete/"+t)}},"2aa4":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-uni-view",{staticClass:"flash-sale"},[i("v-uni-view",{staticClass:"saleBox"}),t.timeList.length>0?i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{attrs:{src:t.timeList[t.active].pic}})],1):t._e(),i("v-uni-view",{staticClass:"seckillList acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"priceTag"},[i("v-uni-image",{attrs:{src:"/static/images/priceTag.png"}})],1),i("v-uni-view",{staticClass:"timeLsit"},[i("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden",height:"106rpx"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft,"scroll-into-view":t.intoindex}},[t._l(t.timeList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"item",class:t.active==a?"on":"",attrs:{id:"sort"+a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.settimeList(e,a)}}},[i("v-uni-view",{staticClass:"time"},[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"state"},[t._v(t._s(e.state))])],1)]}))],2)],1)],1),i("v-uni-view",{staticClass:"list"},[t._l(t.seckillList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-column-around"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),i("v-uni-text",{staticClass:"num font-color"},[t._v(t._s(e.price))]),i("v-uni-text",{staticClass:"y_money"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(e.ot_price))],1)],1),i("v-uni-view",{staticClass:"limit"},[t._v("限量"),i("v-uni-text",{staticClass:"limitPrice"},[t._v(t._s(e.stock)+t._s(e.unit_name||""))])],1),i("v-uni-view",{staticClass:"progress"},[i("v-uni-view",{staticClass:"bg-reds",style:"width:"+e.percent+";"}),i("v-uni-view",{staticClass:"piece"},[t._v("已搶"+t._s(e.percent))])],1)],1),1==t.status?i("v-uni-view",{staticClass:"grab bg-color"},[t._v("馬上搶")]):2==t.status?i("v-uni-view",{staticClass:"grab bg-color"},[t._v("未開始")]):i("v-uni-view",{staticClass:"grab bg-color-hui"},[t._v("已結束")])],1)]}))],2)],1),0!=t.seckillList.length||1==t.page&&0!=t.active?t._e():i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:"/static/images/noShopper.png"}})],1)],1),i("home")],1)},n=[]},3029:function(t,e,i){"use strict";i.r(e);var a=i("2aa4"),s=i("6e2a");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("0d0e");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"ebe649ea",null,!1,a["a"],o);e["default"]=l.exports},3328:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),s={name:"Home",props:{},data:function(){return{top:"",bottom:""}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY,e.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=s},"43f0":function(t,e,i){"use strict";i.r(e);var a=i("3328"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"6b73":function(t,e,i){"use strict";var a=i("eff5"),s=i.n(a);s.a},"6e2a":function(t,e,i){"use strict";i.r(e);var a=i("00f6"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"743b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},n=[]},"7e7b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-4b22b7b1]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4b22b7b1]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4b22b7b1]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4b22b7b1]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4b22b7b1]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4b22b7b1]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4b22b7b1]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"916e":function(t,e,i){var a=i("97a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("7ff912a4",a,!0,{sourceMap:!1,shadowMode:!1})},"97a7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-ebe649ea]{background-color:#f5f5f5!important}.flash-sale .header[data-v-ebe649ea]{width:%?710?%;height:%?300?%;margin:%?-215?% auto 0 auto;border-radius:%?20?%}.flash-sale .header uni-image[data-v-ebe649ea]{width:100%;height:100%;border-radius:%?20?%}.flash-sale .seckillList[data-v-ebe649ea]{padding:0 %?20?%}.flash-sale .seckillList .priceTag[data-v-ebe649ea]{width:%?75?%;height:%?70?%}.flash-sale .seckillList .priceTag uni-image[data-v-ebe649ea]{opacity:1}.flash-sale .seckillList .priceTag uni-image[data-v-ebe649ea]{width:100%;height:100%}.flash-sale .timeLsit[data-v-ebe649ea]{width:%?610?%;white-space:nowrap;margin:%?10?% 0}.flash-sale .timeLsit .item[data-v-ebe649ea]{display:inline-block;font-size:%?20?%;color:#666;text-align:center;padding:%?11?% 0;box-sizing:border-box;height:%?96?%;margin-right:%?35?%}.flash-sale .timeLsit .item .time[data-v-ebe649ea]{font-size:%?36?%;font-weight:600;color:#333}.flash-sale .timeLsit .item.on .time[data-v-ebe649ea]{color:#e93323}.flash-sale .timeLsit .item.on .state[data-v-ebe649ea]{width:%?90?%;height:%?30?%;border-radius:%?15?%;background:-webkit-linear-gradient(left,#fc194b,#fc3c20);background:linear-gradient(90deg,#fc194b,#fc3c20);color:#fff}.flash-sale .countDown[data-v-ebe649ea]{height:%?92?%;border-bottom:%?1?% solid #f0f0f0;margin-top:%?-14?%;font-size:%?28?%;color:#282828}.flash-sale .countDown .num[data-v-ebe649ea]{font-size:%?28?%;font-weight:700;background-color:#ffcfcb;padding:%?4?% %?7?%;border-radius:%?3?%}.flash-sale .countDown .text[data-v-ebe649ea]{font-size:%?28?%;color:#282828;margin-right:%?13?%}.flash-sale .list .item[data-v-ebe649ea]{height:%?230?%;position:relative;width:%?710?%;margin:0 auto %?20?% auto;background-color:#fff;border-radius:%?20?%;padding:0 %?25?%}.flash-sale .list .item .pictrue[data-v-ebe649ea]{width:%?180?%;height:%?180?%;border-radius:%?10?%}.flash-sale .list .item .pictrue uni-image[data-v-ebe649ea]{width:100%;height:100%;border-radius:%?10?%}.flash-sale .list .item .text[data-v-ebe649ea]{width:%?460?%;font-size:%?30?%;color:#333;height:%?166?%}.flash-sale .list .item .text .name[data-v-ebe649ea]{width:100%}.flash-sale .list .item .text .money[data-v-ebe649ea]{font-size:%?30?%;color:#e93323}.flash-sale .list .item .text .money .num[data-v-ebe649ea]{font-size:%?40?%;font-weight:500;font-family:Guildford Pro}.flash-sale .list .item .text .money .y_money[data-v-ebe649ea]{font-size:%?24?%;color:#999;-webkit-text-decoration-line:line-through;text-decoration-line:line-through;margin-left:%?15?%}.flash-sale .list .item .text .limit[data-v-ebe649ea]{font-size:%?22?%;color:#999;margin-bottom:%?5?%}.flash-sale .list .item .text .limit .limitPrice[data-v-ebe649ea]{margin-left:%?10?%}.flash-sale .list .item .text .progress[data-v-ebe649ea]{overflow:hidden;background-color:#ffefef;width:%?260?%;border-radius:%?18?%;height:%?18?%;position:relative}.flash-sale .list .item .text .progress .bg-reds[data-v-ebe649ea]{width:0;height:100%;-webkit-transition:width .6s ease;transition:width .6s ease;background:-webkit-linear-gradient(left,#e93323,#ff8933);background:linear-gradient(90deg,#e93323,#ff8933)}.flash-sale .list .item .text .progress .piece[data-v-ebe649ea]{position:absolute;left:8%;-webkit-transform:translateY(-50%);transform:translateY(-50%);top:49%;font-size:%?16?%;color:#ffb9b9}.flash-sale .list .item .grab[data-v-ebe649ea]{font-size:%?28?%;color:#fff;width:%?150?%;height:%?54?%;border-radius:%?27?%;text-align:center;line-height:%?54?%;position:absolute;right:%?30?%;bottom:%?30?%;background:#bbb}.flash-sale .saleBox[data-v-ebe649ea]{width:100%;height:%?230?%;background:#e93323;border-radius:0 0 %?50?% %?50?%}body.?%PAGE?%[data-v-ebe649ea]{background-color:#f5f5f5!important}',""]),t.exports=e},eff5:function(t,e,i){var a=i("7e7b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("c1c5ec06",a,!0,{sourceMap:!1,shadowMode:!1})},f671:function(t,e,i){"use strict";i.r(e);var a=i("743b"),s=i("43f0");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("6b73");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"4b22b7b1",null,!1,a["a"],o);e["default"]=l.exports}}]);