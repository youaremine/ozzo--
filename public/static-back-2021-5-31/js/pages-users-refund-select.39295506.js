(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-refund-select"],{"08c5":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"refund-select"},[i("v-uni-view",{staticClass:"select-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage(1)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"/static/images/select01.png",mode:""}})],1),i("v-uni-view",{staticClass:"right-wrapper"},[i("v-uni-view",{staticClass:"title"},[t._v("我要退款(无需退货)")]),i("v-uni-view",{staticClass:"txt"},[t._v("未收到货，或与卖家协商同意不退货只退款")])],1),i("v-uni-view",{staticClass:"iconfont icon-xiangyou"})],1),i("v-uni-view",{staticClass:"select-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage(2)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"/static/images/select02.png",mode:""}})],1),i("v-uni-view",{staticClass:"right-wrapper"},[i("v-uni-view",{staticClass:"title"},[t._v("我要退货退款")]),i("v-uni-view",{staticClass:"txt"},[t._v("已收到货，需要退还收到的货物")])],1),i("v-uni-view",{staticClass:"iconfont icon-xiangyou"})],1)],1)},s=[]},"0e19":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.refund-select .select-item[data-v-1f25ae38]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?25?% 0;background-color:#fff;border-bottom:1px solid #f0f0f0}.refund-select .left[data-v-1f25ae38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?105?%}.refund-select .left uni-image[data-v-1f25ae38]{width:%?50?%;height:%?46?%}.refund-select .right-wrapper[data-v-1f25ae38]{position:relative}.refund-select .right-wrapper .title[data-v-1f25ae38]{font-size:%?26?%;color:#282828}.refund-select .right-wrapper .txt[data-v-1f25ae38]{margin-top:%?10?%;color:#999;font-size:%?22?%}.refund-select .icon-xiangyou[data-v-1f25ae38]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#aaa;font-size:%?30?%}',""]),t.exports=e},"285a":function(t,e,i){var n=i("0e19");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3ecbd42a",n,!0,{sourceMap:!1,shadowMode:!1})},"448a":function(t,e,i){"use strict";var n=i("285a"),a=i.n(n);a.a},8700:function(t,e,i){"use strict";i.r(e);var n=i("e497"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},b3d2:function(t,e,i){"use strict";i.r(e);var n=i("08c5"),a=i("8700");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("448a");var r,c=i("f0c5"),o=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1f25ae38",null,!1,n["a"],r);e["default"]=o.exports},e497:function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{order_id:"",type:0,ids:""}},onLoad:function(t){this.order_id=t.order_id,this.type=t.type,this.ids=t.ids||""},methods:{goPage:function(t){1==this.type&&this.ids?uni.navigateTo({url:"/pages/users/refund/confirm?ids=".concat(this.ids,"&refund_type=").concat(t,"&type=").concat(this.type,"&order_id=").concat(this.order_id)}):uni.navigateTo({url:"/pages/users/refund/index?order_id=".concat(this.order_id,"&refund_type=").concat(t,"&type=").concat(this.type)})}}};e.default=n}}]);