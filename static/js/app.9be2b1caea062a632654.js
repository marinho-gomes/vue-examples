webpackJsonp([0],[,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t(4),r=t(9);o.a.config.productionTip=!1,new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},,function(e,n,t){"use strict";function o(e){t(5)}var a=t(7),r=t(8),c=t(1),i=o,s=c(a.a,r.a,i,null,null);n.a=s.exports},function(e,n){},,function(e,n,t){"use strict";n.a={name:"app"}},function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],r={render:o,staticRenderFns:a};n.a=r},function(e,n,t){"use strict";var o=t(0),a=t(10),r=t(11);o.a.use(a.a),n.a=new a.a({routes:[{path:"/",name:"TodoApp",component:r.a}]})},,function(e,n,t){"use strict";function o(e){t(12)}var a=t(13),r=t(14),c=t(1),i=o,s=c(a.a,r.a,i,null,null);n.a=s.exports},function(e,n){},function(e,n,t){"use strict";n.a={name:"todo-app",data:function(){return{todoList:[{title:"Complete task",done:!0},{title:"Incomplete task",done:!1}]}}}},function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("TODO App")]),e._v(" "),t("p",[e._v("TODO: implement addition...")]),e._v(" "),e._l(e.todoList,function(n){return t("div",[t("span",{class:{complete:!!n.done}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.done,expression:"todo.done"}],attrs:{type:"checkbox"},domProps:{checked:n.done,checked:Array.isArray(n.done)?e._i(n.done,null)>-1:n.done},on:{__c:function(t){var o=n.done,a=t.target,r=!!a.checked;if(Array.isArray(o)){var c=e._i(o,null);a.checked?c<0&&(n.done=o.concat(null)):c>-1&&(n.done=o.slice(0,c).concat(o.slice(c+1)))}else n.done=r}}}),e._v("\n      "+e._s(n.title)+"\n    ")])])})],2)},a=[],r={render:o,staticRenderFns:a};n.a=r}],[2]);
//# sourceMappingURL=app.9be2b1caea062a632654.js.map