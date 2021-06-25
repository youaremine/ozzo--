(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a08994a"],{6437:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"divBox"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"container"},[e("el-form",{attrs:{size:"small","label-width":"79px",inline:!0}},[e("el-form-item",{attrs:{label:"品牌分类："}},[e("el-cascader",{staticClass:"selWidth",attrs:{options:t.brandCategory,clearable:"",props:t.props},on:{change:function(n){return t.getList(1)}},model:{value:t.tableFrom.brand_category_id,callback:function(n){t.$set(t.tableFrom,"brand_category_id",n)},expression:"tableFrom.brand_category_id"}})],1)],1)],1),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onAdd}},[t._v("添加品牌")])],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small","row-key":"brand_id","default-expand-all":!1,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{prop:"brand_id",label:"ID","min-width":"60"}}),t._v(" "),e("el-table-column",{attrs:{label:"品牌名称",prop:"brand_name","min-width":"150"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"status",label:"是否显示","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(e){return t.onchangeIsShow(n.row)}},model:{value:n.row.is_show,callback:function(e){t.$set(n.row,"is_show",e)},expression:"scope.row.is_show"}})]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"150"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.onEdit(n.row.brand_id)}}},[t._v("编辑")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDelete(n.row.brand_id,n.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},o=[],a=e("c4c8"),c={name:"BrandList",data:function(){return{props:{value:"store_brand_category_id",label:"cate_name",children:"children",emitPath:!1},isChecked:!1,listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20},imgList:[],brandCategory:[]}},mounted:function(){this.getBrandCategory(),this.getList()},methods:{getBrandCategory:function(){var t=this;Object(a["l"])({page:1,limit:9999}).then((function(n){t.brandCategory=n.data})).catch((function(n){t.$message.error(n.message)}))},getList:function(t){var n=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(a["q"])(this.tableFrom).then((function(t){n.tableData.data=t.data.list,n.tableData.total=t.data.count,n.tableData.data.map((function(t){n.imgList.push(t.pic)})),n.listLoading=!1})).catch((function(t){n.listLoading=!1,n.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},onAdd:function(){var t=this;this.$modalForm(Object(a["o"])()).then((function(){return t.getList()}))},onEdit:function(t){var n=this;this.$modalForm(Object(a["s"])(t)).then((function(){return n.getList()}))},handleDelete:function(t,n){var e=this;this.$modalSure().then((function(){Object(a["p"])(t).then((function(t){var n=t.message;e.$message.success(n),e.getList()})).catch((function(t){var n=t.message;e.$message.error(n)}))}))},onchangeIsShow:function(t){var n=this;Object(a["r"])(t.brand_id,t.is_show).then((function(t){var e=t.message;n.$message.success(e),n.getList()})).catch((function(t){var e=t.message;n.$message.error(e)}))}}},u=c,s=(e("dd0a"),e("2877")),i=Object(s["a"])(u,r,o,!1,null,"dcb56e4c",null);n["default"]=i.exports},"9d53":function(t,n,e){},c4c8:function(t,n,e){"use strict";e.d(n,"Z",(function(){return o})),e.d(n,"X",(function(){return a})),e.d(n,"bb",(function(){return c})),e.d(n,"Y",(function(){return u})),e.d(n,"ab",(function(){return s})),e.d(n,"l",(function(){return i})),e.d(n,"j",(function(){return d})),e.d(n,"n",(function(){return l})),e.d(n,"k",(function(){return f})),e.d(n,"m",(function(){return p})),e.d(n,"q",(function(){return g})),e.d(n,"o",(function(){return h})),e.d(n,"s",(function(){return m})),e.d(n,"p",(function(){return b})),e.d(n,"r",(function(){return v})),e.d(n,"I",(function(){return _})),e.d(n,"T",(function(){return y})),e.d(n,"t",(function(){return w})),e.d(n,"x",(function(){return k})),e.d(n,"H",(function(){return C})),e.d(n,"S",(function(){return L})),e.d(n,"K",(function(){return x})),e.d(n,"V",(function(){return F})),e.d(n,"w",(function(){return $})),e.d(n,"Q",(function(){return z})),e.d(n,"O",(function(){return D})),e.d(n,"M",(function(){return j})),e.d(n,"N",(function(){return S})),e.d(n,"v",(function(){return O})),e.d(n,"y",(function(){return B})),e.d(n,"R",(function(){return E})),e.d(n,"J",(function(){return I})),e.d(n,"U",(function(){return A})),e.d(n,"L",(function(){return J})),e.d(n,"W",(function(){return q})),e.d(n,"u",(function(){return N})),e.d(n,"P",(function(){return P})),e.d(n,"cb",(function(){return W})),e.d(n,"A",(function(){return G})),e.d(n,"z",(function(){return H})),e.d(n,"D",(function(){return K})),e.d(n,"G",(function(){return M})),e.d(n,"E",(function(){return Q})),e.d(n,"F",(function(){return R})),e.d(n,"B",(function(){return T})),e.d(n,"C",(function(){return U})),e.d(n,"d",(function(){return V})),e.d(n,"e",(function(){return X})),e.d(n,"c",(function(){return Y})),e.d(n,"f",(function(){return Z})),e.d(n,"i",(function(){return tt})),e.d(n,"b",(function(){return nt})),e.d(n,"a",(function(){return et})),e.d(n,"h",(function(){return rt})),e.d(n,"g",(function(){return ot}));var r=e("0c6d");function o(){return r["a"].get("store/category/lst")}function a(){return r["a"].get("store/category/create/form")}function c(t){return r["a"].get("store/category/update/form/".concat(t))}function u(t){return r["a"].delete("store/category/delete/".concat(t))}function s(t,n){return r["a"].post("store/category/status/".concat(t),{status:n})}function i(t){return r["a"].get("store/brand/category/lst",t)}function d(){return r["a"].get("store/brand/category/create/form")}function l(t){return r["a"].get("store/brand/category/update/form/".concat(t))}function f(t){return r["a"].delete("store/brand/category/delete/".concat(t))}function p(t,n){return r["a"].post("store/brand/category/status/".concat(t),{status:n})}function g(t){return r["a"].get("store/brand/lst",t)}function h(){return r["a"].get("store/brand/create/form")}function m(t){return r["a"].get("store/brand/update/form/".concat(t))}function b(t){return r["a"].delete("store/brand/delete/".concat(t))}function v(t,n){return r["a"].post("store/brand/status/".concat(t),{status:n})}function _(t){return r["a"].get("store/product/lst",t)}function y(t){return r["a"].get("seckill/product/lst",t)}function w(){return r["a"].get("store/category/list")}function k(){return r["a"].get("system/merchant/category_lst")}function C(t){return r["a"].get("store/product/detail/".concat(t))}function L(t){return r["a"].get("seckill/product/detail/".concat(t))}function x(t){return r["a"].post("store/product/status",t)}function F(t){return r["a"].post("seckill/product/status",t)}function $(){return r["a"].get("store/product/lst_filter")}function z(){return r["a"].get("seckill/product/lst_filter")}function D(t){return r["a"].get("store/reply/lst",t)}function j(t){return r["a"].get(t?"store/reply/create/form/".concat(t):"store/reply/create/form")}function S(t){return r["a"].delete("store/reply/delete/".concat(t))}function O(t){return r["a"].get("store/product/list",t)}function B(){return r["a"].get("store/product/mer_select")}function E(){return r["a"].get("seckill/product/mer_select")}function I(t){return r["a"].post("store/product/status",t)}function A(t){return r["a"].post("seckill/product/status",t)}function J(t,n){return r["a"].post("store/product/update/".concat(t),n)}function q(t,n){return r["a"].post("seckill/product/update/".concat(t),n)}function N(t,n){return r["a"].post("store/product/change/".concat(t),{status:n})}function P(t,n){return r["a"].post("seckill/product/change/".concat(t),{status:n})}function W(t){return r["a"].get("store/product/ficti/form/".concat(t))}function G(t){return r["a"].get("store/product/presell/lst",t)}function H(t){return r["a"].get("store/product/presell/get/".concat(t))}function K(t){return r["a"].get("store/product/presell/detail/".concat(t))}function M(t,n){return r["a"].post("store/product/presell/update/".concat(t),n)}function Q(t){return r["a"].post("store/product/presell/status",t)}function R(t,n){return r["a"].post("store/product/presell/is_show/".concat(t),{status:n})}function T(){return r["a"].get("store/product/presell/agree")}function U(t){return r["a"].post("store/product/presell/agree",t)}function V(t){return r["a"].get("store/product/assist/lst",t)}function X(t){return r["a"].get("store/product/assist/get/".concat(t))}function Y(t){return r["a"].get("store/product/assist/detail/".concat(t))}function Z(t){return r["a"].post("store/product/assist/status",t)}function tt(t,n){return r["a"].post("store/product/assist/is_show/".concat(t),{status:n})}function nt(t){return r["a"].get("store/product/assist/set/lst",t)}function et(t,n){return r["a"].get("store/product/assist/set/detail/".concat(t),n)}function rt(t){return r["a"].get("store/product/assist/get/".concat(t))}function ot(t,n){return r["a"].post("store/product/assist/update/".concat(t),n)}},dd0a:function(t,n,e){"use strict";e("9d53")}}]);