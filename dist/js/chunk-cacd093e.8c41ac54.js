(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cacd093e"],{4609:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"default-page home-page"},[t.isShowHeader?i("header",[i("van-nav-bar",{attrs:{title:"Cash Wallet",fixed:"",placeholder:""}})],1):t._e(),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isPullRefresh,callback:function(e){t.isPullRefresh=e},expression:"isPullRefresh"}},[i("section",{staticClass:"home-page-body page-body"},[i("productSwiper"),i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-hd"},[i("div",{staticClass:"heading-item flex"},[i("van-icon",{staticClass:"icon",attrs:{name:"fire"}}),i("div",{staticClass:"heading-item-bd flex-1"},[i("p",{staticClass:"title"},[t._v("Personnal Loan")]),i("p",{staticClass:"desc"},[t._v("Unsecred Loan for persional purpose")])])],1)]),i("div",{staticClass:"panel-bd"},[i("van-skeleton",{attrs:{title:"",loading:t.skeletonLoading,row:3}}),i("div",{staticClass:"product-list"},t._l(t.list,(function(t){return i("productItem",{key:t.id,attrs:{item:t}})})),1)],1)])],1)])],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{ref:"mySwiper",staticClass:"home-swiper",attrs:{options:t.swiperOptions}},[s("swiper-slide",[s("a",{staticClass:"slide-product",attrs:{href:"javascript:;"},on:{click:t.toDetail}},[s("img",{attrs:{src:i("e727")}})])]),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)},r=[],o=(i("c24f"),{name:"carrousel",data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){this.swiper.slideTo(3,1e3,!1)},methods:{toDetail:function(){return!1}}}),c=o,l=i("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null),p=u.exports,d=i("c4c8"),f=i("6f68"),m={components:{productSwiper:p,productItem:f["a"]},data:function(){return{list:[],isPullRefresh:!1,skeletonLoading:!0}},created:function(){this.getHomeProducts()},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{onRefresh:function(){var t=this;this.getHomeProducts().then((function(){t.isPullRefresh=!1}))},getHomeProducts:function(){var t=this;return Object(d["a"])().then((function(e){t.skeletonLoading=!1;var i=e.data;t.list=i.special||[]}))}}},h=m,v=Object(l["a"])(h,s,a,!1,null,null,null);e["default"]=v.exports},"6f68":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-item flex",on:{click:function(e){return t.apply(t.item.id)}}},[i("div",{staticClass:"item-hd"},[i("van-image",{attrs:{src:t.item.product_picture_url_qiniu,width:"2.2rem",height:"2.2rem","lazy-load":""},scopedSlots:t._u([{key:"loading",fn:function(){return[i("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[i("van-icon",{attrs:{name:"photo-o"}})]},proxy:!0}])})],1),i("div",{staticClass:"item-bd flex-1"},[i("p",{staticClass:"title"},[t._v(t._s(t.item.product_name))]),i("p",{staticClass:"desc"},[t._v("Max Amount(अधिकतम राशि): "+t._s(t.item.amount_high))]),i("p",{staticClass:"desc"},[t._v("Tenure(कार्यकाल): "+t._s(t.item.divide_period_min+"-"+t.item.divide_period_max)+" Months(महीने)")]),i("p",{staticClass:"desc"},[t._v("Interest(ब्याज): "+t._s(t.item.daily_rate)+" / Daily(दिन)")]),i("p",{staticClass:"desc"},[t._v("Fee(शुल्क): "+t._s(t.item.pro_fee||0))])]),i("div",{staticClass:"item-ft"},[i("van-button",{staticClass:"vip-btn",attrs:{size:"small",type:"primary"}},[t._v("Apply(आवेदन)")])],1)])},a=[],n=i("c24f"),r={props:{item:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{apply:function(t){var e=this.$store.getters.phoneNumber;e&&Object(n["h"])({operation_type:"2",product_id:t,extra_id:t,phone_number:e}).catch((function(t){})),this.toDetailPage(t)},toDetailPage:function(t){this.$router.push({name:"detail",params:{id:t}})}}},o=r,c=i("2877"),l=Object(c["a"])(o,s,a,!1,null,null,null);e["a"]=l.exports},c4c8:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return r}));var s=i("b775");function a(t){return Object(s["a"])({url:"/home/current",method:"get",params:{page:t}})}function n(t){return Object(s["a"])({url:"/products/current",method:"get",params:{page:t}})}function r(t){return Object(s["a"])({url:"/product/"+t,method:"get"})}},e727:function(t,e,i){t.exports=i.p+"img/swiper.1805b74f.jpg"}}]);
//# sourceMappingURL=chunk-cacd093e.8c41ac54.js.map