(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_goods_collection-index"],{"1a3a":function(t,o,e){var i=e("9893");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6db78876",i,!0,{sourceMap:!1,shadowMode:!1})},"5f4e":function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return c})),e.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",[t.collectProductList.length?e("v-uni-view",{staticClass:"collectionGoods"},[t._l(t.collectProductList,(function(o,i){return o.product?e("v-uni-navigator",{key:i,staticClass:"item acea-row row-between-wrapper",attrs:{url:"/pages/goods_details/index?id="+o.type_id,"hover-class":"none"}},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:o.product.image}})],1),e("v-uni-view",{staticClass:"text acea-row row-column-between"},[e("v-uni-view",{staticClass:"name line1"},[t._v(t._s(o.product.store_name))]),e("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"money font-color"},[t._v("￥"+t._s(o.product.price))]),e("v-uni-view",{staticClass:"delete",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.delCollection(o.type_id,i)}}},[t._v("删除")])],1)],1)],1):t._e()})),e("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[e("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1)],2):!t.collectProductList.length&&t.page>1?e("v-uni-view",{staticClass:"noCommodity"},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:"/static/images/noCollection.png"}})],1),e("recommend",{attrs:{hostProduct:t.hostProduct,isLogin:t.isLogin}})],1):t._e()],1)},c=[]},"8f4b":function(t,o,e){"use strict";var i=e("1a3a"),n=e.n(i);n.a},9893:function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.collectionGoods[data-v-05034eb0]{background-color:#fff;border-top:%?1?% solid #eee}.collectionGoods .item[data-v-05034eb0]{margin-left:%?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #eee;height:%?180?%}.collectionGoods .item .pictrue[data-v-05034eb0]{width:%?130?%;height:%?130?%}.collectionGoods .item .pictrue uni-image[data-v-05034eb0]{width:100%;height:100%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.collectionGoods .item .text[data-v-05034eb0]{width:%?535?%;height:%?130?%;font-size:%?28?%;color:#282828}.collectionGoods .item .text .name[data-v-05034eb0]{width:100%}.collectionGoods .item .text .money[data-v-05034eb0]{font-size:%?26?%}.collectionGoods .item .text .delete[data-v-05034eb0]{font-size:%?26?%;color:#282828;width:%?144?%;height:%?46?%;border:1px solid #bbb;-webkit-border-radius:%?4?%;border-radius:%?4?%;text-align:center;line-height:%?46?%}.noCommodity[data-v-05034eb0]{background-color:#fff;padding-top:%?1?%;border-top:0}',""]),t.exports=o},a6dd:function(t,o,e){"use strict";e.r(o);var i=e("5f4e"),n=e("c105");for(var c in n)"default"!==c&&function(t){e.d(o,t,(function(){return n[t]}))}(c);e("8f4b");var a,s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"05034eb0",null,!1,i["a"],a);o["default"]=r.exports},b3b5:function(t,o,e){"use strict";var i=e("4ea4");e("99af"),e("a434"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=e("2b58"),c=e("2f62"),a=e("c496"),s=i(e("5249")),r={components:{recommend:s.default},data:function(){return{hostProduct:[],loadTitle:"加载更多",loading:!1,loadend:!1,collectProductList:[],limit:8,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,c.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.get_user_collect_product(),this.get_host_product()):(0,a.toLogin)()},methods:{onLoadFun:function(){this.isShowAuth=!1,this.get_user_collect_product(),this.get_host_product()},authColse:function(t){this.isShowAuth=t},get_user_collect_product:function(){var t=this;this.loading||this.loadend||(t.loading=!0,t.loadTitle="",(0,n.getCollectUserList)({page:t.page,limit:t.limit}).then((function(o){var e=o.data.list,i=e.length<t.limit;t.collectProductList=t.$util.SplitArray(e,t.collectProductList),t.$set(t,"collectProductList",t.collectProductList),t.loadend=i,t.loadTitle=i?"我也是有底线的":"加载更多",t.page=t.page+1,t.loading=!1})).catch((function(o){t.loading=!1,t.loadTitle="加载更多"})))},delCollection:function(t,o){var e=this;(0,n.collectDel)({type:1,type_id:t}).then((function(t){return e.$util.Tips({title:"取消收藏成功",icon:"success"},(function(){e.collectProductList.splice(o,1),e.$set(e,"collectProductList",e.collectProductList)}))}))},get_host_product:function(){var t=this;t.hotScroll||(0,n.getProductHot)(t.hotPage,t.hotLimit).then((function(o){t.hotPage++,t.hotScroll=o.data.list.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(o.data.list)}))}},onReachBottom:function(){this.get_user_collect_product()}};o.default=r},c105:function(t,o,e){"use strict";e.r(o);var i=e("b3b5"),n=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(o,t,(function(){return i[t]}))}(c);o["default"]=n.a}}]);