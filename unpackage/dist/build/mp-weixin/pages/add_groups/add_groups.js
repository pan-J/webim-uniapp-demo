(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add_groups/add_groups"],{"1c36":function(t,e,n){"use strict";n.r(e);var o=n("4b38"),a=n("af0c");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("32d1");var u,r=n("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=l.exports},"32d1":function(t,e,n){"use strict";var o=n("dbea"),a=n.n(o);a.a},"4b38":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},"66b1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("d98b")["default"],a={data:function(){return{friendList:[],groupName:"",groupDec:"",allowJoin:!0,allowApprove:!1,noAllowJoin:!1,allowInvite:!1,inviteFriend:[],owner:""}},components:{},props:{},onLoad:function(t){this.setData({owner:JSON.parse(t.owner).myName})},onShow:function(){var t=this;o.conn.getRoster({success:function(e){for(var n=[],o=0;o<e.length;o++)"both"==e[o].subscription&&n.push(e[o]);t.setData({friendList:n})}})},methods:{getGroupName:function(t){this.setData({groupName:t.detail.value})},getGroupDec:function(t){this.setData({groupDec:t.detail.value})},allowJoinFun:function(t){this.setData({allowJoin:Boolean(t.detail.value)||!1})},allowApproveFun:function(t){this.setData({allowApprove:Boolean(t.detail.value)||!1})},noAllowJoinFun:function(t){this.setData({noAllowJoin:Boolean(t.detail.value)||!1})},allowInviteFun:function(t){this.setData({allowInvite:Boolean(t.detail.value)||!1})},inviteFriendFun:function(t){this.setData({inviteFriend:t.detail.value})},createGroup:function(){var e=this,n=getApp().globalData.groupList;if(this.groupName.trim())if(n.reduce((function(t,n,o){return t||n.name==e.groupName}),!1))wx.showModal({title:"群名被占用",confirmText:"OK",showCancel:!1});else{var a={data:{groupname:this.groupName,desc:this.groupDec,members:this.inviteFriend,public:this.allowJoin,owner:this.owner},success:function(n){t.showToast({title:"添加成功",duration:2e3,success:function(t){setTimeout((function(){return wx.navigateTo({url:"../groups/groups?myName="+e.owner})}),2e3)}})},error:function(e){t.showToast({title:e.data.error_description,icon:"none"})}};o.conn.createGroupNew(a)}else wx.showModal({title:"请输入群名",confirmText:"OK",showCancel:!1})}}};e.default=a}).call(this,n("543d")["default"])},"7ba8":function(t,e,n){"use strict";(function(t){n("93cd"),n("921b");o(n("66fd"));var e=o(n("1c36"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},af0c:function(t,e,n){"use strict";n.r(e);var o=n("66b1"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},dbea:function(t,e,n){}},[["7ba8","common/runtime","common/vendor"]]]);