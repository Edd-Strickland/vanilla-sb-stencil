var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="vanilla-demo";var a=0;var i=false;var s;var o;var l=window;var f=document;var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var c=function(){return!!f.documentElement.attachShadow}();var $=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v=new WeakMap;var h=function(e){return v.get(e)};var d=e("r",(function(e,t){return v.set(t.$lazyInstance$=e,t)}));var m=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return v.set(e,t)};var p=function(e){return console.error(e)};var g=new Map;var y=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=g.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{g.set(i,e)}return e[a]}),p)};var w=new Map;var b=[];var _=[];var S=[];var R=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&u.$flags$&4){C(E)}else{u.raf(E)}}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){p(r)}}e.length=0};var j=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){p(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var E=function(){a++;x(b);var e=(u.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(_,e);j(S,e);if(_.length>0){S.push.apply(S,_);_.length=0}if(i=b.length+_.length+S.length>0){u.raf(E)}else{a=0}};var C=function(e){return Promise.resolve().then(e)};var N=R(_,true);var L=function(e){return e!=null};var U=function(e){e=typeof e;return e==="object"||e==="function"};var O=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var P=function(e,t){if(t===void 0){t=""}{return function(){return}}};var A=function(e,t){{return function(){return}}};var k=e("a",(function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return t.import("./p-a614138e.system.js").then((function(){u.$cssShim$=l.__stencil_cssshim;if(u.$cssShim$){return u.$cssShim$.initShim()}}))}return Promise.resolve()}));var M=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{u.$cssShim$=l.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(f.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));B(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var B=function(e){var t=O(n);try{l[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;l[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=f.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(l[t].m);s.remove()}}));r.set(a,i);f.head.appendChild(s)}return i}}};var I=function(e,t){if(e!=null&&!U(e)){if(t&1){return String(e)}return e}return e};var T="hydrated";var H=new WeakMap;var z=function(e,t,r){var n=w.get(e);if($&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}w.set(e,n)};var q=function(e,t,r,n){var a=F(t.$tagName$);var i=w.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var s=H.get(e);var o=void 0;if(!s){H.set(e,s=new Set)}if(!s.has(a)){{if(u.$cssShim$){o=u.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=f.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var V=function(e,t,r){var n=P("attachStyles",t.$tagName$);var a=q(c&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var F=function(e,t){return"sc-"+e};var W=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!U(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?G(null,a):a)}s=i}}};l(r);var f=G(e,null);f.$attrs$=t;if(o.length>0){f.$children$=o}return f}));var G=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return r};var Q={};var D=function(e){return e&&e.$tag$===Q};var J=function(e,t,r,n){var a=t.$children$[r];var i=0;var o;var l;if(a.$text$!==null){o=a.$elm$=f.createTextNode(a.$text$)}else{o=a.$elm$=f.createElement(a.$tag$);if(L(s)&&o["s-si"]!==s){o.classList.add(o["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=J(e,a,i);if(l){o.appendChild(l)}}}}return o};var K=function(e,t,r,n,a,i){var s=e;var l;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){l=J(null,r,a);if(l){n[a].$elm$=l;s.insertBefore(l,t)}}}};var X=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;a.remove()}}};var Y=function(e,t,r,n){var a=0;var i=0;var s=t.length-1;var o=t[0];var l=t[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&i<=f){if(o==null){o=t[++a]}else if(l==null){l=t[--s]}else if(u==null){u=n[++i]}else if(c==null){c=n[--f]}else if(Z(o,u)){ee(o,u);o=t[++a];u=n[++i]}else if(Z(l,c)){ee(l,c);l=t[--s];c=n[--f]}else if(Z(o,c)){ee(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=t[++a];c=n[--f]}else if(Z(l,u)){ee(l,u);e.insertBefore(l.$elm$,o.$elm$);l=t[--s];u=n[++i]}else{{$=J(t&&t[i],r,i);u=n[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){K(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){X(t,a,s)}};var Z=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var ee=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(t.$text$===null){if(n!==null&&a!==null){Y(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}K(r,null,t,a,0,a.length-1)}else if(n!==null){X(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.data=t.$text$}};var te=function(e,t,r,n){o=e.tagName;var a=t.$vnode$||G(null,null);var i=D(n)?n:W(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}ee(a,i)};var re=function(e,t){if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ne=function(e,t,r,n){{t.$flags$|=16}if(t.$flags$&4){t.$flags$|=512;return}var a=P("scheduleUpdate",r.$tagName$);var i=t.$ancestorComponent$;var s=t.$lazyInstance$;var o=function(){return ae(e,t,r,s,n)};re(t,i);var l;a();return le(l,(function(){return N(o)}))};var ae=function(e,t,r,n,a){var i=P("update",r.$tagName$);var s=e["s-rc"];if(a){V(e,r,t.$modeName$)}var o=P("render",r.$tagName$);{{try{te(e,t,r,n.render())}catch(c){p(c)}}}if(u.$cssShim$){u.$cssShim$.updateHost(e)}{t.$flags$&=~16}{t.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var f=function(){return ie(e,t,r)};if(l.length===0){f()}else{Promise.all(l).then(f);t.$flags$|=4;l.length=0}}};var ie=function(e,t,r){var n=P("postUpdate",r.$tagName$);var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(T)}n();{t.$onReadyResolve$(e);if(!a){oe()}}}else{n()}{if(t.$onRenderResolve$){t.$onRenderResolve$();t.$onRenderResolve$=undefined}if(t.$flags$&512){C((function(){return ne(e,t,r,false)}))}t.$flags$&=~(4|512)}};var se=function(e,t){{var r=h(e);if((r.$flags$&(2|16))===2){ne(e,r,t,false)}}};var oe=function(e){{f.documentElement.classList.add(T)}{u.$flags$|=2}};var le=function(e,t){return e&&e.then?e.then(t):t()};var fe=function(e,t){return h(e).$instanceValues$.get(t)};var ue=function(e,t,r,n){var a=h(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;r=I(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(l){if((o&(2|16))===2){ne(i,a,n,false)}}}};var ce=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return fe(this,n)},set:function(e){ue(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;u.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n}))}}return e};var $e=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,o,l,f,u,c;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=y(a);if(!s.then)return[3,2];r=A();return[4,s];case 1:s=$.sent();r();$.label=2;case 2:if(!s.isProxied){ce(s,a,2);s.isProxied=true}i=P("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){p(v)}{n.$flags$&=~8}i();o=F(a.$tagName$);if(!(!w.has(o)&&s.style))return[3,5];l=P("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=$.sent();$.label=4;case 4:z(o,f,!!(a.$flags$&1));l();$.label=5;case 5:u=n.$ancestorComponent$;c=function(){return ne(e,n,a,true)};if(u&&u["s-rc"]){u["s-rc"].push(c)}else{c()}return[2]}}))}))};var ve=function(e,t){if((u.$flags$&1)===0){var r=P("connectedCallback",t.$tagName$);var n=h(e);if(!(n.$flags$&1)){n.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){re(n,n.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{C((function(){return $e(e,n,t)}))}}r()}};var he=function(e){if((u.$flags$&1)===0){var t=h(e);if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var de=e("b",(function(e,t){if(t===void 0){t={}}var r=P();var n=[];var a=t.exclude||[];var i=f.head;var s=l.customElements;var o=i.querySelector("meta[charset]");var $=f.createElement("style");var v=[];var d;var p=true;Object.assign(u,t);u.$resourcesUrl$=new URL(t.resourcesUrl||"./",f.baseURI).href;if(t.syncQueue){u.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}if(!c&&r.$flags$&1){r.$flags$|=8}var i=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;m(t);if(r.$flags$&1){if(c){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(d){clearTimeout(d);d=null}if(p){v.push(this)}else{u.jmp((function(){return ve(e,r)}))}};t.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return he(e)}))};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){se(this,r)};t.prototype.componentOnReady=function(){return h(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,ce(o,r,1))}}))}));$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");i.insertBefore($,o?o.nextSibling:i.firstChild);p=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{u.jmp((function(){return d=setTimeout(oe,30,"timeout")}))}r()}))}}}));