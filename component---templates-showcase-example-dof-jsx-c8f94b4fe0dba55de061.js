(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{416:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(402),o=(n(3),n(36),n(0)),s=n.n(o),u=n(442),f=n(413),d=n(431),c=n(34),l=n(29),p=(n(68),n(54),n(80)),h=n(16),v=5126,m=5124,g=5125,E=function(){function e(e){var t;for(var n in this.layout={},this.size=0,e)this._addUniform(n,e[n]);this.size+=(4-this.size%4)%4;var r=new Float32Array(this.size);this.typedArray=((t={})[v]=r,t[m]=new Int32Array(r.buffer),t[g]=new Uint32Array(r.buffer),t)}var t=e.prototype;return t.getBytes=function(){return 4*this.size},t.getData=function(){return this.typedArray[v]},t.getSubData=function(e){var t,n;if(void 0===e)t=this.data,n=0;else{var r=this.offsets[e],i=r+this.sizes[e];t=this.data.subarray(r,i),n=4*r}return{data:t,offset:n}},t.setUniforms=function(e){for(var t in e)this._setValue(t,e[t]);return this},t._setValue=function(e,t){var n=this.layout[e];Object(h.a)(n,"UniformLayoutStd140 illegal argument");var r=this.typedArray[n.type];1===n.size?r[n.offset]=t:r.set(t,n.offset)},t._addUniform=function(e,t){var n=Object(p.a)(t);Object(h.a)(n,"UniformBufferLayout illegal argument");var r=n.type,i=n.components;this.size=this._alignTo(this.size,i);var a=this.size;this.size+=i,this.layout[e]={type:r,size:i,offset:a}},t._alignTo=function(e,t){switch(t){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}},e}(),y=n(399),w=n(62),T=n(130),b=n(433),A=n(219),_=n(65),R=n(432),M=n(73);function C(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var D=[1,1,0,-1,1,0,1,-1,0,-1,-1,0],O=2,x=3,F=2.8,I=new Float32Array(2),B=function(e){function t(t,n){var r,i=n.count,a=new Array(i),o=new Float32Array(16*i),s=new c.a(t,o.byteLength);return(r=e.call(this,t,Object.assign({geometry:new u.a},n,{vs:"#version 300 es\n#define SHADER_NAME scene.vs\n\nin vec3 positions;\nin vec3 normals;\nin vec2 texCoords;\nin vec4 modelMatCol1;\nin vec4 modelMatCol2;\nin vec4 modelMatCol3;\nin vec4 modelMatCol4;\n\nuniform mat4 uView;\nuniform mat4 uProjection;\nout vec3 vNormal;\nout vec2 vUV;\n\nvoid main(void) {\n  mat4 modelMat = mat4(\n    modelMatCol1,\n    modelMatCol2,\n    modelMatCol3,\n    modelMatCol4\n  );\n  gl_Position = uProjection * uView * modelMat * vec4(positions, 1.0);\n  vNormal = vec3(modelMat * vec4(normals, 0.0));\n  vUV = texCoords;\n}\n",fs:"#version 300 es\nprecision highp float;\n#define SHADER_NAME scene.fs\n\nin vec3 vNormal;\nin vec2 vUV;\nuniform sampler2D uTexture;\n\nout vec4 fragColor;\nvoid main(void) {\n  float d = clamp(dot(normalize(vNormal), normalize(vec3(1.0, 1.0, 0.2))), 0.0, 1.0);\n  fragColor.rgb = texture(uTexture, vUV).rgb * (d + 0.1);\n  fragColor.a = 1.0;\n}\n",isInstanced:1,instanceCount:i,uniforms:{uTexture:n.uniforms.uTexture},attributes:{modelMatCol1:{buffer:s,size:4,stride:64,offset:0,divisor:1},modelMatCol2:{buffer:s,size:4,stride:64,offset:16,divisor:1},modelMatCol3:{buffer:s,size:4,stride:64,offset:32,divisor:1},modelMatCol4:{buffer:s,size:4,stride:64,offset:48,divisor:1}}}))||this).count=i,r.xforms=a,r.matrices=o,r.matrixBuffer=s,r}return C(t,e),t.prototype.updateMatrixBuffer=function(){this.matrixBuffer.setData(this.matrices)},t}(f.a),L=function(e){function t(t){var n;return void 0===t&&(t={}),(n=e.call(this,t)||this).isDemoSupported=!0,n}C(t,e),t.getInfo=function(){return'\n<p>\n  <b>Depth of Field</b>.\n<p>\nSeveral instanced luma.gl <code>Cubes</code> rendered with a Depth of Field\npost-processing effect.\n\n<div>\n  Focal Length: <input type="range" id="focal-length" min="0.1" max="10.0" step="0.1">\n</div>\n<div>\n  Focus Distance: <input type="range" id="focus-distance" min="0.1" max="10.0" step="0.1">\n</div>\n<div>\n  F-Stop: <input type="range" id="f-stop" min="0.1" max="10.0" step="0.1">\n</div>\n\n'};var n=t.prototype;return n.onInitialize=function(e){var t,n,r,i,a=e.gl;e._animationLoop;if(this.isDemoSupported=Object(l.d)(a),!this.isDemoSupported)return{};Object(_.c)(a,{depthTest:!0,depthFunc:s.a.LEQUAL});var o=new R.a,u=(new R.a).lookAt({eye:[0,0,8]}),f=new E({uDepthRange:a.FLOAT_VEC2,uFocusDistance:a.FLOAT,uBlurCoefficient:a.FLOAT,uPPM:a.FLOAT}).setUniforms({uDepthRange:[.1,30]}),d=new c.a(a,{target:s.a.UNIFORM_BUFFER,data:f.getData(),accessor:{index:0}}),p=new y.a(a,{id:"DOF_PROGRAM",vs:"#version 300 es\n#define SHADER_NAME quad.vs\n\nlayout(location=0) in vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1.0);\n}\n",fs:"#version 300 es\nprecision highp float;\n#define SHADER_NAME dof.fs\n\n#define MAX_BLUR 20.0\n\nuniform DOFUniforms {\n  vec2  uDepthRange;\n  float uFocusDistance;\n  float uBlurCoefficient;\n  float uPPM;\n};\n\nuniform vec2 uTexelOffset;\n\nuniform sampler2D uColor;\nuniform sampler2D uDepth;\n\nout vec4 fragColor;\n\nvoid main() {\n    ivec2 fragCoord = ivec2(gl_FragCoord.xy);\n    ivec2 resolution = textureSize(uColor, 0) - 1;\n\n    // Convert to linear depth\n    float ndc = 2.0 * texelFetch(uDepth, fragCoord, 0).r - 1.0;\n    float depth = -(2.0 * uDepthRange.y * uDepthRange.x) / (ndc * (uDepthRange.y - uDepthRange.x) - uDepthRange.y - uDepthRange.x);\n    float deltaDepth = abs(uFocusDistance - depth);\n\n    // Blur more quickly in the foreground.\n    float xdd = depth < uFocusDistance ? abs(uFocusDistance - deltaDepth) : abs(uFocusDistance + deltaDepth);\n    float blurRadius = min(floor(uBlurCoefficient * (deltaDepth / xdd) * uPPM), MAX_BLUR);\n\n    vec4 color = vec4(0.0);\n    if (blurRadius > 1.0) {\n        float halfBlur = blurRadius * 0.5;\n\n        float count = 0.0;\n\n        for (float i = 0.0; i <= MAX_BLUR; ++i) {\n            if (i > blurRadius) {\n                break;\n            }\n\n            // texelFetch outside texture gives vec4(0.0) (undefined in ES 3)\n            ivec2 sampleCoord = clamp(fragCoord + ivec2(((i - halfBlur) * uTexelOffset)), ivec2(0), resolution);\n            color += texelFetch(uColor, sampleCoord, 0);\n\n            ++count;\n        }\n\n        color /= count;\n    } else {\n        color = texelFetch(uColor, fragCoord, 0);\n    }\n\n    fragColor = color;\n}\n"});p.uniformBlockBinding(p.getUniformBlockIndex("DOFUniforms"),0);var h=new w.a(a,{width:a.drawingBufferWidth,height:a.drawingBufferHeight,attachments:(r={},r[s.a.COLOR_ATTACHMENT0]=new T.a(a,{format:s.a.RGBA,type:s.a.UNSIGNED_BYTE,width:a.drawingBufferWidth,height:a.drawingBufferHeight,mipmaps:!1,parameters:(t={},t[s.a.TEXTURE_MIN_FILTER]=s.a.LINEAR,t[s.a.TEXTURE_MAG_FILTER]=s.a.LINEAR,t[s.a.TEXTURE_WRAP_S]=s.a.CLAMP_TO_EDGE,t[s.a.TEXTURE_WRAP_T]=s.a.CLAMP_TO_EDGE,t)}),r[s.a.DEPTH_ATTACHMENT]=new T.a(a,{format:s.a.DEPTH_COMPONENT16,type:s.a.UNSIGNED_SHORT,dataFormat:s.a.DEPTH_COMPONENT,width:a.drawingBufferWidth,height:a.drawingBufferHeight,mipmaps:!1,parameters:(n={},n[s.a.TEXTURE_MIN_FILTER]=s.a.NEAREST,n[s.a.TEXTURE_MAG_FILTER]=s.a.NEAREST,n[s.a.TEXTURE_WRAP_S]=s.a.CLAMP_TO_EDGE,n[s.a.TEXTURE_WRAP_T]=s.a.CLAMP_TO_EDGE,n)}),r)}),v=new w.a(a,{width:a.drawingBufferWidth,height:a.drawingBufferHeight,depth:!1}),m=document.getElementById("focal-length"),g=document.getElementById("focus-distance"),A=document.getElementById("f-stop");m&&(m.value=O,m.addEventListener("input",(function(){O=parseFloat(m.value)})),g.value=x,g.addEventListener("input",(function(){x=parseFloat(g.value)})),A.value=F,A.addEventListener("input",(function(){F=parseFloat(A.value)})));for(var M=new T.a(a,{data:"vis-logo.png",mipmaps:!0,parameters:(i={},i[a.TEXTURE_MAG_FILTER]=a.LINEAR,i[a.TEXTURE_MIN_FILTER]=a.LINEAR_MIPMAP_NEAREST,i)}),C=new B(a,{count:100,uniforms:{uTexture:M}}),I=0,L=0;L<5;++L)for(var P=L-Math.floor(2.5),N=0;N<20;++N){var U=[.4,.4,.4],S=[-Math.sin(18.23*N)*Math.PI,0,Math.cos(11.27*N)*Math.PI],z=[2-N-P,0,2-N+P];C.xforms[I]={scale:U,translate:z,rotate:S,matrix:(new R.a).translate(z).rotateXYZ(S).scale(U)},C.matrices.set(C.xforms[I].matrix,16*I),++I}return C.updateMatrixBuffer(),{projMat:o,viewMat:u,instancedCubes:C,sceneFramebuffer:h,dofFramebuffer:v,quadVertexArray:new b.a(a,{program:p,attributes:{aPosition:new c.a(a,new Float32Array(D))}}),dofProgram:p,dofUniforms:d,dofUniformsLayout:f}},n.onRender=function(e){var t=e.gl,n=(e.tick,e.width,e.height,e.aspect),r=e.projMat,i=e.viewMat,a=e.instancedCubes,o=e.sceneFramebuffer,s=e.dofFramebuffer,u=e.quadVertexArray,f=e.dofProgram,d=e.dofUniforms,c=e.dofUniformsLayout;if(this.isDemoSupported){o.resize(t.drawingBufferWidth,t.drawingBufferHeight),s.resize(t.drawingBufferWidth,t.drawingBufferHeight);var l=O/Math.max(.1,Math.abs(x-O)),p=O*l/F,h=Math.sqrt(t.drawingBufferWidth*t.drawingBufferWidth+t.drawingBufferHeight*t.drawingBufferHeight)/35;Object(A.a)(t,{color:[0,0,0,1],depth:!0,framebuffer:o}),r.perspective({fov:Object(M.e)(75),aspect:n,near:.1,far:30}),i.lookAt({eye:[3,1.5,3],center:[0,0,0],up:[0,1,0]});for(var v=0;v<100;++v){var m=a.xforms[v];m.rotate[0]+=.01,m.rotate[1]+=.02,m.matrix.identity().translate(m.translate).rotateXYZ(m.rotate).scale(m.scale),a.matrices.set(m.matrix,16*v)}a.updateMatrixBuffer(),a.draw({uniforms:{uProjection:r,uView:i},framebuffer:o}),Object(A.a)(t,{color:[0,0,0,1],framebuffer:s}),I[0]=1,I[1]=0,c.setUniforms({uFocusDistance:x,uBlurCoefficient:p,uPPM:h}),d.setData(c.getData()),d.bind(),f.setUniforms({uTexelOffset:I,uColor:o.color,uDepth:o.depth}),f.draw({vertexArray:u,drawMode:t.TRIANGLE_STRIP,vertexCount:4,framebuffer:s}),Object(A.a)(t,{color:[0,0,0,1]}),I[0]=0,I[1]=1,f.setUniforms({uTexelOffset:I,uColor:o.color,uDepth:o.depth}),f.draw({vertexArray:u,drawMode:t.TRIANGLE_STRIP,vertexCount:4}),d.unbind()}},n.isSupported=function(){return this.isDemoSupported},n.getAltText=function(){return"THIS DEMO REQUIRES WEBLG2, BUT YOUR BROWSER DOESN'T SUPPORT IT"},t}(d.a);"undefined"==typeof window||window.website||(new L).start();n.d(t,"default",(function(){return P}));var P=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return i.a.createElement(a.a,{AnimationLoop:L,exampleConfig:this.props.pageContext.exampleConfig})},r}(i.a.Component)},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(11),n(15),n(3);var r=n(147),i=n(16);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var s={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},u=function(){function e(e){void 0===e&&(e={});var t=e,n=t.id,i=void 0===n?Object(r.c)("geometry"):n,a=t.drawMode,o=void 0===a?s.TRIANGLES:a,u=t.attributes,f=void 0===u?{}:u,d=t.indices,c=void 0===d?null:d,l=t.vertexCount,p=void 0===l?null:l;this.id=i,this.drawMode=0|o,this.attributes={},this.userData={},this._setAttributes(f,c),this.vertexCount=p||this._calculateVertexCount(this.attributes,this.indices)}o(e,null,[{key:"DRAW_MODE",get:function(){return s}}]);var t=e.prototype;return t.getVertexCount=function(){return this.vertexCount},t.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},t._print=function(e){return"Geometry "+this.id+" attribute "+e},t._setAttributes=function(e,t){for(var n in t&&(this.indices=ArrayBuffer.isView(t)?{value:t,size:1}:t),e){var r=e[n];r=ArrayBuffer.isView(r)?{value:r}:r,Object(i.a)(ArrayBuffer.isView(r.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||r.size||(r.size=3),"indices"===n?(Object(i.a)(!this.indices),this.indices=r):this.attributes[n]=r}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},t._calculateVertexCount=function(e,t){if(t)return t.value.length;var n=1/0;for(var r in e){var a=e[r],o=a.value,s=a.size;!a.constant&&o&&s>=1&&(n=Math.min(n,o.length/s))}return Object(i.a)(Number.isFinite(n)),n},o(e,[{key:"mode",get:function(){return this.drawMode}}]),e}()},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(3),n(36),n(148);var r=n(438),i=n(147);var a=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),o=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),u=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),f={POSITION:{size:3,value:new Float32Array(o)},NORMAL:{size:3,value:new Float32Array(s)},TEXCOORD_0:{size:2,value:new Float32Array(u)}},d=function(e){var t,n;function r(t){void 0===t&&(t={});var n=t.id,r=void 0===n?Object(i.c)("cube-geometry"):n;return e.call(this,Object.assign({},t,{id:r,indices:{size:1,value:new Uint16Array(a)},attributes:Object.assign({},f,{},t.attributes)}))||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(r.a)}}]);
//# sourceMappingURL=component---templates-showcase-example-dof-jsx-c8f94b4fe0dba55de061.js.map