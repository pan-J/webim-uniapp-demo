(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting_general/setting_general"],{1219:function(t,n,e){"use strict";(function(t){e("93cd"),e("921b");a(e("66fd"));var n=a(e("d19d"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"577e":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}))},"5aab":function(t,n,e){"use strict";e.r(n);var a=e("a107"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a},"5f4f":function(t,n,e){"use strict";var a=e("60b2"),u=e.n(a);u.a},"60b2":function(t,n,e){},a107:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("d98b")["default"],u=(e("0fac"),{data:function(){return{username:"",switchStatus:""}},components:{},props:{},onLoad:function(){var t=wx.getStorageSync("myUsername");this.setData({username:t}),this.setData({switchStatus:a.config.isDebug})},onShow:function(){this.setData({switchStatus:a.config.isDebug})},methods:{openDebug:function(t){a.isDebug({isDebug:t.detail.value})}}});n.default=u},d19d:function(t,n,e){"use strict";e.r(n);var a=e("577e"),u=e("5aab");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("5f4f");var i,o=e("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=r.exports}},[["1219","common/runtime","common/vendor"]]]);