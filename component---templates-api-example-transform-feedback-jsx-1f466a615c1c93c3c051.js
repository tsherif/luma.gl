(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{424:function(o,n,e){"use strict";e.r(n);var t=e(1),r=e.n(t),i=e(402),a=(e(36),e(413)),s=e(431),c=e(29),p=e(20),l=e(34);var u="THIS DEMO REQUIRES WEBLG2, BUT YOUR BROWSER DOESN'T SUPPORT IT",v=Float32Array.BYTES_PER_ELEMENT,d=["gl_Position","v_color"],f=[-1,-1,0,1,1,-1,0,1,1,1,0,1,1,1,0,1,-1,1,0,1,-1,-1,0,1],_=function(o){var n,e;function t(n){var e;return void 0===n&&(n={}),(e=o.call(this,n)||this).isDemoSupported=!0,e}e=o,(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,t.getInfo=function(){return"\n<p>\nGradient calculated on the GPU using <code>Transform Feedback</code>.\n</p>\n"};var r=t.prototype;return r.onInitialize=function(o){o.canvas;var n,e,t=o.gl;if(this.isDemoSupported=Object(c.d)(t),!this.isDemoSupported)return p.a.error(u)(),{};var r=f.length*v,i={vertex:new l.a(t,{data:new Float32Array(f)}),position:new l.a(t,{byteLength:r,usage:t.STATIC_COPY,accessor:{type:t.FLOAT}}),color:new l.a(t,{byteLength:r,usage:t.STATIC_COPY,accessor:{type:t.FLOAT}})};return{transformModel:new a.a(t,{vs:"#version 300 es\nlayout(location = 0) in vec4 position;\n\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = position;\n  v_color = vec4(clamp(vec2(position), 0.0, 1.0), 0.0, 1.0);\n}\n",fs:"#version 300 es\nprecision highp float;\nvoid main() {}\n",varyings:d,drawMode:t.TRIANGLES,vertexCount:6,attributes:(n={},n[0]=i.vertex,n),_feedbackBuffers:{gl_Position:i.position,v_color:i.color}}),renderModel:new a.a(t,{vs:"#version 300 es\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\n\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = position;\n  v_color = color;\n}\n",fs:"#version 300 es\nprecision highp float;\n\nin vec4 v_color;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = v_color;\n}\n",drawMode:t.TRIANGLES,vertexCount:6,attributes:(e={},e[0]=i.position,e[1]=i.color,e)})}},r.onRender=function(o){o.gl,o.time;var n=o.renderModel,e=o.transformModel;this.isDemoSupported&&(e.transform({unbindModels:[n]}),n.clear({color:[0,0,0,1]}),n.draw())},r.isSupported=function(){return this.isDemoSupported},r.getAltText=function(){return u},t}(s.a);"undefined"==typeof window||window.website||(new _).start();e.d(n,"default",(function(){return g}));var g=function(o){var n,e;function t(){return o.apply(this,arguments)||this}return e=o,(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,t.prototype.render=function(){return r.a.createElement(i.a,{AnimationLoop:_,exampleConfig:this.props.pageContext.exampleConfig})},t}(r.a.Component)}}]);
//# sourceMappingURL=component---templates-api-example-transform-feedback-jsx-1f466a615c1c93c3c051.js.map