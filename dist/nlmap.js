window.OpenStadComponents=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=24)}({0:function(e,t){e.exports=window.React},11:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},14:function(e,t,n){e.exports=n(16).Promise},16:function(e,t,fe){(function(ce,ue){var le;e.exports=function(){"use strict";function n(e){return typeof e==="function"||typeof e==="object"&&e!==null}function u(e){return typeof e==="function"}var e=undefined;if(!Array.isArray){e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{e=Array.isArray}var r=e,o=0,i=undefined,a=undefined,s=function e(t,n){b[o]=t;b[o+1]=n;o+=2;if(o===2){if(a){a(k)}else{C()}}};function t(e){a=e}function c(e){s=e}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ce!=="undefined"&&{}.toString.call(ce)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return ce.nextTick(k)}}function _(){return function(){i(k)}}function m(){var e=0;var t=new p(k);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;e.port1.onmessage=k;return function(){return e.port2.postMessage(0)}}function g(){var e=setTimeout;return function(){return e(k,1)}}var b=new Array(1e3);function k(){for(var e=0;e<o;e+=2){var t=b[e];var n=b[e+1];t(n);b[e]=undefined;b[e+1]=undefined}o=0}function w(){try{var e=le;var t=fe(18);i=t.runOnLoop||t.runOnContext;return _()}catch(e){return g()}}var C=undefined;if(d){C=y()}else if(p){C=m()}else if(h){C=v()}else if(l===undefined&&"function"==="function"){C=w()}else{C=g()}function E(e,t){var n=arguments;var r=this;var o=new this.constructor(A);if(o[M]===undefined){$(o)}var i=r._state;if(i){(function(){var e=n[i-1];s(function(){return Z(i,o,e,r._result)})})()}else{K(r,o,e,t)}return o}function O(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(A);U(n,e);return n}var M=Math.random().toString(36).substring(16);function A(){}var T=void 0,P=1,L=2,j=new z;function x(){return new TypeError("You cannot resolve a promise with itself")}function S(){return new TypeError("A promises callback cannot return that same promise.")}function D(e){try{return e.then}catch(e){j.error=e;return j}}function F(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function I(e,r,o){s(function(t){var n=false;var e=F(o,r,function(e){if(n){return}n=true;if(r!==e){U(t,e)}else{q(t,e)}},function(e){if(n){return}n=true;G(t,e)},"Settle: "+(t._label||" unknown promise"));if(!n&&e){n=true;G(t,e)}},e)}function R(t,e){if(e._state===P){q(t,e._result)}else if(e._state===L){G(t,e._result)}else{K(e,undefined,function(e){return U(t,e)},function(e){return G(t,e)})}}function B(e,t,n){if(t.constructor===e.constructor&&n===E&&t.constructor.resolve===O){R(e,t)}else{if(n===j){G(e,j.error)}else if(n===undefined){q(e,t)}else if(u(n)){I(e,t,n)}else{q(e,t)}}}function U(e,t){if(e===t){G(e,x())}else if(n(t)){B(e,t,D(t))}else{q(e,t)}}function N(e){if(e._onerror){e._onerror(e._result)}W(e)}function q(e,t){if(e._state!==T){return}e._result=t;e._state=P;if(e._subscribers.length!==0){s(W,e)}}function G(e,t){if(e._state!==T){return}e._state=L;e._result=t;s(N,e)}function K(e,t,n,r){var o=e._subscribers;var i=o.length;e._onerror=null;o[i]=t;o[i+P]=n;o[i+L]=r;if(i===0&&e._state){s(W,e)}}function W(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,o=undefined,i=e._result;for(var a=0;a<t.length;a+=3){r=t[a];o=t[a+n];if(r){Z(n,r,o,i)}else{o(i)}}e._subscribers.length=0}function z(){this.error=null}var H=new z;function Y(e,t){try{return e(t)}catch(e){H.error=e;return H}}function Z(e,t,n,r){var o=u(n),i=undefined,a=undefined,s=undefined,c=undefined;if(o){i=Y(n,r);if(i===H){c=true;a=i.error;i=null}else{s=true}if(t===i){G(t,S());return}}else{i=r;s=true}if(t._state!==T){}else if(o&&s){U(t,i)}else if(c){G(t,a)}else if(e===P){q(t,i)}else if(e===L){G(t,i)}}function J(n,e){try{e(function e(t){U(n,t)},function e(t){G(n,t)})}catch(e){G(n,e)}}var V=0;function X(){return V++}function $(e){e[M]=V++;e._state=undefined;e._result=undefined;e._subscribers=[]}function Q(e,t){this._instanceConstructor=e;this.promise=new e(A);if(!this.promise[M]){$(this.promise)}if(r(t)){this._input=t;this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{G(this.promise,ee())}}function ee(){return new Error("Array Methods must be provided an Array")}function te(e){return new Q(this,e).promise}function ne(o){var i=this;if(r(o))return new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)});else return new i(function(e,t){return t(new TypeError("You must pass an array to race."))})}function re(e){var t=new this(A);return G(t,e),t}function oe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ie(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ae(e){this[M]=X();this._result=this._state=undefined;this._subscribers=[];if(A!==e){typeof e!=="function"&&oe();this instanceof ae?J(this,e):ie()}}function se(){var e=undefined;if(typeof ue!=="undefined"){e=ue}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ae}return Q.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===T&&n<e;n++)this._eachEntry(t[n],n)},Q.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===O){var o=D(t);if(o===E&&t._state!==T)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===ae){var i=new n(A);B(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Q.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===T&&(this._remaining--,e===L?G(r,n):this._result[t]=n),0===this._remaining&&q(r,this._result)},Q.prototype._willSettleAt=function(e,t){var n=this;K(e,void 0,function(e){return n._settledAt(P,t,e)},function(e){return n._settledAt(L,t,e)})},ae.all=function(e){return new Q(this,e).promise},ae.race=function(o){var i=this;return r(o)?new i(function(e,t){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},ae.resolve=O,ae.reject=function(e){var t=new this(A);return G(t,e),t},ae._setScheduler=function(e){a=e},ae._setAsap=function(e){s=e},ae._asap=s,ae.prototype={constructor:ae,then:E,catch:function(e){return this.then(null,e)}},se(),ae.polyfill=se,ae.Promise=ae}()}).call(this,fe(17),fe(11))},17:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},18:function(e,t){},24:function(e,t,n){"use strict";n.r(t);n(6);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),s=(n(58),n(8));n.d(t,"default",function(){return s.a}),n.d(t,"NLMap",function(){return s.a}),s.a.renderElement=function(e,t){var n=e.attributes;a.a.render(o.a.createElement(s.a,{attributes:n,config:t}),e)}},27:function(module,__webpack_exports__,__webpack_require__){"use strict";function amapsCreateClusterIcon(cluster){var self=this,count=cluster.getChildCount();if(self.config.typeField&&self.config.types&&self.config.types.length){var _count=cluster.getChildCount(),markers=cluster.getAllChildMarkers(),colors={},total=markers.length,isFaded=!1;markers.forEach(function(entry){var type=entry.data&&eval("entry.data.".concat(self.config.typeField)),tmp=self.config.types.find(function(e){return e.name==type}),color=tmp&&tmp.color||"black";null==type&&(type="undef"),colors[color]||(colors[color]=0),colors[color]++,entry.data&&entry.data.isFaded&&(isFaded=!0)});var html='<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="white"/>',soFar=0;return Object.keys(colors).forEach(function(e){var t=e,n=100*colors[e]/total;html+='  <path\n             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"\n             fill="none"\n             transform="rotate('.concat(soFar/100*360,', 18, 18)"\n             stroke="').concat(t,'"\n             stroke-width="4"\n             stroke-dasharray="').concat(n,', 100"\n             />'),soFar+=n}),html+='<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">'+_count+"</text></svg>",L.divIcon({html:html,className:"openstad-component-ideas-on-map-icon-cluster",iconSize:L.point(36,36),iconAnchor:[18,18],isFaded:isFaded})}return L.divIcon({html:count,className:"openstad-component-ideas-on-map-icon-cluster",iconSize:L.point(20,20),iconAnchor:[20,10]})}__webpack_require__.d(__webpack_exports__,"a",function(){return amapsCreateClusterIcon})},3:function(e,t){e.exports=window.ReactDOM},5:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(i){return function(){var e,t,n,r=p(i);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}()){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return t=this,!(n=e)||"object"!==s(n)&&"function"!=typeof n?f(t):n}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,a.a.Component);var e,t,n,o=l(i);function i(n){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=f(e=o.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(e){var t=n.attributes[e];r[t.name]=t.value}),r.config=r.config||n.config,r.config)try{r.config=JSON.parse(r.config)}catch(e){}return r.divId=r.divId||r.config&&r.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[r.divId]=f(e),e}return e=i,(t=[{key:"componentDidMount",value:function(){}}])&&c(e.prototype,t),n&&c(e,n),i}()},58:function(e,t,n){},6:function(e,t,n){"use strict";(function(i){var n="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,s="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in self,a="ArrayBuffer"in self;if(a)var t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))};function u(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new i(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():a&&s&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return i.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(e,t){e=u(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[u(e)]},f.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},f.prototype.set=function(e,t){this.map[u(e)]=l(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},r&&(f.prototype[Symbol.iterator]=f.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<m.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(e){var o=new FormData;return e.trim().split("&").forEach(function(e){if(e){var t=e.split("="),n=t.shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," ");o.append(decodeURIComponent(n),decodeURIComponent(r))}}),o}function b(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},_.call(v.prototype),_.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var k=[301,302,303,307,308];b.redirect=function(e,t){if(-1===k.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})};var w=self.DOMException;try{new w}catch(e){(w=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function C(o,a){return new i(function(r,e){var t=new v(o,a);if(t.signal&&t.signal.aborted)return e(new w("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t=e.split(":"),n=t.shift().trim();if(n){var r=t.join(":").trim();o.append(n,r)}}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new b(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new w("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}C.polyfill=!0,self.fetch||(self.fetch=C,self.Headers=f,self.Request=v,self.Response=b)}).call(this,n(14))},8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentNLMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(27);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(r){return function(){var e,t=_getPrototypeOf(r);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var OpenStadComponentNLMap=function(_OpenStadComponent){_inherits(OpenStadComponentNLMap,_OpenStadComponent);var _super=_createSuper(OpenStadComponentNLMap);function OpenStadComponentNLMap(e){var t;_classCallCheck(this,OpenStadComponentNLMap);var n=_assertThisInitialized(t=_super.call(this,e)),r={target:n.divId,style:"standaard",marker:!1,search:!1,center:{latitude:52.37104644463586,longitude:4.900402911007405},zoom:14,zoomposition:"bottomleft",disableDefaultUI:!0,polygon:null,autoZoomAndCenter:!1};switch(n.config=Object.assign(r,n.config||{}),n._loadedFiles=0,n.files=[{type:"css",href:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"},{type:"script",src:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"}],n.config.variant){case"amaps":n.files.push({type:"script",src:"https://map.data.amsterdam.nl/dist/amaps.iife.js"});break;default:n.files.push({type:"css",href:"https://nlmaps.nl/dist/assets/css/nlmaps.css"}),n.files.push({type:"script",src:"https://nlmaps.nl/dist/nlmaps.iife.js"})}return n.files.push({type:"css",href:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"}),n.files.push({type:"script",src:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"}),n.markers=n.config.markers||[],t}return _createClass(OpenStadComponentNLMap,[{key:"componentDidMount",value:function(){var t=this;t.loadNextFile(function(){t.createMap();var e=new Event("mapIsReady");t.mapIsReady=!0,t.instance.dispatchEvent(e)})}},{key:"loadNextFile",value:function(e){var t,n=this,r=n.files[n._loadedFiles];r&&("script"===r.type&&((t=document.createElement("script")).src=r.src,t.async=!0),"css"===r.type&&((t=document.createElement("link")).href=r.href,t.rel="stylesheet"),t&&(t.onload=function(){n.loadNextFile(e)},this.instance.appendChild(t)));n._loadedFiles==n.files.length&&e(),n._loadedFiles++}},{key:"createMap",value:function createMap(){var self=this;switch(self.config.variant){case"amaps":self.map=amaps.createMap(self.config);break;default:self.map=nlmaps.createMap(self.config)}if(self.config.clustering&&self.config.clustering.isActive&&L.markerClusterGroup){var iconCreateFunction=self.config.clustering.iconCreateFunction||("amaps"==self.config.variant?_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__.a.bind(self):self.createClusterIcon);iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction)),self.markerClusterGroup=L.markerClusterGroup({iconCreateFunction:iconCreateFunction,showCoverageOnHover:self.config.clustering.showCoverageOnHover,maxClusterRadius:self.config.clustering.maxClusterRadius||80});var onClusterClick=self.config.clustering.onClusterClick||self.onClusterClick;"string"==typeof onClusterClick&&(onClusterClick=eval(onClusterClick)),self.markerClusterGroup.on("clusterclick",onClusterClick);var onClusterAnimationEnd=self.config.clustering.onClusterAnimationEnd||self.onClusterAnimationEnd;"string"==typeof onClusterAnimationEnd&&(onClusterAnimationEnd=eval(onClusterAnimationEnd)),self.markerClusterGroup.on("animationend",onClusterAnimationEnd),self.map.addLayer(self.markerClusterGroup)}if(self.config.onMapClick&&"string"==typeof self.config.onMapClick&&(self.config.onMapClick=eval(self.config.onMapClick)),self.map.on("click",self.config.onMapClick||self.onMapClick),self.config.polygon&&self.createCutoutPolygon(self.config.polygon),self.markers.length&&self.markers.forEach(function(e){self.addMarker(e)}),self.config.autoZoomAndCenter){var centerOn="polygon"==self.config.autoZoomAndCenter&&self.config.polygon||self.markers&&self.markers.length&&self.markers;self.editorMarker&&(centerOn=self.editorMarker.position?[self.editorMarker]:self.config.polygon),centerOn&&self.setBoundsAndCenter(centerOn)}}},{key:"addMarkers",value:function(e){var t=this;e.forEach(function(e){t.addMarker(e)})}},{key:"addMarker",value:function addMarker(markerData){var self=this,icon=markerData.icon,marker;if(!icon){var iconCreateFunction=self.config.iconCreateFunction;iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction),icon=iconCreateFunction())}marker=icon?L.marker([markerData.lat,markerData.lng],{icon:icon}):L.marker([markerData.lat,markerData.lng]),marker.visible=!0,marker.data=markerData.data,marker.doNotCluster=markerData.doNotCluster,markerData.href&&(markerData.onClick=function(){document.location.href=markerData.href});var onClick=null!=markerData.onClick&&markerData.onClick||self.config.onMarkerClick||self.onMarkerClick;return onClick&&("string"==typeof onClick&&(onClick=eval(onClick)),marker.on("click",onClick)),self.markerClusterGroup&&!markerData.doNotCluster?self.markerClusterGroup.addLayer(marker):self.map.addLayer(marker),self.markers.push(marker),marker}},{key:"removeMarker",value:function(e){if(e){var t=this.markers.indexOf(e);-1<t&&(this.markers.splice(t,1),this.map.removeLayer(e),this.markerClusterGroup.removeLayer(e))}}},{key:"updateMarker",value:function(e,t){if(t.location){var n=new L.LatLng(t.location.lat,t.location.lng);e.setLatLng(n)}}},{key:"createClusterIcon",value:function(e){var t=e.getChildCount();return L.divIcon({html:t,className:"osc-nlmap-icon-cluster",iconSize:L.point(20,20),iconAnchor:[20,10]})}},{key:"createCutoutPolygon",value:function(e){console.log(e.length);var i=L.polygon(e).getBounds().getCenter(),a=0,s=0;e.forEach(function(e,t){var n=Math.sin(e.lng-i.lng)*Math.cos(e.lat),r=Math.cos(i.lat)*Math.sin(e.lat)-Math.sin(i.lat)*Math.cos(e.lat)*Math.cos(e.lng-i.lng),o=180*Math.atan2(n,r)/Math.PI;45-o<a&&(a=45-o,s=t)});var t=e.slice(0,s);e=e.slice(s,e.length).concat(t);var n=[{lat:-85,lng:-179.99},{lat:-85,lng:0},{lat:-85,lng:179.99},{lat:0,lng:179.99},{lat:85,lng:179.99},{lat:85,lng:0},{lat:85,lng:-179.99},{lat:85,lng:-179.99},{lat:0,lng:-179.99}],r=Object.assign({color:"#d00",fillColor:"#000",fillOpacity:.15},this.config.polygonStyle),o=L.polygon([n,e],r);return this.map.addLayer(o),o}},{key:"removePolygon",value:function(e){e&&this.map.removeLayer(e)}},{key:"setBoundsAndCenter",value:function(e){var t=[];if((e=e||[]).forEach(function(e){e._latlng?e=e._latlng:e.position&&(e=e.position.coordinates?{lat:e.position.coordinates[0],lng:e.position.coordinates[1]}:e.position),t.push(e)}),1==t.length)this.map.panTo(new L.LatLng(t[0].lat,t[0].lng));else{var n=L.latLngBounds(t);this.map.fitBounds(n)}}},{key:"showMarkers",value:function(e){var t=this;e.forEach(function(e){t.showMarker(e)})}},{key:"showMarker",value:function(e){e.visible=!0,this.markerClusterGroup&&!e.doNotCluster?this.markerClusterGroup.addLayer(e):e.addTo(this.map)}},{key:"hideMarkers",value:function(e){var t=this;e.forEach(function(e){t.hideMarker(e)})}},{key:"hideMarker",value:function(e){e.visible=!1,this.markerClusterGroup&&!e.doNotCluster?this.markerClusterGroup.removeLayer(e):e.remove(this.map)}},{key:"setFilter",value:function(e){this.filterFunction=e,this.applyFilter()}},{key:"applyFilter",value:function(){var t=this;t.filterFunction?t.markers.forEach(function(e){t.filterFunction(e)?t.showMarker(e):t.hideMarker(e)}):t.markers.forEach(function(e){t.showMarker(e)})}},{key:"isPointInPolygon",value:function(e,t){var n,r=t.length-1,o=!1,i=e.lat,a=e.lng;for(n=0;n<t.length;n++)(t[n].lng<a&&t[r].lng>=a||t[r].lng<a&&t[n].lng>=a)&&t[n].lat+(a-t[n].lng)/(t[r].lng-t[n].lng)*(t[r].lat-t[n].lat)<i&&(o=!o),r=n;return o}},{key:"getPointInfo",value:function(r,o,i){var e="https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=[[lat]],[[lng]],50".replace(/\[\[lat\]\]/,(r=r||{}).lat).replace(/\[\[lng\]\]/,r.lng);fetch(e).then(function(e){return e.json()}).then(function(e){var t=e&&e.results&&e.results[0]&&e.results[0].landelijk_id,n="https://api.data.amsterdam.nl/bag/nummeraanduiding/[[id]]/?format=json".replace(/\[\[id\]\]/,t);fetch(n).then(function(e){return e.json()}).then(function(e){e.lat=r.lat,e.lng=r.lng,i&&i(e,o)})}).catch(function(e){console.log("Zoek adres: niet goed"),console.log(e),i&&i({},o)})}},{key:"onMapClick",value:function(){}},{key:"onMarkerClick",value:function(){}},{key:"onClusterClick",value:function(){}},{key:"onClusterAnimationEnd",value:function(){}},{key:"render",value:function(){var t=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId,className:this.props.className||"osc-nlmap",ref:function(e){return t.instance=e}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId+"-map"}))}}]),OpenStadComponentNLMap}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__.a)}});