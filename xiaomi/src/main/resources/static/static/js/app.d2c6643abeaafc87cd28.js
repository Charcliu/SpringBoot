webpackJsonp([1],{"/VHm":function(t,e,n){t.exports=n.p+"static/img/tv6.ea96451.png"},"0TQF":function(t,e,n){t.exports=n.p+"static/img/tv5.d588c8c.jpg"},"1Qt0":function(t,e,n){t.exports=n.p+"static/img/redmi2.db4acde.png"},"4SRF":function(t,e){},"5ISI":function(t,e,n){t.exports=n.p+"static/img/redmi4.15fd05a.png"},"7Akg":function(t,e,n){t.exports=n.p+"static/img/card2.7e4a6f7.jpg"},CSAg:function(t,e,n){t.exports=n.p+"static/img/mix2.eae70ca.png"},D7Ud:function(t,e){},"GMT/":function(t,e,n){t.exports=n.p+"static/img/mix2s.ef61c66.png"},ILDh:function(t,e){},K00N:function(t,e,n){t.exports=n.p+"static/img/redmi5.985e5e5.png"},K7Rh:function(t,e,n){t.exports=n.p+"static/img/5x.1e308df.jpg"},KuGS:function(t,e,n){t.exports=n.p+"static/img/redmi3.85d177f.png"},MKrF:function(t,e,n){t.exports=n.p+"static/img/xmad.c6f9e3a.jpg"},ML4d:function(t,e,n){t.exports=n.p+"static/img/tv4.a7ea8ab.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};n.d(s,"changeMsg",function(){return W});var r={};n.d(r,"addUser",function(){return B}),n.d(r,"setLoginUser",function(){return j});var i={};n.d(i,"gettersUserInfo",function(){return H}),n.d(i,"gettersCurrentUser",function(){return P});var a=n("MVMM"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=n("Z0/y")({name:"App"},o,!1,function(t){n("aPBz")},null,null).exports,u=n("zO6J"),p=n("4YfN"),l=n.n(p),m=n("9rMa"),d={name:"Login",data:function(){return{userName:"",passWord:""}},computed:l()({},Object(m.b)(["gettersUserInfo"])),methods:l()({},Object(m.c)(["setLoginUser"]),{goRegister:function(){this.$router.push("register")},loginEvent:function(){var t=this;this.gettersUserInfo.some(function(e){return e.userName==t.userName&&e.passWord==t.passWord})?(this.setLoginUser(this.userName),this.$router.push("home")):this.$message({message:"用户名密码错误！",type:"error"})}})},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[t._m(0),t._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"loginDiv"},[t._m(1),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{type:"password"},domProps:{value:t.passWord},on:{input:function(e){e.target.composing||(t.passWord=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"loginBtn",on:{click:t.loginEvent}},[t._v("\n                登录\n            ")]),t._v(" "),n("div",{staticClass:"register"},[n("span",{on:{click:t.goRegister}},[t._v("立即注册")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("帐号登录")])])}]};var v=n("Z0/y")(d,f,!1,function(t){n("mDnP")},"data-v-a09ecc22",null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.notice.show?n("div",[n("div",{staticClass:"shade"}),t._v(" "),n("div",{staticClass:"noticeDiv"},[n("div",{staticClass:"top"},[n("span",[t._v(t._s(t.notice.title))])]),t._v(" "),n("div",{staticClass:"content"},[n("span",[t._v(t._s(t.notice.content))])]),t._v(" "),n("div",{staticClass:"foot"},[t.notice.ok.show?n("span",{on:{click:t.notice.ok.callBack}},[t._v("OK")]):t._e(),t._v(" "),t.notice.ok.cancel?n("span",{on:{click:t.notice.cancel.callBack}},[t._v("Cancel")]):t._e()])])]):t._e()},staticRenderFns:[]};var h=n("Z0/y")({name:"Notice",props:["noticeInfo"],data:function(){return{}},computed:{notice:function(){return this.noticeInfo}}},g,!1,function(t){n("D7Ud")},"data-v-7a8b826c",null).exports,_={name:"Register",data:function(){return{userName:"",passWord:"",noticeInfo:{show:!1,title:"",content:"",ok:{show:!1,callBack:null},cancel:{show:!1,callBack:null}},radio:"1"}},computed:l()({},Object(m.b)(["gettersUserInfo"]),{getErrorMsg:function(){var t={status:!1,title:"",type:""};""!=this.userName?this.gettersUserInfo.some(function(t){return t.userName==this.userName},this)&&(t={status:!0,title:"Tips",type:"UserName Can not Repeat."}):t={status:!0,title:"Tips",type:"UserName Can not Be Empty."};return t}}),methods:l()({},Object(m.c)(["addUser"]),{registerUser:function(){var t=this.getErrorMsg;if(t.status){var e=this;this.noticeInfo={show:t.status,title:t.title,content:t.type,ok:{show:!0,callBack:function(){e.noticeInfo.show=!1}},cancel:{show:!1,callBack:null}}}else this.addUser({userName:this.userName,passWord:this.passWord}),this.$message({message:"恭喜你，注册成功！",type:"success"})},goLogin:function(){this.$router.push("login")}}),components:{Notice:h}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("div",{staticClass:"layout"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"registerInfo"},[n("div",[n("span",[t._v("用户名：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),n("div",[n("span",[t._v("密码：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.passWord},on:{input:function(e){e.target.composing||(t.passWord=e.target.value)}}})])]),t._v(" "),n("div",[n("div",{staticClass:"registerButton",on:{click:t.registerUser}},[n("span",[t._v("注册")])])]),t._v(" "),n("div",{staticClass:"login"},[n("span",{on:{click:t.goLogin}},[t._v("立即登录")])])]),t._v(" "),n("Notice",{attrs:{"notice-info":t.noticeInfo}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"milogo"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"accoutSpan"},[this._v("注册小米账号")])])}]};var x=n("Z0/y")(_,I,!1,function(t){n("fP5s")},"data-v-010225a7",null).exports,y={name:"Header",data:function(){return{headerMsgLeft:["小米商城","MIUI","IoT","云服务","水滴","金融","有品","Select Region"]}},computed:l()({},Object(m.b)(["gettersCurrentUser"]),{headerMsgRight:function(){return[this.gettersCurrentUser].concat(["消息通知","我的订单","购物车"])}})},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",[t._l(t.headerMsgLeft,function(e,s){return n("span",{staticClass:"headerSpan"},[t._v("\n            "+t._s(e)+"\n            "),s!=t.headerMsgLeft.length-1?n("span",[t._v("|")]):t._e()])}),t._v(" "),n("span",t._l(t.headerMsgRight,function(e,s){return n("span",{staticClass:"headerSpanRight"},[t._v("\n                "+t._s(e)+" \n                "),s!=t.headerMsgRight.length-1?n("span",[t._v("|")]):t._e()])}))],2)])},staticRenderFns:[]};var M=n("Z0/y")(y,N,!1,function(t){n("U+dr")},"data-v-7079b2e5",null).exports,C=["小米手机","红米","电视","笔记本","盒子","新品","路由器","智能硬件","服务","社区"],S=[{name:"小米手机",urlList:[{url:n("GMT/"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("CSAg"),price:3299,name:"小米MIX 2S",type:"热卖"},{url:n("K7Rh"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("SkYK"),price:3299,name:"小米MIX 2S",type:""},{url:n("PTIp"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("VVBF"),price:3299,name:"小米MIX 2S",type:"新品"}]},{name:"红米",urlList:[{url:n("lf1a"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("1Qt0"),price:3299,name:"小米MIX 2S",type:"热卖"},{url:n("KuGS"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("5ISI"),price:3299,name:"小米MIX 2S",type:""},{url:n("K00N"),price:3299,name:"小米MIX 2S",type:"新品"}]},{name:"电视",urlList:[{url:n("k+a9"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("mzra"),price:3299,name:"小米MIX 2S",type:"热卖"},{url:n("niOD"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("ML4d"),price:3299,name:"小米MIX 2S",type:""},{url:n("0TQF"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("/VHm"),price:3299,name:"小米MIX 2S",type:"新品"}]},{name:"笔记本",urlList:[{url:n("U7MQ"),price:3299,name:"小米MIX 2S",type:"新品"},{url:n("V8fk"),price:3299,name:"小米MIX 2S",type:"热卖"},{url:n("ot0+"),price:3299,name:"小米MIX 2S",type:"新品"}]}],w={name:"TopNav",data:function(){return{topNav:C,topNavDetail:S,currentType:"小米手机",showDetail:!1,count:0,timeoutId:null}},computed:{currentDetail:function(){var t=this.topNavDetail.filter(function(t){if(t.name==this.currentType)return t},this);return t[0]?t[0].urlList:[]}},methods:{getName:function(t){this.count++,this.currentType=t,this.showDetail=!0},outHide:function(){var t=this;this.count--,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){!t.count&&(t.showDetail=!1)},500)}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topNav"},[n("span"),t._v(" "),n("div",{staticClass:"simpleNav"},t._l(t.topNav,function(e){return n("span",{on:{mouseover:function(n){t.getName(e)},mouseout:t.outHide}},[t._v(t._s(e))])})),t._v(" "),t.showDetail?n("div",{staticClass:"detailNav",on:{mouseover:function(e){t.getName(t.currentType)},mouseout:t.outHide}},[n("div",t._l(t.currentDetail,function(e){return n("div",{staticClass:"itemDetail"},[n("div",[e.type?n("span",[t._v(t._s(e.type))]):t._e()]),t._v(" "),n("img",{attrs:{src:e.url}}),t._v(" "),n("div",[t._v(t._s(e.name))]),t._v(" "),n("div",[t._v(t._s(e.price)+"元")])])}))]):t._e()])},staticRenderFns:[]};var U=n("Z0/y")(w,k,!1,function(t){n("4SRF")},"data-v-010fbcb1",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftTree"},[e("div")])}]};var T={name:"Swipper",props:["swipperInfo"],data:function(){return{currentIndex:this.swipperInfo.startIndex}},computed:{urlList:function(){return this.swipperInfo.url},urlSize:function(){return this.swipperInfo.url.length}},mounted:function(){var t=this;this.swipperInfo.autoplay&&setInterval(function(){t.currentIndex<t.urlSize-1?t.currentIndex++:t.currentIndex=0},this.swipperInfo.interval)},methods:{switchImg:function(t){t?this.currentIndex+1<this.urlSize?this.currentIndex++:this.currentIndex=0:this.currentIndex>0?this.currentIndex--:this.currentIndex=this.urlSize-1}},components:{LeftTree:n("Z0/y")({name:"leftTree",data:function(){return{}}},b,!1,function(t){n("vDkH")},"data-v-06c27770",null).exports}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swipper"},[n("LeftTree"),t._v(" "),t._l(t.urlList,function(e,s){return s==t.currentIndex?n("div",{staticClass:"imgContent"},[n("img",{attrs:{src:e}}),t._v(" "),n("span",{staticClass:"left",on:{click:function(e){t.switchImg(0)}}}),t._v(" "),n("span",{staticClass:"right",on:{click:function(e){t.switchImg(1)}}})]):t._e()})],2)},staticRenderFns:[]};var R={name:"Home",data:function(){return{bgImg:{url:[n("MKrF"),n("7Akg"),n("cGsi"),n("bk4B")],startIndex:0,autoplay:!0,interval:6e3}}},components:{Header:M,TopNav:U,Swipper:n("Z0/y")(T,F,!1,function(t){n("nKaB")},"data-v-468b0569",null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("Header"),this._v(" "),e("TopNav"),this._v(" "),e("Swipper",{attrs:{"swipper-info":this.bgImg}})],1)},staticRenderFns:[]};var D=n("Z0/y")(R,L,!1,function(t){n("ILDh")},"data-v-2a86ae93",null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notFound"},[e("div",{staticClass:"text"},[this._v(this._s(this.msg))])])},staticRenderFns:[]};var X=n("Z0/y")({name:"NotFound",data:function(){return{msg:"Not Found Page"}}},E,!1,function(t){n("Nfb1")},"data-v-243f6d10",null).exports;a.default.use(u.a);var $=new u.a({routes:[{path:"/login",name:"Login",component:v},{path:"/register",name:"Register",component:x},{path:"/home",name:"Home",component:D},{path:"*",name:"NotFound",component:X}]}),W=function(t,e){(0,t.commit)({type:"mutationsMsg",msg:e.msg})},B=function(t,e){t.userInfo.push({userName:e.userName,passWord:e.passWord})},j=function(t,e){t.currentUser=e},H=function(t){return t.userInfo},P=function(t){return t.currentUser},K={userInfo:[],currentUser:""};a.default.use(m.a);var O=new m.a.Store({state:K,getters:i,actions:s,mutations:r}),Z=n("UM93"),z=n.n(Z);n("bTWF");a.default.use(z.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:$,store:O,components:{App:c},template:"<App/>"})},Nfb1:function(t,e){},PTIp:function(t,e,n){t.exports=n.p+"static/img/mi6x.4a7abe0.jpg"},SkYK:function(t,e,n){t.exports=n.p+"static/img/max2.fa7d5c5.png"},"U+dr":function(t,e){},U7MQ:function(t,e,n){t.exports=n.p+"static/img/computer1.03f8fae.png"},V8fk:function(t,e,n){t.exports=n.p+"static/img/computer2.b8405a3.png"},VVBF:function(t,e,n){t.exports=n.p+"static/img/note2.1282c11.png"},aPBz:function(t,e){},bTWF:function(t,e){},bk4B:function(t,e,n){t.exports=n.p+"static/img/card4.ce304e2.jpg"},cGsi:function(t,e,n){t.exports=n.p+"static/img/card3.c4936f8.jpg"},fP5s:function(t,e){},"k+a9":function(t,e,n){t.exports=n.p+"static/img/tv1.708921a.jpg"},lf1a:function(t,e,n){t.exports=n.p+"static/img/redmi1.34ede45.png"},mDnP:function(t,e){},mzra:function(t,e,n){t.exports=n.p+"static/img/tv2.b4278f5.png"},nKaB:function(t,e){},niOD:function(t,e,n){t.exports=n.p+"static/img/tv3.728f372.png"},"ot0+":function(t,e,n){t.exports=n.p+"static/img/computer3.6637848.jpg"},vDkH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d2c6643abeaafc87cd28.js.map