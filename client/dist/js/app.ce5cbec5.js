(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("br"),a("the-footer")],1)},s=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("br"),a("p",[t._v("\n      Evandro Pavei - Florianópolis - 2019\n    ")]),a("p",[a("a",{attrs:{href:"https://github.com/evzpav"}},[t._v("Github")])])])])}],l=a("2877"),c={},u=Object(l["a"])(c,i,o,!1,null,null,null),d=u.exports,p={components:{TheFooter:d}},f=p,v=Object(l["a"])(f,n,s,!1,null,null,null),h=v.exports,m=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),t.isLoading?a("div",{staticClass:"column is-three-fifths"},[t._v("\n      Loading users...\n    ")]):a("div",{staticClass:"column is-three-fifths"},[t._m(0),a("vue-good-table",{attrs:{columns:t.columns,rows:t.users,"pagination-options":{enabled:!0,mode:"records",perPage:10,position:"bottom",dropdownAllowAll:!1,setCurrentPage:1,nextLabel:"next",prevLabel:"prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All"}},on:{"on-row-click":t.goToDetailsPage}})],1),a("div",{staticClass:"column"})])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("\n              Github Users List\n            ")])])])])}],_=(a("96cf"),a("3b8d")),w=a("bc3a"),C=a.n(w),L={name:"Users",mounted:function(){this.listUsers()},data:function(){return{url:window.location.origin,isLoading:!1,users:"",columns:[{label:"Id",field:"id",filterable:!0},{label:"Login",field:"login",filterable:!0}]}},methods:{listUsers:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,C.a.get("".concat(this.url,"/api/users"));case 4:e=t.sent,this.users=e.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:return t.prev=11,this.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[1,8,11,14]])})));function e(){return t.apply(this,arguments)}return e}(),goToDetailsPage:function(t){var e=t.row.login;this.$router.push({path:"/details=".concat(e)})}},components:{}},x=L,y=Object(l["a"])(x,b,g,!1,null,null,null),D=y.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.isLoading?a("div",[t._v("Loading details...")]):a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("br"),a("br"),a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{attrs:{src:t.userData.avatar_url,alt:"avatar",title:t.userData.login}})])]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.userData.login))]),a("p",{staticClass:"subtitle is-6"},[t._v("ID: "+t._s(t.userData.id))])])]),a("div",{staticClass:"content"},[a("a",{attrs:{href:t.userData.html_url,target:"_blank"}},[t._v(t._s(t.userData.html_url))]),a("br"),a("time",[t._v("Account created at:\n              "+t._s(t._f("formatDateTime")(t.userData.created_at)))])])])])]),a("div",{staticClass:"column is-three-fifths"},[t._m(0),a("div",[a("vue-good-table",{attrs:{columns:t.columns,rows:t.repos,"pagination-options":{enabled:!0,mode:"records",perPage:10,position:"bottom",dropdownAllowAll:!1,setCurrentPage:1,nextLabel:"next",prevLabel:"prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All"}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["html_url"===e.column.field?a("span",[a("a",{staticStyle:{color:"blue"},attrs:{href:e.row.html_url,target:"_blank"}},[t._v("\n                "+t._s(e.row.html_url)+"\n              ")])]):a("span",[t._v("\n              "+t._s(e.formattedRow[e.column.field])+"\n            ")])]}}])})],1)]),a("div",{staticClass:"column"})])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("\n              User Details\n            ")])])])])}],j={mounted:function(){this.loadDetails(),this.loadRepos()},data:function(){return{url:window.location.origin,isLoading:!1,userData:"",repos:"",columns:[{label:"Id",field:"id",filterable:!0},{label:"Name",field:"name",filterable:!0},{label:"Repository URL",field:"html_url",filterable:!0}]}},props:["username"],methods:{loadDetails:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,C.a.get("".concat(this.url,"/api/users/").concat(this.username,"/details"));case 4:e=t.sent,this.userData=e.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:return t.prev=11,this.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[1,8,11,14]])})));function e(){return t.apply(this,arguments)}return e}(),loadRepos:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,C.a.get("".concat(this.url,"/api/users/").concat(this.username,"/repos"));case 4:e=t.sent,this.repos=e.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:return t.prev=11,this.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[1,8,11,14]])})));function e(){return t.apply(this,arguments)}return e}()}},k=j,R=Object(l["a"])(k,P,O,!1,null,null,null),$=R.exports,E=[{path:"/",component:D},{path:"/details=:username",component:$,props:!0}],T=a("fe82"),A=(a("dac4"),a("ca16")),S=a.n(A),U=a("8a03"),M=a.n(U);a("5abe");r["default"].use(m["a"]),r["default"].use(T["a"]),r["default"].use(M.a);var I=new m["a"]({routes:E,mode:"history",base:"/"});r["default"].config.productionTip=!1,r["default"].filter("formatDateTime",(function(t){return S()(t).format("numeric-uk")})),new r["default"]({router:I,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.ce5cbec5.js.map