(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{426:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(402),a=(n(36),n(3),n(0)),c=n.n(a),s=n(442),u=n(413),l=n(431),d=n(34),v=n(130),p=n(219),f=n(448),m=n(65),h=n(432),_=n(73),w=n(293),g=n(436);function b(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var j=200,y=500,x=Math.floor(2500),M=5e3-x,A=Object(g.b)(),P=0,N="#version 300 es\n#define SHADER_NAME scene.vs\n\nin vec3 positions;\nin vec3 normals;\nin vec2 texCoords;\nin vec3 offset;\n\nuniform mat4 uView;\nuniform mat4 uProjection;\nout vec2 vUV;\n\nvoid main(void) {\n  gl_Position = uProjection * uView * vec4(positions * 4.0 + offset, 1.0);\n  project_setNormal(normals);\n  vUV = texCoords;\n}\n",C="#version 300 es\nprecision highp float;\n#define SHADER_NAME scene.fs\n\nin vec2 vUV;\nuniform sampler2D uTexture;\nuniform float alpha;\n\nout vec4 fragColor;\nvoid main(void) {\n  fragColor.rgb = texture(uTexture, vUV).rgb;\n  fragColor.a = alpha;\n  fragColor = dirlight_filterColor(fragColor);\n  fragColor.rgb *= fragColor.a;\n}\n",E=function(t){function e(e,n){var o,r=n.count,i=new d.a(e,n.offsets);return(o=t.call(this,e,Object.assign({geometry:new s.a},n,{vs:N,fs:C,modules:[f.a],isInstanced:1,instanceCount:r,uniforms:n.uniforms,attributes:{offset:{buffer:i,size:3,divisor:1}}}))||this).count=r,o}return b(e,t),e}(u.a),O=function(t){function e(e){var n;return void 0===e&&(e={}),(n=t.call(this,e)||this).isDemoSupported=!0,n}b(e,t),e.getInfo=function(){return'\n<p>\n  <div id="info-stats"></div>\n<p>\n'};var n=e.prototype;return n.onInitialize=function(t){for(var e,n=t.gl,o=(t.framebuffer,new h.a),r=(new h.a).lookAt({eye:[0,0,8]}),i=new v.a(n,{data:"vis-logo.png",mipmaps:!0,parameters:(e={},e[n.TEXTURE_MAG_FILTER]=n.LINEAR,e[n.TEXTURE_MIN_FILTER]=n.LINEAR_MIPMAP_NEAREST,e)}),a=new Array(x),c=new Array(M),s=new Float32Array(3*j),u=0;u<x;++u)a[u]=I(n,s,i,1);for(var l=0;l<M;++l)c[l]=I(n,s,i,.5);var d=new w.a(this.stats,{container:document.getElementById("info-stats"),title:"Drawing "+j*x+" opaque cubes and "+j*M+" transparent cubes in 5000 draw calls",css:{position:"absolute",top:"10px",left:"10px",fontSize:"14px"},formatters:{"CPU Time":"averageTime","GPU Time":"averageTime","Frame Rate":"fps"}});return P=0,{projectionMatrix:o,viewMatrix:r,opaqueCubes:a,transparentCubes:c,statsWidget:d}},n.onRender=function(t){P+=.01;var e=t.gl,n=t.aspect,o=t.projectionMatrix,r=t.viewMatrix,i=t.opaqueCubes,a=t.transparentCubes,s=t.statsWidget,u=t.tick;s.update(),u%600==0&&this.stats.reset();var l=Math.cos(P),d=Math.sin(P);o.perspective({fov:Object(_.e)(60),aspect:n,near:200,far:2e3}),r.lookAt({eye:[800*l,400,800*d],center:[0,0,0],up:[0,1,0]}),Object(p.a)(e,{color:[0,0,0,1],depth:!0}),Object(m.e)(e,{depthTest:!0,depthMask:!0,depthFunc:c.a.LEQUAL,cull:!0,blend:!1},(function(){for(var t=0;t<x;++t)i[t].draw({uniforms:{uProjection:o,uView:r}})})),Object(m.e)(e,{depthTest:!0,depthMask:!1,depthFunc:c.a.LEQUAL,cull:!0,blend:!0,blendFunc:[c.a.ONE,c.a.ONE_MINUS_SRC_ALPHA]},(function(){for(var t=0;t<M;++t)a[t].draw({uniforms:{uProjection:o,uView:r}})}))},n.onFinalize=function(t){var e=t.opaqueCubes,n=t.transparentCubes;e.forEach((function(t){return t.delete()})),n.forEach((function(t){return t.delete()}))},e}(l.a);function I(t,e,n,o){for(var r=0;r<j;++r){var i=(A()-.5)*y,a=(A()-.5)*y,c=(A()-.5)*y;e.set([i,a,c],3*r)}return new E(t,{count:j,offsets:e,uniforms:{uTexture:n,alpha:o}})}"undefined"==typeof window||window.website||(document.body.style.overflow="hidden",document.body.style.margin="0",(new O).start({width:window.innerWidth,height:window.innerHeight}));n.d(e,"default",(function(){return W}));var W=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t=this.props.pageContext,e=t&&t.exampleConfig||{};return r.a.createElement(i.a,{AnimationLoop:O,exampleConfig:e})},o}(r.a.Component)},436:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){function t(){}t.getInfo=function(){return""};var e=t.prototype;return e.start=function(){},e.stop=function(){},e.delete=function(){},e._setDisplay=function(){},e._getCanvas=function(t){var e;if(void 0===t&&(t={}),t.canvas){e=document.getElementById(t.canvas);var n=window.devicePixelRatio||1;e.height=e.clientHeight*n,e.width=e.clientWidth*n}else(e=document.createElement("canvas")).width=800,e.height=600,document.body.appendChild(e);return e},t}();function r(){var t=1,e=1;return function(){return t=Math.sin(17.23*e),e=Math.cos(27.92*t),(n=1432.71*Math.abs(t*e))-Math.floor(n);var n}}},438:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(11),n(15),n(3);var o=n(147),r=n(16);function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var c={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},s=function(){function t(t){void 0===t&&(t={});var e=t,n=e.id,r=void 0===n?Object(o.c)("geometry"):n,i=e.drawMode,a=void 0===i?c.TRIANGLES:i,s=e.attributes,u=void 0===s?{}:s,l=e.indices,d=void 0===l?null:l,v=e.vertexCount,p=void 0===v?null:v;this.id=r,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(u,d),this.vertexCount=p||this._calculateVertexCount(this.attributes,this.indices)}a(t,null,[{key:"DRAW_MODE",get:function(){return c}}]);var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var n in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var o=t[n];o=ArrayBuffer.isView(o)?{value:o}:o,Object(r.a)(ArrayBuffer.isView(o.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||o.size||(o.size=3),"indices"===n?(Object(r.a)(!this.indices),this.indices=o):this.attributes[n]=o}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var n=1/0;for(var o in t){var i=t[o],a=i.value,c=i.size;!i.constant&&a&&c>=1&&(n=Math.min(n,a.length/c))}return Object(r.a)(Number.isFinite(n)),n},a(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},442:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(3),n(36),n(148);var o=n(438),r=n(147);var i=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),a=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),c=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),s=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),u={POSITION:{size:3,value:new Float32Array(a)},NORMAL:{size:3,value:new Float32Array(c)},TEXCOORD_0:{size:2,value:new Float32Array(s)}},l=function(t){var e,n;function o(e){void 0===e&&(e={});var n=e.id,o=void 0===n?Object(r.c)("cube-geometry"):n;return t.call(this,Object.assign({},e,{id:o,indices:{size:1,value:new Uint16Array(i)},attributes:Object.assign({},u,{},e.attributes)}))||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o}(o.a)},448:function(t,e,n){"use strict";n(36);var o=n(432),r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i={modelMatrix:r,viewMatrix:r,projectionMatrix:r,cameraPositionWorld:[0,0,0]};var a={name:"project",getUniforms:function(t,e){void 0===t&&(t=i),void 0===e&&(e={});var n={};return void 0!==t.modelMatrix&&(n.modelMatrix=t.modelMatrix),void 0!==t.viewMatrix&&(n.viewMatrix=t.viewMatrix),void 0!==t.projectionMatrix&&(n.projectionMatrix=t.projectionMatrix),void 0!==t.cameraPositionWorld&&(n.cameraPositionWorld=t.cameraPositionWorld),void 0===t.projectionMatrix&&void 0===t.viewMatrix||(n.viewProjectionMatrix=new o.a(t.projectionMatrix).multiplyRight(t.viewMatrix)),n},vs:"varying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n\n\n// Unprefixed uniforms\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewProjectionMatrix;\nuniform vec3 cameraPositionWorld;\n\nstruct World {\n  vec3 position;\n  vec3 normal;\n};\n\nWorld world;\n\nvoid project_setPosition(vec4 position) {\n  project_vPositionWorld = position;\n}\n\nvoid project_setNormal(vec3 normal) {\n  project_vNormalWorld = normal;\n}\n\nvoid project_setPositionAndNormal_World(vec3 position, vec3 normal) {\n  world.position = position;\n  world.normal = normal;\n}\n\nvoid project_setPositionAndNormal_Model(vec3 position, vec3 normal) {\n  world.position = (modelMatrix * vec4(position, 1.)).xyz;\n  world.normal = mat3(modelMatrix) * normal;\n}\n\nvec4 project_model_to_clipspace(vec4 position) {\n  return viewProjectionMatrix * modelMatrix * position;\n}\n\nvec4 project_model_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * modelMatrix * vec4(position, 1.);\n}\n\nvec4 project_world_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_view_to_clipspace(vec3 position) {\n  return projectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n",fs:"\nvarying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n"},c={lightDirection:new Float32Array([1,1,2])};e.a={name:"dirlight",vs:null,fs:"uniform vec3 dirlight_uLightDirection;\n\n/*\n * Returns color attenuated by angle from light source\n */\nvec4 dirlight_filterColor(vec4 color) {\n  vec3 normal = project_getNormal_World();\n  float d = abs(dot(normalize(normal), normalize(dirlight_uLightDirection)));\n  return vec4(color.rgb * d, color.a);\n}\n",getUniforms:function(t){void 0===t&&(t=c);var e={};return t.lightDirection&&(e.dirlight_uLightDirection=t.lightDirection),e},dependencies:[a]}}}]);
//# sourceMappingURL=component---templates-performance-example-stress-test-jsx-446ab34d4a735bfff155.js.map