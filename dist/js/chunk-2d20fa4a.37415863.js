(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fa4a"],{b501:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"default-page me-page"},[e.isShowHeader?a("header",[a("van-nav-bar",{attrs:{title:"Me",fixed:"",placeholder:""}})],1):e._e(),a("section",{staticClass:"page-body"},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"head-img",attrs:{src:e.userInfo.avatar||"imgs/me/head.png"}})]),e.userInfo.phone_number?a("p",{staticClass:"user-name"},[e._v(e._s(e.userInfo.nickname||e.userInfo.phone_number))]):e._e()]),a("div",{staticClass:"custom-cell-area"},[a("van-cell",{attrs:{title:"Feedback(प्रतिपुष्टि)","is-link":"",to:"/feedback"}}),a("van-cell",{attrs:{title:"Set NickName(निक नाम सेट करें)","is-link":"",to:"/setnickname"}}),a("van-cell",{attrs:{title:"Modify Head Portrait(अवतार सेट करें)","is-link":"",to:"/setavatar"}})],1),a("div",{staticClass:"custom-cell-area"},[a("van-cell",{attrs:{title:"Logout(लॉग आउट)","is-link":""},on:{click:e.logout}})],1)])])},n=[],r=(a("96cf"),a("1da1")),i={data:function(){return{}},mounted:function(){},computed:{isShowHeader:function(){var e=this.$route,t=e.meta;return t.showHeader},userInfo:function(){return this.$store.getters.info}},methods:{logout:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login?redirect=".concat(e.$route.fullPath));case 3:case"end":return t.stop()}}),t)})))()}}},o=i,c=a("2877"),u=Object(c["a"])(o,s,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20fa4a.37415863.js.map