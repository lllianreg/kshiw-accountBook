(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-faf80390"],{1265:function(t,e,a){},"34e4":function(t,e,a){},"38be":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("x-header",{attrs:{"left-options":{showBack:!0}}},[t._v("add Item")]),a("scroll",{ref:"scroller",attrs:{data:t.typeList}},[a("group",{attrs:{"label-width":"100px","label-align":"left"}},[a("x-input",{attrs:{title:"名称",placeholder:"",required:""},model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}})],1),a("group",{attrs:{"label-width":"100px","label-align":"left"}},[a("x-input",{ref:"price",attrs:{title:"价格(￥)",placeholder:"10000.00",debounce:500,required:""},on:{"on-change":t.priceCalc},model:{value:t.addForm.price,callback:function(e){t.$set(t.addForm,"price",t._n(e))},expression:"addForm.price"}})],1),a("group",{attrs:{"label-width":"100px","label-align":"left"}},[a("popup-picker",{attrs:{title:"种类",data:t.typeList,"show-name":"","value-text-align":"left",placeholder:"根据价格换算"},model:{value:t.addForm.type,callback:function(e){t.$set(t.addForm,"type",e)},expression:"addForm.type"}})],1),a("group",{attrs:{"label-width":"100px","label-align":"left"}},[a("datetime",{attrs:{format:"YYYY-MM-DD",title:"领养日期"},model:{value:t.addForm.createTime,callback:function(e){t.$set(t.addForm,"createTime",e)},expression:"addForm.createTime"}})],1),a("group",{attrs:{"label-width":"100px","label-align":"left"}},[a("datetime",{attrs:{format:"HH:mm",title:"领养时间"},model:{value:t.addForm.adoptTime,callback:function(e){t.$set(t.addForm,"adoptTime",e)},expression:"addForm.adoptTime"}})],1),a("group",{attrs:{"label-width":"100px","label-align":"left"}},[a("x-input",{attrs:{title:"利率",placeholder:"0.20",required:""},model:{value:t.addForm.rate,callback:function(e){t.$set(t.addForm,"rate",e)},expression:"addForm.rate"}})],1),a("group",{attrs:{"label-width":"100px","label-align":"left"}},[a("x-input",{attrs:{title:"收益天数",placeholder:"",required:""},model:{value:t.addForm.day,callback:function(e){t.$set(t.addForm,"day",e)},expression:"addForm.day"}})],1),a("br"),a("br"),a("x-button",{staticClass:"submit-btn",attrs:{"action-type":"submit",disabled:t.disabled},nativeOn:{click:function(e){return t.addItem(!1)}}},[t._v("完成")]),a("x-button",{staticClass:"submit-btn",attrs:{"action-type":"submit",disabled:t.disabled},nativeOn:{click:function(e){return t.continueAdd(e)}}},[t._v("继续新增")])],1),a("toast",{attrs:{type:"text",time:1200,width:"8.5em","is-show-mask":"",position:"top",text:t.showPositionValue},model:{value:t.toastFlag,callback:function(e){t.toastFlag=e},expression:"toastFlag"}})],1)},o=[],r=a("e20c"),d=(a("f763"),a("283b")),l=[{minPrice:99,maxPrice:300,day:5,rate:.15,adoptTime:"12:00",type:"十二生肖-鼠"},{minPrice:300,maxPrice:500,day:3,rate:.09,adoptTime:"13:00",type:"十二生肖-鸡"},{minPrice:500,maxPrice:1e3,day:1,rate:.05,adoptTime:"14:30",type:"十二生肖-兔"},{minPrice:1e3,maxPrice:1500,day:6,rate:.12,adoptTime:"16:00",type:"十二生肖-狗"},{minPrice:1500,maxPrice:2e3,day:3,rate:.1,adoptTime:"17:30",type:"十二生肖-羊"},{minPrice:2e3,maxPrice:3e3,day:7,rate:.2,adoptTime:"19:00",type:"十二生肖-猪"},{minPrice:3e3,maxPrice:5e3,day:10,rate:.23,adoptTime:"19:50",type:"十二生肖-马"}],n=a("aada"),s={components:{XInput:d["f"],Datetime:d["c"],PopupPicker:d["d"],Scroll:n["a"]},data:function(){return{log:localStorage.getItem("accountListLog")?JSON.parse(localStorage.getItem("accountListLog")):[],addForm:{},toastFlag:!1,showPositionValue:null,typeList:[],options:l}},computed:{disabled:function(){return!(this.addForm.price&&this.addForm.rate&&this.addForm.day&&this.addForm.createTime)}},methods:{priceCalc:function(t){var e=this;if(!isNaN(t)){var a=[];if(this.options.forEach(function(e,i){t>e.minPrice&&t<=e.maxPrice&&a.push({name:e.type,value:i})}),0==a.length)return;this.typeList=[a],this.$nextTick(function(){e.$set(e.addForm,"type",[a[0]["value"]])})}},addItem:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;if(!e.test(this.addForm.price))return this.toastFlag=!0,void(this.showPositionValue="价格格式错误呀");var a=/^(1|0(\.\d{1,2})?)$/;if(!a.test(this.addForm.rate))return this.toastFlag=!0,void(this.showPositionValue="利率格式错误呀");var i=Object(r["a"])({},this.addForm);i.createTime+=" "+i.adoptTime,i.type=this.options[i.type].type,i.id=+new Date/1e3,delete i.adoptTime,this.log.push(i),window.localStorage.setItem("accountListLog",JSON.stringify(this.log)),t||this.$router.go(-1)},continueAdd:function(){this.addItem(!0),this.addForm={}}},watch:{"addForm.type":function(t){if(t&&0!=t.length){var e=this.options[t];Object.assign(this.addForm,{rate:e.rate,adoptTime:e.adoptTime,day:e.day})}}}},c=s,m=(a("cf08"),a("45cc"),a("17cc")),p=Object(m["a"])(c,i,o,!1,null,"000b4c5e",null);e["default"]=p.exports},"45cc":function(t,e,a){"use strict";var i=a("1265"),o=a.n(i);o.a},cf08:function(t,e,a){"use strict";var i=a("34e4"),o=a.n(i);o.a}}]);