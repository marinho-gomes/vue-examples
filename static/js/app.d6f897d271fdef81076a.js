webpackJsonp([1],{28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),i=n(30),r=n(35);o.a.config.productionTip=!1,new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},30:function(e,t,n){"use strict";function o(e){n(31)}var i=n(33),r=n(34),a=n(15),c=o,s=a(i.a,r.a,c,null,null);t.a=s.exports},31:function(e,t){},33:function(e,t,n){"use strict";t.a={name:"app"}},34:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r={render:o,staticRenderFns:i};t.a=r},35:function(e,t,n){"use strict";var o=n(14),i=n(36),r=n(37);o.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"TodoApp",component:r.a}]})},37:function(e,t,n){"use strict";function o(e){n(38)}var i=n(39),r=n(68),a=n(15),c=o,s=a(i.a,r.a,c,null,null);t.a=s.exports},38:function(e,t){},39:function(e,t,n){"use strict";var o=n(40),i=n.n(o);t.a={name:"todo-app",data:function(){return{todoList:[{title:"Complete task",done:!0},{title:"Incomplete task",done:!1}],newTodo:""}},methods:{addTodo:function(){this.newTodo&&this.newTodo.trim().length&&(this.todoList=[{title:this.newTodo.trim(),done:!1}].concat(i()(this.todoList)),this.newTodo="")},removeTodo:function(e){(e.done||confirm("TODO you going to delete wasn't complete, are you sure?"))&&(this.todoList=[].concat(i()(this.todoList.filter(function(t){return t.title!==e.title}).filter(function(t){return t.done!==e.done}))))}}}},68:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("TODO App")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],domProps:{value:e.newTodo},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.addTodo()},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),e._v(" "),e._l(e.todoList,function(t){return n("div",[n("span",{class:{complete:!!t.done}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"t.done"}],attrs:{type:"checkbox"},domProps:{checked:t.done,checked:Array.isArray(t.done)?e._i(t.done,null)>-1:t.done},on:{__c:function(n){var o=t.done,i=n.target,r=!!i.checked;if(Array.isArray(o)){var a=e._i(o,null);i.checked?a<0&&(t.done=o.concat(null)):a>-1&&(t.done=o.slice(0,a).concat(o.slice(a+1)))}else t.done=r}}}),e._v("\n      "+e._s(t.title)+"\n      "),n("label",{attrs:{type:"text"},on:{click:function(n){e.removeTodo(t)}}},[e._v(" x ")])])])})],2)},i=[],r={render:o,staticRenderFns:i};t.a=r}},[28]);
//# sourceMappingURL=app.d6f897d271fdef81076a.js.map