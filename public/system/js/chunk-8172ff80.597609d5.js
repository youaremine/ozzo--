(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8172ff80"],{"2d17":function(e,t,a){},"2f59":function(e,t,a){"use strict";var i=a("30cb"),s=a.n(i);s.a},"30cb":function(e,t,a){},"73c8":function(e,t,a){"use strict";var i=a("2d17"),s=a.n(i);s.a},b9c2:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tabs",{on:{"tab-click":function(t){return e.getList(1)}},model:{value:e.user_type,callback:function(t){e.user_type=t},expression:"user_type"}},[a("el-tab-pane",{attrs:{label:"全部用户",name:""}}),e._v(" "),a("el-tab-pane",{attrs:{label:"微信用户",name:"wechat"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"小程序用户",name:"routine"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"H5用户",name:"h5"}})],1),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{attrs:{inline:"",size:"small","label-position":e.labelPosition,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:18,xl:18}},[a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{attrs:{label:"会员昵称："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入昵称",clearable:""},model:{value:e.userFrom.nickname,callback:function(t){e.$set(e.userFrom,"nickname",t)},expression:"userFrom.nickname"}})],1)],1)],1),e._v(" "),e.collapse?[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:18,xl:18}},[a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{attrs:{label:"会员分组："}},[a("el-select",{staticClass:"selWidth",attrs:{placeholder:"请选择",clearable:"",filterable:""},model:{value:e.userFrom.group_id,callback:function(t){e.$set(e.userFrom,"group_id",t)},expression:"userFrom.group_id"}},[a("el-option",{attrs:{value:""}},[e._v("全部")]),e._v(" "),e._l(e.groupList,(function(e,t){return a("el-option",{key:t,attrs:{value:e.group_id,label:e.group_name}})}))],2)],1)],1),e._v(" "),a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{attrs:{label:"会员标签："}},[a("el-select",{staticClass:"selWidth",attrs:{placeholder:"请选择",clearable:"",filterable:""},model:{value:e.userFrom.label_id,callback:function(t){e.$set(e.userFrom,"label_id",t)},expression:"userFrom.label_id"}},[a("el-option",{attrs:{value:""}},[e._v("全部")]),e._v(" "),e._l(e.labelLists,(function(e,t){return a("el-option",{key:t,attrs:{value:e.label_id,label:e.label_name}})}))],2)],1)],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:18,xl:18}},[a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{attrs:{label:"性别："}},[a("el-radio-group",{staticClass:"selWidth",attrs:{type:"button"},model:{value:e.userFrom.sex,callback:function(t){e.$set(e.userFrom,"sex",t)},expression:"userFrom.sex"}},[a("el-radio-button",{attrs:{label:""}},[a("span",[e._v("全部")])]),e._v(" "),a("el-radio-button",{attrs:{label:"1"}},[a("span",[e._v("男")])]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[a("span",[e._v("女")])]),e._v(" "),a("el-radio-button",{attrs:{label:"0"}},[a("span",[e._v("保密")])])],1)],1)],1),e._v(" "),a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{attrs:{label:"身份："}},[a("el-radio-group",{staticClass:"selWidth",attrs:{type:"button"},model:{value:e.userFrom.is_promoter,callback:function(t){e.$set(e.userFrom,"is_promoter",t)},expression:"userFrom.is_promoter"}},[a("el-radio-button",{attrs:{label:""}},[a("span",[e._v("全部")])]),e._v(" "),a("el-radio-button",{attrs:{label:"1"}},[a("span",[e._v("推广员")])]),e._v(" "),a("el-radio-button",{attrs:{label:"0"}},[a("span",[e._v("普通会员")])])],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:18,xl:18}},[a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{attrs:{label:"访问情况："}},[a("el-select",{staticClass:"selWidth",attrs:{placeholder:"请选择",clearable:""},model:{value:e.userFrom.user_time_type,callback:function(t){e.$set(e.userFrom,"user_time_type",t)},expression:"userFrom.user_time_type"}},[a("el-option",{attrs:{value:"visit",label:"最后访问"}}),e._v(" "),a("el-option",{attrs:{value:"add_time",label:"首次访问"}})],1)],1)],1),e._v(" "),a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{attrs:{label:"消费情况："}},[a("el-select",{staticClass:"selWidth",attrs:{placeholder:"请选择",clearable:""},model:{value:e.userFrom.pay_count,callback:function(t){e.$set(e.userFrom,"pay_count",t)},expression:"userFrom.pay_count"}},[a("el-option",{attrs:{value:"-1",label:"0次"}}),e._v(" "),a("el-option",{attrs:{value:"0",label:"1次以上"}}),e._v(" "),a("el-option",{attrs:{value:"1",label:"2次以上"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"3次以上"}}),e._v(" "),a("el-option",{attrs:{value:"3",label:"4次以上"}}),e._v(" "),a("el-option",{attrs:{value:"4",label:"5次以上"}})],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:18,xl:18}},[a("el-col",e._b({},"el-col",e.grid,!1),[a("el-form-item",{staticClass:"timeBox",attrs:{label:"访问时间："}},[a("el-date-picker",{staticClass:"selWidth",attrs:{"value-format":"yyyy/MM/dd",align:"right","unlink-panels":"",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间","picker-options":e.pickerOptions},on:{change:e.onchangeTime},model:{value:e.timeVal,callback:function(t){e.timeVal=t},expression:"timeVal"}})],1)],1)],1)]:e._e(),e._v(" "),a("el-col",{staticClass:"text-right userFrom",attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[a("el-form-item",[a("el-button",{staticClass:"mr15",attrs:{type:"primary",icon:"ios-search",label:"default",size:"small"},on:{click:e.userSearchs}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"ResetSearch mr10",attrs:{size:"small",type:"reset"},on:{click:function(t){return e.reset("userFrom")}}},[e._v("重置")]),e._v(" "),a("a",{staticClass:"ivu-ml-8",on:{click:function(t){e.collapse=!e.collapse}}},[e.collapse?[e._v("\n                                        收起 "),a("i",{staticClass:"el-icon-arrow-up"})]:[e._v("\n                                        展开 "),a("i",{staticClass:"el-icon-arrow-down"})]],2)],1)],1)],2)],1)],1),e._v(" "),a("div",{staticClass:"mb15"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:"wechat"===e.user_type,expression:"user_type === 'wechat'"}],staticClass:"mr10",attrs:{size:"mini"},on:{click:e.sendNews}},[e._v("发送图文消息")]),e._v(" "),a("el-button",{staticClass:"mr10",attrs:{size:"mini"},on:{click:e.batchGroup}},[e._v("批量设置分组")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:e.batchlabel}},[e._v("批量设置标签")])],1),e._v(" "),e.multipleSelection.length>0?a("el-alert",{attrs:{title:"已选择  "+e.multipleSelection.length+"  项",type:"info","show-icon":""}}):e._e()],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData.data,size:"small","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"首次访问："}},[a("span",[e._v(e._s(t.row.create_time))])]),e._v(" "),a("el-form-item",{attrs:{label:"近次访问："}},[a("span",[e._v(e._s(t.row.last_time))])]),e._v(" "),a("el-form-item",{attrs:{label:"身份证号："}},[a("span",[e._v(e._s(t.row.card_id))])]),e._v(" "),a("el-form-item",{attrs:{label:"手机号："}},[a("span",[e._v(e._s(t.row.phone))])]),e._v(" "),a("el-form-item",{attrs:{label:"真实姓名："}},[a("span",[e._v(e._s(t.row.real_name))])]),e._v(" "),a("el-form-item",{attrs:{label:"标签："}},e._l(t.row.label,(function(t,i){return a("span",{key:i,domProps:{textContent:e._s(t)}})})),0),e._v(" "),a("el-form-item",{attrs:{label:"生日："}},[a("span",[e._v(e._s(t.row.birthday))])]),e._v(" "),a("el-form-item",{attrs:{label:"地址："}},[a("span",[e._v(e._s(t.row.addres))])]),e._v(" "),a("el-form-item",{attrs:{label:"备注："}},[a("span",[e._v(e._s(t.row.mark))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uid",label:"ID","min-width":"60"}}),e._v(" "),a("el-table-column",{attrs:{label:"头像","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.avatar?t.row.avatar:e.moren,"preview-src-list":[t.row.avatar||e.moren]}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昵称","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("div",{staticClass:"acea-row"},[a("i",{directives:[{name:"show",rawName:"v-show",value:1===i.sex,expression:"row.sex===1"}],staticClass:"el-icon-male mr5",staticStyle:{"font-size":"15px","margin-top":"3px",color:"#2db7f5"}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:2===i.sex,expression:"row.sex===2"}],staticClass:"el-icon-female mr5",staticStyle:{"font-size":"15px","margin-top":"3px",color:"#ed4014"}}),e._v(" "),a("div",{domProps:{textContent:e._s(i.nickname)}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:i.vip_name,expression:"row.vip_name"}],staticClass:"vipName"},[e._v(e._s(i.vip_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"分组","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.group?i.group.group_name:"无"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"推荐人","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.spread?i.spread.nickname+" / "+i.spread.spread_uid:"-"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户类型","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s("routine"===i.user_type?"小程序":"wechat"===i.user_type?"公众号":"H5"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"now_money",label:"余额",sortable:"","min-width":"100","sort-method":function(e,t){return e.now_money-t.now_money}}}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"130",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return e.onEdit(t.row.uid)}}},[e._v("编辑")]),e._v(" "),a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[e._v("\n                            更多"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return e.onDetails(t.row.uid)}}},[e._v("用户详情")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(a){return e.setMoney(t.row)}}},[e._v("设置余额")]),e._v(" "),t.row.vip_name?a("el-dropdown-item",[e._v("清除等级")]):e._e(),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(a){return e.setGroup(t.row)}}},[e._v("设置分组")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(a){return e.setLabel(t.row)}}},[e._v("设置标签")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(a){return e.setModify(t.row)}}},[e._v("修改推荐人")])],1)],1)]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":e.userFrom.limit,"current-page":e.userFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},on:{"size-change":e.handleSizeChange,"current-change":e.pageChange}})],1)],1),e._v(" "),a("el-dialog",{staticClass:"dia",attrs:{title:"提示",visible:e.visible,width:"1000px","before-close":e.handleClose},on:{"update:visible":function(t){e.visible=t}}},[e.visible?a("news-category",{attrs:{"is-show-send":e.isShowSend,"wechat-ids":e.wechatIds,"user-ids":e.ids,"max-cols":e.maxCols}}):e._e()],1),e._v(" "),e.uid?a("el-dialog",{attrs:{title:"用户详情",visible:e.visibleDetail,width:"1000px","before-close":e.Close},on:{"update:visible":function(t){e.visibleDetail=t}}},[e.visibleDetail?a("user-details",{ref:"userDetails",attrs:{uid:e.uid}}):e._e()],1):e._e()],1)},s=[],l=(a("96cf"),a("3b8d")),n=a("c24f"),o=a("c42b"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.psInfo?a("div",{staticClass:"acea-row row-middle"},[a("div",{staticClass:"avatar mr15"},[a("div",{staticClass:"block"},[a("el-avatar",{attrs:{size:50,src:e.psInfo.avatar?e.psInfo.avatar:e.moren}})],1)]),e._v(" "),a("div",{staticClass:"dashboard-workplace-header-tip"},[a("p",{staticClass:"dashboard-workplace-header-tip-title",domProps:{textContent:e._s(e.psInfo.nickname||"-")}}),e._v(" "),a("div",{staticClass:"dashboard-workplace-header-tip-desc"},[a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[e._v("余额: "+e._s(e.psInfo.now_money))]),e._v(" "),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[e._v("总计订单: "+e._s(e.psInfo.pay_count))]),e._v(" "),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[e._v("总消费金额: "+e._s(e.psInfo.pay_price))]),e._v(" "),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[e._v("本月订单: "+e._s(e.psInfo.total_pay_count))]),e._v(" "),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[e._v("本月消费金额: "+e._s(e.psInfo.total_pay_price))])])])]):e._e(),e._v(" "),a("el-row",{staticClass:"ivu-mt mt20",attrs:{align:"middle",gutter:10}},[a("el-col",{attrs:{span:4}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"0"},on:{select:e.changeType}},e._l(e.list,(function(t,i){return a("el-menu-item",{key:i,attrs:{name:t.val,index:t.val}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])})),1)],1),e._v(" "),a("el-col",{attrs:{span:20}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tabNumWidth",attrs:{data:e.tableData.data,size:"mini"}},[e._l(e.columns,(function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.title,width:"item.minWidth"}})})),e._v(" "),"3"===e.type?a("el-table-column",{attrs:{label:"有效期","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("filterEmpty")(t.row?t.row.start_time+"-"+t.row.end_time:"")))])]}}],null,!1,3673940515)}):e._e(),e._v(" "),"2"===e.type?a("el-table-column",{attrs:{label:"上级推荐人头像","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.spread.avatar?t.row.spread.avatar:e.moren,"preview-src-list":[t.row.avatar||e.moren]}})],1)]}}],null,!1,4002997016)}):e._e()],2),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[6,12,18,24],"page-size":e.tableFrom.limit,"current-page":e.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},on:{"size-change":e.handleSizeChange,"current-change":e.pageChange}})],1)],1)],1)],1)},c=[],u=(a("c5f6"),{name:"UserDetails",props:{uid:{type:Number,default:null}},data:function(){return{moren:a("cdfe"),loading:!1,columns:[],Visible:!1,list:[{val:"0",label:"消费记录"},{val:"3",label:"持有优惠券"},{val:"4",label:"余额变动"},{val:"2",label:"推荐人修改记录"}],tableData:{data:[],total:0},tableFrom:{page:1,limit:6},psInfo:null,type:"0"}},mounted:function(){this.uid&&(this.getHeader(),this.getInfo("0"))},methods:{changeType:function(e){this.type=e,this.tableFrom.page=1,this.getInfo(e)},getInfo:function(e){var t=this;switch(this.loading=!0,e){case"0":Object(n["C"])(this.uid,this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.columns=[{title:"订单ID",key:"order_id",minWidth:250},{title:"收货人",key:"real_name",minWidth:90},{title:"商品数量",key:"total_num",minWidth:80},{title:"商品总价",key:"total_price",minWidth:90},{title:"实付金额",key:"pay_price",minWidth:90},{title:"交易完成时间",key:"pay_time",minWidth:160}],t.loading=!1})).catch((function(){t.loading=!1}));break;case"2":Object(n["u"])(this.uid,this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.columns=[{title:"上级推荐人ID",key:"spread_uid",minWidth:120},{title:"上级推荐人昵称",key:"spread.nickname",minWidth:120},{title:"绑定时间",key:"create_time",minWidth:120}],t.loading=!1})).catch((function(){t.loading=!1}));break;case"3":Object(n["y"])(this.uid,this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.columns=[{title:"优惠券名称",key:"coupon_title",minWidth:120},{title:"面值",key:"coupon_price",minWidth:120},{title:"最低消费额",key:"use_min_price",minWidth:120},{title:"兑换时间",key:"use_time",minWidth:120}],t.loading=!1})).catch((function(){t.loading=!1}));break;default:Object(n["x"])(this.uid,this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.columns=[{title:"变动金额",key:"number",minWidth:90},{title:"变动后",key:"balance",minWidth:90},{title:"类型",key:"title",minWidth:100},{title:"创建时间",key:"create_time",minWidth:150},{title:"备注",key:"mark",minWidth:200}],t.loading=!1})).catch((function(){t.loading=!1}))}},pageChange:function(e){this.tableFrom.page=e,this.getInfo(this.type)},handleSizeChange:function(e){this.tableFrom.limit=e,this.getInfo(this.type)},getHeader:function(){var e=this;Object(n["z"])(this.uid).then((function(t){e.psInfo=t.data}))}}}),m=u,d=(a("73c8"),a("2877")),p=Object(d["a"])(m,r,c,!1,null,"8ddefd5c",null),_=p.exports,h={name:"UserList",components:{newsCategory:o["a"],userDetails:_},data:function(){return{moren:a("cdfe"),pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){var t=new Date,a=new Date;a.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),e.$emit("pick",[a,t])}},{text:"昨天",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()))),e.$emit("pick",[a,t])}},{text:"最近7天",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近30天",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"本月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),1))),e.$emit("pick",[a,t])}},{text:"本年",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.setTime(new Date((new Date).getFullYear(),0,1))),e.$emit("pick",[a,t])}}]},timeVal:[],collapse:!1,visibleDetail:!1,maxCols:3,isShowSend:!0,visible:!1,user_type:"",tableData:{data:[],total:0},listLoading:!0,multipleSelection:[],ids:"",wechatIds:"",uid:"",labelPosition:"right",userProps:{children:"children",label:"name",value:"name"},userFrom:{label_id:"",user_type:"",sex:"",is_promoter:"",country:"",pay_count:"",user_time_type:"",user_time:"",nickname:"",province:"",city:"",page:1,limit:20,group_id:""},address:[],grid:{xl:8,lg:12,md:12,sm:24,xs:24},grid2:{xl:18,lg:16,md:12,sm:24,xs:24},grid3:{xl:8,lg:12,md:12,sm:24,xs:24},addresData:[],groupList:[],labelLists:[]}},mounted:function(){this.groupLists(),this.getTagList(),this.getList("")},methods:{selectChange:function(e){this.timeVal=[],this.userFrom.user_time=e,this.getList("")},onchangeTime:function(e){this.timeVal=e,this.userFrom.user_time=e?this.timeVal.join("-"):""},userSearchs:function(){this.userFrom.user_time_type&&!this.userFrom.user_time?this.$message.error("请选择访问时间"):!this.userFrom.user_time_type&&this.userFrom.user_time?this.$message.error("请选择访问情况"):this.getList(1)},groupLists:function(){var e=this;Object(n["m"])({page:1,limit:9999}).then(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.groupList=a.data.list;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.message)}))},getTagList:function(){var e=this;Object(n["q"])({page:1,limit:9999}).then((function(t){e.labelLists=t.data.list})).catch((function(t){e.$message.error(t.message)}))},onDetails:function(e){this.uid=e,this.visibleDetail=!0},Close:function(){this.visibleDetail=!1},sendNews:function(){if(0===this.multipleSelection.length)return this.$message.warning("请先选择用户");this.visible=!0},handleClose:function(){this.visible=!1},handleSelectionChange:function(e){this.multipleSelection=e;var t=[],a=[];this.multipleSelection.map((function(e){t.push(e.uid),a.push(e.wechat_user_id)})),this.ids=t.join(","),this.wechatIds=a.join(",")},setGroup:function(e){this.$modalForm(Object(n["d"])(e.uid))},batchGroup:function(){if(0===this.multipleSelection.length)return this.$message.warning("请先选择用户");this.$modalForm(Object(n["a"])({ids:this.ids}))},setLabel:function(e){this.$modalForm(Object(n["f"])(e.uid))},setModify:function(e){this.$modalForm(Object(n["v"])(e.uid)).then((function(e){e.message}))},batchlabel:function(){if(0===this.multipleSelection.length)return this.$message.warning("请先选择用户");this.$modalForm(Object(n["b"])({ids:this.ids}))},setMoney:function(e){this.$modalForm(Object(n["e"])(e.uid))},getList:function(e){var t=this;this.listLoading=!0,this.userFrom.page=e||this.userFrom.page,this.userFrom.user_type=this.user_type,this.userFrom.province=this.address[0],this.userFrom.city=this.address[1],"0"===this.userFrom.user_type&&(this.userFrom.user_type=""),Object(n["A"])(this.userFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(e){this.userFrom.page=e,this.getList("")},handleSizeChange:function(e){this.userFrom.limit=e,this.getList("")},onEdit:function(e){var t=this;this.$modalForm(Object(n["D"])(e)).then((function(){return t.getList("")}))},reset:function(){this.userFrom={label_id:"",user_type:"",sex:"",is_promoter:"",country:"",pay_count:"",user_time_type:"",user_time:"",nickname:"",province:"",city:"",page:1,limit:20,group_id:""},this.timeVal=[]}}},v=h,b=(a("2f59"),Object(d["a"])(v,i,s,!1,null,"3e0097aa",null));t["default"]=b.exports},cdfe:function(e,t,a){e.exports=a.p+"system/img/f.5aa43cd3.png"}}]);