(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5739c143"],{"0397":function(t,i,e){"use strict";var s=e("919f"),n=e.n(s);n.a},"129f":function(t,i){t.exports=Object.is||function(t,i){return t===i?0!==t||1/t===1/i:t!=t&&i!=i}},"47b3":function(t,i,e){"use strict";var s=e("ef9a"),n=e.n(s);n.a},"841c":function(t,i,e){"use strict";var s=e("d784"),n=e("825a"),r=e("1d80"),a=e("129f"),o=e("14c3");s("search",1,(function(t,i,e){return[function(i){var e=r(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,e):new RegExp(i)[t](String(e))},function(t){var s=e(i,t,this);if(s.done)return s.value;var r=n(t),c=String(this),u=r.lastIndex;a(u,0)||(r.lastIndex=0);var d=o(r,c);return a(r.lastIndex,u)||(r.lastIndex=u),null===d?-1:d.index}]}))},"919f":function(t,i,e){},d251:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vip-page page"},[t.isShowHeader?e("header",[e("van-nav-bar",{attrs:{title:"",fixed:"",placeholder:""}})],1):t._e(),e("section",{staticClass:"home-page-bdoy"},[e("productSwiper")],1)])},n=[],r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-bd"},[e("div",{staticClass:"product-info"},[e("div",{staticClass:"info-row bottom-line"},[e("p",{staticClass:"info-title"},[t._v(t._s(t.$t("str.loanAmount"))+"("+t._s(t.$t("str.unit"))+")")]),e("div",{staticClass:"info-list"},t._l(t.cardList,(function(i){return e("div",{key:i.id,staticClass:"info-item",class:t.card.id==i.id?"active":"",on:{click:function(e){return t.setLoanItem(i)}}},[e("span",[t._v(t._s(i.description))])])})),0)]),e("div",{staticClass:"info-row bottom-line"},[e("p",{staticClass:"info-title"},[t._v(t._s(t.$t("str.term"))+" ("+t._s(t.$t("str.day"))+")")]),e("div",{staticClass:"info-list"},t._l(t.periodList,(function(i){return e("div",{key:i.value,staticClass:"info-item",class:t.period==i.value?"active":"",on:{click:function(e){return t.setPeriod(i)}}},[e("span",[t._v(t._s(i.value))])])})),0)]),e("div",{staticClass:"desc-row small flex bottom-line"},[e("div",{staticClass:"flex-1 text-left"},[t._v(t._s(t.$t("str.interest")))]),e("div",{staticClass:"bold"},[t._v(t._s(t.$t("str.unit"))+t._s(t.interest))])]),e("div",{staticClass:"desc-row small flex bottom-line"},[e("div",{staticClass:"flex-1 text-left"},[t._v(" "+t._s(t.$t("str.repaymentAmount"))+"("),e("span",{staticClass:"small red"},[t._v("-"+t._s(t.$t("str.unit"))+t._s(t.auditFee))]),t._v(") ")]),e("div",{staticClass:"bold"},[t._v(t._s(t.$t("str.unit"))+t._s(t.repayment))])]),e("div",{staticClass:"desc-row small flex"},[e("div",{staticClass:"flex-1 text-left"},[t._v(t._s(t.$t("str.loanTerm")))]),e("div",{staticClass:"bold"},[t._v(t._s(t.period)+" "+t._s(t.$t("str.days")))])])])]),e("div",{staticClass:"card-ft"},[e("div",{staticClass:"vip-btn-wrap"},[e("van-button",{staticClass:"vip-btn",attrs:{type:"primary",disabled:t.isSubmitting,loading:t.isSubmitting,"loading-text":"Submitting...",block:""},on:{click:t.onSubmitOrder}},[e("div",{staticClass:"flex count-down"},[e("van-icon",{attrs:{name:"underway-o"}}),e("van-count-down",{ref:"countDown",attrs:{millisecond:"",time:t.countDownTime,"auto-start":!1,format:"HH:mm:ss:SS"}})],1),e("p",[t._v(t._s(t.$t("str.immediateWithdrawal")))])])],1),t.userInfo.is_member?e("div",{staticClass:"vip-btn-wrap",staticStyle:{"margin-top":"15px"}},[e("van-button",{attrs:{type:"default",block:""},on:{click:function(i){return t.toHomePage()}}},[t._v(" "+t._s(t.$t("str.chooseOtherLoanProduct"))+" ")])],1):t._e(),e("div",{staticClass:"warn-tips"},[e("div",{staticClass:"tips-hd"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("str.warning"))+": ")]),e("van-icon",{attrs:{name:"warning-o"}})],1),e("div",{staticClass:"tips-bd"},[e("div",{staticClass:"tip-item bottom-line"},[e("p",[t._v("① "+t._s(t.$t("str.warningTips1"))+" "+t._s(t.$t("str.unit"))+t._s(t.auditFee))])]),e("div",{staticClass:"tip-item bottom-line"},[e("p",[t._v("② "+t._s(t.$t("str.warningTips2")))])]),e("div",{staticClass:"tip-item bottom-line"},[e("p",[t._v("③ "+t._s(t.$t("str.warningTips3")))]),e("p",{staticClass:"tip-desc"},[t._v("• "+t._s(t.$t("str.warningTips4")))]),e("p",{staticClass:"tip-desc"},[t._v("• "+t._s(t.$t("str.warningTips5")))]),e("p",{staticClass:"tip-desc"},[t._v("• "+t._s(t.$t("str.warningTips6")))])])])])])])])},a=[],o=(e("a4d3"),e("e01a"),e("fb6a"),e("b0c0"),e("ac1f"),e("5319"),e("841c"),e("f8b7")),c={data:function(){return{cardList:[],card:null,periodList:[{value:7},{value:14},{value:30},{value:60},{value:90},{value:180}],period:7,sold_count:0,countDownTime:54e5,isSubmitting:!1}},computed:{appVersionId:function(){return this.$store.getters.appVersionId},userInfo:function(){return this.$store.getters.info},interest:function(){var t=0;if(this.card){var i=+this.card.description,e=this.period;t=i*e/1e3}return t},auditFee:function(){var t=0;return this.card&&(t=+this.card.price),t},repayment:function(){var t=0;if(this.card){var i=+this.card.description;t=i-+this.card.price}return t}},mounted:function(){this.userInfo.is_member?this.toEndPage():this.getMemberCardList()},methods:{getMemberCardList:function(){var t=this;Object(o["a"])().then((function(i){t.cardList=i.data||[],t.card=t.cardList[0]}))},setLoanItem:function(t){this.card=t,this.setCountdown()},setPeriod:function(t){this.period=t.value},setCountdown:function(){var t=this;this.$refs.countDown.reset(),setTimeout((function(){t.$refs.countDown.start()}),100)},onSubmitOrder:function(){var t=this.card;if(!t)return!1;this.$store.dispatch("product/setProductInfo",t),this.submitOrder(t)},submitOrder:function(t){var i=this;if(!this.userInfo.name)return this.toInfoPage(),!1;var e=location.href.slice(0,location.href.search("#"))+"#/step03",s={return_url:e,member_card_id:t.id};if(this.isSubmitting)return!1;this.isSubmitting=!0;try{Adjust.trackEvent(clickPayEvent)}catch(n){}Object(o["f"])(s).then((function(t){var e=t.data;e&&(i.$store.dispatch("product/setOrderInfo",e),location.href=e.payment_link)})).catch((function(){i.isSubmitting=!1}))},toStep03Page:function(){this.$router.push({name:"step03"})},toHomePage:function(){this.$router.push({name:"home"})},toInfoPage:function(){this.$router.push({name:"info"})},toEndPage:function(){this.$router.replace({name:"end"})}}},u=c,d=(e("47b3"),e("2877")),l=Object(d["a"])(u,r,a,!1,null,"1a08c997",null),f=l.exports,v={components:{productSwiper:f},data:function(){return{}},mounted:function(){this.$store.dispatch("user/getInfo")},computed:{isShowHeader:function(){var t=this.$route,i=t.meta;return i.showHeader}},methods:{onClickLeft:function(){this.$router.go(-1)}}},p=v,m=(e("0397"),Object(d["a"])(p,s,n,!1,null,null,null));i["default"]=m.exports},e01a:function(t,i,e){"use strict";var s=e("23e7"),n=e("83ab"),r=e("da84"),a=e("5135"),o=e("861d"),c=e("9bf2").f,u=e("e893"),d=r.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),i=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(l[i]=!0),i};u(f,d);var v=f.prototype=d.prototype;v.constructor=f;var p=v.toString,m="Symbol(test)"==String(d("test")),h=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,i=p.call(t);if(a(l,t))return"";var e=m?i.slice(7,-1):i.replace(h,"$1");return""===e?void 0:e}}),s({global:!0,forced:!0},{Symbol:f})}},ef9a:function(t,i,e){},f8b7:function(t,i,e){"use strict";e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return r})),e.d(i,"e",(function(){return a})),e.d(i,"f",(function(){return o})),e.d(i,"c",(function(){return c})),e.d(i,"d",(function(){return u}));var s=e("b775");function n(){return Object(s["a"])({url:"/member/cards",method:"get"})}function r(){return Object(s["a"])({url:"/payment/channels",method:"get"})}function a(t){return Object(s["a"])({url:"/member/orders",method:"post",data:t})}function o(t){return Object(s["a"])({url:"/member/orders/razorpay",method:"post",data:t})}function c(t){return Object(s["a"])({url:"/orders/".concat(t.order_id,"/mpurse"),method:"post",data:t})}function u(t){return Object(s["a"])({url:"/payment/razorpay/return",method:"get",params:{order_id:t}})}},fb6a:function(t,i,e){"use strict";var s=e("23e7"),n=e("861d"),r=e("e8b5"),a=e("23cb"),o=e("50c4"),c=e("fc6a"),u=e("8418"),d=e("b622"),l=e("1dde"),f=e("ae40"),v=l("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),h=[].slice,b=Math.max;s({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,i){var e,s,d,l=c(this),f=o(l.length),v=a(t,f),p=a(void 0===i?f:i,f);if(r(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?n(e)&&(e=e[m],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return h.call(l,v,p);for(s=new(void 0===e?Array:e)(b(p-v,0)),d=0;v<p;v++,d++)v in l&&u(s,d,l[v]);return s.length=d,s}})}}]);
//# sourceMappingURL=chunk-5739c143.a6ace468.js.map