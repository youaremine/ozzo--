(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_pwd_edit-index"],{"32ae":function(t,e,n){var r=n("8ec5");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("9eb77cbc",r,!0,{sourceMap:!1,shadowMode:!1})},"50b9":function(t,e,n){"use strict";n.r(e);var r=n("aec6"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"515d":function(t,e,n){"use strict";n.r(e);var r=n("8fcb"),o=n("50b9");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("f1b2");var a,u=n("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"f9881080",null,!1,r["a"],a);e["default"]=s.exports},"6ffe":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=i,e.getLogo=a,e.setFormId=u,e.setCouponReceive=s,e.getCoupons=c,e.getShopCoupons=d,e.getUserCoupons=l,e.getArticleCategoryList=f,e.getArticleList=p,e.getArticleHotList=h,e.getArticleBannerList=g,e.getArticleDetails=v,e.loginMobile=w,e.verifyCode=b,e.registerVerify=m,e.phoneRegister=A,e.phoneRegisterReset=C,e.phoneLogin=y,e.switchH5Login=_,e.bindingPhone=x,e.logout=I,e.getTemlIds=P,e.pink=L,e.getCity=$,e.getLiveList=k;var o=r(n("5a6c"));function i(){return o.default.get("common/home",{},{noAuth:!0})}function a(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function u(t){return o.default.post("wechat/set_form_id",{formId:t})}function s(t){return o.default.post("coupon/receive/"+t)}function c(t){return o.default.get("coupon/product",t,{noAuth:!0})}function d(t){return o.default.get("coupon/store/"+t,{},{noAuth:!0})}function l(t){return o.default.get("coupon/list",t)}function f(){return o.default.get("article/category/lst",{},{noAuth:!0})}function p(t,e){return o.default.get("article/lst/"+t,e,{noAuth:!0})}function h(){return o.default.get("article/hot/list",{},{noAuth:!0})}function g(){return o.default.get("article/banner/list",{},{noAuth:!0})}function v(t){return o.default.get("article/detail/"+t,{},{noAuth:!0})}function w(t){return o.default.post("login/mobile",t,{noAuth:!0})}function b(){return o.default.get("verify_code",{},{noAuth:!0})}function m(t,e,n,r){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:r},{noAuth:!0})}function A(t){return o.default.post("register",t,{noAuth:!0})}function C(t){return o.default.post("register/reset",t,{noAuth:!0})}function y(t){return o.default.post("login",t,{noAuth:!0})}function _(t){return o.default.post("user/switch",t)}function x(t){return o.default.post("user/binding",t)}function I(){return o.default.get("logout")}function P(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function L(){return o.default.get("pink",{},{noAuth:!0})}function $(){return o.default.get("system/city/lst",{},{noAuth:!0})}function k(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}},"8ec5":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-f9881080]{background-color:#fff!important}.ChangePassword .phone[data-v-f9881080]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-f9881080]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-f9881080]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-f9881080]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-f9881080]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-f9881080]{width:%?340?%}.ChangePassword .list .item .code[data-v-f9881080]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-f9881080]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-f9881080]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}body.?%PAGE?%[data-v-f9881080]{background-color:#fff!important}',""]),t.exports=e},"8fcb":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"phone"},[t._v("當前手機號："+t._s(t.phone))]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"password",placeholder:"設置新密碼","placeholder-class":"placeholder",name:"password",value:t.password}})],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"password",placeholder:"確認新密碼","placeholder-class":"placeholder",name:"qr_password",value:t.qr_password}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"填寫驗證碼","placeholder-class":"placeholder",name:"captcha",value:t.captcha}}),n("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v("确认修改")])],1)],1)],1)},i=[]},"96f9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{disabled:!1,text:"獲取驗證碼"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩餘 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩餘 "+e+"s",t.text<"剩餘 0s"&&(t.disabled=!1,t.text="重新獲取")}),1e3)}}}};e.default=r},aec6:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("1da1")),i=r(n("96f9")),a=n("6ffe"),u=n("8fa6"),s=n("2073"),c=n("2f62"),d={mixins:[i.default],components:{},data:function(){return{userInfo:{},phone:"",password:"",captcha:"",qr_password:"",isAuto:!1,isShowAuth:!1}},computed:(0,c.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?this.getUserInfo():(0,s.toLogin)()},methods:{onLoadFun:function(t){this.isShowAuth=!1,this.getUserInfo()},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,u.getUserInfo)().then((function(e){var n=e.data.phone,r=n.substr(0,3)+"****"+n.substr(7);t.$set(t,"userInfo",e.data),t.phone=r}))},code:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.userInfo.phone){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"手機號碼不存在,無法發送驗證碼！"}));case 3:return e.next=5,(0,a.registerVerify)(n.userInfo.phone).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}));case 5:case"end":return e.stop()}}),e)})))()},editPwd:function(t){var e=this,n=t.detail.value.password,r=t.detail.value.qr_password,o=t.detail.value.captcha;return n?r!=n?e.$util.Tips({title:"兩次輸入的密碼不一致！"}):o?void(0,a.phoneRegisterReset)({account:e.userInfo.phone,captcha:o,password:n}).then((function(t){return e.$util.Tips({title:t.msg},{tab:3,url:1})})).catch((function(t){return e.$util.Tips({title:t})})):e.$util.Tips({title:"請輸入驗證碼"}):e.$util.Tips({title:"請輸入新密碼"})}}};e.default=d},f1b2:function(t,e,n){"use strict";var r=n("32ae"),o=n.n(r);o.a}}]);