(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{420:function(o,n,e){"use strict";e.r(n);var t=e(1),r=e.n(t),i=e(402),l=(e(36),e(413)),a=e(431),c=e(34),s=e(219);var u={name:"color",vs:"\n    varying vec3 color_vColor;\n\n    void color_setColor(vec3 color) {\n      color_vColor = color;\n    }\n  ",fs:"\n    varying vec3 color_vColor;\n\n    vec3 color_getColor() {\n      return color_vColor;\n    }\n  "},f=function(o){var n,e;function t(){return o.call(this,{debug:!0})||this}e=o,(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,t.getInfo=function(){return"\n<p>\nHello Instancing - High-level\n<p>\nInstanced triangles using luma.gl's high-level API\n"};var r=t.prototype;return r.onInitialize=function(o){var n=o.gl,e=new c.a(n,new Float32Array([-.2,-.2,.2,-.2,0,.2])),t=new c.a(n,new Float32Array([1,0,0,0,1,0,0,0,1,1,1,0])),r=new c.a(n,new Float32Array([.5,.5,-.5,.5,.5,-.5,-.5,-.5]));return{model:new l.a(n,{vs:"\n        attribute vec2 position;\n        attribute vec3 color;\n        attribute vec2 offset;\n\n        void main() {\n          color_setColor(color);\n          gl_Position = vec4(position + offset, 0.0, 1.0);\n        }\n      ",fs:"\n        void main() {\n          gl_FragColor = vec4(color_getColor(), 1.0);\n        }\n      ",modules:[u],attributes:{position:e,color:[t,{divisor:1}],offset:[r,{divisor:1}]},vertexCount:3,instanceCount:4,instanced:!0}),positionBuffer:e,colorBuffer:t,offsetBuffer:r}},r.onRender=function(o){var n=o.gl,e=o.model;Object(s.a)(n,{color:[0,0,0,1]}),e.draw()},r.onFinalize=function(o){o.gl;var n=o.model,e=o.positionBuffer,t=o.colorBuffer,r=o.offsetBuffer;n.delete(),e.delete(),t.delete(),r.delete()},t}(a.a);"undefined"==typeof window||window.website||(new f).start();e.d(n,"default",(function(){return p}));var p=function(o){var n,e;function t(){return o.apply(this,arguments)||this}return e=o,(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,t.prototype.render=function(){var o=this.props.pageContext,n=o&&o.exampleConfig||{};return r.a.createElement(i.a,{AnimationLoop:f,exampleConfig:n})},t}(r.a.Component)}}]);
//# sourceMappingURL=component---templates-getting-started-example-hello-instancing-high-jsx-72cc2b39d65cedab8dfe.js.map