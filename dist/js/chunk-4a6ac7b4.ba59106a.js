(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a6ac7b4"],{"6f68":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-item flex",on:{click:function(e){return t.apply(t.item.id)}}},[n("div",{staticClass:"item-hd"},[n("van-image",{attrs:{src:t.item.product_picture_url_qiniu,width:"2.2rem",height:"2.2rem","lazy-load":""},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[n("van-icon",{attrs:{name:"photo-o"}})]},proxy:!0}])})],1),n("div",{staticClass:"item-bd flex-1"},[n("p",{staticClass:"title"},[t._v(t._s(t.item.product_name))]),n("p",{staticClass:"desc"},[t._v("Max Amount: "+t._s(t.item.amount_high))]),n("p",{staticClass:"desc"},[t._v("Tenure: "+t._s(t.item.divide_period_min+"-"+t.item.divide_period_max)+" Months")]),n("p",{staticClass:"desc"},[t._v("Interest: "+t._s(t.item.daily_rate)+" / Daily")]),n("p",{staticClass:"desc"},[t._v("Pro.Fee: "+t._s(t.item.pro_fee||0))])]),n("div",{staticClass:"item-ft"},[n("van-button",{staticClass:"vip-btn",attrs:{size:"small",type:"primary"}},[t._v("Apply")])],1)])},a=[],s=n("c24f"),r={props:{item:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{apply:function(t){var e=this.$store.getters.phoneNumber;e&&Object(s["h"])({operation_type:"2",product_id:t,extra_id:t,phone_number:e}).catch((function(t){})),this.toDetailPage(t)},toDetailPage:function(t){this.$router.push({name:"detail",params:{id:t}})}}},o=r,c=n("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},8808:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"default-page loan-all-page"},[t.isShowHeader?n("header",[n("van-nav-bar",{attrs:{fixed:"",placeholder:""}})],1):t._e(),n("section",{staticClass:"page-body"},[n("productList")],1)])},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("van-skeleton",{attrs:{title:"",loading:t.skeletonLoading,row:3}}),n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isPullRefresh,callback:function(e){t.isPullRefresh=e},expression:"isPullRefresh"}},[n("van-list",{staticClass:"product-list",attrs:{finished:t.finished,"finished-text":"No more."},on:{load:t.getProducts},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return n("productItem",{key:t.id,attrs:{item:t}})})),1)],1)],1)},r=[],o=n("c4c8"),c=n("6f68"),l={components:{productItem:c["a"]},data:function(){return{isPullRefresh:!1,list:[],skeletonLoading:!0,loading:!1,finished:!1,page:1}},created:function(){},computed:{},methods:{onRefresh:function(){var t=this;this.page=1,this.getProducts().then((function(){t.isPullRefresh=!1}))},getProducts:function(){var t=this;return Object(o["c"])(this.page).then((function(e){var n=e.data||[];t.page++;var i=e.meta.pagination;t.list=n,t.loading=!1,t.skeletonLoading=!1,t.list.length>=i.total&&(t.finished=!0)}))}}},u=l,d=n("2877"),p=Object(d["a"])(u,s,r,!1,null,null,null),f=p.exports,h={components:{productList:f},data:function(){return{}},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}}},m=h,v=Object(d["a"])(m,i,a,!1,null,null,null);e["default"]=v.exports},c4c8:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return r}));var i=n("b775");function a(t){return Object(i["a"])({url:"/home",method:"get",params:{page:t}})}function s(t){return Object(i["a"])({url:"/products",method:"get",params:{page:t}})}function r(t){return Object(i["a"])({url:"/product/"+t,method:"get"})}}}]);
//# sourceMappingURL=chunk-4a6ac7b4.ba59106a.js.map