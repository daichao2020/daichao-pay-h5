(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c86c6b30"],{"08fc":function(t,e,o){},"7e77":function(t,e,o){"use strict";var i=o("08fc"),n=o.n(i);n.a},f3b7:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-page default-page"},[t.isShowHeader?o("header",[o("van-nav-bar",{attrs:{title:t.$t("str.signIn"),fixed:"",placeholder:""}})],1):t._e(),o("section",{staticClass:"login-page-body"},[o("h2",{staticClass:"vip-doc-block__title"},[t._v(t._s(t.$t("str.codeTips1")))]),o("h2",{staticClass:"vip-doc-block__desc"},[t._v(t._s(t.$t("str.codeTips2"))+" "+t._s(t.telephone))]),o("div",{ref:"code_form"},[o("van-password-input",{attrs:{length:t.CODE_LENGTH,value:t.code,mask:!1,focused:t.showKeyboard},on:{focus:function(e){t.showKeyboard=!0}}}),o("div",{staticClass:"text-center sms-count-down"},[t.isGetting?[t._v(" "+t._s(t.$t("btn.smsCountDown",[t.count]))+" ")]:[o("van-button",{staticClass:"vip-btn",attrs:{size:"small",type:"default"},on:{click:t.getCode}},[t._v(t._s(t.$t("str.loginBtn2")))])]],2),o("van-number-keyboard",{attrs:{show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1)])])},n=[],s=(o("fb6a"),o("b0c0"),o("ac1f"),o("5319"),o("c24f")),c=(o("83d6"),{data:function(){return{showPicker:!1,telephone:this.$route.params.telephone,countryCode:this.$route.params.countryCode,code:"",codekey:"",isGetting:!1,gettingText:"",count:60,COUNT_DEFAULT:60,CODE_LENGTH:4,showKeyboard:!0,isSubmitting:!1}},created:function(){this.getCode()},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{getCode:function(){var t=this;if(!this.telephone)return this.$toast(this.$t("str.telephonePlaceholder")),!1;if(this.isGetting)return!1;this.isGetting=!0;var e=function e(){t.count--,t.count>0?setTimeout(e,1e3):(t.isGetting=!1,t.count=t.COUNT_DEFAULT)};e(),this.code="",this.codekey="",Object(s["b"])({intl_code:this.countryCode,phone_number:this.telephone}).then((function(e){t.codekey=e.data.key})).catch((function(e){t.isGetting=!1,t.count=t.COUNT_DEFAULT}))},onInput:function(t){this.code=(this.code+t).slice(0,this.CODE_LENGTH),this.code.length===this.CODE_LENGTH&&this.onSubmit()},onDelete:function(){this.code=this.code.slice(0,this.code.length-1)},onSubmit:function(){var t=this;if(!this.code)return this.$toast(this.$t("str.codeTips3")),!1;var e=this.$toast.loading({duration:1e4,message:this.$t("str.loading")+"...",forbidClick:!0});this.isSubmitting=!0,this.$store.dispatch("user/login",{verification_key:this.codekey,verification_code:this.code,device_number:this.$store.getters.deviceNumber,platform:this.$store.getters.platform,app_version_id:this.$store.getters.appVersionId}).then((function(o){var i=o.data;e.clear(),t.isSubmitting=!1,i&&t.toNextPage()})).catch((function(){setTimeout((function(){e.clear()}),3e3),t.isSubmitting=!1}))},toNextPage:function(){var t=this;this.$store.dispatch("user/getInfo").then((function(e){e.name,e.is_member;t.toHomePage()}))},toEndPage:function(){this.$router.push({name:"end"})},toInfoPage:function(){this.$router.push({name:"info"})},toVipPage:function(){this.$router.replace({name:"vip"})},toHomePage:function(){this.$router.replace({name:"home"})}}}),r=c,a=(o("7e77"),o("2877")),u=Object(a["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports},fb6a:function(t,e,o){"use strict";var i=o("23e7"),n=o("861d"),s=o("e8b5"),c=o("23cb"),r=o("50c4"),a=o("fc6a"),u=o("8418"),h=o("b622"),d=o("1dde"),l=o("ae40"),f=d("slice"),p=l("slice",{ACCESSORS:!0,0:0,1:2}),g=h("species"),b=[].slice,v=Math.max;i({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var o,i,h,d=a(this),l=r(d.length),f=c(t,l),p=c(void 0===e?l:e,l);if(s(d)&&(o=d.constructor,"function"!=typeof o||o!==Array&&!s(o.prototype)?n(o)&&(o=o[g],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return b.call(d,f,p);for(i=new(void 0===o?Array:o)(v(p-f,0)),h=0;f<p;f++,h++)f in d&&u(i,h,d[f]);return i.length=h,i}})}}]);
//# sourceMappingURL=chunk-c86c6b30.deb5fe41.js.map