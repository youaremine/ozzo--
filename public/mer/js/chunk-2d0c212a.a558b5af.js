(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c212a"],{"496e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.add}},[t._v("添加商品规格")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"attr_template_id",label:"ID","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"template_name",label:"规格名称","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品规格","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.template_value,(function(e,n){return a("span",{key:n,staticClass:"mr10",domProps:{textContent:t._s(e.value)}})}))}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品属性","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.template_value,(function(e,n){return a("div",{key:n,domProps:{textContent:t._s(e.detail.join(","))}})}))}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.attr_template_id,e.$index)}}},[t._v("删除\n          ")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},i=[],l=a("c4c8"),s={name:"ProductAttr",data:function(){return{formDynamic:{template_name:"",template_value:[]},tableFrom:{page:1,limit:20},tableData:{data:[],total:0},listLoading:!0}},mounted:function(){this.getList()},methods:{add:function(){var t=this;this.$modalAttr(Object.assign({},t.formDynamic),(function(){t.getList(),t.formDynamic={template_name:"",template_value:[]}}))},getList:function(){var t=this;this.listLoading=!0,Object(l["cb"])(this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},handleDelete:function(t,e){var a=this;this.$modalSure().then((function(){Object(l["j"])(t).then((function(t){var n=t.message;a.$message.success(n),a.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;a.$message.error(e)}))}))},onEdit:function(t){var e=this;this.$modalAttr(JSON.parse(JSON.stringify(t)),(function(){e.getList(),this.formDynamic={template_name:"",template_value:[]}}))}}},o=s,r=a("2877"),c=Object(r["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports}}]);