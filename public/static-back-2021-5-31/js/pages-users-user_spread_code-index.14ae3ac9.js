(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_spread_code-index"],{"011d":function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=i(n("f0ac")),r={name:"zb-code",props:{cid:{type:String,default:"zb-code-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二維碼生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二維碼內容不能為空",icon:"none",duration:2e3}):o=new a.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),o.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)||"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){n._makeCode()}),100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){n._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=r},"1ad9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-604a724a]{background-color:#a3a3a3!important}.canvas[data-v-604a724a]{width:100%}.box[data-v-604a724a]{width:100%;height:100%;position:relative;border-radius:%?18?%;overflow:hidden}.box .user-msg[data-v-604a724a]{position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.box .user-msg .user-code[data-v-604a724a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.box .user-msg .user-code uni-image[data-v-604a724a]{width:100%}.img-list[data-v-604a724a]{margin-right:40px}.distribution-posters uni-swiper[data-v-604a724a]{width:100%;height:%?1000?%;position:relative;margin-top:%?40?%}.distribution-posters .slide-image[data-v-604a724a]{width:100%;height:100%;margin:0 auto;border-radius:%?15?%}.distribution-posters[data-v-604a724a] .active{-webkit-transform:none;transform:none;-webkit-transition:all .2s ease-in 0s;transition:all .2s ease-in 0s}.distribution-posters[data-v-604a724a] .quiet{-webkit-transform:scale(.83333);transform:scale(.83333);-webkit-transition:all .2s ease-in 0s;transition:all .2s ease-in 0s}.distribution-posters .keep[data-v-604a724a]{font-size:%?30?%;color:#fff;width:%?600?%;height:%?80?%;border-radius:%?50?%;text-align:center;line-height:%?80?%;margin:%?38?% auto}.distribution-posters .preserve[data-v-604a724a]{color:#fff;text-align:center;margin-top:%?38?%}.distribution-posters .preserve .line[data-v-604a724a]{width:%?100?%;height:1px;background-color:#fff}.distribution-posters .preserve .tip[data-v-604a724a]{margin:0 %?30?%}body.?%PAGE?%[data-v-604a724a]{background-color:#a3a3a3!important}',""]),t.exports=e},"26af":function(t,e,n){"use strict";n.r(e);var i=n("7651"),o=n("df1d");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("8643");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"6c588de2",null,!1,i["a"],r);e["default"]=u.exports},"394d":function(t,e,n){"use strict";n.r(e);var i=n("7811"),o=n("9f9c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("93cd");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"b4183582",null,!1,i["a"],r);e["default"]=u.exports},"3c91":function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),n("ac1f"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("1da1")),a=i(n("394d")),r=n("bacc"),s=n("e90e"),u=n("2f62"),c=i(n("26af")),l={components:{home:c.default,zbCode:a.default},data:function(){return{imgUrls:[],indicatorDots:!1,posterImageStatus:!0,circular:!1,autoplay:!1,interval:3e3,duration:500,swiperIndex:0,spreadList:[],userInfo:{},poster:"",isAuto:!1,isShowAuth:!1,spreadData:[{}],nickName:"",siteName:"",mpUrl:"",canvasImageUrl:"",posterImage:[],codeShow:!1,cid:"1",ifShow:!0,val:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#32dbc6",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",wd:225,hg:500}},computed:(0,u.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),watch:{isLogin:{handler:function(t,e){t&&this.userSpreadBannerList()},deep:!0},userData:{handler:function(t,e){t&&this.$set(this,"userInfo",t)},deep:!0}},onReady:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isLogin){e.next=9;break}return e.next=3,(0,r.getUserInfo)();case 3:return n=e.sent,t.val=window.location.host+"?spread="+n.data.uid,e.next=7,t.spreadMsg();case 7:e.next=10;break;case 9:(0,s.toLogin)();case 10:case"end":return e.stop()}}),e)})))()},onShow:function(){var t=this;this.$nextTick((function(){var e=uni.createSelectorQuery().select(".aaa");e.fields({size:!0},(function(e){t.wd=e.width,t.hg=e.height})).exec()}))},methods:{onLoadFun:function(t){this.$set(this,"userInfo",t),this.userSpreadBannerList()},qrR:function(t){this.codeSrc=t},spreadMsg:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n,i,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={type:"h5"},e.next=3,(0,r.spreadMsg)(n);case 3:i=e.sent,t.spreadData=i.data.poster,t.nickName=i.data.nickname,t.siteName=i.data.site_name,"?spread="+t.userInfo.uid,uni.showLoading({title:"海報生成中",mask:!0}),o=regeneratorRuntime.mark((function e(n){var o,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,a=void 0,e.next=4,t.imgToBase(i.data.poster[n].pic);case 4:r=e.sent,a=[i.data.qrcode,r],o.$util.userPosterCanvas(a,i.data.nickname,i.data.mark,n,t.wd,t.hg,(function(t){o.$set(o.posterImage,n,t)}));case 7:case"end":return e.stop()}}),e)})),a=0;case 11:if(!(a<i.data.poster.length)){e.next=16;break}return e.delegateYield(o(a),"t0",13);case 13:a++,e.next=11;break;case 16:uni.hideLoading();case 17:case"end":return e.stop()}}),e)})))()},downloadImg:function(){uni.saveImageToPhotosAlbum({filePath:this.posterImage[this.swiperIndex],success:function(){}})},imgToBase:function(t){return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.imgToBase)({image:t});case 2:return n=e.sent,e.abrupt("return",n.data.image);case 4:case"end":return e.stop()}}),e)})))()},codeImg:function(){},authColse:function(t){this.isShowAuth=t},bindchange:function(t){this.spreadList;this.swiperIndex=t.detail.current},savePosterPathMp:function(t){var e=this;uni.getSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?uni.saveImageToPhotosAlbum({filePath:t,success:function(t){e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失敗"})}}):uni.authorize({scope:"scope.writePhotosAlbum",success:function(){uni.saveImageToPhotosAlbum({filePath:t,success:function(t){e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失敗"})}})}})}})},downloadFilestoreImage:function(t){var e=this;return new Promise((function(n,i){var o=e;uni.downloadFile({url:t,success:function(t){n(t.tempFilePath)},fail:function(){return o.$util.Tips({title:""})}})}))},setShareInfoStatus:function(){var t=this;this.$wechat.isWeixin()&&(this.isLogin?(0,r.getUserInfo)().then((function(e){var n={desc:"分銷海報",title:e.data.nickname+"-分銷海報",link:"/pages/index/index?spread="+e.data.uid,imgUrl:t.spreadList[0]};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)})):(0,s.toLogin)())},userSpreadBannerList:function(){var t=this;uni.showLoading({title:"獲取中",mask:!0}),(0,r.spreadBanner)().then((function(e){uni.hideLoading(),t.$set(t,"spreadList",e.data),t.$set(t,"poster",e.data[0].poster),t.setShareInfoStatus()})).catch((function(t){uni.hideLoading()}))}}};e.default=l},"542d":function(t,e,n){"use strict";var i=n("23e7"),o=n("d039"),a=n("408a"),r=1..toPrecision,s=o((function(){return"1"!==r.call(1,void 0)}))||!o((function(){r.call({})}));i({target:"Number",proto:!0,forced:s},{toPrecision:function(t){return void 0===t?r.call(a(this)):r.call(a(this),t)}})},6354:function(t,e,n){var i=n("1ad9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("77beb87c",i,!0,{sourceMap:!1,shadowMode:!1})},"70f8":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-6c588de2]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-6c588de2]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-6c588de2]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-6c588de2]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-6c588de2]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-6c588de2]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-6c588de2]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},7512:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),o={name:"Home",props:{},data:function(){return{top:"",bottom:""}},computed:(0,i.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY,e.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=o},7651:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"touch-action":"none"}},[n("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?n("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[n("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),n("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),n("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),n("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},a=[]},7811:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"zb-code"},[n("v-uni-canvas",{staticClass:"zb-code-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.cid}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},a=[]},8643:function(t,e,n){"use strict";var i=n("fe25"),o=n.n(i);o.a},"86ad":function(t,e,n){"use strict";var i=n("6354"),o=n.n(i);o.a},"93cd":function(t,e,n){"use strict";var i=n("e2f9"),o=n.n(i);o.a},"9f9c":function(t,e,n){"use strict";n.r(e);var i=n("011d"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},a1c9:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zb-code[data-v-b4183582]{position:relative}.zb-code-canvas[data-v-b4183582]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},a360:function(t,e,n){"use strict";n.r(e);var i=n("3c91"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},bea1:function(t,e,n){"use strict";n.r(e);var i=n("e9cb"),o=n("a360");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("86ad");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"604a724a",null,!1,i["a"],r);e["default"]=u.exports},cb29:function(t,e,n){var i=n("23e7"),o=n("81d5"),a=n("44d2");i({target:"Array",proto:!0},{fill:o}),a("fill")},df1d:function(t,e,n){"use strict";n.r(e);var i=n("7512"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e2f9:function(t,e,n){var i=n("a1c9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("0f2faf87",i,!0,{sourceMap:!1,shadowMode:!1})},e9cb:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={zbCode:n("394d").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"distribution-posters"},[n("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"previous-margin":"40px","next-margin":"40px"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindchange.apply(void 0,arguments)}}},[t._l(t.spreadData,(function(e,i){return[n("v-uni-swiper-item",{key:i+"_0",staticClass:"aaa"},[n("div",{ref:"bill",refInFor:!0,staticClass:"box",class:t.swiperIndex==i?"active":"quiet"},[n("v-uni-view",{staticClass:"user-msg"},[n("v-uni-view",{staticClass:"user-code"},[t.posterImage[i]?n("v-uni-image",{staticClass:"canvas",style:{height:t.hg+"px"},attrs:{src:t.posterImage[i]}}):n("v-uni-canvas",{staticClass:"canvas",style:{height:t.hg+"px"},attrs:{"canvas-id":"myCanvas"+i}})],1)],1)],1)])]}))],2),n("div",{staticClass:"preserve acea-row row-center-wrapper"},[n("div",{staticClass:"line"}),n("div",{staticClass:"tip"},[t._v("長按保存圖片")]),n("div",{staticClass:"line"})])],1),n("home"),n("v-uni-view",{staticClass:"qrimg"},[n("zb-code",{ref:"qrcode",attrs:{show:t.codeShow,cid:t.cid,val:t.val,size:t.size,unit:t.unit,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,onval:t.onval,loadMake:t.loadMake},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}})],1)],1)},a=[]},f0ac:function(t,e,n){"use strict";n("cb29"),n("a9e3"),n("b680"),n("542d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={};(function(){function t(t){var e,n,i;return t<128?[t]:t<2048?(e=192+(t>>6),n=128+(63&t),[e,n]):(e=224+(t>>12),n=128+(t>>6&63),i=128+(63&t),[e,n,i])}function e(e){for(var n=[],i=0;i<e.length;i++)for(var o=e.charCodeAt(i),a=t(o),r=0;r<a.length;r++)n.push(a[r]);return n}function n(t,n){this.typeNumber=-1,this.errorCorrectLevel=n,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}n.prototype={constructor:n,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+n][e+i]=0<=n&&n<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=i&&i<=4)},createQrcode:function(){for(var t=0,e=0,n=null,i=0;i<8;i++){this.makeImpl(i);var o=r.getLostPoint(this);(0==i||t>o)&&(t=o,e=i,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=r.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var i=t[e],o=t[n];if(null==this.modules[i][o])for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)this.modules[i+a][o+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s}},setupTypeNumber:function(t){for(var e=r.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var i=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=i,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=i}},setupTypeInfo:function(t,e){for(var n=o[this.errorCorrectLevel]<<3|e,i=r.getBCHTypeInfo(n),a=0;a<15;a++){var s=!t&&1==(i>>a&1);a<6?this.modules[a][8]=s:a<8?this.modules[a+1][8]=s:this.modules[this.moduleCount-15+a][8]=s;s=!t&&1==(i>>a&1);a<8?this.modules[8][this.moduleCount-a-1]=s:a<9?this.modules[8][15-a-1+1]=s:this.modules[8][15-a-1]=s}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new d,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var i=0,o=this.utf8bytes.length;i<o;i++)t.put(this.utf8bytes[i],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(n.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(n.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,i=0,o=this.rsBlock.length/3,a=new Array,s=0;s<o;s++)for(var u=this.rsBlock[3*s+0],l=this.rsBlock[3*s+1],d=this.rsBlock[3*s+2],h=0;h<u;h++)a.push([d,l]);for(var f=new Array(a.length),p=new Array(a.length),g=0;g<a.length;g++){var v=a[g][0],m=a[g][1]-v;n=Math.max(n,v),i=Math.max(i,m),f[g]=new Array(v);for(s=0;s<f[g].length;s++)f[g][s]=255&t.buffer[s+e];e+=v;var b=r.getErrorCorrectPolynomial(m),w=new c(f[g],b.getLength()-1),y=w.mod(b);p[g]=new Array(b.getLength()-1);for(s=0;s<p[g].length;s++){var x=s+y.getLength()-p[g].length;p[g][s]=x>=0?y.get(x):0}}var T=new Array(this.totalDataCount),k=0;for(s=0;s<n;s++)for(g=0;g<a.length;g++)s<f[g].length&&(T[k++]=f[g][s]);for(s=0;s<i;s++)for(g=0;g<a.length;g++)s<p[g].length&&(T[k++]=p[g][s]);return T},mapData:function(t,e){for(var n=-1,i=this.moduleCount-1,o=7,a=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var u=0;u<2;u++)if(null==this.modules[i][s-u]){var c=!1;a<t.length&&(c=1==(t[a]>>>o&1));var l=r.getMask(e,i,s-u);l&&(c=!c),this.modules[i][s-u]=c,o--,-1==o&&(a++,o=7)}if(i+=n,i<0||this.moduleCount<=i){i-=n,n=-n;break}}}}},n.PAD0=236,n.PAD1=17;for(var o=[1,0,3,2],a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},r={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(r.getBCHDigit(e)-r.getBCHDigit(r.G15)>=0)e^=r.G15<<r.getBCHDigit(e)-r.getBCHDigit(r.G15);return(t<<10|e)^r.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(r.getBCHDigit(e)-r.getBCHDigit(r.G18)>=0)e^=r.G18<<r.getBCHDigit(e)-r.getBCHDigit(r.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return r.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case a.PATTERN000:return(e+n)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return n%3==0;case a.PATTERN011:return(e+n)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case a.PATTERN101:return e*n%2+e*n%3==0;case a.PATTERN110:return(e*n%2+e*n%3)%2==0;case a.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new c([1],0),n=0;n<t;n++)e=e.multiply(new c([1,s.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,i=0,o=0;o<e;o++)for(var a=0,r=t.modules[o][0],s=0;s<e;s++){var u=t.modules[o][s];if(s<e-6&&u&&!t.modules[o][s+1]&&t.modules[o][s+2]&&t.modules[o][s+3]&&t.modules[o][s+4]&&!t.modules[o][s+5]&&t.modules[o][s+6]&&(s<e-10?t.modules[o][s+7]&&t.modules[o][s+8]&&t.modules[o][s+9]&&t.modules[o][s+10]&&(n+=40):s>3&&t.modules[o][s-1]&&t.modules[o][s-2]&&t.modules[o][s-3]&&t.modules[o][s-4]&&(n+=40)),o<e-1&&s<e-1){var c=0;u&&c++,t.modules[o+1][s]&&c++,t.modules[o][s+1]&&c++,t.modules[o+1][s+1]&&c++,0!=c&&4!=c||(n+=3)}r^u?a++:(r=u,a>=5&&(n+=3+a-5),a=1),u&&i++}for(s=0;s<e;s++)for(a=0,r=t.modules[0][s],o=0;o<e;o++){u=t.modules[o][s];o<e-6&&u&&!t.modules[o+1][s]&&t.modules[o+2][s]&&t.modules[o+3][s]&&t.modules[o+4][s]&&!t.modules[o+5][s]&&t.modules[o+6][s]&&(o<e-10?t.modules[o+7][s]&&t.modules[o+8][s]&&t.modules[o+9][s]&&t.modules[o+10][s]&&(n+=40):o>3&&t.modules[o-1][s]&&t.modules[o-2][s]&&t.modules[o-3][s]&&t.modules[o-4][s]&&(n+=40)),r^u?a++:(r=u,a>=5&&(n+=3+a-5),a=1)}var l=Math.abs(100*i/e/e-50)/5;return n+=10*l,n}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)s.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)s.EXP_TABLE[u]=s.EXP_TABLE[u-4]^s.EXP_TABLE[u-5]^s.EXP_TABLE[u-6]^s.EXP_TABLE[u-8];for(u=0;u<255;u++)s.LOG_TABLE[s.EXP_TABLE[u]]=u;function c(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var i=0;i<t.length-n;i++)this.num[i]=t[i+n]}c.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)e[n+i]^=s.gexp(s.glog(this.get(n))+s.glog(t.get(i)));return new c(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(e-n<0)return this;for(var i=new Array(e),o=0;o<e;o++)i[o]=this.get(o);while(i.length>=n){var a=s.glog(i[0])-s.glog(t.get(0));for(o=0;o<t.getLength();o++)i[o]^=s.gexp(s.glog(t.get(o))+a);while(0==i[0])i.shift()}return new c(i,0)}};var l=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function d(){this.buffer=new Array,this.length=0}n.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=l[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,i=0,o=0;o<n;o++){var a=e[3*o+0],r=e[3*o+2];i+=r*a}var s=t>9?2:1;if(this.utf8bytes.length+s<i||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=i;break}}},d.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;n<e;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var h=[];i=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var i=null,o=(e=0,h.length);e<o;e++)if(h[e].text==this.options.text&&h[e].text.correctLevel==this.options.correctLevel){i=h[e].obj;break}e==o&&(i=new n(this.options.text,this.options.correctLevel),h.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:i}));var a=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},r=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),n=i.getModuleCount(),o=t.size,r=t.imageSize,s=(o/n).toPrecision(4),u=(o/n).toPrecision(4),c=0;c<n;c++)for(var l=0;l<n;l++){var d=Math.ceil((l+1)*s)-Math.floor(l*s),h=Math.ceil((c+1)*s)-Math.floor(c*s),f=a({row:c,col:l,count:n,options:t});e.setFillStyle(i.modules[c][l]?f:t.background),e.fillRect(Math.round(l*s),Math.round(c*u),d,h)}if(t.image){var p=function(e,n,i,o,a,r,s,u,c){e.setLineWidth(s),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(n+r,i),e.arcTo(n+o,i,n+o,i+r,r),e.arcTo(n+o,i+a,n+o-r,i+a,r),e.arcTo(n,i+a,n,i+a-r,r),e.arcTo(n,i,n+r,i,r),e.closePath(),u&&e.fill(),c&&e.stroke()},g=Number(((o-r)/2).toFixed(2)),v=Number(((o-r)/2).toFixed(2));p(e,g,v,r,r,2,6,!0,!0),e.drawImage(t.image,g,v,r,r)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&t.cbResult(e.tempFilePath)},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){t.showLoading&&uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)};r(this.options)},i.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var o=i;e.default=o},fe25:function(t,e,n){var i=n("70f8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1a444594",i,!0,{sourceMap:!1,shadowMode:!1})}}]);