(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e536"],{d4a1:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-page default-page"},[t.isShowHeader?o("header",[o("van-nav-bar",{attrs:{title:t.$t("str.signIn"),fixed:"",placeholder:""}})],1):t._e(),o("section",{staticClass:"login-page-body"},[o("h2",{staticClass:"vip-doc-block__title"},[t._v(t._s(t.$t("str.welcome")))]),o("div",{ref:"login_form"},[o("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:t.countryCodeText,label:t.$t("str.country"),placeholder:t.$t("str.countryPlaceholder"),"right-icon":"arrow"},on:{click:function(e){t.showPicker=!0}}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[o("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{confirm:t.onConfirm,cancel:function(e){t.showPicker=!1}}})],1),o("van-field",{attrs:{name:"telephone",type:"tel",label:t.$t("str.telephone"),placeholder:t.$t("str.telephonePlaceholder")},model:{value:t.telephone,callback:function(e){t.telephone=e},expression:"telephone"}}),o("van-field",{attrs:{name:"checkbox"},scopedSlots:t._u([{key:"input",fn:function(){return[o("van-checkbox",{attrs:{"checked-color":"#07c160"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}},[t._v(" "+t._s(t.$t("str.loginTips1"))),o("span",{staticClass:"red",on:{click:function(e){return e.stopPropagation(),t.toTermsPage(e)}}},[t._v(t._s(t.$t("str.loginTips2")))])])]},proxy:!0}])}),o("div",{staticClass:"vip-btn-wrap"},[o("van-button",{staticClass:"vip-btn",attrs:{type:"primary",block:""},on:{click:t.onSubmit}},[t._v(t._s(t.$t("str.loginBtn1")))])],1)],1)])])},c=[],i=(o("4160"),o("b0c0"),o("159b"),o("c24f")),s=(o("83d6"),{data:function(){return{countryCodeText:"India 0091",countryCode:"0091",columns:[],showPicker:!1,telephone:"",code:"",codekey:"",checkbox:!0,isGetting:!1,gettingText:"",count:60,COUNT_DEFAULT:60,isSubmitting:!1}},created:function(){var t=this;Object(i["a"])().then((function(e){var o=e.data||[];o.sort((function(t,e){return t.is_hot<e.is_hot?1:t.is_hot>e.is_hot?-1:0})),o.forEach((function(t){t.text=t.name+" "+t.intl_code})),t.columns=o}))},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{onConfirm:function(t){this.countryCode=t.intl_code,this.countryCodeText=t.text,this.showPicker=!1},onSubmit:function(){if(!this.telephone)return this.$toast("Please enter telephone"),!1;this.toCodePage()},toCodePage:function(){this.$router.push({name:"code",params:{telephone:this.telephone,countryCode:this.countryCode}})},toTermsPage:function(){this.$router.push({name:"terms"})}}}),r=s,a=o("2877"),l=Object(a["a"])(r,n,c,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21e536.df560bb4.js.map