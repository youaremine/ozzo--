(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-915331e2"],{"0d18":function(t,e,n){},"3a7e":function(t,e,n){"use strict";var r=n("0d18"),o=n.n(r);o.a},bce6:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("el-form",{ref:"promoterForm",staticClass:"demo-promoterForm",attrs:{model:t.promoterForm,rules:t.rules,"label-width":"200px"}},[n("el-form-item",{attrs:{prop:"extension_status"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",[t._v("分销启用：")]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"商城分销功能开启关闭",placement:"top-start"}},[n("i",{staticClass:"el-icon-warning-outline"})])],1),t._v(" "),n("el-radio-group",{model:{value:t.promoterForm.extension_status,callback:function(e){t.$set(t.promoterForm,"extension_status",e)},expression:"promoterForm.extension_status"}},[n("el-radio",{attrs:{label:1}},[t._v("开启")]),t._v(" "),n("el-radio",{attrs:{label:0}},[t._v("关闭")])],1)],1),t._v(" "),n("el-form-item",{attrs:{prop:"extension_one_rate"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",[t._v("一级返佣比例：")]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"订单交易成功后给上级返佣的比例0 - 100,例:5 = 反订单金额的5%",placement:"top-start"}},[n("i",{staticClass:"el-icon-warning-outline"})])],1),t._v(" "),n("el-input-number",{staticClass:"selWidth",attrs:{precision:2,step:.1,min:0},model:{value:t.promoterForm.extension_one_rate,callback:function(e){t.$set(t.promoterForm,"extension_one_rate",e)},expression:"promoterForm.extension_one_rate"}}),t._v(" "),n("span",[t._v("%")])],1),t._v(" "),n("el-form-item",{attrs:{prop:"extension_two_rate"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",[t._v("二级返佣比例：")]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"订单交易成功后给上级返佣的比例0 ~ 100,例:5 = 反订单金额的5%",placement:"top-start"}},[n("i",{staticClass:"el-icon-warning-outline"})])],1),t._v(" "),n("el-input-number",{staticClass:"selWidth",attrs:{precision:2,step:.1,min:0},model:{value:t.promoterForm.extension_two_rate,callback:function(e){t.$set(t.promoterForm,"extension_two_rate",e)},expression:"promoterForm.extension_two_rate"}}),t._v(" "),n("span",[t._v("%")])],1),t._v(" "),n("el-form-item",{attrs:{prop:"extension_self",required:""}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",[t._v("分销内购：")])]),t._v(" "),n("el-radio-group",{model:{value:t.promoterForm.extension_self,callback:function(e){t.$set(t.promoterForm,"extension_self",e)},expression:"promoterForm.extension_self"}},[n("el-radio",{attrs:{label:1}},[t._v("开启")]),t._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:0}},[t._v("关闭")])],1),t._v(" "),n("div",{staticClass:"item-text"},[n("span",{staticClass:"title"},[t._v("开启：")]),t._v("开启分销内购，分销员自己购买商品，享受一级返佣，上级享受二级返佣；\n              "),n("span",{staticClass:"title"},[t._v("关闭：")]),t._v("分销员自己购买商品没有返佣\n          ")])],1),t._v(" "),n("el-form-item",{attrs:{prop:"extension_limit",required:""}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",[t._v("分销限时开关：")])]),t._v(" "),n("el-radio-group",{model:{value:t.promoterForm.extension_limit,callback:function(e){t.$set(t.promoterForm,"extension_limit",e)},expression:"promoterForm.extension_limit"}},[n("el-radio",{attrs:{label:1}},[t._v("开启")]),t._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:0}},[t._v("关闭")])],1),t._v(" "),n("div",{staticClass:"item-text"},[n("span",{staticClass:"title"},[t._v("开启：")]),t._v("根据设置的分销绑定时段返佣；\n          "),n("span",{staticClass:"title"},[t._v("关闭：")]),t._v("默认永久绑定"),n("span",{staticClass:"font-red"},[t._v("（此处不建议频繁修改，请谨慎操作）")])])],1),t._v(" "),n("el-form-item",[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",[t._v("分销绑定时间设置：")])]),t._v(" "),n("el-input-number",{attrs:{step:1,min:0},model:{value:t.promoterForm.extension_limit_day,callback:function(e){t.$set(t.promoterForm,"extension_limit_day",e)},expression:"promoterForm.extension_limit_day"}}),t._v("天\n         "),n("div",{staticClass:"item-text"},[t._v("            \n              指自绑定关系成功至自动解绑之间的天数，自动解绑后返佣按新绑定关系结算。"),n("span",{staticClass:"font-red"},[t._v("（此处不建议频繁修改，请谨慎操作）")])])],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submitForm("promoterForm")}}},[t._v("保存")])],1)],1)],1)],1)},o=[],s=(n("c5f6"),n("e519")),a={name:"Index",data:function(){return{promoterForm:{extension_self:1,extension_limit_day:0,extension_limit:1},loading:!1,rules:{extension_status:[{required:!0,message:"请选择是否启用分销",trigger:"change"}],extension_one_rate:[{required:!0,message:"请输入一级返佣比例",trigger:"blur"}],extension_two_rate:[{required:!0,message:"请输入二级返佣比例",trigger:"blur"}],extension_self:[{required:!0,message:"请选择是否开启分销内购",trigger:"blur"}],extension_limit:[{required:!0,message:"请选择是否开启分销限时",trigger:"blur"}]}}},mounted:function(){this.getDetal()},methods:{getDetal:function(){var t=this;Object(s["c"])().then((function(e){t.promoterForm=e.data,t.promoterForm.extension_status=Number(e.data.extension_status),t.promoterForm.extension_self=e.data.extension_self?e.data.extension_self:0,t.promoterForm.extension_limit=e.data.extension_limit?e.data.extension_limit:0,t.promoterForm.extension_limit_day=e.data.extension_limit_day?e.data.extension_limit_day:30})).catch((function(e){t.$message.error(e.message)}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.loading=!0,Object(s["d"])(e.promoterForm).then((function(t){e.loading=!1,e.$modalSure("提交成功，是否自动下架商户低于此佣金比例的商品").then((function(){Object(s["g"])().then((function(t){var n=t.message;e.$message.success(n)})).catch((function(t){var n=t.message;e.$message.error(n)}))}))})).catch((function(t){e.$message.error(t.message),e.loading=!1}))}))}}},i=a,l=(n("3a7e"),n("2877")),c=Object(l["a"])(i,r,o,!1,null,"18a87e90",null);e["default"]=c.exports},e519:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return a})),n.d(e,"l",(function(){return i})),n.d(e,"n",(function(){return l})),n.d(e,"o",(function(){return c})),n.d(e,"m",(function(){return u})),n.d(e,"i",(function(){return m})),n.d(e,"a",(function(){return _})),n.d(e,"h",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"f",(function(){return v})),n.d(e,"j",(function(){return g})),n.d(e,"k",(function(){return x}));var r=n("0c6d");function o(){return r["a"].get("config/others/lst")}function s(t){return r["a"].post("config/others/update",t)}function a(){return r["a"].post("store/product/check")}function i(t){return r["a"].get("user/promoter/lst",t)}function l(t,e){return r["a"].get("user/spread/lst/".concat(t),e)}function c(t,e){return r["a"].get("user/spread/order/".concat(t),e)}function u(t){return r["a"].post("user/spread/clear/".concat(t))}function m(t){return r["a"].get("store/bag/lst",t)}function _(){return r["a"].get("store/category/list")}function p(t){return r["a"].get("store/bag/detail/".concat(t))}function d(){return r["a"].get("store/bag/lst_filter")}function f(t,e){return r["a"].post("store/bag/change/".concat(t),{status:e})}function v(){return r["a"].get("store/product/mer_select")}function g(t){return r["a"].post("store/bag/status",t)}function x(t,e){return r["a"].post("store/bag/update/".concat(t),e)}}}]);