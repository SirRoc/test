(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{306:function(t,e,r){var content=r(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("e46b6ba2",content,!0,{sourceMap:!1})},307:function(t,e,r){"use strict";var n=r(306);r.n(n).a},308:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},309:function(t,e,r){"use strict";r(307);var n=r(27),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.a=component.exports},312:function(t,e,r){var content=r(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("6759f5ab",content,!0,{sourceMap:!1})},317:function(t,e,r){"use strict";var n=r(312);r.n(n).a},318:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},319:function(t,e,r){"use strict";r.r(e);r(54);var n,o,l=r(5),c=r(309),d=r(78),f=r.n(d),m={components:{Logo:c.a},data:function(){return{project:"app",systemTime:null}},asyncData:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("我是asyncData"),t.abrupt("return",{systemTime:"res.data.systemTimenpm"});case 2:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),methods:{sendData:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("111111"),t.next=4,this.$api.post("/pbs/pub/promoteTask/query_product",{catagoryId:null,name:null,pageNum:2,pageSize:10,promoteType:1,sort:1});case 4:e=t.sent,console.log("response.data",e.data.systemTime);case 6:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),asyncData:function(){f.a.post("http://zhaol.antclick.com:22880/freeget/home")}}},h=(r(317),r(27)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",[r("el-button",{attrs:{type:"primary"},on:{click:t.sendData}},[t._v("啦啦啦")]),t._v(" "),r("logo"),t._v(" "),r("h1",{staticClass:"title"},[r("nuxt-link",{attrs:{to:"/test/aa"}},[t._v("首页"+t._s(t.project))])],1),t._v(" "),r("h2",{staticClass:"subtitle",on:{click:t.sendData}},[t._v("\n      My stylish Nuxt.js project "+t._s(t.systemTime)+"\n    ")]),t._v(" "),t._m(0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("\n        Documentation\n      ")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[this._v("\n        GitHub\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);