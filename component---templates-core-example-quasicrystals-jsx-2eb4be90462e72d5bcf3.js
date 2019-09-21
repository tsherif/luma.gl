(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{431:function(t,n,o){"use strict";o.r(n);var e=o(1),a=o.n(e),i=o(407),r=o(492),p=o(452);var u=function(t){var n,o;function e(){return t.apply(this,arguments)||this}o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var a=e.prototype;return a.onInitialize=function(t){var n=t.gl;return{clipSpace:new r.a(n,{fs:"precision highp float;\n\n#define PI 3.1415926535\n\nuniform float uTime;\nuniform float uRatio;\n\nvarying vec2 position;\n\nvoid main(void) {\n  vec2 defpixel = (position - vec2( 0.5 ) ) * 170.;\n\n  float step = PI / uRatio;\n\n  // Sum up total of all waves\n  float total;\n  for (float i = 0.; i < 100.; i++) {\n    if ( i < uRatio ) {\n      float value = i * step;\n      float s = sin( value );\n      float c = cos( value );\n      total += ( cos( c * defpixel.x + s * defpixel.y + uTime ) + 1. ) / 2.;\n    }\n  }\n\n  float v = mod(total, 1.);\n  float k = total - v;\n  total = ( mod( abs( k ), 2. ) ) <= 0.0001 ? v : 1. - v;\n\n  gl_FragColor =\n    vec4( total * (1. - (uRatio / 20.)), total * (uRatio / 10.), total * (uRatio / 5.), 1. );\n}\n"})}},a.onRender=function(t){t.gl,t.canvas;var n=t.time,o=t.clipSpace,e=function(){if("undefined"==typeof document)return{uRatio:7};var t=document.getElementById("wavefronts");return{uRatio:t?parseFloat(t.value):7}}().uRatio;o.draw({uniforms:{uTime:n/600%(2*Math.PI),uRatio:e}})},e.getInfo=function(){return'\n<p>\n  <code>Animating Quasicrystals</code>\n<p>\n  Crystal patterns generated by wavefront interference patterns.\n  Rendered by a custom fragment shader in a luma.gl <code>ClipSpace</code> model.\n  A luma.gl port (of the PhiloGL port) of the work of\n  <a href="http://www.jasondavies.com/animated-quasicrystals/">Jason Davies</a>\n</p>\n<div>\n  Wavefronts\n  <input id="wavefronts" type="range" value="7.0" min="1" max="10" step="0.1">\n</div>\n'},e}(p.a);"undefined"==typeof window||window.website||(new u).start();o.d(n,"default",(function(){return c}));var c=function(t){var n,o;function e(){return t.apply(this,arguments)||this}return o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,e.prototype.render=function(){return a.a.createElement(i.a,{AnimationLoop:u,exampleConfig:this.props.pageContext.exampleConfig})},e}(a.a.Component)},492:function(t,n,o){"use strict";o.d(n,"a",(function(){return c}));o(35),o(2);var e=o(0),a=o.n(e),i=o(409),r=o(408);var p="attribute vec2 aClipSpacePosition;\nattribute vec2 aTexCoord;\nattribute vec2 aCoordinate;\n\nvarying vec2 position;\nvarying vec2 coordinate;\nvarying vec2 uv;\n\nvoid main(void) {\n  gl_Position = vec4(aClipSpacePosition, 0., 1.);\n  position = aClipSpacePosition;\n  coordinate = aCoordinate;\n  uv = aTexCoord;\n}\n",u=[-1,-1,1,-1,-1,1,1,1],c=function(t){var n,o;function e(n,o){var e,i=u.map((function(t){return-1===t?0:t}));return(e=t.call(this,n,Object.assign({},o,{vs:p,geometry:new r.a({drawMode:a.a.TRIANGLE_STRIP,vertexCount:4,attributes:{aClipSpacePosition:{size:2,value:new Float32Array(u)},aTexCoord:{size:2,value:new Float32Array(i)},aCoordinate:{size:2,value:new Float32Array(i)}}})}))||this).setVertexCount(4),e}return o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,e}(i.a)}}]);
//# sourceMappingURL=component---templates-core-example-quasicrystals-jsx-2eb4be90462e72d5bcf3.js.map