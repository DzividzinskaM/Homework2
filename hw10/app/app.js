!function(t){var o={};function e(s){if(o[s])return o[s].exports;var i=o[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=o,e.d=function(t,o,s){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(s,i,function(o){return t[o]}.bind(null,i));return s},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){t.exports=e(1)},function(t,o,e){"use strict";e.r(o);class s extends class{constructor(){this.observers=[]}subscribe(t){this.observers.push(t)}unsubscribe(t){this.observers=this.observers.filter(o=>o!==t)}notify(t){this.observers.forEach(o=>o(t))}}{constructor(){super(),this.todos=[],this._defaultTodo={text:"",done:!1}}add(t){let o={id:this.getNewTodoId(),...this._defaultTodo,...t};this.todos.push(o),this.notify(this.todos)}remove(t){this.todos=this.todos.filter(o=>o.id!==t),this.notify(this.todos)}get(){return this.todos}getTodo(t){return this.todos.find(o=>o.id===t)}getNewTodoId(){return(this.todos.length?this.todos[this.todos.length-1].id:0)+1}getFilteredBySearch(t){return this.todos.filter(o=>-1!==o.text.search(t))}}class i{constructor(t,o){this.$host=$(t),this.$list=this.$host.find(".todos__list"),this.$todoText=this.$host.find(".todos-form__input"),this.$addTodo=this.$host.find(".todos-form__add"),this.todosModel=o.todosModel,this.todosModel.subscribe(t=>{this.render(t)}),this.listen()}listen(){this.listenAdding(),this.listenRemoving()}listenAdding(){this.$addTodo.click(()=>{const t=this.$todoText.val();if(!t)return;const o={text:t};this.todosModel.add(o)})}listenRemoving(){this.$list.click(t=>{if(t.target.matches(".todos__item-delete")){let o=$(t.target).attr("id-attr");this.todosModel.remove(+o)}})}render(t){let o="";t.forEach(t=>{o+=`\n        <div class="todos__item todo"><input type="checkbox" class="todos__item-delete" id-attr=${t.id}>${t.text}</div>\n      `}),this.$list.html(o)}}!function(){const t={todosModel:new s};$('[data-component="todos"]').each((o,e)=>{new i(e,{todosModel:t.todosModel})})}()}]);