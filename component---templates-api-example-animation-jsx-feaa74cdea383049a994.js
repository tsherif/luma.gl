(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"75fp":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("rE2o"),i("ioFf"),i("FLlr"),i("xfY5"),i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("9AAn");var n=1,r=1,o=function(){function t(){this.time=0,this.channels=new Map,this.animations=new Map,this.playing=!1,this.lastEngineTime=-1}var e=t.prototype;return e.addChannel=function(t){var e=t.delay,i=void 0===e?0:e,r=t.duration,o=void 0===r?Number.POSITIVE_INFINITY:r,a=t.rate,s=void 0===a?1:a,l=t.repeat,c=n++,u={time:0,delay:i,duration:o,rate:s,repeat:void 0===l?1:l};return this._setChannelTime(u,this.time),this.channels.set(c,u),c},e.removeChannel=function(t){this.channels.delete(t);var e=this.animations,i=Array.isArray(e),n=0;for(e=i?e:e[Symbol.iterator]();;){var r;if(i){if(n>=e.length)break;r=e[n++]}else{if((n=e.next()).done)break;r=n.value}var o=r,a=o[0];o[1].channel===t&&this.detachAnimation(a)}},e.isFinished=function(t){var e=this.channels.get(t);return void 0!==e&&this.time>=e.delay+e.duration*e.repeat},e.getTime=function(t){if(void 0===t)return this.time;var e=this.channels.get(t);return void 0===e?-1:e.time},e.setTime=function(t){this.time=Math.max(0,t);var e=this.channels.values(),i=Array.isArray(e),n=0;for(e=i?e:e[Symbol.iterator]();;){var r;if(i){if(n>=e.length)break;r=e[n++]}else{if((n=e.next()).done)break;r=n.value}var o=r;this._setChannelTime(o,this.time)}var a=this.animations.values(),s=Array.isArray(a),l=0;for(a=s?a:a[Symbol.iterator]();;){var c;if(s){if(l>=a.length)break;c=a[l++]}else{if((l=a.next()).done)break;c=l.value}var u=c,d=u.animation,v=u.channel;d.setTime(this.getTime(v))}},e.play=function(){this.playing=!0},e.pause=function(){this.playing=!1,this.lastEngineTime=-1},e.reset=function(){this.setTime(0)},e.attachAnimation=function(t,e){var i=r++;return this.animations.set(i,{animation:t,channel:e}),t.setTime(this.getTime(e)),i},e.detachAnimation=function(t){this.animations.delete(t)},e.update=function(t){this.playing&&(-1===this.lastEngineTime&&(this.lastEngineTime=t),this.setTime(this.time+(t-this.lastEngineTime)),this.lastEngineTime=t)},e._setChannelTime=function(t,e){var i=e-t.delay;i>=t.duration*t.repeat?t.time=t.duration*t.rate:(t.time=Math.max(0,i)%t.duration,t.time*=t.rate)},t}()},HGgG:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));i("91GP"),i("Y9lz"),i("r1bV");var n=i("PG+Z"),r=i("BunF");var o=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),a=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),l=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),c={POSITION:{size:3,value:new Float32Array(a)},NORMAL:{size:3,value:new Float32Array(s)},TEXCOORD_0:{size:2,value:new Float32Array(l)}},u=function(t){var e,i;function n(e){void 0===e&&(e={});var i=e.id,n=void 0===i?Object(r.c)("cube-geometry"):i;return t.call(this,Object.assign({},e,{id:n,indices:{size:1,value:new Uint16Array(o)},attributes:Object.assign({},c,{},e.attributes)}))||this}return i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,n}(n.a)},"PG+Z":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("xfY5"),i("/KAi"),i("91GP");var n=i("BunF"),r=i("Iq2B");function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}var s={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},l=function(){function t(t){void 0===t&&(t={});var e=t,i=e.id,r=void 0===i?Object(n.c)("geometry"):i,o=e.drawMode,a=void 0===o?s.TRIANGLES:o,l=e.attributes,c=void 0===l?{}:l,u=e.indices,d=void 0===u?null:u,v=e.vertexCount,m=void 0===v?null:v;this.id=r,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(c,d),this.vertexCount=m||this._calculateVertexCount(this.attributes,this.indices)}a(t,null,[{key:"DRAW_MODE",get:function(){return s}}]);var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var i in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var n=t[i];n=ArrayBuffer.isView(n)?{value:n}:n,Object(r.a)(ArrayBuffer.isView(n.value),this._print(i)+": must be typed array or object with value as typed array"),"POSITION"!==i&&"positions"!==i||n.size||(n.size=3),"indices"===i?(Object(r.a)(!this.indices),this.indices=n):this.attributes[i]=n}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var i=1/0;for(var n in t){var o=t[n],a=o.value,s=o.size;!o.constant&&a&&s>=1&&(i=Math.min(i,a.length/s))}return Object(r.a)(Number.isFinite(i)),i},a(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},QJb2:function(t,e,i){"use strict";i("Y9lz");var n=i("WUN0"),r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o={modelMatrix:r,viewMatrix:r,projectionMatrix:r,cameraPositionWorld:[0,0,0]};var a={name:"project",getUniforms:function(t,e){void 0===t&&(t=o),void 0===e&&(e={});var i={};return void 0!==t.modelMatrix&&(i.modelMatrix=t.modelMatrix),void 0!==t.viewMatrix&&(i.viewMatrix=t.viewMatrix),void 0!==t.projectionMatrix&&(i.projectionMatrix=t.projectionMatrix),void 0!==t.cameraPositionWorld&&(i.cameraPositionWorld=t.cameraPositionWorld),void 0===t.projectionMatrix&&void 0===t.viewMatrix||(i.viewProjectionMatrix=new n.a(t.projectionMatrix).multiplyRight(t.viewMatrix)),i},vs:"varying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n\n\n// Unprefixed uniforms\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewProjectionMatrix;\nuniform vec3 cameraPositionWorld;\n\nstruct World {\n  vec3 position;\n  vec3 normal;\n};\n\nWorld world;\n\nvoid project_setPosition(vec4 position) {\n  project_vPositionWorld = position;\n}\n\nvoid project_setNormal(vec3 normal) {\n  project_vNormalWorld = normal;\n}\n\nvoid project_setPositionAndNormal_World(vec3 position, vec3 normal) {\n  world.position = position;\n  world.normal = normal;\n}\n\nvoid project_setPositionAndNormal_Model(vec3 position, vec3 normal) {\n  world.position = (modelMatrix * vec4(position, 1.)).xyz;\n  world.normal = mat3(modelMatrix) * normal;\n}\n\nvec4 project_model_to_clipspace(vec4 position) {\n  return viewProjectionMatrix * modelMatrix * position;\n}\n\nvec4 project_model_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * modelMatrix * vec4(position, 1.);\n}\n\nvec4 project_world_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_view_to_clipspace(vec3 position) {\n  return projectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n",fs:"\nvarying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n"},s={lightDirection:new Float32Array([1,1,2])};e.a={name:"dirlight",vs:null,fs:"uniform vec3 dirlight_uLightDirection;\n\n/*\n * Returns color attenuated by angle from light source\n */\nvec4 dirlight_filterColor(vec4 color) {\n  vec3 normal = project_getNormal_World();\n  float d = abs(dot(normalize(normal), normalize(dirlight_uLightDirection)));\n  return vec4(color.rgb * d, color.a);\n}\n",getUniforms:function(t){void 0===t&&(t=s);var e={};return t.lightDirection&&(e.dirlight_uLightDirection=t.lightDirection),e},dependencies:[a]}},cFqI:function(t,e,i){"use strict";i.r(e);var n=i("q1tI"),r=i.n(n),o=i("z0FI"),a=(i("xfY5"),i("75fp")),s=(i("rGqo"),i("yt8O"),i("Btvt"),function(){function t(t){this._lastTime=-1,this.startIndex=-1,this.endIndex=-1,this.factor=0,this.times=[],this.values=[],this.setKeyFrames(t),this.setTime(0)}var e=t.prototype;return e.setKeyFrames=function(t){var e=t.length;this.times.length=e,this.values.length=e;for(var i=0;i<e;++i)this.times[i]=t[i][0],this.values[i]=t[i][1];this._calculateKeys(this._lastTime)},e.setTime=function(t){(t=Math.max(0,t))!==this._lastTime&&(this._calculateKeys(t),this._lastTime=t)},e.getStartTime=function(){return this.times[this.startIndex]},e.getEndTime=function(){return this.times[this.endIndex]},e.getStartData=function(){return this.values[this.startIndex]},e.getEndData=function(){return this.values[this.endIndex]},e._calculateKeys=function(t){var e=0,i=this.times.length;for(e=0;e<i-2&&!(this.times[e+1]>t);++e);this.startIndex=e,this.endIndex=e+1;var n=this.times[this.startIndex],r=this.times[this.endIndex];this.factor=Math.min(Math.max(0,(t-n)/(r-n)),1)},t}()),l=i("UD/Y"),c=i("HGgG"),u=i("bjw9"),d=i("lHlH"),v=i("QJb2"),m=i("WUN0"),h=i("gmAo"),p=i("aI42");var f=Object(p.b)(),g=function(t){var e,i;function n(){return t.call(this,{debug:!0})||this}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,n.getInfo=function(){return'\nKey frame animation based on multiple hierarchical timelines.\n<button id="play">Play</button>\n<button id="pause">Pause</button><BR>\nTime: <input type="range" id="time" min="0" max="30000" step="1"><BR>\n'};var r=n.prototype;return r.onInitialize=function(t){var e=this,i=t.gl,n=(t._animationLoop,t.aspect);Object(d.k)(i,{clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:i.LEQUAL});var r=document.getElementById("play"),o=document.getElementById("pause"),u=document.getElementById("time");r&&(r.addEventListener("click",(function(){e.timeline.play()})),o.addEventListener("click",(function(){e.timeline.pause()})),u.addEventListener("input",(function(t){e.timeline.setTime(parseFloat(t.target.value))})));var p=[[2,-2,0],[2,2,0],[-2,2,0],[-2,-2,0]],g=[[f(),f(),f()],[f(),f(),f()],[f(),f(),f()],[f(),f(),f()]],y=[[1,0,0],[0,1,0],[0,0,1],[1,1,0]];this.attachTimeline(new a.a),this.timeline.play();var _=[this.timeline.addChannel({delay:2e3,rate:.5,duration:8e3,repeat:2}),this.timeline.addChannel({delay:1e4,rate:.2,duration:2e4,repeat:1}),this.timeline.addChannel({delay:7e3,rate:1,duration:4e3,repeat:8}),this.timeline.addChannel({delay:0,rate:.8,duration:5e3,repeat:Number.POSITIVE_INFINITY})],b=[[0,0],[1e3,2*Math.PI],[2e3,Math.PI],[3e3,2*Math.PI],[4e3,0]],w=[new s(b),new s(b),new s(b),new s(b)];this.cubes=new Array(4);for(var x=0;x<4;++x)this.timeline.attachAnimation(w[x],_[x]),this.cubes[x]={translation:p[x],rotation:g[x],keyFrames:w[x],model:new l.a(i,{vs:"attribute vec3 positions;\nattribute vec3 normals;\n\nuniform vec3 uColor;\nuniform mat4 uModel;\nuniform mat4 uView;\nuniform mat4 uProjection;\n\nvarying vec3 color;\n\nvoid main(void) {\n  vec3 normal = vec3(uModel * vec4(normals, 0.0));\n\n  // Set up data for modules\n  color = uColor;\n  project_setNormal(normal);\n  gl_Position = uProjection * uView * uModel * vec4(positions, 1.0);\n}\n",fs:"precision highp float;\n\nvarying vec3 color;\n\nvoid main(void) {\n  gl_FragColor = vec4(color, 1.);\n  gl_FragColor = dirlight_filterColor(gl_FragColor);\n}\n",modules:[v.a],geometry:new c.a,uniforms:{uProjection:(new m.a).perspective({fov:Object(h.e)(60),aspect:n,near:1,far:20}),uView:(new m.a).lookAt({center:[0,0,0],eye:[0,0,-8]}),uColor:y[x]}})};return{timeSlider:u}},r.onRender=function(t){var e=t.gl,i=t.timeSlider;i&&(i.value=this.timeline.getTime());var n=new m.a;e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);for(var r=0;r<4;++r){var o=this.cubes[r],a=o.keyFrames.getStartData(),s=o.keyFrames.getEndData(),l=a+o.keyFrames.factor*(s-a),c=o.rotation[0]+l,u=o.rotation[1]+l,d=o.rotation[2];n.identity().translate(o.translation).rotateXYZ([c,u,d]),o.model.setUniforms({uModel:n}).draw()}},r.onFinalize=function(t){t.gl;for(var e=0;e<4;++e)this.cubes[e].model.delete()},n}(u.a);"undefined"==typeof window||window.website||(new g).start();i.d(e,"default",(function(){return y}));var y=function(t){var e,i;function n(){return t.apply(this,arguments)||this}return i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,n.prototype.render=function(){return r.a.createElement(o.a,{AnimationLoop:g,exampleConfig:this.props.pageContext.exampleConfig})},n}(r.a.Component)}}]);
//# sourceMappingURL=component---templates-api-example-animation-jsx-feaa74cdea383049a994.js.map