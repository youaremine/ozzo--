(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_details-index~pages-order_details-stay~pages-users-order_list-index~pages-users-presell_~6289e575"],{"1b05":function(e,t,n){"use strict";n.r(t);var r=n("22f5"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"20b4":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.payment[data-v-5361dfc8]{position:fixed;bottom:0;left:0;width:100%;border-radius:%?16?% %?16?% 0 0;background-color:#fff;padding-bottom:%?60?%;z-index:99;-webkit-transition:all .3s cubic-bezier(.25,.5,.5,.9);transition:all .3s cubic-bezier(.25,.5,.5,.9);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.payment.on[data-v-5361dfc8]{-webkit-transform:translateZ(0);transform:translateZ(0)}.payment .title[data-v-5361dfc8]{text-align:center;height:%?123?%;font-size:%?32?%;color:#282828;font-weight:700;padding-right:%?30?%;margin-left:%?30?%;position:relative;border-bottom:%?1?% solid #eee}.payment .title .iconfont[data-v-5361dfc8]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?43?%;color:#8a8a8a;font-weight:400}.payment .item[data-v-5361dfc8]{border-bottom:%?1?% solid #eee;height:%?130?%;margin-left:%?30?%;padding-right:%?30?%}.payment .item .left[data-v-5361dfc8]{width:%?610?%}.payment .item .left .text[data-v-5361dfc8]{width:%?540?%}.payment .item .left .text .name[data-v-5361dfc8]{font-size:%?32?%;color:#282828}.payment .item .left .text .info[data-v-5361dfc8]{font-size:%?24?%;color:#999}.payment .item .left .text .info .money[data-v-5361dfc8]{color:#f90}.payment .item .left .iconfont[data-v-5361dfc8]{font-size:%?45?%;color:#09bb07}.payment .item .left .iconfont.icon-zhifubao[data-v-5361dfc8]{color:#00aaea}.payment .item .left .iconfont.icon-yuezhifu[data-v-5361dfc8]{color:#f90}.payment .item .left .iconfont.icon-yuezhifu1[data-v-5361dfc8]{color:#eb6623}.payment .item .iconfont[data-v-5361dfc8]{font-size:%?0.3?%;color:#999}',""]),e.exports=t},"22f5":function(e,t,n){"use strict";n("99af"),n("a9e3"),n("acd8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("cdf4"),a=n("c65c"),i={props:{payMode:{type:Array,default:function(){return[]}},pay_close:{type:Boolean,default:!1},order_id:{type:String,default:""},totalPrice:{type:String,default:"0"},order_type:{type:Number,default:0}},data:function(){return{setIntervalId:""}},onUnload:function(){clearInterval(this.setIntervalId)},methods:{close:function(){this.$emit("onChangeFun",{action:"payClose"})},goPay:function(e,t){var n=this,i=this,o="";if("wechat"==t)o=this.$wechat.isWeixin()?"weixin":"h5";else if("balance"==t)o="balance";else if("alipay"==t)o="alipay";else if("tapgo"==t)o="tapgo";else if("stripe"==t){if("stripe"==i.payType&&i.totalPrice<4)return void uni.showToast({icon:"none",title:"金額需滿4元"});o="stripe"}if(!i.order_id)return i.$util.Tips({title:"請選擇要支付的訂單"});if("balance"==t&&parseFloat(e)<parseFloat(i.totalPrice))return i.$util.Tips({title:"餘額不足！"});uni.showLoading({title:"支付中"});var u=1===i.order_type?r.presellOrderPay:r.orderPay;u(i.order_id,{type:o,return_url:"https://"+window.location.host+"/pages/users/order_list/index"}).then((function(e){var t=e.data.status,r=e.data.result.order_id,o=e.data.result.config,u=e.data.result.pay_key,s="/pages/users/order_list/index";switch(t){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":case"error":return uni.hideLoading(),n.$emit("onChangeFun",{action:"payClose"}),i.$util.Tips({title:e.message});case"success":return uni.hideLoading(),n.$emit("onChangeFun",{action:"payClose"}),i.BargainId||i.combinationId||i.pinkId||i.seckillId,i.$util.Tips({title:e.message,icon:"success"},{tab:5,url:s+"?status=1"});case"alipay":case"alipayQr":return uni.hideLoading(),n.$emit("onChangeFun",{action:"payClose"}),void uni.navigateTo({url:"/pages/order_pay_back/index?keyCode="+u+"&url="+o});case"wechat":case"weixin":o.timeStamp=o.timestamp,i.$wechat.pay(o).then((function(e){return n.$emit("onChangeFun",{action:"payClose"}),i.$util.Tips({title:e.message,icon:"success"},{tab:5,url:s+"status=1"})})).catch((function(e){if("chooseWXPay:cancel"==e.errMsg)return i.$util.Tips({title:"取消支付"},{tab:5,url:s+"?status=0"})}));break;case"tapgo":if(uni.hideLoading(),!e.data.result||!e.data.result.schemes_url)return uni.hideLoading(),i.$util.Tips({title:"支付失敗"},{tab:5,url:s});location.href=e.data.result.schemes_url;var c=e.data.result.order_sn;i.setIntervalId=setInterval((function(){var e={order_sn:c};(0,a.getOrderStatus)(e).then((function(e){if(200==e.status)return uni.hideLoading(),clearInterval(i.setIntervalId),i.BargainId||i.combinationId||i.pinkId||i.seckillId?i.$util.Tips({title:"支付成功",icon:"success"},{tab:4,url:s}):i.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:s});e.status}))}),5e3);break;case"stripe":if(uni.hideLoading(),e.data.result.config.session_id){var d=e.data.result.config.session_id,l=e.data.result.config.url;uni.navigateTo({url:"/pages/users/order_confirm/stripe-webview?session_id="+d+"&url="+l,success:function(){},fail:function(){var e="/pages/order_pay_status/index?order_id="+r+"&msg=支付失败";return i.$util.Tips({title:"支付失败"},{tab:5,url:e+"&status=0"})}})}break;case"balance":return uni.hideLoading(),n.$emit("onChangeFun",{action:"payClose"}),i.$util.Tips({title:e.message});case"h5":var f=window.location.protocol+"//"+window.location.host,p="".concat(f,"/pages/order_pay_status/index?order_id=").concat(r),g=encodeURIComponent(p),v="".concat(o.mweb_url,"&redirect_url=").concat(g);setTimeout((function(){location.href=v}),100);break}})).catch((function(e){return uni.hideLoading(),i.$util.Tips({title:e})}))}}};t.default=i},"24e7":function(e,t,n){var r=n("20b4");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("266c4df4",r,!0,{sourceMap:!1,shadowMode:!1})},"30fa":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"payment",class:e.pay_close?"on":""},[n("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[e._v("選擇付款方式"),n("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}})],1),e._l(e.payMode,(function(t,r){return 1==t.payStatus?n("v-uni-view",{key:r,staticClass:"item acea-row row-between-wrapper",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.goPay(t.number||0,t.value)}}},[n("v-uni-view",{staticClass:"left acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"iconfont",class:t.icon}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),t.number?n("v-uni-view",{staticClass:"info"},[e._v(e._s(t.title)),n("span",{staticClass:"money"},[n("v-uni-text",{staticClass:"money-type"},[e._v("HK$")]),e._v(e._s(t.number))],1)]):n("v-uni-view",{staticClass:"info"},[e._v(e._s(t.title))])],1)],1),n("v-uni-view",{staticClass:"iconfont icon-xiangyou"})],1):e._e()}))],2),e.pay_close?n("v-uni-view",{ref:"close",staticClass:"mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}}):e._e()],1)},i=[]},"5ece":function(e,t,n){"use strict";n.r(t);var r=n("30fa"),a=n("1b05");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("5f03");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"5361dfc8",null,!1,r["a"],o);t["default"]=s.exports},"5f03":function(e,t,n){"use strict";var r=n("24e7"),a=n.n(r);a.a},c65c:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getOrderStatus=i;var a=r(n("5a6c"));function i(e){return a.default.post("tapgo/status",e,{noAuth:!0})}},cdf4:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getCartCounts=i,t.getCartList=o,t.changeCartNum=u,t.cartDel=s,t.getOrderList=c,t.orderProduct=d,t.orderComment=l,t.orderPay=f,t.orderData=p,t.unOrderCancel=g,t.orderDel=v,t.getOrderDetail=m,t.groupOrderDetail=y,t.getPayOrder=_,t.orderAgain=b,t.orderTake=h,t.express=w,t.ordeRefundReason=C,t.orderRefundVerify=S,t.orderConfirm=E,t.getCouponsOrderPrice=x,t.postOrderComputed=R,t.orderCreate=O,t.groupOrderList=k,t.refundBatch=A,t.refundProduct=I,t.refundApply=T,t.refundMessage=P,t.refundList=$,t.refundDetail=D,t.expressList=L,t.refundBackGoods=U,t.refundDel=z,t.refundExpress=M,t.verifyCode=B,t.presellOrderPay=F,t.receiptOrder=j,t.getReceiptOrder=G,t.getCallBackUrlApi=N;var a=r(n("5a6c"));function i(){return a.default.get("user/cart/count")}function o(){return a.default.get("user/cart/lst")}function u(e,t){return a.default.post("user/cart/change/"+e,t)}function s(e){return a.default.post("user/cart/delete",e)}function c(e){return a.default.get("order/list",e)}function d(e){return a.default.get("reply/product/"+e)}function l(e,t){return a.default.post("reply/"+e,t)}function f(e,t){return a.default.post("order/pay/"+e,t)}function p(){return a.default.get("order/number")}function g(e){return a.default.post("order/cancel/"+e)}function v(e){return a.default.post("order/del/"+e)}function m(e){return a.default.get("order/detail/"+e)}function y(e){return a.default.get("order/group_order_detail/"+e)}function _(e){return a.default.get("order/status/"+e)}function b(e){return a.default.post("user/cart/again",e)}function h(e){return a.default.post("order/take/"+e)}function w(e){return a.default.post("order/express/"+e)}function C(){return a.default.get("order/refund/reason")}function S(e){return a.default.post("order/refund/verify",e)}function E(e){return a.default.post("order/check",e)}function x(e,t){return a.default.get("coupons/order/"+e,t)}function R(e,t){return a.default.post("/order/computed/"+e,t)}function O(e){return a.default.post("order/create",e,{noAuth:!0})}function k(e){return a.default.get("order/group_order_list",e,{noAuth:!0})}function A(e){return a.default.get("refund/batch_product/"+e,{noAuth:!0})}function I(e,t){return a.default.get("refund/product/"+e,t,{noAuth:!0})}function T(e,t){return a.default.post("refund/apply/"+e,t,{noAuth:!0})}function P(){return a.default.get("common/refund_message",{noAuth:!0})}function $(e){return a.default.get("refund/list",e,{noAuth:!0})}function D(e){return a.default.get("refund/detail/"+e,{noAuth:!0})}function L(){return a.default.get("common/express")}function U(e,t){return a.default.post("refund/back_goods/"+e,t,{noAuth:!0})}function z(e){return a.default.post("refund/del/"+e,{noAuth:!0})}function M(e){return a.default.get("refund/express/"+e,{noAuth:!0})}function B(e){return a.default.get("order/verify_code/"+e)}function F(e,t){return a.default.post("presell/pay/"+e,t)}function j(e){return a.default.get("user/receipt/order",e)}function G(e){return a.default.get("user/receipt/order/"+e)}function N(e){return a.default.get("common/pay_key/"+e,{},{noAuth:!0})}},ddac:function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.auth=a,t.openPaySubscribe=i,t.openOrderSubscribe=o,t.openExtrctSubscribe=u,t.openPinkSubscribe=s,t.openBargainSubscribe=c,t.openOrderRefundSubscribe=d,t.openRechargeSubscribe=l,t.openEextractSubscribe=f,t.subscribe=p;var r=n("4f73");function a(){var e={},t=uni.getStorageSync(r.SUBSCRIBE_MESSAGE);return e=t||{},e}function i(){var e=a();return p([e.ORDER_POSTAGE_SUCCESS,e.ORDER_DELIVER_SUCCESS,e.ORDER_PAY_SUCCESS])}function o(){var e=a();return p([e.ORDER_DELIVER_SUCCESS,e.ORDER_POSTAGE_SUCCESS])}function u(){var e=a();return p([e.user_extract])}function s(){var e=a();return p([e.pink_true])}function c(){var e=a();return p([e.bargain_success])}function d(){var e=a();return p([e.ORDER_REFUND_NOTICE])}function l(){var e=a();return p([e.RECHARGE_SUCCESS])}function f(){var e=a();return p([e.USER_EXTRACT])}function p(e){wx;return new Promise((function(t,n){uni.requestSubscribeMessage({tmplIds:e,success:function(e){return t(e)},fail:function(e){return t(e)},complete:function(e){}})}))}}}]);