(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_invoice_form-index"],{"1f0b":function(t,e,i){"use strict";i.r(e);var a=i("482e"),n=i("421b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("4414");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7dafc8c2",null,!1,a["a"],c);e["default"]=s.exports},3328:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),n={name:"Home",props:{},data:function(){return{top:"",bottom:""}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY,e.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=n},"421b":function(t,e,i){"use strict";i.r(e);var a=i("e62c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"43f0":function(t,e,i){"use strict";i.r(e);var a=i("3328"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},4414:function(t,e,i){"use strict";var a=i("c736"),n=i.n(a);n.a},"482e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"panel"},[1==t.receipt_title_type?i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("發票類型")]),i("v-uni-input",{attrs:{name:"receipt_type",value:t.typeName,disabled:"true"}})],1):i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("發票類型")]),i("v-uni-input",{attrs:{name:"receipt_type",value:t.typeName,disabled:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callType.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("抬頭類型")]),i("v-uni-radio-group",{attrs:{name:"receipt_title_type"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeHeader.apply(void 0,arguments)}}},[i("v-uni-label",[i("v-uni-radio",{attrs:{value:"1",checked:1==t.receipt_title_type}}),i("v-uni-text",[t._v("个人")])],1),i("v-uni-label",[i("v-uni-radio",{attrs:{value:"2",checked:2==t.receipt_title_type}}),i("v-uni-text",[t._v("企业")])],1)],1)],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("發票抬頭")]),i("v-uni-input",{attrs:{name:"receipt_title",value:t.receipt_title,placeholder:1==t.receipt_title_type?"需要開具發票的姓名":"需要開具發票的企業名稱"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"===t.receipt_title_type&&"2"===t.receipt_title_type,expression:"receipt_title_type === '2' && receipt_title_type === '2'"}],staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("稅號")]),i("v-uni-input",{attrs:{name:"duty_paragraph",value:t.duty_paragraph,maxlength:"20",placeholder:"納稅人識別號"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("郵箱")]),i("v-uni-input",{attrs:{name:"email",value:t.email,placeholder:"您的聯繫郵箱"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"==t.receipt_title_type&&"2"==t.receipt_type,expression:"receipt_title_type == '2' && receipt_type == '2'"}],staticClass:"panel"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("開戶銀行")]),i("v-uni-input",{attrs:{name:"bank_name",value:t.bank_name,maxlength:"15",placeholder:"您的開戶銀行"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("銀行賬號")]),i("v-uni-input",{attrs:{name:"bank_code",value:t.bank_code,placeholder:"您的銀行賬號"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("企業地址")]),i("v-uni-input",{attrs:{name:"address",value:t.address,maxlength:"30",placeholder:"您所在的企業地址"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[t._v("企業電話")]),i("v-uni-input",{attrs:{name:"tel",value:t.tel,placeholder:"您的企業電話"}})],1)],1),i("v-uni-checkbox-group",{staticClass:"acea-row row-middle panel",attrs:{name:"isDefault"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDefault.apply(void 0,arguments)}}},[i("v-uni-label",[i("v-uni-checkbox",{attrs:{checked:!!t.is_default}}),i("v-uni-text",[t._v("設置為默認抬頭")])],1)],1),i("v-uni-button",{class:t.loading?"disabled":"",attrs:{"form-type":"submit",disabled:t.loading}},[t._v("保存")])],1),i("v-uni-view",{class:{mask:t.popupType||t.popupTitle}}),i("v-uni-view",{staticClass:"popup",class:{on:t.popupType}},[i("v-uni-view",{staticClass:"title"},[t._v("發票類型選擇"),i("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeType.apply(void 0,arguments)}}})],1),i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-radio-group",{attrs:{name:"invoice-type"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeType.apply(void 0,arguments)}}},t._l(t.invoiceTypeList,(function(e){return i("v-uni-label",{key:e.type,staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"info"},[t._v(t._s(e.info))])],1),i("v-uni-radio",{attrs:{value:e.type,checked:t.receipt_type==e.type}})],1)})),1)],1),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeType.apply(void 0,arguments)}}},[t._v("確定")])],1),i("v-uni-view",{staticClass:"popup",class:{on:t.popupTitle}},[i("v-uni-view",{staticClass:"title"},[t._v("抬頭選擇"),i("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeTitle.apply(void 0,arguments)}}})],1),i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-radio-group",{attrs:{name:"invoice-title"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTitle.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[t._v("西安众邦网络科技有限公司")]),i("v-uni-view",{staticClass:"label"},[t._v("默認")])],1),i("v-uni-view",{staticClass:"type"},[t._v("普通發票")])],1),i("v-uni-radio",{attrs:{value:"西安众邦网络科技有限公司",checked:"西安众邦网络科技有限公司"===t.receipt_title}})],1)],1)],1),i("v-uni-button",[t._v("添加新的抬頭")])],1),i("home")],1)},o=[]},"6b73":function(t,e,i){"use strict";var a=i("eff5"),n=i.n(a);n.a},7410:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-form[data-v-7dafc8c2]{font-size:%?28?%;color:#282828}uni-form uni-input[data-v-7dafc8c2],\nuni-form uni-radio-group[data-v-7dafc8c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}uni-form uni-input[data-v-7dafc8c2]{font-size:%?26?%}uni-form uni-label[data-v-7dafc8c2]{margin-right:%?50?%}uni-form uni-radio[data-v-7dafc8c2]{margin-right:%?8?%}uni-form uni-checkbox-group[data-v-7dafc8c2]{height:%?90?%}uni-form uni-checkbox[data-v-7dafc8c2]{margin-right:%?20?%}uni-form uni-button[data-v-7dafc8c2]{height:%?86?%;border-radius:%?43?%;margin:%?66?% %?30?%;background-color:#e93323;font-size:%?30?%;line-height:%?86?%;color:#fff}.panel[data-v-7dafc8c2]{padding-right:%?30?%;padding-left:%?30?%;background-color:#fff}.panel~.panel[data-v-7dafc8c2]{margin-top:%?14?%}.panel .acea-row[data-v-7dafc8c2]{height:%?90?%}.panel .acea-row~.acea-row[data-v-7dafc8c2]{border-top:%?1?% solid #eee}.input-placeholder[data-v-7dafc8c2]{font-size:%?26?%;color:#bbb}.icon-xiangyou[data-v-7dafc8c2]{margin-left:%?25?%;font-size:%?18?%;color:#bfbfbf}.popup[data-v-7dafc8c2]{position:fixed;bottom:0;left:0;z-index:99;width:100%;padding-bottom:%?100?%;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;background-color:#f5f5f5;overflow:hidden;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s}.popup.on[data-v-7dafc8c2]{-webkit-transform:translateY(0);transform:translateY(0)}.popup .title[data-v-7dafc8c2]{position:relative;height:%?137?%;font-size:%?32?%;line-height:%?137?%;text-align:center}.popup uni-scroll-view[data-v-7dafc8c2]{height:%?466?%;padding-right:%?30?%;padding-left:%?30?%;box-sizing:border-box}.popup uni-label[data-v-7dafc8c2]{padding:%?35?% %?30?%;border-radius:%?16?%;margin-bottom:%?20?%;background-color:#fff}.popup .text[data-v-7dafc8c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;font-size:%?28?%;color:#282828}.popup .info[data-v-7dafc8c2]{margin-top:%?10?%;font-size:%?22?%;color:#909090}.popup .icon-guanbi[data-v-7dafc8c2]{position:absolute;top:50%;right:%?30?%;z-index:2;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?30?%;color:#707070;cursor:pointer}.popup uni-button[data-v-7dafc8c2]{height:%?86?%;border-radius:%?43?%;margin-right:%?30?%;margin-left:%?30?%;background-color:#e93323;font-size:%?30?%;line-height:%?86?%;color:#fff}uni-button[disabled][data-v-7dafc8c2]:not([type]), uni-button[disabled][type=default][data-v-7dafc8c2]{opacity:.5;background-color:#e93323;color:#fff}.popup .text .acea-row[data-v-7dafc8c2]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;max-width:100%}.popup .name[data-v-7dafc8c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?30?%}.popup .label[data-v-7dafc8c2]{width:%?56?%;height:%?28?%;border:%?1?% solid #e93323;margin-left:%?18?%;font-size:%?20?%;line-height:%?26?%;text-align:center;color:#e93323}.popup .type[data-v-7dafc8c2]{width:%?124?%;height:%?42?%;margin-top:%?14?%;background-color:#fcf0e0;font-size:%?24?%;line-height:%?42?%;text-align:center;color:#d67300}.popup .type.special[data-v-7dafc8c2]{background-color:#fde9e7;color:#e93323}",""]),t.exports=e},"743b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},o=[]},"7e7b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-4b22b7b1]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4b22b7b1]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4b22b7b1]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4b22b7b1]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4b22b7b1]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4b22b7b1]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4b22b7b1]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},c736:function(t,e,i){var a=i("7410");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("13977dba",a,!0,{sourceMap:!1,shadowMode:!1})},e62c:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("7db0"),i("4160"),i("a434"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f671")),o=i("8fa6"),c={components:{home:n.default},props:{},data:function(){return{loading:!1,id:"",mer_id:"",receipt_title_type:"1",receipt_type:"1",drawer_phone:"",receipt_title:"",duty_paragraph:"",tel:"",address:"",bank_name:"",bank_code:"",is_default:0,email:"",isDefault:[],typeName:"增值稅電子普通發票",popupType:!1,popupTitle:!1,invoiceTypeList:[{type:"1",name:"增值稅電子普通發票",info:"默認發送至所提供的的電子郵箱"},{type:"2",name:"增值稅專用發票",info:"紙質發票開出後將以郵寄形式發出"}],addInvoice:[]}},onLoad:function(t){t.id&&(this.id=t.id,this.getInvoiceDetail()),t.mer_id&&(this.mer_id=t.mer_id)},methods:{getInvoiceDetail:function(){var t=this;uni.showLoading({title:"加載中"}),(0,o.invoiceDetail)(this.id).then((function(e){uni.hideLoading(),t.receipt_title_type=e.data.receipt_title_type,t.receipt_type=e.data.receipt_type,t.receipt_title=e.data.receipt_title,t.typeName=1==t.receipt_type?"增值稅電子普通發票":"增值稅專用發票",t.email=e.data.email,t.duty_paragraph=e.data.duty_paragraph,t.bank_name=e.data.bank_name,t.bank_code=e.data.bank_code,t.address=e.data.address,t.tel=e.data.tel,t.is_default=e.data.is_default})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e})}))},formSubmit:function(t){var e=this,i=t.detail.value;if("2"===i.receipt_title_type){if(!i.receipt_title)return this.$util.Tips({title:"請輸入需要開具發票的企業名稱"});if(!i.duty_paragraph)return this.$util.Tips({title:"請輸入納稅人識別號"});if(2===this.receipt_type){if(!/^(\d{9}|\d{14}|\d{18})$/.test(i.bank_code))return this.$util.Tips({title:"請輸入正確的銀號賬號"});if(!/(^(\d{3,4})?\d{7,8})$|(^1(3|4|5|7|8|9|6)\d{9}$)/i.test(i.tel))return this.$util.Tips({title:"請輸入正確的電話號碼"})}}else if(!i.receipt_title)return this.$util.Tips({title:"請輸入需要開具發票的姓名"});if(i.email&&!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(i.email))return this.$util.Tips({title:"請輸入正確的郵箱"});this.loading=!0,i.receipt_type=this.receipt_type,i.is_default=this.is_default,uni.showLoading({title:"保存中",mask:!0}),this.id?(0,o.invoiceUpdate)(this.id,i).then((function(t){uni.hideLoading(),e.$util.Tips({title:"添加成功",icon:"success"}),setTimeout((function(){return history.back()}),1e3)})).catch((function(t){uni.hideLoading(),e.$util.Tips({title:t})})):(0,o.invoiceSave)(i).then((function(t){var a=e;if(uni.hideLoading(),a.$util.Tips({title:"添加成功",icon:"success"}),a.mer_id){i.mer_id=a.mer_id,uni.getStorage({key:"invoice_Data",success:function(t){a.addInvoice=t.data}});var n=[i];a.addInvoice.length&&a.addInvoice.forEach((function(t,e){t.mer_id==a.mer_id&&a.addInvoice.splice(e,1)})),n=a.addInvoice.length&&a.addInvoice[0]["mer_id"]?n.concat(a.addInvoice):n,uni.setStorage({key:"invoice_Data",data:n,success:function(){}})}setTimeout((function(){return history.back()}),1e3)})).catch((function(t){uni.hideLoading(),e.$util.Tips({title:t})}))},callType:function(){this.popupType=!0},changeType:function(t){var e=this;this.receipt_type=t.detail.value,this.typeName=this.invoiceTypeList.find((function(t){return t.type===e.receipt_type})).name},closeType:function(){this.popupType=!1},callTitle:function(){this.popupTitle=!0},changeTitle:function(t){this.receipt_title=t.detail.value},closeTitle:function(){this.popupTitle=!1},changeHeader:function(t){this.receipt_title_type=t.detail.value,1==t.detail.value&&(this.receipt_type=1,this.typeName="增值稅電子普通發票")},changeDefault:function(t){this.is_default=t.detail.value.length?1:0}}};e.default=c},eff5:function(t,e,i){var a=i("7e7b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c1c5ec06",a,!0,{sourceMap:!1,shadowMode:!1})},f671:function(t,e,i){"use strict";i.r(e);var a=i("743b"),n=i("43f0");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("6b73");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4b22b7b1",null,!1,a["a"],c);e["default"]=s.exports}}]);