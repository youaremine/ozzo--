(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a9969e"],{"0756":function(t,e,n){"use strict";var a=n("86b6"),r=n.n(a);r.a},"0bd8":function(t,e,n){},"86b6":function(t,e,n){},9132:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"container"},[n("el-form",{attrs:{size:"small",inline:"","label-width":"120px"}},[n("el-form-item",{staticClass:"width100",staticStyle:{display:"block"},attrs:{label:"时间选择："}},[n("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small"},on:{change:function(e){return t.selectChange(t.tableFrom.date)}},model:{value:t.tableFrom.date,callback:function(e){t.$set(t.tableFrom,"date",e)},expression:"tableFrom.date"}},t._l(t.fromList.fromTxt,(function(e,a){return n("el-radio-button",{key:a,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),n("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy/MM/dd",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"商户名称："}},[n("el-select",{staticClass:"selWidth",attrs:{clearable:"",filterable:"",placeholder:"请选择"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.mer_id,callback:function(e){t.$set(t.tableFrom,"mer_id",e)},expression:"tableFrom.mer_id"}},t._l(t.merSelect,(function(t){return n("el-option",{key:t.mer_id,attrs:{label:t.mer_name,value:t.mer_id}})})),1)],1),t._v(" "),n("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"商户类别："}},[n("el-select",{staticClass:"selWidth",attrs:{clearable:"",placeholder:"请选择"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.is_trader,callback:function(e){t.$set(t.tableFrom,"is_trader",e)},expression:"tableFrom.is_trader"}},[n("el-option",{attrs:{label:"自营",value:"1"}}),t._v(" "),n("el-option",{attrs:{label:"非自营",value:"0"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"商品搜索："}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入商品名称/ID"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[n("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"发起人搜索："}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入发起人昵称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.user_name,callback:function(e){t.$set(t.tableFrom,"user_name",e)},expression:"tableFrom.user_name"}},[n("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1)],1)],1)]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"}},[n("el-table-column",{attrs:{prop:"product_assist_set_id",label:"ID","min-width":"50"}}),t._v(" "),n("el-table-column",{attrs:{label:"商户名称","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.merchant?e.row.merchant.mer_name:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"mer_name",label:"商户类别","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.merchant?n("span",{staticClass:"spBlock"},[t._v(t._s(e.row.merchant.is_trader?"自营":"非自营"))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"助力商品图片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"demo-image__preview"},[e.row.product?n("el-image",{attrs:{src:e.row.product.image,"preview-src-list":[e.row.product.image]}}):t._e()],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品名称","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.assist.store_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"助力价格","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.assist&&e.row.assist.assistSku[0].assist_price||""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"assist_count",label:"助力人数","min-width":"90"}}),t._v(" "),n("el-table-column",{attrs:{label:"发起人","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.user&&e.row.user.nickname||""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"create_time",label:"发起时间","min-width":"130"}}),t._v(" "),n("el-table-column",{attrs:{label:"活动时间","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v("开始日期："+t._s(e.row.assist&&e.row.assist.start_time?e.row.assist.start_time.slice(0,10):""))]),t._v(" "),n("div",[t._v("结束日期："+t._s(e.row.assist.end_time&&e.row.assist.end_time?e.row.assist.end_time.slice(0,10):""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(n){return t.goDetail(e.row.product_assist_set_id)}}},[t._v("查看详情")])]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),n("details-data",{ref:"detailsData",attrs:{"is-show":t.isShowDetail}})],1)},r=[],o=n("c4c8"),i=n("83d6"),s=n("e572"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dialogVisible?n("el-dialog",{attrs:{title:"查看详情",center:"",visible:t.dialogVisible,width:"700px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"}},[n("el-table-column",{attrs:{prop:"uid",label:"ID","min-width":"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"用户名称","min-width":"120"}}),t._v(" "),n("el-table-column",{attrs:{label:"用户头像","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("div",{staticClass:"demo-image__preview"},[n("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.avatar_img,"preview-src-list":[t.row.avatar_img]}})],1)]}}],null,!1,3385799628)}),t._v(" "),n("el-table-column",{attrs:{prop:"create_time",label:"参与时间","min-width":"200"}})],1),t._v(" "),n("div",{staticClass:"block mb20"},[n("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1):t._e()},u=[],c={name:"Info",props:{isShow:{type:Boolean,default:!0}},data:function(){return{id:"",loading:!1,dialogVisible:!1,tableData:{data:[],total:0},tableFrom:{page:1,limit:20}}},computed:{},methods:{getList:function(t){var e=this;this.id=t,this.listLoading=!0,Object(o["a"])(this.id,this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList(this.id)},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList(this.id)}}},d=c,f=(n("0756"),n("2877")),p=Object(f["a"])(d,l,u,!1,null,"18af7aae",null),m=p.exports,g={product_id:"",image:"",slider_image:[],store_name:"",store_info:"",start_day:"",end_day:"",start_time:"",end_time:"",is_open_recommend:1,is_open_state:1,is_show:1,presell_type:1,keyword:"",brand_id:"",cate_id:"",mer_cate_id:[],unit_name:"",integral:0,sort:0,is_good:0,temp_id:"",preSale_date:"",finalPayment_date:"",delivery_type:1,delivery_day:10,attrValue:[{image:"",price:null,down_price:null,presell_price:null,cost:null,ot_price:null,old_stock:null,stock:null,bar_code:"",weight:null,volume:null}],attr:[],extension_type:0,content:"",spec_type:0,is_gift_bag:0},b={name:"ProductList",components:{detailsData:m},data:function(){return{props:{emitPath:!1},roterPre:i["roterPre"],listLoading:!0,tableData:{data:[],total:0},assistStatusList:[{label:"未开始",value:0},{label:"正在进行",value:1},{label:"已结束",value:2}],fromList:s["a"],tableFrom:{page:1,limit:20,keyword:"",date:"",type:"",is_trader:"",mer_id:"",user_name:""},modals:!1,dialogVisible:!1,loading:!1,manyTabTit:{},manyTabDate:{},formValidate:Object.assign({},g),OneattrValue:[Object.assign({},g.attrValue[0])],ManyAttrValue:[Object.assign({},g.attrValue[0])],attrInfo:{},timeVal:"",isShowDetail:!1,merSelect:[]}},mounted:function(){this.getList(""),this.getMerSelect()},methods:{watCh:function(){},getMerSelect:function(){var t=this;Object(o["y"])().then((function(e){t.merSelect=e.data})).catch((function(e){t.$message.error(e.message)}))},goDetail:function(t){this.$refs.detailsData.dialogVisible=!0,this.isShowDetail=!0,this.$refs.detailsData.getList(t)},selectChange:function(t){this.tableFrom.date=t,this.tableFrom.page=1,this.timeVal=[],this.getList("")},onchangeTime:function(t){this.timeVal=t,this.tableFrom.date=t?this.timeVal.join("-"):"",this.tableFrom.page=1,this.getList("")},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(o["b"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")}}},_=b,h=(n("960f"),Object(f["a"])(_,a,r,!1,null,"4d9de27e",null));e["default"]=h.exports},"960f":function(t,e,n){"use strict";var a=n("0bd8"),r=n.n(a);r.a},c4c8:function(t,e,n){"use strict";n.d(e,"Z",(function(){return r})),n.d(e,"X",(function(){return o})),n.d(e,"bb",(function(){return i})),n.d(e,"Y",(function(){return s})),n.d(e,"ab",(function(){return l})),n.d(e,"l",(function(){return u})),n.d(e,"j",(function(){return c})),n.d(e,"n",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"m",(function(){return p})),n.d(e,"q",(function(){return m})),n.d(e,"o",(function(){return g})),n.d(e,"s",(function(){return b})),n.d(e,"p",(function(){return _})),n.d(e,"r",(function(){return h})),n.d(e,"I",(function(){return v})),n.d(e,"T",(function(){return y})),n.d(e,"t",(function(){return w})),n.d(e,"x",(function(){return k})),n.d(e,"H",(function(){return x})),n.d(e,"S",(function(){return F})),n.d(e,"K",(function(){return C})),n.d(e,"V",(function(){return L})),n.d(e,"w",(function(){return S})),n.d(e,"Q",(function(){return D})),n.d(e,"O",(function(){return V})),n.d(e,"M",(function(){return z})),n.d(e,"N",(function(){return O})),n.d(e,"v",(function(){return j})),n.d(e,"y",(function(){return $})),n.d(e,"R",(function(){return T})),n.d(e,"J",(function(){return M})),n.d(e,"U",(function(){return I})),n.d(e,"L",(function(){return P})),n.d(e,"W",(function(){return E})),n.d(e,"u",(function(){return W})),n.d(e,"P",(function(){return B})),n.d(e,"cb",(function(){return J})),n.d(e,"A",(function(){return N})),n.d(e,"z",(function(){return A})),n.d(e,"D",(function(){return q})),n.d(e,"G",(function(){return G})),n.d(e,"E",(function(){return H})),n.d(e,"F",(function(){return K})),n.d(e,"B",(function(){return Q})),n.d(e,"C",(function(){return R})),n.d(e,"d",(function(){return U})),n.d(e,"e",(function(){return X})),n.d(e,"c",(function(){return Y})),n.d(e,"f",(function(){return Z})),n.d(e,"i",(function(){return tt})),n.d(e,"b",(function(){return et})),n.d(e,"a",(function(){return nt})),n.d(e,"h",(function(){return at})),n.d(e,"g",(function(){return rt}));var a=n("0c6d");function r(){return a["a"].get("store/category/lst")}function o(){return a["a"].get("store/category/create/form")}function i(t){return a["a"].get("store/category/update/form/".concat(t))}function s(t){return a["a"].delete("store/category/delete/".concat(t))}function l(t,e){return a["a"].post("store/category/status/".concat(t),{status:e})}function u(t){return a["a"].get("store/brand/category/lst",t)}function c(){return a["a"].get("store/brand/category/create/form")}function d(t){return a["a"].get("store/brand/category/update/form/".concat(t))}function f(t){return a["a"].delete("store/brand/category/delete/".concat(t))}function p(t,e){return a["a"].post("store/brand/category/status/".concat(t),{status:e})}function m(t){return a["a"].get("store/brand/lst",t)}function g(){return a["a"].get("store/brand/create/form")}function b(t){return a["a"].get("store/brand/update/form/".concat(t))}function _(t){return a["a"].delete("store/brand/delete/".concat(t))}function h(t,e){return a["a"].post("store/brand/status/".concat(t),{status:e})}function v(t){return a["a"].get("store/product/lst",t)}function y(t){return a["a"].get("seckill/product/lst",t)}function w(){return a["a"].get("store/category/list")}function k(){return a["a"].get("system/merchant/category_lst")}function x(t){return a["a"].get("store/product/detail/".concat(t))}function F(t){return a["a"].get("seckill/product/detail/".concat(t))}function C(t){return a["a"].post("store/product/status",t)}function L(t){return a["a"].post("seckill/product/status",t)}function S(){return a["a"].get("store/product/lst_filter")}function D(){return a["a"].get("seckill/product/lst_filter")}function V(t){return a["a"].get("store/reply/lst",t)}function z(t){return a["a"].get(t?"store/reply/create/form/".concat(t):"store/reply/create/form")}function O(t){return a["a"].delete("store/reply/delete/".concat(t))}function j(t){return a["a"].get("store/product/list",t)}function $(){return a["a"].get("store/product/mer_select")}function T(){return a["a"].get("seckill/product/mer_select")}function M(t){return a["a"].post("store/product/status",t)}function I(t){return a["a"].post("seckill/product/status",t)}function P(t,e){return a["a"].post("store/product/update/".concat(t),e)}function E(t,e){return a["a"].post("seckill/product/update/".concat(t),e)}function W(t,e){return a["a"].post("store/product/change/".concat(t),{status:e})}function B(t,e){return a["a"].post("seckill/product/change/".concat(t),{status:e})}function J(t){return a["a"].get("store/product/ficti/form/".concat(t))}function N(t){return a["a"].get("store/product/presell/lst",t)}function A(t){return a["a"].get("store/product/presell/get/".concat(t))}function q(t){return a["a"].get("store/product/presell/detail/".concat(t))}function G(t,e){return a["a"].post("store/product/presell/update/".concat(t),e)}function H(t){return a["a"].post("store/product/presell/status",t)}function K(t,e){return a["a"].post("store/product/presell/is_show/".concat(t),{status:e})}function Q(){return a["a"].get("store/product/presell/agree")}function R(t){return a["a"].post("store/product/presell/agree",t)}function U(t){return a["a"].get("store/product/assist/lst",t)}function X(t){return a["a"].get("store/product/assist/get/".concat(t))}function Y(t){return a["a"].get("store/product/assist/detail/".concat(t))}function Z(t){return a["a"].post("store/product/assist/status",t)}function tt(t,e){return a["a"].post("store/product/assist/is_show/".concat(t),{status:e})}function et(t){return a["a"].get("store/product/assist/set/lst",t)}function nt(t,e){return a["a"].get("store/product/assist/set/detail/".concat(t),e)}function at(t){return a["a"].get("store/product/assist/get/".concat(t))}function rt(t,e){return a["a"].post("store/product/assist/update/".concat(t),e)}},e572:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var a=[{label:"开启",value:1},{label:"关闭",value:0}],r={title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},o={title:"状态",custom:!0,fromTxt:[{text:"全部",val:""},{text:"待审核",val:"0"},{text:"审核已通过",val:"1"},{text:"审核未通过",val:"2"}]}}}]);