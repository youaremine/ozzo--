(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-store-shopStreet-index"],{"084f":function(t,e,i){"use strict";i.r(e);var a=i("3a3b"),n=i("1a13");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7d72");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"60b65a40",null,!1,a["a"],r);e["default"]=c.exports},"0adc":function(t,e,i){"use strict";i.r(e);var a=i("ca5e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"1a13":function(t,e,i){"use strict";i.r(e);var a=i("27ac"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"27ac":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("4de4"),i("fb6a"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("ccb6"),o=a(i("555f")),r=(a(i("e69e")),i("2f62"),i("0898"),getApp(),{components:{recommend:o.default},data:function(){return{price:0,stock:0,nows:!1,loading:!1,loadingIcon:!0,loadTitle:"加載更多",title:"",hotPage:1,hotLimit:10,hotScroll:!1,rightBox:!1,brandList:[],downKey:0,downStatus:!1,downMenu:[{title:"默認",key:0,order:""},{title:"銷量",key:1,order:"sales"},{title:"好評",key:2,order:"rate"},{title:"距離",key:3,order:"location"}],firstKey:0,storeList:[],sotreParam:{keyword:"",page:1,limit:10,order:""},storeKey:0,storeScroll:!0,mer_id:"",sortId:"",hide_mer_status:"",price_on:"",price_off:"",detaile_address:"",recommend_address:"",latitude:"",longitude:"",count:0,mer_location:""}},created:function(){var t=this;uni.getStorage({key:"GLOBAL_DATA",success:function(e){t.hide_mer_status=e.data.hide_mer_status,1==e.data.mer_location?(t.mer_location=e.data.mer_location,t.selfLocation()):t.storeMerchantList()}})},computed:{downMenus:function(){var t=this;return this.downMenu.filter((function(e){return t.mer_location?e:e.key<3}))}},methods:{showMaoLocation:function(t,e){if(!t||!e)return this.$util.Tips({title:"缺少經緯度信息無法查看地圖！"});uni.openLocation({latitude:parseFloat(t),longitude:parseFloat(e),scale:8,success:function(t){}})},selfLocation:function(){var t=this;uni.getLocation({type:"gcj02",success:function(e){var i,a;i=e.latitude.toString(),a=e.longitude.toString(),t.latitude=e.latitude,t.longitude=e.longitude,(0,n.getGeocoder)({lat:i,long:a}).then((function(e){t.detaile_address=e.data.address,t.recommend_address=e.data.address.length>4?e.data.address.slice(0,4)+"...":e.data.address}))},fail:function(t){uni.showToast({title:t,icon:"none",duration:1e3})},complete:function(e){t.storeMerchantList()}})},storeMerchantList:function(){var t=this;if(!this.loading){this.loading=!0;var e={keyword:this.sotreParam.keyword,page:this.sotreParam.page,limit:10,order:this.sotreParam.order};this.latitude&&(e.location=this.latitude+","+this.longitude),(0,n.storeMerchantList)(e).then((function(e){t.count=e.data.count,t.storeList=t.storeList.concat(e.data.list),t.loading=!1,t.loadingIcon=!1}))}},goStore:function(t){1!=this.hide_mer_status&&uni.navigateTo({url:"/pages/store/home/index?id=".concat(t)})},searchSubmit:function(t){var e=this;e.$set(e.sotreParam,"keyword",t.detail.value),this.set_where(this.firstKey)},set_where:function(t){this.loading||(this.storeList=[],this.firstKey=t,this.sotreParam.page=1,this.sotreParam.order=this.downMenu[t].order,this.storeMerchantList())},backjJump:function(){uni.navigateBack({delta:1})}},onPullDownRefresh:function(){},onReachBottom:function(){if(this.count===this.storeList.length){if(0===this.count)return;uni.showToast({title:"已加載全部",icon:"none",duration:1e3})}else this.sotreParam.page+=1,this.storeMerchantList()}});e.default=r},3409:function(t,e,i){"use strict";var a=i("5aed"),n=i.n(a);n.a},"3a3b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"productList"},[a("v-uni-view",{staticClass:"search bg-color acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backjJump()}}},[a("v-uni-view",{staticClass:"iconfont icon-xiangzuo"})],1),a("v-uni-view",{staticClass:"input acea-row row-between-wrapper"},[a("v-uni-text",{staticClass:"iconfont icon-sousuo"}),a("v-uni-input",{attrs:{placeholder:"搜索品牌名稱","placeholder-class":"placeholder","confirm-type":"search",name:"search",value:t.sotreParam.keyword},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchSubmit.apply(void 0,arguments)}}})],1),1==t.mer_location?a("v-uni-view",{staticClass:"iconfont search-right",staticStyle:{"text-align":"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMaoLocation(t.latitude,t.longitude)}}},[a("v-uni-view",{staticClass:"iconfont icon-dingwei"}),t.recommend_address?a("v-uni-view",{staticClass:"right-text"},[t._v(t._s(t.recommend_address))]):t._e(),t.recommend_address?a("v-uni-view",{staticClass:"iconfont icon-xiangyou"}):t._e()],1):t._e()],1),a("v-uni-view",{staticClass:"nav-wrapper"},[a("v-uni-view",{staticClass:"nav acea-row row-middle"},t._l(t.downMenus,(function(e){return a("v-uni-view",{key:e.key,staticClass:"item",class:{"font-colors":t.firstKey==e.key},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.set_where(e.key)}}},[a("v-uni-view",{},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"line",class:{"font-line":t.firstKey==e.key}})],1)})),1)],1),[a("v-uni-view",{staticClass:"mer-box",staticStyle:{"margin-top":"200rpx"}},[t._l(t.storeList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"mer-item"},[a("v-uni-view",{staticClass:"mer-hd",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goStore(e.mer_id)}}},[a("v-uni-image",{attrs:{src:e.mini_banner?e.mini_banner:e.mer_banner}}),a("v-uni-view",{staticClass:"mer-name"},[a("v-uni-image",{attrs:{src:e.mer_avatar}}),a("v-uni-view",{},[a("v-uni-view",{staticClass:"mer-top"},[a("v-uni-view",{staticClass:"txt line1"},[t._v(t._s(e.mer_name))]),e.is_trader?a("v-uni-text",{staticClass:"font-bg-red ml8"},[t._v("自營")]):t._e()],1),a("v-uni-view",{staticClass:"mer-btn"},[a("v-uni-view",{},[t._v(t._s(e.care_count)+"人關注")]),e.distance?a("v-uni-view",{staticClass:"line"}):t._e(),e.distance?a("v-uni-view",{staticClass:"distance",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.showMaoLocation(e.lat,e.long)}}},[a("v-uni-view",{},[t._v(t._s(e.distance))]),a("v-uni-view",{staticClass:"iconfont icon-xiangyou"})],1):t._e()],1)],1)],1)],1),a("v-uni-view",{staticClass:"pro-box"},t._l(e.recommend,(function(i,n){return e.recommend.length<=3?a("v-uni-navigator",{key:n,staticClass:"pro-item",attrs:{url:"/pages/goods_details/index?id="+i.product_id,"hover-class":"none"}},[a("v-uni-image",{attrs:{src:i.image,mode:""}}),a("v-uni-view",{staticClass:"price"},[a("v-uni-text",[a("v-uni-text",{staticClass:"money-type"},[t._v("HK$")])],1),t._v(t._s(i.price))],1)],1):t._e()})),1)],1)})),t.loading?a("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[a("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e()],2),t.storeList.length||t.loading||t.loadingIcon?t._e():a("v-uni-view",{staticClass:"no-shop"},[a("v-uni-view",{staticClass:"pictrue",staticStyle:{margin:"0 auto"}},[a("v-uni-image",{attrs:{src:i("cc11")}}),a("v-uni-text",[t._v("暫無品牌，快去搜索其他品牌吧")])],1)],1)]],2)],1)},o=[]},"5aed":function(t,e,i){var a=i("e815");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("814105ee",a,!0,{sourceMap:!1,shadowMode:!1})},"67e6":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"right-wrapper",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveStop.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"control-wrapper animated",class:t.showBox?"slideInRight":""},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[t._v("價格區間")]),i("v-uni-view",{staticClass:"input-wrapper"},[i("v-uni-input",{attrs:{placeholder:"最低價",type:"number"},model:{value:t.min,callback:function(e){t.min=e},expression:"min"}}),i("v-uni-view",{staticClass:"line"}),i("v-uni-input",{attrs:{placeholder:"最高價",type:"number"},model:{value:t.max,callback:function(e){t.max=e},expression:"max"}})],1)],1),i("v-uni-view",{staticClass:"content-box"},[i("v-uni-view",{staticClass:"title"},[t._v("品牌")]),i("v-uni-view",{staticClass:"brand-wrapper"},[i("v-uni-scroll-view",{style:{height:t.isShow?"90%":"250rpx"},attrs:{"scroll-y":t.isShow}},[i("v-uni-view",{staticClass:"wrapper"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item line1",class:e.check?"on":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bindChenck(e)}}},[t._v(t._s(e.brand_name))])})),1)],1),!t.isShow&&t.list.length>9?i("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShow=!0}}},[t._v("展開全部"),i("v-uni-text",{staticClass:"iconfont icon-xiangxia"})],1):t._e(),t.isShow&&t.list.length>9?i("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShow=!1}}},[t._v("收起"),i("v-uni-text",{staticClass:"iconfont icon-xiangshang"})],1):t._e()],1),i("v-uni-view",{staticClass:"foot-btn"},[i("v-uni-view",{staticClass:"btn-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[t._v("重置")]),i("v-uni-view",{staticClass:"btn-item confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1),i("v-uni-view",{staticClass:"right-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)},o=[]},7497:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.productList .search[data-v-60b65a40]{width:100%;height:%?156?%;padding:0 %?20?%;box-sizing:border-box;position:fixed;left:0;top:0;z-index:9;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.productList .search .search-right[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;max-width:-webkit-max-content;max-width:max-content;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?20?%}.productList .search .right-text[data-v-60b65a40]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?28?%;width:-webkit-max-content;width:max-content;color:#fff;padding:0 %?10?%}.productList .search .icon-xiangyou[data-v-60b65a40],\n.productList .search .icon-dingwei[data-v-60b65a40]{font-size:%?30?%;color:#fff}.productList .search .back[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?40?%;height:%?60?%}.productList .search .back .iconfont[data-v-60b65a40]{color:#fff;font-size:%?36?%}.productList .search .input[data-v-60b65a40]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?60?%;background-color:#fff;border-radius:%?50?%;padding:0 %?20?%;box-sizing:border-box}.productList .search .input uni-input[data-v-60b65a40]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;font-size:%?26?%;margin-left:%?10?%}.productList .search .input .placeholder[data-v-60b65a40]{color:#999}.productList .search .input .iconfont[data-v-60b65a40]{font-size:%?35?%;color:#555}.productList .search .icon-pailie[data-v-60b65a40],\n.productList .search .icon-tupianpailie[data-v-60b65a40]{color:#fff;width:%?62?%;font-size:%?40?%;height:%?86?%;line-height:%?86?%}.productList .nav-wrapper[data-v-60b65a40]{z-index:9;position:fixed;left:0;top:0;width:100%;margin-top:%?116?%;background-color:#e93323}.productList .nav-wrapper .tab-bar[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.productList .nav-wrapper .tab-bar .tab-item[data-v-60b65a40]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?8?% 0 %?20?%;color:#fff;font-size:%?28?%;font-weight:700}.productList .nav-wrapper .tab-bar .tab-item[data-v-60b65a40]::after{content:" ";position:absolute;left:50%;bottom:%?18?%;width:%?30?%;height:%?3?%;background:transparent;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.productList .nav-wrapper .tab-bar .tab-item.on[data-v-60b65a40]::after{background:#fff}.productList .nav[data-v-60b65a40]{height:%?86?%;color:#454545;font-size:%?28?%;background-color:#e93323;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?28?%}.productList .nav .item[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#fff;-webkit-box-flex:1;-webkit-flex:1;flex:1}.productList .nav .item.font-colors[data-v-60b65a40]{font-weight:500;color:#fff}.productList .nav .item .font-line[data-v-60b65a40]{height:%?4?%;background-color:#fff;margin-top:%?3?%;width:%?28?%;animation:line-data-v-60b65a40 .3s;-moz-animation:line-data-v-60b65a40 .3s;\n  /* Firefox */-webkit-animation:line-data-v-60b65a40 .3s;\n  /* Safari 和 Chrome */-o-animation:line-data-v-60b65a40 .3s\n  /* Opera */}@-webkit-keyframes line-data-v-60b65a40{from{width:%?0?%}to{width:%?28?%}}@keyframes line-data-v-60b65a40{from{width:%?0?%}to{width:%?28?%}}.productList .nav .item uni-image[data-v-60b65a40]{width:%?15?%;height:%?19?%;margin-left:%?10?%}.mer-box[data-v-60b65a40]{padding:%?20?% %?20?%;margin-top:%?168?%}.mer-box .mer-item[data-v-60b65a40]{margin-bottom:%?20?%;background-color:#fff;border-radius:%?16?%}.mer-box .mer-item .mer-hd[data-v-60b65a40]{position:relative;width:100%;height:%?134?%;border-radius:%?16?% %?16?% 0 0;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.mer-box .mer-item .mer-hd uni-image[data-v-60b65a40]{width:100%;height:100%}.mer-box .mer-item .mer-hd .mer-name[data-v-60b65a40]{position:absolute;left:%?20?%;top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?10?%}.mer-box .mer-item .mer-hd .mer-name uni-image[data-v-60b65a40]{width:%?79?%;height:%?79?%;border:1px solid #fff;border-radius:50%;margin-right:%?10?%}.mer-box .mer-item .mer-hd .mer-name .mer-top[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;font-size:%?28?%;font-weight:700;margin-bottom:%?6?%}.mer-box .mer-item .mer-hd .mer-name .mer-top .font-bg-red[data-v-60b65a40]{margin-left:%?20?%;font-size:%?18?%;padding:%?2?% %?10?%;color:#e93323;background:#fff;border-radius:%?30?%;width:auto}.mer-box .mer-item .mer-hd .mer-name .mer-btn[data-v-60b65a40]{color:hsla(0,0%,100%,.7);font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mer-box .mer-item .mer-hd .mer-name .mer-btn .line[data-v-60b65a40]{width:%?2?%;height:%?18?%;color:hsla(0,0%,100%,.7);margin:0 %?12?%}.mer-box .mer-item .mer-hd .mer-name .mer-btn .distance[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;color:hsla(0,0%,100%,.7)}.mer-box .mer-item .mer-hd .mer-name .mer-btn .distance .iconfont[data-v-60b65a40]{font-size:%?24?%;line-height:%?24?%}.mer-box .mer-item .mer-hd .mer-name .txt[data-v-60b65a40]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.mer-box .mer-item .pro-box[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?20?% %?30?%}.mer-box .mer-item .pro-box .pro-item[data-v-60b65a40]{width:%?218?%;margin-right:%?14?%}.mer-box .mer-item .pro-box .pro-item uni-image[data-v-60b65a40]{width:100%;height:%?214?%;border-radius:%?8?%}.mer-box .mer-item .pro-box .pro-item .price[data-v-60b65a40]{margin-top:%?5?%;font-size:%?28?%;color:#e93323;font-weight:700}.mer-box .mer-item .pro-box .pro-item .price uni-text[data-v-60b65a40]{font-size:%?28?%}.mer-box .mer-item .pro-box .pro-item[data-v-60b65a40]:last-child{margin-right:0}.mer-box .more-shop[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff;padding:%?27?% 0;color:#999;font-size:%?26?%}.mer-box .more-shop .icon-xiangyou[data-v-60b65a40]{font-size:%?22?%}.no-shop[data-v-60b65a40]{background-color:#fff;padding-bottom:calc(100% - %?176?%)}.no-shop .pictrue[data-v-60b65a40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.no-shop .pictrue uni-image[data-v-60b65a40]{width:%?414?%;height:%?380?%}',""]),t.exports=e},"7d72":function(t,e,i){"use strict";var a=i("a3be"),n=i.n(a);n.a},a3be:function(t,e,i){var a=i("7497");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4d700a84",a,!0,{sourceMap:!1,shadowMode:!1})},ca5e:function(t,e,i){"use strict";i("4de4"),i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{brandList:{type:Array},status:{type:Boolean,default:!1},price_on:{type:String,default:""},price_off:{type:String,default:""}},data:function(){return{min:"",max:"",isShow:!1,list:[],activeList:[],showBox:!1}},mounted:function(){this.list=this.brandList,this.showBox=this.status,this.min=this.price_on,this.max=this.price_off},methods:{bindChenck:function(t){t.check=!t.check,this.arrFilter()},arrFilter:function(){this.activeList=this.list.filter((function(t){return 1==t.check}))},reset:function(){this.list.forEach((function(t,e){t.check=!1})),this.min=this.max="",this.arrFilter()},confirm:function(){this.arrFilter();var t={brandList:this.activeList,price_on:this.min,price_off:this.max,status:!1};this.showBox=!1,this.$emit("confirm",t)},close:function(){this.showBox=!1,this.$emit("close")},moveStop:function(){}}};e.default=a},cc11:function(t,e,i){t.exports=i.p+"static/img/no-shop.4715aaff.png"},e69e:function(t,e,i){"use strict";i.r(e);var a=i("67e6"),n=i("0adc");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3409");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"b48c1dc0",null,!1,a["a"],r);e["default"]=c.exports},e815:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.slideInRight[data-v-b48c1dc0]{-webkit-animation-duration:.5s;animation-duration:.5s}.right-wrapper[data-v-b48c1dc0]{z-index:99;position:fixed;left:0;top:0;width:100%;height:100%}.right-wrapper .control-wrapper[data-v-b48c1dc0]{z-index:90;position:absolute;right:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?635?%;height:100%;background-color:#f5f5f5}.right-wrapper .control-wrapper .header[data-v-b48c1dc0]{padding:%?50?% %?26?% %?40?%;background-color:#fff}.right-wrapper .control-wrapper .header .title[data-v-b48c1dc0]{font-size:%?26?%;font-weight:700;color:#282828}.right-wrapper .control-wrapper .header .input-wrapper[data-v-b48c1dc0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?28?%}.right-wrapper .control-wrapper .header .input-wrapper uni-input[data-v-b48c1dc0]{width:%?260?%;height:%?56?%;padding:0 %?10?%;background:#f2f2f2;border-radius:%?28?%;font-size:%?22?%;text-align:center}.right-wrapper .control-wrapper .header .input-wrapper .line[data-v-b48c1dc0]{width:%?15?%;height:%?2?%;background:#7d7d7d}.right-wrapper .control-wrapper .content-box[data-v-b48c1dc0]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?20?%;padding:0 %?26?%;background-color:#fff;overflow:hidden}.right-wrapper .control-wrapper .content-box .title[data-v-b48c1dc0]{padding:%?40?% 0 %?20?%;font-size:%?26?%;font-weight:700;color:#282828}.right-wrapper .control-wrapper .content-box .brand-wrapper[data-v-b48c1dc0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.right-wrapper .control-wrapper .content-box .brand-wrapper .wrapper[data-v-b48c1dc0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:%?20?%}.right-wrapper .control-wrapper .content-box .brand-wrapper .item[data-v-b48c1dc0]{display:block;width:%?186?%;height:%?56?%;line-height:%?56?%;text-align:center;background:#f2f2f2;border-radius:%?28?%;margin-top:%?25?%;padding:0 %?10?%;margin-right:%?12?%}.right-wrapper .control-wrapper .content-box .brand-wrapper .item[data-v-b48c1dc0]:nth-child(3n){margin-right:0}.right-wrapper .control-wrapper .content-box .brand-wrapper .item.on[data-v-b48c1dc0]{background:#fff4f3;border:1px solid #e93323;color:#e93323}.right-wrapper .control-wrapper .content-box .brand-wrapper .btns[data-v-b48c1dc0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:%?10?%;font-size:%?22?%;color:#999}.right-wrapper .control-wrapper .content-box .brand-wrapper .btns .iconfont[data-v-b48c1dc0]{margin-left:%?10?%;margin-top:%?5?%;font-size:%?20?%}.right-wrapper .control-wrapper .content-box .foot-btn[data-v-b48c1dc0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?30?%}.right-wrapper .control-wrapper .content-box .foot-btn .btn-item[data-v-b48c1dc0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?286?%;height:%?68?%;background:#fff;border:1px solid #aaa;border-radius:%?34?%;font-size:%?26?%;color:#282828}.right-wrapper .control-wrapper .content-box .foot-btn .btn-item.confirm[data-v-b48c1dc0]{background:#e93323;border-color:#e93323;color:#fff}.right-wrapper .right-bg[data-v-b48c1dc0]{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}',""]),t.exports=e}}]);