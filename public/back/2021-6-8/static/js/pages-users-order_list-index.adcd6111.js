(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-order_list-index"],{2231:function(t,e,i){"use strict";var r=i("4ea4");i("4160"),i("a434"),i("d3b7"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("cdf4"),n=i("8fa6"),o=(i("ddac"),r(i("5ece"))),s=i("2073"),c=(i("9de8"),i("2f62")),d=r(i("f362")),u=getApp(),l={components:{payment:o.default,emptyPage:d.default},data:function(){return{loading:!1,loadend:!1,loadTitle:"加載更多",orderList:[],presellProList:[],presellOrderCount:0,orderData:{},orderStatus:0,page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"wechat",title:"微信快捷支付",payStatus:1},{name:"支付寶支付",icon:"icon-zhifubao",value:"alipay",title:"支付寶支付",payStatus:u.globalData.alipay_open},{name:"餘額支付",icon:"icon-yuezhifu",value:"balance",title:"可用餘額:",number:0,payStatus:u.globalData.yue_pay_status}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,hide_mer_status:1,isReady:!0}},computed:(0,c.mapGetters)(["isLogin"]),onShow:function(){this.isLogin?(this.$set(this,"orderList",[]),this.page=1,this.loadend=!1,this.loading=!1,this.getOrderData(),this.getOrderList(),this.getUserInfo(),this.getpreSellOrderList()):(0,s.toLogin)()},onReady:function(){var t=this;uni.$on("update",(function(e){t.hide_mer_status=e.hide_mer_status}))},mounted:function(){var t=this,e=getApp();this.$nextTick((function(){t.hide_mer_status=e.globalData.hide_mer_status}))},methods:{goMall:function(t){0==this.hide_mer_status&&uni.navigateTo({url:"/pages/store/home/index?id="+t.mer_id})},onLoadFun:function(){this.isShowAuth=!1,this.getOrderData(),this.getOrderList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,r=void 0!=e.value?e.value:null;i&&this[i]&&this[i](r)},getUserInfo:function(){var t=this;(0,n.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},getOrderData:function(){var t=this;(0,a.orderData)().then((function(e){t.$set(t,"orderData",e.data)}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少訂單號無法取消訂單"});(0,a.unOrderCancel)(e).then((function(e){return i.$util.Tips({title:e.message,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.order_id=e,this.pay_order_id=e.toString(),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(t){var e=this;if(!t)return that.$util.Tips({title:"缺少訂單號無法查看訂單詳情"});0==e.orderStatus?uni.navigateTo({url:"/pages/order_details/stay?order_id="+t}):uni.navigateTo({url:"/pages/order_details/index?order_id="+t})},goOrderDetails_Evaluation:function(t){var e=this;if(!t)return that.$util.Tips({title:"缺少訂單號無法查看訂單詳情和評價"});0==e.orderStatus?uni.navigateTo({url:"/pages/order_details/stay?order_id="+t}):uni.navigateTo({url:"/pages/order_details/index?order_id="+t})},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.loading=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加載更多",t.isReady&&(t.isReady=!1,0==t.orderStatus?(0,a.groupOrderList)({page:t.page,limit:t.limit}).then((function(e){t.isReady=!0;var i=e.data.list||[],r=i.length<t.limit;t.orderList=t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.getProductCount(),t.loadend=r,t.loading=!1,t.loadTitle=r?"我也是有底線的":"加載更多",t.page=t.page+1})):(0,a.getOrderList)({status:t.orderStatus-1,page:t.page,limit:t.limit}).then((function(e){var i=e.data.list||[],r=i.length<t.limit;t.orderList=t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.getProductCount(),t.loadend=r,t.loading=!1,t.loadTitle=r?"我也是有底線的":"加載更多",t.page=t.page+1,t.isReady=!0})).catch((function(e){t.loading=!1,t.loadTitle="加載更多"}))))},getpreSellOrderList:function(){var t=this;(0,a.getOrderList)({status:10,page:1,limit:1}).then((function(e){var i=e.data.list||[];t.presellOrderCount=e.data.count,t.$set(t,"presellProList",i)}))},getProductCount:function(){var t=this;0!==this.orderStatus&&this.orderList.forEach((function(e,i){var r=0;e.orderProduct.forEach((function(t){r+=t.product_num})),t.orderList[i]["orderNum"]=r}))},delOrder:function(t,e){var i=this;(0,a.orderDel)(t).then((function(t){return i.orderList.splice(e,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData(),i.$util.Tips({title:"刪除成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},confirmOrder:function(t,e){var i=this;uni.showModal({title:"確認收貨",content:"為保障權益，請收到或確認無誤後，再確認收貨",success:function(r){r.confirm&&(0,a.orderTake)(t.order_id).then((function(t){return i.$util.Tips({title:"操作成功",icon:"success"},(function(){i.orderList.splice(e,1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))}})}},onReachBottom:function(){this.getOrderList()}};e.default=l},4296:function(t,e,i){var r=i("dd89");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("f5d955a4",r,!0,{sourceMap:!1,shadowMode:!1})},"6c97":function(t,e,i){"use strict";var r=i("4296"),a=i.n(r);a.a},"838c":function(t,e,i){"use strict";i.r(e);var r=i("aafc"),a=i("92cd");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("6c97");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"017d24c2",null,!1,r["a"],o);e["default"]=c.exports},"92cd":function(t,e,i){"use strict";i.r(e);var r=i("2231"),a=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},aafc:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"my-order"},[i("v-uni-view",{staticClass:"status_bar_red"}),i("v-uni-view",{staticClass:"header bg-color"},[i("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name"},[t._v("訂單信息")]),i("v-uni-view",[t._v("消費訂單："+t._s(t.orderData.orderCount||0)+" 總消費："),i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(t.orderData.orderPrice||0))],1)],1),i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:"/static/images/orderTime.png"}})],1)],1)],1),i("v-uni-view",{staticClass:"nav acea-row row-around"},[i("v-uni-view",{staticClass:"item",class:-1==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(-1)}}},[i("v-uni-view",[t._v("全部")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.all||0))])],1),i("v-uni-view",{staticClass:"item",class:0==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(0)}}},[i("v-uni-view",[t._v("待付款")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.noPay||0))])],1),i("v-uni-view",{staticClass:"item",class:1==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(1)}}},[i("v-uni-view",[t._v("待發貨")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.noPostage||0))])],1),i("v-uni-view",{staticClass:"item",class:2==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(2)}}},[i("v-uni-view",[t._v("待收貨")]),i("v-uni-view",{staticClass:"num "},[t._v(t._s(t.orderData.noDeliver||0))])],1),i("v-uni-view",{staticClass:"item",class:3==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(3)}}},[i("v-uni-view",[t._v("待評價")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.noComment||0))])],1)],1),t.presellProList.length>0?i("v-uni-view",{staticClass:"event_container"},[i("v-uni-navigator",{staticClass:"acea-row row-between",attrs:{url:"/pages/users/presell_order_list/index","hover-class":"none"}},[i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"},[t._v("預售尾款訂單轉到這裡了！")]),i("v-uni-view",{staticClass:"desc"},[t._v("有"),i("v-uni-text",{staticClass:"font-color"},[t._v(t._s(t.presellOrderCount))]),t._v("等預售尾款訂單富寬，請點擊查看")],1)],1),i("v-uni-view",{staticClass:"photo acea-row row-between"},[i("v-uni-view",{staticClass:"picture"},[i("v-uni-image",{attrs:{src:t.presellProList[0].orderProduct[0].cart_info.productAttr&&t.presellProList[0].orderProduct[0].cart_info.productAttr.image||t.presellProList[0].orderProduct[0].cart_info.product.image}})],1),i("v-uni-view",{staticClass:"more_btn"},[i("v-uni-text",{staticClass:"iconfont icon-gengduo3"})],1)],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"list"},[t.orderList.length>0?i("v-uni-view",[0==t.orderStatus?t._l(t.orderList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"item"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.group_order_id)}}},[i("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"acea-row row-middle left-wrapper"},[t._v(t._s(e.group_order_sn))]),i("v-uni-view",{staticClass:"font-color"},[t._v(t._s(2===e.orderList[0].activity_type&&2==e.orderList[0].orderProduct[0].cart_info.productPresell.presell_type?"待付定金":"待付款"))])],1),t._l(e.orderList,(function(r,a){return i("v-uni-view",{key:r.order_id+a},[t._l(r.orderProduct,(function(a,n){return[2===r.activity_type?i("v-uni-view",[i("v-uni-view",{staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:a.cart_info.productAttr&&a.cart_info.productAttr.image||a.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line1"},[i("v-uni-text",{staticClass:"event_name event_bg"},[t._v("預售")]),i("v-uni-text",[t._v(t._s(a.cart_info.product.store_name))]),i("v-uni-view",{staticClass:"event_ship event_color"},[t._v("發貨時間："),1===a.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===a.cart_info.productPresell.delivery_type?"支付成功後":"預售結束後")+t._s(a.cart_info.productPresell.delivery_day)+"天內")]):t._e(),2===a.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===a.cart_info.productPresell.delivery_type?"支付尾款後":"預售結束後")+t._s(a.cart_info.productPresell.delivery_day)+"天內")]):t._e()],1)],1),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(a.cart_info.productPresellAttr.presell_price))],1),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1)],1),2===a.cart_info.productPresell.presell_type?i("v-uni-view",{staticClass:"event_price"},[t._v("定金待支付"),i("v-uni-text",{staticClass:"font-color"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(r.pay_price))],1),t._v("尾款待支付"),i("v-uni-text",{staticClass:"font-color"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(r.presellOrder.pay_price))],1)],1):t._e()],1)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:a.cart_info.productAttr&&a.cart_info.productAttr.image||a.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line2"},[t._v(t._s(a.cart_info.product.store_name))]),4==e.orderList[0].activity_type?i("v-uni-view",{staticClass:"money"},[a.cart_info.activeSku?i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(a.cart_info.activeSku.active_price))],1):t._e(),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1):i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(a.cart_info.productAttr.price))],1),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1)],1)],1)],1)]}))],2)})),i("v-uni-view",{staticClass:"bottom acea-row row-right row-middle"},[i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goPay(e.pay_price,e.group_order_id)}}},[t._v("立即付款")])],1)],2)],1)})):t._l(t.orderList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"item"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[i("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"acea-row row-middle left-wrapper",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goMall(e)}}},[i("v-uni-text",{staticClass:"iconfont icon-shangjiadingdan"}),i("v-uni-view",{staticClass:"store-name"},[t._v(t._s(e.merchant.mer_name))]),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),0==e.status?i("v-uni-view",{staticClass:"font-color"},[t._v("待發貨")]):t._e(),1==e.status?i("v-uni-view",{staticClass:"font-color"},[t._v("待收貨")]):t._e(),2==e.status?i("v-uni-view",{staticClass:"font-color"},[t._v("待評價")]):t._e(),3==e.status?i("v-uni-view",{staticClass:"font-color"},[t._v("已完成")]):t._e(),-1==e.status?i("v-uni-view",{staticClass:"font-color"},[t._v("已退款")]):t._e()],1),2===e.activity_type?i("v-uni-view",t._l(e.orderProduct,(function(r,a){return i("v-uni-view",{key:a,staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:r.cart_info.productAttr&&r.cart_info.productAttr.image||r.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name "},[i("v-uni-view",{staticClass:"name",class:0===e.status?"line1":"line2"},[i("v-uni-text",{staticClass:"event_name event_bg"},[t._v("預售")]),i("v-uni-text",[t._v(t._s(r.cart_info.product.store_name))]),0==e.status?i("v-uni-view",{staticClass:"event_ship event_color"},[t._v("發貨時間："),1===r.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===r.cart_info.productPresell.delivery_type?"支付成功後":"預售結束後")+t._s(r.cart_info.productPresell.delivery_day)+"天內")]):t._e(),2===r.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===r.cart_info.productPresell.delivery_type?"支付尾款後":"預售結束後")+t._s(r.cart_info.productPresell.delivery_day)+"天內")]):t._e()],1):t._e()],1),i("v-uni-view",{staticStyle:{"margin-top":"10rpx",color:"red"}},[t._v(t._s(1==r.is_refund?"退款中":2==r.is_refund?"部分退款":3==r.is_refund?"全部退款":""))])],1),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(r.cart_info.productPresellAttr.presell_price))],1),i("v-uni-view",[t._v("x"+t._s(r.product_num))])],1)],1)],1)})),1):i("v-uni-view",t._l(e.orderProduct,(function(r,a){return i("v-uni-view",{key:a,staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:r.cart_info.productAttr&&r.cart_info.productAttr.image||r.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name "},[i("v-uni-view",{staticClass:"name line2"},[i("v-uni-text",[t._v(t._s(r.cart_info.product.store_name))])],1),i("v-uni-view",{staticStyle:{"margin-top":"10rpx",color:"red"}},[t._v(t._s(1==r.is_refund?"退款中":2==r.is_refund?"部分退款":3==r.is_refund?"全部退款":""))])],1),3==e.activity_type?i("v-uni-view",{staticClass:"money"},[r.cart_info.productAssistAttr?i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(r.cart_info.productAssistAttr.assist_price))],1):t._e(),i("v-uni-view",[t._v("x"+t._s(r.product_num))])],1):4==e.activity_type?i("v-uni-view",{staticClass:"money"},[r.cart_info.activeSku?i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(r.cart_info.activeSku.active_price))],1):t._e(),i("v-uni-view",[t._v("x"+t._s(r.product_num))])],1):i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(r.cart_info.productAttr.price))],1),i("v-uni-view",[t._v("x"+t._s(r.product_num))])],1)],1)],1)})),1),2==e.activity_type?i("v-uni-view",{staticClass:"totalPrice"},[t._v("共"+t._s(e.orderNum||0)+"件商品，總金額"),i("v-uni-text",{staticClass:"money font-color"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(e.presell_price))],1)],1):i("v-uni-view",{staticClass:"totalPrice"},[t._v("共"+t._s(e.orderNum||0)+"件商品，總金額"),i("v-uni-text",{staticClass:"money font-color"},[i("v-uni-text",{staticClass:"money-type"},[t._v("HK$")]),t._v(t._s(e.pay_price))],1)],1)],1),i("v-uni-view",{staticClass:"bottom acea-row row-right row-middle"},[0==e.status||9==e.status?[i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看詳情")])]:t._e(),1==e.status?[i("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看物流")]),i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirmOrder(e,r)}}},[t._v("確認收貨")])]:t._e(),2==e.status?[i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails_Evaluation(e.order_id)}}},[t._v("去評價")])]:t._e(),3==e.status?[2==e.activity_type||3==e.activity_type?i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看詳情")]):i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("再次購買")])]:t._e()],2)],1)}))],2):t._e()],1),t.orderList.length>5?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),0==t.orderList.length?i("v-uni-view",[i("emptyPage",{attrs:{title:"暫無訂單~"}})],1):t._e()],1),0==t.orderList.length&&t.page>1?i("v-uni-view",{staticClass:"noCart"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:"/images/noOrder.png"}})],1)],1):t._e(),i("payment",{attrs:{payMode:t.payMode,pay_close:t.pay_close,order_id:t.pay_order_id,totalPrice:t.totalPrice},on:{onChangeFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeFun.apply(void 0,arguments)}}})],1)},n=[]},dd89:function(t,e,i){var r=i("24fb"),a=i("1de5"),n=i("bef4");e=r(!1);var o=a(n);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.my-order .header[data-v-017d24c2]{height:%?260?%;padding:0 %?30?%}.my-order .header .picTxt[data-v-017d24c2]{height:%?190?%}.my-order .header .picTxt .text[data-v-017d24c2]{color:hsla(0,0%,100%,.8);font-size:%?26?%;font-family:Guildford Pro}.my-order .header .picTxt .text .name[data-v-017d24c2]{font-size:%?34?%;font-weight:700;color:#fff;margin-bottom:%?20?%}.my-order .header .picTxt .pictrue[data-v-017d24c2]{width:%?122?%;height:%?109?%}.my-order .header .picTxt .pictrue uni-image[data-v-017d24c2]{width:100%;height:100%}.my-order .nav[data-v-017d24c2]{background-color:#fff;width:%?690?%;height:%?140?%;border-radius:%?6?%;margin:%?-73?% auto 0 auto}.my-order .nav .item[data-v-017d24c2]{text-align:center;font-size:%?26?%;color:#282828;padding:%?29?% 0}.my-order .nav .item.on[data-v-017d24c2]{font-weight:700;border-bottom:%?5?% solid #e93323}.my-order .nav .item .num[data-v-017d24c2]{margin-top:%?18?%}.my-order .list[data-v-017d24c2]{width:%?690?%;margin:%?14?% auto 0 auto}.my-order .list .item[data-v-017d24c2]{background-color:#fff;border-radius:%?6?%;margin-bottom:%?14?%}.my-order .list .item .title[data-v-017d24c2]{height:%?84?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#282828}.my-order .list .item .title .left-wrapper .iconfont[data-v-017d24c2]{margin-top:%?5?%}.my-order .list .item .title .left-wrapper .store-name[data-v-017d24c2]{margin:0 %?10?%}.my-order .list .item .title .left-wrapper .icon-xiangyou[data-v-017d24c2]{font-size:%?20?%}.my-order .list .item .title .sign[data-v-017d24c2]{font-size:%?24?%;padding:0 %?7?%;height:%?36?%;margin-right:%?15?%}.my-order .list .item .item-info[data-v-017d24c2]{padding:0 %?30?%;margin-top:%?22?%}.my-order .list .item .item-info .pictrue[data-v-017d24c2]{width:%?120?%;height:%?120?%}.my-order .list .item .item-info .pictrue uni-image[data-v-017d24c2]{width:100%;height:100%;border-radius:%?6?%}.my-order .list .item .item-info .text[data-v-017d24c2]{width:%?486?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.my-order .list .item .item-info .text .name[data-v-017d24c2]{width:%?320?%;color:#282828}.event_bg[data-v-017d24c2]{background:#ff7f00}.event_color[data-v-017d24c2]{color:#ff7f00}.my-order .list .item .event_name[data-v-017d24c2]{display:inline-block;margin-right:%?9?%;color:#fff;font-size:%?20?%;padding:0 %?8?%;line-height:%?30?%;text-align:center;border-radius:%?6?%}.my-order .list .item .event_ship[data-v-017d24c2]{font-size:%?20?%;margin-top:%?10?%}.my-order .list .event_price[data-v-017d24c2]{margin:0 0 %?50?% %?120?%}.my-order .list .item .item-info .text .money[data-v-017d24c2]{text-align:right}.my-order .list .item .totalPrice[data-v-017d24c2]{font-size:%?26?%;color:#282828;text-align:right;margin:%?27?% 0 0 %?30?%;padding:0 %?30?% %?30?% 0}.my-order .list .item .totalPrice .money[data-v-017d24c2]{font-size:%?28?%;font-weight:700}.my-order .list .item .bottom[data-v-017d24c2]{height:%?107?%;padding:0 %?30?%;border-top:1px solid #f0f0f0}.my-order .list .item .bottom .bnt[data-v-017d24c2]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;color:#fff;border-radius:%?50?%;font-size:%?27?%}.my-order .list .item .bottom .bnt.cancelBnt[data-v-017d24c2]{border:%?1?% solid #ddd;color:#aaa}.my-order .list .item .bottom .bnt ~ .bnt[data-v-017d24c2]{margin-left:%?17?%}.noCart[data-v-017d24c2]{margin-top:%?171?%;padding-top:%?0.1?%}.noCart .pictrue[data-v-017d24c2]{width:%?414?%;height:%?336?%;margin:%?78?% auto %?56?% auto}.noCart .pictrue uni-image[data-v-017d24c2]{width:100%;height:100%}.event_container[data-v-017d24c2]{width:%?690?%;background-image:url('+o+");background-size:cover;background-repeat:no-repeat;margin:%?20?% auto;padding:%?26?% %?30?%;border-radius:%?16?%}.event_container .info[data-v-017d24c2]{width:%?420?%}.event_container .info .title[data-v-017d24c2]{color:#282828;font-size:%?26?%}.event_container .info .desc[data-v-017d24c2]{color:#999;font-size:%?24?%;margin-top:%?30?%}.event_container .photo[data-v-017d24c2]{width:%?180?%}.event_container .photo .picture[data-v-017d24c2]{width:%?120?%;height:%?120?%}.event_container .photo .picture uni-image[data-v-017d24c2]{width:100%;height:100%;border-radius:%?8?%}.event_container .photo .more_btn[data-v-017d24c2]{color:#fff;background:#f97e3b;width:%?40?%;height:%?40?%;border-radius:%?40?%;text-align:center;line-height:%?40?%;position:relative;top:%?40?%}.event_container .photo .more_btn uni-text[data-v-017d24c2]{font-size:%?10?%}",""]),t.exports=e}}]);