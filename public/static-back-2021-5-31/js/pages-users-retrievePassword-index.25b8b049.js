(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-retrievePassword-index"],{"10d1":function(t,e,n){"use strict";var r,i=n("da84"),a=n("e2cc"),o=n("f183"),c=n("6d61"),s=n("acac"),u=n("861d"),l=n("69f3").enforce,d=n("7f9a"),f=!i.ActiveXObject&&"ActiveXObject"in i,p=Object.isExtensible,v=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},h=t.exports=c("WeakMap",v,s);if(d&&f){r=s.getConstructor(v,"WeakMap",!0),o.REQUIRED=!0;var b=h.prototype,g=b["delete"],w=b.has,m=b.get,y=b.set;a(b,{delete:function(t){if(u(t)&&!p(t)){var e=l(this);return e.frozen||(e.frozen=new r),g.call(this,t)||e.frozen["delete"](t)}return g.call(this,t)},has:function(t){if(u(t)&&!p(t)){var e=l(this);return e.frozen||(e.frozen=new r),w.call(this,t)||e.frozen.has(t)}return w.call(this,t)},get:function(t){if(u(t)&&!p(t)){var e=l(this);return e.frozen||(e.frozen=new r),w.call(this,t)?m.call(this,t):e.frozen.get(t)}return m.call(this,t)},set:function(t,e){if(u(t)&&!p(t)){var n=l(this);n.frozen||(n.frozen=new r),w.call(this,t)?y.call(this,t,e):n.frozen.set(t,e)}else y.call(this,t,e);return this}})}},"1c81":function(t,e,n){var r=n("8ad1");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("1bd0c0fa",r,!0,{sourceMap:!1,shadowMode:!1})},"1f3a":function(t,e,n){"use strict";n.r(e);var r=n("e41b"),i=n("e8b5f");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7879");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"771d8274",null,!1,r["a"],o);e["default"]=s.exports},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("f183"),s=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),p=n("d44e"),v=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),g=h?"set":"add",w=i[t],m=w&&w.prototype,y=w,x={},_=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof w||!(b||m.forEach&&!d((function(){(new w).entries().next()})))))y=n.getConstructor(e,t,h,g),c.REQUIRED=!0;else if(a(t,!0)){var k=new y,C=k[g](b?{}:-0,1)!=k,$=d((function(){k.has(1)})),z=f((function(t){new w(t)})),E=!b&&d((function(){var t=new w,e=5;while(e--)t[g](e,e);return!t.has(-0)}));z||(y=e((function(e,n){u(e,y,t);var r=v(new w,e,y);return void 0!=n&&s(n,r[g],r,h),r})),y.prototype=m,m.constructor=y),($||E)&&(_("delete"),_("has"),h&&_("get")),(E||C)&&_(g),b&&m.clear&&delete m.clear}return x[t]=y,r({global:!0,forced:y!=w},x),p(y,t),b||n.setStrong(y,t,h),y}},7037:function(t,e,n){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),t.exports=r},7879:function(t,e,n){"use strict";var r=n("1c81"),i=n.n(r);i.a},"7d70":function(t,e,n){"use strict";var r=n("dbce"),i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("baa9")),c=n("bacc"),s=(n("b83d"),r(n("9d9f")),getApp()),u={name:"RetrievePassword",mixins:[o.default],data:function(){return{account:"",password:"",confirm_pwd:"",captcha:"",codeKey:"",codeUrl:"",codeVal:"",isShowCode:!1,logoUrl:""}},onReady:function(){var t=this;uni.$on("update",(function(e){t.logoUrl=e.login_logo}))},mounted:function(){var t=this;this.$nextTick((function(){t.logoUrl=s.globalData.login_logo}))},methods:{back:function(){uni.navigateBack()},again:function(){this.codeUrl=VUE_APP_API_URL+"/captcha?"+this.keyCode+Date.parse(new Date)},code:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"請填寫手機號碼"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的手機號碼"}));case 5:return e.next=7,(0,c.registerVerify)({phone:n.account,type:"change_pwd",key:n.codeKey,code:n.codeVal}).then((function(t){n.$util.Tips({title:t.message}),n.sendCode()})).catch((function(t){n.getcaptcha(),n.$util.Tips({title:t})}));case 7:case"end":return e.stop()}}),e)})))()},getcaptcha:function(){var t=this;(0,c.getCaptcha)().then((function(e){t.codeUrl=e.data.captcha,t.codeVal=e.data.code,t.codeKey=e.data.key})),t.isShowCode=!0},registerReset:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"請填寫手機號碼"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"請輸入正確的手機號碼"}));case 5:if("123456"!=n.password){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"您輸入的密碼過於簡單"}));case 7:if(n.password==n.confirm_pwd){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"兩次密碼不一致"}));case 9:if(n.captcha){e.next=11;break}return e.abrupt("return",n.$util.Tips({title:"請填寫驗證碼"}));case 11:(0,c.registerForget)({phone:n.account,sms_code:n.captcha,pwd:n.password,confirm_pwd:n.confirm_pwd}).then((function(t){n.$util.Tips({title:t.msg},{tab:3})})).catch((function(t){n.$util.Tips({title:t})}));case 12:case"end":return e.stop()}}),e)})))()}}};e.default=u},"8ad1":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".code img[data-v-771d8274]{width:100%;height:100%}",""]),t.exports=e},"9d9f":function(t,e,n){"use strict";function r(t){var e=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!e.test(t)}function i(t){var e=/^1(3|4|5|6|7|8|9)\d{9}$/;return!!e.test(t)}function a(t){var e=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return!!e.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.isMoney=r,e.checkPhone=i,e.isEmailAvailable=a},acac:function(t,e,n){"use strict";var r=n("e2cc"),i=n("f183").getWeakData,a=n("825a"),o=n("861d"),c=n("19aa"),s=n("2266"),u=n("b727"),l=n("5135"),d=n("69f3"),f=d.set,p=d.getterFor,v=u.find,h=u.findIndex,b=0,g=function(t){return t.frozen||(t.frozen=new w)},w=function(){this.entries=[]},m=function(t,e){return v(t.entries,(function(t){return t[0]===e}))};w.prototype={get:function(t){var e=m(this,t);if(e)return e[1]},has:function(t){return!!m(this,t)},set:function(t,e){var n=m(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=h(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,u){var d=t((function(t,r){c(t,d,e),f(t,{type:e,id:b++,frozen:void 0}),void 0!=r&&s(r,t[u],t,n)})),v=p(e),h=function(t,e,n){var r=v(t),o=i(a(e),!0);return!0===o?g(r).set(e,n):o[r.id]=n,t};return r(d.prototype,{delete:function(t){var e=v(this);if(!o(t))return!1;var n=i(t);return!0===n?g(e)["delete"](t):n&&l(n,e.id)&&delete n[e.id]},has:function(t){var e=v(this);if(!o(t))return!1;var n=i(t);return!0===n?g(e).has(t):n&&l(n,e.id)}}),r(d.prototype,n?{get:function(t){var e=v(this);if(o(t)){var n=i(t);return!0===n?g(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return h(this,t,e)}}:{add:function(t){return h(this,t,!0)}}),d}}},b83d:function(t,e){},baa9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{disabled:!1,text:"獲取驗證碼"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩餘 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩餘 "+e+"s",t.text<"剩餘 0s"&&(t.disabled=!1,t.text="重新獲取")}),1e3)}}}};e.default=r},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},dbce:function(t,e,n){n("e439"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0");var r=n("7037");function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function a(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var c=a?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=t[o]}return n["default"]=t,e&&e.set(t,n),n}t.exports=a},e41b:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register absolute"},[n("div",{staticClass:"shading"},[n("div",{staticClass:"pictrue acea-row row-center-wrapper"},[t.logoUrl?n("v-uni-image",{attrs:{src:t.logoUrl}}):n("v-uni-image",{attrs:{src:"/static/images/logo2.png"}})],1)]),n("div",{staticClass:"whiteBg"},[n("div",{staticClass:"title"},[t._v("忘記密碼")]),n("div",{staticClass:"list"},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"輸入手機號碼",autocomplete:"off"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("v-uni-input",{staticStyle:{height:"0",opacity:"0"},attrs:{type:"text"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{attrs:{type:"password",placeholder:"填寫您的新密碼",autocomplete:"off"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{attrs:{type:"password",placeholder:"再次輸入密碼",autocomplete:"off"},model:{value:t.confirm_pwd,callback:function(e){t.confirm_pwd=e},expression:"confirm_pwd"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填寫驗證碼",autocomplete:"off"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)]),t.isShowCode?n("div",{staticClass:"item"},[n("div",{staticClass:"align-left"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填寫驗證碼"},model:{value:t.codeVal,callback:function(e){t.codeVal=e},expression:"codeVal"}}),n("div",{staticClass:"code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.again.apply(void 0,arguments)}}},[n("img",{attrs:{src:t.codeUrl}})])],1)]):t._e()]),n("div",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerReset.apply(void 0,arguments)}}},[t._v("確認")]),n("div",{staticClass:"tip"},[n("span",{staticClass:"font-color-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("立即登錄")])])]),n("div",{staticClass:"bottom"})])},a=[]},e8b5f:function(t,e,n){"use strict";n.r(e);var r=n("7d70"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},f183:function(t,e,n){var r=n("d012"),i=n("861d"),a=n("5135"),o=n("9bf2").f,c=n("90e3"),s=n("bb2f"),u=c("meta"),l=0,d=Object.isExtensible||function(){return!0},f=function(t){o(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},p=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,u)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[u].objectID},v=function(t,e){if(!a(t,u)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[u].weakData},h=function(t){return s&&b.REQUIRED&&d(t)&&!a(t,u)&&f(t),t},b=t.exports={REQUIRED:!1,fastKey:p,getWeakData:v,onFreeze:h};r[u]=!0}}]);