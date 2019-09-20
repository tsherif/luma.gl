(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{290:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(335),s=(r(366),r(317),r(3),r(329),r(510)),a=r(347),u=r(349),c=r(461),f=(r(10),r(8),r(5),r(320),r(318)),l=r.n(f),d=r(338),h=(r(6),r(4),r(9),r(20),r(409)),g=r(429),p=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.currentIndex=0,this.feedbackMap={},this.varyings=null,this.bindings=[],this.resources={},this._initialize(t),Object.seal(this)}var t=e.prototype;return t.setupResources=function(e){var t=this.bindings,r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var i;if(r){if(n>=t.length)break;i=t[n++]}else{if((n=t.next()).done)break;i=n.value}var o=i;this._setupTransformFeedback(o,e)}},t.updateModelProps=function(e){void 0===e&&(e={});var t=this.varyings;return t.length>0&&(e=Object.assign({},e,{varyings:t})),e},t.getDrawOptions=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],r=t.sourceBuffers,n=t.transformFeedback;return{attributes:Object.assign({},r,e.attributes),transformFeedback:n}},t.swap=function(){return!!this.feedbackMap&&(this.currentIndex=this._getNextIndex(),!0)},t.update=function(e){void 0===e&&(e={}),this._setupBuffers(e)},t.getBuffer=function(e){var t=this.bindings[this.currentIndex].feedbackBuffers,r=e?t[e]:null;return r?r instanceof a.a?r:r.buffer:null},t.getData=function(e){var t=(void 0===e?{}:e).varyingName,r=this.getBuffer(t);return r?r.getData():null},t.delete=function(){for(var e in this.resources)this.resources[e].delete()},t._initialize=function(e){void 0===e&&(e={}),this._setupBuffers(e),this.varyings=e.varyings||Object.keys(this.bindings[this.currentIndex].feedbackBuffers),this.varyings.length>0&&Object(g.a)(Object(s.d)(this.gl))},t._getFeedbackBuffers=function(e){var t=e.sourceBuffers,r={};if(this.bindings[this.currentIndex]&&Object.assign(r,this.bindings[this.currentIndex].feedbackBuffers),this.feedbackMap)for(var n in this.feedbackMap){r[this.feedbackMap[n]]=n}for(var i in Object.assign(r,e.feedbackBuffers),r){var o=r[i];if("string"==typeof o&&t[o]){var s=t[o],a=s.byteLength,u=s.usage,c=s.accessor;r[i]=this._createNewBuffer(i,{byteLength:a,usage:u,accessor:c})}}return r},t._setupBuffers=function(e){void 0===e&&(e={});var t=e.sourceBuffers,r=void 0===t?null:t;Object.assign(this.feedbackMap,e.feedbackMap);var n=this._getFeedbackBuffers(e);this._updateBindings({sourceBuffers:r,feedbackBuffers:n})},t._setupTransformFeedback=function(e,t){var r=t.model.program;e.transformFeedback=new h.a(this.gl,{program:r,buffers:e.feedbackBuffers})},t._updateBindings=function(e){if(this.bindings[this.currentIndex]=this._updateBinding(this.bindings[this.currentIndex],e),this.feedbackMap){var t=this._swapBuffers(this.bindings[this.currentIndex]),r=t.sourceBuffers,n=t.feedbackBuffers,i=this._getNextIndex();this.bindings[i]=this._updateBinding(this.bindings[i],{sourceBuffers:r,feedbackBuffers:n})}},t._updateBinding=function(e,t){return e?(Object.assign(e.sourceBuffers,t.sourceBuffers),Object.assign(e.feedbackBuffers,t.feedbackBuffers),e.transformFeedback&&e.transformFeedback.setBuffers(e.feedbackBuffers),e):{sourceBuffers:Object.assign({},t.sourceBuffers),feedbackBuffers:Object.assign({},t.feedbackBuffers)}},t._swapBuffers=function(e){if(!this.feedbackMap)return null;var t=Object.assign({},e.sourceBuffers),r=Object.assign({},e.feedbackBuffers);for(var n in this.feedbackMap){var i=this.feedbackMap[n];t[n]=e.feedbackBuffers[i],r[i]=e.sourceBuffers[n],Object(g.a)(r[i]instanceof a.a)}return{sourceBuffers:t,feedbackBuffers:r}},t._createNewBuffer=function(e,t){var r=new a.a(this.gl,t);return this.resources[e]&&this.resources[e].delete(),this.resources[e]=r,r},t._getNextIndex=function(){return(this.currentIndex+1)%2},e}(),v=r(447),_=r(405),m=r(378),T=r(436);r(135),r(316),r(63);function b(e){var t=100,r=e.match(/[^\s]+/g);if(r.length>=2&&"#version"===r[0]){var n=parseInt(r[1],10);Number.isFinite(n)&&(t=n)}return t}var x,k=r(351),O={name:"transform",vs:"attribute float transform_elementID;\n\n// returns half of pixel size, used to move the pixel position to center of the pixel.\nvec2 transform_getPixelSizeHalf(vec2 size) {\n  return vec2(1.) / (2. * size);\n}\n\n// returns current elements pixel indeces [x, y],\n// where x ranges in [0 to texSize-1] and y ranges in [0 to texSize-1]\nvec2 transform_getPixelIndices(vec2 texSize, vec2 pixelSizeHalf) {\n  // Add safe offset (half of pixel height) before doing floor\n  float yIndex = floor((transform_elementID / texSize[0]) + pixelSizeHalf[1]);\n  float xIndex = transform_elementID - (yIndex * texSize[0]);\n  return vec2(xIndex, yIndex);\n}\n\n// returns current elementID's texture co-ordianate\nvec2 transform_getTexCoord(vec2 size) {\n  vec2 pixelSizeHalf = transform_getPixelSizeHalf(size);\n  vec2 indices = transform_getPixelIndices(size, pixelSizeHalf);\n  vec2 coord = indices / size + pixelSizeHalf;\n  return coord;\n}\n\n// returns current elementID's position\nvec2 transform_getPos(vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  // Change from [0 1] range to [-1 1]\n  vec2 pos = (texCoord * (2.0, 2.0)) - (1., 1.);\n  return pos;\n}\n\n// returns current elementID's pixel value\nvec4 transform_getInput(sampler2D texSampler, vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  vec4 textureColor = texture2D(texSampler, texCoord);\n  return textureColor;\n}\n",fs:null},y=(r(28),"transform_uSampler_"),A="transform_uSize_",E="transform_position";function w(e){var t=e.vs,r=e.sourceTextureMap,n=e.targetTextureVarying,i=e.targetTexture,o=Object.keys(r).length,s=null,a={},u=t,c={};if(o>0||n){var f=u.split("\n"),l=f.slice();if(f.forEach(function(e,t,i){if(o>0){var u=function(e,t){var r={},n=function(e){return Object(d.b)(e,["attribute","in"])}(e);if(!n)return null;var i=n.type,o=n.name;if(o&&t[o]){var s="// "+e+" => Replaced by Transform with a sampler",a=function(e){var t=""+y+e,r=""+A+e;return{samplerName:t,sizeName:r,uniformDeclerations:"  uniform sampler2D "+t+";\n  uniform vec2 "+r+";"}}(o),u=a.samplerName,c=a.sizeName,f=a.uniformDeclerations,l=Object(d.d)(i),h="  "+i+" "+o+" = transform_getInput("+u+", "+c+")."+l+";\n";r[u]=o;var g={"vs:#decl":f,"vs:#main-start":h};return{updatedLine:s,inject:g,samplerTextureMap:r}}return null}(e,r);if(u){var f=u.updatedLine,h=u.inject;l[t]=f,c=Object(k.b)([c,h]),Object.assign(a,u.samplerTextureMap),o--}}n&&!s&&(s=function(e,t){var r=Object(d.b)(e,["varying","out"]);if(!r)return null;return r.name===t?r.type:null}(e,n))}),n){Object(g.a)(i);var h=""+A+n,p={"vs:#decl":"uniform vec2 "+h+";\n","vs:#main-start":"     vec2 "+E+" = transform_getPos("+h+");\n     gl_Position = vec4("+E+", 0, 1.);\n"};c=Object(k.b)([c,p])}u=l.join("\n")}return{vs:u,targetTextureType:s,inject:c,samplerTextureMap:a}}var C=((x={})[l.a.TEXTURE_MIN_FILTER]=l.a.NEAREST,x[l.a.TEXTURE_MAG_FILTER]=l.a.NEAREST,x[l.a.TEXTURE_WRAP_S]=l.a.CLAMP_TO_EDGE,x[l.a.TEXTURE_WRAP_T]=l.a.CLAMP_TO_EDGE,x),I=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.currentIndex=0,this._swapTexture=null,this.targetTextureVarying=null,this.targetTextureType=null,this.samplerTextureMap=null,this.bindings=[],this.resources={},this._initialize(t),Object.seal(this)}var t=e.prototype;return t.updateModelProps=function(e){void 0===e&&(e={});var t=this._processVertexShader(e);return Object.assign({},e,t)},t.getDrawOptions=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],r=t.sourceTextures,n=t.framebuffer,i=t.targetTexture,o=Object.assign({},e.attributes),s=Object.assign({},e.uniforms),a=Object.assign({},e.parameters),u=e.discard;if(this.hasSourceTextures||this.hasTargetTexture){for(var c in o.transform_elementID=this.elementIDBuffer,this.samplerTextureMap){var f=this.samplerTextureMap[c];s[c]=r[f]}this._setSourceTextureParameters();var l=function(e){var t,r,n=e.sourceTextureMap,i=e.targetTextureVarying,o=e.targetTexture,s={};for(var a in i&&(t=o.width,r=o.height,s[""+A+i]=[t,r]),n){var u=n[a];t=u.width,r=u.height,s[""+A+a]=[t,r]}return s}({sourceTextureMap:r,targetTextureVarying:this.targetTextureVarying,targetTexture:i});Object.assign(s,l)}return this.hasTargetTexture&&(u=!1,a.viewport=[0,0,n.width,n.height]),{attributes:o,framebuffer:n,uniforms:s,discard:u,parameters:a}},t.swap=function(){return!!this._swapTexture&&(this.currentIndex=this._getNextIndex(),!0)},t.update=function(e){void 0===e&&(e={}),this._setupTextures(e)},t.getTargetTexture=function(){return this.bindings[this.currentIndex].targetTexture},t.getData=function(e){var t=(void 0===e?{}:e).packed,r=void 0!==t&&t,n=this.bindings[this.currentIndex].framebuffer,i=Object(v.b)(n);if(!r)return i;for(var o=i.constructor,s=Object(d.c)(this.targetTextureType),a=new o(i.length*s/4),u=0,c=0;c<i.length;c+=4)for(var f=0;f<s;f++)a[u++]=i[c+f];return a},t.getFramebuffer=function(){return this.bindings[this.currentIndex].framebuffer},t.delete=function(){this.ownTexture&&this.ownTexture.delete(),this.elementIDBuffer&&this.elementIDBuffer.delete()},t._initialize=function(e){void 0===e&&(e={});var t=e,r=t._targetTextureVarying,n=t._swapTexture;this._swapTexture=n,this.targetTextureVarying=r,this.hasTargetTexture=r,this._setupTextures(e)},t._createTargetTexture=function(e){var t=e.sourceTextures,r=e.textureOrReference;if(r instanceof _.a)return r;var n=t[r];return n?(this._targetRefTexName=r,this._createNewTexture(n)):null},t._setupTextures=function(e){void 0===e&&(e={});var t=e,r=t._sourceTextures,n=void 0===r?{}:r,i=t._targetTexture,o=this._createTargetTexture({sourceTextures:n,textureOrReference:i});this.hasSourceTextures=this.hasSourceTextures||n&&Object.keys(n).length>0,this._updateBindings({sourceTextures:n,targetTexture:o}),"elementCount"in e&&this._updateElementIDBuffer(e.elementCount)},t._updateElementIDBuffer=function(e){if(!("number"!=typeof e||this.elementCount>=e)){var t=new Float32Array(e);t.forEach(function(e,t,r){r[t]=t}),this.elementIDBuffer?this.elementIDBuffer.setData({data:t}):this.elementIDBuffer=new a.a(this.gl,{data:t,accessor:{size:1}}),this.elementCount=e}},t._updateBindings=function(e){if(this.bindings[this.currentIndex]=this._updateBinding(this.bindings[this.currentIndex],e),this._swapTexture){var t=this._swapTextures(this.bindings[this.currentIndex]),r=t.sourceTextures,n=t.targetTexture,i=this._getNextIndex();this.bindings[i]=this._updateBinding(this.bindings[i],{sourceTextures:r,targetTexture:n})}},t._updateBinding=function(e,t){var r=t.sourceTextures,n=t.targetTexture;if(e||(e={sourceTextures:{},targetTexture:null}),Object.assign(e.sourceTextures,r),n){e.targetTexture=n;var i,o,s=n.width,a=n.height,u=e.framebuffer;if(u)u.update({attachments:(i={},i[l.a.COLOR_ATTACHMENT0]=n,i),resizeAttachments:!1}),u.resize({width:s,height:a});else e.framebuffer=new m.a(this.gl,{id:(this.id||"transform")+"-framebuffer",width:s,height:a,attachments:(o={},o[l.a.COLOR_ATTACHMENT0]=n,o)})}return e},t._setSourceTextureParameters=function(){var e=this.currentIndex,t=this.bindings[e].sourceTextures;for(var r in t)t[r].setParameters(C)},t._swapTextures=function(e){if(!this._swapTexture)return null;var t=Object.assign({},e.sourceTextures);return t[this._swapTexture]=e.targetTexture,{sourceTextures:t,targetTexture:e.sourceTextures[this._swapTexture]}},t._createNewTexture=function(e){var t,r,n=Object(T.a)(e,{parameters:(t={},t[l.a.TEXTURE_MIN_FILTER]=l.a.NEAREST,t[l.a.TEXTURE_MAG_FILTER]=l.a.NEAREST,t[l.a.TEXTURE_WRAP_S]=l.a.CLAMP_TO_EDGE,t[l.a.TEXTURE_WRAP_T]=l.a.CLAMP_TO_EDGE,t),pixelStore:(r={},r[l.a.UNPACK_FLIP_Y_WEBGL]=!1,r)});return this.ownTexture&&this.ownTexture.delete(),this.ownTexture=n,n},t._getNextIndex=function(){return(this.currentIndex+1)%2},t._processVertexShader=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],r=t.sourceTextures,n=t.targetTexture,i=w({vs:e.vs,sourceTextureMap:r,targetTextureVarying:this.targetTextureVarying,targetTexture:n}),o=i.vs,s=i.uniforms,a=i.targetTextureType,u=i.inject,c=i.samplerTextureMap,f=Object(k.b)([e.inject||{},u]);return this.targetTextureType=a,this.samplerTextureMap=c,{vs:o,fs:e._fs||Object(d.a)({version:b(o),input:this.targetTextureVarying,inputType:a,output:"transform_output"}),modules:this.hasSourceTextures||this.targetTextureVarying?[O].concat(e.modules||[]):e.modules,uniforms:s,inject:f}},e}(),S=r(511),L=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.model=null,this.elementCount=0,this.bufferTransform=null,this.textureTransform=null,this.elementIDBuffer=null,this._initialize(t),Object.seal(this)}e.isSupported=function(e){return Object(s.d)(e)};var t=e.prototype;return t.delete=function(){var e=this.model,t=this.bufferTransform,r=this.textureTransform;e&&e.delete(),t&&t.delete(),r&&r.delete()},t.run=function(e){void 0===e&&(e={});var t=e.clearRenderTarget,r=void 0===t||t,n=this._updateDrawOptions(e);r&&n.framebuffer&&n.framebuffer.clear({color:!0}),this.model.transform(n)},t.swap=function(){var e=!1,t=[this.bufferTransform,this.textureTransform].filter(Boolean),r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var i;if(r){if(n>=t.length)break;i=t[n++]}else{if((n=t.next()).done)break;i=n.value}e=e||i.swap()}Object(g.a)(e,"Nothing to swap")},t.getBuffer=function(e){return void 0===e&&(e=null),this.bufferTransform&&this.bufferTransform.getBuffer(e)},t.getData=function(e){void 0===e&&(e={});var t=[this.bufferTransform,this.textureTransform].filter(Boolean),r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var i;if(r){if(n>=t.length)break;i=t[n++]}else{if((n=t.next()).done)break;i=n.value}var o=i.getData(e);if(o)return o}return null},t.getFramebuffer=function(){return this.textureTransform&&this.textureTransform.getFramebuffer()},t.update=function(e){void 0===e&&(e={}),e.elementCount&&this.model.setVertexCount(e.elementCount);var t=[this.bufferTransform,this.textureTransform].filter(Boolean),r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var i;if(r){if(n>=t.length)break;i=t[n++]}else{if((n=t.next()).done)break;i=n.value}i.update(e)}},t._initialize=function(e){void 0===e&&(e={});var t=this.gl;this._buildResourceTransforms(t,e),e=this._updateModelProps(e),this.model=new u.a(t,Object.assign({},e,{fs:e.fs||Object(d.a)({version:b(e.vs)}),id:e.id||"transform-model",drawMode:e.drawMode||l.a.POINTS,vertexCount:e.elementCount})),this.bufferTransform&&this.bufferTransform.setupResources({model:this.model})},t._updateModelProps=function(e){var t=Object.assign({},e),r=[this.bufferTransform,this.textureTransform].filter(Boolean),n=Array.isArray(r),i=0;for(r=n?r:r[Symbol.iterator]();;){var o;if(n){if(i>=r.length)break;o=r[i++]}else{if((i=r.next()).done)break;o=i.value}t=o.updateModelProps(t)}return t},t._buildResourceTransforms=function(e,t){(function(e){if(!Object(S.a)(e.sourceBuffers)||!Object(S.a)(e.feedbackBuffers)||e.varyings&&e.varyings.length>0)return!0;return!1})(t)&&(this.bufferTransform=new p(e,t)),function(e){if(!Object(S.a)(e._sourceTextures)||e._targetTexture||e._targetTextureVarying)return!0;return!1}(t)&&(this.textureTransform=new I(e,t)),Object(g.a)(this.bufferTransform||this.textureTransform,"must provide source/feedback buffers or source/target textures")},t._updateDrawOptions=function(e){var t=Object.assign({},e),r=[this.bufferTransform,this.textureTransform].filter(Boolean),n=Array.isArray(r),i=0;for(r=n?r:r[Symbol.iterator]();;){var o;if(n){if(i>=r.length)break;o=r[i++]}else{if((i=r.next()).done)break;o=i.value}var s=o;t=Object.assign(t,s.getDrawOptions(t))}return t},e}();var R=r(570),B=r(516),M=r(584);var N=new Uint8Array([255,0,0,255]),j="THIS DEMO REQUIRES WEBGL2, BUT YOUR BROWSER DOESN'T SUPPORT IT",D=new M.a({id:"transform"}).enable(),P=[0,0];function F(e){P=[e.offsetX,e.offsetY]}function H(e){P=null}var z=function(e){var t,r;function n(t){var r;return void 0===t&&(t={}),(r=e.call(this,Object.assign(t,{createFramebuffer:!0}))||this).isDemoSupported=!0,r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.getInfo=function(){return'\n<p>\n  Instanced triangles animated on the GPU using a luma.gl <code>Transform</code> object.\n\n  This is a port of an example from\n  <a href="https://github.com/WebGLSamples/WebGL2Samples/blob/master/samples/transform_feedback_instanced.html">\n    WebGL2Samples\n  </a>\n'};var i=n.prototype;return i.onInitialize=function(e){e.canvas;var t=e.gl;if(this.isDemoSupported=Object(s.d)(t),!this.isDemoSupported)return D.error(j)(),{};t.canvas.addEventListener("mousemove",F),t.canvas.addEventListener("mouseleave",H);for(var r=new Float32Array([.015,0,-.01,.01,-.01,-.01]),n=new Float32Array(2e3),i=new Float32Array(1e3),o=new Float32Array(3e3),f=new Uint8ClampedArray(2e3),l=0;l<1e3;++l){n[2*l]=2*Math.random()-1,n[2*l+1]=2*Math.random()-1,i[l]=2*Math.random()*Math.PI,Math.random()>.5?(o[3*l+1]=1,o[3*l+2]=1):(o[3*l]=1,o[3*l+2]=1),f[2*l]=Math.floor(l/255),f[2*l+1]=l-255*f[2*l]}var d=new a.a(t,r),h=new a.a(t,o),g=new a.a(t,n),p=new a.a(t,i),v=new a.a(t,f);return{positionBuffer:d,rotationBuffer:p,colorBuffer:h,offsetBuffer:g,renderModel:new u.a(t,{id:"RenderModel",vs:"#version 300 es\n#define OFFSET_LOCATION 0\n#define ROTATION_LOCATION 1\n#define POSITION_LOCATION 2\n#define COLOR_LOCATION 3\nprecision highp float;\nprecision highp int;\nlayout(location = POSITION_LOCATION) in vec2 a_position;\nlayout(location = ROTATION_LOCATION) in float a_rotation;\nlayout(location = OFFSET_LOCATION) in vec2 a_offset;\nlayout(location = COLOR_LOCATION) in vec3 a_color;\nin vec2 instancePickingColors;\nout vec3 v_color;\nvoid main()\n{\n    v_color = a_color;\n\n    float cos_r = cos(a_rotation);\n    float sin_r = sin(a_rotation);\n    mat2 rot = mat2(\n        cos_r, sin_r,\n        -sin_r, cos_r\n    );\n    gl_Position = vec4(rot * a_position + a_offset, 0.0, 1.0);\n    picking_setPickingColor(vec3(0., instancePickingColors));\n}\n",fs:"#version 300 es\n#define ALPHA 0.9\nprecision highp float;\nprecision highp int;\nin vec3 v_color;\nout vec4 color;\nvoid main()\n{\n    color = vec4(v_color * ALPHA, ALPHA);\n    color = picking_filterColor(color);\n}\n",drawMode:t.TRIANGLE_FAN,vertexCount:3,isInstanced:!0,instanceCount:1e3,attributes:{a_position:d,a_color:[h,{divisor:1}],a_offset:[g,{divisor:1}],a_rotation:[p,{divisor:1}],instancePickingColors:[v,{divisor:1}]},modules:[c.a]}),transform:new L(t,{vs:"#version 300 es\n#define OFFSET_LOCATION 0\n#define ROTATION_LOCATION 1\n\n#define M_2PI 6.28318530718\n\n// We simulate the wandering of agents using transform feedback in this vertex shader\n// The simulation goes like this:\n// Assume there's a circle in front of the agent whose radius is WANDER_CIRCLE_R\n// the origin of which has a offset to the agent's pivot point, which is WANDER_CIRCLE_OFFSET\n// Each frame we pick a random point on this circle\n// And the agent moves MOVE_DELTA toward this target point\n// We also record the rotation facing this target point, so it will be the base rotation\n// for our next frame, which means the WANDER_CIRCLE_OFFSET vector will be on this direction\n// Thus we fake a smooth wandering behavior\n\n#define MAP_HALF_LENGTH 1.01\n#define WANDER_CIRCLE_R 0.01\n#define WANDER_CIRCLE_OFFSET 0.04\n#define MOVE_DELTA 0.001\nprecision highp float;\nprecision highp int;\nuniform float u_time;\nlayout(location = OFFSET_LOCATION) in vec2 a_offset;\nlayout(location = ROTATION_LOCATION) in float a_rotation;\nout vec2 v_offset;\nout float v_rotation;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    float theta = M_2PI * rand(vec2(u_time, a_rotation + a_offset.x + a_offset.y));\n    float cos_r = cos(a_rotation);\n    float sin_r = sin(a_rotation);\n    mat2 rot = mat2(\n        cos_r, sin_r,\n        -sin_r, cos_r\n    );\n\n    vec2 p = WANDER_CIRCLE_R * vec2(cos(theta), sin(theta)) + vec2(WANDER_CIRCLE_OFFSET, 0.0);\n    vec2 move = normalize(rot * p);\n    v_rotation = atan(move.y, move.x);\n    v_offset = a_offset + MOVE_DELTA * move;\n\n    // wrapping at edges\n    v_offset = vec2 (\n        v_offset.x > MAP_HALF_LENGTH ? - MAP_HALF_LENGTH :\n          ( v_offset.x < - MAP_HALF_LENGTH ? MAP_HALF_LENGTH : v_offset.x ) ,\n        v_offset.y > MAP_HALF_LENGTH ? - MAP_HALF_LENGTH :\n          ( v_offset.y < - MAP_HALF_LENGTH ? MAP_HALF_LENGTH : v_offset.y )\n        );\n\n    gl_Position = vec4(v_offset, 0.0, 1.0);\n}\n",elementCount:1e3,sourceBuffers:{a_offset:g,a_rotation:p},feedbackMap:{a_offset:"v_offset",a_rotation:"v_rotation"}})}},i.onRender=function(e){var t=e.gl,r=(e.width,e.height,e.renderModel),n=(e.positionBuffer,e.colorBuffer,e.transform),i=e.framebuffer,o=(e.useDevicePixels,e.time);if(this.isDemoSupported){n.run({uniforms:{u_time:o}}),n.swap();var s=n.getBuffer("v_offset"),a=n.getBuffer("v_rotation");if(s.setAccessor({divisor:1}),a.setAccessor({divisor:1}),r.clear({color:[0,0,0,1],depth:!0}),r.draw({attributes:{a_offset:s,a_rotation:a},parameters:{blend:!0,blendFunc:[t.SRC_ALPHA,t.ONE]}}),s.setAccessor({divisor:0}),a.setAccessor({divisor:0}),P){var u=Object(B.a)(t,P);!function(e,t,r,n,i){i.clear({color:!0,depth:!0}),n.setUniforms({picking_uActive:1}),n.draw({framebuffer:i}),n.setUniforms({picking_uActive:0});var o=Object(v.b)(i,{sourceX:t,sourceY:r,sourceWidth:1,sourceHeight:1,sourceFormat:e.RGBA,sourceType:e.UNSIGNED_BYTE});o[0]+o[1]+o[2]>0?n.updateModuleSettings({pickingSelectedColor:o,pickingHighlightColor:N}):n.updateModuleSettings({pickingSelectedColor:null})}(t,u.x+Math.floor(u.width/2),u.y+Math.floor(u.height/2),r,i)}}},i.onFinalize=function(e){var t=e.renderModel,r=e.transform;t&&t.delete(),r&&r.delete()},i.isSupported=function(){return this.isDemoSupported},i.getAltText=function(){return j},n}(R.a);"undefined"==typeof window||window.website||(new z).start();r.d(t,"default",function(){return G});var G=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return i.a.createElement(o.a,{AnimationLoop:z,exampleConfig:this.props.pageContext.exampleConfig})},n}(i.a.Component)},337:function(e,t,r){"use strict";r(29),r(18),r(102),r(32),r(57),r(136),r(137),r(77),r(5),r(6),r(4),r(56),r(101),r(10),r(8),r(1),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="undefined"!=typeof window&&window.addEventListener,o=new Map,s=function(){return i&&window.__SEER_INITIALIZED__},a=function(e,t){var r=o.get(e),n=Date.now();return!!(r&&n-r<t)||(o.set(e,n),!1)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i&&s()){var r=new Set,o=JSON.stringify(t,function(e){return function(t,r){if(!r||"object"!==(void 0===r?"undefined":n(r))||!e.has(r))return e.add(r),Object.prototype.toString.call(r).slice(8,-1).includes("Array")?Array.prototype.slice.call(r,0,20):r}}(r));try{window.postMessage({type:e,payload:o,source:"seer-agent"},"*")}catch(u){if(a("seer-log",2e3))return;console.log(u)}}},c=new Map,f=function(e){if(e&&e.data&&"seer-core"===e.data.source){var t=e.data,r=t.type,n=t.payload,i=c.get(r);i&&i.forEach(function(e){return e(n)})}},l=function(){i&&!window.__SEER_LISTENER__&&(window.addEventListener("message",f),window.__SEER_LISTENER__=!0)};t.default={send:u,throttle:a,isReady:s,list:function(e,t){return u("LIST",{key:e,data:t})},listItem:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u("LIST_ITEM",{key:e,itemKey:t,data:r})},updateItem:function(e,t,r,n){return u("UPDATE_ITEM",{key:e,itemKey:t,path:r,data:n})},multiUpdate:function(e,t,r){return u("MULTI_UPDATE_ITEM",{key:e,itemKey:t,array:r})},deleteItem:function(e,t){return u("DELETE_ITEM",{key:e,itemKey:t})},addLog:function(e,t,r){return u("ADD_LOG",{key:e,itemKey:t,msg:r})},listeners:c,listenFor:function(e,t){if(i){if(!e||!t)throw new Error("Please provide a type and callback");c.has(e)||c.set(e,[]),window.__SEER_LISTENER__||l(),c.get(e).push(t)}},removeListener:function(e){c.forEach(function(t,r){c.set(r,t.filter(function(t){return t!==e}))})},init:l,clean:function(){i&&window.__SEER_LISTENER__&&(window.removeEventListener("message",f),delete window.__SEER_LISTENER__)}}},338:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return u}),r.d(t,"d",function(){return c}),r.d(t,"c",function(){return f});r(136),r(137),r(12),r(28);var n=r(377),i="void main() {gl_FragColor = vec4(0);}",o="out vec4 transform_output;\nvoid main() {\n  transform_output = vec4(0);\n}",s="#version 300 es\n"+o;function a(e,t){t=Array.isArray(t)?t:[t];var r=e.replace(/^\s+/,"").split(/\s+/),n=r[0],i=r[1],o=r[2];return t.includes(n)&&i&&o?{qualifier:n,type:i,name:o.split(";")[0]}:null}function u(e){var t=void 0===e?{}:e,r=t.version,a=void 0===r?100:r,u=t.input,c=t.inputType,f=t.output;if(!u)return 300===a?s:a>300?"#version "+a+"\n"+o:i;var l=function(e,t){switch(t){case"float":return"vec4("+e+", 0.0, 0.0, 1.0)";case"vec2":return"vec4("+e+", 0.0, 1.0)";case"vec3":return"vec4("+e+", 1.0)";case"vec4":return e;default:return Object(n.a)(!1),null}}(u,c);return a>=300?"#version "+a+" "+(300===a?"es":"")+"\nin "+c+" "+u+";\nout vec4 "+f+";\nvoid main() {\n  "+f+" = "+l+";\n}":"varying "+c+" "+u+";\nvoid main() {\n  gl_FragColor = "+l+";\n}"}function c(e){switch(e){case"float":return"x";case"vec2":return"xy";case"vec3":return"xyz";case"vec4":return"xyzw";default:return Object(n.a)(!1),null}}function f(e){switch(e){case"float":return 1;case"vec2":return 2;case"vec3":return 3;case"vec4":return 4;default:return Object(n.a)(!1),null}}},461:function(e,t,r){"use strict";r(329);var n={pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingThreshold:1,pickingActive:!1};t.a={name:"picking",vs:"uniform vec3 picking_uSelectedColor;\nuniform float picking_uThreshold;\nuniform bool picking_uSelectedColorValid;\n\nout vec4 picking_vRGBcolor_Aselected;\n\nconst float COLOR_SCALE = 1. / 255.;\n\nbool isVertexPicked(vec3 vertexColor) {\n  return\n    picking_uSelectedColorValid &&\n    abs(vertexColor.r - picking_uSelectedColor.r) < picking_uThreshold &&\n    abs(vertexColor.g - picking_uSelectedColor.g) < picking_uThreshold &&\n    abs(vertexColor.b - picking_uSelectedColor.b) < picking_uThreshold;\n}\n\nvoid picking_setPickingColor(vec3 pickingColor) {\n  // Do the comparison with selected item color in vertex shader as it should mean fewer compares\n  picking_vRGBcolor_Aselected.a =\n    float(isVertexPicked(pickingColor));\n\n  // Stores the picking color so that the fragment shader can render it during picking\n  picking_vRGBcolor_Aselected.rgb = pickingColor * COLOR_SCALE;\n}\n",fs:"uniform bool picking_uActive; // true during rendering to offscreen picking buffer\nuniform vec3 picking_uSelectedColor;\nuniform vec4 picking_uHighlightColor;\n\nin vec4 picking_vRGBcolor_Aselected;\n\nconst float COLOR_SCALE = 1. / 255.;\n\n/*\n * Returns highlight color if this item is selected.\n */\nvec4 picking_filterHighlightColor(vec4 color) {\n  bool selected = bool(picking_vRGBcolor_Aselected.a);\n\n  if (selected) {\n    vec4 highLightColor = picking_uHighlightColor * COLOR_SCALE;\n\n    float highLightAlpha = highLightColor.a;\n    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\n    float highLightRatio = highLightAlpha / blendedAlpha;\n\n    vec3 blendedRGB = mix(color.rgb, highLightColor.rgb, highLightRatio);\n    return vec4(blendedRGB, blendedAlpha);\n  } else {\n    return color;\n  }\n}\n\n/*\n * Returns picking color if picking enabled else unmodified argument.\n */\nvec4 picking_filterPickingColor(vec4 color) {\n  vec3 pickingColor = picking_vRGBcolor_Aselected.rgb;\n  if (picking_uActive && length(pickingColor) < 0.001) {\n    discard;\n  }\n  return picking_uActive ? vec4(pickingColor, 1.0) : color;\n}\n\n/*\n * Returns picking color if picking is enabled if not\n * highlight color if this item is selected, otherwise unmodified argument.\n */\nvec4 picking_filterColor(vec4 color) {\n  vec4 highightColor = picking_filterHighlightColor(color);\n  return picking_filterPickingColor(highightColor);\n}\n\n",getUniforms:function(e){void 0===e&&(e=n);var t={};if(void 0!==e.pickingSelectedColor)if(null===e.pickingSelectedColor)t.picking_uSelectedColorValid=0;else{var r=[e.pickingSelectedColor[0],e.pickingSelectedColor[1],e.pickingSelectedColor[2]];t.picking_uSelectedColorValid=1,t.picking_uSelectedColor=r}return void 0!==e.pickingHighlightColor&&(t.picking_uHighlightColor=e.pickingHighlightColor),void 0!==e.pickingThreshold&&(t.picking_uThreshold=e.pickingThreshold),void 0!==e.pickingActive&&(t.picking_uActive=e.pickingActive?1:0),t}}}}]);
//# sourceMappingURL=component---templates-core-example-transform-jsx-058f4f49495574c76a0d.js.map