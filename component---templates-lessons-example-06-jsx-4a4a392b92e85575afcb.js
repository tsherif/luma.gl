(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{436:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),a=n(407),o=n(0),s=n.n(o),u=n(295),c=n(223),h=n(460),l=n(458),d=n(179),p=n(452),f=n(453);var v=0,y=.01,m=0,b=.013,g=-5,k=0,E=["nearest","linear","mipmap"];function x(t){k=void 0!==t?t:(k+1)%3;var e=document.getElementById("filter");e&&(e.textContent="GL."+E[k].toUpperCase())}var _=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.getInfo=function(){return'\n<p>\n  <a href="http://learningwebgl.com/blog/?p=571" target="_blank">\n    Keyboard input and texture filters\n  </a>\n\n  <br/>\n  <br/>\n\n  Use arrow keys to spin the box and <code>+</code>/<code>-</code> to zoom in/out.\n\n  <br/>\n  <br/>\n\n  Filter (<code>F</code>): <code><span id=\'filter\'/></code>\n<p>\nThe classic WebGL Lessons in luma.gl\n'};var i=r.prototype;return i.onInitialize=function(t){t.canvas;var e,n,r,i,a,o,p,f=t.gl;document.addEventListener("keydown",w),Object(u.a)(f,((e={clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:s.a.LEQUAL})[s.a.UNPACK_FLIP_Y_WEBGL]=!0,e)),x(0);var v=Object(c.b)("crate.gif");return{cube:new h.a(f,{geometry:new l.a,vs:"attribute vec3 positions;\nattribute vec2 texCoords;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\n\nvoid main(void) {\n  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);\n  vTextureCoord = texCoords;\n}\n",fs:"precision highp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void) {\n  gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n}\n"}),textures:{nearest:new d.a(f,{data:v,parameters:(n={},n[s.a.TEXTURE_MIN_FILTER]=s.a.NEAREST,n[s.a.TEXTURE_MAG_FILTER]=s.a.NEAREST,n),pixelStore:(r={},r[s.a.UNPACK_FLIP_Y_WEBGL]=!0,r)}),linear:new d.a(f,{data:v,parameters:(i={},i[s.a.TEXTURE_MIN_FILTER]=s.a.LINEAR,i[s.a.TEXTURE_MAG_FILTER]=s.a.LINEAR,i),pixelStore:(a={},a[s.a.UNPACK_FLIP_Y_WEBGL]=!0,a)}),mipmap:new d.a(f,{data:v,mipmap:!0,parameters:(o={},o[s.a.TEXTURE_MIN_FILTER]=s.a.LINEAR_MIPMAP_LINEAR,o[s.a.TEXTURE_MAG_FILTER]=s.a.LINEAR,o),pixelStore:(p={},p[s.a.UNPACK_FLIP_Y_WEBGL]=!0,p)})}}},i.onRender=function(t){var e=t.gl,n=t.tick,r=t.aspect,i=t.cube,a=t.textures;v+=y,m+=b,e.clear(s.a.COLOR_BUFFER_BIT|s.a.DEPTH_BUFFER_BIT),i.setRotation([v,m,0]).updateMatrix();var o=(new f.a).lookAt({eye:[0,0,0]}).translate([0,0,g]).rotateXYZ([.01*n,.01*n,.01*n]).multiplyRight(i.matrix);i.setUniforms({uMVMatrix:o,uPMatrix:(new f.a).perspective({aspect:r}),uSampler:a[E[k]]}).draw()},i.onFinalize=function(){document.removeEventListener("keydown",w)},r}(p.a);function w(t){switch(t.code){case"KeyF":x();break;case"ArrowUp":y-=.01;break;case"ArrowDown":y+=.01;break;case"ArrowLeft":b-=.01;break;case"ArrowRight":b+=.01;break;case"Equal":g+=.05;break;case"Minus":g-=.05}}"undefined"==typeof window||window.website||(new _).start();n.d(e,"default",(function(){return O}));var O=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return i.a.createElement(a.a,{AnimationLoop:_,exampleConfig:this.props.pageContext.exampleConfig})},r}(i.a.Component)},456:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(2),n(26),n(3),n(13);var r=n(459),i=n(453),a=n(132),o=n(14),s=function(){function t(t){void 0===t&&(t={});var e=t.id;this.id=e||Object(a.c)(this.constructor.name),this.display=!0,this.position=new r.a,this.rotation=new r.a,this.scale=new r.a(1,1,1),this.matrix=new i.a,this.userData={},this.props={},this._setScenegraphNodeProps(t)}var e=t.prototype;return e.delete=function(){},e.setProps=function(t){return this._setScenegraphNodeProps(t),this},e.toString=function(){return"{type: ScenegraphNode, id: "+this.id+")}"},e.setPosition=function(t){return Object(o.a)(3===t.length,"setPosition requires vector argument"),this.position=t,this},e.setRotation=function(t){return Object(o.a)(3===t.length,"setRotation requires vector argument"),this.rotation=t,this},e.setScale=function(t){return Object(o.a)(3===t.length,"setScale requires vector argument"),this.scale=t,this},e.setMatrix=function(t,e){void 0===e&&(e=!0),e?this.matrix.copy(t):this.matrix=t},e.setMatrixComponents=function(t){var e=t.position,n=t.rotation,r=t.scale,i=t.update,a=void 0===i||i;return e&&this.setPosition(e),n&&this.setRotation(n),r&&this.setScale(r),a&&this.updateMatrix(),this},e.updateMatrix=function(){var t=this.position,e=this.rotation,n=this.scale;return this.matrix.identity(),this.matrix.translate(t),this.matrix.rotateXYZ(e),this.matrix.scale(n),this},e.update=function(t){var e=void 0===t?{}:t,n=e.position,r=e.rotation,i=e.scale;return n&&this.setPosition(n),r&&this.setRotation(r),i&&this.setScale(i),this.updateMatrix(),this},e.getCoordinateUniforms=function(t,e){Object(o.a)(t),e=e||this.matrix;var n=new i.a(t).multiplyRight(e),r=n.invert(),a=r.transpose();return{viewMatrix:t,modelMatrix:e,objectMatrix:e,worldMatrix:n,worldInverseMatrix:r,worldInverseTransposeMatrix:a}},e._setScenegraphNodeProps=function(t){"display"in t&&(this.display=t.display),"position"in t&&this.setPosition(t.position),"rotation"in t&&this.setRotation(t.rotation),"scale"in t&&this.setScale(t.scale),"matrix"in t&&this.setMatrix(t.matrix),Object.assign(this.props,t)},t}()},458:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(2),n(35),n(146);var r=n(408),i=n(132);var a=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),o=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),u=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),c={POSITION:{size:3,value:new Float32Array(o)},NORMAL:{size:3,value:new Float32Array(s)},TEXCOORD_0:{size:2,value:new Float32Array(u)}},h=function(t){var e,n;function r(e){void 0===e&&(e={});var n=e.id,r=void 0===n?Object(i.c)("cube-geometry"):n;return t.call(this,Object.assign({},e,{id:r,indices:{size:1,value:new Uint16Array(a)},attributes:Object.assign({},c,{},e.attributes)}))||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r}(r.a)},459:function(t,e,n){"use strict";var r=n(36),i=n(31),a=n(115),o=n(83),s=n(114),u=n(231),c=n(72),h=n(229),l=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(i.a)(e,[{key:"len",value:function(){return Math.sqrt(this.lengthSquared())}},{key:"magnitude",value:function(){return this.len()}},{key:"lengthSquared",value:function(){for(var t=0,e=0;e<this.ELEMENTS;++e)t+=this[e]*this[e];return t}},{key:"magnitudeSquared",value:function(){return this.lengthSquared()}},{key:"distance",value:function(t){return Math.sqrt(this.distanceSquared(t))}},{key:"distanceSquared",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n){var r=this[n]-t[n];e+=r*r}return Object(c.a)(e)}},{key:"dot",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n)e+=this[n]*t[n];return Object(c.a)(e)}},{key:"normalize",value:function(){var t=this.magnitude();if(0!==t)for(var e=0;e<this.ELEMENTS;++e)this[e]/=t;return this.check()}},{key:"multiply",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++)for(var a=i[r],o=0;o<this.ELEMENTS;++o)this[o]*=a[o];return this.check()}},{key:"divide",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++)for(var a=i[r],o=0;o<this.ELEMENTS;++o)this[o]/=a[o];return this.check()}},{key:"lengthSq",value:function(){return this.lengthSquared()}},{key:"distanceTo",value:function(t){return this.distance(t)}},{key:"distanceToSquared",value:function(t){return this.distanceSquared(t)}},{key:"getComponent",value:function(t){return Object(h.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),Object(c.a)(this[t])}},{key:"setComponent",value:function(t,e){return Object(h.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),this[t]=e,this.check()}},{key:"addVectors",value:function(t,e){return this.copy(t).add(e)}},{key:"subVectors",value:function(t,e){return this.copy(t).subtract(e)}},{key:"multiplyVectors",value:function(t,e){return this.copy(t).multiply(e)}},{key:"addScaledVector",value:function(t,e){return this.add(new this.constructor(t).multiplyScalar(e))}},{key:"x",get:function(){return this[0]},set:function(t){return this[0]=Object(c.a)(t)}},{key:"y",get:function(){return this[1]},set:function(t){return this[1]=Object(c.a)(t)}}]),e}(u.a),d=n(65),p=n(230),f=n(183);n.d(e,"a",(function(){return y}));var v=[0,0,0],y=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(r.a)(this,e),t=Object(a.a)(this,Object(o.a)(e).call(this,-0,-0,-0)),1===arguments.length&&Object(d.d)(n)?t.copy(n):(d.a.debug&&(Object(c.a)(n),Object(c.a)(i),Object(c.a)(s)),t[0]=n,t[1]=i,t[2]=s),t}return Object(s.a)(e,t),Object(i.a)(e,[{key:"set",value:function(t,e,n){return this[0]=t,this[1]=e,this[2]=n,this.check()}},{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.check()}},{key:"fromObject",value:function(t){return d.a.debug&&(Object(c.a)(t.x),Object(c.a)(t.y),Object(c.a)(t.z)),this[0]=t.x,this[1]=t.y,this[2]=t.z,this.check()}},{key:"toObject",value:function(t){return t.x=this[0],t.y=this[1],t.z=this[2],t}},{key:"angle",value:function(t){return p.a(this,t)}},{key:"cross",value:function(t){return p.c(this,this,t),this.check()}},{key:"rotateX",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?v:n;return p.h(this,this,r,e),this.check()}},{key:"rotateY",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?v:n;return p.i(this,this,r,e),this.check()}},{key:"rotateZ",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?v:n;return p.j(this,this,r,e),this.check()}},{key:"transform",value:function(t){return this.transformAsPoint(t)}},{key:"transformAsPoint",value:function(t){return p.l(this,this,t),this.check()}},{key:"transformAsVector",value:function(t){return Object(f.c)(this,this,t),this.check()}},{key:"transformByMatrix3",value:function(t){return p.k(this,this,t),this.check()}},{key:"transformByMatrix2",value:function(t){return Object(f.b)(this,this,t),this.check()}},{key:"transformByQuaternion",value:function(t){return p.m(this,this,t),this.check()}},{key:"ELEMENTS",get:function(){return 3}},{key:"z",get:function(){return this[2]},set:function(t){return this[2]=Object(c.a)(t)}}]),e}(l)},460:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(409);var i=function(t){var e,n;function i(e,n){var i;return void 0===n&&(n={}),(i=t.call(this,n)||this).onBeforeRender=null,i.AfterRender=null,e instanceof r.a?(i.model=e,i._setModelNodeProps(n)):i.model=new r.a(e,n),i.managedResources=n.managedResources||[],i}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=i.prototype;return a.setProps=function(e){return t.prototype.setProps.call(this,e),this._setModelNodeProps(e),this},a.delete=function(){this.model&&(this.model.delete(),this.model=null),this.managedResources.forEach((function(t){return t.delete()})),this.managedResources=[]},a.draw=function(){var t;return(t=this.model).draw.apply(t,arguments)},a.setUniforms=function(){var t;return(t=this.model).setUniforms.apply(t,arguments),this},a.setAttributes=function(){var t;return(t=this.model).setAttributes.apply(t,arguments),this},a.updateModuleSettings=function(){var t;return(t=this.model).updateModuleSettings.apply(t,arguments),this},a._setModelNodeProps=function(t){this.model.setProps(t)},i}(n(456).a)}}]);
//# sourceMappingURL=component---templates-lessons-example-06-jsx-4a4a392b92e85575afcb.js.map