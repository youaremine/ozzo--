(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-572f3b9d"],{3873:function(t,e,a){},b055:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divBox"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"container"},[s("el-form",{attrs:{inline:"",size:"small"}},[s("el-form-item",{attrs:{label:"状态："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[s("el-option",{attrs:{label:"未开启",value:0}}),t._v(" "),s("el-option",{attrs:{label:"开启",value:1}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"商户类别："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{clearable:"",placeholder:"请选择"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.is_trader,callback:function(e){t.$set(t.tableFrom,"is_trader",e)},expression:"tableFrom.is_trader"}},[s("el-option",{attrs:{label:"自营",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"非自营",value:"0"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"关键字："}},[s("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入优惠券名称",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.coupon_name,callback:function(e){t.$set(t.tableFrom,"coupon_name",e)},expression:"tableFrom.coupon_name"}},[s("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1)],1)],1)]),t._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small","highlight-current-row":""}},[s("el-table-column",{attrs:{prop:"coupon_id",label:"ID","min-width":"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"title",label:"优惠劵名称","min-width":"120"}}),t._v(" "),s("el-table-column",{attrs:{label:"优惠劵类型","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("span",[t._v(t._s(t._f("couponTypeFilter")(a.type)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"商户名称","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("span",[t._v(t._s(a.merchant?a.merchant.mer_name:""))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"mer_name",label:"商户类别","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.merchant?s("span",{staticClass:"spBlock"},[t._v(t._s(e.row.merchant.is_trader?"自营":"非自营"))]):t._e()]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"200",label:"领取日期"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.start_time?s("div",[t._v("\n            "+t._s(a.start_time)+" - "+t._s(a.end_time)+"\n          ")]):s("span",[t._v("不限时")])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"200",label:"使用时间"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.use_start_time&&a.use_end_time?s("div",[t._v("\n            "+t._s(a.use_start_time)+" "),s("br"),t._v("- "+t._s(a.use_end_time)+"\n          ")]):s("span",[t._v(t._s(a.coupon_time)+"天")])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"100",label:"发布数量"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[0===a.is_limited?s("span",[t._v("不限量")]):s("div",[s("span",{staticClass:"fa"},[t._v("发布："+t._s(a.total_count))]),t._v(" "),s("span",{staticClass:"sheng"},[t._v("剩余："+t._s(a.remain_count))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"100",label:"使用数量"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("div",[s("span",[t._v("已领取总数："+t._s(a.send_num))]),t._v(" "),s("span",{staticClass:"sheng"},[t._v("已使用总数："+t._s(a.used_num))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t._f("filterOpen")(e.row.status)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"160",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return t.details(e.row.coupon_id)}}},[t._v("详情")]),t._v(" "),s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return t.receive(e.row.coupon_id)}}},[t._v("领取记录")]),t._v(" "),s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return t.usedRecord(e.row.coupon_id)}}},[t._v("使用记录")])]}}])})],1),t._v(" "),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),t.detailDialog?s("el-dialog",{attrs:{title:"优惠券详情",visible:t.detailDialog,width:"700px"},on:{"update:visible":function(e){t.detailDialog=e}}},[s("div",[s("div",{staticClass:"box-container"},[s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("优惠券名称：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.title))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("优惠券类型：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t._f("couponTypeFilter")(t.couponDetail.coupon_type)))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("优惠券面值：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.coupon_price))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("使用门槛：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s("0.00"==t.couponDetail.use_min_price?"无门槛":"最低消费"+t.couponDetail.use_min_price))])]),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("使用有效期：")]),t._v(" "),t.couponDetail.coupon_time?s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.coupon_time))]):s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.use_start_time+" - "+t.couponDetail.use_end_time))])]),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("领取时间：")]),t._v(" "),1==t.couponDetail.is_timeout?s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.start_time)+" - "+t._s(t.couponDetail.end_time))]):s("span",{staticClass:"info"},[t._v("不限时")])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("类型：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t._f("couponUseTypeFilter")(t.couponDetail.coupon_type)))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("是否限量：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t._f("filterClose")(t.couponDetail.is_limited)))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("已发布总数：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(0==t.couponDetail.is_limited?"不限量":t.couponDetail.total_count))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("剩余总数：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(0==t.couponDetail.is_limited?"不限量":t.couponDetail.remain_count))])]),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("已领取/发放总数：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.send_num))]),t._v(" "),s("el-button",{staticClass:"ml20",attrs:{size:"small",type:"text"},on:{click:function(e){return t.receive(t.couponDetail.coupon_id)}}},[t._v("领取记录")])],1),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("已使用总数：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.used_num))]),t._v(" "),s("el-button",{staticClass:"ml20",attrs:{size:"small",type:"text"},on:{click:function(e){return t.usedRecord(t.couponDetail.coupon_id)}}},[t._v("使用记录")])],1),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("排序：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.sort))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("状态：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.status?"开启":"关闭"))])])])])]):t._e(),t._v(" "),s("el-dialog",{staticClass:"modalbox",attrs:{title:t.title,visible:t.dialogVisible,"min-width":"500px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.Loading,expression:"Loading"}],staticStyle:{width:"100%"},attrs:{data:t.issueData.data,size:"small","highlight-current-row":""}},[s("el-table-column",{attrs:{prop:"user.nickname",label:"用户名","min-width":"120"}}),t._v(" "),s("el-table-column",{attrs:{label:"用户头像","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.user&&t.row.user.avatar?s("div",{staticClass:"demo-image__preview"},[s("img",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.user.avatar}})]):s("div",{staticClass:"demo-image__preview"},[s("img",{staticStyle:{width:"36px",height:"36px"},attrs:{src:a("cdfe")}})])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:t.receiveTime,"min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===t.receiveType?s("span",[t._v(t._s(e.row.create_time))]):s("span",[t._v(t._s(e.row.use_time))])]}}])})],1),t._v(" "),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":t.tableFromIssue.limit,"current-page":t.tableFromIssue.page,layout:"total, sizes, prev, pager, next, jumper",total:t.issueData.total},on:{"size-change":t.handleSizeChangeIssue,"current-change":t.pageChangeIssue}})],1)],1)],1)},n=[],i=a("b7be"),o=a("83d6"),l={name:"CouponList",data:function(){return{Loading:!1,dialogVisible:!1,detailDialog:!1,roterPre:o["roterPre"],listLoading:!0,title:"领取记录",receiveTime:"领取时间",receiveType:0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,status:"",coupon_name:"",is_trader:""},tableFromIssue:{page:1,limit:10,coupon_id:0},issueData:{data:[],total:0},couponDetail:{}}},mounted:function(){this.getList(1)},methods:{handleDelete:function(t,e){var a=this;this.$modalSure().then((function(){Object(i["x"])(t).then((function(t){var s=t.message;a.$message.success(s),a.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;a.$message.error(e)}))}))},handleClose:function(){this.dialogVisible=!1},details:function(t){var e=this;this.detailDialog=!0,Object(i["y"])(t).then((function(t){e.couponDetail=t.data})).catch((function(t){var a=t.message;e.$message.error(a)}))},receive:function(t){this.dialogVisible=!0,this.title="领取记录",this.receiveTime="领取时间",this.receiveType=0,this.tableFromIssue.coupon_id=t,this.tableFromIssue.page=1,this.getIssueList(0)},usedRecord:function(t){this.dialogVisible=!0,this.title="使用记录",this.receiveTime="使用时间",this.receiveType=1,this.tableFromIssue.coupon_id=t,this.tableFromIssue.page=1,this.getIssueList(1)},getIssueList:function(t){var e=this;this.Loading=!0,this.tableFromIssue.status=t||"",Object(i["B"])(this.tableFromIssue).then((function(t){e.issueData.data=t.data.list,e.issueData.total=t.data.count,e.Loading=!1})).catch((function(t){e.Loading=!1,e.$message.error(t.message)}))},pageChangeIssue:function(t){this.tableFromIssue.page=t,1==this.receiveType?this.getIssueList(1):this.getIssueList(0)},handleSizeChangeIssue:function(t){this.tableFromIssue.limit=t,1==this.receiveType?this.getIssueList(1):this.getIssueList(0)},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(i["z"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},onchangeIsShow:function(t){var e=this;Object(i["A"])(t.coupon_id,t.status).then((function(t){var a=t.message;e.$message.success(a),e.getList("")})).catch((function(t){var a=t.message;e.$message.error(a)}))}}},r=l,c=(a("cca6"),a("2877")),u=Object(c["a"])(r,s,n,!1,null,"61bc12f2",null);e["default"]=u.exports},b7be:function(t,e,a){"use strict";a.d(e,"y",(function(){return n})),a.d(e,"z",(function(){return i})),a.d(e,"A",(function(){return o})),a.d(e,"B",(function(){return l})),a.d(e,"x",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"k",(function(){return u})),a.d(e,"c",(function(){return d})),a.d(e,"b",(function(){return p})),a.d(e,"d",(function(){return _})),a.d(e,"h",(function(){return f})),a.d(e,"g",(function(){return m})),a.d(e,"l",(function(){return v})),a.d(e,"a",(function(){return g})),a.d(e,"H",(function(){return b})),a.d(e,"E",(function(){return h})),a.d(e,"G",(function(){return C})),a.d(e,"D",(function(){return w})),a.d(e,"F",(function(){return y})),a.d(e,"C",(function(){return D})),a.d(e,"I",(function(){return k})),a.d(e,"f",(function(){return F})),a.d(e,"j",(function(){return x})),a.d(e,"i",(function(){return L})),a.d(e,"v",(function(){return I})),a.d(e,"n",(function(){return z})),a.d(e,"q",(function(){return S})),a.d(e,"r",(function(){return T})),a.d(e,"p",(function(){return $})),a.d(e,"s",(function(){return j})),a.d(e,"w",(function(){return O})),a.d(e,"u",(function(){return V})),a.d(e,"t",(function(){return B})),a.d(e,"m",(function(){return E})),a.d(e,"o",(function(){return R}));var s=a("0c6d");function n(t){return s["a"].get("store/coupon/detail/".concat(t))}function i(t){return s["a"].get("store/coupon/lst",t)}function o(t,e){return s["a"].post("store/coupon/status/".concat(t),{status:e})}function l(t){return s["a"].get("store/coupon/issue",t)}function r(t){return s["a"].delete("store/coupon/delete/".concat(t))}function c(t){return s["a"].get("broadcast/room/lst",t)}function u(t,e){return s["a"].post("broadcast/room/status/".concat(t),e)}function d(t){return s["a"].delete("broadcast/room/delete/".concat(t))}function p(t){return s["a"].get("broadcast/room/apply/form/".concat(t))}function _(t){return s["a"].get("broadcast/room/detail/".concat(t))}function f(t){return s["a"].get("broadcast/goods/lst",t)}function m(t){return s["a"].get("broadcast/goods/detail/".concat(t))}function v(t,e){return s["a"].post("broadcast/goods/status/".concat(t),e)}function g(t){return s["a"].get("broadcast/goods/apply/form/".concat(t))}function b(){return s["a"].get("seckill/config/create/form")}function h(t){return s["a"].get("seckill/config/lst",t)}function C(t){return s["a"].get("seckill/config/update/".concat(t,"/form"))}function w(t){return s["a"].delete("seckill/config/delete/".concat(t))}function y(t,e){return s["a"].post("seckill/config/status/".concat(t),{status:e})}function D(t,e){return s["a"].get("seckill/product/detail/".concat(t),e)}function k(t,e){return s["a"].get("broadcast/room/goods/".concat(t),e)}function F(t){return s["a"].delete("broadcast/goods/delete/".concat(t))}function x(t,e){return s["a"].post("broadcast/room/sort/".concat(t),e)}function L(t,e){return s["a"].post("broadcast/goods/sort/".concat(t),e)}function I(t){return s["a"].post("config/others/group_buying",t)}function z(){return s["a"].get("config/others/group_buying")}function S(t){return s["a"].get("store/product/group/lst",t)}function T(t){return s["a"].get("store/product/group/get/".concat(t))}function $(t){return s["a"].get("store/product/group/detail/".concat(t))}function j(t){return s["a"].post("store/product/group/status",t)}function O(t,e){return s["a"].post("store/product/group/is_show/".concat(t),{status:e})}function V(t){return s["a"].get("store/product/group/get/".concat(t))}function B(t,e){return s["a"].post("store/product/group/update/".concat(t),e)}function E(t){return s["a"].get("store/product/group/buying/lst",t)}function R(t,e){return s["a"].get("store/product/group/buying/detail/".concat(t),e)}},cca6:function(t,e,a){"use strict";a("3873")},cdfe:function(t,e,a){t.exports=a.p+"system/img/f.5aa43cd3.png"}}]);