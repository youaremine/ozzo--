(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19fc7a76"],{"504c":function(t,e,a){var i=a("9e1e"),s=a("0d58"),r=a("6821"),n=a("52a7").f;t.exports=function(t){return function(e){var a,o=r(e),l=s(o),c=l.length,u=0,d=[];while(c>u)a=l[u++],i&&!n.call(o,a)||d.push(t?[a,o[a]]:o[a]);return d}}},7719:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dialogVisible?a("el-dialog",{attrs:{title:"商品信息",visible:t.dialogVisible,width:"1200px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"divBox"},[a("div",{staticClass:"header clearfix"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small",inline:"","label-width":"100px"}},[a("el-form-item",{staticClass:"width100",attrs:{label:"商品分类："}},[a("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList()}},model:{value:t.tableFrom.mer_cate_id,callback:function(e){t.$set(t.tableFrom,"mer_cate_id",e)},expression:"tableFrom.mer_cate_id"}},t._l(t.merCateList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"width100",attrs:{label:"商品搜索："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入商品名称，关键字，产品编号",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getList},slot:"append"})],1)],1)],1)],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"}},[a("el-table-column",{attrs:{width:"55"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{attrs:{label:e.row.product_id},nativeOn:{change:function(a){return t.getTemplateRow(e.row)}},model:{value:t.templateRadio,callback:function(e){t.templateRadio=e},expression:"templateRadio"}},[t._v(" ")])]}}],null,!1,3465899556)}),t._v(" "),a("el-table-column",{attrs:{prop:"product_id",label:"ID","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品图","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.image,"preview-src-list":[t.row.image]}})],1)]}}],null,!1,2331550732)}),t._v(" "),a("el-table-column",{attrs:{prop:"store_name",label:"商品名称","min-width":"200"}})],1),t._v(" "),a("div",{staticClass:"block mb20"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)]):t._e()},s=[],r=a("c4c8"),n=a("83d6"),o={name:"GoodsList",data:function(){return{dialogVisible:!1,templateRadio:0,merCateList:[],roterPre:n["roterPre"],listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,cate_id:"",store_name:"",keyword:"",is_gift_bag:0,status:1},multipleSelection:{},checked:[]}},mounted:function(){var t=this;this.getList(),this.getCategorySelect(),window.addEventListener("unload",(function(e){return t.unloadHandler(e)}))},methods:{getTemplateRow:function(t){this.multipleSelection={src:t.image,id:t.product_id},this.dialogVisible=!1,this.$emit("getProduct",this.multipleSelection)},getCategorySelect:function(){var t=this;Object(r["n"])().then((function(e){t.merCateList=e.data})).catch((function(e){t.$message.error(e.message)}))},getList:function(){var t=this;this.listLoading=!0,Object(r["F"])(this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()}}},l=o,c=(a("a035"),a("2877")),u=Object(c["a"])(l,i,s,!1,null,"068914aa",null);e["a"]=u.exports},"7ef1":function(t,e,a){"use strict";var i=a("bb51"),s=a.n(i);s.a},8518:function(t,e,a){},8615:function(t,e,a){var i=a("5ca1"),s=a("504c")(!1);i(i.S,"Object",{values:function(t){return s(t)}})},a035:function(t,e,a){"use strict";var i=a("8518"),s=a.n(i);s.a},bb51:function(t,e,a){},e538:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-steps",{attrs:{active:t.currentTab,"align-center":"","finish-status":"success"}},[a("el-step",{attrs:{title:"选择助力商品"}}),t._v(" "),a("el-step",{attrs:{title:"填写基础信息"}}),t._v(" "),a("el-step",{attrs:{title:"修改商品详情"}})],1)],1),t._v(" "),a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.fullscreenLoading,expression:"fullscreenLoading"}],ref:"formValidate",staticClass:"formValidate mt20",attrs:{rules:t.ruleValidate,model:t.formValidate,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.currentTab,expression:"currentTab === 0"}],staticStyle:{overflow:"hidden"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"选择商品：",prop:"image"}},[a("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.add()}}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:t.formValidate.image}})]):a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.currentTab,expression:"currentTab === 1"}]},[a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"商品主图：",prop:"image"}},[a("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.modalPicTap("1")}}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:t.formValidate.image}})]):a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])])],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品轮播图：",prop:"slider_image"}},[a("div",{staticClass:"acea-row"},[t._l(t.formValidate.slider_image,(function(e,i){return a("div",{key:i,staticClass:"pictrue",attrs:{draggable:"false"},on:{dragstart:function(a){return t.handleDragStart(a,e)},dragover:function(a){return a.preventDefault(),t.handleDragOver(a,e)},dragenter:function(a){return t.handleDragEnter(a,e)},dragend:function(a){return t.handleDragEnd(a,e)}}},[a("img",{attrs:{src:e}}),t._v(" "),a("i",{staticClass:"el-icon-error btndel",on:{click:function(e){return t.handleRemove(i)}}})])})),t._v(" "),t.formValidate.slider_image.length<10?a("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.modalPicTap("2")}}},[a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])]):t._e()],2)])],1),t._v(" "),a("el-col",{staticClass:"sp100"},[a("el-form-item",{attrs:{label:"商品名称：",prop:"store_name"}},[a("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.formValidate.store_name,callback:function(e){t.$set(t.formValidate,"store_name",e)},expression:"formValidate.store_name"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{staticClass:"sp100"},[a("el-form-item",{attrs:{label:"助力活动简介：",prop:"store_info"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入助力活动简介"},model:{value:t.formValidate.store_info,callback:function(e){t.$set(t.formValidate,"store_info",e)},expression:"formValidate.store_info"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"活动时间：",required:""}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},on:{change:t.onchangeTime},model:{value:t.assist_date,callback:function(e){t.assist_date=e},expression:"assist_date"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"助力人数：",prop:"assist_count"}},[a("el-input-number",{attrs:{min:1,placeholder:"请输入人数"},model:{value:t.formValidate.assist_count,callback:function(e){t.$set(t.formValidate,"assist_count",t._n(e))},expression:"formValidate.assist_count"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"用户助力次数：",prop:"assist_user_count"}},[a("el-input-number",{attrs:{min:1,placeholder:"请输入次数"},model:{value:t.formValidate.assist_user_count,callback:function(e){t.$set(t.formValidate,"assist_user_count",t._n(e))},expression:"formValidate.assist_user_count"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"单位：",prop:"unit_name"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入单位"},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"排序："}},[a("el-input-number",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入排序序号"},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"限购："}},[a("el-input-number",{attrs:{min:1,placeholder:"请输入限购数"},model:{value:t.formValidate.pay_count,callback:function(e){t.$set(t.formValidate,"pay_count",e)},expression:"formValidate.pay_count"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"活动状态："}},[a("el-radio-group",{model:{value:t.formValidate.is_show,callback:function(e){t.$set(t.formValidate,"is_show",e)},expression:"formValidate.is_show"}},[a("el-radio",{staticClass:"radio",attrs:{label:0}},[t._v("关闭")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("开启")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"运费模板：",prop:"temp_id"}},[a("div",{staticClass:"acea-row"},[a("el-select",{staticClass:"selWidthd mr20",attrs:{placeholder:"请选择"},model:{value:t.formValidate.temp_id,callback:function(e){t.$set(t.formValidate,"temp_id",e)},expression:"formValidate.temp_id"}},t._l(t.shippingList,(function(t){return a("el-option",{key:t.shipping_template_id,attrs:{label:t.name,value:t.shipping_template_id}})})),1),t._v(" "),a("el-button",{staticClass:"mr15",attrs:{size:"small"},on:{click:t.addTem}},[t._v("添加运费模板")])],1)])],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[0===t.formValidate.spec_type?a("el-form-item",[a("el-table",{staticClass:"tabNumWidth",attrs:{data:t.OneattrValue,border:"",size:"mini"}},[a("el-table-column",{attrs:{align:"center",label:"图片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"upLoadPicBox"},[t.formValidate.image?a("div",{staticClass:"pictrue tabPic"},[a("img",{attrs:{src:e.row.image}})]):a("div",{staticClass:"upLoad tabPic"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])]}}],null,!1,1903352531)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"原价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["price"]))])]}}],null,!1,1703924291)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"助力价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0,max:e.row["price"]},on:{blur:function(a){return t.limitPrice(e.row)}},model:{value:e.row["assist_price"],callback:function(a){t.$set(e.row,"assist_price",t._n(a))},expression:"scope.row['assist_price']"}})]}}],null,!1,889098068)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"成本价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["cost"]))])]}}],null,!1,4236060069)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"库存","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["old_stock"]))])]}}],null,!1,1655454038)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"限量","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",max:e.row["old_stock"],min:0},model:{value:e.row["stock"],callback:function(a){t.$set(e.row,"stock",a)},expression:"scope.row['stock']"}})]}}],null,!1,1088110974)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品编号","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["bar_code"]))])]}}],null,!1,2057585133)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"重量（KG）","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["weight"]))])]}}],null,!1,1649766542)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"体积（m³）","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["volume"]))])]}}],null,!1,2118841126)})],1)],1):t._e()],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[1===t.formValidate.spec_type?a("el-form-item",{staticClass:"labeltop",attrs:{label:"规格列表："}},[a("el-table",{ref:"multipleTable",attrs:{data:t.ManyAttrValue,"tooltip-effect":"dark","highlight-current-row":"","row-key":function(t){return t.id}}},[a("el-table-column",{attrs:{label:"选择",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{attrs:{label:e.$index},nativeOn:{change:function(a){return t.getCurrentRow(e.row)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}})]}}],null,!1,4056121160)}),t._v(" "),t.manyTabDate?t._l(t.manyTabDate,(function(e,i){return a("el-table-column",{key:i,attrs:{align:"center",label:t.manyTabTit[i].title,"min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox",domProps:{textContent:t._s(e.row[i])}})]}}],null,!0)})})):t._e(),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"图片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"upLoadPicBox"},[t.row.image?a("div",{staticClass:"pictrue tabPic"},[a("img",{attrs:{src:t.row.image}})]):a("div",{staticClass:"upLoad tabPic"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])]}}],null,!1,2631442157)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"原价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["price"]))])]}}],null,!1,1703924291)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"助力价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0,max:e.row["price"]},model:{value:e.row["assist_price"],callback:function(a){t.$set(e.row,"assist_price",t._n(a))},expression:" scope.row['assist_price']"}})]}}],null,!1,1728601574)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"成本价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["cost"]))])]}}],null,!1,4236060069)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"库存","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["old_stock"]))])]}}],null,!1,1655454038)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"限量","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0,max:e.row["old_stock"]},model:{value:e.row["stock"],callback:function(a){t.$set(e.row,"stock",a)},expression:"scope.row['stock']"}})]}}],null,!1,1335772286)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品编号","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["bar_code"]))])]}}],null,!1,2057585133)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"重量（KG）","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["weight"]))])]}}],null,!1,1649766542)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"体积（m³）","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["volume"]))])]}}],null,!1,2118841126)})],2)],1):t._e()],1)],1),t._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:2===t.currentTab,expression:"currentTab === 2"}]},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品详情："}},[a("ueditorFrom",{attrs:{content:t.formValidate.content},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1)],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-top":"30px"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentTab>0,expression:"currentTab>0"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:t.handleSubmitUp}},[t._v("上一步")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.currentTab,expression:"currentTab == 0"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSubmitNest1("formValidate")}}},[t._v("下一步")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.currentTab,expression:"currentTab == 1"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSubmitNest2("formValidate")}}},[t._v("下一步")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===t.currentTab,expression:"currentTab===2"}],staticClass:"submission",attrs:{loading:t.loading,type:"primary",size:"small"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1)],1)],1),t._v(" "),a("goods-list",{ref:"goodsList",on:{getProduct:t.getProduct}})],1)},s=[],r=a("75fc"),n=(a("7f7f"),a("96cf"),a("3b8d")),o=a("2d63"),l=(a("8615"),a("55dd"),a("ac6a"),a("6762"),a("2fdb"),a("ef0d")),c=a("6625"),u=a.n(c),d=a("7719"),m=a("c4c8"),p=a("83d6"),f={product_id:"",image:"",slider_image:[],store_name:"",store_info:"",start_day:"",end_day:"",start_time:"",end_time:"",is_open_recommend:1,is_open_state:1,is_show:1,keyword:"",brand_id:"",cate_id:"",mer_cate_id:[],pay_count:1,unit_name:"",assist_user_count:1,assist_count:2,integral:0,is_good:0,temp_id:"",assist_date:"",attrValue:[{image:"",price:null,assist_price:null,cost:null,ot_price:null,old_stock:null,stock:null,bar_code:"",weight:null,volume:null}],attr:[],extension_type:0,content:"",spec_type:0,is_gift_bag:0},_=[{name:"店铺推荐",value:"is_good"}],g={name:"ProductProductAdd",components:{ueditorFrom:l["a"],goodsList:d["a"],VueUeditorWrap:u.a},data:function(){return{radio:"",multipleTable:[],myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:""},pickerOptions:{disabledDate:function(t){}},dialogVisible:!1,product_id:"",optionsCate:{value:"store_category_id",label:"cate_name",children:"children",emitPath:!1},roterPre:p["roterPre"],selectRule:"",checkboxGroup:[],recommend:_,tabs:[],fullscreenLoading:!1,props:{emitPath:!1},propsMer:{emitPath:!1,multiple:!0},active:0,OneattrValue:[Object.assign({},f.attrValue[0])],ManyAttrValue:[Object.assign({},f.attrValue[0])],ruleList:[],merCateList:[],categoryList:[],shippingList:[],spikeTimeList:[],BrandList:[],formValidate:Object.assign({},f),timeVal:"",assist_date:"",maxStock:"",addNum:0,singleSpecification:{},multipleSpecifications:[],formDynamics:{template_name:"",template_value:[]},manyTabTit:{},manyTabDate:{},grid2:{lg:10,md:12,sm:24,xs:24},formDynamic:{attrsName:"",attrsVal:""},isBtn:!1,manyFormValidate:[],images:[],currentTab:0,isChoice:"",grid:{xl:8,lg:8,md:12,sm:24,xs:24},loading:!1,ruleValidate:{store_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],assist_date:[{required:!0,message:"请选择助力活动时间",trigger:"blur"}],mer_cate_id:[{required:!0,message:"请选择商户分类",trigger:"change",type:"array",min:"1"}],cate_id:[{required:!0,message:"请选择平台分类",trigger:"change"}],keyword:[{required:!0,message:"请输入商品关键字",trigger:"blur"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],assist_user_count:[{required:!0,message:"请输入助力人数",trigger:"blur",type:"number"}],assist_count:[{required:!0,message:"请输入助力次数",trigger:"blur"}],store_info:[{required:!0,message:"请输入秒杀活动简介",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change"}],image:[{required:!0,message:"请上传商品图",trigger:"change"}],slider_image:[{required:!0,message:"请上传商品轮播图",type:"array",trigger:"change"}]},attrInfo:{},keyNum:0,extensionStatus:0}},computed:{attrValue:function(){var t=Object.assign({},f.attrValue[0]);return delete t.image,t},oneFormBatch:function(){var t=[Object.assign({},f.attrValue[0])];return delete t[0].bar_code,t}},watch:{"formValidate.attr":{handler:function(t){1===this.formValidate.spec_type&&this.watCh(t)},immediate:!1,deep:!0}},created:function(){this.tempRoute=Object.assign({},this.$route)},mounted:function(){var t=this;this.formValidate.slider_image=[],this.$route.params.id?(this.setTagsViewTitle(),this.getInfo(this.$route.params.id),this.currentTab=1):this.formValidate.attr.map((function(e){t.$set(e,"inputVisible",!1)})),this.getCategorySelect(),this.getCategoryList(),this.getBrandListApi(),this.getShippingList(),this.$store.dispatch("settings/setEdit",!0)},methods:{getCurrentRow:function(t){t.checked=!0,this.multipleTable=t,this.formValidate.attrValue=[t]},limitPrice:function(t){t.assist_price-t.price>0?t.assist_price=t.price:t.assist_price<0&&(t.assist_price=0)},add:function(){this.$refs.goodsList.dialogVisible=!0},getProduct:function(t){this.formValidate.image=t.src,this.product_id=t.id,console.log(this.product_id)},onchangeTime:function(t){this.assist_date=t,console.log(this.moment(t[0]).format("YYYY-MM-DD HH:mm:ss")),this.formValidate.start_time=t?this.moment(t[0]).format("YYYY-MM-DD HH:mm:ss"):"",this.formValidate.end_time=t?this.moment(t[1]).format("YYYY-MM-DD HH:mm:ss"):""},setTagsViewTitle:function(){var t="编辑商品",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.$route.params.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},onChangeGroup:function(){this.checkboxGroup.includes("is_good")?this.formValidate.is_good=1:this.formValidate.is_good=0},watCh:function(t){var e=this,a={},i={};this.formValidate.attr.forEach((function(t,e){a["value"+e]={title:t.value},i["value"+e]=""})),this.ManyAttrValue.forEach((function(t,a){var i=Object.values(t.detail).sort().join("/");e.attrInfo[i]&&(e.ManyAttrValue[a]=e.attrInfo[i])})),this.attrInfo={},this.ManyAttrValue.forEach((function(t){e.attrInfo[Object.values(t.detail).sort().join("/")]=t})),this.manyTabTit=a,this.manyTabDate=i},addTem:function(){var t=this;this.$modalTemplates(0,(function(){t.getShippingList()}))},getCategorySelect:function(){var t=this;Object(m["n"])().then((function(e){t.merCateList=e.data})).catch((function(e){t.$message.error(e.message)}))},getCategoryList:function(){var t=this;Object(m["m"])().then((function(e){t.categoryList=e.data})).catch((function(e){t.$message.error(e.message)}))},getBrandListApi:function(){var t=this;Object(m["l"])().then((function(e){t.BrandList=e.data})).catch((function(e){t.$message.error(e.message)}))},productGetRule:function(){var t=this;Object(m["db"])().then((function(e){t.ruleList=e.data}))},getShippingList:function(){var t=this;Object(m["Q"])().then((function(e){t.shippingList=e.data}))},delAttrTable:function(t){this.ManyAttrValue.splice(t,1)},batchAdd:function(){var t,e=Object(o["a"])(this.ManyAttrValue);try{for(e.s();!(t=e.n()).done;){var a=t.value;this.$set(a,"image",this.oneFormBatch[0].image),this.$set(a,"price",this.oneFormBatch[0].price),this.$set(a,"cost",this.oneFormBatch[0].cost),this.$set(a,"ot_price",this.oneFormBatch[0].ot_price),this.$set(a,"stock",this.oneFormBatch[0].stock),this.$set(a,"bar_code",this.oneFormBatch[0].bar_code),this.$set(a,"weight",this.oneFormBatch[0].weight),this.$set(a,"volume",this.oneFormBatch[0].volume),this.$set(a,"extension_one",this.oneFormBatch[0].extension_one),this.$set(a,"extension_two",this.oneFormBatch[0].extension_two)}}catch(i){e.e(i)}finally{e.f()}},getInfo:function(t){var e=this;this.fullscreenLoading=!0,this.$route.params.id?Object(m["e"])(t).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=a.data,e.formValidate={product_id:i.product_id,image:i.product.image,slider_image:i.product.slider_image,store_name:i.store_name,store_info:i.store_info,assist_count:i.assist_count?i.assist_count:2,assist_user_count:i.assist_user_count?i.assist_user_count:1,start_time:i.start_time?i.start_time+":00":"",end_time:i.end_time?i.end_time+":00":"",brand_id:i.product.brand_id,cate_id:i.cate_id?i.cate_id:"",mer_cate_id:i.mer_cate_id,pay_count:i.pay_count?i.pay_count:1,unit_name:i.product.unit_name,is_good:i.product.is_good,temp_id:i.product.temp_id,is_show:i.is_show,attr:i.product.attr,sort:i.product.sort,extension_type:i.extension_type,content:i.product.content.content,spec_type:i.product.spec_type,is_gift_bag:i.product.is_gift_bag},0===e.formValidate.spec_type?(e.OneattrValue=i.product.attrValue,e.$set(e.OneattrValue[0],"assist_price",e.OneattrValue[0].assistSku.assist_price?e.OneattrValue[0].assistSku.assist_price:0),e.$set(e.OneattrValue[0],"stock",e.OneattrValue[0].assistSku?e.OneattrValue[0].assistSku.stock:e.OneattrValue[0].old_stock)):(e.ManyAttrValue=i.product.attrValue,e.ManyAttrValue.forEach((function(t,a){e.attrInfo[Object.values(t.detail).sort().join("/")]=t,e.$set(e.ManyAttrValue[a],"assist_price",e.ManyAttrValue[a].assistSku&&e.ManyAttrValue[a].assistSku.assist_price?e.ManyAttrValue[a].assistSku.assist_price:0),e.$set(e.ManyAttrValue[a],"stock",e.ManyAttrValue[a].assistSku?e.ManyAttrValue[a].assistSku.stock:e.ManyAttrValue[a].old_stock),e.ManyAttrValue[a].assistSku&&e.$nextTick((function(){e.radio=a,e.$refs.multipleTable.setCurrentRow(e.ManyAttrValue[a]),e.formValidate.attrValue=[e.ManyAttrValue[a]]}))}))),1===e.formValidate.is_good&&e.checkboxGroup.push("is_good"),e.fullscreenLoading=!1,e.assist_date=[i.start_time,i.end_time],e.$store.dispatch("settings/setEdit",!0);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.$message.error(t.message)})):Object(m["D"])(t).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=a.data,e.formValidate={product_id:i.product_id,image:i.image,slider_image:i.slider_image,store_name:i.store_name,store_info:i.store_info,assist_count:i.assist_count?i.assist_count:2,assist_user_count:i.assist_user_count?i.assist_user_count:1,start_time:i.start_time?i.start_time+":00":"",end_time:i.end_time?i.end_time+":00":"",brand_id:i.brand_id,cate_id:i.cate_id,mer_cate_id:i.mer_cate_id,pay_count:i.pay_count?i.pay_count:1,unit_name:i.unit_name,is_good:i.is_good,temp_id:i.temp_id,is_show:i.is_show,attr:i.attr,sort:i.sort?i.sort:0,extension_type:i.extension_type,content:i.content,spec_type:i.spec_type,is_gift_bag:i.is_gift_bag},e.assist_date="",0===e.formValidate.spec_type?(e.OneattrValue=i.attrValue,e.OneattrValue.assist_price=e.OneattrValue.assist_price?e.OneattrValue.assist_price:0):(e.ManyAttrValue=i.attrValue,e.ManyAttrValue.forEach((function(t,a){e.attrInfo[Object.values(t.detail).sort().join("/")]=t,e.$set(e.ManyAttrValue[a],"assist_price",0)})),console.log(e.ManyAttrValue)),1===e.formValidate.is_good&&e.checkboxGroup.push("is_good"),e.fullscreenLoading=!1;case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.$message.error(t.message)}))},handleRemove:function(t){this.formValidate.slider_image.splice(t,1)},modalPicTap:function(t,e,a){var i=this,s=[];this.$modalUpload((function(r){"1"!==t||e||(i.formValidate.image=r[0],i.OneattrValue[0].image=r[0]),"2"!==t||e||r.map((function(t){s.push(t.attachment_src),i.formValidate.slider_image.push(t),i.formValidate.slider_image.length>10&&(i.formValidate.slider_image.length=10)})),"1"===t&&"dan"===e&&(i.OneattrValue[0].image=r[0]),"1"===t&&"duo"===e&&(i.ManyAttrValue[a].image=r[0]),"1"===t&&"pi"===e&&(i.oneFormBatch[0].image=r[0])}),t)},handleSubmitUp:function(){this.currentTab--<0&&(this.currentTab=0)},handleSubmitNest1:function(t){this.formValidate.image?(this.currentTab++,this.$route.params.id||this.getInfo(this.product_id)):this.$message.warning("请选择商品！")},handleSubmitNest2:function(t){var e=this;0===this.formValidate.spec_type&&(this.formValidate.attrValue=this.OneattrValue),this.$refs[t].validate((function(t){if(t){if(!e.formValidate.store_name||!e.formValidate.store_info||!e.formValidate.image||!e.formValidate.slider_image)return void e.$message.warning("请填写完整商品信息！");if(!e.formValidate.attrValue||0===e.formValidate.attrValue.length)return void e.$message.warning("请选择商品规格！");e.currentTab++}}))},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(a){a?(e.$store.dispatch("settings/setEdit",!1),e.fullscreenLoading=!0,e.loading=!0,e.$route.params.id?Object(m["h"])(e.$route.params.id,e.formValidate).then(function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.fullscreenLoading=!1,e.$message.success(i.message),e.$router.push({path:e.roterPre+"/marketing/assist/list"}),e.$refs[t].resetFields(),e.formValidate.slider_image=[],e.loading=!1;case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.loading=!1,e.$message.error(t.message)})):Object(m["a"])(e.formValidate).then(function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.fullscreenLoading=!1,e.$message.success(i.message),e.$router.push({path:e.roterPre+"/marketing/assist/list"}),e.$refs[t].resetFields(),e.formValidate.slider_image=[],e.loading=!1;case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.loading=!1,e.$message.error(t.message)}))):e.formValidate.store_name&&e.formValidate.store_info&&e.formValidate.image&&e.formValidate.slider_image||e.$message.warning("请填写完整商品信息！")}))},validate:function(t,e,a){!1===e&&this.$message.warning(a)},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){if(t.dataTransfer.effectAllowed="move",e!==this.dragging){var a=Object(r["a"])(this.formValidate.slider_image),i=a.indexOf(this.dragging),s=a.indexOf(e);a.splice.apply(a,[s,0].concat(Object(r["a"])(a.splice(i,1)))),this.formValidate.slider_image=a}}}},h=g,b=(a("7ef1"),a("2877")),v=Object(b["a"])(h,i,s,!1,null,"41d57ab3",null);e["default"]=v.exports},ef0d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1)},s=[],r=a("6625"),n=a.n(r),o=a("83d6"),l={name:"Index",components:{VueUeditorWrap:n.a},scrollerHeight:{content:String,default:""},props:{content:{type:String,default:""}},data:function(){return{contents:this.content,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:"http://35.201.165.105:8000/controller.php"}}},watch:{content:function(t){this.contents=this.content},contents:function(t){this.$emit("input",t)}},created:function(){},methods:{addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var a=new window.UE.ui.Dialog({iframeUrl:o["roterPre"]+"/setting/uploadPicture?field=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1000px;height:620px;padding:20px;"});this.dialog=a;var i=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(@/assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}});return i}),37)}}},c=l,u=a("2877"),d=Object(u["a"])(c,i,s,!1,null,"2ee187e6",null);e["a"]=d.exports}}]);