(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{RDGU:function(o,n,t){"use strict";t.r(n);var e=t("q1tI"),r=t.n(e),i=t("z0FI"),a=(t("Y9lz"),t("DhAv")),p=t("UD/Y"),s=t("bjw9"),u=t("3LCa"),c=t("IObG");var l="\n  attribute vec2 position;\n\n  void main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n    OFFSET_POSITION(gl_Position);\n  }\n",d="\n  uniform vec3 color;\n\n  void main() {\n    gl_FragColor = vec4(color, 1.0);\n  }\n",f={name:"offsetLeft",inject:{"vs:OFFSET_POSITION":"position.x -= 0.5;"}},v={name:"offsetRight",inject:{"vs:OFFSET_POSITION":"position.x += 0.5;"}},m=function(o){var n,t;function e(){return o.call(this,{debug:!0})||this}t=o,(n=e).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,e.getInfo=function(){return"\nModifying shader behavior with shader hooks\n"};var r=e.prototype;return r.onInitialize=function(o){var n=o.gl,t=new a.a(n);t.addShaderHook("vs:OFFSET_POSITION(inout vec4 position)");var e=new u.a(n,new Float32Array([-.3,-.5,.3,-.5,0,.5]));return{model1:new p.a(n,{vs:l,fs:d,programManager:t,modules:[f],attributes:{position:e},uniforms:{color:[1,0,0]},vertexCount:3}),model2:new p.a(n,{vs:l,fs:d,programManager:t,modules:[v],attributes:{position:e},uniforms:{color:[0,0,1]},vertexCount:3}),positionBuffer:e}},r.onRender=function(o){var n=o.gl,t=o.model1,e=o.model2;Object(c.a)(n,{color:[0,0,0,1]}),t.draw(),e.draw()},r.onFinalize=function(o){var n=o.model1,t=o.model2,e=o.positionBuffer;n.delete(),t.delete(),e.delete()},e}(s.a);"undefined"==typeof window||window.website||(new m).start();t.d(n,"default",(function(){return w}));var w=function(o){var n,t;function e(){return o.apply(this,arguments)||this}return t=o,(n=e).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,e.prototype.render=function(){var o=this.props.pageContext,n=o&&o.exampleConfig||{};return r.a.createElement(i.a,{AnimationLoop:m,exampleConfig:n})},e}(r.a.Component)}}]);
//# sourceMappingURL=component---templates-getting-started-example-shader-hooks-jsx-26234329ce4b1b347e90.js.map