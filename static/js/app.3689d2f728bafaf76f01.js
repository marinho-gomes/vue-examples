webpackJsonp([1],{19:function(t,n,e){"use strict";e.d(n,"b",function(){return u});var o=e(2),i=e(42),r=e(43);o.a.use(i.a);var a={progress:{func:[{call:"color",modifier:"temp",argument:"rgb(143, 255, 199)"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}},u=[{path:"/",name:"VuetifyApp",component:r.a,label:"Vuetify App"},{path:"/**",redirect:"/"}].map(function(t){return t.meta=a,t}),c=new i.a({routes:u});n.a=c},31:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(2),i=(e(33),e(19)),r=e(47),a=e(88);o.a.config.productionTip=!1,new o.a({store:r.a,router:i.a,el:"#app",template:"<App/>",components:{App:a.a}})},33:function(t,n,e){"use strict";var o=e(2),i=e(34),r=e.n(i),a=e(37),u=(e.n(a),e(39)),c=(e.n(u),e(40)),s=e.n(c),f=e(41),d=e.n(f);o.a.use(r.a),window.fetch&&"function"==typeof window.fetch||e(35),window.$&&"function"==typeof window.$||(window.$=window.jQuery=e(36)),o.a.use(s.a),o.a.use(d.a)},37:function(t,n){},39:function(t,n){},43:function(t,n,e){"use strict";function o(t){e(44)}var i=e(45),r=e(46),a=e(9),u=o,c=a(i.a,r.a,u,"data-v-17179f3a",null);n.a=c.exports},44:function(t,n){},45:function(t,n,e){"use strict";n.a={name:"vuetify-app"}},46:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"vuetify-app"}},[e("h1",[t._v("Vuetify")])])}],r={render:o,staticRenderFns:i};n.a=r},47:function(t,n,e){"use strict";var o=e(2),i=e(48),r=e(49),a=e(50),u=e(51),c=e(78);o.a.use(i.a);var s=new i.a.Store({state:r.a,getters:a.a,mutations:u.a,actions:c.a});n.a=s},49:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={counter:0,todoList:[{title:"Complete task",done:!0},{title:"Incomplete task",done:!1}],newTodoTitle:"",contactList:[{name:"Max",phone:"+380933495900"},{name:"Ahtung!",phone:"02"},{name:"Help",phone:"911"}],newName:"",newPhone:""}},50:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={counter:function(t){return t.counter}}},51:function(t,n,e){"use strict";e.d(n,"a",function(){return p});var o=e(52),i=e.n(o),r=function(t){return t.counter--},a=function(t){return t.counter++},u=function(t,n){var e=t.todoList.find(function(t){return t.title===n.title});e.done=!e.done},c=function(t){if(t.newTodoTitle&&t.newTodoTitle.trim().length){t.todoList.find(function(n){return n.title===t.newTodoTitle})||(t.todoList=[{title:t.newTodoTitle.trim(),done:!1}].concat(i()(t.todoList)),t.newTodoTitle="")}},s=function(t,n){(n.done||confirm("TODO you going to delete wasn't complete, are you sure?"))&&(t.todoList=[].concat(i()(t.todoList.filter(function(t){return t.title!==n.title}))))},f=function(t,n){t.newTodoTitle=n},d=function(t,n){t.newName=n},m=function(t,n){t.newPhone=n},l=function(t){return t.newName&&t.newName.trim().length&&t.newPhone&&t.newPhone.trim().length?t.contactList.find(function(n){return n.name===t.newName||n.phone===t.newPhone})?void Materialize.toast("contact with such name or phone already exists.",1e4):(t.contactList.push({name:t.newName,phone:t.newPhone}),t.contactList.sort(function(t,n){return t.phone-n.phone}),Materialize.toast("contact "+t.newName+" successfully added!",5e3),void(t.newName=t.newPhone="")):void Materialize.toast("name and phone may not be empty.",1e4)},p={decrementCounterMutation:r,incrementCounterMutation:a,toggleTodoMutation:u,addNewTodoTitleMutation:c,removeTodoMutation:s,setNewTodoTitleMutation:f,setNewNameMutation:d,setNewPhoneMutation:m,addNewContactMutation:l}},78:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(79),i=e.n(o),r=e(85),a=e(86),u=e(87),c=i()({},r.a,a.a,u.a)},85:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={decrementCounterAction:function(t){return(0,t.commit)("decrementCounterMutation")},incrementCounterAction:function(t){return t.commit("incrementCounterMutation")}}},86:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={toggleTodoAction:function(t,n){return t.commit("toggleTodoMutation",n)},addNewTodoTitleAction:function(t){return t.commit("addNewTodoTitleMutation")},removeTodoAction:function(t,n){return t.commit("removeTodoMutation",n)},setNewTodoTitleAction:function(t,n){return t.commit("setNewTodoTitleMutation",n)}}},87:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={addNewContactAction:function(t){return(0,t.commit)("addNewContactMutation")},setNewNameAction:function(t,n){return(0,t.commit)("setNewNameMutation",n)},setNewPhoneAction:function(t,n){return t.commit("setNewPhoneMutation",n)}}},88:function(t,n,e){"use strict";function o(t){e(89)}var i=e(90),r=e(95),a=e(9),u=o,c=a(i.a,r.a,u,"data-v-7c9672be",null);n.a=c.exports},89:function(t,n){},90:function(t,n,e){"use strict";var o=e(91);n.a={name:"app",components:{Links:o.a},mounted:function(){this.$Progress.finish()},created:function(){var t=this;this.$Progress.start(),this.$router.beforeEach(function(n,e,o){if(void 0!==n.meta.progress){var i=n.meta.progress;t.$Progress.parseMeta(i)}t.$Progress.start(),o()}),this.$router.afterEach(function(n,e){t.$Progress.finish()})}}},91:function(t,n,e){"use strict";function o(t){e(92)}var i=e(93),r=e(94),a=e(9),u=o,c=a(i.a,r.a,u,null,null);n.a=c.exports},92:function(t,n){},93:function(t,n,e){"use strict";var o=e(19);n.a={name:"links",data:function(){return{routes:o.b}}}},94:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{attrs:{id:"app"}},[e("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue.js")]),t._v(" "),t._l(t.routes,function(n,o){return e("router-link",{key:o,attrs:{to:{path:n.path}}},[e("a",[e("span",{staticClass:"label"},[t._v(t._s(n.label))])])])})],2)},i=[],r={render:o,staticRenderFns:i};n.a=r},95:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("links"),t._v(" "),e("div",{attrs:{id:"app"}},[e("router-view"),t._v(" "),e("vue-progress-bar")],1)],1)},i=[],r={render:o,staticRenderFns:i};n.a=r}},[31]);
//# sourceMappingURL=app.3689d2f728bafaf76f01.js.map