(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"QL+/":function(o,n,e){"use strict";e.r(n);var t=e("q1tI"),r=e.n(t),i=e("z0FI"),a=(e("Y9lz"),e("UD/Y")),s=e("bjw9"),c=e("3LCa"),v=e("IObG");var p={name:"color",fs:"\n    vec3 color_hsv2rgb(vec3 hsv) {\n      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n      vec3 p = abs(fract(hsv.xxx + K.xyz) * 6.0 - K.www);\n      vec3 rgb = hsv.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), hsv.y);\n      return rgb;\n    }\n  "},l=function(o){var n,e;function t(){return o.call(this,{debug:!0})||this}e=o,(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,t.getInfo=function(){return"\nRe-using shader code with shader modules\n"};var r=t.prototype;return r.onInitialize=function(o){var n=o.gl,e=new c.a(n,new Float32Array([-.3,-.5,.3,-.5,0,.5]));return{model1:new a.a(n,{vs:"\n  attribute vec2 position;\n\n  void main() {\n    gl_Position = vec4(position - vec2(0.5, 0.0), 0.0, 1.0);\n  }\n",fs:"\n  uniform vec3 hsvColor;\n\n  void main() {\n    gl_FragColor = vec4(color_hsv2rgb(hsvColor), 1.0);\n  }\n",modules:[p],attributes:{position:e},uniforms:{hsvColor:[.7,1,1]},vertexCount:3}),model2:new a.a(n,{vs:"\n  attribute vec2 position;\n\n  void main() {\n    gl_Position = vec4(position + vec2(0.5, 0.0), 0.0, 1.0);\n  }\n",fs:"\n  uniform vec3 hsvColor;\n\n  void main() {\n    gl_FragColor = vec4(color_hsv2rgb(hsvColor) - 0.3, 1.0);\n  }\n",modules:[p],attributes:{position:e},uniforms:{hsvColor:[1,1,1]},vertexCount:3}),positionBuffer:e}},r.onRender=function(o){var n=o.gl,e=o.model1,t=o.model2;Object(v.a)(n,{color:[0,0,0,1]}),e.draw(),t.draw()},r.onFinalize=function(o){var n=o.model1,e=o.model2,t=o.positionBuffer;n.delete(),e.delete(),t.delete()},t}(s.a);"undefined"==typeof window||window.website||(new l).start();e.d(n,"default",(function(){return u}));var u=function(o){var n,e;function t(){return o.apply(this,arguments)||this}return e=o,(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,t.prototype.render=function(){var o=this.props.pageContext,n=o&&o.exampleConfig||{};return r.a.createElement(i.a,{AnimationLoop:l,exampleConfig:n})},t}(r.a.Component)}}]);
//# sourceMappingURL=component---templates-getting-started-example-shader-modules-jsx-6d53f1958bbcbe807644.js.map