(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f105f7b"],{bff0:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-form",{attrs:{inline:"",size:"small"}},[a("el-form-item",[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"請輸入用戶名稱"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.nickname,callback:function(e){t.$set(t.tableFrom,"nickname",e)},expression:"tableFrom.nickname"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),a("el-form-item",[a("span",{staticStyle:{"font-size":"12px",color:"#C0C4CC"}},[t._v("註：將用戶添加為客服時,請確保用戶先關注本店鋪")])])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small"}},[a("el-table-column",{attrs:{label:"","min-width":"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{attrs:{label:e.row.uid},nativeOn:{change:function(a){return t.getTemplateRow(e.$index,e.row)}},model:{value:t.templateRadio,callback:function(e){t.templateRadio=e},expression:"templateRadio"}},[t._v(" ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"uid",label:"ID","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"微信用戶名稱","min-width":"130"}}),t._v(" "),a("el-table-column",{attrs:{label:"客服頭像","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticClass:"tabImage",attrs:{src:e.row.avatar?e.row.avatar:t.moren,"preview-src-list":[e.row.avatar||t.moren]}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"用戶類型","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("statusFilter")(e.row.user_type)))])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},i=[],n=a("8593"),s={name:"UserList",filters:{saxFilter:function(t){var e={0:"未知",1:"男",2:"女"};return e[t]},statusFilter:function(t){var e={wechat:"微信用戶",routine:"小程序用戶",h5:"H5用戶"};return e[t]}},data:function(){return{moren:a("cdfe"),templateRadio:0,loading:!1,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,nickname:""}}},mounted:function(){this.getList(1)},methods:{getTemplateRow:function(t,e){form_create_helper.set(this.$route.query.field,{src:e.avatar,id:e.uid}),form_create_helper.close(this.$route.query.field)},getList:function(t){var e=this;this.loading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(n["z"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.loading=!1})).catch((function(t){e.$message.error(t.message),e.loading=!1}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")}}},r=s,o=a("2877"),c=Object(o["a"])(r,l,i,!1,null,"460ea402",null);e["default"]=c.exports},cdfe:function(t,e,a){t.exports=a.p+"mer/img/f.5aa43cd3.png"}}]);