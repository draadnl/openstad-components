window.OpenStadComponents=function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=24)}({0:function(t,e){t.exports=window.React},1:function(t,e,r){(function(t){function c(t,e){if("object"!==f(t))return e;for(var r in e)"object"===f(t[r])&&"object"===f(e[r])?t[r]=c(t[r],e[r]):t[r]=e[r];return t}function e(t,e,r){var n=r[0],o=r.length;!t&&"object"===f(n)||(n={});for(var i=0;i<o;++i){var s=r[i];if("object"===f(s))for(var u in s)if("__proto__"!==u){var a=t?l.clone(s[u]):s[u];n[u]=e?c(n[u],a):a}}return n}function f(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}var r,l;r=t&&"object"==typeof t.exports&&t.exports,(l=function(t){return e(!0===t,!1,arguments)}).recursive=function(t){return e(!0===t,!0,arguments)},l.clone=function(t){var e,r,n=t,o=f(t);if("array"===o)for(n=[],r=t.length,e=0;e<r;++e)n[e]=l.clone(t[e]);else if("object"===o)for(e in n={},t)n[e]=l.clone(t[e]);return n},r?t.exports=l:window.merge=l}).call(this,r(30)(t))},13:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},15:function(t,e,r){t.exports=r(20).Promise},20:function(t,e,lt){(function(at,ct){var ft;t.exports=function(){"use strict";function r(t){return typeof t==="function"||typeof t==="object"&&t!==null}function c(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var n=t,o=0,i=undefined,s=undefined,u=function t(e,r){_[o]=e;_[o+1]=r;o+=2;if(o===2){if(s){s(g)}else{T()}}};function e(t){s=t}function a(t){u=t}var f=typeof window!=="undefined"?window:undefined,l=f||{},h=l.MutationObserver||l.WebKitMutationObserver,p=typeof self==="undefined"&&typeof at!=="undefined"&&{}.toString.call(at)==="[object process]",d=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return at.nextTick(g)}}function b(){return function(){i(g)}}function v(){var t=0;var e=new h(g);var r=document.createTextNode("");e.observe(r,{characterData:true});return function(){r.data=t=++t%2}}function m(){var t=new MessageChannel;t.port1.onmessage=g;return function(){return t.port2.postMessage(0)}}function w(){var t=setTimeout;return function(){return t(g,1)}}var _=new Array(1e3);function g(){for(var t=0;t<o;t+=2){var e=_[t];var r=_[t+1];e(r);_[t]=undefined;_[t+1]=undefined}o=0}function A(){try{var t=ft;var e=lt(22);i=e.runOnLoop||e.runOnContext;return b()}catch(t){return w()}}var T=undefined;if(p){T=y()}else if(h){T=v()}else if(d){T=m()}else if(f===undefined&&"function"==="function"){T=A()}else{T=w()}function x(t,e){var r=arguments;var n=this;var o=new this.constructor(O);if(o[j]===undefined){Q(o)}var i=n._state;if(i){(function(){var t=r[i-1];u(function(){return z(i,o,t,n._result)})})()}else{G(n,o,t,e)}return o}function E(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var r=new e(O);M(r,t);return r}var j=Math.random().toString(36).substring(16);function O(){}var S=void 0,P=1,B=2,U=new Y;function R(){return new TypeError("You cannot resolve a promise with itself")}function L(){return new TypeError("A promises callback cannot return that same promise.")}function C(t){try{return t.then}catch(t){U.error=t;return U}}function k(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function D(t,n,o){u(function(e){var r=false;var t=k(o,n,function(t){if(r){return}r=true;if(n!==t){M(e,t)}else{q(e,t)}},function(t){if(r){return}r=true;H(e,t)},"Settle: "+(e._label||" unknown promise"));if(!r&&t){r=true;H(e,t)}},t)}function F(e,t){if(t._state===P){q(e,t._result)}else if(t._state===B){H(e,t._result)}else{G(t,undefined,function(t){return M(e,t)},function(t){return H(e,t)})}}function I(t,e,r){if(e.constructor===t.constructor&&r===x&&e.constructor.resolve===E){F(t,e)}else{if(r===U){H(t,U.error)}else if(r===undefined){q(t,e)}else if(c(r)){D(t,e,r)}else{q(t,e)}}}function M(t,e){if(t===e){H(t,R())}else if(r(e)){I(t,e,C(e))}else{q(t,e)}}function N(t){if(t._onerror){t._onerror(t._result)}V(t)}function q(t,e){if(t._state!==S){return}t._result=e;t._state=P;if(t._subscribers.length!==0){u(V,t)}}function H(t,e){if(t._state!==S){return}t._state=B;t._result=e;u(N,t)}function G(t,e,r,n){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+P]=r;o[i+B]=n;if(i===0&&t._state){u(V,t)}}function V(t){var e=t._subscribers;var r=t._state;if(e.length===0){return}var n=undefined,o=undefined,i=t._result;for(var s=0;s<e.length;s+=3){n=e[s];o=e[s+r];if(n){z(r,n,o,i)}else{o(i)}}t._subscribers.length=0}function Y(){this.error=null}var K=new Y;function X(t,e){try{return t(e)}catch(t){K.error=t;return K}}function z(t,e,r,n){var o=c(r),i=undefined,s=undefined,u=undefined,a=undefined;if(o){i=X(r,n);if(i===K){a=true;s=i.error;i=null}else{u=true}if(e===i){H(e,L());return}}else{i=n;u=true}if(e._state!==S){}else if(o&&u){M(e,i)}else if(a){H(e,s)}else if(t===P){q(e,i)}else if(t===B){H(e,i)}}function J(r,t){try{t(function t(e){M(r,e)},function t(e){H(r,e)})}catch(t){H(r,t)}}var W=0;function $(){return W++}function Q(t){t[j]=W++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Z(t,e){this._instanceConstructor=t;this.promise=new t(O);if(!this.promise[j]){Q(this.promise)}if(n(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{H(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Z(this,t).promise}function rt(o){var i=this;if(n(o))return new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function nt(t){var e=new this(O);return H(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function st(t){this[j]=$();this._result=this._state=undefined;this._subscribers=[];if(O!==t){typeof t!=="function"&&ot();this instanceof st?J(this,t):it()}}function ut(){var t=undefined;if(typeof ct!=="undefined"){t=ct}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if(r==="[object Promise]"&&!e.cast){return}}t.Promise=st}return Z.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===S&&r<t;r++)this._eachEntry(e[r],r)},Z.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===E){var o=C(e);if(o===x&&e._state!==S)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===st){var i=new r(O);I(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},Z.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===S&&(this._remaining--,t===B?H(n,r):this._result[e]=r),0===this._remaining&&q(n,this._result)},Z.prototype._willSettleAt=function(t,e){var r=this;G(t,void 0,function(t){return r._settledAt(P,e,t)},function(t){return r._settledAt(B,e,t)})},st.all=function(t){return new Z(this,t).promise},st.race=function(o){var i=this;return n(o)?new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},st.resolve=E,st.reject=function(t){var e=new this(O);return H(e,t),e},st._setScheduler=function(t){s=t},st._setAsap=function(t){u=t},st._asap=u,st.prototype={constructor:st,then:x,catch:function(t){return this.then(null,t)}},ut(),st.polyfill=ut,st.Promise=st}()}).call(this,lt(21),lt(13))},21:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var a,c=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&p())}function p(){if(!f){var t=u(h);f=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},22:function(t,e){},24:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return d}),r.d(e,"PreviousNextButtonBlock",function(){return d});r(7);var n=r(0),s=r.n(n),o=r(3),i=r.n(o),u=(r(55),r(1)),a=r.n(u);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(i){return function(){var t,e,r,n=p(i);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(t){return}}()){var o=p(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return e=this,!(r=t)||"object"!==c(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,s.a.Component);var t,e,r,n=h(o);function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=n.call(this,t)).defaultConfig={previousAction:t.previousAction,nextAction:t.nextAction,previousUrl:t.previousUrl,nextUrl:t.nextUrl,previousLabel:t.previousLabel||"Vorige",nextLabel:t.nextLabel||"Volgende"},e.config=a.a.recursive(e.defaultConfig,e.config,t.config||{}),e}return t=o,(e=[{key:"render",value:function(){var t,e,r=this,n=this,o=this.config.previousAction;this.config.previousUrl&&(o=function(){document.location.href="".concat(r.config.previousUrl)}),o&&(t=s.a.createElement("div",{className:"osc-previous-button",onClick:function(t){o(t)}},this.config.previousLabel));var i=this.config.nextAction;return this.config.nextUrl&&(i=function(){document.location.href="".concat(r.config.nextUrl)}),i&&(e=s.a.createElement("div",{className:"osc-next-button",onClick:function(t){i(t)}},this.config.nextLabel)),s.a.createElement("div",{className:"osc-previous-next-button-block",ref:function(t){return n.instance=t}},t,e)}}])&&f(t.prototype,e),r&&f(t,r),o}();d.renderElement=function(t,e){var r=t.attributes;i.a.render(s.a.createElement(d,{attributes:r,config:e}),t)}},3:function(t,e){t.exports=window.ReactDOM},30:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},55:function(t,e,r){},7:function(t,e,r){"use strict";(function(i){var r="URLSearchParams"in self,n="Symbol"in self&&"iterator"in Symbol,u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in self,s="ArrayBuffer"in self;if(s)var e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(r){return new i(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function d(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&u&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=h(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=c(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=f(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},n&&(l.prototype[Symbol.iterator]=l.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var r,n,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),-1<v.indexOf(n)?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function _(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},b.call(m.prototype),b.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];_.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})};var A=self.DOMException;try{new A}catch(t){(A=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),A.prototype.constructor=A}function T(o,s){return new i(function(n,t){var e=new m(o,s);if(e.signal&&e.signal.aborted)return t(new A("Aborted","AbortError"));var i=new XMLHttpRequest;function r(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();o.append(r,n)}}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;n(new _(r,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new A("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&u&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",r),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",r)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}T.polyfill=!0,self.fetch||(self.fetch=T,self.Headers=l,self.Request=m,self.Response=_)}).call(this,r(15))}});