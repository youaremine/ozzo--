(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5620c568"],{"022c":function(t,e,a){},"0c75":function(t,e,a){"use strict";var s=a("cbf6"),i=a.n(s);i.a},6290:function(t,e,a){},"692c":function(t,e,a){},9406:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("base-info",{ref:"baseInfo",staticClass:"mb15"}),t._v(" "),a("to-day",{staticClass:"mb15"}),t._v(" "),a("el-row",{staticClass:"mb15",attrs:{gutter:20}},[a("el-col",t._b({},"el-col",t.grid,!1),[a("my-ranking",{attrs:{"merchant-data":t.merchantStock,"mer-title":t.merTitle},on:{getList:t.getList}})],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid,!1),[a("my-ranking",{attrs:{"mer-title":t.visitTitle,"merchant-data":t.merchantVisit},on:{getList:t.getVisit}})],1),t._v(" "),a("el-col",t._b({},"el-col",t.grid,!1),[a("merchant-rate")],1)],1),t._v(" "),a("user-data",{staticClass:"mb15"}),t._v(" "),a("user-from")],1)},i=[],r=a("db72"),n=a("0c6d");function o(){return n["a"].get("statistics/main")}function c(){return n["a"].get("statistics/order")}function l(){return n["a"].get("statistics/order_num")}function d(){return n["a"].get("statistics/order_user")}function u(t){return n["a"].get("statistics/merchant_stock",t)}function m(t){return n["a"].get("statistics/merchant_rate",t)}function p(t){return n["a"].get("statistics/merchant_visit",t)}function f(t){return n["a"].get("statistics/user",t)}function v(t){return n["a"].get("statistics/user_rate",t)}function h(t){return n["a"].get("statistics/user_data",t)}var _=a("f955"),y=a("2f62"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.statisticsData?a("el-card",{staticClass:"box-card statistics"},[a("div",{staticClass:"acea-row row-between-wrapper mb20"},[a("span",{staticClass:"header-title"},[t._v("运营数据")]),t._v(" "),a("span",{staticClass:"header-time"},[t._v(t._s(t.getdate()))])]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"content-title spBlock"},[t._v("支付订单金额")]),t._v(" "),a("span",{staticClass:"content-number spBlock mb15"},[t._v(t._s(t.statisticsData.today.payPrice))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("昨日："+t._s(t.statisticsData.yesterday.payPrice))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("同比上周："),a("i",{class:Number(t.statisticsData.lastWeekRate.payPrice)>=0?"up":"down"},[t._v(t._s(t.statisticsData.lastWeekRate.payPrice?(100*t.statisticsData.lastWeekRate.payPrice*1e3/1e3).toFixed(2):0)+"%")]),a("i",{class:Number(t.statisticsData.lastWeekRate.payPrice)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})])]),t._v(" "),a("div",{staticClass:"content pl25"},[a("span",{staticClass:"content-title spBlock"},[t._v("新增用户")]),t._v(" "),a("span",{staticClass:"content-number spBlock mb15"},[t._v(t._s(t.statisticsData.today.userNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("昨日："+t._s(t.statisticsData.yesterday.userNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("同比上周："),a("i",{class:Number(t.statisticsData.lastWeekRate.userNum)>=0?"up":"down"},[t._v(t._s(t.statisticsData.lastWeekRate.userNum?(100*t.statisticsData.lastWeekRate.userNum*1e3/1e3).toFixed(2):0)+"%")]),a("i",{class:Number(t.statisticsData.lastWeekRate.userNum)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})])]),t._v(" "),a("div",{staticClass:"content pl25"},[a("span",{staticClass:"content-title spBlock"},[t._v("浏览量")]),t._v(" "),a("span",{staticClass:"content-number spBlock mb15"},[t._v(t._s(t.statisticsData.today.visitNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("昨日："+t._s(t.statisticsData.yesterday.visitNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("同比上周："),a("i",{class:Number(t.statisticsData.lastWeekRate.visitNum)>=0?"up":"down"},[t._v(t._s(t.statisticsData.lastWeekRate.visitNum?(100*t.statisticsData.lastWeekRate.visitNum*1e3/1e3).toFixed(2):0)+"%")]),a("i",{class:Number(t.statisticsData.lastWeekRate.visitNum)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})])]),t._v(" "),a("div",{staticClass:"content pl25"},[a("span",{staticClass:"content-title spBlock"},[t._v("访客数")]),t._v(" "),a("span",{staticClass:"content-number spBlock mb15"},[t._v(t._s(t.statisticsData.today.visitUserNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("昨日："+t._s(t.statisticsData.yesterday.visitUserNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("同比上周："),a("i",{class:Number(t.statisticsData.lastWeekRate.visitUserNum)>=0?"up":"down"},[t._v(t._s(t.statisticsData.lastWeekRate.visitUserNum?(100*t.statisticsData.lastWeekRate.visitUserNum*1e3/1e3).toFixed(2):0)+"%")]),a("i",{class:Number(t.statisticsData.lastWeekRate.visitUserNum)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})])]),t._v(" "),a("div",{staticClass:"content pl25",staticStyle:{border:"none"}},[a("span",{staticClass:"content-title spBlock"},[t._v("店铺数")]),t._v(" "),a("span",{staticClass:"content-number spBlock mb15"},[t._v(t._s(t.statisticsData.today.storeNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("昨日："+t._s(t.statisticsData.yesterday.storeNum))]),t._v(" "),a("span",{staticClass:"content-time spBlock"},[t._v("同比上周："),a("i",{class:Number(t.statisticsData.lastWeekRate.storeNum)>=0?"up":"down"},[t._v(t._s(t.statisticsData.lastWeekRate.storeNum?(100*t.statisticsData.lastWeekRate.storeNum*1e3/1e3).toFixed(2):0)+"%")]),a("i",{class:Number(t.statisticsData.lastWeekRate.storeNum)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})])])]):t._e()},b=[],C={name:"BaseInfo",data:function(){return{statisticsData:null}},mounted:function(){this.getList()},methods:{getdate:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,s=t.getDate();a>=1&&a<=9&&(a="0"+a),s>=0&&s<=9&&(s="0"+s);var i=e+" 年 "+a+" 月 "+s+" 日 ";return i},getList:function(){var t=this;this.listLoading=!0,o(this.tableFrom).then((function(e){200===e.status&&(t.statisticsData=e.data),t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))}}},w=C,x=(a("fd02"),a("2877")),D=Object(x["a"])(w,g,b,!1,null,"b1b84d7c",null),k=D.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}]},[t.statisticsData?a("el-col",t._b({staticClass:"br"},"el-col",t.grid,!1),[a("div",[a("div",{staticClass:"title mb15"},[t._v("当日订单金额")]),t._v(" "),a("div",{staticClass:"price"},[t._v("￥"),a("i",[t._v(t._s(t.statisticsData.todayPrice))])])]),t._v(" "),t.statisticsData?a("echarts-from",{key:"1",ref:"visitChart",attrs:{height:"100%",width:"100%","option-data":t.optionData,styles:t.style}}):t._e()],1):t._e(),t._v(" "),t.orderData?a("el-col",t._b({},"el-col",t.grid,!1),[a("div",{staticClass:"pl25"},[a("div",{staticClass:"toDay"},[a("span",{staticClass:"toDay-title spBlock mb10"},[t._v("当日订单数")]),t._v(" "),a("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.orderData.orderNum))]),t._v(" "),a("span",{staticClass:"toDay-time spBlock"},[t._v("日同比："),a("i",{staticClass:"content-is",class:Number(t.orderData.orderRate)>=0?"up":"down"},[t._v(t._s(Math.floor(100*t.orderData.orderRate))+"%")]),a("i",{class:Number(t.orderData.orderRate)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})]),t._v(" "),t.orderData?a("echarts-from",{key:"2",ref:"visitChart",attrs:{height:"100%",width:"100%","option-data":t.optionDataOrder,styles:t.styleToday}}):t._e(),t._v(" "),a("span",{staticClass:"toDay-title spBlock mb10"},[t._v("当月订单数")]),t._v(" "),a("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.orderData.monthOrderNum))]),t._v(" "),a("span",{staticClass:"toDay-time spBlock"},[t._v("月同比："),a("i",{staticClass:"content-is",class:Number(t.orderData.monthRate)>=0?"up":"down"},[t._v(t._s(Math.floor(100*t.orderData.monthRate))+"%")]),a("i",{class:Number(t.orderData.monthRate)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})])],1),t._v(" "),a("div",{staticClass:"toDay",staticStyle:{border:"none"}},[a("span",{staticClass:"toDay-title spBlock mb10"},[t._v("当日支付人数")]),t._v(" "),a("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.orderUserData.orderNum))]),t._v(" "),a("span",{staticClass:"toDay-time spBlock"},[t._v("日同比："),a("i",{staticClass:"content-is",class:Number(t.orderUserData.orderRate)>=0?"up":"down"},[t._v(t._s(Math.floor(100*t.orderUserData.orderRate))+"%")]),a("i",{class:Number(t.orderData.orderRate)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})]),t._v(" "),t.orderUserData?a("echarts-from",{key:"3",ref:"visitChart",attrs:{height:"100%",width:"100%","option-data":t.optionOrderUser,styles:t.styleToday}}):t._e(),t._v(" "),a("span",{staticClass:"toDay-title spBlock mb10"},[t._v("当月支付人数")]),t._v(" "),a("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.orderUserData.monthOrderNum))]),t._v(" "),a("span",{staticClass:"toDay-time spBlock"},[t._v("月同比："),a("i",{staticClass:"content-is",class:Number(t.orderUserData.monthRate)>=0?"up":"down"},[t._v(t._s(Math.floor(100*t.orderUserData.monthRate))+"%")]),a("i",{class:Number(t.orderUserData.monthRate)>=0?"el-icon-caret-top":"el-icon-caret-bottom"})])],1)])]):t._e()],1)],1)},R=[],L=(a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:t.styles,attrs:{id:t.echarts}})])}),N=[],F=a("313e"),S=a.n(F),T={name:"Index",props:{styles:{type:Object,default:null},optionData:{type:Object,default:null}},data:function(){return{myChart:null}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},watch:{optionData:{handler:function(t,e){this.handleSetVisitChart()},deep:!0}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=S.a.init(document.getElementById(this.echarts));var t=null;t=this.optionData,this.myChart.setOption(t,!0)}}},O=T,U=Object(x["a"])(O,L,N,!1,null,"f82805aa",null),P=U.exports,W={name:"ToDay",components:{echartsFrom:P},data:function(){return{style:{height:"200px"},styleToday:{height:"130px"},legendData:["今天","昨天"],seriesData:[],timer:[],grid:{xl:12,lg:12,md:12,sm:24,xs:24},statisticsData:{},orderData:{},orderUserData:{},optionData:{},listLoading:!1,optionDataOrder:{},optionOrderUser:{}}},beforeDestroy:function(){this.visitChart&&(this.visitChart.dispose(),this.visitChart=null)},mounted:function(){this.getList(),this.getOrder(),this.getOrderUser()},methods:{getList:function(){var t=this;this.listLoading=!0,c().then((function(e){if(200===e.status){t.statisticsData=e.data;var a=t.statisticsData.order.filter((function(t){return 0!==t.yesterday||0!==t.today}));a.unshift({time:"00:00",today:0,yesterday:0});var s=[{name:"今天",type:"line",stack:"订单额",areaStyle:{normal:{color:new S.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#5B8FF9",lineStyle:{color:"#5B8FF9"}}},data:a.map((function(t){return Number(t.today)})),smooth:!0},{name:"昨天",type:"line",stack:"订单额",areaStyle:{normal:{color:new S.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#BFBFBF"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#D9D9D9",lineStyle:{color:"#D9D9D9"}}},data:a.map((function(t){return Number(t.yesterday)}))}];t.optionData={tooltip:{trigger:"axis"},legend:{x:"1px",y:"10px",data:t.legendData},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{boundaryGap:!1,data:a.map((function(t){return t.time})),axisLine:{show:!1},show:!1}],yAxis:{show:!1},series:s},t.listLoading=!1}})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},getOrder:function(){var t=this;l().then((function(e){if(200===e.status){t.orderData=e.data;var a=t.orderData.today.filter((function(t){return 0!==t.total}));a.unshift({time:"00:00",total:0});var s=[{name:"今天",type:"line",stack:"订单额",areaStyle:{normal:{color:new S.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#5B8FF9",lineStyle:{color:"#5B8FF9"}}},data:a.map((function(t){return t.total})),smooth:!0}];t.optionDataOrder={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"1px",y:"10px",data:["今天"]},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},axisLine:{show:!1},xAxis:[{type:"category",boundaryGap:!1,data:a.map((function(t){return t.time})),axisLine:{show:!1},show:!1}],yAxis:{show:!1},series:s}}})).catch((function(e){t.$message.error(e.message)}))},getOrderUser:function(){var t=this;d().then((function(e){if(200===e.status){t.orderUserData=e.data;var a=t.orderUserData.today.filter((function(t){return 0!==t.total}));a.unshift({time:"00:00",total:0});var s=[{name:"今天",type:"line",stack:"人数",areaStyle:{normal:{color:new S.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#5B8FF9",lineStyle:{color:"#5B8FF9"}}},data:a.map((function(t){return t.total})),smooth:!0}];t.optionOrderUser={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"1px",y:"10px",data:["今天"]},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},axisLine:{show:!1},xAxis:[{type:"category",boundaryGap:!1,data:a.map((function(t){return t.time})),axisLine:{show:!1},show:!1}],yAxis:{show:!1},series:s}}})).catch((function(e){t.$message.error(e.message)}))}}},A=W,$=(a("e7ff"),Object(x["a"])(A,B,R,!1,null,"f57aa944",null)),E=$.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card",staticStyle:{height:"346px"}},[a("div",{staticClass:"acea-row row-between-wrapper mb20"},[a("span",{staticClass:"header-title",domProps:{textContent:t._s(t.merTitle)}}),t._v(" "),a("span",{staticClass:"header-time"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link curP"},[a("i",{staticClass:"el-icon-date mr5"}),t._v(t._s(t.name)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.fromList.fromTxt,(function(e,s){return a("el-dropdown-item",{key:s,nativeOn:{click:function(a){return t.setTime(e.val,e.text)}}},[t._v(t._s(e.text))])})),1)],1)],1)]),t._v(" "),t._l(t.merchantData,(function(e,s){return a("div",{key:s,staticClass:"acea-row row-middle mb20"},[a("span",{staticClass:"circle mr10",class:s<3?"circlelan":"circlehui",domProps:{textContent:t._s(s+1)}}),t._v(" "),a("span",{staticClass:"name mr10",domProps:{textContent:t._s("商品销量排行"===t.merTitle?e.cart_info.product.store_name:e.mer_name)}}),t._v(" "),a("div",{staticClass:"progress mr5"},[a("el-progress",{attrs:{percentage:Number(100*e.rate)}})],1),t._v(" "),a("span",{domProps:{textContent:t._s(e.total)}})])}))],2)},M=[],V=a("e572"),z={name:"Ranking",props:{merchantData:{type:Array,default:function(){return[]}},merTitle:{type:String,default:""},xAxisData:{type:Array,default:function(){return[]}}},data:function(){return{fromList:V["a"],name:"最近30天"}},methods:{setTime:function(t,e){this.name=e,this.$emit("getList",t)}}},G=z,I=(a("a4cf"),Object(x["a"])(G,j,M,!1,null,"b8f69088",null)),J=I.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card",staticStyle:{height:"346px"}},[a("div",{staticClass:"acea-row row-between-wrapper mb20"},[a("span",{staticClass:"header-title"},[t._v("商户销售额占比")]),t._v(" "),a("span",{staticClass:"header-time"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link curP"},[a("i",{staticClass:"el-icon-date mr5"}),t._v(t._s(t.name)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.fromList.fromTxt,(function(e,s){return a("el-dropdown-item",{key:s,nativeOn:{click:function(a){return t.setTime(e.val,e.text)}}},[t._v(t._s(e.text))])})),1)],1)],1)]),t._v(" "),t.merchantRate.length?a("echarts-from",{attrs:{"option-data":t.optionData,styles:t.style}}):t._e()],1)},H=[],Y={name:"MerchantRate",components:{echartsFrom:P},data:function(){return{style:{height:"281px"},merchantRate:[],optionData:{},fromList:V["a"],name:"最近30天"}},mounted:function(){this.getList("lately30")},methods:{setTime:function(t,e){this.name=e,this.getList(t)},getList:function(t){var e=this;m({date:t}).then((function(t){if(200===t.status){e.merchantRate=t.data.list;var a=[],s=[],i=["#5AD8A6","#5B8FF9","#F6BD16","#5D7092","#C6C6C6"];e.merchantRate.map((function(t,e){a.push(t.category_name),s.push({value:t.pay_price,name:t.category_name,itemStyle:{normal:{color:i[e]}}})})),e.optionData={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:a},series:[{name:"访问来源",type:"pie",radius:"65%",center:["60%","65%"],data:s,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}})).catch((function(t){e.$message.error(t.message)}))}}},q=Y,K=(a("0c75"),Object(x["a"])(q,X,H,!1,null,"1ffdc096",null)),Q=K.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"acea-row row-between-wrapper mb20"},[a("span",{staticClass:"header-title"},[t._v("用户数据")]),t._v(" "),a("span",{staticClass:"header-time"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-date mr5"}),t._v("\n          "+t._s(t.name)+"\n          "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.fromList.fromTxt,(function(e,s){return a("el-dropdown-item",{key:s,nativeOn:{click:function(a){return t.setTime(e.val,e.text)}}},[t._v(t._s(e.text))])})),1)],1)],1)]),t._v(" "),t.listLoading?t._e():a("echarts-from",{attrs:{"option-data":t.optionData,styles:t.style,height:"100%",width:"100%"}})],1)},tt=[],et=(a("ac6a"),a("4f7f"),a("5df3"),a("1c4c"),{name:"UserData",components:{echartsFrom:P},data:function(){return{style:{height:"400px"},optionData:{},name:"最近30天",fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"}]}}},mounted:function(){this.getList("lately30")},methods:{setTime:function(t,e){this.name=e,this.getList(t)},getList:function(t){var e=this;h({date:t}).then((function(t){if(console.log(t),200===t.status){var a=t.data,s=[],i=[],r=[],n=[];a.map((function(t){i.push(t.new),r.push(t.total),s.push(t.visit),n.push(t.day)}));var o=[{name:"新用户",type:"line",stack:"用户量",itemStyle:{normal:{color:"#5AD8A6",lineStyle:{color:"#5AD8A6"}}},data:i,smooth:!1},{name:"访问用户",type:"line",stack:"用户量",itemStyle:{normal:{color:"#5D7092",lineStyle:{color:"#5D7092"}}},data:s,smooth:!1},{name:"累计用户",type:"line",stack:"用户量",yAxisIndex:1,itemStyle:{normal:{color:"#5B8FF9",lineStyle:{color:"#5B8FF9"}}},data:r,smooth:!1}];e.optionData={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"1px",y:"10px",data:["新用户","访问用户","累计用户"]},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},axisLine:{show:!1},xAxis:[{type:"category",boundaryGap:!0,axisLine:{show:!1},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},splitLine:{show:!1},axisLabel:{interval:0,rotate:40,textStyle:{color:"#7F8B9C"}},data:Array.from(new Set(n))}],yAxis:[{name:"新/访",type:"value",inverse:!1,boundaryGap:["0","0.1"]},{name:"累计用户",type:"value",max:e.arrayMax(r)+20,min:e.arrayMin(r)-10,splitLine:{show:!1}}],series:o},e.listLoading=!1}})).catch((function(t){e.$message.error(t.message)}))},arrayMin:function(t){for(var e=t[0],a=1,s=t.length;a<s;a+=1)t[a]<e&&(e=t[a]);return e},arrayMax:function(t){for(var e=t[0],a=1,s=t.length;a<s;a++)t[a]>e&&(e=t[a]);return e}}}),at=et,st=Object(x["a"])(at,Z,tt,!1,null,"b2ce9034",null),it=st.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"mb15",attrs:{gutter:20}},[t.users?a("el-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"acea-row row-between-wrapper mb20"},[a("span",{staticClass:"header-title"},[t._v("成交用户")]),t._v(" "),a("span",{staticClass:"header-time"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-date mr5"}),t._v(t._s(t.name)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.fromList.fromTxt,(function(e,s){return a("el-dropdown-item",{key:s,nativeOn:{click:function(a){return t.setTime(e.val,e.text)}}},[t._v(t._s(e.text))])})),1)],1)],1)]),t._v(" "),a("div",{staticClass:"user"},[a("div",{staticClass:"acea-row"},[a("div",{staticClass:"user-visitUser"},[a("span",{staticClass:"spBlock mb10"},[t._v("访客人数")]),t._v(" "),a("span",{staticClass:"spBlock",domProps:{textContent:t._s(t.users.visitUser)}})]),t._v(" "),a("div",{staticClass:"user-visitUser-ti"},[t._v("访客")])]),t._v(" "),a("div",{staticClass:"orderUser"},[a("div",{staticClass:"user-orderUser acea-row"},[a("div",{staticClass:"mr50"},[a("span",{staticClass:"spBlock mb10"},[t._v("下单人数")]),t._v(" "),a("span",{staticClass:"spBlock",domProps:{textContent:t._s(t.users.orderUser)}})]),t._v(" "),a("div",[a("span",{staticClass:"spBlock mb10"},[t._v("下单金额")]),t._v(" "),a("span",{staticClass:"spBlock",domProps:{textContent:t._s(t.users.orderPrice)}})])]),t._v(" "),a("div",{staticClass:"user-orderUser-ti"},[t._v("下单")]),t._v(" "),a("div",{class:t.fullWidth>1046?"user-orderUser-change":"user-orderUser-changeduan"}),t._v(" "),a("div",[a("span",{staticClass:"spBlock sp1"},[t._v("访客-下单转化率："+t._s(Math.floor(100*t.users.orderRate))+" %")]),t._v(" "),a("span",{staticClass:"spBlock sp2"},[t._v("下单-下单转化率："+t._s(Math.floor(100*t.users.payOrderRate))+" %")])])]),t._v(" "),a("div",{staticClass:"acea-row payOrderUser"},[a("div",{staticClass:"user-payOrderUser acea-row"},[a("div",{staticClass:"mr50"},[a("span",{staticClass:"spBlock mb10"},[t._v("支付人数")]),t._v(" "),a("span",{staticClass:"spBlock",domProps:{textContent:t._s(t.users.payOrderUser)}})]),t._v(" "),a("div",{staticClass:"mr50"},[a("span",{staticClass:"spBlock mb10"},[t._v("支付金额")]),t._v(" "),a("span",{staticClass:"spBlock",domProps:{textContent:t._s(t.users.payOrderPrice)}})]),t._v(" "),a("div",[a("span",{staticClass:"spBlock mb10"},[t._v("客单价")]),t._v(" "),a("span",{staticClass:"spBlock",domProps:{textContent:t._s(t.users.userRate)}})])]),t._v(" "),a("div",{staticClass:"user-payOrderUser-ti"},[t._v("支付")])])])])],1):t._e(),t._v(" "),a("el-col",{attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("el-card",{staticClass:"box-card",staticStyle:{height:"358px"}},[a("div",{staticClass:"acea-row row-between-wrapper mb20",staticStyle:{"padding-bottom":"30px"}},[a("span",{staticClass:"header-title"},[t._v("成交用户占比")]),t._v(" "),a("span",{staticClass:"header-time"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-date mr5"}),t._v(t._s(t.nameRate)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.fromList.fromTxt,(function(e,s){return a("el-dropdown-item",{key:s,nativeOn:{click:function(a){return t.setTimeRate(e.val,e.text)}}},[t._v(t._s(e.text))])})),1)],1)],1)]),t._v(" "),a("el-radio-group",{staticClass:"echart-btn",staticStyle:{float:"right"},attrs:{size:"mini"},on:{change:function(e){return t.changeRate(t.rateType)}},model:{value:t.rateType,callback:function(e){t.rateType=e},expression:"rateType"}},[a("el-radio-button",{attrs:{label:"price"}},[t._v("金额")]),t._v(" "),a("el-radio-button",{attrs:{label:"user"}},[t._v("客户数")])],1),t._v(" "),t.usersRate?a("echarts-from",{ref:"visitChart",attrs:{height:"100%",width:"100%","option-data":t.optionData,styles:t.style}}):t._e()],1)],1)],1)},nt=[],ot={name:"User",components:{echartsFrom:P},data:function(){return{fullWidth:document.body.clientWidth,style:{height:"200px"},name:"最近30天",users:null,nameRate:"最近30天",nameVal:"lately30",usersRate:{},rateType:"price",optionData:{},fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]}}},mounted:function(){this.getList("lately30"),this.getRate("lately30")},created:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(t){this.fullWidth=document.body.clientWidth},setTime:function(t,e){this.name=e,this.getList(t)},getList:function(t){var e=this;f({date:t}).then((function(t){e.users=t.data})).catch((function(t){e.$message.error(t.message)}))},setTimeRate:function(t,e){this.nameVal=t,this.nameRate=e,this.getRate(t)},changeRate:function(){this.getRate(this.nameVal)},getRate:function(t){var e=this;v({date:t}).then((function(t){if(200===t.status){var a=[];e.usersRate=t.data,a="price"===e.rateType?[{value:e.usersRate.newTotalPrice,name:"新成交用户",itemStyle:{normal:{color:"#4ECB73"}}},{value:e.usersRate.oldTotalPrice,name:"老用户",itemStyle:{normal:{color:"#39A1FF"}}}]:[{value:e.usersRate.newUser,name:"新成交用户",itemStyle:{normal:{color:"#4ECB73"}}},{value:e.usersRate.oldUser,name:"老用户",itemStyle:{normal:{color:"#39A1FF"}}}],e.optionData={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["新成交用户","老用户"]},series:[{name:"访问来源",type:"pie",radius:"65%",center:["50%","65%"],data:a,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}})).catch((function(t){e.$message.error(t.message)}))}}},ct=ot,lt=(a("ac5e"),Object(x["a"])(ct,rt,nt,!1,null,"8595eb90",null)),dt=lt.exports,ut=a("a78e"),mt=a.n(ut),pt={name:"Dashboard",components:{baseInfo:k,toDay:E,myRanking:J,merchantRate:Q,userData:it,userFrom:dt},data:function(){return{merTitle:"商品销量排行",visitTitle:"商户访客量排行",currentRole:"adminDashboard",grid:{xl:8,lg:8,md:12,sm:12,xs:24},merchantStock:[],merchantVisit:[]}},computed:Object(r["a"])({},Object(y["b"])(["roles"])),mounted:function(){var t=this;console.log(!mt.a.get("auth")),this.getAuth(),this.getList("lately30"),this.getVisit("lately30"),mt.a.get("auth")||Object(_["d"])().then((function(e){if("success"!==e.message)return t.$notify.warning({title:"授权提醒",duration:0,dangerouslyUseHTMLString:!0,message:e.message,render:function(t){return t("div",[t("a",{attrs:{href:"http://www.crmeb.com/home/grant/applyauthorize.html",target:"_blank"}},e.message)])},onClose:function(){mt.a.set("auth",!0)}})})).catch((function(t){}))},methods:{getAuth:function(){var t=this;Object(_["b"])().then((function(e){var a=e.data||{};a.auth_code&&a.auth&&(t.authCode=a.auth_code,t.auth=!0)})).catch((function(e){var a=e.message;t.$message.error(a)}))},getList:function(t){var e=this;u({date:t}).then((function(t){200===t.status&&(e.merchantStock=t.data.list)})).catch((function(t){e.$message.error(t.message)}))},getVisit:function(t){var e=this;p({date:t}).then((function(t){200===t.status&&(e.merchantVisit=t.data.list)})).catch((function(t){e.$message.error(t.message)}))}}},ft=pt,vt=Object(x["a"])(ft,s,i,!1,null,null,null);e["default"]=vt.exports},a4cf:function(t,e,a){"use strict";var s=a("6290"),i=a.n(s);i.a},ac5e:function(t,e,a){"use strict";var s=a("c67f"),i=a.n(s);i.a},c67f:function(t,e,a){},cbf6:function(t,e,a){},e572:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}));var s=[{label:"开启",value:1},{label:"关闭",value:0}],i={title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},r={title:"状态",custom:!0,fromTxt:[{text:"全部",val:""},{text:"待审核",val:"0"},{text:"审核已通过",val:"1"},{text:"审核未通过",val:"2"}]}},e7ff:function(t,e,a){"use strict";var s=a("692c"),i=a.n(s);i.a},f955:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"j",(function(){return c})),a.d(e,"i",(function(){return l})),a.d(e,"f",(function(){return d})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return m})),a.d(e,"d",(function(){return p}));var s=a("0c6d");function i(){return s["a"].get("safety/database/fileList")}function r(t){return s["a"].delete("safety/database/delete",t)}function n(){return s["a"].get("safety/database/lst")}function o(t){return s["a"].post("safety/database/backups",t)}function c(t){return s["a"].post("safety/database/repair",t)}function l(t){return s["a"].post("safety/database/optimize",t)}function d(t){return s["a"].get("safety/database/detail/".concat(t))}function u(){return s["a"].get("auth")}function m(t){return s["a"].post("auth_apply",t)}function p(){return s["a"].get("check_auth")}},fd02:function(t,e,a){"use strict";var s=a("022c"),i=a.n(s);i.a}}]);