(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_addcart-order_addcart"],{"02d0":function(t,e,i){"use strict";i("4de4"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("d2a5"),o={props:{openType:{type:Number,default:0},coupon:{type:Object,default:function(){return{}}}},filters:{timeYMD:function(t){if(t){var e=/\d{4}-\d{1,2}-\d{1,2}/g.exec(t);return e[0]}}},data:function(){return{tabList:["商品券","店铺券"],tabIndex:0,couponArr:[]}},mounted:function(){this.$nextTick((function(){this.couponArr=this.coupon.list,this.filterArray()}))},methods:{close:function(){this.$emit("ChangCouponsClone")},getCouponUser:function(t,e){var i=this,o=this.couponArr;if(o[t].issue)return!0;switch(this.openType){case 0:(0,n.setCouponReceive)(e.coupon_id).then((function(n){e.issue=!0,i.$emit("ChangCouponsUseState",t),i.$util.Tips({title:"领取成功"}),i.$emit("ChangCoupons",o[t])}));break;case 1:i.$emit("ChangCoupons",t);break}},filterArray:function(){0==this.tabIndex?this.couponArr=this.coupon.list.filter((function(t){return 1==t.type})):this.couponArr=this.coupon.list.filter((function(t){return 0==t.type}))},bindTab:function(t,e){this.tabIndex=e,this.filterArray()}}};e.default=o},"05fa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.animated[data-v-1afdb64a]{-webkit-animation-duration:.3s;animation-duration:.3s}.title[data-v-1afdb64a]{display:-webkit-box;display:-webkit-flex;display:flex}.title .item[data-v-1afdb64a]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#999}.title .item[data-v-1afdb64a]::after{content:" ";position:absolute;left:50%;bottom:%?18?%;width:%?50?%;height:%?5?%;background:transparent;-webkit-border-radius:3px;border-radius:3px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.title .item.on[data-v-1afdb64a]{color:#282828}.title .item.on[data-v-1afdb64a]::after{background:#e93323}.coupon-list[data-v-1afdb64a]{padding:%?30?%}.coupon-list .item[data-v-1afdb64a]{-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.06);box-shadow:0 2px 10px 0 rgba(0,0,0,.06)}.coupon-list-window[data-v-1afdb64a]{position:fixed;bottom:0;left:0;width:100%;background-color:#fff;-webkit-border-radius:%?16?% %?16?% 0 0;border-radius:%?16?% %?16?% 0 0;z-index:555;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .3s cubic-bezier(.25,.5,.5,.9);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.coupon-list-window.on[data-v-1afdb64a]{-webkit-animation:aminup;animation:aminup}.coupon-list-window .title[data-v-1afdb64a]{height:%?106?%;width:100%;text-align:center;line-height:%?106?%;font-size:%?32?%;font-weight:700;position:relative;border:1px solid #f5f5f5}.coupon-list-window .title .iconfont[data-v-1afdb64a]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?35?%;color:#8a8a8a;font-weight:400}.coupon-list-window .coupon-list[data-v-1afdb64a]{margin:0 0 %?50?% 0;height:%?550?%;overflow:auto}.coupon-list-window .pictrue[data-v-1afdb64a]{width:%?414?%;height:%?336?%;margin:0 auto %?50?% auto}.coupon-list-window .pictrue uni-image[data-v-1afdb64a]{width:100%;height:100%}.pic-num[data-v-1afdb64a]{color:#fff;font-size:%?24?%}.line-title[data-v-1afdb64a]{width:%?90?%;padding:0 %?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff7f7;border:1px solid #e83323;opacity:1;-webkit-border-radius:%?20?%;border-radius:%?20?%;font-size:%?20?%;color:#e83323;margin-right:%?12?%}.line-title.gray[data-v-1afdb64a]{border-color:#bbb;color:#bbb;background-color:#f5f5f5}',""]),t.exports=e},"0625":function(t,e,i){"use strict";var n=i("b894"),o=i.n(n);o.a},"0c65":function(t,e,i){"use strict";var n=i("db87"),o=i.n(n);o.a},"14c0":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4de4"),i("4160"),i("a15b"),i("d81d"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("ce19")),a=i("7d4f"),r=i("d2a5"),s=i("2b58"),c=i("c496"),u=i("2f62"),d=n(i("5249")),l=(getApp(),{components:{recommend:d.default,couponListWindow:o.default},data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",cartCount:0,goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!1,selectValue:[],selectCountPrice:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,coupon:{coupon:!1,list:[]},cartTotalCount:0,recommend:!1,hide_mer_status:1}},computed:(0,u.mapGetters)(["isLogin"]),onReady:function(){var t=this;uni.$on("update",(function(e){t.hide_mer_status=e.hide_mer_status}))},mounted:function(){var t=this,e=getApp();this.$nextTick((function(){t.hide_mer_status=e.globalData.hide_mer_status}))},onLoad:function(t){var e=this;0==e.isLogin&&(0,c.toLogin)()},onShow:function(){uni.showTabBar(),1==this.isLogin&&(this.hostProduct=[],this.hotScroll=!1,this.hotLimit=10,this.hotPage=1,this.getHostProduct(),this.getCartList(),this.getCartNum(),this.goodsHidden=!0,this.footerswitch=!0,this.cartList={valid:[],invalid:[]},this.isAllSelect=!1,this.selectValue=[],this.selectCountPrice=0,this.cartCount=0,this.isShowAuth=!1,uni.setStorage({key:"invoice_Data",data:{},success:function(){}}))},methods:{authColse:function(t){this.isShowAuth=t},onLoadFun:function(){this.isShowAuth=!1},subDel:function(t){var e=this,i=this,n=[];if(this.cartList.valid.forEach((function(t){t.list.forEach((function(t){t.check&&n.push(t.cart_id)}))})),0==n.length)return i.$util.Tips({title:"请选择产品"});(0,a.cartDel)({cart_id:n}).then((function(t){return e.getCartList(),e.getCartNum(),i.$util.Tips({title:t.message,icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},subCollect:function(t){var e=this,i=[];if(this.cartList.valid.forEach((function(t){t.list.forEach((function(t){t.check&&i.push(t.product.product_id)}))})),0==i.length)return e.$util.Tips({title:"请选择产品"});(0,s.collectAll)({type_id:i,type:1}).then((function(t){return e.$util.Tips({title:t.message,icon:"success"})})).catch((function(t){return e.$util.Tips({title:t})}))},subOrder:function(t){var e=[];if(this.cartList.valid.forEach((function(t){t.list.forEach((function(t){t.check&&e.push(t.cart_id)}))})),!(e.length>0))return that.$util.Tips({title:"请选择产品"});uni.navigateTo({url:"/pages/users/order_confirm/index?cartId="+e.join(",")})},addCart:function(t,e){if(t.cart_num=Number(t.cart_num)+1,this.cartTotalCount=Number(this.cartTotalCount)+1,t.hasOwnProperty("productAttr")&&t.cart_num>t.productAttr.stock)return t.cart_num=t.productAttr.stock,t.numAdd=!0,void(t.numSub=!1);t.numAdd=!1,t.numSub=!1,(0,a.changeCartNum)(t.cart_id,{cart_num:t.cart_num}).then((function(t){})).catch((function(e){t.cart_num=Number(t.cart_num)-1})),this.cartAllCheck("goodsCheck")},subCart:function(t){var e=!1;t.cart_num<1&&(e=!0),t.cart_num<=1?(t.cart_num=1,t.numSub=!0,e=!0):(t.cart_num=Number(t.cart_num)-1,this.cartTotalCount=Number(this.cartTotalCount)-1,t.numSub=!1,t.numAdd=!1,t.cart_num<=1&&(t.numSub=!0)),0==e&&((0,a.changeCartNum)(t.cart_id,{cart_num:t.cart_num}).then((function(t){})).catch((function(e){t.cart_num=Number(t.cart_num)-1})),this.cartAllCheck("goodsCheck"))},getCartNum:function(){var t=this;(0,a.getCartCounts)().then((function(e){t.cartTotalCount=e.data[0].count||0}))},getCartList:function(){var t=this;(0,a.getCartList)().then((function(e){e.data.list.forEach((function(t,e){t.allCheck=!0,t.list.forEach((function(t,e){t.check=!0,1==t.cart_num?t.numSub=!0:t.numSub=!1,t.cart_num==t.productAttr.stock?t.numAdd=!0:t.numAdd=!1}))})),t.cartList.valid=e.data.list,t.cartList.invalid=e.data.fail,0==e.data.list.length&&0==e.data.list.length?t.recommend=!0:t.recommend=!1,t.checkboxAllChange()}))},storeAllCheck:function(t,e){t.allCheck?(t.allCheck=!1,t.list.forEach((function(t,e){t.check=!1}))):(t.allCheck=!0,t.list.forEach((function(t,e){t.check=!0}))),this.cartAllCheck("goodsCheck")},goodsCheck:function(t){t.check=!t.check,this.cartAllCheck("goodsCheck")},cartAllCheck:function(t){var e=this,i=[],n=0,o=0;this.cartList.valid.forEach((function(a,r){if("goodsCheck"==t){var s=a.list.filter((function(t){return 1==t.check}));a.list.length==s.length?(a.allCheck=!0,i.push(a)):a.allCheck=!1}else a.list.forEach((function(t){t.check=e.isAllSelect})),a.allCheck=e.isAllSelect,a.allCheck&&i.push(a);a.list.forEach((function(t){t.check&&(n=e.$util.$h.Add(n,e.$util.$h.Mul(t.productAttr.price,t.cart_num)),o+=t.cart_num)}))})),this.cartCount=o,this.selectCountPrice=n,this.isAllSelect=i.length==this.cartList.valid.length},checkboxAllChange:function(){this.isAllSelect=!this.isAllSelect,this.cartAllCheck("cartCheck")},getHostProduct:function(){var t=this;t.loadend||t.hotScroll||(t.loading=!0,t.loadTitle="加载更多",(0,s.getProductHot)(t.hotPage,t.hotLimit).then((function(e){e.data.list;t.hotPage++,t.hotScroll=e.data.list.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data.list),t.loading=!1,t.loadTitle=t.hotScroll?"我也是有底线的":"加载更多"})))},goodsOpen:function(){var t=this;t.goodsHidden=!t.goodsHidden},manage:function(){var t=this;t.footerswitch=!t.footerswitch},unsetCart:function(){for(var t=this,e=[],i=0,n=t.cartList.invalid.length;i<n;i++)e.push(t.cartList.invalid[i].cart_id);(0,a.cartDel)({cart_id:e}).then((function(e){t.$util.Tips({title:"清除成功"}),t.$set(t.cartList,"invalid",[])})).catch((function(t){}))},giveCoupon:function(t){var e=this,i=[],n=[],o=[];t.list.map((function(t){o.push(t.product_id)})),(0,r.getCoupons)({ids:o.join(",")}).then((function(o){i=o.data,(0,r.getShopCoupons)(t.mer_id).then((function(t){var o=t.data;uni.hideTabBar(),n=i.concat(o),e.$set(e.coupon,"list",n),e.$set(e.coupon,"coupon",!0)})).catch((function(t){uni.showTabBar()}))}))},ChangCouponsClone:function(){uni.showTabBar(),this.$set(this.coupon,"coupon",!1)},ChangCouponsUseState:function(t){uni.showTabBar();var e=this;e.coupon.list[t].issue=!0}},onReachBottom:function(){this.getHostProduct()}});e.default=l},3332:function(t,e,i){"use strict";i.r(e);var n=i("02d0"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"3d2e":function(t,e,i){t.exports=i.p+"static/img/noCart.50b36491.png"},"64ee":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@supports (bottom:constant(safe-area-inset-bottom)) or (bottom:env(safe-area-inset-bottom)){.shoppingCart .footer[data-v-776ed1dc]{bottom:calc(var(--window-bottom) + constant(safe-area-inset-bottom));bottom:calc(var(--window-bottom) + env(safe-area-inset-bottom))}}",""]),t.exports=e},"68db":function(t,e,i){"use strict";i.r(e);var n=i("14c0"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"786c":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"coupon-list-window animated",class:1==t.coupon.coupon?"slideInUp":""},[n("v-uni-view",{staticClass:"title"},t._l(t.tabList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",class:{on:t.tabIndex==i},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.bindTab(e,i)}}},[t._v(t._s(e))])})),1),t.couponArr.length?n("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponArr,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item acea-row row-center-wrapper",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getCouponUser(i,e)}}},[n("v-uni-view",{staticClass:"money acea-row row-column row-center-wrapper",class:e.issue?"moneyGray":""},[n("v-uni-view",[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),n("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(e.use_min_price)+"元可用")])],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"condition line1"},[0===e.type?n("span",{staticClass:"line-title",class:e.issue?"gray":""},[t._v("店铺券")]):1===e.type?n("span",{staticClass:"line-title",class:e.issue?"gray":""},[t._v("商品券")]):t._e(),n("span",[t._v(t._s(e.title))])]),n("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[1==e.coupon_type?[n("v-uni-view",[t._v(t._s(t._f("timeYMD")(e.use_start_time))+"-"+t._s(t._f("timeYMD")(e.use_end_time)))])]:t._e(),0==e.coupon_type?[n("v-uni-view",[t._v("领取后"+t._s(e.coupon_time)+"天内可用")])]:t._e(),e.issue?n("v-uni-view",{staticClass:"bnt gray"},[t._v(t._s(e.use_title||"已领取"))]):n("v-uni-view",{staticClass:"bnt bg-color"},[t._v(t._s(t.coupon.statusTile||"立即领取"))])],2)],1)],1)})),1):n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:i("d7e8")}})],1)],1),n("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"true",hidden:0==t.coupon.coupon},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)},a=[]},"7d4f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCartCounts=a,e.getCartList=r,e.changeCartNum=s,e.cartDel=c,e.getOrderList=u,e.orderProduct=d,e.orderComment=l,e.orderPay=f,e.orderData=p,e.unOrderCancel=h,e.orderDel=v,e.getOrderDetail=g,e.groupOrderDetail=b,e.getPayOrder=m,e.orderAgain=w,e.orderTake=C,e.express=x,e.ordeRefundReason=_,e.orderRefundVerify=k,e.orderConfirm=A,e.getCouponsOrderPrice=y,e.postOrderComputed=L,e.orderCreate=z,e.groupOrderList=T,e.refundBatch=$,e.refundProduct=P,e.refundApply=S,e.refundMessage=E,e.refundList=O,e.refundDetail=N,e.expressList=D,e.refundBackGoods=G,e.refundDel=M,e.refundExpress=R,e.verifyCode=B,e.presellOrderPay=H,e.receiptOrder=j,e.getReceiptOrder=U,e.getCallBackUrlApi=I;var o=n(i("112d"));function a(){return o.default.get("user/cart/count")}function r(){return o.default.get("user/cart/lst")}function s(t,e){return o.default.post("user/cart/change/"+t,e)}function c(t){return o.default.post("user/cart/delete",t)}function u(t){return o.default.get("order/list",t)}function d(t){return o.default.get("reply/product/"+t)}function l(t,e){return o.default.post("reply/"+t,e)}function f(t,e){return o.default.post("order/pay/"+t,e)}function p(){return o.default.get("order/number")}function h(t){return o.default.post("order/cancel/"+t)}function v(t){return o.default.post("order/del/"+t)}function g(t){return o.default.get("order/detail/"+t)}function b(t){return o.default.get("order/group_order_detail/"+t)}function m(t){return o.default.get("order/status/"+t)}function w(t){return o.default.post("user/cart/again",t)}function C(t){return o.default.post("order/take/"+t)}function x(t){return o.default.post("order/express/"+t)}function _(){return o.default.get("order/refund/reason")}function k(t){return o.default.post("order/refund/verify",t)}function A(t){return o.default.post("order/check",t)}function y(t,e){return o.default.get("coupons/order/"+t,e)}function L(t,e){return o.default.post("/order/computed/"+t,e)}function z(t){return o.default.post("order/create",t,{noAuth:!0})}function T(t){return o.default.get("order/group_order_list",t,{noAuth:!0})}function $(t){return o.default.get("refund/batch_product/"+t,{noAuth:!0})}function P(t,e){return o.default.get("refund/product/"+t,e,{noAuth:!0})}function S(t,e){return o.default.post("refund/apply/"+t,e,{noAuth:!0})}function E(){return o.default.get("common/refund_message",{noAuth:!0})}function O(t){return o.default.get("refund/list",t,{noAuth:!0})}function N(t){return o.default.get("refund/detail/"+t,{noAuth:!0})}function D(){return o.default.get("common/express")}function G(t,e){return o.default.post("refund/back_goods/"+t,e,{noAuth:!0})}function M(t){return o.default.post("refund/del/"+t,{noAuth:!0})}function R(t){return o.default.get("refund/express/"+t,{noAuth:!0})}function B(t){return o.default.get("order/verify_code/"+t)}function H(t,e){return o.default.post("presell/pay/"+t,e)}function j(t){return o.default.get("user/receipt/order",t)}function U(t){return o.default.get("user/receipt/order/"+t)}function I(t){return o.default.get("common/pay_key/"+t,{},{noAuth:!0})}},8966:function(t,e,i){"use strict";i.r(e);var n=i("ad90"),o=i("68db");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("ca7a"),i("0c65");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"776ed1dc",null,!1,n["a"],r);e["default"]=c.exports},ad90:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"shoppingCart"},[n("v-uni-view",{staticClass:"labelNav acea-row row-around row-middle"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-xuanzhong"}),t._v("100%正品保证")],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-xuanzhong"}),t._v("所有商品精挑细选")],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-xuanzhong"}),t._v("售后无忧")],1)],1),n("v-uni-view",{staticClass:"nav acea-row row-between-wrapper"},[n("v-uni-view",[t._v("购物数量"),n("v-uni-text",{staticClass:"num font-color"},[t._v(t._s(t.cartTotalCount))])],1),t.cartList.valid.length>0||t.cartList.invalid.length>0?n("v-uni-view",{staticClass:"administrate acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.manage.apply(void 0,arguments)}}},[t._v(t._s(t.footerswitch?"管理":"取消"))]):t._e()],1),t.cartList.valid.length>0||t.cartList.invalid.length>0?n("v-uni-view",[n("v-uni-view",{staticClass:"list"},[t._l(t.cartList.valid,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"store-title"},[n("v-uni-view",{staticClass:"checkbox",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.storeAllCheck(e,i)}}},[e.allCheck?n("v-uni-text",{staticClass:"iconfont icon-xuanzhong1"}):n("v-uni-text",{staticClass:"iconfont icon-weixuanzhong"})],1),n("v-uni-navigator",{staticClass:"info",attrs:{url:0==t.hide_mer_status?"/pages/store/home/index?id="+e.mer_id:"#"}},[n("v-uni-text",{staticClass:"iconfont icon-shangjiadingdan"}),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.mer_name))]),n("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),e.hasCoupon>0?n("v-uni-view",{staticClass:"coupon-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.giveCoupon(e)}}},[t._v("优惠券")]):t._e()],1),t._l(e.list,(function(e){return n("v-uni-navigator",{key:e.cart_id,staticClass:"picTxt acea-row",attrs:{url:"/pages/goods_details/index?id="+e.product.product_id,"hover-class":"none"}},[n("v-uni-view",{staticClass:"checkbox",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.goodsCheck(e,i)}}},[e.check?n("v-uni-text",{staticClass:"iconfont icon-xuanzhong1"}):n("v-uni-text",{staticClass:"iconfont icon-weixuanzhong"})],1),n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.productAttr&&e.productAttr.image||e.product.image}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"line1"},[t._v(t._s(e.product.store_name))]),e.productAttr.sku?n("v-uni-view",{staticClass:"infor line1"},[t._v("属性："+t._s(e.productAttr.sku))]):t._e(),n("v-uni-view",{staticClass:"money"},[t._v("￥"+t._s(e.productAttr.price))])],1),n("v-uni-view",{staticClass:"carnum acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"reduce",class:e.numSub?"on":"",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.subCart(e)}}},[t._v("-")]),n("v-uni-view",{staticClass:"num"},[t._v(t._s(e.cart_num))]),n("v-uni-view",{staticClass:"plus",class:e.numAdd?"on":"",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.addCart(e)}}},[t._v("+")])],1)],1)}))],2)]}))],2),t.cartList.invalid.length>0?n("v-uni-view",{staticClass:"invalidGoods"},[n("v-uni-view",{staticClass:"goodsNav acea-row row-between-wrapper"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goodsOpen.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont",class:1==t.goodsHidden?"icon-xiangxia":"icon-xiangshang"}),t._v("失效商品")],1),n("v-uni-view",{staticClass:"del",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.unsetCart.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-shanchu1"}),t._v("清空")],1)],1),n("v-uni-view",{staticClass:"goodsList",attrs:{hidden:t.goodsHidden}},[t._l(t.cartList.invalid,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"invalid"},[t._v("失效")]),n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.productAttr&&e.productAttr.image||e.product.image}})],1),n("v-uni-view",{staticClass:"text acea-row row-column-between"},[n("v-uni-view",{staticClass:"line1 name"},[t._v(t._s(e.product.store_name))]),n("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"end"},[t._v("该商品已失效")])],1)],1)],1)]}))],2)],1):t._e()],1):t._e(),t.recommend?n("v-uni-view",{staticClass:"noCart",style:{marginTop:0==t.cartList.invalid.length&&0==t.cartList.invalid.length?"170rpx":""}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:i("3d2e")}})],1),n("recommend",{attrs:{hostProduct:t.hostProduct,isLogin:t.isLogin}}),t.hostProduct.length>5?n("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[n("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e()],1):t._e(),n("v-uni-view",{staticStyle:{height:"120rpx"}}),t.cartList.valid.length>0?n("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[n("v-uni-view",[n("v-uni-view",{staticClass:"allcheckbox",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.checkboxAllChange.apply(void 0,arguments)}}},[t.isAllSelect?n("v-uni-text",{staticClass:"iconfont icon-xuanzhong1"}):n("v-uni-text",{staticClass:"iconfont icon-weixuanzhong"}),t._v("全选 ("+t._s(t.cartCount)+")")],1)],1),1==t.footerswitch?n("v-uni-view",{staticClass:"money acea-row row-middle"},[n("v-uni-text",{staticClass:"font-color"},[t._v("￥"+t._s(t.selectCountPrice))]),n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.subOrder.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"placeOrder bg-color",attrs:{formType:"submit"}},[t._v("立即下单")])],1)],1):n("v-uni-view",{staticClass:"button acea-row row-middle"},[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.subCollect.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"bnt cart-color",attrs:{formType:"submit"}},[t._v("收藏")])],1),n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.subDel.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"bnt",attrs:{formType:"submit"}},[t._v("删除")])],1)],1)],1):t._e()],1),t.coupon.coupon?[n("couponListWindow",{attrs:{coupon:t.coupon},on:{ChangCouponsClone:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangCouponsClone.apply(void 0,arguments)},ChangCouponsUseState:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangCouponsUseState.apply(void 0,arguments)}}})]:t._e()],2)},a=[]},b894:function(t,e,i){var n=i("05fa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7a134202",n,!0,{sourceMap:!1,shadowMode:!1})},ca7a:function(t,e,i){"use strict";var n=i("eddb"),o=i.n(n);o.a},ce19:function(t,e,i){"use strict";i.r(e);var n=i("786c"),o=i("3332");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("0625");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"1afdb64a",null,!1,n["a"],r);e["default"]=c.exports},d2a5:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=a,e.getLogo=r,e.setFormId=s,e.setCouponReceive=c,e.getCoupons=u,e.getShopCoupons=d,e.getUserCoupons=l,e.getArticleCategoryList=f,e.getArticleList=p,e.getArticleHotList=h,e.getArticleBannerList=v,e.getArticleDetails=g,e.loginMobile=b,e.verifyCode=m,e.registerVerify=w,e.phoneRegister=C,e.phoneRegisterReset=x,e.phoneLogin=_,e.switchH5Login=k,e.bindingPhone=A,e.logout=y,e.getTemlIds=L,e.pink=z,e.getCity=T,e.getLiveList=$;var o=n(i("112d"));function a(){return o.default.get("common/home",{},{noAuth:!0})}function r(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function s(t){return o.default.post("wechat/set_form_id",{formId:t})}function c(t){return o.default.post("coupon/receive/"+t)}function u(t){return o.default.get("coupon/product",t,{noAuth:!0})}function d(t){return o.default.get("coupon/store/"+t,{},{noAuth:!0})}function l(t){return o.default.get("coupon/list",t)}function f(){return o.default.get("article/category/lst",{},{noAuth:!0})}function p(t,e){return o.default.get("article/lst/"+t,e,{noAuth:!0})}function h(){return o.default.get("article/hot/list",{},{noAuth:!0})}function v(){return o.default.get("article/banner/list",{},{noAuth:!0})}function g(t){return o.default.get("article/detail/"+t,{},{noAuth:!0})}function b(t){return o.default.post("login/mobile",t,{noAuth:!0})}function m(){return o.default.get("verify_code",{},{noAuth:!0})}function w(t,e,i,n){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:i,code:n},{noAuth:!0})}function C(t){return o.default.post("register",t,{noAuth:!0})}function x(t){return o.default.post("register/reset",t,{noAuth:!0})}function _(t){return o.default.post("login",t,{noAuth:!0})}function k(t){return o.default.post("user/switch",t)}function A(t){return o.default.post("user/binding",t)}function y(){return o.default.get("logout")}function L(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function z(){return o.default.get("pink",{},{noAuth:!0})}function T(){return o.default.get("system/city/lst",{},{noAuth:!0})}function $(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}},d7e8:function(t,e,i){t.exports=i.p+"static/img/noCoupon.cca04173.png"},db87:function(t,e,i){var n=i("64ee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("71b6d656",n,!0,{sourceMap:!1,shadowMode:!1})},e23f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.shoppingCart .labelNav[data-v-776ed1dc]{height:%?76?%;padding:0 %?30?%;font-size:%?22?%;color:#8c8c8c;position:fixed;left:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#f5f5f5;z-index:5;top:0}.shoppingCart .labelNav .item .iconfont[data-v-776ed1dc]{font-size:%?25?%;margin-right:%?10?%}.shoppingCart .nav[data-v-776ed1dc]{width:100%;height:%?80?%;background-color:#fff;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?28?%;color:#282828;position:fixed;left:0;z-index:5;top:%?76?%}.shoppingCart .nav .administrate[data-v-776ed1dc]{font-size:%?26?%;color:#282828;width:%?110?%;height:%?46?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;border:1px solid #868686}.shoppingCart .noCart[data-v-776ed1dc]{margin-top:%?20?%;margin-bottom:%?20?%;background-color:#fff;padding-top:%?0.1?%}.shoppingCart .noCart .pictrue[data-v-776ed1dc]{width:%?414?%;height:%?336?%;margin:%?78?% auto %?56?% auto}.shoppingCart .noCart .pictrue uni-image[data-v-776ed1dc]{width:100%;height:100%}.shoppingCart .list[data-v-776ed1dc]{margin-top:%?171?%}.shoppingCart .list .item[data-v-776ed1dc]{background-color:#fff;margin-bottom:%?15?%}.shoppingCart .list .item .store-title[data-v-776ed1dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:0 %?30?%;height:%?85?%;border-bottom:1px solid #f0f0f0}.shoppingCart .list .item .store-title .checkbox[data-v-776ed1dc]{width:%?60?%}.shoppingCart .list .item .store-title .checkbox .iconfont[data-v-776ed1dc]{font-size:%?40?%;color:#ccc}.shoppingCart .list .item .store-title .checkbox .icon-xuanzhong1[data-v-776ed1dc]{color:#e93323}.shoppingCart .list .item .store-title .info[data-v-776ed1dc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.shoppingCart .list .item .store-title .info .iconfont[data-v-776ed1dc]{font-size:%?36?%}.shoppingCart .list .item .store-title .info .name[data-v-776ed1dc]{margin:0 0 0 %?10?%;font-size:%?28?%;color:#282828;font-weight:700}.shoppingCart .list .item .store-title .info .icon-xiangyou[data-v-776ed1dc]{margin-top:%?6?%;font-size:%?22?%;color:#999}.shoppingCart .list .item .store-title .coupon-btn[data-v-776ed1dc]{color:#e93323;font-size:%?22?%;width:%?100?%;height:%?36?%;line-height:%?36?%;background:#ffedeb;-webkit-border-radius:%?18?%;border-radius:%?18?%;text-align:center}.shoppingCart .list .item .picTxt[data-v-776ed1dc]{width:100%;padding:%?25?% %?30?%;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f0f0f0}.shoppingCart .list .item .picTxt .checkbox[data-v-776ed1dc]{width:%?60?%}.shoppingCart .list .item .picTxt .checkbox .iconfont[data-v-776ed1dc]{font-size:%?40?%;color:#ccc}.shoppingCart .list .item .picTxt .checkbox .icon-xuanzhong1[data-v-776ed1dc]{color:#e93323}.shoppingCart .list .item .picTxt .pictrue[data-v-776ed1dc]{width:%?160?%;height:%?160?%}.shoppingCart .list .item .picTxt .pictrue uni-image[data-v-776ed1dc]{width:100%;height:100%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.shoppingCart .list .item .picTxt .text[data-v-776ed1dc]{width:%?444?%;margin-left:%?20?%;font-size:%?28?%;color:#282828}.shoppingCart .list .item .picTxt .text .infor[data-v-776ed1dc]{font-size:%?24?%;color:#868686;margin-top:%?16?%}.shoppingCart .list .item .picTxt .text .money[data-v-776ed1dc]{font-size:%?32?%;color:#282828;margin-top:%?28?%}.shoppingCart .list .item .picTxt .carnum[data-v-776ed1dc]{height:%?47?%;position:absolute;bottom:%?30?%;right:%?30?%}.shoppingCart .list .item .picTxt .carnum uni-view[data-v-776ed1dc]{border:%?1?% solid #a4a4a4;width:%?66?%;text-align:center;height:100%;line-height:%?40?%;font-size:%?28?%;color:#a4a4a4}.shoppingCart .list .item .picTxt .carnum .reduce[data-v-776ed1dc]{border-right:0;-webkit-border-radius:%?3?% 0 0 %?3?%;border-radius:%?3?% 0 0 %?3?%}.shoppingCart .list .item .picTxt .carnum .reduce.on[data-v-776ed1dc]{border-color:#e3e3e3;color:#dedede}.shoppingCart .list .item .picTxt .carnum .plus[data-v-776ed1dc]{border-left:0;-webkit-border-radius:0 %?3?% %?3?% 0;border-radius:0 %?3?% %?3?% 0}.shoppingCart .list .item .picTxt .carnum .num[data-v-776ed1dc]{color:#282828}.shoppingCart .invalidGoods[data-v-776ed1dc]{background-color:#fff}.shoppingCart .invalidGoods .goodsNav[data-v-776ed1dc]{width:100%;height:%?66?%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?28?%;color:#282828}.shoppingCart .invalidGoods .goodsNav .iconfont[data-v-776ed1dc]{color:#424242;font-size:%?28?%;margin-right:%?17?%}.shoppingCart .invalidGoods .goodsNav .del[data-v-776ed1dc]{font-size:%?26?%;color:#999}.shoppingCart .invalidGoods .goodsNav .del .icon-shanchu1[data-v-776ed1dc]{color:#999;font-size:%?33?%;vertical-align:%?-2?%;margin-right:%?8?%}.shoppingCart .invalidGoods .goodsList .item[data-v-776ed1dc]{padding:%?20?% %?30?%;border-top:%?1?% solid #f5f5f5}.shoppingCart .invalidGoods .goodsList .item .invalid[data-v-776ed1dc]{font-size:%?22?%;color:#fff;width:%?70?%;height:%?36?%;background-color:#aaa;-webkit-border-radius:%?3?%;border-radius:%?3?%;text-align:center;line-height:%?36?%}.shoppingCart .invalidGoods .goodsList .item .pictrue[data-v-776ed1dc]{width:%?140?%;height:%?140?%}.shoppingCart .invalidGoods .goodsList .item .pictrue uni-image[data-v-776ed1dc]{width:100%;height:100%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.shoppingCart .invalidGoods .goodsList .item .text[data-v-776ed1dc]{width:%?433?%;font-size:%?28?%;color:#999;height:%?140?%}.shoppingCart .invalidGoods .goodsList .item .text .name[data-v-776ed1dc]{width:100%}.shoppingCart .invalidGoods .goodsList .item .text .infor[data-v-776ed1dc]{font-size:%?24?%}.shoppingCart .invalidGoods .goodsList .item .text .end[data-v-776ed1dc]{font-size:%?26?%;color:#bbb}.shoppingCart .footer[data-v-776ed1dc]{z-index:9;width:100%;height:%?96?%;background-color:#fafafa;position:fixed;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:%?1?% solid #eee;bottom:var(--window-bottom)}.shoppingCart .footer .checkAll[data-v-776ed1dc]{font-size:%?28?%;color:#282828;margin-left:%?16?%}.shoppingCart .footer .money[data-v-776ed1dc]{font-size:%?30?%}.shoppingCart .footer .placeOrder[data-v-776ed1dc]{color:#fff;font-size:%?30?%;width:%?226?%;height:%?70?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;text-align:center;line-height:%?70?%;margin-left:%?22?%}.shoppingCart .footer .button .bnt[data-v-776ed1dc]{font-size:%?28?%;color:#999;-webkit-border-radius:%?50?%;border-radius:%?50?%;border:1px solid #999;width:%?160?%;height:%?60?%;text-align:center;line-height:%?60?%}.shoppingCart .footer .button uni-form ~ uni-form[data-v-776ed1dc]{margin-left:%?17?%}.allcheckbox[data-v-776ed1dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?260?%}.allcheckbox .iconfont[data-v-776ed1dc]{margin-right:%?20?%;font-size:%?40?%;color:#ccc}.allcheckbox .icon-xuanzhong1[data-v-776ed1dc]{color:#e93323}',""]),t.exports=e},eddb:function(t,e,i){var n=i("e23f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("b49c9d7a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);