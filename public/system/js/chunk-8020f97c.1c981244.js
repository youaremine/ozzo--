(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8020f97c"],{"1e11":function(e,t,a){"use strict";var i=a("5cd4"),n=a.n(i);n.a},"5cd4":function(e,t,a){},af92:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divBox"},[a("div",{staticClass:"header clearfix"},[a("div",{staticClass:"filter-container"},[a("div",{staticClass:"demo-input-suffix acea-row"},[a("el-form",{attrs:{inline:"",size:"small"}},[a("el-form-item",[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入用户名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(1)}},model:{value:e.tableFrom.nickname,callback:function(t){e.$set(e.tableFrom,"nickname",t)},expression:"tableFrom.nickname"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.getList(1)}},slot:"append"})],1)],1)],1)],1)])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData.data,size:"mini"}},[a("el-table-column",{attrs:{width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{attrs:{label:t.row.uid},nativeOn:{change:function(a){return e.getTemplateRow(t.row)}},model:{value:e.templateRadio,callback:function(t){e.templateRadio=t},expression:"templateRadio"}},[e._v(" ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"uid",label:"ID","min-width":"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"昵称","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("div",{staticClass:"acea-row"},[a("i",{directives:[{name:"show",rawName:"v-show",value:1===i.sex,expression:"row.sex===1"}],staticClass:"el-icon-male mr5",staticStyle:{"font-size":"15px","margin-top":"3px",color:"#2db7f5"}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:2===i.sex,expression:"row.sex===2"}],staticClass:"el-icon-female mr5",staticStyle:{"font-size":"15px","margin-top":"3px",color:"#ed4014"}}),e._v(" "),a("div",{domProps:{textContent:e._s(i.nickname)}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:i.vip_name,expression:"row.vip_name"}],staticClass:"vipName"},[e._v(e._s(i.vip_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"客服头像","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.avatar?t.row.avatar:e.moren,"preview-src-list":[t.row.avatar||e.moren]}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户类型","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s("routine"===i.user_type?"小程序":"wechat"===i.user_type?"公众号":"H5"))])]}}])})],1),e._v(" "),a("div",{staticClass:"block mb20"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":e.tableFrom.limit,"current-page":e.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},on:{"size-change":e.handleSizeChange,"current-change":e.pageChange}})],1)],1)},n=[],l=(a("c5f6"),a("ac6a"),a("c24f")),o=a("83d6"),s={name:"GoodList",data:function(){return{moren:a("cdfe"),props:{emitPath:!1},templateRadio:0,merCateList:[],merSelect:[],roterPre:o["roterPre"],listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,nickname:""},multipleSelection:{},checked:[]}},mounted:function(){var e=this;this.getList(),window.addEventListener("unload",(function(t){return e.unloadHandler(t)}))},methods:{unloadHandler:function(){this.multipleSelection?this.$route.query.field&&this.multipleSelection.id&&(form_create_helper.set(this.$route.query.field,this.multipleSelection),form_create_helper.close(this.$route.query.field)):this.$message.warning("请先选择商品")},getTemplateRow:function(e){this.multipleSelection={src:e.avatar,id:e.uid}},getList:function(){var e=this;this.listLoading=!0,Object(l["A"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.checked=window.form_create_helper&&window.form_create_helper.get(e.$route.query.field)||[],e.tableData.data.forEach((function(t){e.checked.forEach((function(a){Number(t.uid)===Number(a.id)&&e.$nextTick((function(){e.$refs.multipleTable.toggleRowSelection(t,!0)}))}))})),e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(e){this.tableFrom.page=e,this.getList()},handleSizeChange:function(e){this.tableFrom.limit=e,this.getList()}}},r=s,c=(a("1e11"),a("2877")),d=Object(c["a"])(r,i,n,!1,null,"4b4544f1",null);t["default"]=d.exports},cdfe:function(e,t,a){e.exports=a.p+"system/img/f.5aa43cd3.png"}}]);