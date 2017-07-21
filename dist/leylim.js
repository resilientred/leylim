!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Leylim=t()}(this,function(){"use strict";var e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=[],a=function(){function n(){e(this,n)}return t(n,[{key:"subscribe",value:function(e){i.push(e)}},{key:"unsubscribe",value:function(e){i=i.filter(function(t){return t!==e})}},{key:"fire",value:function(e,t,n){var o=n||window;i.forEach(function(n){n.call(o,e,t)})}}],[{key:"handlers",get:function(){return i}}]),n}(),r="ADD_COMPONENT",c="DUPLICATE_ROW",l="DELETE_ROW",d=function(i){function c(t,n){e(this,c);var i=o(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return i.thumbnailPath=n,i.component=t,i.render(),i}return n(c,a),t(c,[{key:"onclick",value:function(e){e.preventDefault(),this.fire(r,this.component,this)}},{key:"render",value:function(){var e=document.querySelector(".leylim__component-list"),t=document.createElement("a");t.href="#",t.onclick=this.onclick.bind(this),t.classList.add("leylim__list-item"),t.innerHTML='<img src="'+(this.thumbnailPath+this.component.thumbnail)+'" />',e.appendChild(t)}}]),c}(),s=function(){function n(t){e(this,n),this.options=t,this.listNode=null,this.init()}return t(n,[{key:"update",value:function(e){this.options.components=e,this.renderListItem()}},{key:"init",value:function(){var e=this.options.rootNode,t=document.querySelector(e),n=document.createElement("div");n.classList.add("leylim__component-list"),t.appendChild(n),this.listNode=n,this.renderListItem()}},{key:"renderListItem",value:function(){this.listNode.innerHTML="";for(var e=this.options,t=e.components,n=e.thumbnailPath,o=0;o<t.length;o++)new d(t[o],n)}}]),n}(),u=function(i){function r(t){e(this,r);var n=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return f.call(n),n.component=Object.assign({},t),n.rowNode=null,n.index=0,n.templateNode=null,n.actionsNode=null,n.rawHTMLmode=!1,n.actionButtons={ACTIONS_DUPLICATE:"actions--dupicate",ACTIONS_DELETE:"actions--delete",ACTIONS_HTML:"actions--edit",ACTIONS_ACTIVE:"action-active"},n}return n(r,a),t(r,[{key:"toggleEditable",value:function(e){for(var t=this.templateNode.querySelectorAll("[contenteditable]"),n=0;n<t.length;n++)t[n].setAttribute("contenteditable",e)}},{key:"getRawData",value:function(){this.toggleEditable(!1);var e=this.templateNode.innerHTML;return this.toggleEditable(!0),e}},{key:"attachEvents",value:function(){var e=this,t=this.actionButtons,n=t.ACTIONS_DUPLICATE,o=t.ACTIONS_DELETE,i=t.ACTIONS_HTML,a=this.templateNode.querySelectorAll("[contenteditable]"),r=this.rowNode.querySelector("."+n),c=this.rowNode.querySelector("."+o),l=this.rowNode.querySelector("."+i);a.forEach(function(t){t.onblur=e.onUpdateRowTemplate}),r.onclick=this.onDuplicate,c.onclick=this.onDelete,l.onclick=this.changeMode}},{key:"applyStyle",value:function(){var e=this.component,t=e.name,n=e.style,o="leylim-css-module-"+t;if(o=o.toLowerCase().trim().toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),!document.querySelector("#"+o)){var i=document.createElement("STYLE");i.setAttribute("id",o),i.innerHTML=n,document.head.appendChild(i)}}},{key:"render",value:function(e){var t=this.actionButtons,n=t.ACTIONS_DUPLICATE,o=t.ACTIONS_DELETE,i=t.ACTIONS_HTML,a=t.ACTIONS_ACTIVE;this.index=e;var r=document.querySelector(".leylim__area"),c=document.createElement("div");c.classList.add("leylim-area-row");var l=document.createElement("div");l.classList.add("leylim-area-row__template");var d=document.createElement("div");d.classList.add("leylim-area-row__actions"),d.innerHTML='\n      <a href="#" class="leylim-actions '+n+'"><i class="fa fa-copy"></i></a>\n      <a href="#" class="leylim-actions '+o+'"><i class="fa fa-trash-o"></i></a>\n      <a href="#" class="leylim-actions '+i+" "+(this.rawHTMLmode?a:"")+'"><i class="fa fa-html5"></i></a>\n    ',this.rowNode=c,this.templateNode=l,this.actionsNode=d,c.appendChild(l),c.appendChild(d),r.appendChild(c),this.applyStyle(),this.renderContent(!0),this.attachEvents()}}],[{key:"useEvents",value:function(e){this.beforeRowUpdate=e.beforeRowUpdate,this.rowUpdated=e.rowUpdated}}]),r}(),f=function(){var e=this;this.onUpdateRowTemplate=function(){u.beforeRowUpdate(e.templateNode,e.component,function(t,n){var o=t.innerHTML;e.component=n,e.component.template=o}),u.rowUpdated(e.component,e.index)},this.renderContent=function(t){e.rawHTMLmode?(e.templateNode.innerText=e.component.template,e.templateNode.setAttribute("contenteditable",!0),e.templateNode.classList.add("leylim-html-mode")):(e.templateNode.innerHTML=e.templateNode.innerText||e.component.template,e.templateNode.setAttribute("contenteditable",!1),e.templateNode.classList.remove("leylim-html-mode"),t||e.onUpdateRowTemplate(),e.toggleEditable(!0)),e.attachEvents()},this.changeMode=function(t){t.preventDefault();var n=e.actionButtons,o=n.ACTIONS_ACTIVE,i=n.ACTIONS_HTML,a=e.actionsNode.querySelector("."+i);e.rawHTMLmode?a.classList.remove(o):a.classList.add(o),e.rawHTMLmode=!e.rawHTMLmode,e.renderContent()},this.onDuplicate=function(t){t.preventDefault();var n=Object.assign({},e.component),o=e.index;e.fire(c,{component:n,index:o})},this.onDelete=function(t){t.preventDefault();var n=Object.assign({},e.component),o=e.index;e.fire(l,{component:n,index:o})}},m=function(i){function d(t){e(this,d);var n=o(this,(d.__proto__||Object.getPrototypeOf(d)).call(this));n.handleEvents=function(e,t){switch(e){case r:n.addComponent(t);break;case c:n.duplicateRow(t);break;case l:n.deleteRow(t)}},n.options=t,n.rowList=[];var i=n.options.events,a=i.beforeRowUpdate,s=i.rowUpdated;return u.useEvents({beforeRowUpdate:a,rowUpdated:s}),n.subscribe(n.handleEvents),n.generateRow(),n.initArea(),n.render(),n}return n(d,a),t(d,[{key:"getRowData",value:function(){for(var e=[],t=this.rowList,n=0;n<t.length;n++){var o=t[n].getRawData();e.push(JSON.stringify(o))}return e}},{key:"generateRow",value:function(){for(var e=this.options.rowList,t=0;t<e.length;t++)this.rowList.push(new u(e[t]))}},{key:"duplicateRow",value:function(e){var t=this,n=this.options.events,o=n.beforeRowDuplicate,i=n.rowDuplicated,a=void 0;o(e.component,function(n){a=n,t.rowList.splice(e.index+1,0,new u(n)),t.render()}),i(a)}},{key:"deleteRow",value:function(e){var t=this,n=this.options.events,o=n.beforeRowDelete,i=n.rowDeleted,a=void 0;o(e,function(e){a=e,t.rowList.splice(e.index,1),t.render()}),i(a)}},{key:"addComponent",value:function(e){var t=this,n=this.options.events,o=n.beforeRowAdd,i=n.rowAdded,a=void 0;o(e,function(e){a=e,t.rowList.push(new u(e)),t.render()}),i(a)}},{key:"initArea",value:function(){var e=this.options.rootNode,t=document.querySelector(e),n=document.createElement("div");n.classList.add("leylim__area"),t.appendChild(n),this.areaNode=n}},{key:"render",value:function(){for(var e=this.areaNode;e.firstChild;)e.removeChild(e.firstChild);if(this.rowList.length)for(var t=0;t<this.rowList.length;t++)this.rowList[t].render(t);else e.innerHTML='<div class="leylim__empty-area"><span>😒</span> </br> No content</div>'}}]),d}(),h=function(i){function r(t){e(this,r);var n=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n.options=t,n.init(),n}return n(r,a),t(r,[{key:"getButtons",value:function(e){var t=document.createElement("button");return t.classList.add("leylim__footer-button"),t.classList.add(e.class),t.setAttribute("type","button"),t.innerText=e.text,t.onclick=e.handler,t}},{key:"init",value:function(){var e=this.options,t=e.rootNode,n=e.buttons,o=document.querySelector(t),i=document.createElement("div");i.classList.add("leylim__footer");for(var a=0;a<n.length;a++){var r=this.getButtons(n[a]);i.appendChild(r)}o.appendChild(i)}}]),r}(),p=[{command:"bold",icon:"fa fa-bold"},{command:"italic",icon:"fa fa-italic"},{command:"createLink",icon:"fa fa-link",handler:function(){var e=window.prompt("Please insert a link","http://");document.execCommand("createLink",!0,e)}},{command:"unLink",icon:"fa fa-unlink"},{command:"cut",icon:"fa fa-cut"},{command:"delete",icon:"fa fa-trash-o",handler:function(e){document.execCommand("insertHTML",!0,"<p>"+e.toString()+"</p>")}},{command:"fontName",icon:"fa fa-font",value:"sans",handler:function(e){var t=window.prompt("Please insert font family","sans");document.execCommand("insertHTML",!0,'<span style="font-family: '+t+'">'+e+"</span>")}},{command:"foreColor",icon:"fa fa-paint-brush",value:"yellow",handler:function(e){var t=window.prompt("Please insert color","#000");document.execCommand("insertHTML",!0,'<span style="color: '+t+'">'+e+"</span>")}},{command:"formatBlock",icon:"fa fa-header fa-1",innerText:1,handler:function(e){document.execCommand("insertHTML",!0,"<h1>"+e+"</h1>")}},{command:"formatBlock",icon:"fa fa-header fa-1",innerText:2,handler:function(e){document.execCommand("insertHTML",!0,"<h2>"+e+"</h2>")}},{command:"formatBlock",icon:"fa fa-header fa-1",innerText:3,handler:function(e){document.execCommand("insertHTML",!0,"<h3>"+e+"</h3>")}},{command:"formatBlock",icon:"fa fa-header fa-1",innerText:4,handler:function(e){document.execCommand("insertHTML",!0,"<h4>"+e+"</h4>")}},{command:"formatBlock",icon:"fa fa-header fa-1",innerText:5,handler:function(e){document.execCommand("insertHTML",!0,"<h5>"+e+"</h5>")}},{command:"formatBlock",icon:"fa fa-header fa-1",innerText:6,handler:function(e){document.execCommand("insertHTML",!0,"<h6>"+e+"</h6>")}}],v=function(){function n(t){e(this,n),this.onClick=function(e,t){e.preventDefault(),t.handler?t.handler(window.getSelection()):document.execCommand(t.command,!0,t.value||2)},this.options=t,this.editorNode=null;var o=t.filter?t.filter(p):p;t.merge?this.buttons=o.concat(t.buttons):this.buttons=t.buttons,this.init(),this.catchSelection()}return t(n,[{key:"catchSelection",value:function(){document.onselectionchange=function(e){window.getSelection()}}},{key:"init",value:function(){var e=this,t=this.buttons,n=document.querySelector(".leylim"),o=document.createElement("div");this.editorNode=o,o.classList.add("leylim-editor");for(var i=0;i<t.length;i++)!function(n){var i=document.createElement("A");i.href="#",i.classList.add("leylim-editor__button"),i.innerHTML='<i class="'+t[n].icon+'"></i>'+(t[n].innerText||""),i.onclick=function(o){return e.onClick(o,t[n])},o.appendChild(i)}(i);n.appendChild(o)}}]),n}(),w={beforeCreate:function(){},created:function(){},beforeRowUpdate:function(e,t,n){n(t,t)},rowUpdated:function(){},beforeRowDelete:function(e,t){t(e)},rowDeleted:function(){},beforeRowDuplicate:function(e,t){t(e)},rowDuplicated:function(){},beforeRowAdd:function(e,t){t(e)},rowAdded:function(){}};return function(i){function r(t){e(this,r);var n=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));n.options=t;var i=n.options.beforeCreate;return(void 0===i?w.beforeCreate:i)(n.options),n.init(),n}return n(r,a),t(r,[{key:"update",value:function(e){var t=e.components;this.options.components=t,this._list.update(t)}},{key:"getRowData",value:function(){return this._area.getRowData()}},{key:"init",value:function(){var e=this.options,t=e.components,n=void 0===t?[]:t,o=e.el,i=e.rowList,a=void 0===i?[]:i,r=e.buttons,c=void 0===r?[]:r,l=e.thumbnailPath,d=void 0===l?"":l,u=e.customEditorButtons,f=void 0===u?{merge:!0,buttons:[]}:u,p=e.created,y=void 0===p?w.created:p,b=e.beforeRowUpdate,L=void 0===b?w.beforeRowUpdate:b,T=e.rowUpdated,_=void 0===T?w.rowUpdated:T,C=e.beforeRowDelete,k=void 0===C?w.beforeRowDelete:C,g=e.rowDeleted,N=void 0===g?w.rowDeleted:g,E=e.beforeRowDuplicate,D=void 0===E?w.beforeRowDuplicate:E,A=e.rowDuplicated,R=void 0===A?w.rowDuplicated:A,O=e.beforeRowAdd,S=void 0===O?w.beforeRowAdd:O,x=e.rowAdded,M=void 0===x?w.rowAdded:x;if(!n.length)throw new Error("Can you give me components? please! If you don't have an idea; https://github.com/abdullah/leylim ");var H=document.querySelector(o),U=document.createElement("div");U.classList.add("leylim"),H.appendChild(U),this._list=new s({rootNode:".leylim",thumbnailPath:d,components:n}),this._footer=new h({rootNode:".leylim",buttons:c}),this._area=new m({rootNode:".leylim",rowList:a,events:{beforeRowUpdate:L,rowUpdated:_,beforeRowDelete:k,rowDeleted:N,beforeRowDuplicate:D,rowDuplicated:R,beforeRowAdd:S,rowAdded:M}}),this._editor=new v({merge:f.merge,buttons:f.buttons,filter:f.filter}),y()}}],[{key:"use",value:function(){}}]),r}()});
//# sourceMappingURL=leylim.js.map
