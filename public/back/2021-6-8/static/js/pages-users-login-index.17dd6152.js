(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-login-index"],{"0ccb":function(t,e,n){var r=n("50c4"),i=n("1148"),a=n("1d80"),s=Math.ceil,o=function(t){return function(e,n,o){var c,u,l=String(a(e)),d=l.length,f=void 0===o?" ":String(o),p=r(n);return p<=d||""==f?l:(c=p-d,u=i.call(f,s(c/f.length)),u.length>c&&(u=u.slice(0,c)),t?l+u:u+l)}};t.exports={start:o(!1),end:o(!0)}},"10d1":function(t,e,n){"use strict";var r,i=n("da84"),a=n("e2cc"),s=n("f183"),o=n("6d61"),c=n("acac"),u=n("861d"),l=n("69f3").enforce,d=n("7f9a"),f=!i.ActiveXObject&&"ActiveXObject"in i,p=Object.isExtensible,h=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},v=t.exports=o("WeakMap",h,c);if(d&&f){r=c.getConstructor(h,"WeakMap",!0),s.REQUIRED=!0;var g=v.prototype,m=g["delete"],b=g.has,$=g.get,w=g.set;a(g,{delete:function(t){if(u(t)&&!p(t)){var e=l(this);return e.frozen||(e.frozen=new r),m.call(this,t)||e.frozen["delete"](t)}return m.call(this,t)},has:function(t){if(u(t)&&!p(t)){var e=l(this);return e.frozen||(e.frozen=new r),b.call(this,t)||e.frozen.has(t)}return b.call(this,t)},get:function(t){if(u(t)&&!p(t)){var e=l(this);return e.frozen||(e.frozen=new r),b.call(this,t)?$.call(this,t):e.frozen.get(t)}return $.call(this,t)},set:function(t,e){if(u(t)&&!p(t)){var n=l(this);n.frozen||(n.frozen=new r),b.call(this,t)?w.call(this,t,e):n.frozen.set(t,e)}else w.call(this,t,e);return this}})}},"14db":function(t,e,n){"use strict";var r=n("dbce"),i=n("4ea4");n("caad"),n("c975"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),s=(i(n("6f7c")),i(n("96f9"))),o=n("8fa6"),c=(r(n("6114")),n("75fe"),n("9de8")),u=(n("8b83"),"login_back_url"),l={name:"Login",mixins:[s.default],data:function(){return{navList:["賬號登錄","快速登錄"],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,client_id:""}},watch:{formItem:function(t,e){this.type=1==t?"login":"register"}},onReady:function(){var t=this;uni.$on("update",(function(e){t.logoUrl=e.login_logo}))},mounted:function(){var t=this,e=getApp();this.$nextTick((function(){t.logoUrl=e.globalData.login_logo}))},onLoad:function(){},methods:{again:function(){this.getcaptcha()},getCode:function(){var t=this;(0,o.getCodeApi)().then((function(e){t.keyCode=e.data.key})).catch((function(e){t.$util.Tips({title:e})}))},initGoogleLogin:function(){var t=this;switch(uni.getSystemInfoSync().platform){case"android":t.client_id="84797278409-j3lv60an9pjg8kcqnv4723p94cqur9ht.apps.googleusercontent.com";break;case"ios":t.client_id="84797278409-2a9m7op38g6mlqa6ujcsa22vjtvthere.apps.googleusercontent.com";break;default:break}JYGoogleSignin.jy_init({client_id:t.client_id},(function(t){}))},getLogoImage:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,(0,c.getLogo)(2).then((function(t){n.logoUrl=t.data.logo_url}));case 2:case"end":return e.stop()}}),e)})))()},googleLogin:function(){return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:JYGoogleSignin.jy_startLogin((function(t){uni.showToast({icon:"none",title:JSON.stringify(t)})}));case 1:case"end":return t.stop()}}),t)})))()},fbLogin:function(){return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:facebook.isLoggedIn(),facebook.loginWithParams({permissions:["email","user_photos","user_gender","user_birthday","public_profile"],fields:"id, name, email, gender, birthday, picture"},(function(t){uni.showToast({icon:"none",title:JSON.stringify(t)})}));case 3:case"end":return t.stop()}}),t)})))()},fbH5Login:function(){return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},loginMobile:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"請輸入手機號碼"}));case 3:if(/^(4|5|6|7|8|9)\d{7}$/i.test(n.account)||/^1(3|4|5|6|7|8|9)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的手機號碼"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"請輸入驗證碼"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的驗證碼"}));case 9:(0,o.loginMobile)({phone:n.account,sms_code:n.captcha,spread:n.$Cache.get("spread")}).then((function(e){var r,i=e.data,a=n.$Cache.get(u)||"/pages/index/index";n.$Cache.clear(u),n.$store.commit("LOGIN",{token:i.token,time:i.exp}),n.$store.commit("SETUID",i.user.uid),n.$store.commit("UPDATE_USERINFO",i.user);var s=["/pages/index/index","/pages/order_addcart/order_addcart","/pages/goods_cate/goods_cate","/pages/user/index"];r=s.includes(t.getPath(a))?"switchTab":"navigateTo","/pages/users/login/index"!==t.getPath(a)?uni[r]({url:a}):uni.switchTab({url:"/pages/index/index"})})).catch((function(t){n.$util.Tips({title:t})}));case 10:case"end":return e.stop()}}),e)})))()},register:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"請輸入手機號碼"}));case 3:if(/^(4|5|6|7|8|9)\d{7}$/i.test(n.account)||/^1(3|4|5|6|7|8|9)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的手機號碼"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"請輸入驗證碼"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的驗證碼"}));case 9:if(n.password){e.next=11;break}return e.abrupt("return",n.$util.Tips({title:"請輸入密碼"}));case 11:if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/i.test(n.password)){e.next=13;break}return e.abrupt("return",n.$util.Tips({title:"您輸入的密碼過於簡單"}));case 13:(0,o.register)({account:n.account,captcha:n.captcha,password:n.password,spread:n.$Cache.get("spread")}).then((function(t){n.$util.Tips({title:t}),n.formItem=1})).catch((function(t){n.$util.Tips({title:t})}));case 14:case"end":return e.stop()}}),e)})))()},code:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"請輸入手機號碼"}));case 3:if(/^(4|5|6|7|8|9)\d{7}$/i.test(n.account)||/^1(3|4|5|6|7|8|9)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的手機號碼"}));case 5:r={country:"86",phone:n.account},mobsms.sendSms(r,(function(t){1==t.code?uni.showToast({title:"發送成功",icon:"success"}):uni.showToast({title:"發送失敗: "+t.msg,icon:"none"})}));case 7:case"end":return e.stop()}}),e)})))()},getcaptcha:function(){var t=this;(0,o.getCaptcha)().then((function(e){t.codeUrl=e.data.captcha})),t.isShowCode=!0},navTap:function(t){this.current=t},getPath:function(t){return-1!=t.indexOf("?")&&(t=t.split("?")[0]),t},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"請輸入賬號"}));case 3:if(/^[\w\d]{5,16}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的賬號"}));case 5:if(n.password){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"請輸入密碼"}));case 7:(0,o.loginH5)({account:n.account,password:n.password,spread:n.$Cache.get("spread")}).then((function(e){var r,i=e.data,a=n.$Cache.get(u)||"/pages/index/index";n.$Cache.clear(u),n.$store.commit("LOGIN",{token:i.token,time:i.exp}),n.$store.commit("SETUID",i.user.uid),n.$store.commit("UPDATE_USERINFO",i.user);var s=["/pages/index/index","/pages/order_addcart/order_addcart","/pages/goods_cate/goods_cate","/pages/user/index"];r=s.includes(t.getPath(a))?"switchTab":"navigateTo","/pages/users/login/index"!==t.getPath(a)?uni[r]({url:a}):uni.switchTab({url:"/pages/index/index"})})).catch((function(t){n.$util.Tips({title:t})}));case 8:case"end":return e.stop()}}),e)})))()}}};e.default=l},1785:function(t,e,n){var r=n("606b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("ba4e408a",r,!0,{sourceMap:!1,shadowMode:!1})},"1aca":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register absolute"},[n("div",{staticClass:"shading"},[n("div",{staticClass:"pictrue acea-row row-center-wrapper"},[t.logoUrl?n("v-uni-image",{attrs:{src:t.logoUrl}}):n("v-uni-image",{attrs:{src:"/static/images/logo2.png"}})],1)]),1===t.formItem?n("div",{staticClass:"whiteBg"},[n("div",{staticClass:"title acea-row row-center-wrapper"},t._l(t.navList,(function(e,r){return n("div",{key:r,staticClass:"item",class:t.current===r?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTap(r)}}},[t._v(t._s(e))])})),0),n("div",{staticClass:"list",attrs:{hidden:0!==t.current}},[n("v-uni-form",{on:{submit:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"輸入手機號碼",required:!0},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{attrs:{type:"password",placeholder:"填寫登錄密碼",required:!0},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])]),n("v-uni-navigator",{staticClass:"forgetPwd",attrs:{"hover-class":"none",url:"/pages/users/retrievePassword/index"}},[n("span",{staticClass:"iconfont icon-wenti"}),t._v("忘記密碼")])],1),n("div",{staticClass:"list",attrs:{hidden:1!==t.current}},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"輸入手機號碼"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填寫驗證碼"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)]),t.isShowCode?n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填寫驗證碼"},model:{value:t.codeVal,callback:function(e){t.codeVal=e},expression:"codeVal"}}),n("div",{staticClass:"code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.again.apply(void 0,arguments)}}},[n("img",{attrs:{src:t.codeUrl}})])],1)]):t._e()]),n("div",{staticClass:"logon",attrs:{hidden:1!==t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginMobile.apply(void 0,arguments)}}},[t._v("登錄")]),n("div",{staticClass:"logon",attrs:{hidden:1===t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登錄")])]):n("div",{staticClass:"whiteBg"},[n("div",{staticClass:"title"},[t._v("註冊賬號")]),n("div",{staticClass:"list"},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"輸入手機號碼"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填寫驗證碼"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_1.png"}}),n("v-uni-input",{attrs:{type:"password",placeholder:"填寫您的登錄密碼"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),t.isShowCode?n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填寫驗證碼"},model:{value:t.codeVal,callback:function(e){t.codeVal=e},expression:"codeVal"}}),n("div",{staticClass:"code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.again.apply(void 0,arguments)}}},[n("img",{attrs:{src:t.codeUrl}})])],1)]):t._e()]),n("div",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v("註冊")]),n("div",{staticClass:"tip"},[t._v("已有賬號?"),n("span",{staticClass:"font-color-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formItem=1}}},[t._v("立即登錄")])])]),n("div",{staticClass:"bottom"})])},a=[]},"23c5":function(t,e,n){"use strict";n.r(e);var r=n("14db"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},5526:function(t,e,n){"use strict";n.r(e);var r=n("1aca"),i=n("23c5");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("fc63");var s,o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"5db17850",null,!1,r["a"],s);e["default"]=c.exports},"606b":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.code img[data-v-5db17850]{width:100%;height:100%}.acea-row.row-middle uni-input[data-v-5db17850]{margin-left:%?20?%}.fb-signin-button[data-v-5db17850]{\r\n  /* This is where you control how the button looks. Be creative! */display:inline-block;padding:4px 8px;border-radius:3px;background-color:#4267b2;color:#fff}',""]),t.exports=e},6114:function(t,e,n){"use strict";function r(t){var e=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!e.test(t)}function i(t){var e=/^(4|5|6|7|8|9)\d{7}$/;return!!e.test(t)}function a(t){var e=/^1(3|4|5|6|7|8|9)\d{9}$/;return!!e.test(t)}function s(t){var e=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return!!e.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.isMoney=r,e.checkPhone=i,e.checkZGPhone=a,e.isEmailAvailable=s},"64e5":function(t,e,n){"use strict";var r=n("d039"),i=n("0ccb").start,a=Math.abs,s=Date.prototype,o=s.getTime,c=s.toISOString;t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!r((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+i(a(e),r?6:4,0)+"-"+i(t.getUTCMonth()+1,2,0)+"-"+i(t.getUTCDate(),2,0)+"T"+i(t.getUTCHours(),2,0)+":"+i(t.getUTCMinutes(),2,0)+":"+i(t.getUTCSeconds(),2,0)+"."+i(n,3,0)+"Z"}:c},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),p=n("d44e"),h=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=v?"set":"add",b=i[t],$=b&&b.prototype,w=b,y={},x=function(t){var e=$[t];s($,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof b||!(g||$.forEach&&!d((function(){(new b).entries().next()})))))w=n.getConstructor(e,t,v,m),o.REQUIRED=!0;else if(a(t,!0)){var _=new w,k=_[m](g?{}:-0,1)!=_,C=d((function(){_.has(1)})),S=f((function(t){new b(t)})),D=!g&&d((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));S||(w=e((function(e,n){u(e,w,t);var r=h(new b,e,w);return void 0!=n&&c(n,r[m],r,v),r})),w.prototype=$,$.constructor=w),(C||D)&&(x("delete"),x("has"),v&&x("get")),(D||k)&&x(m),g&&$.clear&&delete $.clear}return y[t]=w,r({global:!0,forced:w!=b},y),p(w,t),g||n.setStrong(w,t,v),w}},"6f7c":function(t,e,n){n("a15b"),n("fb6a"),n("accc"),n("f4b3"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("bf19"),function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",a="week",s="month",o="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,s),i=e-r<0,a=t.clone().add(n+(i?-1:1),s);return Number(-(n+(e-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:s,y:c,w:a,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h="en",v={};v[h]=p;var g=function(t){return t instanceof w},m=function(t,e,n){var r;if(!t)return h;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(h=r),r||!n&&h},b=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},$=f;$.l=m,$.i=g,$.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var w=function(){function d(t){this.$L=this.$L||m(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(u);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return $},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return b(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<b(t)},f.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",c)},f.month=function(t){return this.$g(t,"$M",s)},f.day=function(t){return this.$g(t,"$W",i)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var u=this,l=!!$.u(o)||o,d=$.p(t),f=function(t,e){var n=$.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf(i)},p=function(t,e){return $.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},h=this.$W,v=this.$M,g=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case c:return l?f(1,0):f(31,11);case s:return l?f(1,v):f(0,v+1);case a:var b=this.$locale().weekStart||0,w=(h<b?h+7:h)-b;return f(l?g-w:g+(6-w),v);case i:case"date":return p(m+"Hours",0);case r:return p(m+"Minutes",1);case n:return p(m+"Seconds",2);case e:return p(m+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(a,o){var u,l=$.p(a),d="set"+(this.$u?"UTC":""),f=(u={},u[i]=d+"Date",u.date=d+"Date",u[s]=d+"Month",u[c]=d+"FullYear",u[r]=d+"Hours",u[n]=d+"Minutes",u[e]=d+"Seconds",u[t]=d+"Milliseconds",u)[l],p=l===i?this.$D+(o-this.$W):o;if(l===s||l===c){var h=this.clone().set("date",1);h.$d[f](p),h.init(),this.$d=h.set("date",Math.min(this.$D,h.daysInMonth())).toDate()}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[$.p(t)]()},f.add=function(t,o){var u,l=this;t=Number(t);var d=$.p(o),f=function(e){var n=b(l);return $.w(n.date(n.date()+Math.round(e*t)),l)};if(d===s)return this.set(s,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===i)return f(1);if(d===a)return f(7);var p=(u={},u[n]=6e4,u[r]=36e5,u[e]=1e3,u)[d]||1,h=this.$d.getTime()+t*p;return $.w(h,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),i=this.$locale(),a=this.$H,s=this.$m,o=this.$M,c=i.weekdays,u=i.months,d=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].substr(0,a)},f=function(t){return $.s(a%12||12,t,"0")},p=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:d(i.monthsShort,o,u,3),MMMM:u[o]||u(this,n),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,c,2),ddd:d(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:$.s(a,2,"0"),h:f(1),hh:f(2),a:p(a,s,!0),A:p(a,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||h[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,l){var d,f=$.p(u),p=b(t),h=6e4*(p.utcOffset()-this.utcOffset()),v=this-p,g=$.m(this,p);return g=(d={},d[c]=g/12,d[s]=g,d[o]=g/3,d[a]=(v-h)/6048e5,d[i]=(v-h)/864e5,d[r]=v/36e5,d[n]=v/6e4,d[e]=v/1e3,d)[f]||v,l?g:$.a(g)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return v[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=m(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return $.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}();return b.prototype=w.prototype,b.extend=function(t,e){return t(e,w,b),b},b.locale=m,b.isDayjs=g,b.unix=function(t){return b(1e3*t)},b.en=v[h],b.Ls=v,b}))},7037:function(t,e,n){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),t.exports=r},"75fe":function(t,e){},"96f9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{disabled:!1,text:"獲取驗證碼"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩餘 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩餘 "+e+"s",t.text<"剩餘 0s"&&(t.disabled=!1,t.text="重新獲取")}),1e3)}}}};e.default=r},acac:function(t,e,n){"use strict";var r=n("e2cc"),i=n("f183").getWeakData,a=n("825a"),s=n("861d"),o=n("19aa"),c=n("2266"),u=n("b727"),l=n("5135"),d=n("69f3"),f=d.set,p=d.getterFor,h=u.find,v=u.findIndex,g=0,m=function(t){return t.frozen||(t.frozen=new b)},b=function(){this.entries=[]},$=function(t,e){return h(t.entries,(function(t){return t[0]===e}))};b.prototype={get:function(t){var e=$(this,t);if(e)return e[1]},has:function(t){return!!$(this,t)},set:function(t,e){var n=$(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=v(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,u){var d=t((function(t,r){o(t,d,e),f(t,{type:e,id:g++,frozen:void 0}),void 0!=r&&c(r,t[u],t,n)})),h=p(e),v=function(t,e,n){var r=h(t),s=i(a(e),!0);return!0===s?m(r).set(e,n):s[r.id]=n,t};return r(d.prototype,{delete:function(t){var e=h(this);if(!s(t))return!1;var n=i(t);return!0===n?m(e)["delete"](t):n&&l(n,e.id)&&delete n[e.id]},has:function(t){var e=h(this);if(!s(t))return!1;var n=i(t);return!0===n?m(e).has(t):n&&l(n,e.id)}}),r(d.prototype,n?{get:function(t){var e=h(this);if(s(t)){var n=i(t);return!0===n?m(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return v(this,t,e)}}:{add:function(t){return v(this,t,!0)}}),d}}},accc:function(t,e,n){var r=n("23e7"),i=n("64e5");r({target:"Date",proto:!0,forced:Date.prototype.toISOString!==i},{toISOString:i})},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bf19:function(t,e,n){"use strict";var r=n("23e7");r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},dbce:function(t,e,n){n("e439"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0");var r=n("7037");function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function a(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var o=a?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=t[s]}return n["default"]=t,e&&e.set(t,n),n}t.exports=a},f183:function(t,e,n){var r=n("d012"),i=n("861d"),a=n("5135"),s=n("9bf2").f,o=n("90e3"),c=n("bb2f"),u=o("meta"),l=0,d=Object.isExtensible||function(){return!0},f=function(t){s(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},p=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,u)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[u].objectID},h=function(t,e){if(!a(t,u)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[u].weakData},v=function(t){return c&&g.REQUIRED&&d(t)&&!a(t,u)&&f(t),t},g=t.exports={REQUIRED:!1,fastKey:p,getWeakData:h,onFreeze:v};r[u]=!0},f4b3:function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("7b0b"),s=n("c04e"),o=i((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}));r({target:"Date",proto:!0,forced:o},{toJSON:function(t){var e=a(this),n=s(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},fc63:function(t,e,n){"use strict";var r=n("1785"),i=n.n(r);i.a}}]);