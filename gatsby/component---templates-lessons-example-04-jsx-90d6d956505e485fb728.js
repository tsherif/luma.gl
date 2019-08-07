(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{295:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(318),a=(n(307),n(4),n(308)),s=n.n(a),u=n(314),c=n(337),l=n(398),d=n(330),f=n(446),p=n(457);function y(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var v="attribute vec3 positions;\nattribute vec4 colors;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);\n  vColor = colors;\n}\n",_="precision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n}\n",w=function(t){function e(e){return t.call(this,Object.assign({},e,{attributes:{positions:new Float32Array([0,1,0,-1,-1,1,1,-1,1,0,1,0,1,-1,1,1,-1,-1,0,1,0,1,-1,-1,-1,-1,-1,0,1,0,-1,-1,-1,-1,-1,1]),colors:{size:4,value:new Float32Array([1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1])}}}))||this}return y(e,t),e}(u.a),h=function(t){function e(e){return t.call(this,Object.assign({},e,{attributes:{colors:{size:4,value:new Float32Array([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1])}}}))||this}return y(e,t),e}(c.a),b=function(t){function e(){return t.apply(this,arguments)||this}y(e,t),e.getInfo=function(){return'\n<p>\n  <a href="http://learningwebgl.com/blog/?p=370" target="_blank">\n    Some Real 3D Objects\n  </a>\n<p>\nThe classic WebGL Lessons in luma.gl\n'};var n=e.prototype;return n.onInitialize=function(t){var e=t.gl;return Object(l.a)(e,{clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:s.a.LEQUAL}),{pyramid:new d.a(e,{vs:v,fs:_,geometry:new w}),cube:new d.a(e,{vs:v,fs:_,geometry:new h})}},n.onRender=function(t){var e=t.gl,n=t.tick,r=t.aspect,i=t.pyramid,o=t.cube;e.clear(s.a.COLOR_BUFFER_BIT|s.a.DEPTH_BUFFER_BIT);var a=(new p.a).perspective({aspect:r}),u=(new p.a).lookAt({eye:[0,0,0]});i.setUniforms({uPMatrix:a,uMVMatrix:u.clone().translate([-1.5,0,-8]).rotateY(.01*n)}).draw();var c=.01*n;o.setUniforms({uPMatrix:a,uMVMatrix:u.clone().translate([1.5,0,-8]).rotateXYZ([c,c,c])}).draw()},e}(f.a);"undefined"==typeof window||window.website||(new b).start();n.d(e,"default",function(){return E});var E=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return i.a.createElement(o.a,{AnimationLoop:b,exampleConfig:this.props.pageContext.exampleConfig})},r}(i.a.Component)},314:function(t,e,n){"use strict";n.d(e,"a",function(){return u});n(130),n(306),n(4);var r=n(434),i=n(386);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var s={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},u=function(){function t(t){void 0===t&&(t={});var e=t,n=e.id,i=void 0===n?Object(r.c)("geometry"):n,o=e.drawMode,a=void 0===o?s.TRIANGLES:o,u=e.attributes,c=void 0===u?{}:u,l=e.indices,d=void 0===l?null:l,f=e.vertexCount,p=void 0===f?null:f;this.id=i,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(c,d),this.vertexCount=p||this._calculateVertexCount(this.attributes,this.indices)}a(t,null,[{key:"DRAW_MODE",get:function(){return s}}]);var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var n in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var r=t[n];r=ArrayBuffer.isView(r)?{value:r}:r,Object(i.a)(ArrayBuffer.isView(r.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||r.size||(r.size=3),"indices"===n?(Object(i.a)(!this.indices),this.indices=r):this.attributes[n]=r}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var n=1/0;for(var r in t){var o=t[r],a=o.value,s=o.size;!o.constant&&a&&s>=1&&(n=Math.min(n,a.length/s))}return Object(i.a)(Number.isFinite(n)),n},a(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},320:function(t,e,n){"use strict";n(27),n(17),n(98),n(39),n(55),n(131),n(132),n(74),n(3),n(5),n(2),n(73),n(96),n(10),n(7),n(1),Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="undefined"!=typeof window&&window.addEventListener,o=new Map,a=function(){return i&&window.__SEER_INITIALIZED__},s=function(t,e){var n=o.get(t),r=Date.now();return!!(n&&r-n<e)||(o.set(t,r),!1)},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i&&a()){var n=new Set,o=JSON.stringify(e,function(t){return function(e,n){if(!n||"object"!==(void 0===n?"undefined":r(n))||!t.has(n))return t.add(n),Object.prototype.toString.call(n).slice(8,-1).includes("Array")?Array.prototype.slice.call(n,0,20):n}}(n));try{window.postMessage({type:t,payload:o,source:"seer-agent"},"*")}catch(u){if(s("seer-log",2e3))return;console.log(u)}}},c=new Map,l=function(t){if(t&&t.data&&"seer-core"===t.data.source){var e=t.data,n=e.type,r=e.payload,i=c.get(n);i&&i.forEach(function(t){return t(r)})}},d=function(){i&&!window.__SEER_LISTENER__&&(window.addEventListener("message",l),window.__SEER_LISTENER__=!0)};e.default={send:u,throttle:s,isReady:a,list:function(t,e){return u("LIST",{key:t,data:e})},listItem:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u("LIST_ITEM",{key:t,itemKey:e,data:n})},updateItem:function(t,e,n,r){return u("UPDATE_ITEM",{key:t,itemKey:e,path:n,data:r})},multiUpdate:function(t,e,n){return u("MULTI_UPDATE_ITEM",{key:t,itemKey:e,array:n})},deleteItem:function(t,e){return u("DELETE_ITEM",{key:t,itemKey:e})},addLog:function(t,e,n){return u("ADD_LOG",{key:t,itemKey:e,msg:n})},listeners:c,listenFor:function(t,e){if(i){if(!t||!e)throw new Error("Please provide a type and callback");c.has(t)||c.set(t,[]),window.__SEER_LISTENER__||d(),c.get(t).push(e)}},removeListener:function(t){c.forEach(function(e,n){c.set(n,e.filter(function(e){return e!==t}))})},init:d,clean:function(){i&&window.__SEER_LISTENER__&&(window.removeEventListener("message",l),delete window.__SEER_LISTENER__)}}},337:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n(4),n(307),n(312);var r=n(314),i=n(434);var o=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),a=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),u=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),c={POSITION:{size:3,value:new Float32Array(a)},NORMAL:{size:3,value:new Float32Array(s)},TEXCOORD_0:{size:2,value:new Float32Array(u)}},l=function(t){var e,n;function r(e){void 0===e&&(e={});var n=e.id,r=void 0===n?Object(i.c)("cube-geometry"):n;return t.call(this,Object.assign({},e,{id:r,indices:{size:1,value:new Uint16Array(o)},attributes:Object.assign({},c,e.attributes)}))||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r}(r.a)}}]);
//# sourceMappingURL=component---templates-lessons-example-04-jsx-90d6d956505e485fb728.js.map