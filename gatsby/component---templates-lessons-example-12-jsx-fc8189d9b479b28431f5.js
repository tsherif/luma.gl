(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{301:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(318),a=n(308),u=n.n(a),s=n(398),c=n(330),l=n(376),d=n(368),f=n(337),v=n(446),p=n(457),g=n(366),h=n(437);var m="attribute vec3 positions;\nattribute vec3 normals;\nattribute vec2 texCoords;\n\nuniform mat4 uMMatrix;\nuniform mat4 uVMatrix;\nuniform mat4 uPMatrix;\n\nuniform vec3 uAmbientColor;\n\nuniform vec3 uPointLightingLocation;\nuniform vec3 uPointLightingColor;\n\nuniform bool uUseLighting;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vLightWeighting;\n\nvoid main(void) {\n    vec4 mPosition = uMMatrix * vec4(positions, 1.0);\n    gl_Position = uPMatrix * uVMatrix * mPosition;\n    vTextureCoord = texCoords;\n\n    if (!uUseLighting) {\n        vLightWeighting = vec3(1.0, 1.0, 1.0);\n    } else {\n        vec3 lightDirection = normalize(uPointLightingLocation - mPosition.xyz);\n        vec4 transformedNormal = uMMatrix * vec4(normals, 0.0);\n        float pointLightWeighting = max(dot(transformedNormal.xyz, lightDirection), 0.0);\n        vLightWeighting = uAmbientColor + uPointLightingColor * pointLightWeighting;\n    }\n}\n",y="precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vLightWeighting;\n\nuniform sampler2D uSampler;\n\nvoid main(void) {\n  vec4 textureColor = texture2D(uSampler, vec2(1.0 - vTextureCoord.s, 1.0 - vTextureCoord.t));\n  gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);\n}\n",b={moonRotationMatrix:(new p.a).rotateY(Object(g.e)(180)).translate([5,0,0]),cubeRotationMatrix:(new p.a).translate([5,0,0]),lastTime:0};var w=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.getInfo=function(){return'\n<p>\n  <a href="http://learningwebgl.com/blog/?p=1359" target="_blank">\n  Point lighting\n  </a>\n<p>\n  The classic WebGL Lessons in luma.gl\n'};var r=i.prototype;return r.onInitialize=function(t){t.canvas;var e=t.gl;return Object(s.a)(e,{clearColor:[0,0,0,1],clearDepth:1,depthTest:!0}),{moon:new c.a(e,{geometry:new l.a({nlat:30,nlong:30,radius:2}),fs:y,vs:m,uniforms:{uSampler:new d.a(e,"moon.gif")}}),cube:new c.a(e,{geometry:new f.a,vs:m,fs:y,uniforms:{uSampler:new d.a(e,"crate.gif")}})}},r.onRender=function(t){var e=t.gl,n=(t.tick,t.aspect),i=t.moon,r=t.cube;e.clear(u.a.COLOR_BUFFER_BIT|u.a.DEPTH_BUFFER_BIT);var o=(new p.a).lookAt({eye:[0,0,20],center:[0,0,0],up:[0,1,0]});function a(t,e){var n=document.getElementById(t);return n?n.value:e}var s=document.getElementById("lighting"),c=!s||s.checked;if(i.setUniforms({uUseLighting:c}),r.setUniforms({uUseLighting:c}),c){var l=new h.a(parseFloat(a("ambientR",.2)),parseFloat(a("ambientG",.2)),parseFloat(a("ambientB",.2))),d=new h.a(parseFloat(a("lightPositionX",0)),parseFloat(a("lightPositionY",0)),parseFloat(a("lightPositionZ",0))),f=new h.a(parseFloat(a("pointR",.8)),parseFloat(a("pointG",.8)),parseFloat(a("pointB",.8)));i.setUniforms({uAmbientColor:l,uPointLightingLocation:d,uPointLightingColor:f}),r.setUniforms({uAmbientColor:l,uPointLightingLocation:d,uPointLightingColor:f})}i.setUniforms({uMMatrix:b.moonRotationMatrix,uVMatrix:o,uPMatrix:(new p.a).perspective({fov:45*Math.PI/180,aspect:n,near:.1,far:100})}).draw(),r.setUniforms({uMMatrix:b.cubeRotationMatrix,uVMatrix:o,uPMatrix:(new p.a).perspective({fov:45*Math.PI/180,aspect:n,near:.1,far:100})}).draw(),function(){var t=Date.now();if(0!==b.lastTime){var e=t-b.lastTime,n=(new p.a).rotateY(Object(g.e)(e/20));b.moonRotationMatrix.multiplyLeft(n),b.cubeRotationMatrix.multiplyLeft(n)}b.lastTime=t}()},i}(v.a);"undefined"==typeof window||window.website||(new w).start();n.d(e,"default",function(){return _});var _=function(t){var e,n;function i(){return t.apply(this,arguments)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){return r.a.createElement(o.a,{AnimationLoop:w,exampleConfig:this.props.pageContext.exampleConfig})},i}(r.a.Component)},314:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(130),n(306),n(4);var i=n(434),r=n(386);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var u={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},s=function(){function t(t){void 0===t&&(t={});var e=t,n=e.id,r=void 0===n?Object(i.c)("geometry"):n,o=e.drawMode,a=void 0===o?u.TRIANGLES:o,s=e.attributes,c=void 0===s?{}:s,l=e.indices,d=void 0===l?null:l,f=e.vertexCount,v=void 0===f?null:f;this.id=r,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(c,d),this.vertexCount=v||this._calculateVertexCount(this.attributes,this.indices)}a(t,null,[{key:"DRAW_MODE",get:function(){return u}}]);var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var n in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var i=t[n];i=ArrayBuffer.isView(i)?{value:i}:i,Object(r.a)(ArrayBuffer.isView(i.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||i.size||(i.size=3),"indices"===n?(Object(r.a)(!this.indices),this.indices=i):this.attributes[n]=i}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var n=1/0;for(var i in t){var o=t[i],a=o.value,u=o.size;!o.constant&&a&&u>=1&&(n=Math.min(n,a.length/u))}return Object(r.a)(Number.isFinite(n)),n},a(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},320:function(t,e,n){"use strict";n(27),n(17),n(98),n(39),n(55),n(131),n(132),n(74),n(3),n(5),n(2),n(73),n(96),n(10),n(7),n(1),Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="undefined"!=typeof window&&window.addEventListener,o=new Map,a=function(){return r&&window.__SEER_INITIALIZED__},u=function(t,e){var n=o.get(t),i=Date.now();return!!(n&&i-n<e)||(o.set(t,i),!1)},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r&&a()){var n=new Set,o=JSON.stringify(e,function(t){return function(e,n){if(!n||"object"!==(void 0===n?"undefined":i(n))||!t.has(n))return t.add(n),Object.prototype.toString.call(n).slice(8,-1).includes("Array")?Array.prototype.slice.call(n,0,20):n}}(n));try{window.postMessage({type:t,payload:o,source:"seer-agent"},"*")}catch(s){if(u("seer-log",2e3))return;console.log(s)}}},c=new Map,l=function(t){if(t&&t.data&&"seer-core"===t.data.source){var e=t.data,n=e.type,i=e.payload,r=c.get(n);r&&r.forEach(function(t){return t(i)})}},d=function(){r&&!window.__SEER_LISTENER__&&(window.addEventListener("message",l),window.__SEER_LISTENER__=!0)};e.default={send:s,throttle:u,isReady:a,list:function(t,e){return s("LIST",{key:t,data:e})},listItem:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s("LIST_ITEM",{key:t,itemKey:e,data:n})},updateItem:function(t,e,n,i){return s("UPDATE_ITEM",{key:t,itemKey:e,path:n,data:i})},multiUpdate:function(t,e,n){return s("MULTI_UPDATE_ITEM",{key:t,itemKey:e,array:n})},deleteItem:function(t,e){return s("DELETE_ITEM",{key:t,itemKey:e})},addLog:function(t,e,n){return s("ADD_LOG",{key:t,itemKey:e,msg:n})},listeners:c,listenFor:function(t,e){if(r){if(!t||!e)throw new Error("Please provide a type and callback");c.has(t)||c.set(t,[]),window.__SEER_LISTENER__||d(),c.get(t).push(e)}},removeListener:function(t){c.forEach(function(e,n){c.set(n,e.filter(function(e){return e!==t}))})},init:d,clean:function(){r&&window.__SEER_LISTENER__&&(window.removeEventListener("message",l),delete window.__SEER_LISTENER__)}}},337:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n(4),n(307),n(312);var i=n(314),r=n(434);var o=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),a=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),u=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),s=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),c={POSITION:{size:3,value:new Float32Array(a)},NORMAL:{size:3,value:new Float32Array(u)},TEXCOORD_0:{size:2,value:new Float32Array(s)}},l=function(t){var e,n;function i(e){void 0===e&&(e={});var n=e.id,i=void 0===n?Object(r.c)("cube-geometry"):n;return t.call(this,Object.assign({},e,{id:i,indices:{size:1,value:new Uint16Array(o)},attributes:Object.assign({},c,e.attributes)}))||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i}(i.a)},376:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(312),n(307),n(4);var i=n(314),r=n(434);var o=function(t){var e,n;function i(e){void 0===e&&(e={});var n=e.id,i=void 0===n?Object(r.c)("sphere-geometry"):n,o=function(t){var e=t.nlat,n=void 0===e?10:e,i=t.nlong,r=void 0===i?10:i,o=t.radius,a=void 0===o?1:o,u=Math.PI-0,s=2*Math.PI-0,c=(n+1)*(r+1);if("number"==typeof a){var l=a;a=function(t,e,n,i,r){return l}}for(var d=new Float32Array(3*c),f=new Float32Array(3*c),v=new Float32Array(2*c),p=new Uint16Array(n*r*6),g=0;g<=n;g++)for(var h=0;h<=r;h++){var m=h/r,y=g/n,b=h+g*(r+1),w=2*b,_=3*b,L=s*m,E=u*y,M=Math.sin(L),I=Math.cos(L),x=Math.sin(E),O=Math.cos(E),T=I*x,A=O,P=M*x,R=a(T,A,P,m,y);d[_+0]=R*T,d[_+1]=R*A,d[_+2]=R*P,f[_+0]=T,f[_+1]=A,f[_+2]=P,v[w+0]=m,v[w+1]=1-y}for(var S=n+1,C=0;C<n;C++)for(var F=0;F<r;F++){var j=6*(C*r+F);p[j+0]=F*S+C,p[j+1]=F*S+C+1,p[j+2]=(F+1)*S+C,p[j+3]=(F+1)*S+C,p[j+4]=F*S+C+1,p[j+5]=(F+1)*S+C+1}return{indices:{size:1,value:p},attributes:{POSITION:{size:3,value:d},NORMAL:{size:3,value:f},TEXCOORD_0:{size:2,value:v}}}}(e),a=o.indices,u=o.attributes;return t.call(this,Object.assign({},e,{id:i,indices:a,attributes:Object.assign({},u,e.attributes)}))||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i}(i.a)}}]);
//# sourceMappingURL=component---templates-lessons-example-12-jsx-fc8189d9b479b28431f5.js.map