(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-refund-list"],{"403c":function(t,e,n){"use strict";n.r(e);var i=n("786f"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"72ac":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCartCounts=o,e.getCartList=a,e.changeCartNum=u,e.cartDel=s,e.getOrderList=d,e.orderProduct=c,e.orderComment=f,e.orderPay=l,e.orderData=p,e.unOrderCancel=b,e.orderDel=g,e.getOrderDetail=v,e.groupOrderDetail=x,e.getPayOrder=h,e.orderAgain=m,e.orderTake=_,e.express=w,e.ordeRefundReason=y,e.orderRefundVerify=k,e.orderConfirm=C,e.getCouponsOrderPrice=A,e.postOrderComputed=L,e.orderCreate=D,e.groupOrderList=j,e.refundBatch=O,e.refundProduct=z,e.refundApply=P,e.refundMessage=$,e.refundList=E,e.refundDetail=T,e.expressList=R,e.refundBackGoods=M,e.refundDel=S,e.refundExpress=B,e.verifyCode=I,e.presellOrderPay=J,e.receiptOrder=U,e.getReceiptOrder=F,e.getCallBackUrlApi=G;var r=i(n("db75"));function o(){return r.default.get("user/cart/count")}function a(){return r.default.get("user/cart/lst")}function u(t,e){return r.default.post("user/cart/change/"+t,e)}function s(t){return r.default.post("user/cart/delete",t)}function d(t){return r.default.get("order/list",t)}function c(t){return r.default.get("reply/product/"+t)}function f(t,e){return r.default.post("reply/"+t,e)}function l(t,e){return r.default.post("order/pay/"+t,e)}function p(){return r.default.get("order/number")}function b(t){return r.default.post("order/cancel/"+t)}function g(t){return r.default.post("order/del/"+t)}function v(t){return r.default.get("order/detail/"+t)}function x(t){return r.default.get("order/group_order_detail/"+t)}function h(t){return r.default.get("order/status/"+t)}function m(t){return r.default.post("user/cart/again",t)}function _(t){return r.default.post("order/take/"+t)}function w(t){return r.default.post("order/express/"+t)}function y(){return r.default.get("order/refund/reason")}function k(t){return r.default.post("order/refund/verify",t)}function C(t){return r.default.post("order/check",t)}function A(t,e){return r.default.get("coupons/order/"+t,e)}function L(t,e){return r.default.post("/order/computed/"+t,e)}function D(t){return r.default.post("order/create",t,{noAuth:!0})}function j(t){return r.default.get("order/group_order_list",t,{noAuth:!0})}function O(t){return r.default.get("refund/batch_product/"+t,{noAuth:!0})}function z(t,e){return r.default.get("refund/product/"+t,e,{noAuth:!0})}function P(t,e){return r.default.post("refund/apply/"+t,e,{noAuth:!0})}function $(){return r.default.get("common/refund_message",{noAuth:!0})}function E(t){return r.default.get("refund/list",t,{noAuth:!0})}function T(t){return r.default.get("refund/detail/"+t,{noAuth:!0})}function R(){return r.default.get("common/express")}function M(t,e){return r.default.post("refund/back_goods/"+t,e,{noAuth:!0})}function S(t){return r.default.post("refund/del/"+t,{noAuth:!0})}function B(t){return r.default.get("refund/express/"+t,{noAuth:!0})}function I(t){return r.default.get("order/verify_code/"+t)}function J(t,e){return r.default.post("presell/pay/"+t,e)}function U(t){return r.default.get("user/receipt/order",t)}function F(t){return r.default.get("user/receipt/order/"+t)}function G(t){return r.default.get("common/pay_key/"+t,{},{noAuth:!0})}},"786f":function(t,e,n){"use strict";n("99af"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("72ac"),r=getApp(),o={data:function(){return{tabIndex:0,tabList:[{title:"全部"},{title:"處理中"},{title:"已處理"}],goodsList:[],isScroll:!0,page:1,limit:15,hide_mer_status:r.globalData.hide_mer_status}},onLoad:function(){this.getList()},onReady:function(){var t=this;uni.$on("update",(function(e){t.hide_mer_status=e.hide_mer_status}))},mounted:function(){var t=this,e=getApp();this.$nextTick((function(){t.hide_mer_status=e.globalData.hide_mer_status}))},methods:{goStore:function(t){0==this.hide_mer_status&&uni.navigateTo({url:"/pages/store/home/index?id=".concat(t.merchant.mer_id)})},goPage:function(t){uni.navigateTo({url:"/pages/users/refund/goods/index?id="+t})},applyAgain:function(t){uni.navigateTo({url:"/pages/order_details/index?order_id=".concat(t.refundProduct[0].product.order_id)})},bindTab:function(t){this.tabIndex=t,this.page=1,this.isScroll=!0,this.goodsList=[],this.getList()},getList:function(){var t=this;this.isScroll&&(0,i.refundList)({type:this.tabIndex,page:this.page,limit:this.limit}).then((function(e){var n=e.data;t.isScroll=n.list.length>=t.limit,t.goodsList=t.goodsList.concat(n.list),t.page+=1}))},goDetail:function(t){uni.navigateTo({url:"/pages/users/refund/detail?id="+t.refund_order_id})},bindDetele:function(t,e){var n=this;uni.showModal({title:"提示",content:"確定刪除該記錄嗎？",success:function(r){r.confirm?((0,i.refundDel)(t.refund_order_id).then((function(t){n.goodsList.splice(e,1)})),uni.showToast({title:"刪除成功",icon:"none"})):r.cancel}})}},onReachBottom:function(){this.getList()}};e.default=o},"7c4b":function(t,e,n){var i=n("891b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("50323f6b",i,!0,{sourceMap:!1,shadowMode:!1})},"891b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.refund-list .tab-box[data-v-43a0f858]{z-index:50;position:fixed;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;top:0}.refund-list .tab-box .item[data-v-43a0f858]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;background-color:#fff;border-bottom:1px solid transparent}.refund-list .tab-box .item.active[data-v-43a0f858]{color:#e93323;border-color:#e93323}.refund-list .goods-wrapper[data-v-43a0f858]{margin-top:%?102?%}.refund-list .info-box[data-v-43a0f858]{position:relative;margin-top:%?12?%;background-color:#fff}.refund-list .info-box .title[data-v-43a0f858]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?32?%;height:%?86?%;border-bottom:1px solid #f0f0f0;color:#282828}.refund-list .info-box .title .icon-shangjiadingdan[data-v-43a0f858]{font-size:%?32?%}.refund-list .info-box .title .txt[data-v-43a0f858]{margin:0 %?5?%}.refund-list .info-box .title .icon-xiangyou[data-v-43a0f858]{color:#999;font-size:%?20?%;margin-top:%?6?%}.refund-list .info-box .product-box .product-item[data-v-43a0f858]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?25?% %?30?%}.refund-list .info-box .product-box .product-item .img-box[data-v-43a0f858]{width:%?130?%;height:%?130?%;border-radius:%?16?%}.refund-list .info-box .product-box .product-item .msg[data-v-43a0f858]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?440?%;margin-left:%?26?%}.refund-list .info-box .product-box .product-item .msg .name[data-v-43a0f858]{font-size:%?28?%;color:#282828}.refund-list .info-box .product-box .product-item .msg .des[data-v-43a0f858]{font-size:%?20?%;color:#868686}.refund-list .info-box .product-box .product-item .msg .price[data-v-43a0f858]{font-size:%?26?%}.refund-list .info-box .product-box .product-item .msg .num[data-v-43a0f858]{position:absolute;right:%?-80?%;top:%?4?%;color:#868686;font-size:%?26?%}.refund-list .info-box .product-box .event_name[data-v-43a0f858]{display:inline-block;margin-right:%?9?%;color:#fff;font-size:%?20?%;padding:0 %?8?%;line-height:%?30?%;text-align:center;border-radius:%?6?%}.refund-list .info-box .btn-box[data-v-43a0f858]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:0 %?20?% %?20?%}.refund-list .info-box .btn-box .btn[data-v-43a0f858]{width:%?176?%;height:%?60?%;line-height:%?60?%;margin-left:%?18?%;text-align:center;background:#e93323;border-radius:%?30?%;color:#fff;font-size:%?27?%}.refund-list .info-box .btn-box .btn.gray[data-v-43a0f858]{border:1px solid #ddd;background:transparent;color:#aaa}.refund-list .info-box .status[data-v-43a0f858]{position:absolute;right:%?30?%;top:0}.refund-list .info-box .status .iconfont[data-v-43a0f858]{font-size:%?120?%;opacity:.3}.refund-list .info-box .status .red-color[data-v-43a0f858]{color:#e93323}.event_bg[data-v-43a0f858]{background:#ff7f00}',""]),t.exports=e},"90bd":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"refund-list"},[n("v-uni-view",{staticClass:"tab-box  tab-box-top"},t._l(t.tabList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",class:{active:i==t.tabIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTab(i)}}},[t._v(t._s(e.title))])})),1),n("v-uni-view",{staticClass:"goods-wrapper"},t._l(t.goodsList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"info-box"},[n("v-uni-view",{staticClass:"title",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goStore(e)}}},[n("v-uni-text",{staticClass:"iconfont icon-shangjiadingdan"}),n("v-uni-text",{staticClass:"txt"},[t._v(t._s(e.merchant.mer_name))]),n("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),n("v-uni-view",{staticClass:"product-box"},t._l(e.refundProduct,(function(i){return n("v-uni-view",{key:i.order_product_id,staticClass:"product-item"},[n("v-uni-image",{staticClass:"img-box",attrs:{src:i.product.cart_info.product.image,mode:""}}),n("v-uni-view",{staticClass:"msg"},[n("v-uni-view",{staticClass:"name line1"},[2===i.product.cart_info.product_type?n("v-uni-text",{staticClass:"event_name event_bg"},[t._v("預售")]):t._e(),t._v(t._s(i.product.cart_info.product.store_name))],1),n("v-uni-view",{staticClass:"des"},[t._v(t._s(i.product.cart_info.productAttr.sku))]),n("v-uni-view",{staticClass:"price"},[t._v("退款："+t._s(e.refund_price))]),n("v-uni-view",{staticClass:"num"},[t._v("x "+t._s(i.product.product_num))])],1)],1)})),1),1==e.status?n("v-uni-view",{staticClass:"btn-box"},[n("v-uni-view",{staticClass:"btn gray",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}},[t._v("查看詳情")]),n("v-uni-view",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPage(e.refund_order_id)}}},[t._v("退回商品")])],1):-1==e.status?n("v-uni-view",{staticClass:"btn-box"},[n("v-uni-view",{staticClass:"btn gray",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}},[t._v("查看詳情")]),n("v-uni-view",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.applyAgain(e)}}},[t._v("再次申請")])],1):n("v-uni-view",{staticClass:"btn-box"},[3==e.status?n("v-uni-view",{staticClass:"btn gray",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.bindDetele(e,i)}}},[t._v("刪除記錄")]):t._e(),n("v-uni-view",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}},[t._v("查看詳情")])],1),n("v-uni-view",{staticClass:"status"},[0==e.status?[n("v-uni-text",{staticClass:"iconfont icon-shenhezhong1 red-color"})]:t._e(),1==e.status?[n("v-uni-text",{staticClass:"iconfont icon-daituihuo"})]:t._e(),2==e.status?[n("v-uni-text",{staticClass:"iconfont icon-tuihuozhong"})]:t._e(),3==e.status?[n("v-uni-text",{staticClass:"iconfont icon-yituikuan"})]:t._e(),-1==e.status?[n("v-uni-text",{staticClass:"iconfont icon-yijujue1"})]:t._e()],2)],1)})),1)],1)},o=[]},bbd3:function(t,e,n){"use strict";n.r(e);var i=n("90bd"),r=n("403c");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("e94e");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"43a0f858",null,!1,i["a"],a);e["default"]=s.exports},e94e:function(t,e,n){"use strict";var i=n("7c4b"),r=n.n(i);r.a}}]);