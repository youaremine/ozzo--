(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31d235dd"],{"2b24":function(t,e,a){},3260:function(t,e,a){},"504c":function(t,e,a){var i=a("9e1e"),r=a("0d58"),s=a("6821"),n=a("52a7").f;t.exports=function(t){return function(e){var a,l=s(e),o=r(l),c=o.length,d=0,m=[];while(c>d)a=o[d++],i&&!n.call(l,a)||m.push(t?[a,l[a]]:l[a]);return m}}},"64a3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-steps",{attrs:{active:t.currentTab,"align-center":"","finish-status":"success"}},[a("el-step",{attrs:{title:"選擇秒殺商品"}}),t._v(" "),a("el-step",{attrs:{title:"填寫基礎信息"}}),t._v(" "),a("el-step",{attrs:{title:"修改商品詳情"}})],1)],1),t._v(" "),a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.fullscreenLoading,expression:"fullscreenLoading"}],ref:"formValidate",staticClass:"formValidate mt20",attrs:{rules:t.ruleValidate,model:t.formValidate,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.currentTab,expression:"currentTab === 0"}],staticStyle:{overflow:"hidden"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"選擇商品：",prop:"spike_image"}},[a("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.add()}}},[t.formValidate.spike_image?a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:t.formValidate.spike_image}})]):a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.currentTab,expression:"currentTab === 1"}]},[a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"商品主圖：",prop:"image"}},[a("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.modalPicTap("1")}}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:t.formValidate.image}})]):a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])])],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品輪播圖：",prop:"slider_image"}},[a("div",{staticClass:"acea-row"},[t._l(t.formValidate.slider_image,(function(e,i){return a("div",{key:i,staticClass:"pictrue",attrs:{draggable:"false"},on:{dragstart:function(a){return t.handleDragStart(a,e)},dragover:function(a){return a.preventDefault(),t.handleDragOver(a,e)},dragenter:function(a){return t.handleDragEnter(a,e)},dragend:function(a){return t.handleDragEnd(a,e)}}},[a("img",{attrs:{src:e}}),t._v(" "),a("i",{staticClass:"el-icon-error btndel",on:{click:function(e){return t.handleRemove(i)}}})])})),t._v(" "),t.formValidate.slider_image.length<10?a("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.modalPicTap("2")}}},[a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])]):t._e()],2)])],1),t._v(" "),a("el-col",{staticClass:"sp100"},[a("el-form-item",{attrs:{label:"商品名稱：",prop:"store_name"}},[a("el-input",{attrs:{placeholder:"請輸入商品名稱"},model:{value:t.formValidate.store_name,callback:function(e){t.$set(t.formValidate,"store_name",e)},expression:"formValidate.store_name"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{staticClass:"sp100"},[a("el-form-item",{attrs:{label:"秒殺活動簡介：",prop:"store_info"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"請輸入秒殺活動簡介"},model:{value:t.formValidate.store_info,callback:function(e){t.$set(t.formValidate,"store_info",e)},expression:"formValidate.store_info"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"秒殺活動日期："}},[a("i",{staticClass:"required"},[t._v("*")]),t._v(" "),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"請選擇活動時間"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"活動日期內最多購買次數：",prop:"all_pay_count","label-width":"210px"}},[a("el-input-number",{model:{value:t.formValidate.all_pay_count,callback:function(e){t.$set(t.formValidate,"all_pay_count",e)},expression:"formValidate.all_pay_count"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"秒殺活動日期："}},[a("i",{staticClass:"required"},[t._v("*")]),t._v(" "),a("div",{staticClass:"acea-row"},[a("el-select",{staticClass:"selWidthd mr20",attrs:{placeholder:"請選擇"},on:{change:t.onchangeTime2},model:{value:t.timeVal2,callback:function(e){t.timeVal2=e},expression:"timeVal2"}},t._l(t.spikeTimeList,(function(t){return a("el-option",{key:t.seckill_time_id,attrs:{label:t.name,value:t.name}})})),1)],1)])],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"秒殺時間段內最多購買次數：",prop:"once_pay_count","label-width":"210px"}},[a("el-input-number",{model:{value:t.formValidate.once_pay_count,callback:function(e){t.$set(t.formValidate,"once_pay_count",e)},expression:"formValidate.once_pay_count"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"單位：",prop:"unit_name"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"請輸入單位"},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"排序：","label-width":"210px"}},[a("el-input-number",{staticStyle:{width:"200px"},attrs:{placeholder:"請輸入排序序號"},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"運費模板：",prop:"temp_id"}},[a("div",{staticClass:"acea-row"},[a("el-select",{staticClass:"selWidthd mr20",attrs:{placeholder:"請選擇"},model:{value:t.formValidate.temp_id,callback:function(e){t.$set(t.formValidate,"temp_id",e)},expression:"formValidate.temp_id"}},t._l(t.shippingList,(function(t){return a("el-option",{key:t.shipping_template_id,attrs:{label:t.name,value:t.shipping_template_id}})})),1),t._v(" "),a("el-button",{staticClass:"mr15",attrs:{size:"small"},on:{click:t.addTem}},[t._v("添加運費模板")])],1)])],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"活動狀態："}},[a("el-radio-group",{model:{value:t.formValidate.is_show,callback:function(e){t.$set(t.formValidate,"is_show",e)},expression:"formValidate.is_show"}},[a("el-radio",{staticClass:"radio",attrs:{label:0}},[t._v("關閉")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("開啟")])],1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[0===t.formValidate.spec_type?a("el-form-item",[a("el-table",{staticClass:"tabNumWidth",attrs:{data:t.OneattrValue,border:"",size:"mini"}},[a("el-table-column",{attrs:{align:"center",label:"圖片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.modalPicTap("1","dan","pi")}}},[t.formValidate.image?a("div",{staticClass:"pictrue tabPic"},[a("img",{attrs:{src:e.row.image}})]):a("div",{staticClass:"upLoad tabPic"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])]}}],null,!1,1357914119)}),t._v(" "),t._l(t.attrValue,(function(e,i){return a("el-table-column",{key:i,attrs:{label:t.formThead[i].title,align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return["限量"==t.formThead[i].title?a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0},on:{change:function(a){return t.judgInventory(e.row)}},model:{value:e.row[i],callback:function(a){t.$set(e.row,i,a)},expression:"scope.row[iii]"}}):"秒殺價"==t.formThead[i].title?a("el-input",{staticClass:"priceBox",attrs:{type:"商品編號"===t.formThead[i].title?"text":"number",min:0},model:{value:e.row[i],callback:function(a){t.$set(e.row,i,a)},expression:"scope.row[iii]"}}):a("span",[t._v(t._s(e.row[i]))])]}}],null,!0)})}))],2)],1):t._e()],1)],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[1===t.formValidate.spec_type&&t.formValidate.attr.length>0?a("el-form-item",{staticClass:"labeltop",attrs:{label:"規格列表："}},[a("el-table",{ref:"multipleSelection",attrs:{data:t.ManyAttrValue,"tooltip-effect":"dark","row-key":function(t){return t.id}},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection","reserve-selection":!0,"min-width":"50"}}),t._v(" "),t.manyTabDate?t._l(t.manyTabDate,(function(e,i){return a("el-table-column",{key:i,attrs:{align:"center",label:t.manyTabTit[i].title,"min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox",domProps:{textContent:t._s(e.row[i])}})]}}],null,!0)})})):t._e(),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"圖片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"upLoadPicBox",on:{click:function(a){return t.modalPicTap("1","duo",e.$index)}}},[e.row.image?a("div",{staticClass:"pictrue tabPic"},[a("img",{attrs:{src:e.row.image}})]):a("div",{staticClass:"upLoad tabPic"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])]}}],null,!1,3478746955)}),t._v(" "),t._l(t.attrValue,(function(e,i){return a("el-table-column",{key:i,attrs:{label:t.formThead[i].title,align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return["限量"==t.formThead[i].title?a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0},on:{change:function(a){return t.judgInventory(e.row,e.$index)}},model:{value:e.row[i],callback:function(a){t.$set(e.row,i,a)},expression:"scope.row[iii]"}}):"秒殺價"==t.formThead[i].title?a("el-input",{staticClass:"priceBox",attrs:{type:"商品編號"===t.formThead[i].title?"text":"number"},model:{value:e.row[i],callback:function(a){t.$set(e.row,i,a)},expression:"scope.row[iii]"}}):a("span",[t._v(t._s(e.row[i]))])]}}],null,!0)})}))],2)],1):t._e()],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"商戶商品分類：",prop:"mer_cate_id"}},[a("el-cascader",{staticClass:"selWidth",attrs:{options:t.merCateList,props:t.propsMer,clearable:""},model:{value:t.formValidate.mer_cate_id,callback:function(e){t.$set(t.formValidate,"mer_cate_id",e)},expression:"formValidate.mer_cate_id"}})],1)],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid2,!1),[a("el-form-item",{attrs:{label:"平台商品分類：",prop:"cate_id"}},[a("el-cascader",{staticClass:"selWidth",attrs:{options:t.categoryList,props:t.props,clearable:""},model:{value:t.formValidate.cate_id,callback:function(e){t.$set(t.formValidate,"cate_id",e)},expression:"formValidate.cate_id"}})],1)],1)],1)],1),t._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:2===t.currentTab,expression:"currentTab === 2"}]},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品詳情："}},[a("ueditorFrom",{attrs:{content:t.formValidate.content},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1)],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-top":"30px"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentTab>0,expression:"currentTab>0"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:t.handleSubmitUp}},[t._v("上一步")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.currentTab,expression:"currentTab == 0"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSubmitNest1("formValidate")}}},[t._v("下一步")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.currentTab,expression:"currentTab == 1"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSubmitNest2("formValidate")}}},[t._v("下一步")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===t.currentTab,expression:"currentTab===2"}],staticClass:"submission",attrs:{loading:t.loading,type:"primary",size:"small"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1)],1)],1),t._v(" "),a("goods-list",{ref:"goodsList",on:{getProduct:t.getProduct}})],1)},r=[],s=a("2909"),n=(a("7f7f"),a("96cf"),a("1da1")),l=a("b85c"),o=(a("8615"),a("55dd"),a("ac6a"),a("6762"),a("2fdb"),a("28a5"),a("ef0d")),c=a("6625"),d=a.n(c),m=a("7719"),u=a("c4c8"),f=a("83d6"),p={old_product_id:"",image:"",spike_image:"",slider_image:[],store_name:"",store_info:"",start_day:"",end_day:"",start_time:"",end_time:"",all_pay_count:1,once_pay_count:1,is_open_recommend:1,is_open_state:1,is_show:1,keyword:"",brand_id:"",cate_id:"",mer_cate_id:[],unit_name:"",integral:0,sort:0,is_good:0,temp_id:"",attrValue:[{image:"",price:null,cost:null,ot_price:null,old_stock:null,stock:null,bar_code:"",weight:null,volume:null}],attr:[],extension_type:0,content:"",spec_type:0,is_gift_bag:0},g={price:{title:"秒殺價"},cost:{title:"成本價"},ot_price:{title:"原價"},old_stock:{title:"庫存"},stock:{title:"限量"},bar_code:{title:"商品編號"},weight:{title:"重量（KG）"},volume:{title:"體積(m³)"}},h=[{name:"店鋪推薦",value:"is_good"}],_={name:"ProductProductAdd",components:{ueditorFrom:o["a"],goodsList:m["a"],VueUeditorWrap:d.a},data:function(){return{myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:""},pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},dialogVisible:!1,product_id:"",multipleSelection:[],optionsCate:{value:"store_category_id",label:"cate_name",children:"children",emitPath:!1},roterPre:f["roterPre"],selectRule:"",checkboxGroup:[],recommend:h,tabs:[],fullscreenLoading:!1,props:{emitPath:!1},propsMer:{emitPath:!1,multiple:!0},active:0,OneattrValue:[Object.assign({},p.attrValue[0])],ManyAttrValue:[Object.assign({},p.attrValue[0])],ruleList:[],merCateList:[],categoryList:[],shippingList:[],spikeTimeList:[],BrandList:[],formThead:Object.assign({},g),formValidate:Object.assign({},p),timeVal:"",timeVal2:"",maxStock:"",addNum:0,singleSpecification:{},multipleSpecifications:[],formDynamics:{template_name:"",template_value:[]},manyTabTit:{},manyTabDate:{},grid2:{lg:10,md:12,sm:24,xs:24},formDynamic:{attrsName:"",attrsVal:""},isBtn:!1,manyFormValidate:[],images:[],currentTab:0,isChoice:"",grid:{xl:8,lg:8,md:12,sm:24,xs:24},loading:!1,ruleValidate:{store_name:[{required:!0,message:"請輸入商品名稱",trigger:"blur"}],activity_date:[{required:!0,message:"請輸入秒殺活動日期",trigger:"blur"}],activity_time:[{required:!0,message:"請輸入秒殺活動日期",trigger:"blur"}],all_pay_count:[{required:!0,message:"請輸入購買次數",trigger:"blur"},{pattern:/^\+?[1-9][0-9]*$/,message:"最小為1"}],once_pay_count:[{required:!0,message:"請輸入購買次數",trigger:"blur"},{pattern:/^\+?[1-9][0-9]*$/,message:"最小為1"}],mer_cate_id:[{required:!0,message:"請選擇商戶分類",trigger:"change",type:"array",min:"1"}],cate_id:[{required:!0,message:"請選擇平台分類",trigger:"change"}],keyword:[{required:!0,message:"請輸入商品關鍵字",trigger:"blur"}],unit_name:[{required:!0,message:"請輸入單位",trigger:"blur"}],store_info:[{required:!0,message:"請輸入秒殺活動簡介",trigger:"blur"}],temp_id:[{required:!0,message:"請選擇運費模板",trigger:"change"}],image:[{required:!0,message:"請上傳商品圖",trigger:"change"}],spike_image:[{required:!0,message:"請選擇商品",trigger:"change"}],slider_image:[{required:!0,message:"請上傳商品輪播圖",type:"array",trigger:"change"}]},attrInfo:{},keyNum:0,extensionStatus:0}},computed:{attrValue:function(){var t=Object.assign({},p.attrValue[0]);return delete t.image,t},oneFormBatch:function(){var t=[Object.assign({},p.attrValue[0])];return delete t[0].bar_code,t}},watch:{"formValidate.attr":{handler:function(t){1===this.formValidate.spec_type&&this.watCh(t)},immediate:!1,deep:!0}},created:function(){this.tempRoute=Object.assign({},this.$route),this.$route.params.id&&1===this.formValidate.spec_type&&this.$watch("formValidate.attr",this.watCh)},mounted:function(){var t=this;this.formValidate.slider_image=[],this.$route.params.id&&(this.setTagsViewTitle(),this.getInfo(this.$route.params.id)),this.formValidate.attr.map((function(e){t.$set(e,"inputVisible",!1)})),this.getCategorySelect(),this.getCategoryList(),this.getBrandListApi(),this.getShippingList(),this.getSpikeTimeList(),this.$store.dispatch("settings/setEdit",!0)},methods:{add:function(){this.$refs.goodsList.dialogVisible=!0},getProduct:function(t){this.formValidate.spike_image=t.src,this.product_id=t.id,console.log(this.product_id)},handleSelectionChange:function(t){this.multipleSelection=t},onchangeTime:function(t){this.timeVal=t,this.formValidate.start_day=t?t[0]:"",this.formValidate.end_day=t?t[1]:""},onchangeTime2:function(t){this.timeVal2=t,this.formValidate.start_time=t?t.split("-")[0]:"",this.formValidate.end_time=t?t.split("-")[1]:""},setTagsViewTitle:function(){var t="編輯商品",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.$route.params.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},onChangeGroup:function(){this.checkboxGroup.includes("is_good")?this.formValidate.is_good=1:this.formValidate.is_good=0},watCh:function(t){var e=this,a={},i={};this.formValidate.attr.forEach((function(t,e){a["value"+e]={title:t.value},i["value"+e]=""})),this.ManyAttrValue.forEach((function(t,a){var i=Object.values(t.detail).sort().join("/");e.attrInfo[i]&&(e.ManyAttrValue[a]=e.attrInfo[i])})),this.attrInfo={},this.ManyAttrValue.forEach((function(t){e.attrInfo[Object.values(t.detail).sort().join("/")]=t})),this.manyTabTit=a,this.manyTabDate=i,this.formThead=Object.assign({},this.formThead,a),console.log(this.formThead)},judgInventory:function(t,e){var a=t.stock;"undefined"==typeof e?this.singleSpecification[0]["old_stock"]<a&&(this.$message.warning("限量不能大於庫存！"),this.OneattrValue[0]["stock"]=this.singleSpecification[0]["old_stock"]):(console.log(this.multipleSpecifications[e]["old_stock"]),this.multipleSpecifications[e]["old_stock"]<a&&(this.$message.warning("限量不能大於庫存！"),this.ManyAttrValue[e]["stock"]=this.multipleSpecifications[e]["old_stock"]))},addTem:function(){var t=this;this.$modalTemplates(0,(function(){t.getShippingList()}))},getCategorySelect:function(){var t=this;Object(u["n"])().then((function(e){t.merCateList=e.data})).catch((function(e){t.$message.error(e.message)}))},getCategoryList:function(){var t=this;Object(u["m"])().then((function(e){t.categoryList=e.data})).catch((function(e){t.$message.error(e.message)}))},getBrandListApi:function(){var t=this;Object(u["l"])().then((function(e){t.BrandList=e.data})).catch((function(e){t.$message.error(e.message)}))},productGetRule:function(){var t=this;Object(u["db"])().then((function(e){t.ruleList=e.data}))},getShippingList:function(){var t=this;Object(u["Q"])().then((function(e){t.shippingList=e.data}))},getSpikeTimeList:function(){var t=this;Object(u["L"])().then((function(e){t.spikeTimeList=e.data,t.spikeTimeList.map((function(e){t.$set(e,"name",e.start_time+":00:00 - "+e.end_time+":00:00")}))}))},delAttrTable:function(t){this.ManyAttrValue.splice(t,1)},batchAdd:function(){var t,e=Object(l["a"])(this.ManyAttrValue);try{for(e.s();!(t=e.n()).done;){var a=t.value;this.$set(a,"image",this.oneFormBatch[0].image),this.$set(a,"price",this.oneFormBatch[0].price),this.$set(a,"cost",this.oneFormBatch[0].cost),this.$set(a,"ot_price",this.oneFormBatch[0].ot_price),this.$set(a,"stock",this.oneFormBatch[0].stock),this.$set(a,"bar_code",this.oneFormBatch[0].bar_code),this.$set(a,"weight",this.oneFormBatch[0].weight),this.$set(a,"volume",this.oneFormBatch[0].volume),this.$set(a,"extension_one",this.oneFormBatch[0].extension_one),this.$set(a,"extension_two",this.oneFormBatch[0].extension_two)}}catch(i){e.e(i)}finally{e.f()}},addBtn:function(){this.clearAttr(),this.isBtn=!0},offAttrName:function(){this.isBtn=!1},clearAttr:function(){this.formDynamic.attrsName="",this.formDynamic.attrsVal=""},handleRemoveAttr:function(t){this.formValidate.attr.splice(t,1),this.manyFormValidate.splice(t,1)},handleClose:function(t,e){t.splice(e,1)},getInfo:function(t){var e=this;this.fullscreenLoading=!0,Object(u["N"])(t).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=a.data,e.formValidate={old_product_id:i.product_id,image:i.image,spike_image:i.image,slider_image:i.slider_image,store_name:i.store_name,store_info:i.store_info,start_day:i.seckillActive?i.seckillActive.start_day:"",end_day:i.seckillActive?i.seckillActive.end_day:"",start_time:i.seckillActive?i.seckillActive.start_time+":00":"",end_time:i.seckillActive?i.seckillActive.end_time+":00":"",brand_id:i.brand_id,cate_id:i.cate_id,mer_cate_id:i.mer_cate_id,unit_name:i.unit_name,sort:i.sort,is_good:i.is_good,temp_id:i.temp_id,is_show:i.is_show,attr:i.attr,extension_type:i.extension_type,content:i.content,spec_type:i.spec_type,is_gift_bag:i.is_gift_bag,all_pay_count:i.seckillActive?i.seckillActive.all_pay_count:"1",once_pay_count:i.seckillActive?i.seckillActive.once_pay_count:"1"},0===e.formValidate.spec_type?(e.OneattrValue=i.attrValue,e.singleSpecification=JSON.parse(JSON.stringify(i.attrValue))):(e.ManyAttrValue=i.attrValue,e.multipleSpecifications=JSON.parse(JSON.stringify(i.attrValue)),e.ManyAttrValue.forEach((function(t){e.attrInfo[Object.values(t.detail).sort().join("/")]=t})),e.multipleSelection=i.attrValue,e.$nextTick((function(){i.attrValue.forEach((function(t){e.$refs.multipleSelection.toggleRowSelection(t,!0)}))}))),1===e.formValidate.is_good&&e.checkboxGroup.push("is_good"),e.fullscreenLoading=!1,e.$route.params.id&&i.seckillActive&&(e.timeVal=[i.seckillActive.start_day,i.seckillActive.end_day],e.timeVal2=i.seckillActive.start_time+":00:00-"+i.seckillActive.end_time+":00:00");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.$message.error(t.message)}))},handleRemove:function(t){this.formValidate.slider_image.splice(t,1)},modalPicTap:function(t,e,a){var i=this,r=[];this.$modalUpload((function(s){"1"!==t||e||(i.formValidate.image=s[0],i.OneattrValue[0].image=s[0]),"2"!==t||e||s.map((function(t){r.push(t.attachment_src),i.formValidate.slider_image.push(t),i.formValidate.slider_image.length>10&&(i.formValidate.slider_image.length=10)})),"1"===t&&"dan"===e&&(i.OneattrValue[0].image=s[0]),"1"===t&&"duo"===e&&(i.ManyAttrValue[a].image=s[0]),"1"===t&&"pi"===e&&(i.oneFormBatch[0].image=s[0])}),t)},handleSubmitUp:function(){this.currentTab--<0&&(this.currentTab=0)},handleSubmitNest1:function(t){this.formValidate.spike_image?(this.currentTab++,this.$route.params.id||this.getInfo(this.product_id)):this.$message.warning("請選擇商品！")},handleSubmitNest2:function(t){var e=this;1===this.formValidate.spec_type?this.formValidate.attrValue=this.multipleSelection:(this.formValidate.attrValue=this.OneattrValue,this.formValidate.attr=[]),this.$refs[t].validate((function(t){if(t){if(!e.formValidate.store_name||!e.formValidate.cate_id||!e.formValidate.unit_name||!e.formValidate.store_info||!e.formValidate.image||!e.formValidate.slider_image||!e.formValidate.start_day||!e.formValidate.end_day||!e.formValidate.start_time||!e.formValidate.end_time)return void e.$message.warning("請填寫完整商品信息！");if(e.formValidate.all_pay_count<e.formValidate.once_pay_count)return void e.$message.warning("日期內購買次數必須大於時間段內購買次數!");if(!e.formValidate.attrValue||0==e.formValidate.attrValue.length)return void e.$message.warning("請選擇商品規格！");e.currentTab++}}))},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(a){a?(e.$store.dispatch("settings/setEdit",!1),e.fullscreenLoading=!0,e.loading=!0,e.$route.params.id?Object(u["P"])(e.$route.params.id,e.formValidate).then(function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.fullscreenLoading=!1,e.$message.success(i.message),e.$router.push({path:e.roterPre+"/marketing/seckill/list"}),e.$refs[t].resetFields(),e.formValidate.slider_image=[],e.loading=!1;case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.loading=!1,e.$message.error(t.message)})):Object(u["M"])(e.formValidate).then(function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.fullscreenLoading=!1,e.$message.success(i.message),e.$router.push({path:e.roterPre+"/marketing/seckill/list"}),e.$refs[t].resetFields(),e.formValidate.slider_image=[],e.loading=!1;case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.loading=!1,e.$message.error(t.message)}))):e.formValidate.store_name&&e.formValidate.cate_id&&e.formValidate.unit_name&&e.formValidate.store_info&&e.formValidate.image&&e.formValidate.slider_image||e.$message.warning("請填寫完整商品信息！")}))},validate:function(t,e,a){!1===e&&this.$message.warning(a)},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){if(t.dataTransfer.effectAllowed="move",e!==this.dragging){var a=Object(s["a"])(this.formValidate.slider_image),i=a.indexOf(this.dragging),r=a.indexOf(e);a.splice.apply(a,[r,0].concat(Object(s["a"])(a.splice(i,1)))),this.formValidate.slider_image=a}},addCustomDialog:function(t){}}},b=_,v=(a("ebfe"),a("2877")),V=Object(v["a"])(b,i,r,!1,null,"75139466",null);e["default"]=V.exports},7719:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dialogVisible?a("el-dialog",{attrs:{title:"商品信息",visible:t.dialogVisible,width:"1200px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"divBox"},[a("div",{staticClass:"header clearfix"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small",inline:"","label-width":"100px"}},[a("el-form-item",{staticClass:"width100",attrs:{label:"商品分類："}},[a("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"請選擇",clearable:""},on:{change:function(e){return t.getList()}},model:{value:t.tableFrom.mer_cate_id,callback:function(e){t.$set(t.tableFrom,"mer_cate_id",e)},expression:"tableFrom.mer_cate_id"}},t._l(t.merCateList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"width100",attrs:{label:"商品搜索："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"請輸入商品名稱，關鍵字，產品編號",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getList},slot:"append"})],1)],1)],1)],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"}},[a("el-table-column",{attrs:{width:"55"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{attrs:{label:e.row.product_id},nativeOn:{change:function(a){return t.getTemplateRow(e.row)}},model:{value:t.templateRadio,callback:function(e){t.templateRadio=e},expression:"templateRadio"}},[t._v(" ")])]}}],null,!1,3465899556)}),t._v(" "),a("el-table-column",{attrs:{prop:"product_id",label:"ID","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品圖","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.image,"preview-src-list":[t.row.image]}})],1)]}}],null,!1,2331550732)}),t._v(" "),a("el-table-column",{attrs:{prop:"store_name",label:"商品名稱","min-width":"200"}})],1),t._v(" "),a("div",{staticClass:"block mb20"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)]):t._e()},r=[],s=a("c4c8"),n=a("83d6"),l={name:"GoodsList",data:function(){return{dialogVisible:!1,templateRadio:0,merCateList:[],roterPre:n["roterPre"],listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,cate_id:"",store_name:"",keyword:"",is_gift_bag:0,status:1},multipleSelection:{},checked:[]}},mounted:function(){var t=this;this.getList(),this.getCategorySelect(),window.addEventListener("unload",(function(e){return t.unloadHandler(e)}))},methods:{getTemplateRow:function(t){this.multipleSelection={src:t.image,id:t.product_id},this.dialogVisible=!1,this.$emit("getProduct",this.multipleSelection)},getCategorySelect:function(){var t=this;Object(s["n"])().then((function(e){t.merCateList=e.data})).catch((function(e){t.$message.error(e.message)}))},getList:function(){var t=this;this.listLoading=!0,Object(s["F"])(this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()}}},o=l,c=(a("af3e"),a("2877")),d=Object(c["a"])(o,i,r,!1,null,"f696f54c",null);e["a"]=d.exports},8615:function(t,e,a){var i=a("5ca1"),r=a("504c")(!1);i(i.S,"Object",{values:function(t){return r(t)}})},af3e:function(t,e,a){"use strict";a("3260")},ebfe:function(t,e,a){"use strict";a("2b24")},ef0d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1)},r=[],s=a("6625"),n=a.n(s),l=a("83d6"),o={name:"Index",components:{VueUeditorWrap:n.a},scrollerHeight:{content:String,default:""},props:{content:{type:String,default:""}},data:function(){return{contents:this.content,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:"http://35.201.165.105:8000/controller.php"}}},watch:{content:function(t){this.contents=this.content},contents:function(t){this.$emit("input",t)}},created:function(){},methods:{addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var a=new window.UE.ui.Dialog({iframeUrl:l["roterPre"]+"/setting/uploadPicture?field=dialog",editor:t,name:e,title:"上傳圖片",cssRules:"width:1000px;height:620px;padding:20px;"});this.dialog=a;var i=new window.UE.ui.Button({name:"dialog-button",title:"上傳圖片",cssRules:"background-image: url(@/assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}});return i}),37)}}},c=o,d=a("2877"),m=Object(d["a"])(c,i,r,!1,null,"0a1ae9ad",null);e["a"]=m.exports}}]);