(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{pV5m:function(o,n,t){"use strict";t.r(n);var e=t("q1tI"),r=t.n(e),i=t("z0FI"),a=(t("Y9lz"),t("UD/Y")),p=t("bjw9"),c=t("3LCa"),u=t("IObG");var l=function(o){var n,t;function e(){return o.call(this,{debug:!0})||this}t=o,(n=e).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,e.getInfo=function(){return"\nHave to start somewhere...\n"};var r=e.prototype;return r.onInitialize=function(o){var n=o.gl,t=new c.a(n,new Float32Array([-.5,-.5,.5,-.5,0,.5])),e=new c.a(n,new Float32Array([1,0,0,0,1,0,0,0,1]));return{model:new a.a(n,{vs:"\n      attribute vec2 position;\n      attribute vec3 color;\n\n      varying vec3 vColor;\n\n      void main() {\n        vColor = color;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }\n    ",fs:"\n      varying vec3 vColor;\n\n      void main() {\n        gl_FragColor = vec4(vColor, 1.0);\n      }\n    ",attributes:{position:t,color:e},vertexCount:3})}},r.onRender=function(o){var n=o.gl,t=o.model;Object(u.a)(n,{color:[0,0,0,1]}),t.draw()},r.onFinalize=function(o){o.model.delete()},e}(p.a);"undefined"==typeof window||window.website||(new l).start();t.d(n,"default",(function(){return v}));var v=function(o){var n,t;function e(){return o.apply(this,arguments)||this}return t=o,(n=e).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,e.prototype.render=function(){var o=this.props.pageContext,n=o&&o.exampleConfig||{};return r.a.createElement(i.a,{AnimationLoop:l,exampleConfig:n})},e}(r.a.Component)}}]);
//# sourceMappingURL=component---templates-getting-started-example-hello-triangle-jsx-e6ab801d3d43b8d02c77.js.map