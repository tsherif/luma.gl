(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{aI42:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));e("VRzm"),e("Btvt");var o=function(){function t(){}t.getInfo=function(){return""};var n=t.prototype;return n.start=function(){},n.stop=function(){},n.delete=function(){},n.onFinalize=function(){},n.waitForRender=function(){return Promise.resolve()},n._setDisplay=function(){},n._getCanvas=function(t){var n;if(void 0===t&&(t={}),t.canvas){n=document.getElementById(t.canvas);var e=window.devicePixelRatio||1;n.height=n.clientHeight*e,n.width=n.clientWidth*e}else(n=document.createElement("canvas")).width=800,n.height=600,document.body.appendChild(n);return n},n._getContainer=function(t){if(void 0===t&&(t={}),this.container)return this.container;var n,e;if(this.container=document.createElement("div"),t.canvas){var o=document.getElementById(t.canvas);this.parent=o.parentElement,n=o.clientWidth,e=o.clientHeight,this.container.style.position="relative",this.container.style.top="-"+e+"px"}else this.parent=document.body,n=800,e=800;return this.container.style.width=n+"px",this.container.style.height=e+"px",this.parent.appendChild(this.container),this.container},n._removeContainer=function(t){void 0===t&&(t={}),this.parent.removeChild(this.container)},t}();function r(){var t=1,n=1;return function(){return t=Math.sin(17.23*n),n=Math.cos(27.92*t),(e=1432.71*Math.abs(t*n))-Math.floor(e);var e}}},"s0S/":function(t,n,e){"use strict";e.r(n);var o=e("q1tI"),r=e.n(o),i=e("z0FI"),a=(e("Y9lz"),e("UD/Y")),c=e("3LCa"),s=e("IObG"),u=e("lHlH"),l=e("aI42");var p=function(t){var n,e;function o(){return t.apply(this,arguments)||this}e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,o.getInfo=function(){return"\nUsing an externally created context with luma.gl\n"};var r=o.prototype;return r.start=function(t){var n=this._getCanvas(t),e=Object(u.c)(n.getContext("webgl")||n.getContext("experimental-webgl"));e.clearColor(0,0,0,1);var o=new c.a(e,new Float32Array([-.5,-.5,.5,-.5,0,.5])),r=new c.a(e,new Float32Array([1,0,0,0,1,0,0,0,1])),i=new a.a(e,{vs:"\n      attribute vec2 position;\n      attribute vec3 color;\n\n      varying vec3 vColor;\n\n      void main() {\n        vColor = color;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }\n    ",fs:"\n      varying vec3 vColor;\n\n      void main() {\n        gl_FragColor = vec4(vColor, 1.0);\n      }\n    ",attributes:{position:o,color:r},vertexCount:3}),l={positionBuffer:o,colorBuffer:r,model:i};l.rafHandle=requestAnimationFrame((function t(){l.rafHandle=requestAnimationFrame(t),Object(s.a)(e,{color:[0,0,0,1]}),i.draw()})),this.resources=l},r.stop=function(){cancelAnimationFrame(this.resources.rafHandle)},r.delete=function(){var t=this.resources,n=t.positionBuffer,e=t.colorBuffer,o=t.model;n.delete(),e.delete(),o.delete()},o}(l.a);"undefined"==typeof window||window.website||(new p).start();e.d(n,"default",(function(){return d}));var d=function(t){var n,e;function o(){return t.apply(this,arguments)||this}return e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,o.prototype.render=function(){var t=this.props.pageContext,n=t&&t.exampleConfig||{};return r.a.createElement(i.a,{AnimationLoop:p,exampleConfig:n})},o}(r.a.Component)}}]);
//# sourceMappingURL=component---templates-getting-started-example-external-context-jsx-e7789ac8c264ee2402c8.js.map