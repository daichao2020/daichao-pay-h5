(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396e228a"],{"0080":function(t,a,s){"use strict";var e=s("68e8"),n=s.n(e);n.a},"00f5":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"default-page status-page page"},[1==t.pageShow?s("section",{staticClass:"msg-waiting"},[s("div",{staticClass:"pay-msg"},[s("div",{staticClass:"pay-msg__icon-area"},[s("van-circle",{ref:"circle",staticClass:"flex",attrs:{rate:t.rate,speed:100,"stroke-width":60,color:"#ff9933","layer-color":"#eee",size:"240px"},model:{value:t.currentRate,callback:function(a){t.currentRate=a},expression:"currentRate"}},[s("van-count-down",{ref:"countDown",staticClass:"flex-1",attrs:{time:t.time,"auto-start":"",format:"ss"},on:{change:t.setCircleRate}})],1)],1),s("div",{staticClass:"pay-msg__tips-area"},[s("p",{staticClass:"pay-msg__tips"},[t._v(" "+t._s(t.$t("str.checkingPaymentStatus"))+" ")])])])]):t._e(),2==t.pageShow?s("section",{staticClass:"msg-success"},[s("div",{staticClass:"pay-msg"},[s("div",{staticClass:"pay-msg__icon-area"},[s("van-icon",{staticClass:"pay-icon_msg pay-icon-success",attrs:{name:"checked"}})],1),s("div",{staticClass:"pay-msg__text-area"},[s("h2",{staticClass:"pay-msg__title"},[t._v(t._s(t.$t("str.paymentIsSuccessful")))]),s("p",{staticClass:"pay-msg__desc"})]),s("div",{staticClass:"pay-msg__opr-area"},[s("div",{staticClass:"vip-btn-wrap"},[s("van-button",{staticClass:"vip-btn",attrs:{type:"primary",block:""},on:{click:t.toEndPage}},[t._v(t._s(t.$t("str.next")))])],1)])])]):t._e(),3==t.pageShow?s("section",{staticClass:"msg-warn"},[s("div",{staticClass:"pay-msg"},[s("div",{staticClass:"pay-msg__icon-area"},[s("van-icon",{staticClass:"pay-icon_msg pay-icon-fail",attrs:{name:"warning"}})],1),s("div",{staticClass:"pay-msg__text-area"},[s("h2",{staticClass:"pay-msg__title"},[t._v(t._s(t.$t("str.paymentIsFailed")))])]),s("div",{staticClass:"pay-msg__opr-area"},[s("div",{staticClass:"vip-btn-wrap"},[s("van-button",{staticClass:"vip-btn",attrs:{type:"default",block:""},on:{click:t.toLastPage}},[t._v(t._s(t.$t("str.back")))])],1)])])]):t._e()])},n=[],r=s("f8b7"),c={data:function(){return{pageShow:1,time:3e4,rate:100,currentRate:0,payStatus:40003,payStatusTxt:this.$t("str.checkingPaymentStatus"),seconds:30}},mounted:function(){this.queryOrderPayStatus()},computed:{order:function(){return this.$store.getters.order}},methods:{onClickLeft:function(){this.$router.go(-1)},setCircleRate:function(t){this.seconds=t.seconds,this.rate=(30-t.seconds)/30*100,40003==this.payStatus&&t.seconds%5==0&&this.queryOrderPayStatus()},queryOrderPayStatus:function(){var t=this,a=this.order.order_id;Object(r["d"])(a).then((function(a){var s=a.data;switch(s.status){case 40001:t.$refs.countDown.pause(),t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=2;try{Adjust.trackEvent(paySuccessEvent)}catch(e){}setTimeout((function(){t.toEndPage()}),1e3);break;case 40002:t.$refs.countDown.pause(),t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=3;try{Adjust.trackEvent(payFailEvent)}catch(e){}break;case 40003:0==t.seconds&&t.$refs.countDown.reset(),t.payStatus=s.status,t.pageShow=1;break;case 40004:t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=3;break;default:t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=3;break}})).catch((function(){t.pageShow=3}))},toEndPage:function(){this.$router.push({name:"end"})},toVipPage:function(){this.$router.push({name:"vip"})},toLastPage:function(){switch(this.payStatus){case 40002:this.toVipPage();break;case 40004:this.toVipPage();break;default:this.toVipPage();break}}}},i=c,o=(s("0080"),s("2877")),u=Object(o["a"])(i,e,n,!1,null,"e89cc09e",null);a["default"]=u.exports},"68e8":function(t,a,s){},f8b7:function(t,a,s){"use strict";s.d(a,"a",(function(){return n})),s.d(a,"b",(function(){return r})),s.d(a,"e",(function(){return c})),s.d(a,"f",(function(){return i})),s.d(a,"c",(function(){return o})),s.d(a,"d",(function(){return u}));var e=s("b775");function n(){return Object(e["a"])({url:"/member/cards",method:"get"})}function r(){return Object(e["a"])({url:"/payment/channels",method:"get"})}function c(t){return Object(e["a"])({url:"/member/orders",method:"post",data:t})}function i(t){return Object(e["a"])({url:"/member/orders/oddPay",method:"post",data:t})}function o(t){return Object(e["a"])({url:"/orders/".concat(t.order_id,"/mpurse"),method:"post",data:t})}function u(t){return Object(e["a"])({url:"/payment/oddPay/return",method:"get",params:{order_id:t}})}}}]);
//# sourceMappingURL=chunk-396e228a.a191f606.js.map