(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb9175de"],{"0397":function(t,e,i){"use strict";var n=i("919f"),r=i.n(n);r.a},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},6462:function(t,e,i){"use strict";var n=i("8e02"),r=i.n(n);r.a},"841c":function(t,e,i){"use strict";var n=i("d784"),r=i("825a"),s=i("1d80"),a=i("129f"),o=i("14c3");n("search",1,(function(t,e,i){return[function(e){var i=s(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var s=r(t),c=String(this),u=s.lastIndex;a(u,0)||(s.lastIndex=0);var d=o(s,c);return a(s.lastIndex,u)||(s.lastIndex=u),null===d?-1:d.index}]}))},"8e02":function(t,e,i){},"919f":function(t,e,i){},d251:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vip-page page"},[t.isShowHeader?i("header",[i("van-nav-bar",{attrs:{title:"",fixed:"",placeholder:""}})],1):t._e(),i("section",{staticClass:"home-page-bdoy"},[i("productSwiper")],1)])},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card"},[i("div",{staticClass:"card-bd"},[i("div",{staticClass:"product-info"},[i("div",{staticClass:"info-row bottom-line"},[i("p",{staticClass:"info-title"},[t._v("Loan Amount (₹)")]),i("div",{staticClass:"info-list"},t._l(t.cardList,(function(e){return i("div",{key:e.id,staticClass:"info-item",class:t.card.id==e.id?"active":"",on:{click:function(i){return t.setLoanItem(e)}}},[i("span",[t._v(t._s(e.description))])])})),0)]),i("div",{staticClass:"info-row bottom-line"},[i("p",{staticClass:"info-title"},[t._v("Term (day)")]),i("div",{staticClass:"info-list"},t._l(t.periodList,(function(e){return i("div",{key:e.value,staticClass:"info-item",class:t.period==e.value?"active":"",on:{click:function(i){return t.setPeriod(e)}}},[i("span",[t._v(t._s(e.value))])])})),0)]),i("div",{staticClass:"desc-row small flex bottom-line"},[i("div",{staticClass:"flex-1 text-left"},[t._v("Interest")]),i("div",{staticClass:"bold"},[t._v("₹"+t._s(t.interest))])]),i("div",{staticClass:"desc-row small flex bottom-line"},[i("div",{staticClass:"flex-1 text-left"},[t._v(" Repayment amount("),i("span",{staticClass:"small red"},[t._v("-₹"+t._s(t.auditFee))]),t._v(") ")]),i("div",{staticClass:"bold"},[t._v("₹"+t._s(t.repayment))])]),i("div",{staticClass:"desc-row small flex"},[i("div",{staticClass:"flex-1 text-left"},[t._v("Loan Term")]),i("div",{staticClass:"bold"},[t._v(t._s(t.period)+"days")])])])]),i("div",{staticClass:"card-ft"},[i("div",{staticClass:"vip-btn-wrap"},[i("van-button",{staticClass:"vip-btn",attrs:{type:"primary",disabled:t.isSubmitting,loading:t.isSubmitting,"loading-text":"Submitting...",block:""},on:{click:t.onSubmitOrder}},[i("div",{staticClass:"flex count-down"},[i("van-icon",{attrs:{name:"underway-o"}}),i("van-count-down",{ref:"countDown",attrs:{millisecond:"",time:t.countDownTime,"auto-start":!1,format:"HH:mm:ss:SS"}})],1),i("p",[t._v("Immediate withdrawal")])])],1),t.userInfo.is_member?i("div",{staticClass:"vip-btn-wrap",staticStyle:{"margin-top":"15px"}},[i("van-button",{attrs:{type:"default",block:""},on:{click:function(e){return t.toHomePage()}}},[t._v(" Choose other loan product ")])],1):t._e(),i("div",{staticClass:"warn-tips"},[i("div",{staticClass:"tips-hd"},[i("span",{staticClass:"title"},[t._v("Warning: ")]),i("van-icon",{attrs:{name:"warning-o"}})],1),i("div",{staticClass:"tips-bd"},[i("div",{staticClass:"tip-item bottom-line"},[i("p",[t._v("① The audit fee ₹"+t._s(t.auditFee))])]),t._m(0),t._m(1)])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip-item bottom-line"},[i("p",[t._v("② if the loan is unsuccessful,the full amount of your payment will be refunded to you unconditionally in one month.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip-item bottom-line"},[i("p",[t._v("③ Credit Evaluation Fee")]),i("p",{staticClass:"tip-desc"},[t._v("• The fee is used to assess your credit status and query your credit history.")]),i("p",{staticClass:"tip-desc"},[t._v("• Your credit report will be generated for you.")]),i("p",{staticClass:"tip-desc"},[t._v("• Bank-level confidentially to protect your information security.")])])}],o=(i("a4d3"),i("e01a"),i("fb6a"),i("b0c0"),i("ac1f"),i("5319"),i("841c"),i("f8b7")),c={data:function(){return{cardList:[],card:null,periodList:[{value:7},{value:14},{value:30},{value:60},{value:90},{value:180}],period:7,sold_count:0,countDownTime:54e5,isSubmitting:!1}},computed:{appVersionId:function(){return this.$store.getters.appVersionId},userInfo:function(){return this.$store.getters.info},interest:function(){var t=0;if(this.card){var e=+this.card.description,i=this.period;t=e*i/1e3}return t},auditFee:function(){var t=0;return this.card&&(t=+this.card.price),t},repayment:function(){var t=0;if(this.card){var e=+this.card.description;t=e-+this.card.price}return t}},mounted:function(){this.userInfo.is_member?this.toEndPage():this.getMemberCardList()},methods:{getMemberCardList:function(){var t=this;Object(o["a"])().then((function(e){t.cardList=e.data||[],t.card=t.cardList[0]}))},setLoanItem:function(t){this.card=t,this.setCountdown()},setPeriod:function(t){this.period=t.value},setCountdown:function(){var t=this;this.$refs.countDown.reset(),setTimeout((function(){t.$refs.countDown.start()}),100)},onSubmitOrder:function(){var t=this.card;if(!t)return!1;this.$store.dispatch("product/setProductInfo",t),this.submitOrder(t)},submitOrder:function(t){var e=this;if(!this.userInfo.name)return this.toInfoPage(),!1;var i=location.href.slice(0,location.href.search("#"))+"#/step03",n={return_url:i,member_card_id:t.id};if(this.isSubmitting)return!1;this.isSubmitting=!0;try{Adjust.trackEvent(clickPayEvent)}catch(r){}Object(o["f"])(n).then((function(t){var i=t.data;i&&(e.$store.dispatch("product/setOrderInfo",i),location.href=i.payment_link)})).catch((function(){e.isSubmitting=!1}))},toStep03Page:function(){this.$router.push({name:"step03"})},toHomePage:function(){this.$router.push({name:"home"})},toInfoPage:function(){this.$router.push({name:"info"})},toEndPage:function(){this.$router.replace({name:"end"})}}},u=c,d=(i("6462"),i("2877")),l=Object(d["a"])(u,s,a,!1,null,"0d967b64",null),f=l.exports,v={components:{productSwiper:f},data:function(){return{}},mounted:function(){this.$store.dispatch("user/getInfo")},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{onClickLeft:function(){this.$router.go(-1)}}},p=v,m=(i("0397"),Object(d["a"])(p,n,r,!1,null,null,null));e["default"]=m.exports},e01a:function(t,e,i){"use strict";var n=i("23e7"),r=i("83ab"),s=i("da84"),a=i("5135"),o=i("861d"),c=i("9bf2").f,u=i("e893"),d=s.Symbol;if(r&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(f,d);var v=f.prototype=d.prototype;v.constructor=f;var p=v.toString,m="Symbol(test)"==String(d("test")),h=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var i=m?e.slice(7,-1):e.replace(h,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:f})}},f8b7:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"e",(function(){return a})),i.d(e,"f",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return u}));var n=i("b775");function r(){return Object(n["a"])({url:"/member/cards",method:"get"})}function s(){return Object(n["a"])({url:"/payment/channels",method:"get"})}function a(t){return Object(n["a"])({url:"/member/orders",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/member/orders/razorpay",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/orders/".concat(t.order_id,"/mpurse"),method:"post",data:t})}function u(t){return Object(n["a"])({url:"/payment/razorpay/return",method:"get",params:{order_id:t}})}},fb6a:function(t,e,i){"use strict";var n=i("23e7"),r=i("861d"),s=i("e8b5"),a=i("23cb"),o=i("50c4"),c=i("fc6a"),u=i("8418"),d=i("b622"),l=i("1dde"),f=i("ae40"),v=l("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),h=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var i,n,d,l=c(this),f=o(l.length),v=a(t,f),p=a(void 0===e?f:e,f);if(s(l)&&(i=l.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?r(i)&&(i=i[m],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return h.call(l,v,p);for(n=new(void 0===i?Array:i)(b(p-v,0)),d=0;v<p;v++,d++)v in l&&u(n,d,l[v]);return n.length=d,n}})}}]);
//# sourceMappingURL=chunk-eb9175de.ad3fcdba.js.map