(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76758fe3"],{"0d41":function(t,e,a){},"641c":function(t,e,a){"use strict";a("0d41")},b055:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divBox"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"container"},[s("el-form",{attrs:{size:"small","label-width":"120px",inline:!0}},[s("el-form-item",{attrs:{label:"狀態："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"請選擇",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[s("el-option",{attrs:{label:"未開啟",value:0}}),t._v(" "),s("el-option",{attrs:{label:"開啟",value:1}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"優惠券名稱："}},[s("el-input",{staticClass:"selWidth mr20",attrs:{placeholder:"請輸入優惠券名稱",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.coupon_name,callback:function(e){t.$set(t.tableFrom,"coupon_name",e)},expression:"tableFrom.coupon_name"}},[s("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"優惠券類型："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"請選擇",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.type,callback:function(e){t.$set(t.tableFrom,"type",e)},expression:"tableFrom.type"}},[s("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),s("el-option",{attrs:{label:"店鋪券",value:0}}),t._v(" "),s("el-option",{attrs:{label:"商品券",value:1}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"獲取方式："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"請選擇",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.send_type,callback:function(e){t.$set(t.tableFrom,"send_type",e)},expression:"tableFrom.send_type"}},[s("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),s("el-option",{attrs:{label:"手動獲取",value:0}}),t._v(" "),s("el-option",{attrs:{label:"新人",value:2}}),t._v(" "),s("el-option",{attrs:{label:"買贈",value:3}})],1)],1)],1)],1),t._v(" "),s("router-link",{attrs:{to:{path:t.roterPre+"/marketing/coupon/creatCoupon"}}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("添加優惠券")])],1)],1),t._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small","highlight-current-row":""}},[s("el-table-column",{attrs:{prop:"coupon_id",label:"ID","min-width":"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"title",label:"優惠券名稱","min-width":"120"}}),t._v(" "),s("el-table-column",{attrs:{label:"優惠券類型","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("span",[t._v(t._s(t._f("couponTypeFilter")(a.type)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"200",label:"領取日期"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.start_time?s("div",[t._v("\n            "+t._s(a.start_time)+" "),s("br"),t._v("- "+t._s(a.end_time)+"\n          ")]):s("span",[t._v("不限時")])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"200",label:"使用時間"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.use_start_time&&a.use_end_time?s("div",[t._v("\n            "+t._s(a.use_start_time)+" "),s("br"),t._v("- "+t._s(a.use_end_time)+"\n          ")]):s("span",[t._v(t._s(a.coupon_time)+"天")])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"100",label:"發佈數量"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[0===a.is_limited?s("span",[t._v("不限量")]):s("div",[s("span",{staticClass:"fa"},[t._v("發佈："+t._s(a.total_count))]),t._v(" "),s("span",{staticClass:"sheng"},[t._v("剩餘："+t._s(a.remain_count))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"100",label:"使用數量"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[s("div",[s("span",[t._v("已領取/發放總數："+t._s(a.send_num))]),t._v(" "),s("span",{staticClass:"sheng"},[t._v("已使用總數："+t._s(a.used_num))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"狀態","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"顯示","inactive-text":"隱藏"},nativeOn:{click:function(a){return t.onchangeIsShow(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return t.details(e.row.coupon_id)}}},[t._v("詳情")]),t._v(" "),s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return t.receive(e.row.coupon_id)}}},[t._v("領取/發放記錄")]),t._v(" "),s("router-link",{attrs:{to:{path:t.roterPre+"/marketing/coupon/creatCoupon/"+e.row.coupon_id}}},[s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"}},[t._v("複製")])],1),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.coupon_id,e.$index)}}},[t._v("刪除")])]}}])})],1),t._v(" "),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),t.detailDialog?s("el-dialog",{attrs:{title:"優惠券詳情",visible:t.detailDialog,width:"700px"},on:{"update:visible":function(e){t.detailDialog=e}}},[s("div",[s("div",{staticClass:"box-container"},[s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("優惠券名稱：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.title))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("優惠券類型：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t._f("couponTypeFilter")(t.couponDetail.type)))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("優惠券面值：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.coupon_price))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("使用門檻：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s("0.00"==t.couponDetail.use_min_price?"無門檻":"最低消費"+t.couponDetail.use_min_price))])]),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("使用有效期：")]),t._v(" "),t.couponDetail.coupon_time&&0==t.couponDetail.coupon_type?s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.coupon_time)+"天")]):1==t.couponDetail.coupon_type?s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.use_start_time+" - "+t.couponDetail.use_end_time))]):t._e()]),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("領取時間：")]),t._v(" "),1==t.couponDetail.is_timeout?s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.start_time)+" - "+t._s(t.couponDetail.end_time))]):s("span",{staticClass:"info"},[t._v("不限時")])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("類型：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t._f("couponUseTypeFilter")(t.couponDetail.send_type)))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("是否限量：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t._f("filterClose")(t.couponDetail.is_limited)))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("已發佈總數：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(0==t.couponDetail.is_limited?"不限量":t.couponDetail.total_count))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("剩餘總數：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(0==t.couponDetail.is_limited?"不限量":t.couponDetail.remain_count))])]),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("已領取/發放總數：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.send_num))]),t._v(" "),s("el-button",{staticClass:"ml20",attrs:{size:"small",type:"text"},on:{click:function(e){return t.receive(t.couponDetail.coupon_id)}}},[t._v("已領取/發放記錄")])],1),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("已使用總數：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.used_num))]),t._v(" "),s("el-button",{staticClass:"ml20",attrs:{size:"small",type:"text"},on:{click:function(e){return t.usedRecord(t.couponDetail.coupon_id)}}},[t._v("使用記錄")])],1),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("排序：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.sort))])]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("狀態：")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(t.couponDetail.status?"開啟":"關閉"))])])])])]):t._e(),t._v(" "),s("el-dialog",{staticClass:"modalbox",attrs:{title:t.title,visible:t.dialogVisible,"min-width":"500px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.Loading,expression:"Loading"}],staticStyle:{width:"100%"},attrs:{data:t.issueData.data,size:"small","highlight-current-row":""}},[s("el-table-column",{attrs:{prop:"user.nickname",label:"用戶名","min-width":"120"}}),t._v(" "),s("el-table-column",{attrs:{label:"用戶頭像","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.user.avatar?s("div",{staticClass:"demo-image__preview"},[s("img",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.user.avatar}})]):s("div",{staticClass:"demo-image__preview"},[s("img",{staticStyle:{width:"36px",height:"36px"},attrs:{src:a("cdfe")}})])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:t.receiveTime,"min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===t.receiveType?s("span",[t._v(t._s(e.row.create_time))]):s("span",[t._v(t._s(e.row.use_time))])]}}])})],1),t._v(" "),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":t.tableFromIssue.limit,"current-page":t.tableFromIssue.page,layout:"total, sizes, prev, pager, next, jumper",total:t.issueData.total},on:{"size-change":t.handleSizeChangeIssue,"current-change":t.pageChangeIssue}})],1)],1)],1)},i=[],l=a("b7be"),n=a("83d6"),o={name:"CouponList",data:function(){return{Loading:!1,dialogVisible:!1,detailDialog:!1,roterPre:n["roterPre"],listLoading:!0,title:"領取/發放記錄",receiveTime:"領取時間",receiveType:0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,status:"",coupon_name:"",type:"",send_type:""},tableFromIssue:{page:1,limit:10,coupon_id:0},issueData:{data:[],total:0},couponDetail:{}}},mounted:function(){this.getList(1)},methods:{handleDelete:function(t,e){var a=this;this.$modalSure().then((function(){Object(l["z"])(t).then((function(t){var s=t.message;a.$message.success(s),a.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;a.$message.error(e)}))}))},handleClose:function(){this.dialogVisible=!1},details:function(t){var e=this;this.detailDialog=!0,Object(l["A"])(t).then((function(t){e.couponDetail=t.data})).catch((function(t){var a=t.message;e.$message.error(a)}))},receive:function(t){this.dialogVisible=!0,this.title="領取/發放記錄",this.receiveTime="領取時間",this.receiveType=0,this.tableFromIssue.coupon_id=t,this.getIssueList("")},usedRecord:function(t){this.dialogVisible=!0,this.title="使用記錄",this.receiveTime="使用時間",this.receiveType=1,this.tableFromIssue.coupon_id=t,this.getIssueList(1)},getIssueList:function(t){var e=this;this.Loading=!0,this.tableFromIssue.status=t,Object(l["J"])(this.tableFromIssue).then((function(t){e.issueData.data=t.data.list,e.issueData.total=t.data.count,e.Loading=!1})).catch((function(t){e.Loading=!1,e.$message.error(t.message)}))},pageChangeIssue:function(t){this.tableFromIssue.page=t,this.getIssueList("")},handleSizeChangeIssue:function(t){this.tableFromIssue.limit=t,this.getIssueList("")},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(l["B"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},onchangeIsShow:function(t){var e=this;Object(l["D"])(t.coupon_id,t.status).then((function(t){var a=t.message;e.$message.success(a),e.getList("")})).catch((function(t){var a=t.message;e.$message.error(a)}))}}},c=o,r=(a("641c"),a("2877")),u=Object(r["a"])(c,s,i,!1,null,"86634840",null);e["default"]=u.exports},cdfe:function(t,e,a){t.exports=a.p+"mer/img/f.5aa43cd3.png"}}]);