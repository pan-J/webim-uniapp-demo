(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notification_friendDetail/friendDetail"],{"5f81":function(t,e,n){},6275:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"8ce0":function(t,e,n){"use strict";n.r(e);var r=n("6275"),a=n("cdbe");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("a6ed");var s,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=c.exports},"9b47":function(t,e,n){"use strict";(function(t){n("93cd"),n("921b");r(n("66fd"));var e=r(n("8ce0"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a6ed:function(t,e,n){"use strict";var r=n("5f81"),a=n.n(r);a.a},cdbe:function(t,e,n){"use strict";n.r(e);var r=n("e1f4"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},e1f4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("d98b")["default"],a=n("0fac"),i={data:function(){return{friendList:[],myName:""}},components:{},props:{},onLoad:function(t){var e=this;a.on("em.subscribe",(function(){e.setData({friendList:getApp().globalData.saveFriendList}),wx.setStorageSync("friendNotiData",getApp().globalData.saveFriendList)})),this.setData({myName:wx.getStorageSync("myUsername"),friendList:wx.getStorageSync("friendNotiData")})},methods:{removeAndRefresh:function(t){var e;this.friendList.forEach((function(n,r){n.from===t&&(e=r)})),this.friendList.splice(e,1),getApp().globalData.saveFriendList.splice(e,1)},agree:function(t){var e=this;r.conn.subscribed({to:t.currentTarget.dataset.from,message:"[resp:true]"}),this.friendList.forEach((function(n){n.from==t.currentTarget.dataset.from&&(n.type="subscribed",n.typeText="已同意",wx.setStorageSync("friendNotiData",e.friendList),e.setData({friendList:e.friendList}))})),this.removeAndRefresh(t.currentTarget.dataset.from),this.getRoster()},getRoster:function(){var t={success:function(t){for(var e=[],n=0;n<t.length;n++)"both"==t[n].subscription&&e.push(t[n]);wx.setStorage({key:"member",data:e})},error:function(t){console.log(t)}};r.conn.getRoster(t)},reject:function(t){var e=this;r.conn.unsubscribed({to:t.currentTarget.dataset.from,message:"rejectAddFriend"}),this.friendList.forEach((function(n){n.from==t.currentTarget.dataset.from&&(n.type="unsubscribed",n.typeText="已拒绝",wx.setStorageSync("friendNotiData",e.friendList),e.setData({friendList:e.friendList}))})),this.removeAndRefresh(t.currentTarget.dataset.from)}}};e.default=i}},[["9b47","common/runtime","common/vendor"]]]);