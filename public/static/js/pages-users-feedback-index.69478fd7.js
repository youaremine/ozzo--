(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-feedback-index"],{"12df":function(e,t,i){"use strict";function a(e){var t=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!t.test(e)}function n(e){var t=/^1(3|4|5|6|7|8|9)\d{9}$/;return!!t.test(e)}function o(e){var t=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return!!t.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isMoney=a,t.checkPhone=n,t.isEmailAvailable=o},"36e7":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-5b9e1586]{width:100%;background-color:#fff}.feedback-container[data-v-5b9e1586]{padding:%?30?%}.feedback-container .item-box[data-v-5b9e1586]{margin-bottom:%?40?%}.feedback-container .item-box .title-box[data-v-5b9e1586]{font-size:%?28?%;color:#222}.feedback-container .item-box .title-box uni-text[data-v-5b9e1586]{margin-right:%?10?%;color:#e93323}.feedback-container .item-box .title-box .des[data-v-5b9e1586]{margin-left:%?10?%;font-size:%?22?%;color:#999}.feedback-container .item-box .tab-box[data-v-5b9e1586]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.feedback-container .item-box .tab-box .tab-item[data-v-5b9e1586]{overflow:hidden;display:-webkit-box;line-height:28px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?200?%;height:%?66?%;margin-right:%?20?%;margin-bottom:%?20?%;border:1px solid #bfbfbf;-webkit-border-radius:33px;border-radius:33px;font-size:%?28?%;text-align:center}.feedback-container .item-box .tab-box .tab-item.active[data-v-5b9e1586]{background:#e93323;color:#fff;border-color:#e93323}.feedback-container .item-box .picker[data-v-5b9e1586]{margin-top:%?30?%}.feedback-container .item-box .picker .picker-box[data-v-5b9e1586]{position:relative;width:100%;height:%?90?%;line-height:%?90?%;padding:0 %?30?%;background-color:#f5f5f5;-webkit-border-radius:%?10?%;border-radius:%?10?%}.feedback-container .item-box .picker .picker-box .iconfont[data-v-5b9e1586]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?22?%;color:#282828}.feedback-container .item-box .textarea-box[data-v-5b9e1586]{background:#f5f5f5;-webkit-border-radius:%?10?%;border-radius:%?10?%}.feedback-container .item-box .textarea-box uni-textarea[data-v-5b9e1586]{width:100%;height:%?300?%;margin-top:%?30?%;padding:%?20?% %?20?% 0;font-size:%?28?%;line-height:1.5}.feedback-container .item-box .textarea-box .num[data-v-5b9e1586]{color:#999;text-align:right;padding:%?20?%}.feedback-container .item-box .upload-img[data-v-5b9e1586]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.feedback-container .item-box .upload-img .img-wrapper[data-v-5b9e1586]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:%?30?% %?90?% %?20?% 0}.feedback-container .item-box .upload-img .img-wrapper uni-image[data-v-5b9e1586]{width:%?158?%;height:%?158?%}.feedback-container .item-box .upload-img .img-wrapper .iconfont[data-v-5b9e1586]{position:absolute;right:%?-15?%;top:%?-20?%;font-size:%?40?%;color:#e93323}.feedback-container .item-box .upload-img .img-wrapper[data-v-5b9e1586]:nth-child(3n){margin-right:0}.feedback-container .item-box .upload-img .add-img[data-v-5b9e1586]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?158?%;height:%?158?%;background:#f5f5f5;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-top:%?20?%;margin-bottom:%?20?%}.feedback-container .item-box .upload-img .add-img .iconfont[data-v-5b9e1586]{color:#b5b5b5;font-size:%?55?%}.feedback-container .item-box .input-box uni-input[data-v-5b9e1586]{display:block;width:100%;height:%?90?%;margin-top:%?20?%;padding-left:%?20?%;background:#f5f5f5;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?28?%}.feedback-container .item-box .sub-btn[data-v-5b9e1586]{height:%?90?%;line-height:%?90?%;background:#e93323;color:#fff;font-size:%?32?%;text-align:center;-webkit-border-radius:%?45?%;border-radius:%?45?%}.feedback-container .item-box .link[data-v-5b9e1586]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?20?%}.feedback-container .item-box .link .iconfont[data-v-5b9e1586]{margin-top:%?6?%;font-size:%?22?%}.feedback-container .success[data-v-5b9e1586]{z-index:10;position:fixed;left:0;top:0;width:100%;height:100%}.feedback-container .success .bg[data-v-5b9e1586]{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.feedback-container .success .con[data-v-5b9e1586]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?500?%;height:%?540?%;background:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?34?%;color:#282828}.feedback-container .success .con uni-image[data-v-5b9e1586]{width:%?149?%;height:%?230?%}.feedback-container .success .con .btn[data-v-5b9e1586]{width:%?340?%;height:%?90?%;line-height:%?90?%;margin-top:%?38?%;text-align:center;color:#fff;background:-webkit-gradient(linear,right top,left top,from(#f96e29),to(#f62c2c));background:-webkit-linear-gradient(right,#f96e29,#f62c2c);background:linear-gradient(-90deg,#f96e29,#f62c2c);-webkit-border-radius:%?45?%;border-radius:%?45?%}body.?%PAGE?%[data-v-5b9e1586]{background-color:#fff}',""]),e.exports=t},"38dd":function(e,t,i){"use strict";i.r(t);var a=i("63a0"),n=i("735c");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("ec74");var c,s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5b9e1586",null,!1,a["a"],c);t["default"]=r.exports},"63a0":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"feedback-container"},[i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[e._v("*")]),e._v("反馈类型")],1),e.tabList.length>0?i("v-uni-view",{staticClass:"tab-box"},[e._l(e.tabList,(function(t,a){return[i("v-uni-view",{key:a,staticClass:"tab-item",class:{active:a==e.tabKey},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.bindTab(t,a)}}},[e._v(e._s(t.cate_name))])]}))],2):e._e(),e.qsArray.length>0?i("v-uni-view",{staticClass:"picker"},[i("v-uni-picker",{attrs:{value:e.qsIndex,range:e.qsArray,"range-key":"cate_name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker-box"},[e._v(e._s(e.qsArray[e.qsIndex]["cate_name"])),i("v-uni-text",{staticClass:"iconfont icon-xiangxia"})],1)],1)],1):e._e()],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[e._v("*")]),e._v("反馈内容")],1),i("v-uni-view",{staticClass:"textarea-box"},[i("v-uni-textarea",{attrs:{maxlength:"200",placeholder:"请输入文字"},model:{value:e.con,callback:function(t){e.con=t},expression:"con"}}),i("v-uni-view",{staticClass:"num"},[e._v(e._s(e.con.length)+"/200字")])],1)],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[e._v("*")]),e._v("图片上传"),i("v-uni-text",{staticClass:"des"},[e._v("(上传聊天截图或与问题描述相关的图片)")])],1),i("v-uni-view",{staticClass:"upload-img"},[e._l(e.uploadImg,(function(t,a){return e.uploadImg.length>0?i("v-uni-view",{staticClass:"img-wrapper"},[i("v-uni-image",{attrs:{src:t}}),i("v-uni-view",{staticClass:"iconfont icon-guanbi1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImg(a)}}})],1):e._e()})),e.isUpload?i("v-uni-view",{staticClass:"add-img",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadpic.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-xiangji"})],1):e._e()],2)],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-text",[e._v("*")]),e._v("联系方式")],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请填写您的姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("v-uni-input",{attrs:{type:"text",placeholder:"请填写您的电话或邮箱"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1),i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"sub-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindSub.apply(void 0,arguments)}}},[e._v("提交反馈")]),i("v-uni-navigator",{staticClass:"link",attrs:{url:"/pages/users/feedback/list","hover-class":"none"}},[e._v("反馈记录"),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1)],1),e.isShowbox?i("v-uni-view",{staticClass:"success"},[i("v-uni-view",{staticClass:"bg"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-image",{attrs:{src:"/static/images/success.png",mode:""}}),i("v-uni-view",{staticClass:"text"},[e._v("反馈提交成功")]),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[e._v("我知道了")])],1)],1):e._e()],1)},o=[]},"735c":function(e,t,i){"use strict";i.r(t);var a=i("e6d0"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},e45e:function(e,t,i){var a=i("36e7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0bfcb3ec",a,!0,{sourceMap:!1,shadowMode:!1})},e6d0:function(e,t,i){"use strict";i("4160"),i("a434"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("5e22"),n=i("12df"),o={data:function(){return{tabList:[],tabKey:0,qsArray:[],qsIndex:0,con:"",uploadImg:[],name:"",phone:"",isShowbox:!1,isUpload:!0}},watch:{uploadImg:function(e,t){this.isUpload=e.length<6}},onLoad:function(){var e=this;(0,a.feedbackType)().then((function(t){var i=t.data;e.tabList=i,e.getFeedBack(i)}))},methods:{getFeedBack:function(e){var t=this;e.forEach((function(i,a){if(i.children)return t.tabKey=a,void(t.qsArray=e[t.tabKey].children)}))},bindPickerChange:function(e){this.qsIndex=e.target.value},bindTab:function(e,t){this.tabKey=t,this.qsIndex=0,this.qsArray=this.tabList[this.tabKey].children?this.tabList[this.tabKey].children:[]},uploadpic:function(){var e=this;e.$util.uploadImageOne("upload/image",(function(t){e.uploadImg.push(t.data.path),e.$set(e,"uploadImg",e.uploadImg)}))},close:function(){this.con="",this.uploadImg=[],this.name="",this.phone="",this.isShowbox=!1},deleteImg:function(e){this.uploadImg.splice(e,1)},bindSub:function(){var e=this;this.con?0!=this.uploadImg.length?this.name?(0,n.isEmailAvailable)(this.phone)||(0,n.checkPhone)(this.phone)?(0,a.feedback)({type:this.qsArray[this.qsIndex].feedback_category_id,content:this.con,images:this.uploadImg,realname:this.name,contact:this.phone}).then((function(t){e.isShowbox=!0})).catch((function(t){e.$util.Tips({title:t})})):uni.showToast({title:"请输入电话或者邮箱",icon:"none"}):uni.showToast({title:"请输入姓名",icon:"none"}):uni.showToast({title:"请上传截图",icon:"none"}):uni.showToast({title:"请输入反馈内容",icon:"none"})}}};t.default=o},ec74:function(e,t,i){"use strict";var a=i("e45e"),n=i.n(a);n.a}}]);