(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return s.p+"js/"+({"first-group":"first-group"}[e]||e)+"."+{"chunk-06d2f224":"d79466ee","chunk-26075d15":"d4f79a96","chunk-2d0bce17":"c47d3ebd","chunk-2d21753a":"fb206d9c","chunk-4ca08b5b":"36a1c64a","chunk-76fcc8a1":"41b848fa","chunk-d5c62344":"b6615221","first-group":"dee873e9"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4ca08b5b":1,"chunk-d5c62344":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"first-group":"first-group"}[e]||e)+"."+{"chunk-06d2f224":"31d6cfe0","chunk-26075d15":"31d6cfe0","chunk-2d0bce17":"31d6cfe0","chunk-2d21753a":"31d6cfe0","chunk-4ca08b5b":"c2fdd1ec","chunk-76fcc8a1":"31d6cfe0","chunk-d5c62344":"329b06b8","first-group":"31d6cfe0"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],f=i.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e);var l=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0f9a":function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("c24f"),o=n("5f87"),a=function(){return{token:Object(o["b"])(),phoneNumber:"",tokenType:Object(o["c"])(),info:{},deviceNumber:Object(o["a"])()}},c=a(),u={RESET_STATE:function(e){Object.assign(e,a())},SET_TOKEN:function(e,t){e.token=t},SET_TOKEN_TYPE:function(e,t){e.tokenType=t},SET_PHONE_NUMBER:function(e,t){e.phoneNumber=t},SET_INFO:function(e,t){e.info=t},SET_DEVICE_NUMBER:function(e,t){e.deviceNumber=t}},s={login:function(e,t){var n=e.commit;return new Promise((function(e,a){Object(r["d"])(t).then((function(t){var r=t.data;n("SET_TOKEN",r.access_token),Object(o["g"])(r.access_token),n("SET_TOKEN_TYPE",r.token_type),Object(o["h"])(r.token_type),e()})).catch((function(e){a(e)}))}))},reLogin:function(e){var t=e.commit;return new Promise((function(e,n){Object(r["f"])().then((function(n){var r=n.data;t("SET_TOKEN",r.access_token),Object(o["g"])(r.access_token),t("SET_TOKEN_TYPE",r.token_type),Object(o["h"])(r.token_type),e()})).catch((function(e){n(e)}))}))},setTokenFromURLParam:function(e,t){var n=e.commit;t?(n("SET_TOKEN",t),Object(o["g"])(t)):(t=Object(o["b"])(),n("SET_TOKEN",t))},getInfo:function(e){var t=e.commit;e.state;return new Promise((function(e,n){Object(r["b"])().then((function(r){var o=r.data;o||n("Verification failed, please Login again."),t("SET_INFO",o),t("SET_PHONE_NUMBER",o.phone_number),e(o)})).catch((function(e){n(e)}))}))},setInfo:function(e,t){var n=e.commit;e.state;n("SET_INFO",t)},setDeviceNumber:function(e,t){var n=e.commit;e.state;n("SET_DEVICE_NUMBER",t),Object(o["f"])(t)},logout:function(e){var t=e.commit;e.state,e.dispatch;return new Promise((function(e,n){Object(r["e"])().then((function(){t("SET_TOKEN",""),t("SET_TOKEN_TYPE",""),t("SET_PHONE_NUMBER",""),t("SET_INFO",{}),Object(o["d"])(),Object(o["e"])(),e()})).catch((function(e){n(e)}))}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){t("SET_TOKEN",""),Object(o["d"])(),t("SET_TOKEN_TYPE",""),Object(o["e"])(),e()}))}};t["default"]={namespaced:!0,state:c,mutations:u,actions:s}},"12cb":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return g}));n("c975"),n("b64b"),n("b0d0");var r=n("3c69"),o=n("5530"),a=n("2b0e"),c=n("a925"),u=n("a78e"),s=n.n(u),i={str:{},menu:{home:"Home",language:"Language",logout:"Logout"},btn:{smsCountDown:"{0} obtain"},errorCode:{}},f=n("91f4"),l=n.n(f),d={str:{},menu:{home:"主页",language:"语言",logout:"退出"},btn:{},errorCode:{}},p=n("b459"),m=n.n(p);a["default"].use(c["a"]);var h={en:Object(o["a"])({},i,{},l.a),"zh-CN":Object(o["a"])({},d,{},m.a)};function b(){var e=s.a.get("language");if(e)return e;for(var t=(navigator.language||navigator.browserLanguage).toLowerCase(),n=Object.keys(h),r=0,o=n;r<o.length;r++){var a=o[r];if(t.indexOf(a)>-1)return a}return"en"}var v=new c["a"]({locale:b(),messages:h});function g(e){"en"===e?r["a"].use(e,l.a):"zh-CN"===e&&r["a"].use(e,m.a)}},"273d":function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return m}));var r="Product-Info",o="Product-Id",a="Payment-Option-Info",c="Order-Info";function u(){return JSON.parse(sessionStorage.getItem(r)||"null")}function s(e){sessionStorage.setItem(r,JSON.stringify(e))}function i(){return JSON.parse(sessionStorage.getItem(o)||"null")}function f(e){sessionStorage.setItem(o,JSON.stringify(e))}function l(){return JSON.parse(sessionStorage.getItem(a)||"null")}function d(e){sessionStorage.setItem(a,JSON.stringify(e))}function p(){return JSON.parse(sessionStorage.getItem(c)||"null")}function m(e){sessionStorage.setItem(c,JSON.stringify(e))}},"41b0":function(e,t,n){"use strict";var r=n("a21f"),o=n.n(r);o.a},4360:function(e,t,n){"use strict";n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0");var r=n("2b0e"),o=n("2f62"),a={token:function(e){return e.user.token},phoneNumber:function(e){return e.user.phoneNumber},deviceNumber:function(e){return e.user.deviceNumber},tokenType:function(e){return e.user.tokenType},info:function(e){return e.user.info},product:function(e){return e.product.productInfo},paymentOption:function(e){return e.product.paymentOptionInfo},order:function(e){return e.product.orderInfo},networkSuccess:function(e){return e.network.success}},c=a;r["default"].use(o["a"]);var u=n("c653"),s=u.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=u(t);return e[n]=r.default,e}),{}),i=new o["a"].Store({modules:s,getters:c});t["a"]=i},"4c2b":function(e,t,n){"use strict";n.r(t);var r={success:!0},o={SET_NETWORK_SUCCESS:function(e,t){e.success=t}},a={changeNetworkSuccess:function(e,t){var n=e.commit;n("SET_NETWORK_SUCCESS",t)}};t["default"]={namespaced:!0,state:r,mutations:o,actions:a}},"56d7":function(e,t,n){"use strict";n.r(t);n("66b9");var r=n("b650"),o=(n("c194"),n("7744")),a=(n("0653"),n("34e9")),c=(n("e17f"),n("2241")),u=(n("e7e5"),n("d399")),s=(n("5246"),n("6b41")),i=(n("7844"),n("5596")),f=(n("4b0a"),n("2bb1")),l=(n("2b28"),n("9ed2")),d=(n("a44c"),n("e27c")),p=(n("4ddd"),n("9f14")),m=(n("be7f"),n("565f")),h=(n("c3a6"),n("ad06")),b=(n("ac1e"),n("543e")),v=(n("414a"),n("7a82")),g=(n("e566"),n("5d26")),k=(n("0209"),n("7d5e")),E=(n("38d5"),n("772a")),O=(n("5f5f"),n("f253")),y=(n("8a58"),n("e41f")),_=(n("537a"),n("ac28")),T=(n("a52c"),n("2ed4")),w=(n("91d5"),n("f0ca")),S=(n("2994"),n("2bdd")),N=(n("e930"),n("8f80")),j=(n("ab71"),n("58e6")),C=(n("480b"),n("a37c")),I=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[e.$route.meta.keepAlive&&e.networkSuccess?n("router-view"):e._e()],1),e.$route.meta.keepAlive&&e.networkSuccess?e._e():n("router-view")],1)},F=[],P={data:function(){return{}},computed:{networkSuccess:function(){return this.$store.getters.networkSuccess}}},A=P,D=(n("034f"),n("2877")),H=Object(D["a"])(A,x,F,!1,null,null,null),L=H.exports,M=n("a18c"),R=n("4360"),U=(n("5cfb"),n("c59a"),n("6861"),n("22b5")),$={install:function(e){e.prototype.$tween=this,e.prototype.$tweener=U["a"]},pause:function(e){e.pause()},fade:function(e,t,n,r,o,a,c){if(e&&t){null==n&&(n=260);var u=new U["a"].Tween(e).to(t,n);return r&&u.delay(r),u.easing(o||U["a"].Easing.Linear.None),a&&u.onUpdate(a),c&&u.onComplete(c),u.start(),u}}},K=n("7212"),z=n.n(K),B=(n("a7a3"),n("5f87"),n("83d6")),J=n.n(B),G=J.a.title||"Cash Wallet";function Y(e){return"".concat(e||G)}M["a"].beforeEach((function(e,t,n){document.title=Y(e.meta.title),e.query&&e.query.device_number&&R["a"].dispatch("user/setDeviceNumber",e.query.device_number),n()})),M["a"].afterEach((function(){}));var q=n("12cb");I["default"].use($),I["default"].use(z.a),I["default"].use(r["a"]).use(o["a"]).use(a["a"]).use(c["a"]).use(u["a"]).use(s["a"]).use(i["a"]).use(f["a"]).use(l["a"]).use(d["a"]).use(p["a"]).use(m["a"]).use(h["a"]).use(b["a"]).use(v["a"]).use(g["a"]).use(k["a"]).use(E["a"]).use(O["a"]).use(y["a"]).use(_["a"]).use(T["a"]).use(w["a"]).use(S["a"]).use(N["a"]).use(j["a"]).use(C["a"]),I["default"].config.productionTip=!1,console.log("当前的语言是：",q["b"].locale),Object(q["c"])(q["b"].locale),new I["default"]({router:M["a"],store:R["a"],i18n:q["b"],render:function(e){return e(L)}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"f",(function(){return h}));var r=n("a78e"),o=n.n(r),a="User-Token",c="User-Token-Type",u="Device-Number-Token";function s(){return o.a.get(a)}function i(e){o.a.set(a,e)}function f(){o.a.remove(a)}function l(){return o.a.get(c)}function d(e){o.a.set(c,e)}function p(){o.a.remove(c)}function m(){return o.a.get(u)}function h(e){o.a.set(u,e)}},6861:function(e,t,n){},"83d6":function(e,t){e.exports={title:"Cash Wallet",device_number:"5566777",platform:"1",app_version_id:"10"}},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-frame"},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view"),e.isShowFooter?n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"home-o"}},[e._v(" Cash Wallet ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/loanall",icon:"apps-o"}},[e._v(" Loan All ")])],1):e._e()],1)},c=[],u={data:function(){return{isShowFooter:!1}},mounted:function(){},methods:{handleTokenFromURLParam:function(){var e=this.$route.query.token||"";this.$store.dispatch("user/setTokenFromURLParam",e)},getUserInfo:function(){this.$store.dispatch("user/getInfo").then((function(e){console.log(e)}))}}},s=u,i=(n("f8ac"),n("2877")),f=Object(i["a"])(s,a,c,!1,null,"4a5bf5fe",null),l=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-page page"},[e.isShowHeader?n("header",[n("van-nav-bar",{attrs:{title:"Network Error",fixed:"","left-arrow":"",placeholder:""},on:{"click-left":e.onClickLeft}})],1):e._e(),e.networkSuccess?e._e():n("div",{staticClass:"refresh text-center"},[n("div",{staticClass:"empty"},[n("div",{staticClass:"empty__image"},[n("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[n("defs",[n("linearGradient",{attrs:{id:"c",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[n("stop",{attrs:{"stop-color":"#FFF",offset:"0%","stop-opacity":"0.5"}}),n("stop",{attrs:{"stop-color":"#F2F3F5",offset:"100%"}})],1),n("linearGradient",{attrs:{id:"d",x1:"64.022%",y1:"96.956%",x2:"64.022%",y2:"0%"}},[n("stop",{attrs:{"stop-color":"#F2F3F5",offset:"0%","stop-opacity":"0.3"}}),n("stop",{attrs:{"stop-color":"#F2F3F5",offset:"100%"}})],1),n("linearGradient",{attrs:{id:"h",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[n("stop",{attrs:{"stop-color":"#EBEDF0",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#DCDEE0",offset:"100%","stop-opacity":"0"}})],1),n("linearGradient",{attrs:{id:"i",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[n("stop",{attrs:{"stop-color":"#EAEDF0",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#DCDEE0",offset:"100%"}})],1),n("linearGradient",{attrs:{id:"k",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[n("stop",{attrs:{"stop-color":"#EAEDF0",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#DCDEE0",offset:"100%"}})],1),n("linearGradient",{attrs:{id:"m",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[n("stop",{attrs:{"stop-color":"#EAEDF0",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#DCDEE0",offset:"100%"}})],1),n("linearGradient",{attrs:{id:"n",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[n("stop",{attrs:{"stop-color":"#EAEDF0",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#DCDEE0",offset:"100%"}})],1),n("radialGradient",{attrs:{id:"g",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[n("stop",{attrs:{"stop-color":"#EBEDF0",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#FFF",offset:"100%","stop-opacity":"0"}})],1)],1),n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{opacity:".8"}},[n("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#c)",transform:"matrix(-1 0 0 1 36 7)"}}),n("path",{attrs:{d:"M40.5 5a8.504 8.504 0 018.13 6.009l.12-.005L49 11a8 8 0 11-1 15.938V27H34v-.174a6.5 6.5 0 11-1.985-12.808A8.5 8.5 0 0140.5 5z",fill:"url(#d)",transform:"translate(2 7)"}}),n("path",{attrs:{d:"M96.016 0a4.108 4.108 0 013.934 2.868l.179-.004c2.138 0 3.871 1.71 3.871 3.818 0 2.109-1.733 3.818-3.871 3.818-.164 0-.325-.01-.484-.03v.03h-6.774v-.083a3.196 3.196 0 01-.726.083C90.408 10.5 89 9.111 89 7.398c0-1.636 1.284-2.976 2.911-3.094a3.555 3.555 0 01-.008-.247c0-2.24 1.842-4.057 4.113-4.057z",fill:"url(#d)",transform:"translate(2 7)"}}),n("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#c)",transform:"translate(2 7)"}})]),n("path",{attrs:{fill:"url(#g)",d:"M0 139h160v21H0z"}}),n("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#h)","fill-rule":"nonzero",transform:"translate(43 36)"}}),n("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[n("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#i)",transform:"translate(43 36)"}}),n("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#i)",transform:"translate(43 36)"}}),n("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#k)",transform:"rotate(-180 76.483 42.257)"}}),n("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#k)",transform:"rotate(-180 89.791 42.146)"}})]),n("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[n("rect",{attrs:{fill:"url(#m)",width:"98",height:"34",rx:"2"}}),n("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),n("rect",{attrs:{fill:"url(#n)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])]),n("p",{staticClass:"empty__description"},[e._v("Network Error")])]),n("van-button",{staticClass:"bottom-button",attrs:{round:"",block:"",type:"danger"},on:{click:e.onRefresh}},[e._v(" refresh ")])],1)])},p=[],m={name:"refresh-page",data:function(){return{}},computed:{isShowHeader:function(){var e=this.$route,t=e.meta;return t.showHeader},networkSuccess:function(){return this.$store.getters.networkSuccess}},methods:{onClickLeft:function(){this.$router.go(-1)},onRefresh:function(){this.$router.go(-1)}}},h=m,b=(n("41b0"),Object(i["a"])(h,d,p,!1,null,"006cb359",null)),v=b.exports;r["default"].use(o["a"]);var g=[{path:"/",component:l,redirect:"/home",children:[{path:"/home",name:"home",meta:{title:"Home",showHeader:!1,keepAlive:!0},component:function(){return n.e("first-group").then(n.bind(null,"4609"))}},{path:"/loanall",name:"loanall",meta:{title:"Loan All",showHeader:!1,keepAlive:!0},component:function(){return n.e("first-group").then(n.bind(null,"8808"))}},{path:"/me",name:"me",meta:{title:"Me",showHeader:!1,keepAlive:!0},component:function(){return n.e("chunk-26075d15").then(n.bind(null,"b501"))}}]},{path:"/detail",name:"detail",meta:{title:"Detail",showHeader:!1,keepAlive:!1},component:function(){return n.e("chunk-4ca08b5b").then(n.bind(null,"3a20"))}},{path:"/login",name:"login",meta:{title:"Sign in",showHeader:!1,keepAlive:!0},component:function(){return n.e("chunk-06d2f224").then(n.bind(null,"d4a1"))}},{path:"/feedback",name:"feedback",meta:{title:"Feedback",showHeader:!1,keepAlive:!0},component:function(){return n.e("chunk-2d21753a").then(n.bind(null,"c5f8"))}},{path:"/setnickname",name:"setnickname",meta:{title:"Set Nickname",showHeader:!1,keepAlive:!0},component:function(){return n.e("chunk-2d0bce17").then(n.bind(null,"2a2d"))}},{path:"/setavatar",name:"setavatar",meta:{title:"Modify Head Portrait",showHeader:!1,keepAlive:!0},component:function(){return n.e("chunk-76fcc8a1").then(n.bind(null,"b0c02"))}},{path:"/refresh",name:"refresh",meta:{title:"Refresh",showHeader:!1,keepAlive:!0},component:v},{path:"/policy",name:"policy",meta:{title:"Privacy policy",showHeader:!0,keepAlive:!0},component:function(){return n.e("chunk-d5c62344").then(n.bind(null,"1c24"))}}],k=function(){return new o["a"]({scrollBehavior:function(){return{y:0}},routes:g})},E=k();t["a"]=E},a21f:function(e,t,n){},c24f:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return k})),n.d(t,"e",(function(){return E}));n("d3b7"),n("e17f");var r=n("2241"),o=(n("e7e5"),n("d399")),a=n("bc3a"),c=n.n(a),u=n("4360"),s=n("a18c"),i=n("5f87"),f=n("12cb"),l=c.a.create({baseURL:"http://idc.wonderloan.top/api",timeout:5e3});l.interceptors.request.use((function(e){return u["a"].getters.token&&(e.params||(e.params={}),e.params["token"]=Object(i["b"])(),e.headers["Authorization"]=Object(i["c"])()+" "+Object(i["b"])()),e.headers["Accept-Language"]=Object(f["a"])(),e}),(function(e){return console.log(e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;u["a"].dispatch("network/changeNetworkSuccess",!0);t.data;var n=t.meta;return n&&"success"!==n.message?(Object(o["a"])({message:n.message||"Server ist falsch",type:"fail",position:"bottom",duration:3e3}),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){var t=e.response;return t&&200!==t.status?401===e.response.status?r["a"].confirm({title:"Confirm logout",message:"You have been logged out, you can cancel to stay on this page, or log in again",confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){u["a"].dispatch("user/resetToken").then((function(){location.reload()}))})):Object(o["a"])({message:t.data.message,type:"fail",position:"bottom",duration:3e3}):u["a"].dispatch("network/changeNetworkSuccess",!1).then((function(){s["a"].push({path:"refresh"})})),Promise.reject(e)}));var d=l;function p(){return d({url:"/countryCodes",method:"get"})}function m(e){return d({url:"/verificationCodes",method:"post",data:e})}function h(e){return d({url:"/verificationCodes/authorizations",method:"post",data:e})}function b(){return d({url:"/user",method:"get"})}function v(e){return d({url:"/user",method:"patch",data:e})}function g(e){return d({url:"/images",method:"post",data:e,headers:{"Content-Type":"application/form-data"}})}function k(){return d({url:"/authorizations/current",method:"put"})}function E(){return d({url:"/authorizations/current",method:"delete"})}},c2ff:function(e,t,n){"use strict";n.r(t);var r=n("273d"),o={productInfo:Object(r["d"])(),paymentOptionInfo:Object(r["b"])(),orderInfo:Object(r["a"])()},a={SET_PRODUCT_INFO:function(e,t){e.productInfo=t},SET_PAYMENT_OPTION_INFO:function(e,t){e.paymentOptionInfo=t},SET_ORDER_INFO:function(e,t){e.orderInfo=t}},c={setProductInfo:function(e,t){var n=e.commit;n("SET_PRODUCT_INFO",t),Object(r["h"])(t)},setPaymentOptionInfo:function(e,t){var n=e.commit;n("SET_PAYMENT_OPTION_INFO",t),Object(r["f"])(t)},setOrderInfo:function(e,t){var n=e.commit;n("SET_ORDER_INFO",t),Object(r["e"])(t)}};t["default"]={namespaced:!0,state:o,mutations:a,actions:c}},c653:function(e,t,n){var r={"./network.js":"4c2b","./product.js":"c2ff","./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},d4f2:function(e,t,n){},f8ac:function(e,t,n){"use strict";var r=n("d4f2"),o=n.n(r);o.a}});
//# sourceMappingURL=app.c5b22bab.js.map