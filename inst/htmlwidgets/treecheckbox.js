(()=>{"use strict";var e={725:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(81),r=n.n(o),c=n(645),i=n.n(c)()(r());i.push([e.id,"/* Style the caret/arrow */\n.UNwkxeu8JaLUR7zsLOLc {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; /* Prevent text selection */\n  display: inline-block;\n  margin-right: 6px;\n}\n\n.dpG9VJCbE1T3hvNqWAXQ {\n  list-style: none;\n}\n\n.fRDpmJJ9MRXanERdlguP {\n  background-color: white;\n  border-radius: 8px;\n  border: 1px solid #cccccc;\n  max-height: 25vh;\n}",""]),i.locals={groupedCheckboxCaret:"UNwkxeu8JaLUR7zsLOLc",groupedCheckboxList:"dpG9VJCbE1T3hvNqWAXQ",groupedCheckboxNodeHolder:"fRDpmJJ9MRXanERdlguP"};const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&i[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],l=0;l<e.length;l++){var s=e[l],a=o.base?s[0]+o.base:s[0],d=c[a]||0,u="".concat(a," ").concat(d);c[a]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=r(h,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var l=n(c[i]);t[l].references--}for(var s=o(e,r),a=0;a<c.length;a++){var d=n(c[a]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{HTMLWidgets,Shiny;class e{root;constructor(e,t){this.buildTree(e,t)}buildTree(e,n){let o,r=new t("root");e.forEach((e=>{o=[],n.forEach((t=>{o.push(e[t])})),this.#e(r,o)})),this.root=r}findMaxDepth(){let e=[],t=0;for(e.push(this.root);e.length>0;){let n,o=e.length;for(let t=0;t<o;t++){n=e.shift();for(let t of n.children)e.push(t)}t++}return t-1}#e(e,n){for(let o=0;o<n.length;o++){let r=n.slice(0,o+1),c=n[o],[i,l]=this.#t(e,r);if(i.value!==c){let e=new t(c);i.add_child(e)}}return e}#t(e,t){let n=e.children;for(const e of n)if(t[0]===e.value)return t.shift(),t.length>0?this.#t(e,t):[e,t];return[e,t]}}class t{constructor(e,t,n){t||(t=[]),this.value=e,this.children=t,this.parent=n,this.depth=0}add_child(e){this.children.push(e),this.children.forEach((e=>{e.addParent(this)}))}addParent(e){this.parent=e,this.depth=e.depth+1}get has_children(){return this.children.length>0}get siblings(){return this.parent.children}findObjectByName(e){if(this.value===e)return this;for(const t of this.children){let n=t.findObjectByName(e);if(n)return n}}}var o=n(379),r=n.n(o),c=n(795),i=n.n(c),l=n(569),s=n.n(l),a=n(565),d=n.n(a),u=n(216),p=n.n(u),h=n(589),f=n.n(h),g=n(725),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),r()(g.Z,b);const x=g.Z&&g.Z.locals?g.Z.locals:void 0;let m=(k=-1,function(){return k+=1});var k;function v(){let e=$("<div>",{class:"d-flex justify-content-evenly"});return e.append($("<button>",{class:"flex-child grouped-checkbox-select-all btn btn-outline-fg",id:"grouped-checkbox-select-all-"+m(),css:{"font-size":"x-small"}}).text("Select All")),e.append($("<button>",{class:"flex-child grouped-checkbox-deselect-all btn btn-outline-fg",id:"grouped-checkbox-deselect-all-"+m(),css:{"font-size":"x-small"}}).text("Deselect All")),e.append($("<button>",{class:"flex-child grouped-checkbox-expand-all btn btn-outline-fg",id:"grouped-checkbox-expand-all-"+m(),css:{"font-size":"x-small"}}).text("Expand All")),e.append($("<button>",{class:"flex-child grouped-checkbox-collapse-all btn btn-outline-fg",id:"grouped-checkbox-collapse-all-"+m(),css:{"font-size":"x-small"}}).text("Collapse All")),e}function y(e,t="toggle"){const n={toggle:{show:"show",hide:"hide"},slide:{show:"slideDown",hide:"slideUp"}};let o,r=$(e);if(!(t in n))throw new Error("The animation type is not supported.");"▼"==r.text()?(r.text("▶"),r.siblings("."+x.groupedCheckboxList)[n[t].hide](),o="collapsed"):(r.text("▼"),r.siblings("."+x.groupedCheckboxList)[n[t].show](),o="expanded")}function C(e){let t=[];$("#"+e).find("input:checkbox:checked").each((function(){t.push($(this).val())})),Shiny.setInputValue(e,t,{priority:"event"})}function L(e,t,n){let o;o=t?document.getElementById("checkbox-list-"+t.htmlID):document.getElementById("grouped-checkbox-list-base");let r=m(),c="node-"+r,i=document.createElement("li"),l=document.createElement("span");if(l.classList.add("GroupedCheckBox-node","text-fg"),l.id=c,n&&l.appendChild(function(){let e=document.createElement("span");return e.classList.add(x.groupedCheckboxCaret),e.innerText="▼",e}()),l.appendChild(function(e,t){let n=document.createElement("input");return n.classList.add("grouped-checkbox-input","form-check-input"),n.type="checkbox",n.value=e,n.id="node-input-check"+t,n}(e,r)),l.appendChild(function(e,t){let n=document.createElement("label");return n.classList.add("form-check-label"),n.for="node-input-check"+t,n.innerHTML=e,n}(e,r)),n){let e=document.createElement("ul");e.classList.add(x.groupedCheckboxList),e.id="checkbox-list-"+c,l.appendChild(e)}return i.appendChild(l),o.appendChild(i),c}HTMLWidgets.widget({name:"treecheckbox",type:"output",factory:function(t,n,o){return{renderValue:function(n){(function(t,n,o,r,c,i){let l=document.getElementById(t);if(n){let e=document.createElement("h4");e.innerText=n,l.appendChild(e)}$("#"+t).append(v);let s=function(t,n){return new e(t,n)}(o,r),a=document.createElement("div");if(a.classList.add(x.groupedCheckboxNodeHolder),a.classList.add("overflow-auto"),a.classList.add("align-self-center"),l.appendChild(a),function(e,t){$(e).append($("<ul>",{class:x.groupedCheckboxList,id:"grouped-checkbox-list-base"}));let n=[];for(n.push(t.root);n.length>0;){let e,t=n.length;for(let o=0;o<t;o++){e=n.shift();for(let t of e.children)n.push(t),"root"===t.parent.value?t.htmlID=L(t.value,null,t.has_children):t.htmlID=L(t.value,t.parent,t.has_children)}}}(a,s),"boolean"==typeof c&&c)$("#"+t).find("."+x.groupedCheckboxCaret).each((function(){y(this,"toggle")}));else{"string"==typeof c&&(c=[c]);for(let e of c)y($("#"+t).find("input[value='"+e+"']").siblings("."+x.groupedCheckboxCaret),"toggle")}if("boolean"==typeof i&!0===i)$("#"+t).find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!0});else{"string"==typeof i&&(i=[i]);for(let e of i)$("#"+t).find(".grouped-checkbox-input[value='"+e+"']").prop({indeterminate:!1,checked:!0})}$(document).on("shiny:connected",(function(){!function(e){let t=$("#"+e);t.find("."+x.groupedCheckboxCaret).on("click",(function(){y(this,"toggle")})),t.find(".grouped-checkbox-input").on("click",(function(){let t=$(this);t.siblings("ul").children().find(".grouped-checkbox-input").prop("checked",t.is(":checked"));let n=[t.is(":checked")];t.parent().parent().siblings().children().children("input[type='checkbox']").each((function(){n.push($(this).is(":checked"))}));let o=[...new Set(n)],r=t.parent().parent().parent().siblings(".grouped-checkbox-input");o.length>1?r.prop({indeterminate:!0,checked:!1}):r.prop({indeterminate:!1,checked:t.is(":checked")}),C(e)})),t.find(".grouped-checkbox-select-all").on("click",(function(){t.find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!0}),C(e)})),t.find(".grouped-checkbox-deselect-all").on("click",(function(){t.find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!1}),C(e)})),t.find(".grouped-checkbox-expand-all").on("click",(function(){console.log("Clicked expand all"),t.find("."+x.groupedCheckboxCaret).each((function(){let e=$(this);"▶"==e.text()&&(e.text("▼"),e.siblings("."+x.groupedCheckboxList).show(),e.siblings("."+x.groupedCheckboxList).show())}))})),t.find(".grouped-checkbox-collapse-all").on("click",(function(){t.find("."+x.groupedCheckboxCaret).each((function(){let e=$(this);"▼"==e.text()&&(e.text("▶"),e.siblings("."+x.groupedCheckboxList).hide(),e.siblings("."+x.groupedCheckboxList).hide())}))})),C(e)}(t)}))})(t.id,n.label,n.choices,n.levels,n.collapsed,n.selected),$("#"+t.id).css("height","auto").css("width","auto")},resize:function(e,t){}}}})})()})();