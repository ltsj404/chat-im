(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-main"],{"0aeb":function(i,e,t){"use strict";t.r(e);var n=t("48db"),a=t("8719");for(var o in a)"default"!==o&&function(i){t.d(e,i,(function(){return a[i]}))}(o);t("ffe5");var u,c=t("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"03bcfb00",null,!1,n["a"],u);e["default"]=l.exports},"31e1":function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t("2f62"),a={computed:(0,n.mapState)(["forcedLogin","hasLogin","userName"]),onLoad:function(){var i=this;this.hasLogin||uni.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(e){e.confirm&&(i.forcedLogin?uni.reLaunch({url:"../login/login"}):uni.navigateTo({url:"../login/login"}))}})}};e.default=a},"48db":function(i,e,t){"use strict";var n,a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"content"},[i.hasLogin?t("v-uni-view",{staticClass:"hello"},[t("v-uni-view",{staticClass:"title"},[i._v("您好 "+i._s(i.userName)+"，您已成功登录。")]),t("v-uni-view",{staticClass:"ul"},[t("v-uni-view",[i._v("这是 uni-app 带登录模板的示例App首页。")]),t("v-uni-view",[i._v("在 “我的” 中点击 “退出” 可以 “注销当前账户”")])],1)],1):i._e(),i.hasLogin?i._e():t("v-uni-view",{staticClass:"hello"},[t("v-uni-view",{staticClass:"title"},[i._v("您好 游客。")]),t("v-uni-view",{staticClass:"ul"},[t("v-uni-view",[i._v("这是 uni-app 带登录模板的示例App首页。")]),t("v-uni-view",[i._v("在 “我的” 中点击 “登录” 可以 “登录您的账户”")])],1)],1)],1)},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n}))},"7b9c":function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,".hello[data-v-03bcfb00]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.title[data-v-03bcfb00]{color:#8f8f94;margin-top:%?50?%}.ul[data-v-03bcfb00]{font-size:%?30?%;color:#8f8f94;margin-top:%?50?%}.ul>uni-view[data-v-03bcfb00]{line-height:%?50?%}",""]),i.exports=e},8719:function(i,e,t){"use strict";t.r(e);var n=t("31e1"),a=t.n(n);for(var o in n)"default"!==o&&function(i){t.d(e,i,(function(){return n[i]}))}(o);e["default"]=a.a},aa56:function(i,e,t){var n=t("7b9c");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=t("4f06").default;a("eac7d40a",n,!0,{sourceMap:!1,shadowMode:!1})},ffe5:function(i,e,t){"use strict";var n=t("aa56"),a=t.n(n);a.a}}]);