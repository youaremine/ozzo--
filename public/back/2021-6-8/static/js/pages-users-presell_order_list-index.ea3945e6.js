(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-presell_order_list-index"],{"0672":function(t,e,i){"use strict";var r=i("8799"),a=i.n(r);a.a},2170:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"my-order"},[i("v-uni-view",{staticClass:"list"},t._l(t.orderList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"item"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[i("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"acea-row row-middle left-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-shangjiadingdan"}),i("v-uni-view",{staticClass:"store-name"},[t._v(t._s(e.merchant.mer_name))]),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),1===e.presellOrder.activeStatus?i("v-uni-view",{staticClass:"font-color"},[t._v("等待買家付款")]):t._e(),0===e.presellOrder.activeStatus?i("v-uni-view",{staticClass:"font-color"},[t._v("未開始")]):t._e(),2===e.presellOrder.activeStatus?i("v-uni-view",{staticClass:"font-color"},[t._v("交易已關閉")]):t._e()],1),t._l(e.orderProduct,(function(r,a){return[i("v-uni-view",{staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:r.cart_info.productAttr&&r.cart_info.productAttr.image||r.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line1"},[i("v-uni-text",{staticClass:"event_name event_bg"},[t._v("預售")]),i("v-uni-text",[t._v(t._s(r.cart_info.product.store_name))]),i("v-uni-view",{staticClass:"event_ship event_color"},[t._v("發貨時間："),1===r.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===r.cart_info.productPresell.delivery_type?"支付成功後":"預售結束後")+t._s(r.cart_info.productPresell.delivery_day)+"天内")]):t._e(),2===r.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===r.cart_info.productPresell.delivery_type?"支付尾款後":"預售結束後")+t._s(r.cart_info.productPresell.delivery_day)+"天内")]):t._e()],1)],1),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(r.cart_info.productPresellAttr.presell_price))],1),i("v-uni-view",[t._v("x"+t._s(r.product_num))])],1)],1),2===r.cart_info.productPresell.presell_type?i("v-uni-view",{staticClass:"event_price"},[i("v-uni-text",{staticClass:"color_gray"},[t._v("定金已支付"),i("v-uni-text",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(e.pay_price)+"，")],1)],1),t._v("尾款待支付"),i("v-uni-text",{staticClass:"font-color"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(e.presellOrder.pay_price))],1)],1):t._e()],1)]})),i("v-uni-view",{staticClass:"bottom acea-row row-right row-middle"},[2===e.presellOrder.activeStatus?i("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.cancelOrder(r,e.order_id)}}},[t._v("取消訂單")]):t._e(),1===e.presellOrder.activeStatus?i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goPay(e.presellOrder.pay_price,e.order_id)}}},[t._v("立即付款")]):t._e(),0===e.presellOrder.activeStatus?i("v-uni-view",{staticClass:"bnt bg-color btn_auto"},[t._v("未開始")]):t._e(),2===e.presellOrder.activeStatus?i("v-uni-view",{staticClass:"bnt bg-color"},[t._v("交易已關閉")]):t._e()],1)],2)],1)})),1),t.orderList.length>5?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),0==t.orderList.length?i("v-uni-view",[i("emptyPage",{attrs:{title:"暫無訂單~"}})],1):t._e()],1),i("payment",{attrs:{payMode:t.payMode,pay_close:t.pay_close,order_id:t.pay_order_id,totalPrice:t.totalPrice,order_type:1},on:{onChangeFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeFun.apply(void 0,arguments)}}})],1)},o=[]},8799:function(t,e,i){var r=i("89f9");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("757a94d7",r,!0,{sourceMap:!1,shadowMode:!1})},"89f9":function(t,e,i){var r=i("24fb"),a=i("1de5"),o=i("bef4");e=r(!1);var n=a(o);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.my-order .header[data-v-787964dc]{height:%?260?%;padding:0 %?30?%}.my-order .header .picTxt[data-v-787964dc]{height:%?190?%}.my-order .header .picTxt .text[data-v-787964dc]{color:hsla(0,0%,100%,.8);font-size:%?26?%;font-family:Guildford Pro}.my-order .header .picTxt .text .name[data-v-787964dc]{font-size:%?34?%;font-weight:700;color:#fff;margin-bottom:%?20?%}.my-order .header .picTxt .pictrue[data-v-787964dc]{width:%?122?%;height:%?109?%}.my-order .header .picTxt .pictrue uni-image[data-v-787964dc]{width:100%;height:100%}.my-order .nav[data-v-787964dc]{background-color:#fff;width:%?690?%;height:%?140?%;border-radius:%?6?%;margin:%?-73?% auto 0 auto}.my-order .nav .item[data-v-787964dc]{text-align:center;font-size:%?26?%;color:#282828;padding:%?29?% 0}.my-order .nav .item.on[data-v-787964dc]{font-weight:700;border-bottom:%?5?% solid #e93323}.my-order .nav .item .num[data-v-787964dc]{margin-top:%?18?%}.my-order .list[data-v-787964dc]{width:%?690?%;margin:%?14?% auto 0 auto}.my-order .list .item[data-v-787964dc]{background-color:#fff;border-radius:%?6?%;margin-bottom:%?14?%}.my-order .list .item .title[data-v-787964dc]{height:%?84?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#282828}.my-order .list .item .title .left-wrapper .iconfont[data-v-787964dc]{margin-top:%?5?%}.my-order .list .item .title .left-wrapper .store-name[data-v-787964dc]{margin:0 %?10?%}.my-order .list .item .title .left-wrapper .icon-xiangyou[data-v-787964dc]{font-size:%?20?%}.my-order .list .item .title .sign[data-v-787964dc]{font-size:%?24?%;padding:0 %?7?%;height:%?36?%;margin-right:%?15?%}.my-order .list .item .item-info[data-v-787964dc]{padding:0 %?30?%;margin-top:%?22?%}.my-order .list .item .item-info .pictrue[data-v-787964dc]{width:%?120?%;height:%?120?%}.my-order .list .item .item-info .pictrue uni-image[data-v-787964dc]{width:100%;height:100%;border-radius:%?6?%}.my-order .list .item .item-info .text[data-v-787964dc]{width:%?486?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.my-order .list .item .item-info .text .name[data-v-787964dc]{width:%?320?%;color:#282828}.event_bg[data-v-787964dc]{background:#ff7f00}.event_color[data-v-787964dc]{color:#ff7f00}.my-order .list .item .event_name[data-v-787964dc]{display:inline-block;margin-right:%?9?%;color:#fff;font-size:%?20?%;padding:0 %?8?%;line-height:%?30?%;text-align:center;border-radius:%?6?%}.my-order .list .item .event_ship[data-v-787964dc]{font-size:%?20?%;margin-top:%?10?%}.my-order .list .event_price[data-v-787964dc]{margin:0 0 %?50?% %?120?%;font-size:%?24?%}.my-order .list .event_price .color_gray[data-v-787964dc]{color:#999}.my-order .list .item .item-info .text .money[data-v-787964dc]{text-align:right}.my-order .list .item .totalPrice[data-v-787964dc]{font-size:%?26?%;color:#282828;text-align:right;margin:%?27?% 0 0 %?30?%;padding:0 %?30?% %?30?% 0}.my-order .list .item .totalPrice .money[data-v-787964dc]{font-size:%?28?%;font-weight:700}.my-order .list .item .bottom[data-v-787964dc]{height:%?107?%;padding:0 %?30?%;border-top:1px solid #f0f0f0}.my-order .list .item .bottom .bnt[data-v-787964dc]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;color:#fff;border-radius:%?50?%;font-size:%?27?%}.my-order .list .item .bottom .bnt.btn_auto[data-v-787964dc]{width:auto;padding:0 %?40?%}.my-order .list .item .bottom .bnt.cancelBnt[data-v-787964dc]{border:%?1?% solid #ddd;color:#aaa}.my-order .list .item .bottom .bnt ~ .bnt[data-v-787964dc]{margin-left:%?17?%}.noCart[data-v-787964dc]{margin-top:%?171?%;padding-top:%?0.1?%}.noCart .pictrue[data-v-787964dc]{width:%?414?%;height:%?336?%;margin:%?78?% auto %?56?% auto}.noCart .pictrue uni-image[data-v-787964dc]{width:100%;height:100%}.event_container[data-v-787964dc]{width:%?690?%;background-image:url('+n+");background-size:cover;background-repeat:no-repeat;margin:%?20?% auto;padding:%?26?% %?30?%;border-radius:%?16?%}.event_container .info[data-v-787964dc]{width:%?420?%}.event_container .info .title[data-v-787964dc]{color:#282828;font-size:%?26?%}.event_container .info .desc[data-v-787964dc]{color:#999;font-size:%?24?%;margin-top:%?30?%}.event_container .photo[data-v-787964dc]{width:%?180?%}.event_container .photo .picture[data-v-787964dc]{width:%?120?%;height:%?120?%}.event_container .photo .picture uni-image[data-v-787964dc]{width:100%;height:100%;border-radius:%?8?%}.event_container .photo .more_btn[data-v-787964dc]{color:#fff;background:#f97e3b;width:%?40?%;height:%?40?%;border-radius:%?40?%;text-align:center;line-height:%?40?%;position:relative;top:%?40?%}.event_container .photo .more_btn uni-text[data-v-787964dc]{font-size:%?10?%}",""]),t.exports=e},c48c:function(t,e,i){"use strict";i.r(e);var r=i("f800"),a=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},e3e0:function(t,e,i){"use strict";i.r(e);var r=i("2170"),a=i("c48c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0672");var n,d=i("f0c5"),s=Object(d["a"])(a["default"],r["b"],r["c"],!1,null,"787964dc",null,!1,r["a"],n);e["default"]=s.exports},f800:function(t,e,i){"use strict";var r=i("4ea4");i("4160"),i("a434"),i("d3b7"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("cdf4"),o=i("8fa6"),n=(i("ddac"),r(i("5ece"))),d=i("2073"),s=(i("9de8"),i("2f62")),c=r(i("f362")),l=getApp(),u={components:{payment:n.default,emptyPage:c.default},data:function(){return{loading:!1,loadend:!1,loadTitle:"加載更多",orderList:[],orderData:{},orderStatus:0,page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"wechat",title:"微信快捷支付",payStatus:1},{name:"支付寶支付",icon:"icon-zhifubao",value:"alipay",title:"支付寶支付",payStatus:l.globalData.alipay_open},{name:"餘額支付",icon:"icon-yuezhifu",value:"balance",title:"可用餘額:",number:0,payStatus:l.globalData.yue_pay_status}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,isTimePay:!1}},computed:(0,s.mapGetters)(["isLogin"]),onShow:function(){this.isLogin?(this.$set(this,"orderList",[]),this.page=1,this.loadend=!1,this.loading=!1,this.getOrderList(),this.getUserInfo()):(0,d.toLogin)()},methods:{onLoadFun:function(){this.isShowAuth=!1,this.getOrderList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,r=void 0!=e.value?e.value:null;i&&this[i]&&this[i](r)},getUserInfo:function(){var t=this;(0,o.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少訂單號無法取消訂單"});(0,a.orderDel)(e).then((function(e){return i.$util.Tips({title:e.message,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1)}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.order_id=e,this.pay_order_id=e.toString(),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,this.pay_order_id="",this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(t){if(!t)return that.$util.Tips({title:"缺少訂單號無法查看訂單詳情"});uni.navigateTo({url:"/pages/order_details/index?order_id="+t})},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加載更多",(0,a.getOrderList)({status:10,page:t.page,limit:t.limit}).then((function(e){var i=e.data.list||[],r=i.length<t.limit;t.orderList=t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.getProductCount(),t.loadend=r,t.loading=!1,t.loadTitle=r?"我也是有底線的":"加載更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加載更多"})))},getProductCount:function(){var t=this;0!==this.orderStatus&&this.orderList.forEach((function(e,i){var r=0;e.orderProduct.forEach((function(t){r+=t.product_num})),t.orderList[i]["orderNum"]=r}))},delOrder:function(t,e){var i=this;(0,a.orderDel)(t).then((function(t){return i.orderList.splice(e,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.$util.Tips({title:"刪除成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},confirmOrder:function(t,e){var i=this;uni.showModal({title:"確認收貨",content:"為保障權益，請收到貨確認無誤後，再確認收貨",success:function(r){r.confirm&&(0,a.orderTake)(t.order_id).then((function(t){return i.$util.Tips({title:"操作成功",icon:"success"},(function(){i.orderList.splice(e,1)}))})).catch((function(t){return i.$util.Tips({title:t})}))}})}},onReachBottom:function(){this.getOrderList()}};e.default=u}}]);