(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-goods_logistics-index"],{"0c94":function(t,e,r){"use strict";r.r(e);var o=r("7a49"),n=r.n(o);for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},"27a0":function(t,e,r){var o=r("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.logistics .header[data-v-a41abbd2]{padding:%?23?% %?30?%;background-color:#fff;height:%?166?%;box-sizing:border-box}.logistics .header .pictrue[data-v-a41abbd2]{width:%?120?%;height:%?120?%}.logistics .header .pictrue uni-image[data-v-a41abbd2]{width:100%;height:100%;border-radius:%?6?%}.logistics .header .text[data-v-a41abbd2]{width:%?540?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.logistics .header .text .name[data-v-a41abbd2]{width:%?365?%;color:#282828}.logistics .header .text .money[data-v-a41abbd2]{text-align:right}.logistics .logisticsCon[data-v-a41abbd2]{background-color:#fff;margin:%?12?% 0}.logistics .logisticsCon .company[data-v-a41abbd2]{height:%?120?%;margin:0 0 %?45?% %?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #f5f5f5}.logistics .logisticsCon .company .picTxt[data-v-a41abbd2]{width:%?520?%}.logistics .logisticsCon .company .picTxt .iconfont[data-v-a41abbd2]{width:%?50?%;height:%?50?%;background-color:#666;text-align:center;line-height:%?50?%;color:#fff;font-size:%?35?%}.logistics .logisticsCon .company .picTxt .text[data-v-a41abbd2]{width:%?450?%;font-size:%?26?%;color:#282828}.logistics .logisticsCon .company .picTxt .text .name[data-v-a41abbd2]{color:#999}.logistics .logisticsCon .company .picTxt .text .express[data-v-a41abbd2]{margin-top:%?5?%}.logistics .logisticsCon .company .copy[data-v-a41abbd2]{font-size:%?20?%;width:%?106?%;height:%?40?%;text-align:center;line-height:%?40?%;border-radius:%?3?%;border:%?1?% solid #999}.logistics .logisticsCon .item[data-v-a41abbd2]{padding:0 %?40?%;position:relative}.logistics .logisticsCon .item .circular[data-v-a41abbd2]{width:%?20?%;height:%?20?%;border-radius:50%;position:absolute;top:%?-1?%;left:%?31.5?%;background-color:#ddd}.logistics .logisticsCon .item .circular.on[data-v-a41abbd2]{background-color:#e93323}.logistics .logisticsCon .item .text.on-font[data-v-a41abbd2]{color:#e93323}.logistics .logisticsCon .item .text .data.on-font[data-v-a41abbd2]{color:#e93323}.logistics .logisticsCon .item .text[data-v-a41abbd2]{font-size:%?26?%;color:#666;width:%?615?%;border-left:%?1?% solid #e6e6e6;padding:0 0 %?60?% %?38?%}.logistics .logisticsCon .item .text.on[data-v-a41abbd2]{border-left-color:#f8c1bd}.logistics .logisticsCon .item .text .data[data-v-a41abbd2]{font-size:%?24?%;color:#999;margin-top:%?10?%}.logistics .logisticsCon .item .text .data .time[data-v-a41abbd2]{margin-left:%?15?%}',""]),t.exports=e},"2aeb":function(t,e,r){"use strict";r.r(e);var o=r("8b69"),n=r("0c94");for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);r("f4f0");var a,s=r("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"a41abbd2",null,!1,o["a"],a);e["default"]=d.exports},"7a49":function(t,e,r){"use strict";var o=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("cdf4"),i=r("11c7"),a=o(r("3aa9")),s=r("2073"),d=r("2f62"),u=o(r("04a8")),c={components:{recommend:u.default},data:function(){return{orderId:"",product:{},orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,d.mapGetters)(["isLogin"]),onLoad:function(t){if(!t.orderId)return this.$util.Tips({title:"缺少訂單號"});this.orderId=t.orderId,this.isLogin?(this.getExpress(),this.get_host_product()):(0,s.toLogin)()},onReady:function(){this.$nextTick((function(){var t=this,e=new a.default(".copy-data");e.on("success",(function(){t.$util.Tips({title:"複製成功"})}))}))},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){uni.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this;(0,n.express)(t.orderId).then((function(e){var r=e.data.express||{};t.$set(t,"product",e.data.order.orderProduct[0]||{}),t.$set(t,"orderInfo",e.data.order),t.$set(t,"expressList",r||[])}))},get_host_product:function(){var t=this;(0,i.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data.list)}))}}};e.default=c},"8b69":function(t,e,r){"use strict";var o;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"logistics"},[t.product.cart_info?r("v-uni-view",{staticClass:"header acea-row row-between row-top"},[r("v-uni-view",{staticClass:"pictrue"},[r("v-uni-image",{attrs:{src:t.product.cart_info.product.image}})],1),r("v-uni-view",{staticClass:"text acea-row row-between"},[r("v-uni-view",{staticClass:"name line2"},[t._v(t._s(t.product.cart_info.product.store_name))]),r("v-uni-view",{staticClass:"money"},[r("v-uni-view",[r("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(t.product.product_price))],1),r("v-uni-view",[t._v("x"+t._s(t.product.product_num))])],1)],1)],1):t._e(),r("v-uni-view",{staticClass:"logisticsCon"},[r("v-uni-view",{staticClass:"company acea-row row-between-wrapper"},[r("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[r("v-uni-view",{staticClass:"iconfont icon-wuliu"}),r("v-uni-view",{staticClass:"text"},[r("v-uni-view",[r("v-uni-text",{staticClass:"name line1"},[t._v("物流公司：")]),t._v(t._s(t.orderInfo.delivery_name))],1),r("v-uni-view",{staticClass:"express line1"},[r("v-uni-text",{staticClass:"name"},[t._v("快遞單號：")]),t._v(t._s(t.orderInfo.delivery_id))],1)],1)],1),r("v-uni-view",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.delivery_id}},[t._v("複製單號")])],1),t._l(t.expressList,(function(e,o){return r("v-uni-view",{key:o,staticClass:"item"},[r("v-uni-view",{staticClass:"circular",class:0===o?"on":""}),r("v-uni-view",{staticClass:"text",class:0===o?"on-font on":""},[r("v-uni-view",[t._v(t._s(e.status))]),r("v-uni-view",{staticClass:"data",class:0===o?"on-font on":""},[t._v(t._s(e.time))])],1)],1)}))],2),r("recommend",{attrs:{hostProduct:t.hostProduct,isLogin:t.isLogin}})],1)],1)},i=[]},"9f28":function(t,e,r){var o=r("27a0");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("4f06").default;n("0a58a4f3",o,!0,{sourceMap:!1,shadowMode:!1})},cdf4:function(t,e,r){"use strict";var o=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCartCounts=i,e.getCartList=a,e.changeCartNum=s,e.cartDel=d,e.getOrderList=u,e.orderProduct=c,e.orderComment=l,e.orderPay=f,e.orderData=p,e.unOrderCancel=g,e.orderDel=v,e.getOrderDetail=b,e.groupOrderDetail=h,e.getPayOrder=m,e.orderAgain=w,e.orderTake=x,e.express=_,e.ordeRefundReason=C,e.orderRefundVerify=y,e.orderConfirm=A,e.getCouponsOrderPrice=k,e.postOrderComputed=L,e.orderCreate=O,e.groupOrderList=P,e.refundBatch=I,e.refundProduct=T,e.refundApply=$,e.refundMessage=D,e.refundList=z,e.refundDetail=R,e.expressList=E,e.refundBackGoods=M,e.refundDel=B,e.refundExpress=j,e.verifyCode=F,e.presellOrderPay=G,e.receiptOrder=H,e.getReceiptOrder=J,e.getCallBackUrlApi=U;var n=o(r("5a6c"));function i(){return n.default.get("user/cart/count")}function a(){return n.default.get("user/cart/lst")}function s(t,e){return n.default.post("user/cart/change/"+t,e)}function d(t){return n.default.post("user/cart/delete",t)}function u(t){return n.default.get("order/list",t)}function c(t){return n.default.get("reply/product/"+t)}function l(t,e){return n.default.post("reply/"+t,e)}function f(t,e){return n.default.post("order/pay/"+t,e)}function p(){return n.default.get("order/number")}function g(t){return n.default.post("order/cancel/"+t)}function v(t){return n.default.post("order/del/"+t)}function b(t){return n.default.get("order/detail/"+t)}function h(t){return n.default.get("order/group_order_detail/"+t)}function m(t){return n.default.get("order/status/"+t)}function w(t){return n.default.post("user/cart/again",t)}function x(t){return n.default.post("order/take/"+t)}function _(t){return n.default.post("order/express/"+t)}function C(){return n.default.get("order/refund/reason")}function y(t){return n.default.post("order/refund/verify",t)}function A(t){return n.default.post("order/check",t)}function k(t,e){return n.default.get("coupons/order/"+t,e)}function L(t,e){return n.default.post("/order/computed/"+t,e)}function O(t){return n.default.post("order/create",t,{noAuth:!0})}function P(t){return n.default.get("order/group_order_list",t,{noAuth:!0})}function I(t){return n.default.get("refund/batch_product/"+t,{noAuth:!0})}function T(t,e){return n.default.get("refund/product/"+t,e,{noAuth:!0})}function $(t,e){return n.default.post("refund/apply/"+t,e,{noAuth:!0})}function D(){return n.default.get("common/refund_message",{noAuth:!0})}function z(t){return n.default.get("refund/list",t,{noAuth:!0})}function R(t){return n.default.get("refund/detail/"+t,{noAuth:!0})}function E(){return n.default.get("common/express")}function M(t,e){return n.default.post("refund/back_goods/"+t,e,{noAuth:!0})}function B(t){return n.default.post("refund/del/"+t,{noAuth:!0})}function j(t){return n.default.get("refund/express/"+t,{noAuth:!0})}function F(t){return n.default.get("order/verify_code/"+t)}function G(t,e){return n.default.post("presell/pay/"+t,e)}function H(t){return n.default.get("user/receipt/order",t)}function J(t){return n.default.get("user/receipt/order/"+t)}function U(t){return n.default.get("common/pay_key/"+t,{},{noAuth:!0})}},f4f0:function(t,e,r){"use strict";var o=r("9f28"),n=r.n(o);n.a}}]);