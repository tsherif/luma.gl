(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+OWk":function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return o}));r("xfY5"),r("/KAi");var e=r("gmAo");function i(t){if(!Number.isFinite(t))throw new Error("Invalid number ".concat(t));return t}function u(t,n,r){if(e.a.debug&&!function(t,n){if(t.length!==n)return!1;for(var r=0;r<t.length;++r)if(!Number.isFinite(t[r]))return!1;return!0}(t,n))throw new Error("math.gl: ".concat(""|r," some fields set to invalid numbers'"));return t}var a={};function o(t,n){a[t]||(a[t]=!0,console.warn("".concat(t," has been removed in version ").concat(n,", see upgrade guide for more information")))}},"5tna":function(t,n,r){"use strict";function e(t,n){if(!t)throw new Error("math.gl assertion ".concat(n))}r.d(n,"a",(function(){return e}))},ARt4:function(t,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"g",(function(){return u})),r.d(n,"c",(function(){return a})),r.d(n,"l",(function(){return o})),r.d(n,"a",(function(){return c})),r.d(n,"k",(function(){return s})),r.d(n,"h",(function(){return h})),r.d(n,"m",(function(){return f})),r.d(n,"j",(function(){return l})),r.d(n,"d",(function(){return v})),r.d(n,"i",(function(){return y})),r.d(n,"n",(function(){return d})),r.d(n,"o",(function(){return b})),r.d(n,"f",(function(){return p})),r.d(n,"e",(function(){return O}));r("Y9lz");var e=r("yOd+");function i(t){var n=new e.a(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function u(t,n,r,i){var u=new e.a(4);return u[0]=t,u[1]=n,u[2]=r,u[3]=i,u}function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function o(t,n,r,e,i){return t[0]=n,t[1]=r,t[2]=e,t[3]=i,t}function c(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function s(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function h(t){var n=t[0],r=t[1],e=t[2],i=t[3];return Math.sqrt(n*n+r*r+e*e+i*i)}function f(t){var n=t[0],r=t[1],e=t[2],i=t[3];return n*n+r*r+e*e+i*i}function l(t,n){var r=n[0],e=n[1],i=n[2],u=n[3],a=r*r+e*e+i*i+u*u;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=e*a,t[2]=i*a,t[3]=u*a,t}function v(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function y(t,n,r,e){var i=n[0],u=n[1],a=n[2],o=n[3];return t[0]=i+e*(r[0]-i),t[1]=u+e*(r[1]-u),t[2]=a+e*(r[2]-a),t[3]=o+e*(r[3]-o),t}function d(t,n,r){var e=n[0],i=n[1],u=n[2],a=n[3];return t[0]=r[0]*e+r[4]*i+r[8]*u+r[12]*a,t[1]=r[1]*e+r[5]*i+r[9]*u+r[13]*a,t[2]=r[2]*e+r[6]*i+r[10]*u+r[14]*a,t[3]=r[3]*e+r[7]*i+r[11]*u+r[15]*a,t}function b(t,n,r){var e=n[0],i=n[1],u=n[2],a=r[0],o=r[1],c=r[2],s=r[3],h=s*e+o*u-c*i,f=s*i+c*e-a*u,l=s*u+a*i-o*e,v=-a*e-o*i-c*u;return t[0]=h*s+v*-a+f*-c-l*-o,t[1]=f*s+v*-o+l*-a-h*-c,t[2]=l*s+v*-c+h*-o-f*-a,t[3]=n[3],t}function p(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function O(t,n){var r=t[0],i=t[1],u=t[2],a=t[3],o=n[0],c=n[1],s=n[2],h=n[3];return Math.abs(r-o)<=e.b*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-c)<=e.b*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(u-s)<=e.b*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(a-h)<=e.b*Math.max(1,Math.abs(a),Math.abs(h))}var k,g;k=new e.a(4),e.a!=Float32Array&&(k[0]=0,k[1]=0,k[2]=0,k[3]=0),g=k},HGgG:function(t,n,r){"use strict";r.d(n,"a",(function(){return h}));r("91GP"),r("Y9lz"),r("r1bV");var e=r("PG+Z"),i=r("BunF");var u=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),a=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),o=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),c=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),s={POSITION:{size:3,value:new Float32Array(a)},NORMAL:{size:3,value:new Float32Array(o)},TEXCOORD_0:{size:2,value:new Float32Array(c)}},h=function(t){var n,r;function e(n){void 0===n&&(n={});var r=n.id,e=void 0===r?Object(i.c)("cube-geometry"):r;return t.call(this,Object.assign({},n,{id:e,indices:{size:1,value:new Uint16Array(u)},attributes:Object.assign({},s,{},n.attributes)}))||this}return r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,e}(e.a)},Ji7U:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r("s4An");function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Object(e.a)(t,n)}},MTwu:function(t,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"e",(function(){return u})),r.d(n,"g",(function(){return a})),r.d(n,"d",(function(){return o})),r.d(n,"c",(function(){return c})),r.d(n,"l",(function(){return s})),r.d(n,"k",(function(){return h})),r.d(n,"m",(function(){return f})),r.d(n,"h",(function(){return l})),r.d(n,"i",(function(){return v})),r.d(n,"j",(function(){return y})),r.d(n,"a",(function(){return d})),r.d(n,"f",(function(){return p}));r("Y9lz");var e=r("yOd+");function i(){var t=new e.a(3);return e.a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function u(t,n,r){var i=new e.a(3);return i[0]=t,i[1]=n,i[2]=r,i}function a(t,n){var r=n[0],e=n[1],i=n[2],u=r*r+e*e+i*i;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u,t}function o(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function c(t,n,r){var e=n[0],i=n[1],u=n[2],a=r[0],o=r[1],c=r[2];return t[0]=i*c-u*o,t[1]=u*a-e*c,t[2]=e*o-i*a,t}function s(t,n,r){var e=n[0],i=n[1],u=n[2],a=r[3]*e+r[7]*i+r[11]*u+r[15];return a=a||1,t[0]=(r[0]*e+r[4]*i+r[8]*u+r[12])/a,t[1]=(r[1]*e+r[5]*i+r[9]*u+r[13])/a,t[2]=(r[2]*e+r[6]*i+r[10]*u+r[14])/a,t}function h(t,n,r){var e=n[0],i=n[1],u=n[2];return t[0]=e*r[0]+i*r[3]+u*r[6],t[1]=e*r[1]+i*r[4]+u*r[7],t[2]=e*r[2]+i*r[5]+u*r[8],t}function f(t,n,r){var e=r[0],i=r[1],u=r[2],a=r[3],o=n[0],c=n[1],s=n[2],h=i*s-u*c,f=u*o-e*s,l=e*c-i*o,v=i*l-u*f,y=u*h-e*l,d=e*f-i*h,b=2*a;return h*=b,f*=b,l*=b,v*=2,y*=2,d*=2,t[0]=o+h+v,t[1]=c+f+y,t[2]=s+l+d,t}function l(t,n,r,e){var i=[],u=[];return i[0]=n[0]-r[0],i[1]=n[1]-r[1],i[2]=n[2]-r[2],u[0]=i[0],u[1]=i[1]*Math.cos(e)-i[2]*Math.sin(e),u[2]=i[1]*Math.sin(e)+i[2]*Math.cos(e),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function v(t,n,r,e){var i=[],u=[];return i[0]=n[0]-r[0],i[1]=n[1]-r[1],i[2]=n[2]-r[2],u[0]=i[2]*Math.sin(e)+i[0]*Math.cos(e),u[1]=i[1],u[2]=i[2]*Math.cos(e)-i[0]*Math.sin(e),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function y(t,n,r,e){var i=[],u=[];return i[0]=n[0]-r[0],i[1]=n[1]-r[1],i[2]=n[2]-r[2],u[0]=i[0]*Math.cos(e)-i[1]*Math.sin(e),u[1]=i[0]*Math.sin(e)+i[1]*Math.cos(e),u[2]=i[2],t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function d(t,n){var r=u(t[0],t[1],t[2]),e=u(n[0],n[1],n[2]);a(r,r),a(e,e);var i=o(r,e);return i>1?0:i<-1?Math.PI:Math.acos(i)}var b,p=function(t){var n=t[0],r=t[1],e=t[2];return Math.sqrt(n*n+r*r+e*e)};b=i()},ODXe:function(t,n,r){"use strict";function e(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],e=!0,i=!1,u=void 0;try{for(var a,o=t[Symbol.iterator]();!(e=(a=o.next()).done)&&(r.push(a.value),!n||r.length!==n);e=!0);}catch(c){i=!0,u=c}finally{try{e||null==o.return||o.return()}finally{if(i)throw u}}return r}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(n,"a",(function(){return e}))},"PG+Z":function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));r("xfY5"),r("/KAi"),r("91GP");var e=r("BunF"),i=r("Iq2B");function u(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function a(t,n,r){return n&&u(t.prototype,n),r&&u(t,r),t}var o={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},c=function(){function t(t){void 0===t&&(t={});var n=t,r=n.id,i=void 0===r?Object(e.c)("geometry"):r,u=n.drawMode,a=void 0===u?o.TRIANGLES:u,c=n.attributes,s=void 0===c?{}:c,h=n.indices,f=void 0===h?null:h,l=n.vertexCount,v=void 0===l?null:l;this.id=i,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(s,f),this.vertexCount=v||this._calculateVertexCount(this.attributes,this.indices)}a(t,null,[{key:"DRAW_MODE",get:function(){return o}}]);var n=t.prototype;return n.getVertexCount=function(){return this.vertexCount},n.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},n._print=function(t){return"Geometry "+this.id+" attribute "+t},n._setAttributes=function(t,n){for(var r in n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),t){var e=t[r];e=ArrayBuffer.isView(e)?{value:e}:e,Object(i.a)(ArrayBuffer.isView(e.value),this._print(r)+": must be typed array or object with value as typed array"),"POSITION"!==r&&"positions"!==r||e.size||(e.size=3),"indices"===r?(Object(i.a)(!this.indices),this.indices=e):this.attributes[r]=e}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},n._calculateVertexCount=function(t,n){if(n)return n.value.length;var r=1/0;for(var e in t){var u=t[e],a=u.value,o=u.size;!u.constant&&a&&o>=1&&(r=Math.min(r,a.length/o))}return Object(i.a)(Number.isFinite(r)),r},a(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},RHh3:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r("s4An");function i(t,n,r){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var i=[null];i.push.apply(i,n);var u=new(Function.bind.apply(t,i));return r&&Object(e.a)(u,r.prototype),u}).apply(null,arguments)}},WUN0:function(t,n,r){"use strict";r("LK8F"),r("DW2E");var e=r("ODXe"),i=r("1OyB"),u=r("md7G"),a=r("foSv"),o=r("vuIU"),c=r("Ji7U"),s=r("+OWk"),h=(r("bHtr"),r("zgn+")),f=r("gmAo"),l=function(t){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(o.a)(n,[{key:"toString",value:function(){var t="[";if(f.a.printRowMajor){t+="row-major:";for(var n=0;n<this.RANK;++n)for(var r=0;r<this.RANK;++r)t+=" ".concat(this[r*this.RANK+n])}else{t+="column-major:";for(var e=0;e<this.ELEMENTS;++e)t+=" ".concat(this[e])}return t+="]"}},{key:"getElementIndex",value:function(t,n){return n*this.RANK+t}},{key:"getElement",value:function(t,n){return this[n*this.RANK+t]}},{key:"setElement",value:function(t,n,r){return this[n*this.RANK+t]=Object(s.a)(r),this}},{key:"getColumn",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Array(this.RANK).fill(-0),r=t*this.RANK,e=0;e<this.RANK;++e)n[e]=this[r+e];return n}},{key:"setColumn",value:function(t,n){for(var r=t*this.RANK,e=0;e<this.RANK;++e)this[r+e]=n[e];return this}}]),n}(h.a),v=r("y1Qd"),y=(r("Y9lz"),r("yOd+"));function d(t,n,r){var e=n[0],i=n[1],u=n[2],a=n[3],o=n[4],c=n[5],s=n[6],h=n[7],f=n[8],l=n[9],v=n[10],y=n[11],d=n[12],b=n[13],p=n[14],O=n[15],k=r[0],g=r[1],m=r[2],M=r[3];return t[0]=k*e+g*o+m*f+M*d,t[1]=k*i+g*c+m*l+M*b,t[2]=k*u+g*s+m*v+M*p,t[3]=k*a+g*h+m*y+M*O,k=r[4],g=r[5],m=r[6],M=r[7],t[4]=k*e+g*o+m*f+M*d,t[5]=k*i+g*c+m*l+M*b,t[6]=k*u+g*s+m*v+M*p,t[7]=k*a+g*h+m*y+M*O,k=r[8],g=r[9],m=r[10],M=r[11],t[8]=k*e+g*o+m*f+M*d,t[9]=k*i+g*c+m*l+M*b,t[10]=k*u+g*s+m*v+M*p,t[11]=k*a+g*h+m*y+M*O,k=r[12],g=r[13],m=r[14],M=r[15],t[12]=k*e+g*o+m*f+M*d,t[13]=k*i+g*c+m*l+M*b,t[14]=k*u+g*s+m*v+M*p,t[15]=k*a+g*h+m*y+M*O,t}function b(t,n,r){var e=r[0],i=r[1],u=r[2];return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=n[7]*i,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function p(t,n,r,e,i){var u,a=1/Math.tan(n/2);return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(u=1/(e-i),t[10]=(i+e)*u,t[14]=2*i*e*u):(t[10]=-1,t[14]=-2*e),t}function O(t,n,r,e){var i,u,a,o,c,s,h,f,l,v,d=n[0],b=n[1],p=n[2],O=e[0],k=e[1],g=e[2],m=r[0],M=r[1],E=r[2];return Math.abs(d-m)<y.b&&Math.abs(b-M)<y.b&&Math.abs(p-E)<y.b?function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}(t):(h=d-m,f=b-M,l=p-E,i=k*(l*=v=1/Math.sqrt(h*h+f*f+l*l))-g*(f*=v),u=g*(h*=v)-O*l,a=O*f-k*h,(v=Math.sqrt(i*i+u*u+a*a))?(i*=v=1/v,u*=v,a*=v):(i=0,u=0,a=0),o=f*a-l*u,c=l*i-h*a,s=h*u-f*i,(v=Math.sqrt(o*o+c*c+s*s))?(o*=v=1/v,c*=v,s*=v):(o=0,c=0,s=0),t[0]=i,t[1]=o,t[2]=h,t[3]=0,t[4]=u,t[5]=c,t[6]=f,t[7]=0,t[8]=a,t[9]=s,t[10]=l,t[11]=0,t[12]=-(i*d+u*b+a*p),t[13]=-(o*d+c*b+s*p),t[14]=-(h*d+f*b+l*p),t[15]=1,t)}k=new y.a(2),y.a!=Float32Array&&(k[0]=0,k[1]=0),g=k;var k,g,m=r("MTwu"),M=r("ARt4");r.d(n,"a",(function(){return N}));var E=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),w=Object.freeze([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),A=Object.freeze({COL0ROW0:0,COL0ROW1:1,COL0ROW2:2,COL0ROW3:3,COL1ROW0:4,COL1ROW1:5,COL1ROW2:6,COL1ROW3:7,COL2ROW0:8,COL2ROW1:9,COL2ROW2:10,COL2ROW3:11,COL3ROW0:12,COL3ROW1:13,COL3ROW2:14,COL3ROW3:15}),j={},N=function(t){function n(t){var r;return Object(i.a)(this,n),r=Object(u.a)(this,Object(a.a)(n).call(this,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0)),1===arguments.length&&Array.isArray(t)?r.copy(t):r.identity(),r}return Object(c.a)(n,t),Object(o.a)(n,[{key:"INDICES",get:function(){return A}},{key:"ELEMENTS",get:function(){return 16}},{key:"RANK",get:function(){return 4}}],[{key:"IDENTITY",get:function(){return j.IDENTITY=j.IDENTITY||Object.freeze(new n(E)),j.IDENTITY}},{key:"ZERO",get:function(){return j.ZERO=j.ZERO||Object.freeze(new n(w)),j.ZERO}}]),Object(o.a)(n,[{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this[4]=t[4],this[5]=t[5],this[6]=t[6],this[7]=t[7],this[8]=t[8],this[9]=t[9],this[10]=t[10],this[11]=t[11],this[12]=t[12],this[13]=t[13],this[14]=t[14],this[15]=t[15],this.check()}},{key:"set",value:function(t,n,r,e,i,u,a,o,c,s,h,f,l,v,y,d){return this[0]=t,this[1]=n,this[2]=r,this[3]=e,this[4]=i,this[5]=u,this[6]=a,this[7]=o,this[8]=c,this[9]=s,this[10]=h,this[11]=f,this[12]=l,this[13]=v,this[14]=y,this[15]=d,this.check()}},{key:"setRowMajor",value:function(t,n,r,e,i,u,a,o,c,s,h,f,l,v,y,d){return this[0]=t,this[1]=i,this[2]=c,this[3]=l,this[4]=n,this[5]=u,this[6]=s,this[7]=v,this[8]=r,this[9]=a,this[10]=h,this[11]=y,this[12]=e,this[13]=o,this[14]=f,this[15]=d,this.check()}},{key:"toRowMajor",value:function(t){return t[0]=this[0],t[1]=this[4],t[2]=this[8],t[3]=this[12],t[4]=this[1],t[5]=this[5],t[6]=this[9],t[7]=this[13],t[8]=this[2],t[9]=this[6],t[10]=this[10],t[11]=this[14],t[12]=this[3],t[13]=this[7],t[14]=this[11],t[15]=this[15],t}},{key:"identity",value:function(){return this.copy(E)}},{key:"fromQuaternion",value:function(t){return function(t,n){var r=n[0],e=n[1],i=n[2],u=n[3],a=r+r,o=e+e,c=i+i,s=r*a,h=e*a,f=e*o,l=i*a,v=i*o,y=i*c,d=u*a,b=u*o,p=u*c;t[0]=1-f-y,t[1]=h+p,t[2]=l-b,t[3]=0,t[4]=h-p,t[5]=1-s-y,t[6]=v+d,t[7]=0,t[8]=l+b,t[9]=v-d,t[10]=1-s-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(this,t),this.check()}},{key:"frustum",value:function(t){var r=t.left,e=t.right,i=t.bottom,u=t.top,a=t.near,o=t.far;return o===1/0?n._computeInfinitePerspectiveOffCenter(this,r,e,i,u,a):function(t,n,r,e,i,u,a){var o=1/(r-n),c=1/(i-e),s=1/(u-a);t[0]=2*u*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*c,t[6]=0,t[7]=0,t[8]=(r+n)*o,t[9]=(i+e)*c,t[10]=(a+u)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=a*u*2*s,t[15]=0}(this,r,e,i,u,a,o),this.check()}},{key:"lookAt",value:function(t,n,r){if(1===arguments.length){var e=t;t=e.eye,n=e.center,r=e.up}return O(this,t,n=n||[0,0,0],r=r||[0,1,0]),this.check()}},{key:"ortho",value:function(t){var n=t.left,r=t.right,e=t.bottom,i=t.top,u=t.near,a=void 0===u?.1:u,o=t.far;return function(t,n,r,e,i,u,a){var o=1/(n-r),c=1/(e-i),s=1/(u-a);t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(n+r)*o,t[13]=(i+e)*c,t[14]=(a+u)*s,t[15]=1}(this,n,r,e,i,a,void 0===o?500:o),this.check()}},{key:"orthographic",value:function(t){var r=t.fovy,e=void 0===r?45*Math.PI/180:r,i=t.aspect,u=void 0===i?1:i,a=t.focalDistance,o=void 0===a?1:a,c=t.near,s=void 0===c?.1:c,h=t.far,f=void 0===h?500:h;if(e>2*Math.PI)throw Error("radians");var l=e/2,v=o*Math.tan(l),y=v*u;return(new n).ortho({left:-y,right:y,bottom:-v,top:v,near:s,far:f})}},{key:"perspective",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.fovy,r=t.fov,e=void 0===r?45*Math.PI/180:r,i=t.aspect,u=void 0===i?1:i,a=t.near,o=void 0===a?.1:a,c=t.far,s=void 0===c?500:c;if((n=n||e)>2*Math.PI)throw Error("radians");return p(this,n,u,o,s),this.check()}},{key:"determinant",value:function(){return n=(t=this)[0],r=t[1],e=t[2],i=t[3],u=t[4],a=t[5],o=t[6],c=t[7],s=t[8],h=t[9],f=t[10],l=t[11],v=t[12],y=t[13],d=t[14],b=t[15],(n*a-r*u)*(f*b-l*d)-(n*o-e*u)*(h*b-l*y)+(n*c-i*u)*(h*d-f*y)+(r*o-e*a)*(s*b-l*v)-(r*c-i*a)*(s*d-f*v)+(e*c-i*o)*(s*y-h*v);var t,n,r,e,i,u,a,o,c,s,h,f,l,v,y,d,b}},{key:"getScale",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0];return t[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),t[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),t[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),t}},{key:"getTranslation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0];return t[0]=this[12],t[1]=this[13],t[2]=this[14],t}},{key:"getRotation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getScale(n||[-0,-0,-0]),e=1/r[0],i=1/r[1],u=1/r[2];return t[0]=this[0]*e,t[1]=this[1]*i,t[2]=this[2]*u,t[3]=0,t[4]=this[4]*e,t[5]=this[5]*i,t[6]=this[6]*u,t[7]=0,t[8]=this[8]*e,t[9]=this[9]*i,t[10]=this[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}},{key:"getRotationMatrix3",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0,-0,-0,-0,-0,-0,-0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getScale(n||[-0,-0,-0]),e=1/r[0],i=1/r[1],u=1/r[2];return t[0]=this[0]*e,t[1]=this[1]*i,t[2]=this[2]*u,t[3]=this[4]*e,t[4]=this[5]*i,t[5]=this[6]*u,t[6]=this[8]*e,t[7]=this[9]*i,t[8]=this[10]*u,t}},{key:"transpose",value:function(){return function(t,n){if(t===n){var r=n[1],e=n[2],i=n[3],u=n[6],a=n[7],o=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=e,t[9]=u,t[11]=n[14],t[12]=i,t[13]=a,t[14]=o}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15]}(this,this),this.check()}},{key:"invert",value:function(){return function(t,n){var r=n[0],e=n[1],i=n[2],u=n[3],a=n[4],o=n[5],c=n[6],s=n[7],h=n[8],f=n[9],l=n[10],v=n[11],y=n[12],d=n[13],b=n[14],p=n[15],O=r*o-e*a,k=r*c-i*a,g=r*s-u*a,m=e*c-i*o,M=e*s-u*o,E=i*s-u*c,w=h*d-f*y,A=h*b-l*y,j=h*p-v*y,N=f*b-l*d,R=f*p-v*d,S=l*p-v*b,L=O*S-k*R+g*N+m*j-M*A+E*w;L&&(L=1/L,t[0]=(o*S-c*R+s*N)*L,t[1]=(i*R-e*S-u*N)*L,t[2]=(d*E-b*M+p*m)*L,t[3]=(l*M-f*E-v*m)*L,t[4]=(c*j-a*S-s*A)*L,t[5]=(r*S-i*j+u*A)*L,t[6]=(b*g-y*E-p*k)*L,t[7]=(h*E-l*g+v*k)*L,t[8]=(a*R-o*j+s*w)*L,t[9]=(e*j-r*R-u*w)*L,t[10]=(y*M-d*g+p*O)*L,t[11]=(f*g-h*M-v*O)*L,t[12]=(o*A-a*N-c*w)*L,t[13]=(r*N-e*A+i*w)*L,t[14]=(d*k-y*m-b*O)*L,t[15]=(h*m-f*k+l*O)*L)}(this,this),this.check()}},{key:"multiplyLeft",value:function(t){return d(this,t,this),this.check()}},{key:"multiplyRight",value:function(t){return d(this,this,t),this.check()}},{key:"rotateX",value:function(t){return function(t,n,r){var e=Math.sin(r),i=Math.cos(r),u=n[4],a=n[5],o=n[6],c=n[7],s=n[8],h=n[9],f=n[10],l=n[11];n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=u*i+s*e,t[5]=a*i+h*e,t[6]=o*i+f*e,t[7]=c*i+l*e,t[8]=s*i-u*e,t[9]=h*i-a*e,t[10]=f*i-o*e,t[11]=l*i-c*e}(this,this,t),this.check()}},{key:"rotateY",value:function(t){return function(t,n,r){var e=Math.sin(r),i=Math.cos(r),u=n[0],a=n[1],o=n[2],c=n[3],s=n[8],h=n[9],f=n[10],l=n[11];n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*i-s*e,t[1]=a*i-h*e,t[2]=o*i-f*e,t[3]=c*i-l*e,t[8]=u*e+s*i,t[9]=a*e+h*i,t[10]=o*e+f*i,t[11]=c*e+l*i}(this,this,t),this.check()}},{key:"rotateZ",value:function(t){return function(t,n,r){var e=Math.sin(r),i=Math.cos(r),u=n[0],a=n[1],o=n[2],c=n[3],s=n[4],h=n[5],f=n[6],l=n[7];n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*i+s*e,t[1]=a*i+h*e,t[2]=o*i+f*e,t[3]=c*i+l*e,t[4]=s*i-u*e,t[5]=h*i-a*e,t[6]=f*i-o*e,t[7]=l*i-c*e}(this,this,t),this.check()}},{key:"rotateXYZ",value:function(t){var n=Object(e.a)(t,3),r=n[0],i=n[1],u=n[2];return this.rotateX(r).rotateY(i).rotateZ(u)}},{key:"rotateAxis",value:function(t,n){return function(t,n,r,e){var i,u,a,o,c,s,h,f,l,v,d,b,p,O,k,g,m,M,E,w,A,j,N,R,S=e[0],L=e[1],I=e[2],T=Math.sqrt(S*S+L*L+I*I);T<y.b||(S*=T=1/T,L*=T,I*=T,i=Math.sin(r),a=1-(u=Math.cos(r)),o=n[0],c=n[1],s=n[2],h=n[3],f=n[4],l=n[5],v=n[6],d=n[7],b=n[8],p=n[9],O=n[10],k=n[11],g=S*S*a+u,m=L*S*a+I*i,M=I*S*a-L*i,E=S*L*a-I*i,w=L*L*a+u,A=I*L*a+S*i,j=S*I*a+L*i,N=L*I*a-S*i,R=I*I*a+u,t[0]=o*g+f*m+b*M,t[1]=c*g+l*m+p*M,t[2]=s*g+v*m+O*M,t[3]=h*g+d*m+k*M,t[4]=o*E+f*w+b*A,t[5]=c*E+l*w+p*A,t[6]=s*E+v*w+O*A,t[7]=h*E+d*w+k*A,t[8]=o*j+f*N+b*R,t[9]=c*j+l*N+p*R,t[10]=s*j+v*N+O*R,t[11]=h*j+d*N+k*R,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]))}(this,this,t,n),this.check()}},{key:"scale",value:function(t){return Array.isArray(t)?b(this,this,t):b(this,this,[t,t,t]),this.check()}},{key:"translate",value:function(t){return function(t,n,r){var e,i,u,a,o,c,s,h,f,l,v,y,d=r[0],b=r[1],p=r[2];n===t?(t[12]=n[0]*d+n[4]*b+n[8]*p+n[12],t[13]=n[1]*d+n[5]*b+n[9]*p+n[13],t[14]=n[2]*d+n[6]*b+n[10]*p+n[14],t[15]=n[3]*d+n[7]*b+n[11]*p+n[15]):(e=n[0],i=n[1],u=n[2],a=n[3],o=n[4],c=n[5],s=n[6],h=n[7],f=n[8],l=n[9],v=n[10],y=n[11],t[0]=e,t[1]=i,t[2]=u,t[3]=a,t[4]=o,t[5]=c,t[6]=s,t[7]=h,t[8]=f,t[9]=l,t[10]=v,t[11]=y,t[12]=e*d+o*b+f*p+n[12],t[13]=i*d+c*b+l*p+n[13],t[14]=u*d+s*b+v*p+n[14],t[15]=a*d+h*b+y*p+n[15])}(this,this,t),this.check()}},{key:"transform",value:function(t,n){return 4===t.length?(n=M.n(n||[-0,-0,-0,-0],t,this),Object(s.b)(n,4),n):this.transformAsPoint(t,n)}},{key:"transformAsPoint",value:function(t,n){switch(t.length){case 2:n=function(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[4]*i+r[12],t[1]=r[1]*e+r[5]*i+r[13],t}(n||[-0,-0],t,this);break;case 3:n=m.l(n||[-0,-0,-0],t,this);break;default:throw new Error("Illegal vector")}return Object(s.b)(n,t.length),n}},{key:"transformAsVector",value:function(t,n){switch(t.length){case 2:n=Object(v.a)(n||[-0,-0],t,this);break;case 3:n=Object(v.c)(n||[-0,-0,-0],t,this);break;default:throw new Error("Illegal vector")}return Object(s.b)(n,t.length),n}},{key:"makeRotationX",value:function(t){return this.identity().rotateX(t)}},{key:"makeTranslation",value:function(t,n,r){return this.identity().translate([t,n,r])}},{key:"transformPoint",value:function(t,n){return Object(s.c)("Matrix4.transformPoint","3.0"),this.transformAsPoint(t,n)}},{key:"transformVector",value:function(t,n){return Object(s.c)("Matrix4.transformVector","3.0"),this.transformAsPoint(t,n)}},{key:"transformDirection",value:function(t,n){return Object(s.c)("Matrix4.transformDirection","3.0"),this.transformAsVector(t,n)}}],[{key:"_computeInfinitePerspectiveOffCenter",value:function(t,n,r,e,i,u){var a=2*u/(r-n),o=2*u/(i-e),c=(r+n)/(r-n),s=(i+e)/(i-e),h=-2*u;return t[0]=a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=c,t[9]=s,t[10]=-1,t[11]=-1,t[12]=0,t[13]=0,t[14]=h,t[15]=0,t}}]),n}(l)},foSv:function(t,n,r){"use strict";function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(n,"a",(function(){return e}))},gmAo:function(t,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"c",(function(){return a})),r.d(n,"d",(function(){return o})),r.d(n,"e",(function(){return s})),r.d(n,"b",(function(){return h}));r("bWfx"),r("LK8F");var e=r("U8pU"),i=(r("RHh3"),r("KQm4"),r("5tna"),Math.PI,1/180*Math.PI),u={};function a(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).precision,r=void 0===n?u.precision||4:n;return t=function(t){return Math.round(t/u.EPSILON)*u.EPSILON}(t),"".concat(parseFloat(t.toPrecision(r)))}function o(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&void 0!==t.length}function c(t,n,r){if(o(t)){r=r||((i=t).clone?i.clone():new Array(i.length));for(var e=0;e<r.length&&e<t.length;++e)r[e]=n(t[e],e,r);return r}var i;return n(t)}function s(t,n){return c(t,(function(t){return t*i}),n)}function h(t,n,r){var i=u.EPSILON;r&&(u.EPSILON=r);try{if(t===n)return!0;if(o(t)&&o(n)){if(t.length!==n.length)return!1;for(var a=0;a<t.length;++a)if(!h(t[a],n[a]))return!1;return!0}return t&&"object"===Object(e.a)(t)&&t.equals?t.equals(n):n&&"object"===Object(e.a)(n)&&n.equals?n.equals(t):Math.abs(t-n)<=u.EPSILON*Math.max(1,Math.abs(t),Math.abs(n))}finally{u.EPSILON=i}}u.EPSILON=1e-12,u.debug=!1,u.precision=4,u.printTypes=!1,u.printDegrees=!1,u.printRowMajor=!0},jerx:function(t,n,r){"use strict";r.r(n);var e=r("q1tI"),i=r.n(e),u=r("z0FI"),a=r("UD/Y"),o=r("HGgG"),c=r("bjw9"),s=r("2urO"),h=r("IObG"),f=r("lHlH"),l=r("WUN0");var v=function(t){var n,r;function e(){return t.apply(this,arguments)||this}r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,e.getInfo=function(){return"\n<p>\nDrawing a textured cube\n</p>\n"};var i=e.prototype;return i.onInitialize=function(t){var n=t.gl;Object(f.j)(n,{depthTest:!0,depthFunc:n.LEQUAL});var r=new s.a(n,{data:"vis-logo.png"}),e=(new l.a).lookAt({eye:[0,0,5]}),i=new l.a;return{model:new a.a(n,{vs:"  attribute vec3 positions;\n  attribute vec2 texCoords;\n\n  uniform mat4 uMVP;\n\n  varying vec2 vUV;\n\n  void main(void) {\n    gl_Position = uMVP * vec4(positions, 1.0);\n    vUV = texCoords;\n  }\n",fs:"  precision highp float;\n\n  uniform sampler2D uTexture;\n\n  varying vec2 vUV;\n\n  void main(void) {\n    gl_FragColor = texture2D(uTexture, vec2(vUV.x, 1.0 - vUV.y));\n  }\n",geometry:new o.a,uniforms:{uTexture:r}}),viewMatrix:e,mvpMatrix:i}},i.onRender=function(t){var n=t.gl,r=t.aspect,e=t.tick,i=t.model,u=t.mvpMatrix,a=t.viewMatrix;u.perspective({fov:Math.PI/3,aspect:r}).multiplyRight(a).rotateX(.01*e).rotateY(.013*e),Object(h.a)(n,{color:[0,0,0,1],depth:!0}),i.setUniforms({uMVP:u}).draw()},i.onFinalize=function(t){t.model.delete()},e}(c.a);"undefined"==typeof window||window.website||(new v).start();r.d(n,"default",(function(){return y}));var y=function(t){var n,r;function e(){return t.apply(this,arguments)||this}return r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,e.prototype.render=function(){var t=this.props.pageContext,n=t&&t.exampleConfig||{};return i.a.createElement(u.a,{AnimationLoop:v,exampleConfig:n})},e}(i.a.Component)},md7G:function(t,n,r){"use strict";var e=r("U8pU");function i(t,n){return!n||"object"!==Object(e.a)(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}r.d(n,"a",(function(){return i}))},s4An:function(t,n,r){"use strict";function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}r.d(n,"a",(function(){return e}))},y1Qd:function(t,n,r){"use strict";function e(t,n,r){var e=n[0],i=n[1],u=r[3]*e+r[7]*i||1;return t[0]=(r[0]*e+r[4]*i)/u,t[1]=(r[1]*e+r[5]*i)/u,t}function i(t,n,r){var e=n[0],i=n[1],u=n[2],a=r[3]*e+r[7]*i+r[11]*u||1;return t[0]=(r[0]*e+r[4]*i+r[8]*u)/a,t[1]=(r[1]*e+r[5]*i+r[9]*u)/a,t[2]=(r[2]*e+r[6]*i+r[10]*u)/a,t}function u(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[2]*i,t[1]=r[1]*e+r[3]*i,t[2]=n[2],t}r.d(n,"a",(function(){return e})),r.d(n,"c",(function(){return i})),r.d(n,"b",(function(){return u}))},"yOd+":function(t,n,r){"use strict";r.d(n,"b",(function(){return e})),r.d(n,"a",(function(){return i})),r.d(n,"c",(function(){return u}));r("Y9lz");var e=1e-6,i="undefined"!=typeof Float32Array?Float32Array:Array,u=Math.random;Math.PI},"zgn+":function(t,n,r){"use strict";r("xfY5"),r("/KAi"),r("f3/d"),r("Y9lz"),r("LK8F");var e=r("1OyB"),i=r("vuIU"),u=r("md7G"),a=r("foSv"),o=r("Ji7U"),c=r("s4An");var s=r("RHh3");function h(t){var n="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return Object(s.a)(t,arguments,Object(a.a)(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object(c.a)(e,t)})(t)}var f=r("gmAo");r.d(n,"a",(function(){return l}));var l=function(t){function n(){return Object(e.a)(this,n),Object(u.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(o.a)(n,t),Object(i.a)(n,[{key:"clone",value:function(){return(new this.constructor).copy(this)}},{key:"from",value:function(t){return Array.isArray(t)?this.copy(t):this.fromObject(t)}},{key:"fromArray",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;r<this.ELEMENTS;++r)this[r]=t[r+n];return this.check()}},{key:"to",value:function(t){return t===this?this:Object(f.d)(t)?this.toArray(t):this.toObject(t)}},{key:"toTarget",value:function(t){return t?this.to(t):this}},{key:"toArray",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;r<this.ELEMENTS;++r)t[n+r]=this[r];return t}},{key:"toFloat32Array",value:function(){return new Float32Array(this)}},{key:"toString",value:function(){return this.formatString(f.a)}},{key:"formatString",value:function(t){for(var n="",r=0;r<this.ELEMENTS;++r)n+=(r>0?", ":"")+Object(f.c)(this[r],t);return"".concat(t.printTypes?this.constructor.name:"","[").concat(n,"]")}},{key:"equals",value:function(t){if(!t||this.length!==t.length)return!1;for(var n=0;n<this.ELEMENTS;++n)if(!Object(f.b)(this[n],t[n]))return!1;return!0}},{key:"exactEquals",value:function(t){if(!t||this.length!==t.length)return!1;for(var n=0;n<this.ELEMENTS;++n)if(this[n]!==t[n])return!1;return!0}},{key:"negate",value:function(){for(var t=0;t<this.ELEMENTS;++t)this[t]=-this[t];return this.check()}},{key:"lerp",value:function(t,n,r){void 0===r&&(r=n,n=t,t=this);for(var e=0;e<this.ELEMENTS;++e){var i=t[e];this[e]=i+r*(n[e]-i)}return this.check()}},{key:"min",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]=Math.min(t[n],this[n]);return this.check()}},{key:"max",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]=Math.max(t[n],this[n]);return this.check()}},{key:"clamp",value:function(t,n){for(var r=0;r<this.ELEMENTS;++r)this[r]=Math.min(Math.max(this[r],t[r]),n[r]);return this.check()}},{key:"add",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var e=0,i=n;e<i.length;e++)for(var u=i[e],a=0;a<this.ELEMENTS;++a)this[a]+=u[a];return this.check()}},{key:"subtract",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var e=0,i=n;e<i.length;e++)for(var u=i[e],a=0;a<this.ELEMENTS;++a)this[a]-=u[a];return this.check()}},{key:"scale",value:function(t){if(Array.isArray(t))return this.multiply(t);for(var n=0;n<this.ELEMENTS;++n)this[n]*=t;return this.check()}},{key:"sub",value:function(t){return this.subtract(t)}},{key:"setScalar",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]=t;return this.check()}},{key:"addScalar",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]+=t;return this.check()}},{key:"subScalar",value:function(t){return this.addScalar(-t)}},{key:"multiplyScalar",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]*=t;return this.check()}},{key:"divideScalar",value:function(t){return this.scale(1/t)}},{key:"clampScalar",value:function(t,n){for(var r=0;r<this.ELEMENTS;++r)this[r]=Math.min(Math.max(this[r],t),n);return this.check()}},{key:"multiplyByScalar",value:function(t){return this.scale(t)}},{key:"check",value:function(){if(f.a.debug&&!this.validate(this))throw new Error("math.gl: ".concat(this.constructor.name," some fields set to invalid numbers'"));return this}},{key:"validate",value:function(){for(var t=this.length===this.ELEMENTS,n=0;n<this.ELEMENTS;++n)t=t&&Number.isFinite(this[n]);return t}},{key:"elements",get:function(){return this}}]),n}(h(Array))}}]);
//# sourceMappingURL=component---templates-getting-started-example-hello-cube-jsx-27bee3b94975c171f66d.js.map