(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bf2801f"],{"0397":function(t,e,i){"use strict";var r=i("919f"),n=i.n(r);n.a},1148:function(t,e,i){"use strict";var r=i("a691"),n=i("1d80");t.exports="".repeat||function(t){var e=String(n(this)),i="",s=r(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1868:function(t,e,i){},"1ddef":function(t,e,i){"use strict";var r=i("1868"),n=i.n(r);n.a},"408a":function(t,e,i){var r=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"841c":function(t,e,i){"use strict";var r=i("d784"),n=i("825a"),s=i("1d80"),a=i("129f"),o=i("14c3");r("search",1,(function(t,e,i){return[function(e){var i=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i):new RegExp(e)[t](String(i))},function(t){var r=i(e,t,this);if(r.done)return r.value;var s=n(t),c=String(this),u=s.lastIndex;a(u,0)||(s.lastIndex=0);var d=o(s,c);return a(s.lastIndex,u)||(s.lastIndex=u),null===d?-1:d.index}]}))},"919f":function(t,e,i){},b680:function(t,e,i){"use strict";var r=i("23e7"),n=i("a691"),s=i("408a"),a=i("1148"),o=i("d039"),c=1..toFixed,u=Math.floor,d=function(t,e,i){return 0===e?i:e%2===1?d(t,e-1,i*t):d(t*t,e/2,i)},l=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));r({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,i,r,o,c=s(this),f=n(t),p=[0,0,0,0,0,0],h="",v="0",m=function(t,e){var i=-1,r=e;while(++i<6)r+=t*p[i],p[i]=r%1e7,r=u(r/1e7)},b=function(t){var e=6,i=0;while(--e>=0)i+=p[e],p[e]=u(i/t),i=i%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var i=String(p[t]);e=""===e?i:e+a.call("0",7-i.length)+i}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=l(c*d(2,69,1))-69,i=e<0?c*d(2,-e,1):c/d(2,e,1),i*=4503599627370496,e=52-e,e>0){m(0,i),r=f;while(r>=7)m(1e7,0),r-=7;m(d(10,r,1),0),r=e-1;while(r>=23)b(1<<23),r-=23;b(1<<r),m(1,1),b(2),v=g()}else m(0,i),m(1<<-e,0),v=g()+a.call("0",f);return f>0?(o=v.length,v=h+(o<=f?"0."+a.call("0",f-o)+v:v.slice(0,o-f)+"."+v.slice(o-f))):v=h+v,v}})},d251:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vip-page page"},[t.isShowHeader?i("header",[i("van-nav-bar",{attrs:{title:"",fixed:"",placeholder:""}})],1):t._e(),i("section",{staticClass:"home-page-bdoy"},[i("productSwiper")],1)])},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("swiper",{ref:"productSwiper",staticClass:"product-swiper",attrs:{options:t.swiperOptions}},t._l(t.cardList,(function(e,r){return i("swiper-slide",{key:e.id},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-hd"},[i("p",{staticClass:"tips-title"},[t._v(t._s(t.$t("str.congratulations"))+" ")]),i("p",{staticClass:"tips-desc"},[t._v(t._s(t.$t("str.youPassedTheAudit"))+" ")]),i("div",{staticClass:"heading"},[i("p",[t._v(t._s(t.$t("str.loanAmount")))]),i("h1",{staticClass:"title"},[t._v(t._s(t.$t("str.unit")+e.description))])])]),i("div",{staticClass:"card-bd"},[i("div",{staticClass:"product-info"},[i("div",{staticClass:"desc small flex"},[i("div",{staticClass:"flex-1 text-left"},[t._v(t._s(t.$t("str.interest")))]),i("div",{staticClass:"bold"},[t._v(t._s(t.$t("str.unit"))+"45")])]),i("div",{staticClass:"desc small flex"},[i("div",{staticClass:"flex-1 text-left"},[t._v(" "+t._s(t.$t("str.repaymentAmount"))+"("),i("span",{staticClass:"small red"},[t._v("-"+t._s(parseInt(e.price)))]),t._v(") ")]),i("div",{staticClass:"bold"},[t._v(t._s(t.$t("str.unit"))+t._s(parseInt(parseInt(e.description)-parseInt(e.price))))])]),i("div",{staticClass:"desc small top-line flex"},[i("div",{staticClass:"flex-1 text-left"},[t._v(t._s(t.$t("str.loanTerm")))]),i("div",{staticClass:"bold"},[t._v("60"+t._s(t.$t("str.days")))])])])]),i("div",{staticClass:"card-ft"},[i("div",{staticClass:"warn-tips"},[i("div",{staticClass:"tips-hd"},[i("span",{staticClass:"title"},[t._v(t._s(t.$t("str.warning"))+": ")]),i("van-icon",{attrs:{name:"warning-o"}})],1),i("div",{staticClass:"tips-bd"},[i("div",{staticClass:"tip-item bottom-line"},[i("p",[t._v("① "+t._s(t.$t("str.theAuditFee"))+" "+t._s(t.$t("str.unit"))+t._s(parseInt(e.price)))])]),i("div",{staticClass:"tip-item"},[i("p",[t._v("② "+t._s(t.$t("str.theLimitIs")))])]),i("div",{staticClass:"tip-item bottom-line"},[t._v("theYouNeedToPay "),i("p",[t._v("③ "+t._s(t.$t("str.theYouNeedToPay1")+t.$t("str.unit")+parseInt(e.price)+t.$t("str.theYouNeedToPay2")))])])])]),i("div",{staticClass:"vip-btn-wrap"},[i("van-button",{staticClass:"vip-btn",attrs:{type:"primary",color:"#ff9933",disabled:t.isSubmitting,loading:t.isSubmitting,"loading-text":t.$t("str.submitting"),block:""},on:{click:function(i){return t.selectCurrentItem(e)}}},[t._v(t._s(t.$t("str.immediateWithdrawal")))])],1),t.userInfo.is_member?i("div",{staticClass:"vip-btn-wrap",staticStyle:{"margin-top":"15px"}},[i("van-button",{attrs:{type:"default",block:""},on:{click:function(e){return t.toHomePage()}}},[t._v(t._s(t.$t("str.chooseOtherLoanProduct")))])],1):t._e()])])])})),1)],1)},a=[],o=(i("fb6a"),i("b0c0"),i("b680"),i("ac1f"),i("5319"),i("841c"),i("96cf"),i("1da1")),c=i("f8b7"),u={name:"carrousel",data:function(){var t=this;return{cardList:[],sold_count:0,activeItemIndex:1,isSubmitting:!1,swiperOptions:{slidesPerView:"auto",watchSlidesProgress:!0,centeredSlides:!0,init:!1,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){var r=t.cardList[e].title;return'<span class="'+i+'">'+r+"</span>"}},on:{progress:function(t){for(var e=0;e<this.slides.length;e++){var i=this.slides[e],r=i.progress,n=(Math.min(Math.abs(.2*r),1),i.style);n.opacity=1-Math.min(Math.abs(r/2),1),n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform="translate3d(0px,0,"+-Math.abs(150*r)+"px)"}},slideChange:function(){for(var e=0;e<this.slides.length;e++){var i=this.slides[e].style;i.webkitTransitionDuration=i.MsTransitionDuration=i.msTransitionDuration=i.MozTransitionDuration=i.OTransitionDuration=i.transitionDuration="0ms"}var r=this.activeIndex,n=t.cardList[r].sold_count;t.startNumAnimation(n)}}}}},computed:{swiper:function(){return this.$refs.productSwiper.$swiper},appVersionId:function(){return this.$store.getters.appVersionId},userInfo:function(){return this.$store.getters.info}},mounted:function(){this.getMemberCardList()},methods:{getMemberCardList:function(){var t=this;Object(c["a"])().then((function(e){t.cardList=e.data||[],t.initSwiper()}))},initSwiper:function(){var t=this;this.$nextTick(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.swiper.init();case 2:return e.next=4,t.swiper.slideTo(t.activeItemIndex);case 4:case"end":return e.stop()}}),e)}))))},tweenUpdate:function(){requestAnimationFrame(this.tweenUpdate),this.$tweener.update()},startNumAnimation:function(t){var e=this;this.$tween.fade(this,{sold_count:t},600,0,"",(function(){e.sold_count=(e.sold_count||0).toFixed()}))},selectCurrentItem:function(t){this.$store.dispatch("product/setProductInfo",t),this.submitOrder(t)},submitOrder:function(t){var e=this;if(!this.userInfo.name)return this.toInfoPage(),!1;var i=location.href.slice(0,location.href.search("#"))+"#/step03",r={return_url:i,member_card_id:t.id};if(this.isSubmitting)return!1;this.isSubmitting=!0;try{Adjust.trackEvent(clickPayEvent)}catch(n){}Object(c["f"])(r).then((function(t){var i=t.data;if(e.isSubmitting=!1,i){e.$store.dispatch("product/setOrderInfo",i);var r=i.payment_link;document.write(r)}})).catch((function(){e.isSubmitting=!1}))},toStep03Page:function(){this.$router.push({name:"step03"})},toHomePage:function(){this.$router.push({name:"home"})},toInfoPage:function(){this.$router.push({name:"info"})},toEndPage:function(){this.$router.replace({name:"end"})}}},d=u,l=(i("1ddef"),i("2877")),f=Object(l["a"])(d,s,a,!1,null,"0f36e996",null),p=f.exports,h={components:{productSwiper:p},data:function(){return{}},mounted:function(){this.$store.dispatch("user/getInfo")},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{onClickLeft:function(){this.$router.go(-1)}}},v=h,m=(i("0397"),Object(l["a"])(v,r,n,!1,null,null,null));e["default"]=m.exports},f8b7:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"e",(function(){return a})),i.d(e,"f",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return u}));var r=i("b775");function n(){return Object(r["a"])({url:"/member/cards",method:"get"})}function s(){return Object(r["a"])({url:"/payment/channels",method:"get"})}function a(t){return Object(r["a"])({url:"/member/orders",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/member/orders/oddPay",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/orders/".concat(t.order_id,"/mpurse"),method:"post",data:t})}function u(t){return Object(r["a"])({url:"/payment/oddPay/return",method:"get",params:{order_id:t}})}},fb6a:function(t,e,i){"use strict";var r=i("23e7"),n=i("861d"),s=i("e8b5"),a=i("23cb"),o=i("50c4"),c=i("fc6a"),u=i("8418"),d=i("b622"),l=i("1dde"),f=i("ae40"),p=l("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),m=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var i,r,d,l=c(this),f=o(l.length),p=a(t,f),h=a(void 0===e?f:e,f);if(s(l)&&(i=l.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?n(i)&&(i=i[v],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return m.call(l,p,h);for(r=new(void 0===i?Array:i)(b(h-p,0)),d=0;p<h;p++,d++)p in l&&u(r,d,l[p]);return r.length=d,r}})}}]);
//# sourceMappingURL=chunk-5bf2801f.d7c9c6f9.js.map