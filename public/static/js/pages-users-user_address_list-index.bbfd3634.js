(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_address_list-index"],{"0818":function(t,i,e){var s=e("917a");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=e("4f06").default;n("012f49d8",s,!0,{sourceMap:!1,shadowMode:!1})},1887:function(t,i,e){"use strict";e.r(i);var s=e("3a10"),n=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);i["default"]=n.a},"226d":function(t,i,e){t.exports=e.p+"static/img/noAddress.9fbcd830.png"},"2e1b":function(t,i,e){"use strict";var s=e("0818"),n=e.n(s);n.a},"3a10":function(t,i,e){"use strict";e("a434"),e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;e("9de8");var s=e("8fa6"),n=e("2073"),a=e("2f62"),d=(e("a82a"),{components:{},data:function(){return{addressList:[],cartId:"",pinkId:0,couponId:0,loading:!1,loadend:!1,loadTitle:"加載更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,wxConfig:{}}},computed:(0,a.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin?(this.cartId=t.cartId||"",this.pinkId=t.pinkId||0,this.couponId=t.couponId||0,this.getAddressList(!0)):(0,n.toLogin)()},onReady:function(){},onShow:function(){var t=this;t.getAddressList(!0)},methods:{onLoadFun:function(){this.isShowAuth=!1,this.getAddressList()},authColse:function(t){this.isShowAuth=t},getWxAddress:function(){var t=this;uni.authorize({scope:"scope.address",success:function(i){uni.chooseAddress({success:function(i){var e={};e.province=i.provinceName,e.city=i.cityName,e.district=i.countyName,(0,s.editAddress)({is_default:1,real_name:i.userName,phone:i.telNumber,detail:i.detailInfo,province:i.provinceName,district:i.countyName,city:i.cityName,city_id:""}).then((function(i){t.$util.Tips({title:"添加成功",icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(i){return t.$util.Tips({title:i})}))},fail:function(i){if("chooseAddress:cancel"==i.errMsg)return t.$util.Tips({title:"取消選擇"})}})},fail:function(i){uni.showModal({title:"您已拒絕導入微信地址權限",content:"釋放進入權限管理，調整權限？",success:function(i){if(i.confirm)uni.openSetting({success:function(t){}});else if(i.cancel)return t.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this;t.$wechat.openAddress().then((function(i){(0,s.editAddress)({real_name:i.userName,phone:i.telNumber,province:i.provinceName,city:i.cityName,district:i.countryName,detail:i.detailInfo,post_code:i.postalCode,is_default:1,city_id:""}).then((function(){t.$util.Tips({title:"添加成功",icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(i){return t.$util.Tips({title:i||"添加失敗"})}))}))},getAddressList:function(t){var i=this;t&&(i.loadend=!1,i.page=1,i.$set(i,"addressList",[])),i.loading||i.loadend||(i.loading=!0,i.loadTitle="",(0,s.getAddressList)({page:i.page,limit:i.limit}).then((function(t){var e=t.data.list,s=e.length<i.limit;i.addressList=i.$util.SplitArray(e,i.addressList),i.$set(i,"addressList",i.addressList),i.loadend=s,i.loadTitle=s?"我也是有底線的":"加載更多",i.page=i.page+1,i.loading=!1})).catch((function(t){i.loading=!1,i.loadTitle="加載更多"})))},radioChange:function(t){var i=parseInt(t.detail.value),e=this,n=this.addressList[i];if(void 0==n)return e.$util.Tips({title:"您設置的默認地址不存在!"});(0,s.setAddressDefault)(n.address_id).then((function(t){for(var s=0,n=e.addressList.length;s<n;s++)e.addressList[s].is_default=s==i;e.$util.Tips({title:"設置成功",icon:"success"},(function(){e.$set(e,"addressList",e.addressList)}))})).catch((function(t){return e.$util.Tips({title:t})}))},editAddress:function(t){var i=this.cartId,e=this.pinkId,s=this.couponId;this.cartId="",this.pinkId="",this.couponId="",uni.navigateTo({url:"/pages/users/user_address/index?id="+t+"&cartId="+i+"&pinkId="+e+"&couponId="+s})},delAddress:function(t){var i=this,e=this.addressList[t];if(void 0==e)return i.$util.Tips({title:"您刪除的地址不存在!"});(0,s.delAddress)(e.address_id).then((function(e){i.$util.Tips({title:"刪除成功",icon:"success"},(function(){i.addressList.splice(t,1),i.$set(i,"addressList",i.addressList)}))})).catch((function(t){return i.$util.Tips({title:t})}))},addAddress:function(){var t=this.cartId;this.pinkId,this.couponId;this.cartId="",this.pinkId="",this.couponId="",uni.navigateTo({url:"/pages/users/user_address/index?cartId="+t})},goOrder:function(t){var i="",e="",s="";this.cartId&&t&&(i=this.cartId,e=this.pinkId,s=this.couponId,this.cartId="",this.pinkId="",this.couponId="",uni.redirectTo({url:"/pages/users/order_confirm/index?is_address=1&cartId="+i+"&addressId="+t+"&pinkId="+e+"&couponId="+s}))}},onReachBottom:function(){this.getAddressList()}});i.default=d},"662e":function(t,i,e){"use strict";e.r(i);var s=e("80c6"),n=e("1887");for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("2e1b");var d,o=e("f0c5"),r=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"0714d71c",null,!1,s["a"],d);i["default"]=r.exports},"80c6":function(t,i,e){"use strict";var s;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return s}));var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("v-uni-view",{staticClass:"address-management",class:t.addressList.length<1&&t.page>1?"fff":""},[s("v-uni-view",{staticClass:"status_bar"}),s("v-uni-view",{staticClass:"line"},[t.addressList.length?s("v-uni-image",{attrs:{src:e("9012")}}):t._e()],1),t.addressList.length?s("v-uni-radio-group",{staticClass:"radio-group",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.radioChange.apply(void 0,arguments)}}},t._l(t.addressList,(function(i,e){return s("v-uni-view",{key:e,staticClass:"item"},[s("v-uni-view",{staticClass:"address",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrder(i.address_id)}}},[s("v-uni-view",{staticClass:"consignee"},[t._v("收貨人："+t._s(i.real_name)),s("v-uni-text",{staticClass:"phone"},[t._v(t._s(i.phone))])],1),s("v-uni-view",[t._v("收貨地址："+t._s(i.province)+t._s(i.city)+t._s(i.district)+t._s(i.detail))])],1),s("v-uni-view",{staticClass:"operation acea-row row-between-wrapper"},[s("v-uni-radio",{staticClass:"radio",attrs:{value:e.toString(),checked:!!i.is_default}},[s("v-uni-text",[t._v("設為默認")])],1),s("v-uni-view",{staticClass:"acea-row row-middle"},[s("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editAddress(i.address_id)}}},[s("v-uni-text",{staticClass:"iconfont icon-bianji"}),t._v("編輯")],1),s("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delAddress(e)}}},[s("v-uni-text",{staticClass:"iconfont icon-shanchu"}),t._v("刪除")],1)],1)],1)],1)})),1):t._e(),t.addressList.length?s("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[s("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),t.addressList.length<1&&t.page>1?s("v-uni-view",{staticClass:"noCommodity"},[s("v-uni-view",{staticClass:"pictrue"},[s("v-uni-image",{attrs:{src:e("226d")}})],1)],1):t._e(),s("v-uni-view",{staticStyle:{height:"120rpx"}}),s("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[s("v-uni-view",{staticClass:"addressBnt bg-color",class:this.$wechat.isWeixin()?"":"on",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addAddress.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"iconfont icon-tianjiadizhi"}),t._v("添加新地址")],1),this.$wechat.isWeixin()?s("v-uni-view",{staticClass:"addressBnt wxbnt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getAddress.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"iconfont icon-weixin2"}),t._v("導入微信地址")],1):t._e()],1)],1)],1)},a=[]},9012:function(t,i,e){t.exports=e.p+"static/img/line.05bf1c84.jpg"},"917a":function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,".address-management.fff[data-v-0714d71c]{background-color:#fff;height:%?1300?%}.address-management .line[data-v-0714d71c]{width:100%;height:%?3?%}.address-management .line uni-image[data-v-0714d71c]{width:100%;height:100%;display:block}.address-management .item[data-v-0714d71c]{background-color:#fff;padding:0 %?30?%;margin-bottom:%?12?%}.address-management .item .address[data-v-0714d71c]{padding:%?30?% 0;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#282828}.address-management .item .address .consignee[data-v-0714d71c]{font-size:%?28?%;font-weight:700;margin-bottom:%?8?%}.address-management .item .address .consignee .phone[data-v-0714d71c]{margin-left:%?25?%}.address-management .item .operation[data-v-0714d71c]{height:%?83?%;font-size:%?28?%;color:#282828}.address-management .item .operation .radio uni-text[data-v-0714d71c]{margin-left:%?13?%}.address-management .item .operation .iconfont[data-v-0714d71c]{color:#2c2c2c;font-size:%?35?%;vertical-align:%?-2?%;margin-right:%?10?%}.address-management .item .operation .iconfont.icon-shanchu[data-v-0714d71c]{margin-left:%?40?%;font-size:%?38?%}.address-management .footer[data-v-0714d71c]{position:fixed;width:100%;background-color:#fff;bottom:0;height:%?106?%;padding:0 %?30?%;box-sizing:border-box}.address-management .footer .addressBnt[data-v-0714d71c]{width:%?330?%;height:%?76?%;border-radius:%?50?%;text-align:center;line-height:%?76?%;font-size:%?30?%;color:#fff}.address-management .footer .addressBnt.on[data-v-0714d71c]{width:%?690?%;margin:0 auto}.address-management .footer .addressBnt .iconfont[data-v-0714d71c]{font-size:%?35?%;margin-right:%?8?%;vertical-align:%?-1?%}.address-management .footer .addressBnt.wxbnt[data-v-0714d71c]{background-color:#fe960f}",""]),t.exports=i}}]);