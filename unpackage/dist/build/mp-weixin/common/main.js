(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"365d":function(e,o,n){"use strict";var t=n("7770"),r=n.n(t);r.a},"677b":function(e,o,n){"use strict";(function(e){n("93cd"),n("921b");var o=r(n("66fd")),t=r(n("df80"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?s(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}o.default.config.productionTip=!1,o.default.mixin({methods:{setData:function(e,o){var n,t,r=this,s=[];Object.keys(e).forEach((function(o){s=o.split("."),n=e[o],t=r.$data,s.forEach((function(e,o){o+1==s.length?r.$set(t,e,n):t[e]||r.$set(t,e,{}),t=t[e]}))})),o&&o()}}}),t.default.mpType="app";var c=new o.default(i({},t.default));e(c).$mount()}).call(this,n("543d")["createApp"])},7770:function(e,o,n){},b10d:function(e,o,n){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=n("d98b")["default"],r=n("a563"),s=n("637f"),i=n("0fac");function a(e){var o=e.id,n=new t.message("read",t.conn.getUniqueId());n.set({id:o,to:e.from}),t.conn.send(n.body)}function c(o){return"error"!==o.type||(e.showToast({title:o.errorText}),!1)}function u(){var e=getCurrentPages(),o=e[e.length-1];return o.route}function l(e){var o=wx.getStorageSync("myUsername"),n=wx.getStorageSync("member")||[],t=wx.getStorageSync("listGroup")||[],r=n.concat(t),s=r.reduce((function(e,n,t){var r;return r=n.groupid?wx.getStorageSync(n.roomId+o.toLowerCase())||[]:wx.getStorageSync(n.name&&n.name.toLowerCase()+o.toLowerCase())||[],e+r.length}),0);getApp().globalData.unReadMessageNum=s,i.fire("em.unreadspot",e)}var f={globalData:{unReadMessageNum:0,userInfo:null,saveFriendList:[],saveGroupInvitedList:[],isIPX:!1,conn:{closed:!1,curOpenOpt:{},open:function(e){wx.showLoading({title:"正在初始化客户端...",mask:!0}),this.curOpenOpt=e,t.conn.open(e),this.closed=!1},reopen:function(){this.closed&&(t.conn.open(this.curOpenOpt),this.closed=!1)}},onLoginSuccess:function(e){wx.hideLoading(),wx.redirectTo({url:"../chat/chat?myName="+e})},getUserInfo:function(e){var o=this;this.userInfo?"function"==typeof e&&e(this.userInfo):wx.login({success:function(){wx.getUserInfo({success:function(n){o.userInfo=n.userInfo,"function"==typeof e&&e(o.userInfo)}})}})},checkIsIPhoneX:function(){var e=this;wx.getSystemInfo({success:function(o){-1!=o.model.search("iPhone X")&&(e.isIPX=!0)}})}},onLaunch:function(){wx.setInnerAudioOption({obeyMuteSwitch:!1});var o=this,n=wx.getStorageSync("logs")||[];n.unshift(Date.now()),wx.setStorageSync("logs",n),i.on("em.main.ready",(function(){l()})),i.on("em.chatroom.leave",(function(){l()})),i.on("em.chat.session.remove",(function(){l()})),i.on("em.chat.audio.fileLoaded",(function(){l()})),i.on("em.main.deleteFriend",(function(){l()})),i.on("em.chat.audio.fileLoaded",(function(){l()})),t.conn.listen({onOpened:function(e){"pages/login/login"!=u()&&"pages/login_token/login_token"!=u()||o.globalData.onLoginSuccess(wx.getStorageSync("myUsername").toLowerCase())},onReconnect:function(){e.showToast({title:"重连中...",duration:2e3})},onSocketConnected:function(){e.showToast({title:"socket连接成功",duration:2e3})},onClosed:function(){e.showToast({title:"网络已断开",icon:"none",duration:2e3}),wx.redirectTo({url:"../login/login"}),o.globalData.conn.closed=!0,t.conn.close()},onInviteMessage:function(e){o.globalData.saveGroupInvitedList.push(e),i.fire("em.invite.joingroup",e)},onReadMessage:function(e){},onPresence:function(n){switch(n.type){case"unsubscribe":break;case"subscribe":if("[resp:true]"===n.status);else{for(var t=0;t<o.globalData.saveFriendList.length;t++)if(o.globalData.saveFriendList[t].from===n.from)return o.globalData.saveFriendList[t]=n,void i.fire("em.subscribe");o.globalData.saveFriendList.push(n),i.fire("em.subscribe")}break;case"subscribed":e.showToast({title:"添加成功",duration:1e3}),i.fire("em.subscribed");break;case"unsubscribed":break;case"memberJoinPublicGroupSuccess":e.showToast({title:"已进群",duration:1e3});break;case"unavailable":i.fire("em.contacts.remove"),i.fire("em.group.leaveGroup",n);break;case"deleteGroupChat":i.fire("em.invite.deleteGroup",n);break;case"leaveGroup":i.fire("em.group.leaveGroup",n);break;case"removedFromGroup":i.fire("em.group.leaveGroup",n);break;default:break}},onRoster:function(e){},onVideoMessage:function(e){console.log("onVideoMessage: ",e),e&&r.saveReceiveMsg(e,s.VIDEO),l(e),a(e)},onAudioMessage:function(e){console.log("onAudioMessage",e),e&&(c(e)&&r.saveReceiveMsg(e,s.AUDIO),l(e),a(e))},onCmdMessage:function(e){console.log("onCmdMessage",e),e&&(c(e)&&r.saveReceiveMsg(e,s.CMD),l(e),a(e))},onTextMessage:function(e){console.log("onTextMessage",e),e&&(c(e)&&r.saveReceiveMsg(e,s.TEXT),l(e),a(e))},onEmojiMessage:function(e){console.log("onEmojiMessage",e),e&&(c(e)&&r.saveReceiveMsg(e,s.EMOJI),l(e),a(e))},onPictureMessage:function(e){console.log("onPictureMessage",e),e&&(c(e)&&r.saveReceiveMsg(e,s.IMAGE),l(e),a(e))},onFileMessage:function(e){console.log("onFileMessage",e),e&&(c(e)&&r.saveReceiveMsg(e,s.FILE),l(e),a(e))},onError:function(o){if(console.log(o),o.type==t.statusCode.WEBIM_CONNCTION_DISCONNECTED)return e.showToast({title:"server-side close the websocket connection",duration:1e3}),wx.redirectTo({url:"../login/login"}),void!0;o.type==t.statusCode.WEBIM_CONNCTION_SERVER_ERROR&&(e.showToast({title:"offline by multi login",duration:1e3}),wx.redirectTo({url:"../login/login"})),o.type==t.statusCode.WEBIM_CONNCTION_OPEN_ERROR&&(wx.hideLoading(),i.fire("em.error.passwordErr")),o.type==t.statusCode.WEBIM_CONNCTION_AUTH_ERROR&&(wx.hideLoading(),i.fire("em.error.tokenErr")),"socket_error"==o.type&&(console.log("socket_errorsocket_error",o),e.showToast({title:"网络已断开",icon:"none",duration:2e3}),i.fire("em.error.sendMsgErr",o))}}),this.globalData.checkIsIPhoneX()},methods:{}};o.default=f}).call(this,n("543d")["default"])},c49d:function(e,o,n){"use strict";n.r(o);var t=n("b10d"),r=n.n(t);for(var s in t)"default"!==s&&function(e){n.d(o,e,(function(){return t[e]}))}(s);o["default"]=r.a},df80:function(e,o,n){"use strict";n.r(o);var t=n("c49d");for(var r in t)"default"!==r&&function(e){n.d(o,e,(function(){return t[e]}))}(r);n("365d");var s,i,a,c,u=n("f0c5"),l=Object(u["a"])(t["default"],s,i,!1,null,null,null,!1,a,c);o["default"]=l.exports}},[["677b","common/runtime","common/vendor"]]]);