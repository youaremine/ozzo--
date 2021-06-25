(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7201ceac"],{2468:function(t,e,i){"use strict";i("319c")},"319c":function(t,e,i){},"9e7d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"divBox"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"container"},[i("el-form",{attrs:{size:"small",inline:"","label-width":"100px"}},[i("el-form-item",{attrs:{label:"訂單狀態："}},[i("el-radio-group",{attrs:{type:"button"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.order_type,callback:function(e){t.$set(t.tableFrom,"order_type",e)},expression:"tableFrom.order_type"}},[i("el-radio-button",{attrs:{label:""}},[t._v("全部 ")]),t._v(" "),i("el-radio-button",{attrs:{label:"1"}},[t._v("待付款")]),t._v(" "),i("el-radio-button",{attrs:{label:"2"}},[t._v("待發貨")]),t._v(" "),i("el-radio-button",{attrs:{label:"3"}},[t._v("待收貨")]),t._v(" "),i("el-radio-button",{attrs:{label:"4"}},[t._v("待評價")]),t._v(" "),i("el-radio-button",{attrs:{label:"5"}},[t._v("交易完成")]),t._v(" "),i("el-radio-button",{attrs:{label:"6"}},[t._v("已退款")]),t._v(" "),i("el-radio-button",{attrs:{label:"7"}},[t._v("已刪除")])],1)],1),t._v(" "),i("el-form-item",{staticClass:"width100",attrs:{label:"時間選擇："}},[i("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small"},on:{change:function(e){return t.selectChange(t.tableFrom.date)}},model:{value:t.tableFrom.date,callback:function(e){t.$set(t.tableFrom,"date",e)},expression:"tableFrom.date"}},t._l(t.fromList.fromTxt,(function(e,a){return i("el-radio-button",{key:a,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),i("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy/MM/dd",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定義時間"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),i("el-form-item",{staticClass:"width100",attrs:{label:"關鍵字："}},[i("el-input",{staticClass:"selWidth",attrs:{placeholder:"請輸入訂單號/收貨人/聯繫方式",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[i("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"開票狀態："}},[i("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"請選擇",clearable:""},on:{change:t.getList},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},t._l(t.invoiceStatusList,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),i("el-form-item",{staticClass:"width100",attrs:{label:"用戶信息："}},[i("el-input",{staticClass:"selWidth",attrs:{placeholder:"請輸入用戶暱稱/手機號",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.username,callback:function(e){t.$set(t.tableFrom,"username",e)},expression:"tableFrom.username"}},[i("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),i("el-button",{staticStyle:{display:"block"},attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getInvoiceInfo("","invoice")}}},[t._v("\n            合併開票\n          ")])],1)],1)]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleSelection",staticClass:"table",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark","row-key":function(t){return t.order_receipt_id},data:t.tableData.data},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection","reserve-selection":!0,width:"55"}}),t._v(" "),i("el-table-column",{attrs:{prop:"storeOrder.order_sn",label:"訂單號","min-width":"170"}}),t._v(" "),i("el-table-column",{attrs:{prop:"user.nickname",label:"用戶暱稱","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{prop:"order_price",label:"訂單金額","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{label:"訂單狀態","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.storeOrder.paid&&0===e.row.storeOrder.status?i("span",[t._v("待付款")]):i("span",[t._v(t._s(t._f("orderStatusFilter")(e.row.storeOrder.status)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"receipt_price",label:"發票金額","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{prop:"receipt_sn",label:"發票單號","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"發票類型","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.receipt_info?i("span",[t._v(t._s(1==e.row.receipt_info.receipt_type?"普通發票":"專用發票"))]):i("span",[t._v("--")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"發票抬頭","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s("1"===e.row.receipt_info.receipt_title_type?"個人":"企業"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"發票聯繫人","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.storeOrder.real_name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"發票聯繫信息","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.delivery_info.email?e.row.delivery_info.email:e.row.delivery_info.user_address&&e.row.delivery_info.user_address+e.row.delivery_info.user_phone&&e.row.delivery_info.user_phone))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"create_time",label:"下單時間","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"開票狀態","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(1==e.row.status?"已開":"未開"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"storeOrder.mark",label:"發票備註","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"180",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.getInvoiceInfo(e.row.order_receipt_id,"invoice")}}},[t._v("開票")]):t._e(),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.onOrderDetail(e.row.order_id)}}},[t._v("訂單詳情")]),t._v(" "),e.row.status?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.getInvoiceInfo(e.row.order_receipt_id,"edit")}}},[t._v("編輯")]):t._e()]}}])})],1),t._v(" "),i("div",{staticClass:"block"},[i("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),t.dialogVisible?i("el-dialog",{attrs:{title:t.invoiceInfo.title,visible:t.dialogVisible,width:"900px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{staticClass:"box-container"},[i("div",{staticClass:"acea-row"},[i("div",{staticClass:"list sp"},[i("label",{staticClass:"name",staticStyle:{color:"#333"}},[t._v("發票詳情")])]),t._v(" "),i("div",{staticClass:"list sp"},[i("label",{staticClass:"name",staticStyle:{color:"#333"}},[t._v("發票申請單號：")]),t._v(t._s(t.invoiceInfo.receipt_sn))])]),t._v(" "),i("div",{staticClass:"title"},[t._v("發票信息")]),t._v(" "),i("div",{staticClass:"acea-row"},[i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("發票抬頭：")]),t._v(t._s(t.invoiceInfo.receipt_info.receipt_title))]),t._v(" "),i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("發票類型：")]),t._v(t._s(1==t.invoiceInfo.receipt_info.receipt_type?"普通發票":"專用發票"))]),t._v(" "),i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("發票抬頭類型：")]),t._v(t._s("1"==t.invoiceInfo.receipt_info.receipt_title_type?"個人":"企業"))]),t._v(" "),i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("發票金額：")]),t._v(t._s(t.invoiceInfo.receipt_price))]),t._v(" "),2==t.invoiceInfo.receipt_info.receipt_type?i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("開戶銀行：")]),t._v(t._s(t.invoiceInfo.receipt_info.bank_name))]):t._e(),t._v(" "),2==t.invoiceInfo.receipt_info.receipt_type?i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("銀行賬號：")]),t._v(t._s(t.invoiceInfo.receipt_info.bank_code))]):t._e(),t._v(" "),2==t.invoiceInfo.receipt_info.receipt_type?i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("企業地址：")]),t._v(t._s(t.invoiceInfo.receipt_info.address))]):t._e(),t._v(" "),2==t.invoiceInfo.receipt_info.receipt_type?i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("企業電話：")]),t._v(t._s(t.invoiceInfo.receipt_info.tel))]):t._e()]),t._v(" "),i("div",{staticClass:"title"},[t._v("聯繫信息：")]),t._v(" "),1==t.invoiceInfo.receipt_info.receipt_type?i("div",{staticClass:"acea-row"},[i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("聯繫郵箱：")]),t._v(t._s(t.invoiceInfo.delivery_info.email))])]):i("div",{staticClass:"acea-row"},[i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("聯繫人姓名：")]),t._v(t._s(t.invoiceInfo.delivery_info.user_name))]),t._v(" "),i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("聯繫人電話：")]),t._v(t._s(t.invoiceInfo.delivery_info.user_phone))]),t._v(" "),i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("聯繫人地址：")]),t._v(t._s(t.invoiceInfo.delivery_info.user_address))])]),t._v(" "),i("div",{staticClass:"acea-row"},[i("div",{staticClass:"list sp"},[i("label",{staticClass:"name"},[t._v("開票狀態：")]),t._v(t._s(1==t.invoiceInfo.status?"已開":"未開"))]),t._v(" "),i("div",{staticClass:"list sp100"},[i("label",{staticClass:"name"},[t._v("發票號嗎：")]),i("span",{staticClass:"info"},[i("el-input",{nativeOn:{keyup:function(e){t.invoiceData.number=t.invoiceData.number.replace(/[^\w]/g,"")}},model:{value:t.invoiceData.number,callback:function(e){t.$set(t.invoiceData,"number",e)},expression:"invoiceData.number"}})],1)]),t._v(" "),i("div",{staticClass:"list sp100"},[i("label",{staticClass:"name"},[t._v("發票備註：")]),i("span",{staticClass:"info"},[i("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.invoiceData.mark,callback:function(e){t.$set(t.invoiceData,"mark",e)},expression:"invoiceData.mark"}})],1)])]),t._v(" "),i("el-button",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{type:"primary"},on:{click:t.handleInvoic}},[t._v("確定")])],1)])]):t._e()],1)},n=[],r=(i("ac6a"),i("6b54"),i("f8b7")),s={name:"OrderInvoice",data:function(){return{logisticsName:"refund",id:0,type:"",tableData:{data:[],total:0},invoiceStatusList:[{label:"已開票",value:1},{label:"未開票",value:0}],listLoading:!0,tableFrom:{username:"",type:"",date:"",page:1,limit:20,receipt_sn:"",order_type:"",keyword:"",status:""},orderChartType:{},timeVal:[],multipleSelection:[],fromList:{title:"選擇時間",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},selectionList:[],tableFromLog:{page:1,limit:20},tableDataLog:{data:[],total:0},loading:!1,dialogVisible:!1,orderDatalist:null,invoiceInfo:{},invoiceData:{number:"",mark:""}}},mounted:function(){this.$route.query.hasOwnProperty("sn")?this.tableFrom.order_sn=this.$route.query.sn:this.tableFrom.order_sn="",this.getList(1)},methods:{onOrderDetail:function(t){this.$router.push({name:"OrderList",query:{order_id:t}})},handleSelectionChange:function(t){this.multipleSelection=t},pageChangeLog:function(t){this.tableFromLog.page=t,this.getList("")},handleSizeChangeLog:function(t){this.tableFromLog.limit=t,this.getList("")},getInvoiceInfo:function(t,e){var i=this;this.id=t,this.type=e;var a=t?t.toString():this.getInvoic(),n={ids:a};"invoice"===e?Object(r["i"])(n).then((function(t){i.listLoading=!1,i.dialogVisible=!0,i.invoiceInfo=t.data,i.invoiceData={number:"",mark:""}})).catch((function(t){i.$message.error(t.message),i.listLoading=!1})):Object(r["h"])(t).then((function(t){i.listLoading=!1,i.dialogVisible=!0,i.invoiceInfo=t.data,i.invoiceData={number:t.data.receipt_no,mark:t.data.mer_mark}})).catch((function(t){i.$message.error(t.message),i.listLoading=!1}))},handleInvoic:function(){var t=this,e=this.id?this.id.toString():this.getInvoic(),i={ids:e,receipt_sn:this.invoiceInfo.receipt_sn,receipt_price:this.invoiceInfo.receipt_price,receipt_no:this.invoiceData.number,mer_mark:this.invoiceData.mark?this.invoiceData.mark:""};"invoice"===this.type?Object(r["g"])(i).then((function(e){t.$message.success(e.message),t.dialogVisible=!1,t.getList(),t.id=""})).catch((function(e){t.$message.error(e.message),t.listLoading=!1})):Object(r["k"])(this.id,{receipt_no:this.invoiceData.number,mer_mark:this.invoiceData.mark?this.invoiceData.mark:""}).then((function(e){t.$message.success(e.message),t.dialogVisible=!1,t.getList(),t.id=""})).catch((function(e){t.$message.error(e.message),t.listLoading=!1}))},getInvoic:function(){var t=[];return this.multipleSelection.forEach((function(e,i){t.push(e.order_receipt_id)})),t.toString()},onOrderMark:function(t){},selectChange:function(t){this.tableFrom.date=t,this.timeVal=[],this.getList(1)},onchangeTime:function(t){this.timeVal=t,this.tableFrom.date=t?this.timeVal.join("-"):"",this.getList(1)},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(r["j"])(this.tableFrom).then((function(t){e.orderChartType=t.data.stat,e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.$message.error(t.message),e.listLoading=!1}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},handleClose:function(){this.dialogLogistics=!1}}},o=s,l=(i("2468"),i("2877")),c=Object(l["a"])(o,a,n,!1,null,"2091e71d",null);e["default"]=c.exports},f8b7:function(t,e,i){"use strict";i.d(e,"q",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"u",(function(){return s})),i.d(e,"n",(function(){return o})),i.d(e,"o",(function(){return l})),i.d(e,"r",(function(){return c})),i.d(e,"t",(function(){return u})),i.d(e,"m",(function(){return d})),i.d(e,"s",(function(){return v})),i.d(e,"y",(function(){return f})),i.d(e,"w",(function(){return _})),i.d(e,"B",(function(){return p})),i.d(e,"A",(function(){return m})),i.d(e,"z",(function(){return b})),i.d(e,"v",(function(){return g})),i.d(e,"b",(function(){return h})),i.d(e,"f",(function(){return y})),i.d(e,"x",(function(){return C})),i.d(e,"e",(function(){return k})),i.d(e,"d",(function(){return w})),i.d(e,"c",(function(){return x})),i.d(e,"l",(function(){return L})),i.d(e,"p",(function(){return I})),i.d(e,"C",(function(){return F})),i.d(e,"D",(function(){return S})),i.d(e,"j",(function(){return D})),i.d(e,"i",(function(){return O})),i.d(e,"g",(function(){return z})),i.d(e,"h",(function(){return $})),i.d(e,"k",(function(){return V}));var a=i("0c6d");function n(t){return a["a"].get("store/order/lst",t)}function r(){return a["a"].get("store/order/chart")}function s(t,e){return a["a"].post("store/order/update/".concat(t),e)}function o(t){return a["a"].get("store/order/delivery/".concat(t,"/form"))}function l(t){return a["a"].get("store/order/detail/".concat(t))}function c(t,e){return a["a"].get("store/order/log/".concat(t),e)}function u(t){return a["a"].get("store/order/remark/".concat(t,"/form"))}function d(t){return a["a"].post("store/order/delete/".concat(t))}function v(t){return a["a"].get("store/order/printer/".concat(t))}function f(t){return a["a"].get("store/refundorder/lst",t)}function _(t){return a["a"].get("store/refundorder/detail/".concat(t))}function p(t){return a["a"].get("store/refundorder/status/".concat(t,"/form"))}function m(t){return a["a"].get("store/refundorder/mark/".concat(t,"/form"))}function b(t){return a["a"].get("store/refundorder/log/".concat(t))}function g(t){return a["a"].get("store/refundorder/delete/".concat(t))}function h(t){return a["a"].post("store/refundorder/refund/".concat(t))}function y(t){return a["a"].get("store/order/express/".concat(t))}function C(t){return a["a"].get("store/refundorder/express/".concat(t))}function k(t){return a["a"].get("store/order/excel",t)}function w(t){return a["a"].get("excel/lst",t)}function x(t){return a["a"].get("excel/download/".concat(t))}function L(t){return a["a"].post("store/order/verify/".concat(t))}function I(){return a["a"].get("store/order/filtter")}function F(){return a["a"].get("store/order/takechart")}function S(t){return a["a"].get("store/order/takelst",t)}function D(t){return a["a"].get("store/receipt/lst",t)}function O(t){return a["a"].get("store/receipt/set_recipt",t)}function z(t){return a["a"].post("store/receipt/save_recipt",t)}function $(t){return a["a"].get("store/receipt/detail/".concat(t))}function V(t,e){return a["a"].post("store/receipt/update/".concat(t),e)}}}]);