(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{418:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(405),a=(n(35),n(294)),s=n(70),u=n(406),c=n(407),h=n(449),l=n(458),d=(n(146),n(2),n(457)),f=n(131);var p=[-1,0,0,0,1,0,0,0,-1,0,0,1,0,-1,0,1,0,0],v=[3,4,5,3,5,1,3,1,0,3,0,4,4,0,2,4,2,5,2,0,1,5,2,1],m=function(t){var e,n;function r(e){void 0===e&&(e={});var n=e.id,r=void 0===n?Object(f.c)("ico-sphere-geometry"):n,i=function(t){var e=t.iterations,n=void 0===e?0:e,r=Math.PI,i=2*r,o=[].concat(p),a=[].concat(v);o.push(),a.push();for(var s=function(){var t={};return function(e,n){var r=((e*=3)<(n*=3)?e:n)+"|"+(e>n?e:n);if(r in t)return t[r];var i=o[e],a=o[e+1],s=o[e+2],u=(i+o[n])/2,c=(a+o[n+1])/2,h=(s+o[n+2])/2,l=Math.sqrt(u*u+c*c+h*h);return u/=l,c/=l,h/=l,o.push(u,c,h),t[r]=o.length/3-1}}(),u=0;u<n;u++){for(var c=[],h=0;h<a.length;h+=3){var l=s(a[h+0],a[h+1]),f=s(a[h+1],a[h+2]),m=s(a[h+2],a[h+0]);c.push(m,a[h+0],l,l,a[h+1],f,f,a[h+2],m,l,f,m)}a=c}for(var y=new Array(o.length),g=new Array(o.length/3*2),b=a.length-3;b>=0;b-=3){var w=a[b+0],k=a[b+1],M=a[b+2],x=3*w,j=3*k,O=3*M,S=2*w,P=2*k,E=2*M,_=o[x+0],z=o[x+1],R=o[x+2],C=Math.acos(R/Math.sqrt(_*_+z*z+R*R)),q=Math.atan2(z,_)+r,A=C/r,N=1-q/i,T=o[j+0],L=o[j+1],F=o[j+2],V=Math.acos(F/Math.sqrt(T*T+L*L+F*F)),D=Math.atan2(L,T)+r,I=V/r,U=1-D/i,B=o[O+0],X=o[O+1],Y=o[O+2],Z=Math.acos(Y/Math.sqrt(B*B+X*X+Y*Y)),J=Math.atan2(X,B)+r,Q=Z/r,K=1-J/i,G=[B-T,X-L,Y-F],H=[_-T,z-L,R-F],W=new d.a(G).cross(H).normalize(),$=void 0;(0===N||0===U||0===K)&&(0===N||N>.5)&&(0===U||U>.5)&&(0===K||K>.5)&&(o.push(o[x+0],o[x+1],o[x+2]),$=o.length/3-1,a.push($),g[2*$+0]=1,g[2*$+1]=A,y[3*$+0]=W.x,y[3*$+1]=W.y,y[3*$+2]=W.z,o.push(o[j+0],o[j+1],o[j+2]),$=o.length/3-1,a.push($),g[2*$+0]=1,g[2*$+1]=I,y[3*$+0]=W.x,y[3*$+1]=W.y,y[3*$+2]=W.z,o.push(o[O+0],o[O+1],o[O+2]),$=o.length/3-1,a.push($),g[2*$+0]=1,g[2*$+1]=Q,y[3*$+0]=W.x,y[3*$+1]=W.y,y[3*$+2]=W.z),y[x+0]=y[j+0]=y[O+0]=W.x,y[x+1]=y[j+1]=y[O+1]=W.y,y[x+2]=y[j+2]=y[O+2]=W.z,g[S+0]=N,g[S+1]=A,g[P+0]=U,g[P+1]=I,g[E+0]=K,g[E+1]=Q}return{indices:{size:1,value:new Uint16Array(a)},attributes:{POSITION:{size:3,value:new Float32Array(o)},NORMAL:{size:3,value:new Float32Array(y)},TEXCOORD_0:{size:2,value:new Float32Array(g)}}}}(e),o=i.indices,a=i.attributes;return t.call(this,Object.assign({},e,{id:r,indices:o,attributes:Object.assign({},a,{},e.attributes)}))||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r}(u.a);var y=n(224),g=n(450),b=n(451),w=n(65);var k,M,x,j,O,S="attribute vec2 aPosition;\n\nvoid main(void) {\n  gl_Position = vec4(aPosition, 0, 1);\n}\n",P=[],E=[],_=[],z=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.getInfo=function(){return"\n<p>\n  Electron trails renderings persist across multiple frames.\n<p>\n  Uses multiple luma.gl <code>Framebuffer</code>s to hold previously rendered data between frames.\n</p>\n"};var i=r.prototype;return i.onInitialize=function(t){var e=t.gl,n=t.width,r=t.height;Object(a.a)(e,{clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:e.LEQUAL,faceCulling:!0,cullFace:e.BACK}),k=new s.a(e,{width:n,height:r}),M=[new s.a(e,{width:n,height:r}),new s.a(e,{width:n,height:r})];var i=new u.a({attributes:{aPosition:{value:new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),size:2}},vertexCount:6});x=new c.a(e,{id:"quad",program:new h.a(e,{vs:S,fs:"precision highp float;\n\nuniform sampler2D uTexture;\nuniform vec2 uRes;\n\nvoid main(void) {\n  vec2 p = gl_FragCoord.xy/uRes.xy;\n  gl_FragColor = texture2D(uTexture, p);\n}\n"}),geometry:i}),j=new c.a(e,{id:"persistence-quad",program:new h.a(e,{vs:S,fs:"precision highp float;\n\nuniform sampler2D uScene;\nuniform sampler2D uPersistence;\nuniform vec2 uRes;\n\nvoid main(void) {\n  vec2 p = gl_FragCoord.xy / uRes.xy;\n  vec4 cS = texture2D(uScene, p);\n  vec4 cP = texture2D(uPersistence, p);\n  gl_FragColor = mix(cS*4.0, cP, 0.9);\n}\n"}),geometry:i}),O=new l.a(e,{id:"electron",geometry:new m({iterations:4}),program:new h.a(e,{vs:"attribute vec3 positions;\nattribute vec3 normals;\n\nuniform mat4 uModelView;\nuniform mat4 uProjection;\n\nvarying vec3 normal;\n\nvoid main(void) {\n  gl_Position = uProjection * uModelView * vec4(positions, 1.0);\n  normal = vec3((uModelView * vec4(normals, 0.0)));\n}\n",fs:"precision highp float;\n\nuniform vec3 uColor;\nuniform bool uLighting;\n\nvarying vec3 normal;\n\nvoid main(void) {\n  float d = 1.0;\n  if (uLighting) {\n    vec3 l = normalize(vec3(1,1,2));\n    d = dot(normal, l);\n  }\n  gl_FragColor = vec4(uColor * d, 1);\n}\n"})});for(var o=0;o<64;o++){var f=new d.a(Math.random()-.5,Math.random()-.5,Math.random()-.5),p=Math.random()+1;f.normalize().scale(p);f.scale(1.25),P.push(f);var v=new d.a(Math.random()-.5,Math.random()-.5,Math.random()-.5),y=f.clone().cross(v).normalize(),g=4/p*.0125,w=(new b.a).rotateAxis(g,y);E.push(w)}for(var z=0;z<64;z++){var R=new d.a(Math.random()-.5,Math.random()-.5,Math.random()-.5);R=R.normalize().scale(.5),_.push(R)}},i.onRender=function(t){var e=t.gl,n=t.tick,r=t.width,i=t.height,o=t.aspect;k.resize({width:r,height:i}),M[0].resize({width:r,height:i}),M[1].resize({width:r,height:i});var a=(new b.a).perspective({fov:Object(w.e)(75),aspect:o}),s=(new b.a).lookAt({eye:[0,0,4]});Object(y.a)(e,{framebuffer:k,color:[0,0,0,1],depth:1});for(var u=0;u<64;u++){P[u]=E[u].transformVector(P[u]);var c=(new b.a).translate(P[u]);O.setPosition([c[12],c[13],c[14]]).setScale([.06125,.06125,.06125]).updateMatrix().draw({framebuffer:k,uniforms:{uModelView:s.clone().multiplyRight(O.matrix),uView:s,uProjection:a,uColor:[0,.5,1],uLighting:0}})}for(var h=0;h<64;h++){var l=(new b.a).rotateXYZ([.013*n,0,0]).rotateXYZ([0,.021*n,0]).translate(_[h]);O.setPosition([l[12],l[13],l[14]]).setScale([.25,.25,.25]).updateMatrix().draw({framebuffer:k,uniforms:{uModelView:s.clone().multiplyRight(O.matrix),uProjection:a,uColor:[1,.25,.25],uLighting:1}})}var d=n%2,f=M[d],p=M[1-d];Object(y.a)(e,{framebuffer:f,color:!0,depth:!0}),j.draw({framebuffer:f,uniforms:{uScene:k.texture,uPersistence:p.texture,uRes:[r,i]}}),Object(y.a)(e,{color:!0,depth:!0}),x.draw({uniforms:{uTexture:f.texture,uRes:[r,i]}})},r}(g.a);"undefined"==typeof window||window.website||(new z).start();n.d(e,"default",(function(){return R}));var R=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return i.a.createElement(o.a,{AnimationLoop:z,exampleConfig:this.props.pageContext.exampleConfig})},r}(i.a.Component)},454:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(2),n(26),n(3),n(13);var r=n(457),i=n(451),o=n(131),a=n(14),s=function(){function t(t){void 0===t&&(t={});var e=t.id;this.id=e||Object(o.c)(this.constructor.name),this.display=!0,this.position=new r.a,this.rotation=new r.a,this.scale=new r.a(1,1,1),this.matrix=new i.a,this.userData={},this.props={},this._setScenegraphNodeProps(t)}var e=t.prototype;return e.delete=function(){},e.setProps=function(t){return this._setScenegraphNodeProps(t),this},e.toString=function(){return"{type: ScenegraphNode, id: "+this.id+")}"},e.setPosition=function(t){return Object(a.a)(3===t.length,"setPosition requires vector argument"),this.position=t,this},e.setRotation=function(t){return Object(a.a)(3===t.length,"setRotation requires vector argument"),this.rotation=t,this},e.setScale=function(t){return Object(a.a)(3===t.length,"setScale requires vector argument"),this.scale=t,this},e.setMatrix=function(t,e){void 0===e&&(e=!0),e?this.matrix.copy(t):this.matrix=t},e.setMatrixComponents=function(t){var e=t.position,n=t.rotation,r=t.scale,i=t.update,o=void 0===i||i;return e&&this.setPosition(e),n&&this.setRotation(n),r&&this.setScale(r),o&&this.updateMatrix(),this},e.updateMatrix=function(){var t=this.position,e=this.rotation,n=this.scale;return this.matrix.identity(),this.matrix.translate(t),this.matrix.rotateXYZ(e),this.matrix.scale(n),this},e.update=function(t){var e=void 0===t?{}:t,n=e.position,r=e.rotation,i=e.scale;return n&&this.setPosition(n),r&&this.setRotation(r),i&&this.setScale(i),this.updateMatrix(),this},e.getCoordinateUniforms=function(t,e){Object(a.a)(t),e=e||this.matrix;var n=new i.a(t).multiplyRight(e),r=n.invert(),o=r.transpose();return{viewMatrix:t,modelMatrix:e,objectMatrix:e,worldMatrix:n,worldInverseMatrix:r,worldInverseTransposeMatrix:o}},e._setScenegraphNodeProps=function(t){"display"in t&&(this.display=t.display),"position"in t&&this.setPosition(t.position),"rotation"in t&&this.setRotation(t.rotation),"scale"in t&&this.setScale(t.scale),"matrix"in t&&this.setMatrix(t.matrix),Object.assign(this.props,t)},t}()},457:function(t,e,n){"use strict";var r=n(36),i=n(31),o=n(115),a=n(83),s=n(114),u=n(231),c=n(72),h=n(229),l=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(i.a)(e,[{key:"len",value:function(){return Math.sqrt(this.lengthSquared())}},{key:"magnitude",value:function(){return this.len()}},{key:"lengthSquared",value:function(){for(var t=0,e=0;e<this.ELEMENTS;++e)t+=this[e]*this[e];return t}},{key:"magnitudeSquared",value:function(){return this.lengthSquared()}},{key:"distance",value:function(t){return Math.sqrt(this.distanceSquared(t))}},{key:"distanceSquared",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n){var r=this[n]-t[n];e+=r*r}return Object(c.a)(e)}},{key:"dot",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n)e+=this[n]*t[n];return Object(c.a)(e)}},{key:"normalize",value:function(){var t=this.magnitude();if(0!==t)for(var e=0;e<this.ELEMENTS;++e)this[e]/=t;return this.check()}},{key:"multiply",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++)for(var o=i[r],a=0;a<this.ELEMENTS;++a)this[a]*=o[a];return this.check()}},{key:"divide",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++)for(var o=i[r],a=0;a<this.ELEMENTS;++a)this[a]/=o[a];return this.check()}},{key:"lengthSq",value:function(){return this.lengthSquared()}},{key:"distanceTo",value:function(t){return this.distance(t)}},{key:"distanceToSquared",value:function(t){return this.distanceSquared(t)}},{key:"getComponent",value:function(t){return Object(h.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),Object(c.a)(this[t])}},{key:"setComponent",value:function(t,e){return Object(h.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),this[t]=e,this.check()}},{key:"addVectors",value:function(t,e){return this.copy(t).add(e)}},{key:"subVectors",value:function(t,e){return this.copy(t).subtract(e)}},{key:"multiplyVectors",value:function(t,e){return this.copy(t).multiply(e)}},{key:"addScaledVector",value:function(t,e){return this.add(new this.constructor(t).multiplyScalar(e))}},{key:"x",get:function(){return this[0]},set:function(t){return this[0]=Object(c.a)(t)}},{key:"y",get:function(){return this[1]},set:function(t){return this[1]=Object(c.a)(t)}}]),e}(u.a),d=n(65),f=n(230),p=n(183);n.d(e,"a",(function(){return m}));var v=[0,0,0],m=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(r.a)(this,e),t=Object(o.a)(this,Object(a.a)(e).call(this,-0,-0,-0)),1===arguments.length&&Object(d.d)(n)?t.copy(n):(d.a.debug&&(Object(c.a)(n),Object(c.a)(i),Object(c.a)(s)),t[0]=n,t[1]=i,t[2]=s),t}return Object(s.a)(e,t),Object(i.a)(e,[{key:"set",value:function(t,e,n){return this[0]=t,this[1]=e,this[2]=n,this.check()}},{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.check()}},{key:"fromObject",value:function(t){return d.a.debug&&(Object(c.a)(t.x),Object(c.a)(t.y),Object(c.a)(t.z)),this[0]=t.x,this[1]=t.y,this[2]=t.z,this.check()}},{key:"toObject",value:function(t){return t.x=this[0],t.y=this[1],t.z=this[2],t}},{key:"angle",value:function(t){return f.a(this,t)}},{key:"cross",value:function(t){return f.c(this,this,t),this.check()}},{key:"rotateX",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?v:n;return f.h(this,this,r,e),this.check()}},{key:"rotateY",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?v:n;return f.i(this,this,r,e),this.check()}},{key:"rotateZ",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?v:n;return f.j(this,this,r,e),this.check()}},{key:"transform",value:function(t){return this.transformAsPoint(t)}},{key:"transformAsPoint",value:function(t){return f.l(this,this,t),this.check()}},{key:"transformAsVector",value:function(t){return Object(p.c)(this,this,t),this.check()}},{key:"transformByMatrix3",value:function(t){return f.k(this,this,t),this.check()}},{key:"transformByMatrix2",value:function(t){return Object(p.b)(this,this,t),this.check()}},{key:"transformByQuaternion",value:function(t){return f.m(this,this,t),this.check()}},{key:"ELEMENTS",get:function(){return 3}},{key:"z",get:function(){return this[2]},set:function(t){return this[2]=Object(c.a)(t)}}]),e}(l)},458:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(407);var i=function(t){var e,n;function i(e,n){var i;return void 0===n&&(n={}),(i=t.call(this,n)||this).onBeforeRender=null,i.AfterRender=null,e instanceof r.a?(i.model=e,i._setModelNodeProps(n)):i.model=new r.a(e,n),i.managedResources=n.managedResources||[],i}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=i.prototype;return o.setProps=function(e){return t.prototype.setProps.call(this,e),this._setModelNodeProps(e),this},o.delete=function(){this.model&&(this.model.delete(),this.model=null),this.managedResources.forEach((function(t){return t.delete()})),this.managedResources=[]},o.draw=function(){var t;return(t=this.model).draw.apply(t,arguments)},o.setUniforms=function(){var t;return(t=this.model).setUniforms.apply(t,arguments),this},o.setAttributes=function(){var t;return(t=this.model).setAttributes.apply(t,arguments),this},o.updateModuleSettings=function(){var t;return(t=this.model).updateModuleSettings.apply(t,arguments),this},o._setModelNodeProps=function(t){this.model.setProps(t)},i}(n(454).a)}}]);
//# sourceMappingURL=component---templates-core-example-persistence-jsx-bc8a1881289ccae4bc53.js.map