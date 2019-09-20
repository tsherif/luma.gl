(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{417:function(n,t,o){"use strict";o.r(t);var e=o(1),i=o.n(e),r=o(405),a=o(489),p=o(450);var c=function(n){var t,o;function e(){return n.apply(this,arguments)||this}o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var i=e.prototype;return i.onInitialize=function(n){var t=n.gl;return{clipSpace:new a.a(t,{fs:"precision highp float;\n\nuniform float uTime;\n\nvarying vec2 position;\n\nvoid main(void) {\n  float d = length(position * 64.0);\n  d = 0.5 * sin(d * sin(uTime)) + 0.5 * sin(position.x * 64.0) * sin(position.y * 64.0);\n  gl_FragColor = vec4(1.0-d,0,d, 1);\n}\n",uniforms:{uTime:function(n){return.01*n.tick}}})}},i.onRender=function(n){n.clipSpace.draw({animationProps:n})},e.getInfo=function(){return"\n<p>\n  Fragment shader based rendering.\n<p>\nA luma.gl <code>ClipSpace</code> rendering 3 lines of fragment shader code,\nusing a single uniform <code>uTime</code>.\n"},e}(p.a),u=c;"undefined"!=typeof window&&(window.startApp=function(){(new c).start()}),o.d(t,"default",(function(){return s}));var s=function(n){var t,o;function e(){return n.apply(this,arguments)||this}return o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,e.prototype.render=function(){return i.a.createElement(r.a,{AnimationLoop:u,exampleConfig:this.props.pageContext.exampleConfig})},e}(i.a.Component)},489:function(n,t,o){"use strict";o.d(t,"a",(function(){return u}));o(35),o(2);var e=o(0),i=o.n(e),r=o(407),a=o(406);var p="attribute vec2 aClipSpacePosition;\nattribute vec2 aTexCoord;\nattribute vec2 aCoordinate;\n\nvarying vec2 position;\nvarying vec2 coordinate;\nvarying vec2 uv;\n\nvoid main(void) {\n  gl_Position = vec4(aClipSpacePosition, 0., 1.);\n  position = aClipSpacePosition;\n  coordinate = aCoordinate;\n  uv = aTexCoord;\n}\n",c=[-1,-1,1,-1,-1,1,1,1],u=function(n){var t,o;function e(t,o){var e,r=c.map((function(n){return-1===n?0:n}));return(e=n.call(this,t,Object.assign({},o,{vs:p,geometry:new a.a({drawMode:i.a.TRIANGLE_STRIP,vertexCount:4,attributes:{aClipSpacePosition:{size:2,value:new Float32Array(c)},aTexCoord:{size:2,value:new Float32Array(r)},aCoordinate:{size:2,value:new Float32Array(r)}}})}))||this).setVertexCount(4),e}return o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,e}(r.a)}}]);
//# sourceMappingURL=component---templates-core-example-fragment-jsx-31b61ec07a8c6c9892c5.js.map