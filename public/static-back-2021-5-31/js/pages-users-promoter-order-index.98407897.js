(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-promoter-order-index"],{"0a3e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty-box"},[i("v-uni-image",{attrs:{src:"/static/images/empty-box.png"}}),i("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title))])],1)},a=[]},"43d2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.empty-box[data-v-f32a7f00]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-f32a7f00]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-f32a7f00]{font-size:%?26?%;color:#999}',""]),t.exports=e},"5d1a":function(t,e,i){var n=i("ef25");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("4ecb4f8b",n,!0,{sourceMap:!1,shadowMode:!1})},"6eb7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:String,default:"暫無記錄"}}};e.default=n},"743f":function(t,e,i){var n=i("43d2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("5fd9f3b7",n,!0,{sourceMap:!1,shadowMode:!1})},"75e7":function(t,e,i){"use strict";i.r(e);var n=i("6eb7"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"804b":function(t,e,i){"use strict";var n=i("5d1a"),r=i.n(n);r.a},8445:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"promoter-order"},[i("v-uni-view",{staticClass:"promoterHeader bg-color"},[i("v-uni-view",{staticClass:"headerCon acea-row row-between-wrapper"},[i("v-uni-view",[i("v-uni-view",{staticClass:"name"},[t._v("累計推廣訂單")]),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.recordCount||0))]),t._v("單")],1)],1),i("v-uni-view",{staticClass:"iconfont icon-2"})],1)],1),t.recordList.length>0?i("v-uni-view",{staticClass:"list"},[t._l(t.recordList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"item"},[i("v-uni-view",{staticClass:"listn"},[i("v-uni-view",{staticClass:"itenm"},[i("v-uni-view",{staticClass:"top acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue"},[e.user.avatar?i("v-uni-image",{attrs:{src:e.user.avatar}}):i("v-uni-image",{staticClass:"avatar",attrs:{src:"/static/images/f.png"}})],1),i("v-uni-view",{staticClass:"text line1"},[t._v(t._s(e.user.nickname))])],1),e.status>=2?i("v-uni-view",{staticClass:"money"},[t._v("返佣："),i("v-uni-text",{staticClass:"font-color"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(e.brokerage))],1)],1):i("v-uni-view",{staticClass:"money"},[t._v("暫未返佣："),i("v-uni-text",{staticClass:"font-color"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(e.brokerage))],1)],1)],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",[i("v-uni-text",{staticClass:"name"},[t._v("訂單編號：")]),t._v(t._s(e.order_sn))],1),i("v-uni-view",[i("v-uni-text",{staticClass:"name"},[t._v("下單時間：")]),t._v(t._s(e.pay_time))],1)],1)],1)],1)],1)]}))],2):t._e(),0==t.recordList.length?i("v-uni-view",[i("emptyPage",{attrs:{title:"暫無推廣訂單～"}})],1):t._e()],1)],1)},a=[]},"90c6":function(t,e,i){"use strict";i.r(e);var n=i("8445"),r=i("9b91");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("804b");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7d62718e",null,!1,n["a"],o);e["default"]=c.exports},"9b91":function(t,e,i){"use strict";i.r(e);var n=i("b428"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},b428:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("bacc"),a=i("e90e"),o=i("2f62"),s=n(i("ef9a")),c={components:{emptyPage:s.default},data:function(){return{page:1,limit:8,status:!1,recordList:[],recordCount:0,isAuto:!1,isShowAuth:!1,userInfo:""}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?this.getRecordOrderList():(0,a.toLogin)()},methods:{spreadInfo:function(){var t=this;(0,r.spreadInfo)().then((function(e){t.userInfo=e.data}))},onLoadFun:function(){this.isShowAuth=!1,this.getRecordOrderList()},authColse:function(t){this.isShowAuth=t},getRecordOrderList:function(){var t=this,e=t.page,i=t.limit,n=t.status,a=t.recordList,o=[];1!=n&&(0,r.spreadOrder)({page:e,limit:i}).then((function(e){var n=e.data.list?e.data.list.length:0,r=e.data.list;o=a.concat(r),t.recordCount=e.data.count||0,t.status=i>n,t.page+=1,t.$set(t,"recordList",o)}))}},onReachBottom:function(){this.getRecordOrderList()}};e.default=c},ef25:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.promoter-order .list .item[data-v-7d62718e]{margin-bottom:%?20?%}.promoter-order .list .item .title[data-v-7d62718e]{height:%?133?%;padding:0 %?30?%;font-size:%?26?%;color:#999}.promoter-order .list .item .title .data[data-v-7d62718e]{font-size:%?28?%;color:#282828;margin-bottom:%?5?%}.promoter-order .list .item .listn .itenm[data-v-7d62718e]{background-color:#fff}.promoter-order .list .item .listn .itenm ~ .itenm[data-v-7d62718e]{margin-top:%?12?%}.promoter-order .list .item .listn .itenm .top[data-v-7d62718e]{margin-left:%?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #eee;height:%?100?%}.promoter-order .list .item .listn .itenm .top .pictxt[data-v-7d62718e]{width:%?320?%}.promoter-order .list .item .listn .itenm .top .pictxt .text[data-v-7d62718e]{width:%?230?%;font-size:%?30?%;color:#282828}.promoter-order .list .item .listn .itenm .top .pictxt .pictrue[data-v-7d62718e]{width:%?66?%;height:%?66?%}.promoter-order .list .item .listn .itenm .top .pictxt .pictrue uni-image[data-v-7d62718e]{width:100%;height:100%;border-radius:50%;border:%?3?% solid #fff;box-sizing:border-box;box-shadow:0 0 %?15?% #aaa}.promoter-order .list .item .listn .itenm .top .money[data-v-7d62718e]{font-size:%?28?%}.promoter-order .list .item .listn .itenm .bottom[data-v-7d62718e]{padding:%?20?% %?30?%;font-size:%?28?%;color:#666;line-height:1.6}.promoter-order .list .item .listn .itenm .bottom .name[data-v-7d62718e]{color:#999}',""]),t.exports=e},ef9a:function(t,e,i){"use strict";i.r(e);var n=i("0a3e"),r=i("75e7");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("f598");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"f32a7f00",null,!1,n["a"],o);e["default"]=c.exports},f598:function(t,e,i){"use strict";var n=i("743f"),r=i.n(n);r.a}}]);