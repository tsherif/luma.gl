(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{LG3w:function(e,t,n){"use strict";n("91GP"),n("rE2o"),n("ioFf"),n("rGqo"),n("z2o2");var r=n("73Rc"),i=n.n(r),o=(n("Z2Ku"),n("L9s1"),n("pIFo"),n("KKXr"),n("ayeP")),a="void main() {gl_FragColor = vec4(0);}",s="out vec4 transform_output;\nvoid main() {\n  transform_output = vec4(0);\n}",u="#version 300 es\n"+s;function c(e,t){t=Array.isArray(t)?t:[t];var n=e.replace(/^\s+/,"").split(/\s+/),r=n[0],i=n[1],o=n[2];return t.includes(r)&&i&&o?{qualifier:r,type:i,name:o.split(";")[0]}:null}function f(e){var t=void 0===e?{}:e,n=t.version,r=void 0===n?100:n,i=t.input,c=t.inputType,f=t.output;if(!i)return 300===r?u:r>300?"#version "+r+"\n"+s:a;var l=function(e,t){switch(t){case"float":return"vec4("+e+", 0.0, 0.0, 1.0)";case"vec2":return"vec4("+e+", 0.0, 1.0)";case"vec3":return"vec4("+e+", 1.0)";case"vec4":return e;default:return Object(o.a)(!1),null}}(i,c);return r>=300?"#version "+r+" "+(300===r?"es":"")+"\nin "+c+" "+i+";\nout vec4 "+f+";\nvoid main() {\n  "+f+" = "+l+";\n}":"varying "+c+" "+i+";\nvoid main() {\n  gl_FragColor = "+l+";\n}"}n("yt8O"),n("Btvt"),n("RW0V");var l=n("lHlH"),d=n("3LCa"),h=n("GInI"),g=n("Iq2B"),v=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.currentIndex=0,this.feedbackMap={},this.varyings=null,this.bindings=[],this.resources={},this._initialize(t),Object.seal(this)}var t=e.prototype;return t.setupResources=function(e){var t=this.bindings,n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}var o=i;this._setupTransformFeedback(o,e)}},t.updateModelProps=function(e){void 0===e&&(e={});var t=this.varyings;return t.length>0&&(e=Object.assign({},e,{varyings:t})),e},t.getDrawOptions=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],n=t.sourceBuffers,r=t.transformFeedback;return{attributes:Object.assign({},n,e.attributes),transformFeedback:r}},t.swap=function(){return!!this.feedbackMap&&(this.currentIndex=this._getNextIndex(),!0)},t.update=function(e){void 0===e&&(e={}),this._setupBuffers(e)},t.getBuffer=function(e){var t=this.bindings[this.currentIndex].feedbackBuffers,n=e?t[e]:null;return n?n instanceof d.a?n:n.buffer:null},t.getData=function(e){var t=(void 0===e?{}:e).varyingName,n=this.getBuffer(t);return n?n.getData():null},t.delete=function(){for(var e in this.resources)this.resources[e].delete()},t._initialize=function(e){void 0===e&&(e={}),this._setupBuffers(e),this.varyings=e.varyings||Object.keys(this.bindings[this.currentIndex].feedbackBuffers),this.varyings.length>0&&Object(g.a)(Object(l.e)(this.gl))},t._getFeedbackBuffers=function(e){var t=e.sourceBuffers,n=void 0===t?{}:t,r={};if(this.bindings[this.currentIndex]&&Object.assign(r,this.bindings[this.currentIndex].feedbackBuffers),this.feedbackMap)for(var i in this.feedbackMap){var o=this.feedbackMap[i];i in n&&(r[o]=i)}for(var a in Object.assign(r,e.feedbackBuffers),r){var s=r[a];if("string"==typeof s){var u=n[s],c=u.byteLength,f=u.usage,l=u.accessor;r[a]=this._createNewBuffer(a,{byteLength:c,usage:f,accessor:l})}}return r},t._setupBuffers=function(e){void 0===e&&(e={});var t=e.sourceBuffers,n=void 0===t?null:t;Object.assign(this.feedbackMap,e.feedbackMap);var r=this._getFeedbackBuffers(e);this._updateBindings({sourceBuffers:n,feedbackBuffers:r})},t._setupTransformFeedback=function(e,t){var n=t.model.program;e.transformFeedback=new h.a(this.gl,{program:n,buffers:e.feedbackBuffers})},t._updateBindings=function(e){if(this.bindings[this.currentIndex]=this._updateBinding(this.bindings[this.currentIndex],e),this.feedbackMap){var t=this._swapBuffers(this.bindings[this.currentIndex]),n=t.sourceBuffers,r=t.feedbackBuffers,i=this._getNextIndex();this.bindings[i]=this._updateBinding(this.bindings[i],{sourceBuffers:n,feedbackBuffers:r})}},t._updateBinding=function(e,t){return e?(Object.assign(e.sourceBuffers,t.sourceBuffers),Object.assign(e.feedbackBuffers,t.feedbackBuffers),e.transformFeedback&&e.transformFeedback.setBuffers(e.feedbackBuffers),e):{sourceBuffers:Object.assign({},t.sourceBuffers),feedbackBuffers:Object.assign({},t.feedbackBuffers)}},t._swapBuffers=function(e){if(!this.feedbackMap)return null;var t=Object.assign({},e.sourceBuffers),n=Object.assign({},e.feedbackBuffers);for(var r in this.feedbackMap){var i=this.feedbackMap[r];t[r]=e.feedbackBuffers[i],n[i]=e.sourceBuffers[r],Object(g.a)(n[i]instanceof d.a)}return{sourceBuffers:t,feedbackBuffers:n}},t._createNewBuffer=function(e,t){var n=new d.a(this.gl,t);return this.resources[e]&&this.resources[e].delete(),this.resources[e]=n,n},t._getNextIndex=function(){return(this.currentIndex+1)%2},e}(),p=(n("Y9lz"),n("EpVc")),_=n("2urO"),m=n("mECX"),b=n("kgJN");n("xfY5"),n("/KAi"),n("SRfc");function T(e){var t=100,n=e.match(/[^\s]+/g);if(n.length>=2&&"#version"===n[0]){var r=parseInt(n[1],10);Number.isFinite(r)&&(t=r)}return t}var x,k=n("63Iv"),A={name:"transform",vs:"attribute float transform_elementID;\n\n// returns half of pixel size, used to move the pixel position to center of the pixel.\nvec2 transform_getPixelSizeHalf(vec2 size) {\n  return vec2(1.) / (2. * size);\n}\n\n// returns current elements pixel indeces [x, y],\n// where x ranges in [0 to texSize-1] and y ranges in [0 to texSize-1]\nvec2 transform_getPixelIndices(vec2 texSize, vec2 pixelSizeHalf) {\n  // Add safe offset (half of pixel height) before doing floor\n  float yIndex = floor((transform_elementID / texSize[0]) + pixelSizeHalf[1]);\n  float xIndex = transform_elementID - (yIndex * texSize[0]);\n  return vec2(xIndex, yIndex);\n}\n\n// returns current elementID's texture co-ordianate\nvec2 transform_getTexCoord(vec2 size) {\n  vec2 pixelSizeHalf = transform_getPixelSizeHalf(size);\n  vec2 indices = transform_getPixelIndices(size, pixelSizeHalf);\n  vec2 coord = indices / size + pixelSizeHalf;\n  return coord;\n}\n\n// returns current elementID's position\nvec2 transform_getPos(vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  // Change from [0 1] range to [-1 1]\n  vec2 pos = (texCoord * (2.0, 2.0)) - (1., 1.);\n  return pos;\n}\n\n// returns current elementID's pixel value\nvec4 transform_getInput(sampler2D texSampler, vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  vec4 textureColor = texture2D(texSampler, texCoord);\n  return textureColor;\n}\n",fs:null},O=(n("f3/d"),"transform_uSampler_"),C="transform_uSize_",y="transform_position";function I(e){var t=e.vs,n=e.sourceTextureMap,r=e.targetTextureVarying,i=e.targetTexture,a=Object.keys(n).length,s=null,u={},f=t,l={};if(a>0||r){var d=f.split("\n"),h=d.slice();if(d.forEach((function(e,t,i){if(a>0){var f=function(e,t){var n={},r=function(e){return c(e,["attribute","in"])}(e);if(!r)return null;var i=r.type,a=r.name;if(a&&t[a]){var s="// "+e+" => Replaced by Transform with a sampler",u=function(e){var t=""+O+e,n=""+C+e;return{samplerName:t,sizeName:n,uniformDeclerations:"  uniform sampler2D "+t+";\n  uniform vec2 "+n+";"}}(a),f=u.samplerName,l=u.sizeName,d=u.uniformDeclerations,h=function(e){switch(e){case"float":return"x";case"vec2":return"xy";case"vec3":return"xyz";case"vec4":return"xyzw";default:return Object(o.a)(!1),null}}(i),g="  "+i+" "+a+" = transform_getInput("+f+", "+l+")."+h+";\n";return n[f]=a,{updatedLine:s,inject:{"vs:#decl":d,"vs:#main-start":g},samplerTextureMap:n}}return null}(e,n);if(f){var d=f.updatedLine,g=f.inject;h[t]=d,l=Object(k.b)([l,g]),Object.assign(u,f.samplerTextureMap),a--}}r&&!s&&(s=function(e,t){var n=c(e,["varying","out"]);if(!n)return null;return n.name===t?n.type:null}(e,r))})),r){Object(g.a)(i);var v=""+C+r,p={"vs:#decl":"uniform vec2 "+v+";\n","vs:#main-start":"     vec2 "+y+" = transform_getPos("+v+");\n     gl_Position = vec4("+y+", 0, 1.);\n"};l=Object(k.b)([l,p])}f=h.join("\n")}return{vs:f,targetTextureType:s,inject:l,samplerTextureMap:u}}var w=((x={})[i.a.TEXTURE_MIN_FILTER]=i.a.NEAREST,x[i.a.TEXTURE_MAG_FILTER]=i.a.NEAREST,x[i.a.TEXTURE_WRAP_S]=i.a.CLAMP_TO_EDGE,x[i.a.TEXTURE_WRAP_T]=i.a.CLAMP_TO_EDGE,x),E=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.currentIndex=0,this._swapTexture=null,this.targetTextureVarying=null,this.targetTextureType=null,this.samplerTextureMap=null,this.bindings=[],this.resources={},this._initialize(t),Object.seal(this)}var t=e.prototype;return t.updateModelProps=function(e){void 0===e&&(e={});var t=this._processVertexShader(e);return Object.assign({},e,t)},t.getDrawOptions=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],n=t.sourceTextures,r=t.framebuffer,i=t.targetTexture,o=Object.assign({},e.attributes),a=Object.assign({},e.uniforms),s=Object.assign({},e.parameters),u=e.discard;if(this.hasSourceTextures||this.hasTargetTexture){for(var c in o.transform_elementID=this.elementIDBuffer,this.samplerTextureMap){var f=this.samplerTextureMap[c];a[c]=n[f]}this._setSourceTextureParameters();var l=function(e){var t,n,r=e.sourceTextureMap,i=e.targetTextureVarying,o=e.targetTexture,a={};for(var s in i&&(t=o.width,n=o.height,a[""+C+i]=[t,n]),r){var u=r[s];t=u.width,n=u.height,a[""+C+s]=[t,n]}return a}({sourceTextureMap:n,targetTextureVarying:this.targetTextureVarying,targetTexture:i});Object.assign(a,l)}return this.hasTargetTexture&&(u=!1,s.viewport=[0,0,r.width,r.height]),{attributes:o,framebuffer:r,uniforms:a,discard:u,parameters:s}},t.swap=function(){return!!this._swapTexture&&(this.currentIndex=this._getNextIndex(),!0)},t.update=function(e){void 0===e&&(e={}),this._setupTextures(e)},t.getTargetTexture=function(){return this.bindings[this.currentIndex].targetTexture},t.getData=function(e){var t=(void 0===e?{}:e).packed,n=void 0!==t&&t,r=this.bindings[this.currentIndex].framebuffer,i=Object(p.b)(r);if(!n)return i;for(var a=i.constructor,s=function(e){switch(e){case"float":return 1;case"vec2":return 2;case"vec3":return 3;case"vec4":return 4;default:return Object(o.a)(!1),null}}(this.targetTextureType),u=new a(i.length*s/4),c=0,f=0;f<i.length;f+=4)for(var l=0;l<s;l++)u[c++]=i[f+l];return u},t.getFramebuffer=function(){return this.bindings[this.currentIndex].framebuffer},t.delete=function(){this.ownTexture&&this.ownTexture.delete(),this.elementIDBuffer&&this.elementIDBuffer.delete()},t._initialize=function(e){void 0===e&&(e={});var t=e,n=t._targetTextureVarying,r=t._swapTexture;this._swapTexture=r,this.targetTextureVarying=n,this.hasTargetTexture=n,this._setupTextures(e)},t._createTargetTexture=function(e){var t=e.sourceTextures,n=e.textureOrReference;if(n instanceof _.a)return n;var r=t[n];return r?(this._targetRefTexName=n,this._createNewTexture(r)):null},t._setupTextures=function(e){void 0===e&&(e={});var t=e,n=t._sourceTextures,r=void 0===n?{}:n,i=t._targetTexture,o=this._createTargetTexture({sourceTextures:r,textureOrReference:i});this.hasSourceTextures=this.hasSourceTextures||r&&Object.keys(r).length>0,this._updateBindings({sourceTextures:r,targetTexture:o}),"elementCount"in e&&this._updateElementIDBuffer(e.elementCount)},t._updateElementIDBuffer=function(e){if(!("number"!=typeof e||this.elementCount>=e)){var t=new Float32Array(e);t.forEach((function(e,t,n){n[t]=t})),this.elementIDBuffer?this.elementIDBuffer.setData({data:t}):this.elementIDBuffer=new d.a(this.gl,{data:t,accessor:{size:1}}),this.elementCount=e}},t._updateBindings=function(e){if(this.bindings[this.currentIndex]=this._updateBinding(this.bindings[this.currentIndex],e),this._swapTexture){var t=this._swapTextures(this.bindings[this.currentIndex]),n=t.sourceTextures,r=t.targetTexture,i=this._getNextIndex();this.bindings[i]=this._updateBinding(this.bindings[i],{sourceTextures:n,targetTexture:r})}},t._updateBinding=function(e,t){var n=t.sourceTextures,r=t.targetTexture;if(e||(e={sourceTextures:{},targetTexture:null}),Object.assign(e.sourceTextures,n),r){e.targetTexture=r;var o,a,s=r.width,u=r.height,c=e.framebuffer;if(c)c.update({attachments:(o={},o[i.a.COLOR_ATTACHMENT0]=r,o),resizeAttachments:!1}),c.resize({width:s,height:u});else e.framebuffer=new m.a(this.gl,{id:(this.id||"transform")+"-framebuffer",width:s,height:u,attachments:(a={},a[i.a.COLOR_ATTACHMENT0]=r,a)})}return e},t._setSourceTextureParameters=function(){var e=this.currentIndex,t=this.bindings[e].sourceTextures;for(var n in t)t[n].setParameters(w)},t._swapTextures=function(e){if(!this._swapTexture)return null;var t=Object.assign({},e.sourceTextures);return t[this._swapTexture]=e.targetTexture,{sourceTextures:t,targetTexture:e.sourceTextures[this._swapTexture]}},t._createNewTexture=function(e){var t,n,r=Object(b.a)(e,{parameters:(t={},t[i.a.TEXTURE_MIN_FILTER]=i.a.NEAREST,t[i.a.TEXTURE_MAG_FILTER]=i.a.NEAREST,t[i.a.TEXTURE_WRAP_S]=i.a.CLAMP_TO_EDGE,t[i.a.TEXTURE_WRAP_T]=i.a.CLAMP_TO_EDGE,t),pixelStore:(n={},n[i.a.UNPACK_FLIP_Y_WEBGL]=!1,n)});return this.ownTexture&&this.ownTexture.delete(),this.ownTexture=r,r},t._getNextIndex=function(){return(this.currentIndex+1)%2},t._processVertexShader=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],n=t.sourceTextures,r=t.targetTexture,i=I({vs:e.vs,sourceTextureMap:n,targetTextureVarying:this.targetTextureVarying,targetTexture:r}),o=i.vs,a=i.uniforms,s=i.targetTextureType,u=i.inject,c=i.samplerTextureMap,l=Object(k.b)([e.inject||{},u]);return this.targetTextureType=s,this.samplerTextureMap=c,{vs:o,fs:e._fs||f({version:T(o),input:this.targetTextureVarying,inputType:s,output:"transform_output"}),modules:this.hasSourceTextures||this.targetTextureVarying?[A].concat(e.modules||[]):e.modules,uniforms:a,inject:l}},e}(),B=n("BunF"),R=n("UD/Y");n.d(t,"a",(function(){return L}));var L=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.model=null,this.elementCount=0,this.bufferTransform=null,this.textureTransform=null,this.elementIDBuffer=null,this._initialize(t),Object.seal(this)}e.isSupported=function(e){return Object(l.e)(e)};var t=e.prototype;return t.delete=function(){var e=this.model,t=this.bufferTransform,n=this.textureTransform;e&&e.delete(),t&&t.delete(),n&&n.delete()},t.run=function(e){void 0===e&&(e={});var t=e.clearRenderTarget,n=void 0===t||t,r=this._updateDrawOptions(e);n&&r.framebuffer&&r.framebuffer.clear({color:!0}),this.model.transform(r)},t.swap=function(){var e=!1,t=[this.bufferTransform,this.textureTransform].filter(Boolean),n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}e=e||i.swap()}Object(g.a)(e,"Nothing to swap")},t.getBuffer=function(e){return void 0===e&&(e=null),this.bufferTransform&&this.bufferTransform.getBuffer(e)},t.getData=function(e){void 0===e&&(e={});var t=[this.bufferTransform,this.textureTransform].filter(Boolean),n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}var o=i.getData(e);if(o)return o}return null},t.getFramebuffer=function(){return this.textureTransform&&this.textureTransform.getFramebuffer()},t.update=function(e){void 0===e&&(e={}),"elementCount"in e&&this.model.setVertexCount(e.elementCount);var t=[this.bufferTransform,this.textureTransform].filter(Boolean),n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}i.update(e)}},t._initialize=function(e){void 0===e&&(e={});var t=this.gl;this._buildResourceTransforms(t,e),e=this._updateModelProps(e),this.model=new R.a(t,Object.assign({},e,{fs:e.fs||f({version:T(e.vs)}),id:e.id||"transform-model",drawMode:e.drawMode||i.a.POINTS,vertexCount:e.elementCount})),this.bufferTransform&&this.bufferTransform.setupResources({model:this.model})},t._updateModelProps=function(e){var t=Object.assign({},e),n=[this.bufferTransform,this.textureTransform].filter(Boolean),r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}t=o.updateModelProps(t)}return t},t._buildResourceTransforms=function(e,t){(function(e){if(!Object(B.a)(e.sourceBuffers)||!Object(B.a)(e.feedbackBuffers)||e.varyings&&e.varyings.length>0)return!0;return!1})(t)&&(this.bufferTransform=new v(e,t)),function(e){if(!Object(B.a)(e._sourceTextures)||e._targetTexture||e._targetTextureVarying)return!0;return!1}(t)&&(this.textureTransform=new E(e,t)),Object(g.a)(this.bufferTransform||this.textureTransform,"must provide source/feedback buffers or source/target textures")},t._updateDrawOptions=function(e){var t=Object.assign({},e),n=[this.bufferTransform,this.textureTransform].filter(Boolean),r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var a=o;t=Object.assign(t,a.getDrawOptions(t))}return t},e}()},U8Dg:function(e,t,n){"use strict";n("NO8f");var r={pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingActive:!1,pickingAttribute:!1};t.a={name:"picking",vs:"uniform bool picking_uActive;\nuniform bool picking_uAttribute;\nuniform vec3 picking_uSelectedColor;\nuniform bool picking_uSelectedColorValid;\n\nout vec4 picking_vRGBcolor_Avalid;\n\nconst float COLOR_SCALE = 1. / 255.;\n\nbool picking_isColorValid(vec3 color) {\n  return dot(color, vec3(1.0)) > 0.001;\n}\n\nbool isVertexPicked(vec3 vertexColor) {\n  return\n    picking_uSelectedColorValid &&\n    !picking_isColorValid(abs(vertexColor - picking_uSelectedColor));\n}\n\nvoid picking_setPickingColor(vec3 pickingColor) {\n  if (picking_uActive) {\n    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable\n    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\n\n    if (!picking_uAttribute) {\n      // Stores the picking color so that the fragment shader can render it during picking\n      picking_vRGBcolor_Avalid.rgb = pickingColor * COLOR_SCALE;\n    }\n  } else {\n    // Do the comparison with selected item color in vertex shader as it should mean fewer compares\n    picking_vRGBcolor_Avalid.a = float(isVertexPicked(pickingColor));\n  }\n}\n\nvoid picking_setPickingAttribute(float value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.r = value;\n  }\n}\nvoid picking_setPickingAttribute(vec2 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rg = value;\n  }\n}\nvoid picking_setPickingAttribute(vec3 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rgb = value;\n  }\n}\n",fs:"uniform bool picking_uActive;\nuniform vec3 picking_uSelectedColor;\nuniform vec4 picking_uHighlightColor;\n\nin vec4 picking_vRGBcolor_Avalid;\n\n/*\n * Returns highlight color if this item is selected.\n */\nvec4 picking_filterHighlightColor(vec4 color) {\n  if (picking_uActive) {\n    return color;\n  }\n  bool selected = bool(picking_vRGBcolor_Avalid.a);\n\n  if (selected) {\n    float highLightAlpha = picking_uHighlightColor.a;\n    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\n    float highLightRatio = highLightAlpha / blendedAlpha;\n\n    vec3 blendedRGB = mix(color.rgb, picking_uHighlightColor.rgb, highLightRatio);\n    return vec4(blendedRGB, blendedAlpha);\n  } else {\n    return color;\n  }\n}\n\n/*\n * Returns picking color if picking enabled else unmodified argument.\n */\nvec4 picking_filterPickingColor(vec4 color) {\n  if (picking_uActive) {\n    if (picking_vRGBcolor_Avalid.a == 0.0) {\n      discard;\n    }\n    return picking_vRGBcolor_Avalid;\n  }\n  return color;\n}\n\n/*\n * Returns picking color if picking is enabled if not\n * highlight color if this item is selected, otherwise unmodified argument.\n */\nvec4 picking_filterColor(vec4 color) {\n  vec4 highightColor = picking_filterHighlightColor(color);\n  return picking_filterPickingColor(highightColor);\n}\n\n",getUniforms:function(e){void 0===e&&(e=r);var t={};if(void 0!==e.pickingSelectedColor)if(e.pickingSelectedColor){var n=e.pickingSelectedColor.slice(0,3);t.picking_uSelectedColorValid=1,t.picking_uSelectedColor=n}else t.picking_uSelectedColorValid=0;return e.pickingHighlightColor&&(t.picking_uHighlightColor=e.pickingHighlightColor.map((function(e){return e/255}))),void 0!==e.pickingActive&&(t.picking_uActive=Boolean(e.pickingActive),t.picking_uAttribute=Boolean(e.pickingAttribute)),t}}},aI42:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){function e(){}e.getInfo=function(){return""};var t=e.prototype;return t.start=function(){},t.stop=function(){},t.delete=function(){},t.onFinalize=function(){},t._setDisplay=function(){},t._getCanvas=function(e){var t;if(void 0===e&&(e={}),e.canvas){t=document.getElementById(e.canvas);var n=window.devicePixelRatio||1;t.height=t.clientHeight*n,t.width=t.clientWidth*n}else(t=document.createElement("canvas")).width=800,t.height=600,document.body.appendChild(t);return t},t._getContainer=function(e){if(void 0===e&&(e={}),this.container)return this.container;var t,n;if(this.container=document.createElement("div"),e.canvas){var r=document.getElementById(e.canvas);this.parent=r.parentElement,t=r.clientWidth,n=r.clientHeight,this.container.style.position="relative",this.container.style.top="-"+n+"px"}else this.parent=document.body,t=800,n=800;return this.container.style.width=t+"px",this.container.style.height=n+"px",this.parent.appendChild(this.container),this.container},t._removeContainer=function(e){void 0===e&&(e={}),this.parent.removeChild(this.container)},e}();function i(){var e=1,t=1;return function(){return e=Math.sin(17.23*t),t=Math.cos(27.92*e),(n=1432.71*Math.abs(e*t))-Math.floor(n);var n}}},tNJd:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("z0FI"),a=(n("aqI/"),n("Y9lz"),n("91GP"),n("NO8f"),n("3LCa")),s=n("mECX"),u=n("EpVc"),c=n("U8Dg"),f=n("UD/Y"),l=n("LG3w"),d=n("bjw9"),h=n("lHlH"),g=n("g/qQ"),v=n("aI42");var p=new Uint8Array([255,0,0,255]),_="THIS DEMO REQUIRES WEBGL2, BUT YOUR BROWSER DOESN'T SUPPORT IT",m=Object(v.b)(),b=new g.a({id:"transform"}).enable(),T=[0,0];function x(e){T=[e.offsetX,e.offsetY]}function k(e){T=null}var A=function(e){var t,n;function r(t){var n;return void 0===t&&(t={}),(n=e.call(this,Object.assign(t))||this).isDemoSupported=!0,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getInfo=function(){return'\n<p>\n  Instanced triangles animated on the GPU using a luma.gl <code>Transform</code> object.\n\n  This is a port of an example from\n  <a href="https://github.com/WebGLSamples/WebGL2Samples/blob/master/samples/transform_feedback_instanced.html">\n    WebGL2Samples\n  </a>\n'};var i=r.prototype;return i.onInitialize=function(e){e.canvas;var t=e.gl,n=e.width,r=e.height;if(this.isDemoSupported=Object(h.e)(t),!this.isDemoSupported)return b.error(_)(),{};t.canvas.addEventListener("mousemove",x),t.canvas.addEventListener("mouseleave",k);for(var i=new Float32Array([.015,0,-.01,.01,-.01,-.01]),o=new Float32Array(2e3),u=new Float32Array(1e3),d=new Float32Array(3e3),g=new Uint8ClampedArray(2e3),v=0;v<1e3;++v){o[2*v]=2*m()-1,o[2*v+1]=2*m()-1,u[v]=2*m()*Math.PI,m()>.5?(d[3*v+1]=1,d[3*v+2]=1):(d[3*v]=1,d[3*v+2]=1),g[2*v]=Math.floor(v/255),g[2*v+1]=v-255*g[2*v]}var p=new a.a(t,i),T=new a.a(t,d),A=new a.a(t,o),O=new a.a(t,u),C=new a.a(t,g);return{positionBuffer:p,rotationBuffer:O,colorBuffer:T,offsetBuffer:A,renderModel:new f.a(t,{id:"RenderModel",vs:"#version 300 es\n#define OFFSET_LOCATION 0\n#define ROTATION_LOCATION 1\n#define POSITION_LOCATION 2\n#define COLOR_LOCATION 3\nprecision highp float;\nprecision highp int;\nlayout(location = POSITION_LOCATION) in vec2 a_position;\nlayout(location = ROTATION_LOCATION) in float a_rotation;\nlayout(location = OFFSET_LOCATION) in vec2 a_offset;\nlayout(location = COLOR_LOCATION) in vec3 a_color;\nin vec2 instancePickingColors;\nout vec3 v_color;\nvoid main()\n{\n    v_color = a_color;\n\n    float cos_r = cos(a_rotation);\n    float sin_r = sin(a_rotation);\n    mat2 rot = mat2(\n        cos_r, sin_r,\n        -sin_r, cos_r\n    );\n    gl_Position = vec4(rot * a_position + a_offset, 0.0, 1.0);\n    picking_setPickingColor(vec3(0., instancePickingColors));\n}\n",fs:"#version 300 es\n#define ALPHA 0.9\nprecision highp float;\nprecision highp int;\nin vec3 v_color;\nout vec4 color;\nvoid main()\n{\n    color = vec4(v_color * ALPHA, ALPHA);\n    color = picking_filterColor(color);\n}\n",drawMode:t.TRIANGLE_FAN,vertexCount:3,isInstanced:!0,instanceCount:1e3,attributes:{a_position:p,a_color:[T,{divisor:1}],a_offset:[A,{divisor:1}],a_rotation:[O,{divisor:1}],instancePickingColors:[C,{divisor:1}]},modules:[c.a]}),transform:new l.a(t,{vs:"#version 300 es\n#define OFFSET_LOCATION 0\n#define ROTATION_LOCATION 1\n\n#define M_2PI 6.28318530718\n\n// We simulate the wandering of agents using transform feedback in this vertex shader\n// The simulation goes like this:\n// Assume there's a circle in front of the agent whose radius is WANDER_CIRCLE_R\n// the origin of which has a offset to the agent's pivot point, which is WANDER_CIRCLE_OFFSET\n// Each frame we pick a random point on this circle\n// And the agent moves MOVE_DELTA toward this target point\n// We also record the rotation facing this target point, so it will be the base rotation\n// for our next frame, which means the WANDER_CIRCLE_OFFSET vector will be on this direction\n// Thus we fake a smooth wandering behavior\n\n#define MAP_HALF_LENGTH 1.01\n#define WANDER_CIRCLE_R 0.01\n#define WANDER_CIRCLE_OFFSET 0.04\n#define MOVE_DELTA 0.001\nprecision highp float;\nprecision highp int;\nuniform float u_time;\nlayout(location = OFFSET_LOCATION) in vec2 a_offset;\nlayout(location = ROTATION_LOCATION) in float a_rotation;\nout vec2 v_offset;\nout float v_rotation;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    float theta = M_2PI * rand(vec2(u_time, a_rotation + a_offset.x + a_offset.y));\n    float cos_r = cos(a_rotation);\n    float sin_r = sin(a_rotation);\n    mat2 rot = mat2(\n        cos_r, sin_r,\n        -sin_r, cos_r\n    );\n\n    vec2 p = WANDER_CIRCLE_R * vec2(cos(theta), sin(theta)) + vec2(WANDER_CIRCLE_OFFSET, 0.0);\n    vec2 move = normalize(rot * p);\n    v_rotation = atan(move.y, move.x);\n    v_offset = a_offset + MOVE_DELTA * move;\n\n    // wrapping at edges\n    v_offset = vec2 (\n        v_offset.x > MAP_HALF_LENGTH ? - MAP_HALF_LENGTH :\n          ( v_offset.x < - MAP_HALF_LENGTH ? MAP_HALF_LENGTH : v_offset.x ) ,\n        v_offset.y > MAP_HALF_LENGTH ? - MAP_HALF_LENGTH :\n          ( v_offset.y < - MAP_HALF_LENGTH ? MAP_HALF_LENGTH : v_offset.y )\n        );\n\n    gl_Position = vec4(v_offset, 0.0, 1.0);\n}\n",elementCount:1e3,sourceBuffers:{a_offset:A,a_rotation:O},feedbackMap:{a_offset:"v_offset",a_rotation:"v_rotation"}}),pickingFramebuffer:new s.a(t,{width:n,height:r})}},i.onRender=function(e){var t=e.gl,n=e.width,r=e.height,i=e.renderModel,o=(e.positionBuffer,e.colorBuffer,e.transform),a=(e.useDevicePixels,e.time),s=e.pickingFramebuffer;if(this.isDemoSupported){o.run({uniforms:{u_time:a}}),o.swap();var c=o.getBuffer("v_offset"),f=o.getBuffer("v_rotation");if(c.setAccessor({divisor:1}),f.setAccessor({divisor:1}),i.clear({color:[0,0,0,1],depth:!0}),i.draw({attributes:{a_offset:c,a_rotation:f},parameters:{blend:!0,blendFunc:[t.SRC_ALPHA,t.ONE]}}),c.setAccessor({divisor:0}),f.setAccessor({divisor:0}),T){var l=Object(h.b)(t,T),d=l.x+Math.floor(l.width/2),g=l.y+Math.floor(l.height/2);s.resize({width:n,height:r}),function(e,t,n,r,i){i.clear({color:!0,depth:!0}),r.setUniforms({picking_uActive:1}),r.draw({framebuffer:i}),r.setUniforms({picking_uActive:0});var o=Object(u.b)(i,{sourceX:t,sourceY:n,sourceWidth:1,sourceHeight:1,sourceFormat:e.RGBA,sourceType:e.UNSIGNED_BYTE});o[0]+o[1]+o[2]>0?r.updateModuleSettings({pickingSelectedColor:o,pickingHighlightColor:p}):r.updateModuleSettings({pickingSelectedColor:null})}(t,d,g,i,s)}}},i.onFinalize=function(e){var t=e.renderModel,n=e.transform;t&&t.delete(),n&&n.delete()},i.isSupported=function(){return this.isDemoSupported},i.getAltText=function(){return _},r}(d.a);"undefined"==typeof window||window.website||(new A).start();n.d(t,"default",(function(){return O}));var O=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return i.a.createElement(o.a,{AnimationLoop:A,exampleConfig:this.props.pageContext.exampleConfig})},r}(i.a.Component)}}]);
//# sourceMappingURL=component---templates-showcase-example-wandering-jsx-fd33f941f7a970934537.js.map