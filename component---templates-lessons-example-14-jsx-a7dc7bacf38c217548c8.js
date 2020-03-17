(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{443:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),o=n(408),a=(n(2),n(148),n(36),n(10),n(0)),s=n.n(a),u=n(297),c=n(225),l=n(180),h=n(461),d=n(409),p=n(453),v=n(454),f=n(66);var g={uMaterialShininess:20,uShowSpecularHighlights:!0,uUseLighting:!0,uUseTextures:!0},m={uAmbientColor:[.2,.2,.2],uPointLightingLocation:[-10,4,-20],uPointLightingSpecularColor:[.8,.8,.8],uPointLightingDiffuseColor:[.8,.8,.8]},y=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.getInfo=function(){return'\n<p>\n  <a href="http://learningwebgl.com/blog/?p=1658" target="_blank">\n    Specular highlights and loading a JSON model\n  </a>\n<p>\n  The classic WebGL Lessons in luma.gl\n\n<div id="control-elements">\n  <input type="checkbox" id="specular" checked/> Show specular highlight<br/>\n  <input type="checkbox" id="lighting" checked/> Use lighting<br/>\n  Texture:\n  <select id="texture">\n    <option value="none">None</option>\n    <option selected value="galvanized">Galvanized</option>\n    <option value="earth">Earth</option>\n  </select>\n\n  <br/>\n  <h2>Material:</h2>\n  <div class="control-block">\n    <div class="control-row">\n      <div><b>Shininess:</b></div>\n      <input id="shininess" type="range" value="32.0" min="0.0" max="100.0" step="1"/>\n    </div>\n  </div>\n\n  <h2>Point light:</h2>\n  <div class="control-block">\n    <div class="control-row">\n      <div><b>Location:</b></div>\n      <div>X: <input type="text" id="lightPositionX" value="-10.0"/></div>\n      <div>Y: <input type="text" id="lightPositionY" value="4.0"/></div>\n      <div>Z: <input type="text" id="lightPositionZ" value="-20.0"/></div>\n    </div>\n    <div class="control-row">\n      <div><b>Specular colour:</b></div>\n      <div>R:\n        <input id="specularR" type="range" value="0.8" min="0.0" max="1.0" step="0.01"/>\n      </div>\n      <div>G:\n        <input id="specularG" type="range" value="0.8" min="0.0" max="1.0" step="0.01"/>\n      </div>\n      <div>B:\n        <input id="specularB" type="range" value="0.8" min="0.0" max="1.0" step="0.01"/>\n      </div>\n    </div>\n    <div class="control-row">\n      <div><b>Diffuse colour:</b></div>\n      <div>R:\n        <input id="diffuseR" type="range" value="0.8" min="0.0" max="1.0" step="0.01"/>\n      </div>\n      <div>G:\n        <input id="diffuseG" type="range" value="0.8" min="0.0" max="1.0" step="0.01"/>\n      </div>\n      <div>B:\n        <input id="diffuseB" type="range" value="0.8" min="0.0" max="1.0" step="0.01"/>\n      </div>\n    </div>\n  </div>\n\n  <h2>Ambient light:</h2>\n  <div class="control-block">\n    <div class="control-row">\n      <div><b>Colour:</b></div>\n        <div>R:\n          <input id="ambientR" type="range" value="0.2" min="0.0" max="1.0" step="0.01"/>\n        </div>\n        <div>G:\n          <input id="ambientG" type="range" value="0.2" min="0.0" max="1.0" step="0.01"/>\n        </div>\n        <div>B:\n          <input id="ambientB" type="range" value="0.2" min="0.0" max="1.0" step="0.01"/>\n        </div>\n      </div>\n  </div>\n\n  <br/>\n  Galvanized texture courtesy of\n  <a href="http://www.arroway-textures.com/">Arroway Textures</a>.<br/>\n  Earth texture courtesy of\n  <a href="http://www.esa.int/esaEO/SEMGSY2IU7E_index_0.html">\n    the European Space Agency/Envisat\n  </a>.<br/>\n\n  <br/>\n  The classic WebGL Lessons in luma.gl\n\n </div>\n'};var r=i.prototype;return r.onInitialize=function(t){var e,n=t.gl;return Object(u.a)(n,((e={clearColor:[0,0,0,1],clearDepth:1,depthTest:!0})[s.a.UNPACK_FLIP_Y_WEBGL]=!0,e)),Object(c.a)("Teapot.json").then((function(t){var e,i,r=JSON.parse(t),o=new l.a(n,{data:"arroway.de_metal+structure+06_d100_flat.jpg",parameters:(e={},e[n.TEXTURE_MAG_FILTER]=n.LINEAR,e[n.TEXTURE_MIN_FILTER]=n.LINEAR_MIPMAP_NEAREST,e[n.TEXTURE_WRAP_S]=n.REPEAT,e[n.TEXTURE_WRAP_T]=n.REPEAT,e),mipmap:!0}),a=new l.a(n,{urls:"earth.jpg",parameters:(i={},i[n.TEXTURE_MAG_FILTER]=n.LINEAR,i[n.TEXTURE_MIN_FILTER]=n.LINEAR_MIPMAP_NEAREST,i[n.TEXTURE_WRAP_S]=n.REPEAT,i[n.TEXTURE_WRAP_T]=n.REPEAT,i),mipmap:!0});return{teapot:new h.a(n,{id:"teapot-model",fs:"precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\n\nuniform float uMaterialShininess;\nuniform bool uShowSpecularHighlights;\nuniform bool uUseLighting;\nuniform bool uUseTextures;\nuniform vec3 uAmbientColor;\nuniform vec3 uPointLightingLocation;\nuniform vec3 uPointLightingSpecularColor;\nuniform vec3 uPointLightingDiffuseColor;\nuniform sampler2D uSampler;\n\nvoid main(void) {\n    vec3 lightWeighting;\n    if (!uUseLighting) {\n        lightWeighting = vec3(1.0, 1.0, 1.0);\n    } else {\n        vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n        vec3 normal = normalize(vTransformedNormal.xyz);\n        float specularLightWeighting = 0.0;\n        if (uShowSpecularHighlights) {\n            vec3 eyeDirection = normalize(-vPosition.xyz);\n            vec3 reflectionDirection = reflect(-lightDirection, normal);\n            specularLightWeighting =\n              pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);\n        }\n        float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n        lightWeighting = uAmbientColor\n            + uPointLightingSpecularColor * specularLightWeighting\n            + uPointLightingDiffuseColor * diffuseLightWeighting;\n    }\n    vec4 fragmentColor;\n    if (uUseTextures) {\n        fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n    } else {\n        fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n    }\n    gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n}\n",vs:"precision highp float;\n\nattribute vec3 positions;\nattribute vec3 normals;\nattribute vec2 texCoords;\n\nuniform mat4 uMMatrix;\nuniform mat4 uVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\n\nvoid main(void) {\n  vPosition = uMMatrix * vec4(positions, 1.0);\n  gl_Position = uPMatrix * uVMatrix * vPosition;\n  vTextureCoord = texCoords;\n  vTransformedNormal = uMMatrix * vec4(normals, 0.0);\n}\n",geometry:new d.a({id:"teapot-geometry",attributes:{positions:new Float32Array(r.positions),normals:new Float32Array(r.normals),texCoords:new Float32Array(r.texCoords),indices:new Uint16Array(r.indices)},drawMode:s.a.TRIANGLES}),uniforms:Object.assign({uSampler:o},g,m)}),earthTexture:a,galvanizedTexture:o}}))},r.onRender=function(t){var e=t.gl,n=t.tick,i=t.aspect,r=t.teapot,o=t.earthTexture,a=t.galvanizedTexture;e.clear(s.a.COLOR_BUFFER_BIT|s.a.DEPTH_BUFFER_BIT);var u=(new v.a).rotateX(Object(f.e)(-30)).transform([0,0,5]),c=(new v.a).lookAt({eye:u,center:[0,0,0],up:[0,1,0]}),l=function(){var t=function(t){return document.getElementById(t)},e=function(e,n){return void 0===n&&(n=1),t(e)?Number(t(e).value):n},n=function(e){return!t(e)||t(e).checked},i=n("specular"),r=n("lighting"),o="none"!==e("texture","none"),a=e("shininess"),s=[e("lightPositionX",-10),e("lightPositionY",4),e("lightPositionZ",-20)],u=[e("specularR",.8),e("specularG",.8),e("specularB",.8)],c=[e("diffuseR",.8),e("diffuseG",.8),e("diffuseB",.8)],l=[e("ambientR",.2),e("ambientG",.2),e("ambientB",.2)];return{useLighting:r,useSpecular:i,useTextures:o,shininess:a,texture:e("texture"),ambientColor:l,pointLightPosition:s,pointLightSpecularColor:u,pointLightDiffuseColor:c}}(),h=l.useLighting,d=l.useSpecular,p=l.useTextures,g=l.texture,m=l.shininess,y=l.ambientColor,b=l.pointLightPosition,x=l.pointLightSpecularColor,E=l.pointLightDiffuseColor;if(r.setUniforms({uUseLighting:h,uUseTextures:p,uShowSpecularHighlights:d,uMaterialShininess:m}),h&&r.setUniforms({uAmbientColor:y,uPointLightingLocation:b,uPointLightingSpecularColor:x,uPointLightingDiffuseColor:E}),p){var S=g;r.setUniforms({uSampler:"earth"===S?o:a})}var T=.01*n;return r.setUniforms({uMMatrix:(new v.a).translate([0,-35,-68]).rotateY(T),uVMatrix:c,uPMatrix:(new v.a).perspective({fov:45*Math.PI/180,aspect:i,near:.1,far:100})}).draw()},i}(p.a);"undefined"==typeof window||window.website||(new y).start();n.d(e,"default",(function(){return b}));var b=function(t){var e,n;function i(){return t.apply(this,arguments)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){return r.a.createElement(o.a,{AnimationLoop:y,exampleConfig:this.props.pageContext.exampleConfig})},i}(r.a.Component)},457:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(2),n(24),n(3),n(13);var i=n(460),r=n(454),o=n(133),a=n(14),s=function(){function t(t){void 0===t&&(t={});var e=t.id;this.id=e||Object(o.c)(this.constructor.name),this.display=!0,this.position=new i.a,this.rotation=new i.a,this.scale=new i.a(1,1,1),this.matrix=new r.a,this.userData={},this.props={},this._setScenegraphNodeProps(t)}var e=t.prototype;return e.delete=function(){},e.setProps=function(t){return this._setScenegraphNodeProps(t),this},e.toString=function(){return"{type: ScenegraphNode, id: "+this.id+")}"},e.setPosition=function(t){return Object(a.a)(3===t.length,"setPosition requires vector argument"),this.position=t,this},e.setRotation=function(t){return Object(a.a)(3===t.length,"setRotation requires vector argument"),this.rotation=t,this},e.setScale=function(t){return Object(a.a)(3===t.length,"setScale requires vector argument"),this.scale=t,this},e.setMatrix=function(t,e){void 0===e&&(e=!0),e?this.matrix.copy(t):this.matrix=t},e.setMatrixComponents=function(t){var e=t.position,n=t.rotation,i=t.scale,r=t.update,o=void 0===r||r;return e&&this.setPosition(e),n&&this.setRotation(n),i&&this.setScale(i),o&&this.updateMatrix(),this},e.updateMatrix=function(){var t=this.position,e=this.rotation,n=this.scale;return this.matrix.identity(),this.matrix.translate(t),this.matrix.rotateXYZ(e),this.matrix.scale(n),this},e.update=function(t){var e=void 0===t?{}:t,n=e.position,i=e.rotation,r=e.scale;return n&&this.setPosition(n),i&&this.setRotation(i),r&&this.setScale(r),this.updateMatrix(),this},e.getCoordinateUniforms=function(t,e){Object(a.a)(t),e=e||this.matrix;var n=new r.a(t).multiplyRight(e),i=n.invert(),o=i.transpose();return{viewMatrix:t,modelMatrix:e,objectMatrix:e,worldMatrix:n,worldInverseMatrix:i,worldInverseTransposeMatrix:o}},e._setScenegraphNodeProps=function(t){"display"in t&&(this.display=t.display),"position"in t&&this.setPosition(t.position),"rotation"in t&&this.setRotation(t.rotation),"scale"in t&&this.setScale(t.scale),"matrix"in t&&this.setMatrix(t.matrix),Object.assign(this.props,t)},t}()},460:function(t,e,n){"use strict";var i=n(37),r=n(31),o=n(116),a=n(83),s=n(115),u=n(232),c=n(73),l=n(230),h=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(r.a)(e,[{key:"len",value:function(){return Math.sqrt(this.lengthSquared())}},{key:"magnitude",value:function(){return this.len()}},{key:"lengthSquared",value:function(){for(var t=0,e=0;e<this.ELEMENTS;++e)t+=this[e]*this[e];return t}},{key:"magnitudeSquared",value:function(){return this.lengthSquared()}},{key:"distance",value:function(t){return Math.sqrt(this.distanceSquared(t))}},{key:"distanceSquared",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n){var i=this[n]-t[n];e+=i*i}return Object(c.a)(e)}},{key:"dot",value:function(t){for(var e=0,n=0;n<this.ELEMENTS;++n)e+=this[n]*t[n];return Object(c.a)(e)}},{key:"normalize",value:function(){var t=this.magnitude();if(0!==t)for(var e=0;e<this.ELEMENTS;++e)this[e]/=t;return this.check()}},{key:"multiply",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var i=0,r=e;i<r.length;i++)for(var o=r[i],a=0;a<this.ELEMENTS;++a)this[a]*=o[a];return this.check()}},{key:"divide",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var i=0,r=e;i<r.length;i++)for(var o=r[i],a=0;a<this.ELEMENTS;++a)this[a]/=o[a];return this.check()}},{key:"lengthSq",value:function(){return this.lengthSquared()}},{key:"distanceTo",value:function(t){return this.distance(t)}},{key:"distanceToSquared",value:function(t){return this.distanceSquared(t)}},{key:"getComponent",value:function(t){return Object(l.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),Object(c.a)(this[t])}},{key:"setComponent",value:function(t,e){return Object(l.a)(t>=0&&t<this.ELEMENTS,"index is out of range"),this[t]=e,this.check()}},{key:"addVectors",value:function(t,e){return this.copy(t).add(e)}},{key:"subVectors",value:function(t,e){return this.copy(t).subtract(e)}},{key:"multiplyVectors",value:function(t,e){return this.copy(t).multiply(e)}},{key:"addScaledVector",value:function(t,e){return this.add(new this.constructor(t).multiplyScalar(e))}},{key:"x",get:function(){return this[0]},set:function(t){return this[0]=Object(c.a)(t)}},{key:"y",get:function(){return this[1]},set:function(t){return this[1]=Object(c.a)(t)}}]),e}(u.a),d=n(66),p=n(231),v=n(185);n.d(e,"a",(function(){return g}));var f=[0,0,0],g=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(i.a)(this,e),t=Object(o.a)(this,Object(a.a)(e).call(this,-0,-0,-0)),1===arguments.length&&Object(d.d)(n)?t.copy(n):(d.a.debug&&(Object(c.a)(n),Object(c.a)(r),Object(c.a)(s)),t[0]=n,t[1]=r,t[2]=s),t}return Object(s.a)(e,t),Object(r.a)(e,[{key:"set",value:function(t,e,n){return this[0]=t,this[1]=e,this[2]=n,this.check()}},{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.check()}},{key:"fromObject",value:function(t){return d.a.debug&&(Object(c.a)(t.x),Object(c.a)(t.y),Object(c.a)(t.z)),this[0]=t.x,this[1]=t.y,this[2]=t.z,this.check()}},{key:"toObject",value:function(t){return t.x=this[0],t.y=this[1],t.z=this[2],t}},{key:"angle",value:function(t){return p.a(this,t)}},{key:"cross",value:function(t){return p.c(this,this,t),this.check()}},{key:"rotateX",value:function(t){var e=t.radians,n=t.origin,i=void 0===n?f:n;return p.h(this,this,i,e),this.check()}},{key:"rotateY",value:function(t){var e=t.radians,n=t.origin,i=void 0===n?f:n;return p.i(this,this,i,e),this.check()}},{key:"rotateZ",value:function(t){var e=t.radians,n=t.origin,i=void 0===n?f:n;return p.j(this,this,i,e),this.check()}},{key:"transform",value:function(t){return this.transformAsPoint(t)}},{key:"transformAsPoint",value:function(t){return p.l(this,this,t),this.check()}},{key:"transformAsVector",value:function(t){return Object(v.c)(this,this,t),this.check()}},{key:"transformByMatrix3",value:function(t){return p.k(this,this,t),this.check()}},{key:"transformByMatrix2",value:function(t){return Object(v.b)(this,this,t),this.check()}},{key:"transformByQuaternion",value:function(t){return p.m(this,this,t),this.check()}},{key:"ELEMENTS",get:function(){return 3}},{key:"z",get:function(){return this[2]},set:function(t){return this[2]=Object(c.a)(t)}}]),e}(h)},461:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(410);var r=function(t){var e,n;function r(e,n){var r;return void 0===n&&(n={}),(r=t.call(this,n)||this).onBeforeRender=null,r.AfterRender=null,e instanceof i.a?(r.model=e,r._setModelNodeProps(n)):r.model=new i.a(e,n),r.managedResources=n.managedResources||[],r}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.setProps=function(e){return t.prototype.setProps.call(this,e),this._setModelNodeProps(e),this},o.delete=function(){this.model&&(this.model.delete(),this.model=null),this.managedResources.forEach((function(t){return t.delete()})),this.managedResources=[]},o.draw=function(){var t;return(t=this.model).draw.apply(t,arguments)},o.setUniforms=function(){var t;return(t=this.model).setUniforms.apply(t,arguments),this},o.setAttributes=function(){var t;return(t=this.model).setAttributes.apply(t,arguments),this},o.updateModuleSettings=function(){var t;return(t=this.model).updateModuleSettings.apply(t,arguments),this},o._setModelNodeProps=function(t){this.model.setProps(t)},r}(n(457).a)}}]);
//# sourceMappingURL=component---templates-lessons-example-14-jsx-a7dc7bacf38c217548c8.js.map