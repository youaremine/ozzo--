(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-feedback-index"],{"20b3":function(t,e,i){"use strict";i.r(e);var a=i("585c"),n=i("46cf");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("2a6c");var c,s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"66d1985f",null,!1,a["a"],c);e["default"]=r.exports},"2a6c":function(t,e,i){"use strict";var a=i("5102"),n=i.n(a);n.a},"46cf":function(t,e,i){"use strict";i.r(e);var a=i("61ac"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},5102:function(t,e,i){var a=i("e47b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("589a69ca",a,!0,{sourceMap:!1,shadowMode:!1})},"585c":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"feedback-container"},[i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[t._v("*")]),t._v("反饋類型")],1),t.tabList.length>0?i("v-uni-view",{staticClass:"tab-box"},[t._l(t.tabList,(function(e,a){return[i("v-uni-view",{key:a,staticClass:"tab-item",class:{active:a==t.tabKey},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bindTab(e,a)}}},[t._v(t._s(e.cate_name))])]}))],2):t._e(),t.qsArray.length>0?i("v-uni-view",{staticClass:"picker"},[i("v-uni-picker",{attrs:{value:t.qsIndex,range:t.qsArray,"range-key":"cate_name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker-box"},[t._v(t._s(t.qsArray[t.qsIndex]["cate_name"])),i("v-uni-text",{staticClass:"iconfont icon-xiangxia"})],1)],1)],1):t._e()],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[t._v("*")]),t._v("反饋內容")],1),i("v-uni-view",{staticClass:"textarea-box"},[i("v-uni-textarea",{attrs:{maxlength:"200",placeholder:"請輸入文字"},model:{value:t.con,callback:function(e){t.con=e},expression:"con"}}),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.con.length)+"/200字")])],1)],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[t._v("*")]),t._v("圖片上傳"),i("v-uni-text",{staticClass:"des"},[t._v("(上傳聊天截圖或與問題描述相關的圖片)")])],1),i("v-uni-view",{staticClass:"upload-img"},[t._l(t.uploadImg,(function(e,a){return t.uploadImg.length>0?i("v-uni-view",{staticClass:"img-wrapper"},[i("v-uni-image",{attrs:{src:e}}),i("v-uni-view",{staticClass:"iconfont icon-guanbi1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImg(a)}}})],1):t._e()})),t.isUpload?i("v-uni-view",{staticClass:"add-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadpic.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-xiangji"})],1):t._e()],2)],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[t._v("*")]),t._v("聯繫方式")],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{type:"text",placeholder:"請填寫您的姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-uni-input",{attrs:{type:"text",placeholder:"請填寫您的電話或郵箱"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"sub-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindSub.apply(void 0,arguments)}}},[t._v("提交反饋")]),i("v-uni-navigator",{staticClass:"link",attrs:{url:"/pages/users/feedback/list","hover-class":"none"}},[t._v("反饋記錄"),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1)],1),t.isShowbox?i("v-uni-view",{staticClass:"success"},[i("v-uni-view",{staticClass:"bg"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-image",{attrs:{src:"/static/images/success.png",mode:""}}),i("v-uni-view",{staticClass:"text"},[t._v("反饋提交成功")]),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("我知道了")])],1)],1):t._e()],1)},o=[]},"61ac":function(t,e,i){"use strict";i("4160"),i("a434"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("bacc"),n=i("9d9f"),o={data:function(){return{tabList:[],tabKey:0,qsArray:[],qsIndex:0,con:"",uploadImg:[],name:"",phone:"",isShowbox:!1,isUpload:!0}},watch:{uploadImg:function(t,e){this.isUpload=t.length<6}},onLoad:function(){var t=this;(0,a.feedbackType)().then((function(e){var i=e.data;t.tabList=i,t.getFeedBack(i)}))},methods:{getFeedBack:function(t){var e=this;t.forEach((function(i,a){if(i.children)return e.tabKey=a,void(e.qsArray=t[e.tabKey].children)}))},bindPickerChange:function(t){this.qsIndex=t.target.value},bindTab:function(t,e){this.tabKey=e,this.qsIndex=0,this.qsArray=this.tabList[this.tabKey].children?this.tabList[this.tabKey].children:[]},uploadpic:function(){var t=this;t.$util.uploadImageOne("upload/image",(function(e){t.uploadImg.push(e.data.path),t.$set(t,"uploadImg",t.uploadImg)}))},close:function(){this.con="",this.uploadImg=[],this.name="",this.phone="",this.isShowbox=!1},deleteImg:function(t){this.uploadImg.splice(t,1)},bindSub:function(){var t=this;this.con?0!=this.uploadImg.length?this.name?(0,n.isEmailAvailable)(this.phone)||(0,n.checkPhone)(this.phone)?(0,a.feedback)({type:this.qsArray[this.qsIndex].feedback_category_id,content:this.con,images:this.uploadImg,realname:this.name,contact:this.phone}).then((function(e){t.isShowbox=!0})).catch((function(e){t.$util.Tips({title:e})})):uni.showToast({title:"請輸入電話或者郵箱",icon:"none"}):uni.showToast({title:"請輸入姓名",icon:"none"}):uni.showToast({title:"請上傳截圖",icon:"none"}):uni.showToast({title:"請輸入反饋內容",icon:"none"})}}};e.default=o},"9d9f":function(t,e,i){"use strict";function a(t){var e=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!e.test(t)}function n(t){var e=/^(4|5|6|7|8|9)\d{7}$/;return!!e.test(t)}function o(t){var e=/^1(3|4|5|6|7|8|9)\d{9}$/;return!!e.test(t)}function c(t){var e=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return!!e.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.isMoney=a,e.checkPhone=n,e.checkZGPhone=o,e.isEmailAvailable=c},e47b:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-66d1985f]{width:100%;background-color:#fff}.feedback-container[data-v-66d1985f]{padding:%?30?%}.feedback-container .item-box[data-v-66d1985f]{margin-bottom:%?40?%}.feedback-container .item-box .title-box[data-v-66d1985f]{font-size:%?28?%;color:#222}.feedback-container .item-box .title-box uni-text[data-v-66d1985f]{margin-right:%?10?%;color:#e93323}.feedback-container .item-box .title-box .des[data-v-66d1985f]{margin-left:%?10?%;font-size:%?22?%;color:#999}.feedback-container .item-box .tab-box[data-v-66d1985f]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.feedback-container .item-box .tab-box .tab-item[data-v-66d1985f]{overflow:hidden;display:-webkit-box;line-height:28px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?200?%;height:%?66?%;margin-right:%?20?%;margin-bottom:%?20?%;border:1px solid #bfbfbf;border-radius:33px;font-size:%?28?%;text-align:center}.feedback-container .item-box .tab-box .tab-item.active[data-v-66d1985f]{background:#e93323;color:#fff;border-color:#e93323}.feedback-container .item-box .picker[data-v-66d1985f]{margin-top:%?30?%}.feedback-container .item-box .picker .picker-box[data-v-66d1985f]{position:relative;width:100%;height:%?90?%;line-height:%?90?%;padding:0 %?30?%;background-color:#f5f5f5;border-radius:%?10?%}.feedback-container .item-box .picker .picker-box .iconfont[data-v-66d1985f]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?22?%;color:#282828}.feedback-container .item-box .textarea-box[data-v-66d1985f]{background:#f5f5f5;border-radius:%?10?%}.feedback-container .item-box .textarea-box uni-textarea[data-v-66d1985f]{width:100%;height:%?300?%;margin-top:%?30?%;padding:%?20?% %?20?% 0;font-size:%?28?%;line-height:1.5}.feedback-container .item-box .textarea-box .num[data-v-66d1985f]{color:#999;text-align:right;padding:%?20?%}.feedback-container .item-box .upload-img[data-v-66d1985f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.feedback-container .item-box .upload-img .img-wrapper[data-v-66d1985f]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:%?30?% %?90?% %?20?% 0}.feedback-container .item-box .upload-img .img-wrapper uni-image[data-v-66d1985f]{width:%?158?%;height:%?158?%}.feedback-container .item-box .upload-img .img-wrapper .iconfont[data-v-66d1985f]{position:absolute;right:%?-15?%;top:%?-20?%;font-size:%?40?%;color:#e93323}.feedback-container .item-box .upload-img .img-wrapper[data-v-66d1985f]:nth-child(3n){margin-right:0}.feedback-container .item-box .upload-img .add-img[data-v-66d1985f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?158?%;height:%?158?%;background:#f5f5f5;border-radius:%?10?%;margin-top:%?20?%;margin-bottom:%?20?%}.feedback-container .item-box .upload-img .add-img .iconfont[data-v-66d1985f]{color:#b5b5b5;font-size:%?55?%}.feedback-container .item-box .input-box uni-input[data-v-66d1985f]{display:block;width:100%;height:%?90?%;margin-top:%?20?%;padding-left:%?20?%;background:#f5f5f5;border-radius:%?10?%;font-size:%?28?%}.feedback-container .item-box .sub-btn[data-v-66d1985f]{height:%?90?%;line-height:%?90?%;background:#e93323;color:#fff;font-size:%?32?%;text-align:center;border-radius:%?45?%}.feedback-container .item-box .link[data-v-66d1985f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?20?%}.feedback-container .item-box .link .iconfont[data-v-66d1985f]{margin-top:%?6?%;font-size:%?22?%}.feedback-container .success[data-v-66d1985f]{z-index:10;position:fixed;left:0;top:0;width:100%;height:100%}.feedback-container .success .bg[data-v-66d1985f]{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.feedback-container .success .con[data-v-66d1985f]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?500?%;height:%?540?%;background:#fff;border-radius:%?10?%;font-size:%?34?%;color:#282828}.feedback-container .success .con uni-image[data-v-66d1985f]{width:%?149?%;height:%?230?%}.feedback-container .success .con .btn[data-v-66d1985f]{width:%?340?%;height:%?90?%;line-height:%?90?%;margin-top:%?38?%;text-align:center;color:#fff;background:-webkit-linear-gradient(right,#f96e29,#f62c2c);background:linear-gradient(-90deg,#f96e29,#f62c2c);border-radius:%?45?%}body.?%PAGE?%[data-v-66d1985f]{background-color:#fff}',""]),t.exports=e}}]);