(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1A4c":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),a=n("z0FI"),o=(n("Y9lz"),n("PG+Z")),u=n("UD/Y"),s=(n("r1bV"),n("91GP"),n("rhVh")),c=n("BunF");var h=[-1,0,0,0,1,0,0,0,-1,0,0,1,0,-1,0,1,0,0],l=[3,4,5,3,5,1,3,1,0,3,0,4,4,0,2,4,2,5,2,0,1,5,2,1],v=function(t){var e,n;function r(e){void 0===e&&(e={});var n=e.id,r=void 0===n?Object(c.c)("ico-sphere-geometry"):n,i=function(t){var e=t.iterations,n=void 0===e?0:e,r=Math.PI,i=2*r,a=[].concat(h),o=[].concat(l);a.push(),o.push();for(var u=function(){var t={};return function(e,n){var r=((e*=3)<(n*=3)?e:n)+"|"+(e>n?e:n);if(r in t)return t[r];var i=a[e],o=a[e+1],u=a[e+2],s=(i+a[n])/2,c=(o+a[n+1])/2,h=(u+a[n+2])/2,l=Math.sqrt(s*s+c*c+h*h);return s/=l,c/=l,h/=l,a.push(s,c,h),t[r]=a.length/3-1}}(),c=0;c<n;c++){for(var v=[],f=0;f<o.length;f+=3){var d=u(o[f+0],o[f+1]),p=u(o[f+1],o[f+2]),y=u(o[f+2],o[f+0]);v.push(y,o[f+0],d,d,o[f+1],p,p,o[f+2],y,d,p,y)}o=v}for(var g=new Array(a.length),b=new Array(a.length/3*2),m=o.length-3;m>=0;m-=3){var w=o[m+0],k=o[m+1],O=o[m+2],j=3*w,x=3*k,E=3*O,M=2*w,A=2*k,S=2*O,_=a[j+0],z=a[j+1],P=a[j+2],C=Math.acos(P/Math.sqrt(_*_+z*z+P*P)),T=Math.atan2(z,_)+r,I=C/r,L=1-T/i,N=a[x+0],V=a[x+1],q=a[x+2],F=Math.acos(q/Math.sqrt(N*N+V*V+q*q)),R=Math.atan2(V,N)+r,D=F/r,B=1-R/i,G=a[E+0],U=a[E+1],Y=a[E+2],X=Math.acos(Y/Math.sqrt(G*G+U*U+Y*Y)),Z=Math.atan2(U,G)+r,W=X/r,J=1-Z/i,Q=[G-N,U-V,Y-q],H=[_-N,z-V,P-q],K=new s.a(Q).cross(H).normalize(),$=void 0;(0===L||0===B||0===J)&&(0===L||L>.5)&&(0===B||B>.5)&&(0===J||J>.5)&&(a.push(a[j+0],a[j+1],a[j+2]),$=a.length/3-1,o.push($),b[2*$+0]=1,b[2*$+1]=I,g[3*$+0]=K.x,g[3*$+1]=K.y,g[3*$+2]=K.z,a.push(a[x+0],a[x+1],a[x+2]),$=a.length/3-1,o.push($),b[2*$+0]=1,b[2*$+1]=D,g[3*$+0]=K.x,g[3*$+1]=K.y,g[3*$+2]=K.z,a.push(a[E+0],a[E+1],a[E+2]),$=a.length/3-1,o.push($),b[2*$+0]=1,b[2*$+1]=W,g[3*$+0]=K.x,g[3*$+1]=K.y,g[3*$+2]=K.z),g[j+0]=g[x+0]=g[E+0]=K.x,g[j+1]=g[x+1]=g[E+1]=K.y,g[j+2]=g[x+2]=g[E+2]=K.z,b[M+0]=L,b[M+1]=I,b[A+0]=B,b[A+1]=D,b[S+0]=J,b[S+1]=W}return{indices:{size:1,value:new Uint16Array(o)},attributes:{POSITION:{size:3,value:new Float32Array(a)},NORMAL:{size:3,value:new Float32Array(g)},TEXCOORD_0:{size:2,value:new Float32Array(b)}}}}(e),a=i.indices,o=i.attributes;return t.call(this,Object.assign({},e,{id:r,indices:a,attributes:Object.assign({},o,{},e.attributes)}))||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r}(o.a);var f=n("bjw9"),d=n("mECX"),p=n("WFpA"),y=n("IObG"),g=n("lHlH"),b=n("WUN0"),m=n("gmAo"),w=n("aI42");var k,O,j,x,E,M="attribute vec2 aPosition;\n\nvoid main(void) {\n  gl_Position = vec4(aPosition, 0, 1);\n}\n",A=Object(w.b)(),S=[],_=[],z=[],P=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.getInfo=function(){return"\n<p>\n  Electron trails renderings persist across multiple frames.\n<p>\n  Uses multiple luma.gl <code>Framebuffer</code>s to hold previously rendered data between frames.\n</p>\n"};var i=r.prototype;return i.onInitialize=function(t){var e=t.gl,n=t.width,r=t.height;Object(g.k)(e,{clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:e.LEQUAL,faceCulling:!0,cullFace:e.BACK}),k=new d.a(e,{width:n,height:r}),O=[new d.a(e,{width:n,height:r}),new d.a(e,{width:n,height:r})];var i=new o.a({attributes:{aPosition:{value:new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),size:2}},vertexCount:6});j=new u.a(e,{id:"quad",program:new p.a(e,{vs:M,fs:"precision highp float;\n\nuniform sampler2D uTexture;\nuniform vec2 uRes;\n\nvoid main(void) {\n  vec2 p = gl_FragCoord.xy/uRes.xy;\n  gl_FragColor = texture2D(uTexture, p);\n}\n"}),geometry:i}),x=new u.a(e,{id:"persistence-quad",program:new p.a(e,{vs:M,fs:"precision highp float;\n\nuniform sampler2D uScene;\nuniform sampler2D uPersistence;\nuniform vec2 uRes;\n\nvoid main(void) {\n  vec2 p = gl_FragCoord.xy / uRes.xy;\n  vec4 cS = texture2D(uScene, p);\n  vec4 cP = texture2D(uPersistence, p);\n  gl_FragColor = mix(cS*4.0, cP, 0.9);\n}\n"}),geometry:i}),E=new u.a(e,{id:"electron",geometry:new v({iterations:4}),program:new p.a(e,{vs:"attribute vec3 positions;\nattribute vec3 normals;\n\nuniform mat4 uModelView;\nuniform mat4 uProjection;\n\nvarying vec3 normal;\n\nvoid main(void) {\n  gl_Position = uProjection * uModelView * vec4(positions, 1.0);\n  normal = vec3((uModelView * vec4(normals, 0.0)));\n}\n",fs:"precision highp float;\n\nuniform vec3 uColor;\nuniform bool uLighting;\n\nvarying vec3 normal;\n\nvoid main(void) {\n  float d = 1.0;\n  if (uLighting) {\n    vec3 l = normalize(vec3(1,1,2));\n    d = dot(normal, l);\n  }\n  gl_FragColor = vec4(uColor * d, 1);\n}\n"})});for(var a=0;a<64;a++){var c=new s.a(A()-.5,A()-.5,A()-.5),h=A()+1;c.normalize().scale(h);c.scale(1.25),S.push(c);var l=new s.a(A()-.5,A()-.5,A()-.5),f=c.clone().cross(l).normalize(),y=4/h*.0125,m=(new b.a).rotateAxis(y,f);_.push(m)}for(var w=0;w<64;w++){var P=new s.a(A()-.5,A()-.5,A()-.5);P=P.normalize().scale(.5),z.push(P)}},i.onRender=function(t){var e=t.gl,n=t.tick,r=t.width,i=t.height,a=t.aspect;k.resize({width:r,height:i}),O[0].resize({width:r,height:i}),O[1].resize({width:r,height:i});var o=(new b.a).perspective({fov:Object(m.e)(75),aspect:a}),u=(new b.a).lookAt({eye:[0,0,4]});Object(y.a)(e,{framebuffer:k,color:[0,0,0,1],depth:1});for(var s=0;s<64;s++){S[s]=_[s].transformVector(S[s]);var c=(new b.a).translate(S[s]).scale([.06125,.06125,.06125]);E.draw({framebuffer:k,uniforms:{uModelView:u.clone().multiplyRight(c),uView:u,uProjection:o,uColor:[0,.5,1],uLighting:0}})}for(var h=0;h<64;h++){var l=(new b.a).rotateXYZ([.013*n,0,0]).rotateXYZ([0,.021*n,0]).translate(z[h]),v=[l[12],l[13],l[14]];l.identity().translate(v).scale([.25,.25,.25]),E.draw({framebuffer:k,uniforms:{uModelView:u.clone().multiplyRight(l),uProjection:o,uColor:[1,.25,.25],uLighting:1}})}var f=n%2,d=O[f],p=O[1-f];Object(y.a)(e,{framebuffer:d,color:!0,depth:!0}),x.draw({framebuffer:d,uniforms:{uScene:k.texture,uPersistence:p.texture,uRes:[r,i]}}),Object(y.a)(e,{color:!0,depth:!0}),j.draw({uniforms:{uTexture:d.texture,uRes:[r,i]}})},r}(f.a);"undefined"==typeof window||window.website||(new P).start();n.d(e,"default",(function(){return C}));var C=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return i.a.createElement(a.a,{AnimationLoop:P,exampleConfig:this.props.pageContext.exampleConfig})},r}(i.a.Component)},"PG+Z":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("xfY5"),n("/KAi"),n("91GP");var r=n("BunF"),i=n("Iq2B");function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var u={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},s=function(){function t(t){void 0===t&&(t={});var e=t,n=e.id,i=void 0===n?Object(r.c)("geometry"):n,a=e.drawMode,o=void 0===a?u.TRIANGLES:a,s=e.attributes,c=void 0===s?{}:s,h=e.indices,l=void 0===h?null:h,v=e.vertexCount,f=void 0===v?null:v;this.id=i,this.drawMode=0|o,this.attributes={},this.userData={},this._setAttributes(c,l),this.vertexCount=f||this._calculateVertexCount(this.attributes,this.indices)}o(t,null,[{key:"DRAW_MODE",get:function(){return u}}]);var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var n in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var r=t[n];r=ArrayBuffer.isView(r)?{value:r}:r,Object(i.a)(ArrayBuffer.isView(r.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||r.size||(r.size=3),"indices"===n?(Object(i.a)(!this.indices),this.indices=r):this.attributes[n]=r}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var n=1/0;for(var r in t){var a=t[r],o=a.value,u=a.size;!a.constant&&o&&u>=1&&(n=Math.min(n,o.length/u))}return Object(i.a)(Number.isFinite(n)),n},o(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},rhVh:function(t,e,n){"use strict";var r=n("1OyB"),i=n("vuIU"),a=n("md7G"),o=n("foSv"),u=n("Ji7U"),s=n("zgn+"),c=n("+OWk"),h=n("5tna"),l=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"len",value:function(){return Math.sqrt(this.lengthSquared())}},{key:"magnitude",value:function(){return this.len()}},{key:"lengthSquared",value:function(){for(var t=0,e=0;e<this.ELEMENTS;++e)t+=this[e]*this[e];return t}},{key:"magnitudeSquared",value:function(){return this.lengthSquared()}},{key:"distance",value:function(t){return Math.sqrt(this.distanceSquared(t))}},{key:"distanceSquared",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n){var r=this[n]-t[n];e+=r*r}return Object(c.a)(e)}},{key:"dot",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n)e+=this[n]*t[n];return Object(c.a)(e)}},{key:"normalize",value:function(){var t=this.magnitude();if(0!==t)for(var e=0;e<this.ELEMENTS;++e)this[e]/=t;return this.check()}},{key:"multiply",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++)for(var a=i[r],o=0;o<this.ELEMENTS;++o)this[o]*=a[o];return this.check()}},{key:"divide",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++)for(var a=i[r],o=0;o<this.ELEMENTS;++o)this[o]/=a[o];return this.check()}},{key:"lengthSq",value:function(){return this.lengthSquared()}},{key:"distanceTo",value:function(t){return this.distance(t)}},{key:"distanceToSquared",value:function(t){return this.distanceSquared(t)}},{key:"getComponent",value:function(t){return Object(h.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),Object(c.a)(this[t])}},{key:"setComponent",value:function(t,e){return Object(h.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),this[t]=e,this.check()}},{key:"addVectors",value:function(t,e){return this.copy(t).add(e)}},{key:"subVectors",value:function(t,e){return this.copy(t).subtract(e)}},{key:"multiplyVectors",value:function(t,e){return this.copy(t).multiply(e)}},{key:"addScaledVector",value:function(t,e){return this.add(new this.constructor(t).multiplyScalar(e))}},{key:"x",get:function(){return this[0]},set:function(t){return this[0]=Object(c.a)(t)}},{key:"y",get:function(){return this[1]},set:function(t){return this[1]=Object(c.a)(t)}}]),e}(s.a),v=n("gmAo"),f=n("MTwu"),d=n("y1Qd");n.d(e,"a",(function(){return y}));var p=[0,0,0],y=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(r.a)(this,e),t=Object(a.a)(this,Object(o.a)(e).call(this,-0,-0,-0)),1===arguments.length&&Object(v.d)(n)?t.copy(n):(v.a.debug&&(Object(c.a)(n),Object(c.a)(i),Object(c.a)(u)),t[0]=n,t[1]=i,t[2]=u),t}return Object(u.a)(e,t),Object(i.a)(e,[{key:"set",value:function(t,e,n){return this[0]=t,this[1]=e,this[2]=n,this.check()}},{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.check()}},{key:"fromObject",value:function(t){return v.a.debug&&(Object(c.a)(t.x),Object(c.a)(t.y),Object(c.a)(t.z)),this[0]=t.x,this[1]=t.y,this[2]=t.z,this.check()}},{key:"toObject",value:function(t){return t.x=this[0],t.y=this[1],t.z=this[2],t}},{key:"angle",value:function(t){return f.a(this,t)}},{key:"cross",value:function(t){return f.c(this,this,t),this.check()}},{key:"rotateX",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?p:n;return f.h(this,this,r,e),this.check()}},{key:"rotateY",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?p:n;return f.i(this,this,r,e),this.check()}},{key:"rotateZ",value:function(t){var e=t.radians,n=t.origin,r=void 0===n?p:n;return f.j(this,this,r,e),this.check()}},{key:"transform",value:function(t){return this.transformAsPoint(t)}},{key:"transformAsPoint",value:function(t){return f.l(this,this,t),this.check()}},{key:"transformAsVector",value:function(t){return Object(d.c)(this,this,t),this.check()}},{key:"transformByMatrix3",value:function(t){return f.k(this,this,t),this.check()}},{key:"transformByMatrix2",value:function(t){return Object(d.b)(this,this,t),this.check()}},{key:"transformByQuaternion",value:function(t){return f.m(this,this,t),this.check()}},{key:"ELEMENTS",get:function(){return 3}},{key:"z",get:function(){return this[2]},set:function(t){return this[2]=Object(c.a)(t)}}]),e}(l)}}]);
//# sourceMappingURL=component---templates-showcase-example-persistence-jsx-3436c7e5dc4e80064878.js.map