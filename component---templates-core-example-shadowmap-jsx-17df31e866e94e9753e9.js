(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{429:function(n,o,e){"use strict";e.r(o);var t=e(1),r=e.n(t),a=e(408),i=e(0),u=e.n(i),c=e(297),d=e(71),s=e(410),p=e(459),w=e(226),l=e(453),f=e(454),m=e(66);var v=function(n){var o,e;function t(){return n.apply(this,arguments)||this}e=n,(o=t).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e,t.getInfo=function(){return"\n<p>\n  Simple <b>shadow mapping</b>.\n<p>\nA luma.gl <code>Cube</code>, rendering into a shadowmap framebuffer\nand then rendering onto the screen.\n"};var r=t.prototype;return r.onInitialize=function(n){var o=n.gl;return Object(c.a)(o,{depthTest:!0,depthFunc:u.a.LEQUAL}),{fbShadow:new d.a(o,{id:"shadowmap",width:1024,height:1024}),cube:new s.a(o,{geometry:new p.a,vs:"#define SHADER_NAME scene.vs\n\nattribute vec3 positions;\nattribute vec3 normals;\n\nuniform mat4 uModel;\nuniform mat4 uView;\nuniform mat4 uProjection;\nuniform mat4 uShadowView;\nuniform mat4 uShadowProj;\n\nvarying vec4 shadowCoord;\nvarying vec3 normal;\n\nvoid main(void) {\n  gl_Position = uProjection * uView * uModel * vec4(positions, 1.0);\n  normal = vec3(uModel * vec4(normals, 0.0));\n  mat4 bias = mat4(\n    0.5, 0.0, 0.0, 0.0,\n    0.0, 0.5, 0.0, 0.0,\n    0.0, 0.0, 0.5, 0.0,\n    0.5, 0.5, 0.5, 1.0\n  );\n  shadowCoord = bias * uShadowProj * uShadowView * uModel * vec4(positions, 1.0);\n}\n",fs:"precision highp float;\n\nuniform sampler2D uShadowMap;\nuniform float uShadow;\n\nvarying vec4 shadowCoord;\nvarying vec3 normal;\n\nvoid main(void) {\n  float d = clamp(dot(normalize(normal), vec3(0,1,0)), 0.25, 1.0);\n  float s = 1.0;\n  if (texture2D(uShadowMap, shadowCoord.xy).z < shadowCoord.z - 0.005) {\n    s -= 0.5 * uShadow;\n  }\n  float c = d * s;\n  gl_FragColor = vec4(c,c,c,1);\n}\n"}),shadow:new s.a(o,{geometry:new p.a,vs:"#define SHADER_NAME shadowmap.vs\n\nattribute vec3 positions;\n\nuniform mat4 uModel;\nuniform mat4 uView;\nuniform mat4 uProjection;\n\nvoid main(void) {\n  gl_Position = uProjection * uView * uModel * vec4(positions, 1.0);\n}\n",fs:"precision highp float;\n\nvoid main(void) {\n  gl_FragColor = vec4(0,0,gl_FragCoord.z,1);\n}\n"})}},r.onRender=function(n){var o=n.gl,e=n.tick,t=n.width,r=n.height,a=n.aspect,i=n.cube,u=n.shadow,c=n.fbShadow,d=(new f.a).translate([0,6,0]).rotateXYZ([.01*e,0,0]).rotateXYZ([0,.013*e,0]),s=(new f.a).scale([2,-2,2]).translate([0,0,0]).rotateXYZ([0,0,.007*e]);o.viewport(0,0,1024,1024),Object(w.a)(o,{framebuffer:c,color:[1,1,1,1],depth:!0});var p=[0,8,0],l=(new f.a).lookAt({eye:p,center:[0,0,0],up:[0,0,-1]}),v=(new f.a).ortho({left:-4,right:4,bottom:-4,top:4,near:0,far:64});u.draw({framebuffer:c,uniforms:{uModel:d,uView:l,uProjection:v,uLightPosition:p}}),o.viewport(0,0,t,r),Object(w.a)(o,{color:[0,.2,0,1],depth:!0});var h=(new f.a).lookAt({eye:[0,8,8],center:[0,3,0],up:[0,1,0]}),b=(new f.a).perspective({fov:Object(m.e)(75),aspect:a,near:.1,far:100});i.setUniforms({uView:h,uProjection:b,uShadowView:l,uShadowProj:v,uShadowMap:c}),i.draw({framebuffer:null,uniforms:{uModel:d,uShadow:0}}),i.draw({framebuffer:null,uniforms:{uModel:s,uShadow:1}})},t}(l.a);"undefined"==typeof window||window.website||(new v).start();e.d(o,"default",(function(){return h}));var h=function(n){var o,e;function t(){return n.apply(this,arguments)||this}return e=n,(o=t).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e,t.prototype.render=function(){return r.a.createElement(a.a,{AnimationLoop:v,exampleConfig:this.props.pageContext.exampleConfig})},t}(r.a.Component)},459:function(n,o,e){"use strict";e.d(o,"a",(function(){return s}));e(2),e(36),e(148);var t=e(409),r=e(133);var a=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),i=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),u=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),c=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),d={POSITION:{size:3,value:new Float32Array(i)},NORMAL:{size:3,value:new Float32Array(u)},TEXCOORD_0:{size:2,value:new Float32Array(c)}},s=function(n){var o,e;function t(o){void 0===o&&(o={});var e=o.id,t=void 0===e?Object(r.c)("cube-geometry"):e;return n.call(this,Object.assign({},o,{id:t,indices:{size:1,value:new Uint16Array(a)},attributes:Object.assign({},d,{},o.attributes)}))||this}return e=n,(o=t).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e,t}(t.a)}}]);
//# sourceMappingURL=component---templates-core-example-shadowmap-jsx-17df31e866e94e9753e9.js.map