(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-refund-confirm"],{"16c1":function(e,t,r){"use strict";r.r(t);var n=r("4570"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"1f73":function(e,t,r){"use strict";var n=r("6bf0"),i=r.n(n);i.a},2082:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"alert-wrapper"},[r("v-uni-view",{staticClass:"alert-box"},[r("v-uni-image",{attrs:{src:"/static/images/success.png",mode:""}}),r("v-uni-view",{staticClass:"txt"},[e._v(e._s(e.msg))]),r("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[e._v("我知道了")])],1)],1)},a=[]},3279:function(e,t,r){"use strict";var n=r("81fd"),i=r.n(n);i.a},4570:function(e,t,r){"use strict";var n=r("4ea4");r("a434"),r("a9e3"),r("b680"),r("d3b7"),r("acd8"),r("3ca3"),r("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var i=n(r("1da1")),a=r("70b9"),o=n(r("e09a")),u={components:{alertBox:o.default},data:function(){return{order_id:0,isShowBox:!1,uploadImg:[],qsArray:[],qsIndex:0,numArray:[],numIndex:0,ids:"",refund_type:"",type:"",productData:[],con:"",refund_price:"",postage_price:"",maxRefundPrice:"",rerundPrice:"",unitPrice:0,msg:"",refund_order_id:"",status:"",order_status:!1}},onLoad:function(e){this.ids=e.ids,this.refund_type=e.refund_type,this.type=e.type,this.order_id=e.order_id,Promise.all([this.refundProduct(),this.refundMessage()])},methods:{limitAamount:function(){parseFloat(this.rerundPrice)>parseFloat(this.maxRefundPrice)&&(uni.showToast({title:"退款金額不能大於支付金額",icon:"none"}),this.validate=!1)},refundMessage:function(){var e=this;(0,a.refundMessage)().then((function(t){e.qsArray=t.data}))},refundProduct:function(){var e=this;(0,a.refundProduct)(this.order_id,{ids:this.ids}).then((function(t){var r=t.data;if(e.productData=r,e.refund_price=r.total_refund_price,e.postage_price=r.postage_price,e.maxRefundPrice=r.postage_price+Number(r.total_refund_price),e.rerundPrice=e.maxRefundPrice.toFixed(2),e.status=r.status,e.order_status=r.activity_type,1==e.type){e.unitPrice=e.$util.$h.Div(r.total_refund_price,r.product[0].refund_num);for(var n=1;n<=r.product[0].refund_num;n++)e.numArray.unshift(n);e.refund_price=e.$util.$h.Mul(e.unitPrice,e.numArray[0])}}))},bindPickerChange:function(e){this.qsIndex=e.target.value},bindNumChange:function(e){this.numIndex=e.target.value,this.refund_price=this.$util.$h.Mul(this.unitPrice,this.numArray[e.target.value]),this.maxRefundPrice=this.refund_price+this.postage_price,this.rerundPrice=this.maxRefundPrice.toFixed(2)},deleteImg:function(e){this.uploadImg.splice(e,1)},uploadpic:function(){if(this.uploadImg.length<9){var e=this;e.$util.uploadImageOne("upload/image",(function(t){e.uploadImg.push(t.data.path),e.$set(e,"uploadImg",e.uploadImg)}))}else uni.showToast({title:"最多可上傳9張",icon:"none"})},bindComfirm:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.refundApply)(e.order_id,{type:e.type,refund_type:e.refund_type,num:1==e.type?e.numArray[e.numIndex]:"",ids:e.ids,refund_message:e.qsArray[e.qsIndex],mark:e.con,refund_price:e.rerundPrice});case 3:r=t.sent,e.msg=r.message,e.refund_order_id=r.data.refund_order_id,e.isShowBox=!0,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),uni.showToast({title:t.t0,icon:"none"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},bindClose:function(){this.isShowBox=!1,uni.navigateTo({url:"/pages/users/refund/detail?id="+this.refund_order_id})}}};t.default=u},"4e37":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"refund-wrapper"},[e._l(e.productData.product,(function(t,n){return r("v-uni-view",{key:n,staticClass:"item"},[r("v-uni-view",{staticClass:"img-box"},[r("v-uni-image",{attrs:{src:t.cart_info.productAttr.image||t.cart_info.product.image}})],1),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"name line1"},[2==e.order_status?r("v-uni-text",{staticClass:"event_name event_bg"},[e._v("預售")]):e._e(),e._v(e._s(t.cart_info.product.store_name))],1),r("v-uni-view",{staticClass:"price"},[r("v-uni-text",{staticClass:"money-type"},[e._v("HK$")]),e._v(e._s(t.cart_info.productAttr.price)+" ×"+e._s(t.refund_num))],1)],1)],1)})),r("v-uni-view",{staticClass:"form-box"},[1==e.type?r("v-uni-view",{staticClass:"form-item item-txt"},[r("v-uni-text",{staticClass:"label"},[e._v("商品件數")]),r("v-uni-view",{staticClass:"picker"},[r("v-uni-picker",{attrs:{value:e.numIndex,range:e.numArray,disabled:2==e.order_status},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindNumChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"picker-box"},[e._v(e._s(e.numArray[e.numIndex])),2!=e.order_status?r("v-uni-text",{staticClass:"iconfont icon-jiantou"}):e._e()],1)],1)],1)],1):e._e(),r("v-uni-view",{staticClass:"form-item item-txt"},[r("v-uni-text",{staticClass:"label"},[e._v(e._s(0==e.status?"退款金(含運費)":"退款金(不含運費)"))]),r("v-uni-input",{staticStyle:{"text-align":"right",color:"#E93323"},attrs:{type:"text",placeholder:"請輸入金額"},model:{value:e.rerundPrice,callback:function(t){e.rerundPrice=t},expression:"rerundPrice"}})],1),r("v-uni-view",{staticClass:"form-item item-txt"},[r("v-uni-text",{staticClass:"label"},[e._v("退款原因")]),r("v-uni-view",{staticClass:"picker"},[r("v-uni-picker",{attrs:{value:e.qsIndex,range:e.qsArray},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"picker-box"},[e._v(e._s(e.qsArray[e.qsIndex])),r("v-uni-text",{staticClass:"iconfont icon-jiantou"})],1)],1)],1)],1),r("v-uni-view",{staticClass:"form-item item-txtarea"},[r("v-uni-text",{staticClass:"label"},[e._v("備註說明")]),r("v-uni-view",{staticClass:"txtarea"},[r("v-uni-textarea",{attrs:{value:"",placeholder:"填寫備註信息，100字以內"},model:{value:e.con,callback:function(t){e.con=t},expression:"con"}})],1)],1)],1),r("v-uni-view",{staticClass:"btn-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindComfirm.apply(void 0,arguments)}}},[e._v("申請退款")]),e.isShowBox?r("alertBox",{attrs:{msg:e.msg},on:{bindClose:function(t){arguments[0]=t=e.$handleEvent(t),e.bindClose.apply(void 0,arguments)}}}):e._e()],2)},a=[]},"6bf0":function(e,t,r){var n=r("f9b1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("0c714032",n,!0,{sourceMap:!1,shadowMode:!1})},"70b9":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getCartCounts=a,t.getCartList=o,t.changeCartNum=u,t.cartDel=d,t.getOrderList=s,t.orderProduct=c,t.orderComment=f,t.orderPay=l,t.orderData=p,t.unOrderCancel=b,t.orderDel=g,t.getOrderDetail=m,t.groupOrderDetail=v,t.getPayOrder=x,t.orderAgain=h,t.orderTake=w,t.express=_,t.ordeRefundReason=y,t.orderRefundVerify=k,t.orderConfirm=C,t.getCouponsOrderPrice=A,t.postOrderComputed=P,t.orderCreate=j,t.groupOrderList=I,t.refundBatch=O,t.refundProduct=$,t.refundApply=z,t.refundMessage=R,t.refundList=M,t.refundDetail=B,t.expressList=D,t.refundBackGoods=q,t.refundDel=E,t.refundExpress=T,t.verifyCode=F,t.presellOrderPay=L,t.receiptOrder=S,t.getReceiptOrder=N,t.getCallBackUrlApi=U;var i=n(r("1b5b"));function a(){return i.default.get("user/cart/count")}function o(){return i.default.get("user/cart/lst")}function u(e,t){return i.default.post("user/cart/change/"+e,t)}function d(e){return i.default.post("user/cart/delete",e)}function s(e){return i.default.get("order/list",e)}function c(e){return i.default.get("reply/product/"+e)}function f(e,t){return i.default.post("reply/"+e,t)}function l(e,t){return i.default.post("order/pay/"+e,t)}function p(){return i.default.get("order/number")}function b(e){return i.default.post("order/cancel/"+e)}function g(e){return i.default.post("order/del/"+e)}function m(e){return i.default.get("order/detail/"+e)}function v(e){return i.default.get("order/group_order_detail/"+e)}function x(e){return i.default.get("order/status/"+e)}function h(e){return i.default.post("user/cart/again",e)}function w(e){return i.default.post("order/take/"+e)}function _(e){return i.default.post("order/express/"+e)}function y(){return i.default.get("order/refund/reason")}function k(e){return i.default.post("order/refund/verify",e)}function C(e){return i.default.post("order/check",e)}function A(e,t){return i.default.get("coupons/order/"+e,t)}function P(e,t){return i.default.post("/order/computed/"+e,t)}function j(e){return i.default.post("order/create",e,{noAuth:!0})}function I(e){return i.default.get("order/group_order_list",e,{noAuth:!0})}function O(e){return i.default.get("refund/batch_product/"+e,{noAuth:!0})}function $(e,t){return i.default.get("refund/product/"+e,t,{noAuth:!0})}function z(e,t){return i.default.post("refund/apply/"+e,t,{noAuth:!0})}function R(){return i.default.get("common/refund_message",{noAuth:!0})}function M(e){return i.default.get("refund/list",e,{noAuth:!0})}function B(e){return i.default.get("refund/detail/"+e,{noAuth:!0})}function D(){return i.default.get("common/express")}function q(e,t){return i.default.post("refund/back_goods/"+e,t,{noAuth:!0})}function E(e){return i.default.post("refund/del/"+e,{noAuth:!0})}function T(e){return i.default.get("refund/express/"+e,{noAuth:!0})}function F(e){return i.default.get("order/verify_code/"+e)}function L(e,t){return i.default.post("presell/pay/"+e,t)}function S(e){return i.default.get("user/receipt/order",e)}function N(e){return i.default.get("user/receipt/order/"+e)}function U(e){return i.default.get("common/pay_key/"+e,{},{noAuth:!0})}},"81fd":function(e,t,r){var n=r("f7e9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("54a82be3",n,!0,{sourceMap:!1,shadowMode:!1})},ce35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{msg:{type:String,default:""}},methods:{close:function(){this.$emit("bindClose")}}};t.default=n},e09a:function(e,t,r){"use strict";r.r(t);var n=r("2082"),i=r("e970");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("3279");var o,u=r("f0c5"),d=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"20aecdde",null,!1,n["a"],o);t["default"]=d.exports},e6bb:function(e,t,r){"use strict";r.r(t);var n=r("4e37"),i=r("16c1");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("1f73");var o,u=r("f0c5"),d=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"370f938b",null,!1,n["a"],o);t["default"]=d.exports},e970:function(e,t,r){"use strict";r.r(t);var n=r("ce35"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},f7e9:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.alert-wrapper[data-v-20aecdde]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.alert-wrapper .alert-box[data-v-20aecdde]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?500?%;height:%?540?%;background-color:#fff;border-radius:%?10?%;font-size:%?34?%}.alert-wrapper .alert-box uni-image[data-v-20aecdde]{width:%?149?%;height:%?230?%}.alert-wrapper .alert-box .txt[data-v-20aecdde]{margin-bottom:%?20?%}.alert-wrapper .alert-box .btn[data-v-20aecdde]{width:%?340?%;height:%?90?%;line-height:%?90?%;text-align:center;background:-webkit-linear-gradient(right,#f96e29,#f62c2c);background:linear-gradient(-90deg,#f96e29,#f62c2c);border-radius:%?45?%;color:#fff}',""]),e.exports=t},f9b1:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.refund-wrapper .item[data-v-370f938b]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?25?% %?30?%;background-color:#fff}.refund-wrapper .item[data-v-370f938b]:after{content:" ";position:absolute;right:0;bottom:0;width:%?657?%;height:1px;background:#f0f0f0}.refund-wrapper .item .img-box[data-v-370f938b]{width:%?130?%;height:%?130?%}.refund-wrapper .item .img-box uni-image[data-v-370f938b]{width:%?130?%;height:%?130?%;border-radius:%?16?%}.refund-wrapper .item .info[data-v-370f938b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?440?%;margin-left:%?26?%}.refund-wrapper .item .info .tips[data-v-370f938b]{color:#868686;font-size:%?20?%}.refund-wrapper .item .info .price[data-v-370f938b]{margin-top:%?15?%;font-size:%?26?%}.refund-wrapper .item .check-box[data-v-370f938b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.refund-wrapper .item .check-box .iconfont[data-v-370f938b]{font-size:%?40?%;color:#ccc}.refund-wrapper .item .check-box .icon-xuanzhong1[data-v-370f938b]{color:#e93323}.refund-wrapper .form-box[data-v-370f938b]{padding-left:%?30?%;margin-top:%?18?%;background-color:#fff}.refund-wrapper .form-box .form-item[data-v-370f938b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #f0f0f0;font-size:%?30?%}.refund-wrapper .form-box .item-txt[data-v-370f938b]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:%?30?% %?30?% %?30?% 0}.refund-wrapper .form-box .item-txtarea[data-v-370f938b]{padding:%?30?% %?30?% %?30?% 0}.refund-wrapper .form-box .item-txtarea uni-textarea[data-v-370f938b]{display:block;width:%?400?%;height:%?100?%;font-size:%?30?%;text-align:right}.refund-wrapper .form-box .icon-jiantou[data-v-370f938b]{margin-left:%?10?%;font-size:%?28?%;color:#bbb}.refund-wrapper .upload-box[data-v-370f938b]{padding:%?30?%;background-color:#fff}.refund-wrapper .upload-box .title[data-v-370f938b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%}.refund-wrapper .upload-box .title .des[data-v-370f938b]{color:#bbb}.refund-wrapper .upload-box .upload-img[data-v-370f938b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?20?%}.refund-wrapper .upload-box .upload-img .img-item[data-v-370f938b]{position:relative;width:%?156?%;height:%?156?%;margin-right:%?24?%;margin-top:%?20?%}.refund-wrapper .upload-box .upload-img .img-item uni-image[data-v-370f938b]{width:%?156?%;height:%?156?%;border-radius:%?8?%}.refund-wrapper .upload-box .upload-img .img-item .iconfont[data-v-370f938b]{position:absolute;right:%?-15?%;top:%?-20?%;font-size:%?40?%;color:#e93323}.refund-wrapper .upload-box .upload-img .add-img[data-v-370f938b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?156?%;height:%?156?%;margin-top:%?20?%;border:1px solid #ddd;border-radius:%?3?%;color:#bbb;font-size:%?24?%}.refund-wrapper .upload-box .upload-img .add-img .iconfont[data-v-370f938b]{margin-bottom:%?10?%;font-size:%?50?%}.refund-wrapper .btn-box[data-v-370f938b]{width:%?690?%;height:%?86?%;margin:%?70?% auto;line-height:%?86?%;text-align:center;color:#fff;background:#e93323;border-radius:%?43?%;font-size:%?32?%}.event_bg[data-v-370f938b]{background:#ff7f00}.event_name[data-v-370f938b]{display:inline-block;margin-right:%?9?%;color:#fff;font-size:%?20?%;padding:0 %?8?%;line-height:%?30?%;text-align:center;border-radius:%?6?%}',""]),e.exports=t}}]);