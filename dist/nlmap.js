window.OpenStadComponents=function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=34)}({0:function(t,e){t.exports=window.React},11:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},13:function(t,e,n){t.exports=n(17).Promise},15:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentNLMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(56);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(r){return function(){var t,e=_getPrototypeOf(r);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(t){return}}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var OpenStadComponentNLMap=function(_OpenStadComponent){_inherits(OpenStadComponentNLMap,_OpenStadComponent);var _super=_createSuper(OpenStadComponentNLMap);function OpenStadComponentNLMap(t){var e;_classCallCheck(this,OpenStadComponentNLMap);var n=_assertThisInitialized(e=_super.call(this,t)),r={target:n.divId,style:"standaard",marker:!1,search:!1,center:{latitude:52.37104644463586,longitude:4.900402911007405},zoom:14,zoomposition:"bottomleft",disableDefaultUI:!0,polygon:null,autoZoomAndCenter:!1};switch(n.config=Object.assign(r,n.config||{}),n._loadedFiles=0,n.files=[{type:"css",href:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"},{type:"script",src:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"}],n.config.variant){case"amaps":n.files.push({type:"script",src:"https://map.data.amsterdam.nl/dist/amaps.iife.js"});break;default:n.files.push({type:"css",href:"https://nlmaps.nl/dist/assets/css/nlmaps.css"}),n.files.push({type:"script",src:"https://nlmaps.nl/dist/nlmaps.iife.js"})}return n.files.push({type:"css",href:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"}),n.files.push({type:"script",src:"https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"}),n.markers=n.config.markers||[],e}return _createClass(OpenStadComponentNLMap,[{key:"componentDidMount",value:function(){var e=this;e.loadNextFile(function(){e.createMap(),e.mapIsReady=!0;var t=new CustomEvent("osc-map-is-ready",{detail:{id:e.divId}});document.dispatchEvent(t)})}},{key:"loadNextFile",value:function(t){var e,n=this,r=n.files[n._loadedFiles];r&&("script"===r.type&&((e=document.createElement("script")).src=r.src,e.async=!0),"css"===r.type&&((e=document.createElement("link")).href=r.href,e.rel="stylesheet"),e&&(e.onload=function(){n.loadNextFile(t)},this.instance.appendChild(e)));n._loadedFiles==n.files.length&&t(),n._loadedFiles++}},{key:"createMap",value:function createMap(){var self=this;switch(self.config.variant){case"amaps":self.map=amaps.createMap(self.config);break;default:self.map=nlmaps.createMap(self.config)}if(self.config.clustering&&self.config.clustering.isActive&&L.markerClusterGroup){var iconCreateFunction=self.config.clustering.iconCreateFunction||_lib_amaps_cluster_icon_js__WEBPACK_IMPORTED_MODULE_3__.a.bind(self);iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction)),self.markerClusterGroup=L.markerClusterGroup({iconCreateFunction:iconCreateFunction,showCoverageOnHover:self.config.clustering.showCoverageOnHover,maxClusterRadius:self.config.clustering.maxClusterRadius||80}),self.markerClusterGroup.on("clusterclick",self.onClusterClick),self.markerClusterGroup.on("animationend",self.onClusterAnimationEnd),self.map.addLayer(self.markerClusterGroup)}if(self.map.on("click",self.onMapClick),self.config.polygon&&self.createCutoutPolygon(self.config.polygon),self.markers.length&&self.markers.forEach(function(t){self.addMarker(t)}),self.config.autoZoomAndCenter){var centerOn="polygon"==self.config.autoZoomAndCenter&&self.config.polygon||self.markers&&self.markers.length&&self.markers;self.editorMarker&&(centerOn=self.editorMarker.position?[self.editorMarker]:self.config.polygon),centerOn&&self.setBoundsAndCenter(centerOn)}}},{key:"addMarkers",value:function(t){var e=this;t.forEach(function(t){e.addMarker(t)})}},{key:"addMarker",value:function addMarker(markerData){var self=this,icon=markerData.icon,marker;if(!icon){var iconCreateFunction=self.config.iconCreateFunction;iconCreateFunction&&"string"==typeof iconCreateFunction&&(iconCreateFunction=eval(iconCreateFunction),icon=iconCreateFunction())}marker=icon?L.marker([markerData.lat,markerData.lng],{icon:icon}):L.marker([markerData.lat,markerData.lng]),marker.visible=!0,marker.data=markerData.data,marker.doNotCluster=markerData.doNotCluster,markerData.href&&(markerData.onClick=function(){document.location.href=markerData.href});var onClick=self.onMarkerClick;return onClick&&("string"==typeof onClick&&(onClick=eval(onClick)),marker.on("click",onClick)),self.markerClusterGroup&&!markerData.doNotCluster?self.markerClusterGroup.addLayer(marker):self.map.addLayer(marker),self.markers.push(marker),marker}},{key:"removeMarker",value:function(t){if(t){var e=this.markers.indexOf(t);-1<e&&(this.markers.splice(e,1),this.map.removeLayer(t),this.markerClusterGroup.removeLayer(t))}}},{key:"updateMarker",value:function(t,e){if(e.location){var n=new L.LatLng(e.location.lat,e.location.lng);t.setLatLng(n)}}},{key:"createClusterIcon",value:function(t){var e=t.getChildCount();return L.divIcon({html:e,className:"osc-nlmap-icon-cluster",iconSize:L.point(20,20),iconAnchor:[20,10]})}},{key:"createCutoutPolygon",value:function(t){var i=L.polygon(t).getBounds().getCenter(),a=0,s=0;t.forEach(function(t,e){var n=Math.sin(t.lng-i.lng)*Math.cos(t.lat),r=Math.cos(i.lat)*Math.sin(t.lat)-Math.sin(i.lat)*Math.cos(t.lat)*Math.cos(t.lng-i.lng),o=180*Math.atan2(n,r)/Math.PI;45-o<a&&(a=45-o,s=e)});var e=t.slice(0,s);t=t.slice(s,t.length).concat(e);var n=[{lat:-85,lng:-179.99},{lat:-85,lng:0},{lat:-85,lng:179.99},{lat:0,lng:179.99},{lat:85,lng:179.99},{lat:85,lng:0},{lat:85,lng:-179.99},{lat:85,lng:-179.99},{lat:0,lng:-179.99}],r=Object.assign({color:"#d00",fillColor:"#000",fillOpacity:.15},this.config.polygonStyle),o=L.polygon([n,t],r);return this.map.addLayer(o),o}},{key:"removePolygon",value:function(t){t&&this.map.removeLayer(t)}},{key:"setBoundsAndCenter",value:function(t){var e=this;if(Array.isArray(t)){var n=[];if(t.forEach(function(t){t._latlng?t=t._latlng:t.position&&(t=t.position.coordinates?{lat:t.position.coordinates[0],lng:t.position.coordinates[1]}:t.position),n.push(t)}),1==n.length)e.map.panTo(new L.LatLng(n[0].lat,n[0].lng));else{var r=L.latLngBounds(n);e.map.fitBounds(r)}}else e.map.panTo(new L.LatLng(e.config.center.latitude,e.config.center.longitude))}},{key:"showMarkers",value:function(t){var e=this;t.forEach(function(t){e.showMarker(t)})}},{key:"showMarker",value:function(t){t.visible=!0,this.markerClusterGroup&&!t.doNotCluster?this.markerClusterGroup.addLayer(t):t.addTo(this.map)}},{key:"hideMarkers",value:function(t){var e=this;t.forEach(function(t){e.hideMarker(t)})}},{key:"hideMarker",value:function(t){t.visible=!1,this.markerClusterGroup&&!t.doNotCluster?this.markerClusterGroup.removeLayer(t):t.remove(this.map)}},{key:"setFilter",value:function(t){this.filterFunction=t,this.applyFilter()}},{key:"applyFilter",value:function(){var e=this;e.filterFunction?e.markers.forEach(function(t){e.filterFunction(t)?e.showMarker(t):e.hideMarker(t)}):e.markers.forEach(function(t){e.showMarker(t)})}},{key:"isPointInPolygon",value:function(t,e){if(console.log("isPointInPolygon",t,e),!t)return!1;if(!e)return!0;for(var n=t.lat,r=t.lng,o=!1,i=0,a=e.length-1;i<e.length;a=i++){var s=e[i].lat,c=e[i].lng,u=e[a].lat,l=e[a].lng;r<c!=r<l&&n<(u-s)*(r-c)/(l-c)+s&&(o=!o)}return console.log(o),o}},{key:"getPointInfo",value:function(r,o,i){var t="https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=[[lat]],[[lng]],50".replace(/\[\[lat\]\]/,(r=r||{}).lat).replace(/\[\[lng\]\]/,r.lng);fetch(t).then(function(t){return t.json()}).then(function(t){var e=t&&t.results&&t.results[0]&&t.results[0].landelijk_id,n="https://api.data.amsterdam.nl/bag/nummeraanduiding/[[id]]/?format=json".replace(/\[\[id\]\]/,e);fetch(n).then(function(t){return t.json()}).then(function(t){t.lat=r.lat,t.lng=r.lng,i&&i(t,o)})}).catch(function(t){console.log("Zoek adres: niet goed"),console.log(t),i&&i({},o)})}},{key:"onMapClick",value:function(t){var e=new CustomEvent("osc-map-click",{detail:t});document.dispatchEvent(e)}},{key:"onMarkerClick",value:function(t){var e=new CustomEvent("osc-map-marker-click",{detail:t});document.dispatchEvent(e)}},{key:"onClusterClick",value:function(t){var e=new CustomEvent("osc-map-cluster-click",{detail:t});document.dispatchEvent(e)}},{key:"onClusterAnimationEnd",value:function(t){var e=new CustomEvent("osc-map-cluster-animation-end",{detail:t});document.dispatchEvent(e)}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId,className:this.props.className||"osc-nlmap",ref:function(t){return e.instance=t}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:this.divId+"-map"}))}}]),OpenStadComponentNLMap}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_2__.a)},17:function(t,e,ft){(function(ct,ut){var lt;t.exports=function(){"use strict";function n(t){return typeof t==="function"||typeof t==="object"&&t!==null}function u(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var r=t,o=0,i=undefined,a=undefined,s=function t(e,n){g[o]=e;g[o+1]=n;o+=2;if(o===2){if(a){a(w)}else{C()}}};function e(t){a=t}function c(t){s=t}var l=typeof window!=="undefined"?window:undefined,f=l||{},p=f.MutationObserver||f.WebKitMutationObserver,d=typeof self==="undefined"&&typeof ct!=="undefined"&&{}.toString.call(ct)==="[object process]",h=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return ct.nextTick(w)}}function _(){return function(){i(w)}}function m(){var t=0;var e=new p(w);var n=document.createTextNode("");e.observe(n,{characterData:true});return function(){n.data=t=++t%2}}function v(){var t=new MessageChannel;t.port1.onmessage=w;return function(){return t.port2.postMessage(0)}}function b(){var t=setTimeout;return function(){return t(w,1)}}var g=new Array(1e3);function w(){for(var t=0;t<o;t+=2){var e=g[t];var n=g[t+1];e(n);g[t]=undefined;g[t+1]=undefined}o=0}function k(){try{var t=lt;var e=ft(19);i=e.runOnLoop||e.runOnContext;return _()}catch(t){return b()}}var C=undefined;if(d){C=y()}else if(p){C=m()}else if(h){C=v()}else if(l===undefined&&"function"==="function"){C=k()}else{C=b()}function E(t,e){var n=arguments;var r=this;var o=new this.constructor(A);if(o[M]===undefined){$(o)}var i=r._state;if(i){(function(){var t=n[i-1];s(function(){return Z(i,o,t,r._result)})})()}else{K(r,o,t,e)}return o}function O(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var n=new e(A);U(n,t);return n}var M=Math.random().toString(36).substring(16);function A(){}var T=void 0,P=1,L=2,j=new H;function x(){return new TypeError("You cannot resolve a promise with itself")}function S(){return new TypeError("A promises callback cannot return that same promise.")}function D(t){try{return t.then}catch(t){j.error=t;return j}}function F(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function I(t,r,o){s(function(e){var n=false;var t=F(o,r,function(t){if(n){return}n=true;if(r!==t){U(e,t)}else{q(e,t)}},function(t){if(n){return}n=true;G(e,t)},"Settle: "+(e._label||" unknown promise"));if(!n&&t){n=true;G(e,t)}},t)}function R(e,t){if(t._state===P){q(e,t._result)}else if(t._state===L){G(e,t._result)}else{K(t,undefined,function(t){return U(e,t)},function(t){return G(e,t)})}}function B(t,e,n){if(e.constructor===t.constructor&&n===E&&e.constructor.resolve===O){R(t,e)}else{if(n===j){G(t,j.error)}else if(n===undefined){q(t,e)}else if(u(n)){I(t,e,n)}else{q(t,e)}}}function U(t,e){if(t===e){G(t,x())}else if(n(e)){B(t,e,D(e))}else{q(t,e)}}function N(t){if(t._onerror){t._onerror(t._result)}W(t)}function q(t,e){if(t._state!==T){return}t._result=e;t._state=P;if(t._subscribers.length!==0){s(W,t)}}function G(t,e){if(t._state!==T){return}t._state=L;t._result=e;s(N,t)}function K(t,e,n,r){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+P]=n;o[i+L]=r;if(i===0&&t._state){s(W,t)}}function W(t){var e=t._subscribers;var n=t._state;if(e.length===0){return}var r=undefined,o=undefined,i=t._result;for(var a=0;a<e.length;a+=3){r=e[a];o=e[a+n];if(r){Z(n,r,o,i)}else{o(i)}}t._subscribers.length=0}function H(){this.error=null}var z=new H;function Y(t,e){try{return t(e)}catch(t){z.error=t;return z}}function Z(t,e,n,r){var o=u(n),i=undefined,a=undefined,s=undefined,c=undefined;if(o){i=Y(n,r);if(i===z){c=true;a=i.error;i=null}else{s=true}if(e===i){G(e,S());return}}else{i=r;s=true}if(e._state!==T){}else if(o&&s){U(e,i)}else if(c){G(e,a)}else if(t===P){q(e,i)}else if(t===L){G(e,i)}}function J(n,t){try{t(function t(e){U(n,e)},function t(e){G(n,e)})}catch(t){G(n,t)}}var V=0;function X(){return V++}function $(t){t[M]=V++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Q(t,e){this._instanceConstructor=t;this.promise=new t(A);if(!this.promise[M]){$(this.promise)}if(r(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{G(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Q(this,t).promise}function nt(o){var i=this;if(r(o))return new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function rt(t){var e=new this(A);return G(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[M]=X();this._result=this._state=undefined;this._subscribers=[];if(A!==t){typeof t!=="function"&&ot();this instanceof at?J(this,t):it()}}function st(){var t=undefined;if(typeof ut!=="undefined"){t=ut}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if(n==="[object Promise]"&&!e.cast){return}}t.Promise=at}return Q.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===T&&n<t;n++)this._eachEntry(e[n],n)},Q.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===O){var o=D(e);if(o===E&&e._state!==T)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===at){var i=new n(A);B(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},Q.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===T&&(this._remaining--,t===L?G(r,n):this._result[e]=n),0===this._remaining&&q(r,this._result)},Q.prototype._willSettleAt=function(t,e){var n=this;K(t,void 0,function(t){return n._settledAt(P,e,t)},function(t){return n._settledAt(L,e,t)})},at.all=function(t){return new Q(this,t).promise},at.race=function(o){var i=this;return r(o)?new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},at.resolve=O,at.reject=function(t){var e=new this(A);return G(e,t),e},at._setScheduler=function(t){a=t},at._setAsap=function(t){s=t},at._asap=s,at.prototype={constructor:at,then:E,catch:function(t){return this.then(null,t)}},st(),at.polyfill=st,at.Promise=at}()}).call(this,ft(18),ft(11))},18:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var t=s(p);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},19:function(t,e){},3:function(t,e){t.exports=window.ReactDOM},34:function(t,e,n){"use strict";n.r(e);n(6);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),s=(n(93),n(15));n.d(e,"default",function(){return s.a}),n.d(e,"NLMap",function(){return s.a}),s.a.renderElement=function(t,e){var n=t.attributes;a.a.render(o.a.createElement(s.a,{attributes:n,config:e}),t)}},4:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),a=n.n(r);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(i){return function(){var t,e,n,r=p(i);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(t){return}}()){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return e=this,!(n=t)||"object"!==s(n)&&"function"!=typeof n?f(e):n}}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var o=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(i,a.a.Component);var t,e,n,o=l(i);function i(n){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var r=f(t=o.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(t){var e=n.attributes[t];r[e.name]=e.value}),r.config=r.config||n.config,r.config)try{r.config=JSON.parse(r.config)}catch(t){}return r.divId=r.divId||r.config&&r.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[r.divId]=f(t),t}return t=i,(e=[{key:"componentDidMount",value:function(){}}])&&c(t.prototype,e),n&&c(t,n),i}()},56:function(module,__webpack_exports__,__webpack_require__){"use strict";function amapsCreateClusterIcon(cluster){var self=this,count=cluster.getChildCount(),markers=cluster.getAllChildMarkers(),colors={},total=markers.length,isFaded=!1;markers.forEach(function(entry){var type=entry.data&&eval("entry.data.".concat(self.config.typeField)),tmp=self.config.types.find(function(t){return t.name==type}),color=tmp&&tmp.color||"#164995";null==type&&(type="undef"),colors[color]||(colors[color]=0),colors[color]++,entry.data&&entry.data.isFaded&&(isFaded=!0)});var html='<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="white"/>',soFar=0;return Object.keys(colors).forEach(function(t){var e=t,n=100*colors[t]/total;html+='  <path\n             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"\n             fill="none"\n             transform="rotate('.concat(soFar/100*360,', 18, 18)"\n             stroke="').concat(e,'"\n             stroke-width="4"\n             stroke-dasharray="').concat(n,', 100"\n             />'),soFar+=n}),html+='<text x="18" y="21" text-anchor="middle" class="openstad-component-ideas-on-map-icon openstad-component-ideas-on-map-icon-text">'+count+"</text></svg>",L.divIcon({html:html,className:"openstad-component-ideas-on-map-icon-cluster",iconSize:L.point(36,36),iconAnchor:[18,18],isFaded:isFaded})}__webpack_require__.d(__webpack_exports__,"a",function(){return amapsCreateClusterIcon})},6:function(t,e,n){"use strict";(function(i){var n="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,s="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in self,a="ArrayBuffer"in self;if(a)var e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function f(e){this.map={},e instanceof f?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function p(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(n){return new i(function(t,e){n.onload=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function h(t){var e=new FileReader,n=d(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,n,r=p(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=d(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=u(t),e=l(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},f.prototype.delete=function(t){delete this.map[u(t)]},f.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},f.prototype.set=function(t,e){this.map[u(t)]=l(e)},f.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(t,e){n.push(e)}),t(n)},f.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},f.prototype.entries=function(){var n=[];return this.forEach(function(t,e){n.push([e,t])}),t(n)},r&&(f.prototype[Symbol.iterator]=f.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var n,r,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),-1<m.indexOf(r)?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),n=e.shift().replace(/\+/g," "),r=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(n),decodeURIComponent(r))}}),o}function g(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},_.call(v.prototype),_.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];g.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var k=self.DOMException;try{new k}catch(t){(k=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),k.prototype.constructor=k}function C(o,a){return new i(function(r,t){var e=new v(o,a);if(e.signal&&e.signal.aborted)return t(new k("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),n=e.shift().trim();if(n){var r=e.join(":").trim();o.append(n,r)}}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new g(n,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new k("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",n)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}C.polyfill=!0,self.fetch||(self.fetch=C,self.Headers=f,self.Request=v,self.Response=g)}).call(this,n(13))},93:function(t,e,n){}});