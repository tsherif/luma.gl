(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{418:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),i=e(402),a=(e(180),e(36),e(3),e(413)),u=e(431),c=e(29),p=e(34),s=e(292),f=e(65),l=e(432),v=e(73);function d(t,n,e){return t+e*(n-t)}function h(t,n){for(var e=[],r=t;r<=n;r++)e.push(r);return e}function m(t,n){for(var e,r=t.length,o=0;r;)e=Math.floor(n()*r),o=t[r-=1],t[r]=t[e],t[e]=o;return t}var w=function(t){return t*t*t*(t*(6*t-15)+10)},g=function(t,n,e,r){var o=15&t,i=o<8?n:e,a=o<4?e:12==o||14==o?n:r;return(1&o?-i:i)+(2&o?-a:a)};var y=e(436);var b=Object(y.b)(),M=function(t){var n,e;function r(n){var e;return void 0===n&&(n={}),(e=t.call(this,Object.assign(n,{useDevicePixels:!0}))||this).isDemoSupported=!0,e}e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,r.getInfo=function(){return"\n<p>\nVolumetric 3D noise visualized using a <b>3D texture</b>.\n<p>\nUses the luma.gl <code>Texture3D</code> class.\n"};var o=r.prototype;return o.onInitialize=function(t){var n=t.gl;if(this.isDemoSupported=Object(c.d)(n),!this.isDemoSupported)return{};var e=function(t){if("object"!=typeof t)throw new TypeError("params is not an object");if("function"!=typeof t.interpolation)throw new TypeError("params.interpolation is not a function");if(!Array.isArray(t.permutation))throw new TypeError("params.permutation is not an array");if(256!=t.permutation.length)throw new Error("params.permutation must have 256 items");for(var n=t.interpolation,e=t.permutation.slice(0),r=0;r<256;r++)e[256+r]=e[r];return function(t,r,o){var i=Math.floor(t),a=Math.floor(r),u=Math.floor(o),c=255&i,p=255&a,s=255&u;r-=a,o-=u;var f=w(t-=i),l=w(r),v=w(o),d=e[c]+p,h=e[d]+s,m=e[d+1]+s,y=e[c+1]+p,b=e[y]+s,M=e[y+1]+s;return n(n(n(g(e[h],t,r,o),g(e[b],t-1,r,o),f),n(g(e[m],t,r-1,o),g(e[M],t-1,r-1,o),f),l),n(n(g(e[h+1],t,r,o-1),g(e[b+1],t-1,r,o-1),f),n(g(e[m+1],t,r-1,o-1),g(e[M+1],t-1,r-1,o-1),f),l),v)}}({interpolation:d,permutation:m(h(0,255),b)});Object(f.c)(n,{clearColor:[0,0,0,1],blend:!0,blendFunc:[n.ONE,n.ONE_MINUS_SRC_ALPHA]});for(var r=new Float32Array(6291456),o=0,i=-.5,u=0;u<128;++u){for(var v=-.5,y=0;y<128;++y){for(var M=-.5,T=0;T<128;++T)r[o++]=i,r[o++]=v,r[o++]=M,M+=1/128;v+=1/128}i+=1/128}for(var E=new p.a(n,r),O=new Uint8Array(4096),_=0,D=0;D<16;++D)for(var S=0;S<16;++S)for(var x=0;x<16;++x)O[_++]=255*(.5+.5*e(D/1.12,S/1.12,x/1.12));var R=new l.a,U=(new l.a).lookAt({eye:[1,1,1]}),C=new s.a(n,{width:16,height:16,depth:16,data:O,format:n.RED,dataFormat:n.R8});return{cloud:new a.a(n,{vs:"#version 300 es\nin vec3 position;\n\nuniform mat4 uMVP;\n\nout vec3 vUV;\nvoid main() {\n  vUV = position.xyz + 0.5;\n  gl_Position = uMVP * vec4(position, 1.0);\n  gl_PointSize = 2.0;\n}",fs:"#version 300 es\nprecision highp float;\nprecision lowp sampler3D;\nin vec3 vUV;\nuniform sampler3D uTexture;\nuniform float uTime;\nout vec4 fragColor;\nvoid main() {\n  float alpha = texture(uTexture, vUV + vec3(0.0, 0.0, uTime)).r * 0.1;\n  fragColor = vec4(fract(vUV) * alpha, alpha);\n}",drawMode:n.POINTS,vertexCount:r.length/3,attributes:{position:E},uniforms:{uTexture:C,uView:U}}),mvpMat:R,viewMat:U}},o.onRender=function(t){var n=t.gl,e=t.cloud,r=t.mvpMat,o=t.viewMat,i=t.tick,a=t.aspect;this.isDemoSupported&&(r.perspective({fov:Object(v.e)(75),aspect:a,near:.1,far:10}).multiplyRight(o),n.clear(n.COLOR_BUFFER_BIT),e.draw({uniforms:{uTime:i/100,uMVP:r}}))},o.onFinalize=function(t){t.gl;var n=t.cloud;n&&n.delete()},o.isSupported=function(){return this.isDemoSupported},o.getAltText=function(){return"THIS DEMO REQUIRES WEBLG2, BUT YOUR BROWSER DOESN'T SUPPORT IT"},r}(u.a);"undefined"==typeof window||window.website||(new M).start();e.d(n,"default",(function(){return T}));var T=function(t){var n,e;function r(){return t.apply(this,arguments)||this}return e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,r.prototype.render=function(){return o.a.createElement(i.a,{AnimationLoop:M,exampleConfig:this.props.pageContext.exampleConfig})},r}(o.a.Component)},436:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){function t(){}t.getInfo=function(){return""};var n=t.prototype;return n.start=function(){},n.stop=function(){},n.delete=function(){},n._setDisplay=function(){},n._getCanvas=function(t){var n;if(void 0===t&&(t={}),t.canvas){n=document.getElementById(t.canvas);var e=window.devicePixelRatio||1;n.height=n.clientHeight*e,n.width=n.clientWidth*e}else(n=document.createElement("canvas")).width=800,n.height=600,document.body.appendChild(n);return n},t}();function o(){var t=1,n=1;return function(){return t=Math.sin(17.23*n),n=Math.cos(27.92*t),(e=1432.71*Math.abs(t*n))-Math.floor(e);var e}}}}]);
//# sourceMappingURL=component---templates-api-example-texture-3-d-jsx-69894e3100ed333e5232.js.map