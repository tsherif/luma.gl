(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+OWk":function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return o})),r.d(n,"c",(function(){return u}));r("xfY5"),r("/KAi");var e=r("gmAo");function i(t){if(!Number.isFinite(t))throw new Error("Invalid number ".concat(t));return t}function o(t,n,r){if(e.a.debug&&!function(t,n){if(t.length!==n)return!1;for(var r=0;r<t.length;++r)if(!Number.isFinite(t[r]))return!1;return!0}(t,n))throw new Error("math.gl: ".concat(""|r," some fields set to invalid numbers'"));return t}var a={};function u(t,n){a[t]||(a[t]=!0,console.warn("".concat(t," has been removed in version ").concat(n,", see upgrade guide for more information")))}},"5tna":function(t,n,r){"use strict";function e(t,n){if(!t)throw new Error("math.gl assertion ".concat(n))}r.d(n,"a",(function(){return e}))},ARt4:function(t,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"g",(function(){return o})),r.d(n,"c",(function(){return a})),r.d(n,"l",(function(){return u})),r.d(n,"a",(function(){return c})),r.d(n,"k",(function(){return s})),r.d(n,"h",(function(){return h})),r.d(n,"m",(function(){return f})),r.d(n,"j",(function(){return l})),r.d(n,"d",(function(){return v})),r.d(n,"i",(function(){return d})),r.d(n,"n",(function(){return y})),r.d(n,"o",(function(){return p})),r.d(n,"f",(function(){return b})),r.d(n,"e",(function(){return m}));r("Y9lz");var e=r("yOd+");function i(t){var n=new e.a(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function o(t,n,r,i){var o=new e.a(4);return o[0]=t,o[1]=n,o[2]=r,o[3]=i,o}function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function u(t,n,r,e,i){return t[0]=n,t[1]=r,t[2]=e,t[3]=i,t}function c(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function s(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function h(t){var n=t[0],r=t[1],e=t[2],i=t[3];return Math.sqrt(n*n+r*r+e*e+i*i)}function f(t){var n=t[0],r=t[1],e=t[2],i=t[3];return n*n+r*r+e*e+i*i}function l(t,n){var r=n[0],e=n[1],i=n[2],o=n[3],a=r*r+e*e+i*i+o*o;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=e*a,t[2]=i*a,t[3]=o*a,t}function v(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function d(t,n,r,e){var i=n[0],o=n[1],a=n[2],u=n[3];return t[0]=i+e*(r[0]-i),t[1]=o+e*(r[1]-o),t[2]=a+e*(r[2]-a),t[3]=u+e*(r[3]-u),t}function y(t,n,r){var e=n[0],i=n[1],o=n[2],a=n[3];return t[0]=r[0]*e+r[4]*i+r[8]*o+r[12]*a,t[1]=r[1]*e+r[5]*i+r[9]*o+r[13]*a,t[2]=r[2]*e+r[6]*i+r[10]*o+r[14]*a,t[3]=r[3]*e+r[7]*i+r[11]*o+r[15]*a,t}function p(t,n,r){var e=n[0],i=n[1],o=n[2],a=r[0],u=r[1],c=r[2],s=r[3],h=s*e+u*o-c*i,f=s*i+c*e-a*o,l=s*o+a*i-u*e,v=-a*e-u*i-c*o;return t[0]=h*s+v*-a+f*-c-l*-u,t[1]=f*s+v*-u+l*-a-h*-c,t[2]=l*s+v*-c+h*-u-f*-a,t[3]=n[3],t}function b(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function m(t,n){var r=t[0],i=t[1],o=t[2],a=t[3],u=n[0],c=n[1],s=n[2],h=n[3];return Math.abs(r-u)<=e.b*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-c)<=e.b*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-s)<=e.b*Math.max(1,Math.abs(o),Math.abs(s))&&Math.abs(a-h)<=e.b*Math.max(1,Math.abs(a),Math.abs(h))}var O,g;O=new e.a(4),e.a!=Float32Array&&(O[0]=0,O[1]=0,O[2]=0,O[3]=0),g=O},Ji7U:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r("s4An");function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Object(e.a)(t,n)}},MTwu:function(t,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"e",(function(){return o})),r.d(n,"g",(function(){return a})),r.d(n,"d",(function(){return u})),r.d(n,"c",(function(){return c})),r.d(n,"l",(function(){return s})),r.d(n,"k",(function(){return h})),r.d(n,"m",(function(){return f})),r.d(n,"h",(function(){return l})),r.d(n,"i",(function(){return v})),r.d(n,"j",(function(){return d})),r.d(n,"a",(function(){return y})),r.d(n,"f",(function(){return b}));r("Y9lz");var e=r("yOd+");function i(){var t=new e.a(3);return e.a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function o(t,n,r){var i=new e.a(3);return i[0]=t,i[1]=n,i[2]=r,i}function a(t,n){var r=n[0],e=n[1],i=n[2],o=r*r+e*e+i*i;return o>0&&(o=1/Math.sqrt(o)),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t}function u(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function c(t,n,r){var e=n[0],i=n[1],o=n[2],a=r[0],u=r[1],c=r[2];return t[0]=i*c-o*u,t[1]=o*a-e*c,t[2]=e*u-i*a,t}function s(t,n,r){var e=n[0],i=n[1],o=n[2],a=r[3]*e+r[7]*i+r[11]*o+r[15];return a=a||1,t[0]=(r[0]*e+r[4]*i+r[8]*o+r[12])/a,t[1]=(r[1]*e+r[5]*i+r[9]*o+r[13])/a,t[2]=(r[2]*e+r[6]*i+r[10]*o+r[14])/a,t}function h(t,n,r){var e=n[0],i=n[1],o=n[2];return t[0]=e*r[0]+i*r[3]+o*r[6],t[1]=e*r[1]+i*r[4]+o*r[7],t[2]=e*r[2]+i*r[5]+o*r[8],t}function f(t,n,r){var e=r[0],i=r[1],o=r[2],a=r[3],u=n[0],c=n[1],s=n[2],h=i*s-o*c,f=o*u-e*s,l=e*c-i*u,v=i*l-o*f,d=o*h-e*l,y=e*f-i*h,p=2*a;return h*=p,f*=p,l*=p,v*=2,d*=2,y*=2,t[0]=u+h+v,t[1]=c+f+d,t[2]=s+l+y,t}function l(t,n,r,e){var i=[],o=[];return i[0]=n[0]-r[0],i[1]=n[1]-r[1],i[2]=n[2]-r[2],o[0]=i[0],o[1]=i[1]*Math.cos(e)-i[2]*Math.sin(e),o[2]=i[1]*Math.sin(e)+i[2]*Math.cos(e),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function v(t,n,r,e){var i=[],o=[];return i[0]=n[0]-r[0],i[1]=n[1]-r[1],i[2]=n[2]-r[2],o[0]=i[2]*Math.sin(e)+i[0]*Math.cos(e),o[1]=i[1],o[2]=i[2]*Math.cos(e)-i[0]*Math.sin(e),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function d(t,n,r,e){var i=[],o=[];return i[0]=n[0]-r[0],i[1]=n[1]-r[1],i[2]=n[2]-r[2],o[0]=i[0]*Math.cos(e)-i[1]*Math.sin(e),o[1]=i[0]*Math.sin(e)+i[1]*Math.cos(e),o[2]=i[2],t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function y(t,n){var r=o(t[0],t[1],t[2]),e=o(n[0],n[1],n[2]);a(r,r),a(e,e);var i=u(r,e);return i>1?0:i<-1?Math.PI:Math.acos(i)}var p,b=function(t){var n=t[0],r=t[1],e=t[2];return Math.sqrt(n*n+r*r+e*e)};p=i()},ODXe:function(t,n,r){"use strict";function e(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(r.push(a.value),!n||r.length!==n);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return r}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(n,"a",(function(){return e}))},RHh3:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r("s4An");function i(t,n,r){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var i=[null];i.push.apply(i,n);var o=new(Function.bind.apply(t,i));return r&&Object(e.a)(o,r.prototype),o}).apply(null,arguments)}},WUN0:function(t,n,r){"use strict";r("LK8F"),r("DW2E");var e=r("ODXe"),i=r("1OyB"),o=r("md7G"),a=r("foSv"),u=r("vuIU"),c=r("Ji7U"),s=r("+OWk"),h=(r("bHtr"),r("zgn+")),f=r("gmAo"),l=function(t){function n(){return Object(i.a)(this,n),Object(o.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(u.a)(n,[{key:"toString",value:function(){var t="[";if(f.a.printRowMajor){t+="row-major:";for(var n=0;n<this.RANK;++n)for(var r=0;r<this.RANK;++r)t+=" ".concat(this[r*this.RANK+n])}else{t+="column-major:";for(var e=0;e<this.ELEMENTS;++e)t+=" ".concat(this[e])}return t+="]"}},{key:"getElementIndex",value:function(t,n){return n*this.RANK+t}},{key:"getElement",value:function(t,n){return this[n*this.RANK+t]}},{key:"setElement",value:function(t,n,r){return this[n*this.RANK+t]=Object(s.a)(r),this}},{key:"getColumn",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Array(this.RANK).fill(-0),r=t*this.RANK,e=0;e<this.RANK;++e)n[e]=this[r+e];return n}},{key:"setColumn",value:function(t,n){for(var r=t*this.RANK,e=0;e<this.RANK;++e)this[r+e]=n[e];return this}}]),n}(h.a),v=r("y1Qd"),d=(r("Y9lz"),r("yOd+"));function y(t,n,r){var e=n[0],i=n[1],o=n[2],a=n[3],u=n[4],c=n[5],s=n[6],h=n[7],f=n[8],l=n[9],v=n[10],d=n[11],y=n[12],p=n[13],b=n[14],m=n[15],O=r[0],g=r[1],k=r[2],M=r[3];return t[0]=O*e+g*u+k*f+M*y,t[1]=O*i+g*c+k*l+M*p,t[2]=O*o+g*s+k*v+M*b,t[3]=O*a+g*h+k*d+M*m,O=r[4],g=r[5],k=r[6],M=r[7],t[4]=O*e+g*u+k*f+M*y,t[5]=O*i+g*c+k*l+M*p,t[6]=O*o+g*s+k*v+M*b,t[7]=O*a+g*h+k*d+M*m,O=r[8],g=r[9],k=r[10],M=r[11],t[8]=O*e+g*u+k*f+M*y,t[9]=O*i+g*c+k*l+M*p,t[10]=O*o+g*s+k*v+M*b,t[11]=O*a+g*h+k*d+M*m,O=r[12],g=r[13],k=r[14],M=r[15],t[12]=O*e+g*u+k*f+M*y,t[13]=O*i+g*c+k*l+M*p,t[14]=O*o+g*s+k*v+M*b,t[15]=O*a+g*h+k*d+M*m,t}function p(t,n,r){var e=r[0],i=r[1],o=r[2];return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=n[7]*i,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=n[11]*o,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function b(t,n,r,e,i){var o,a=1/Math.tan(n/2);return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(o=1/(e-i),t[10]=(i+e)*o,t[14]=2*i*e*o):(t[10]=-1,t[14]=-2*e),t}function m(t,n,r,e){var i,o,a,u,c,s,h,f,l,v,y=n[0],p=n[1],b=n[2],m=e[0],O=e[1],g=e[2],k=r[0],M=r[1],E=r[2];return Math.abs(y-k)<d.b&&Math.abs(p-M)<d.b&&Math.abs(b-E)<d.b?function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}(t):(h=y-k,f=p-M,l=b-E,i=O*(l*=v=1/Math.sqrt(h*h+f*f+l*l))-g*(f*=v),o=g*(h*=v)-m*l,a=m*f-O*h,(v=Math.sqrt(i*i+o*o+a*a))?(i*=v=1/v,o*=v,a*=v):(i=0,o=0,a=0),u=f*a-l*o,c=l*i-h*a,s=h*o-f*i,(v=Math.sqrt(u*u+c*c+s*s))?(u*=v=1/v,c*=v,s*=v):(u=0,c=0,s=0),t[0]=i,t[1]=u,t[2]=h,t[3]=0,t[4]=o,t[5]=c,t[6]=f,t[7]=0,t[8]=a,t[9]=s,t[10]=l,t[11]=0,t[12]=-(i*y+o*p+a*b),t[13]=-(u*y+c*p+s*b),t[14]=-(h*y+f*p+l*b),t[15]=1,t)}O=new d.a(2),d.a!=Float32Array&&(O[0]=0,O[1]=0),g=O;var O,g,k=r("MTwu"),M=r("ARt4");r.d(n,"a",(function(){return S}));var E=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),w=Object.freeze([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),j=Object.freeze({COL0ROW0:0,COL0ROW1:1,COL0ROW2:2,COL0ROW3:3,COL1ROW0:4,COL1ROW1:5,COL1ROW2:6,COL1ROW3:7,COL2ROW0:8,COL2ROW1:9,COL2ROW2:10,COL2ROW3:11,COL3ROW0:12,COL3ROW1:13,COL3ROW2:14,COL3ROW3:15}),A={},S=function(t){function n(t){var r;return Object(i.a)(this,n),r=Object(o.a)(this,Object(a.a)(n).call(this,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0)),1===arguments.length&&Array.isArray(t)?r.copy(t):r.identity(),r}return Object(c.a)(n,t),Object(u.a)(n,[{key:"INDICES",get:function(){return j}},{key:"ELEMENTS",get:function(){return 16}},{key:"RANK",get:function(){return 4}}],[{key:"IDENTITY",get:function(){return A.IDENTITY=A.IDENTITY||Object.freeze(new n(E)),A.IDENTITY}},{key:"ZERO",get:function(){return A.ZERO=A.ZERO||Object.freeze(new n(w)),A.ZERO}}]),Object(u.a)(n,[{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this[4]=t[4],this[5]=t[5],this[6]=t[6],this[7]=t[7],this[8]=t[8],this[9]=t[9],this[10]=t[10],this[11]=t[11],this[12]=t[12],this[13]=t[13],this[14]=t[14],this[15]=t[15],this.check()}},{key:"set",value:function(t,n,r,e,i,o,a,u,c,s,h,f,l,v,d,y){return this[0]=t,this[1]=n,this[2]=r,this[3]=e,this[4]=i,this[5]=o,this[6]=a,this[7]=u,this[8]=c,this[9]=s,this[10]=h,this[11]=f,this[12]=l,this[13]=v,this[14]=d,this[15]=y,this.check()}},{key:"setRowMajor",value:function(t,n,r,e,i,o,a,u,c,s,h,f,l,v,d,y){return this[0]=t,this[1]=i,this[2]=c,this[3]=l,this[4]=n,this[5]=o,this[6]=s,this[7]=v,this[8]=r,this[9]=a,this[10]=h,this[11]=d,this[12]=e,this[13]=u,this[14]=f,this[15]=y,this.check()}},{key:"toRowMajor",value:function(t){return t[0]=this[0],t[1]=this[4],t[2]=this[8],t[3]=this[12],t[4]=this[1],t[5]=this[5],t[6]=this[9],t[7]=this[13],t[8]=this[2],t[9]=this[6],t[10]=this[10],t[11]=this[14],t[12]=this[3],t[13]=this[7],t[14]=this[11],t[15]=this[15],t}},{key:"identity",value:function(){return this.copy(E)}},{key:"fromQuaternion",value:function(t){return function(t,n){var r=n[0],e=n[1],i=n[2],o=n[3],a=r+r,u=e+e,c=i+i,s=r*a,h=e*a,f=e*u,l=i*a,v=i*u,d=i*c,y=o*a,p=o*u,b=o*c;t[0]=1-f-d,t[1]=h+b,t[2]=l-p,t[3]=0,t[4]=h-b,t[5]=1-s-d,t[6]=v+y,t[7]=0,t[8]=l+p,t[9]=v-y,t[10]=1-s-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(this,t),this.check()}},{key:"frustum",value:function(t){var r=t.left,e=t.right,i=t.bottom,o=t.top,a=t.near,u=t.far;return u===1/0?n._computeInfinitePerspectiveOffCenter(this,r,e,i,o,a):function(t,n,r,e,i,o,a){var u=1/(r-n),c=1/(i-e),s=1/(o-a);t[0]=2*o*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*c,t[6]=0,t[7]=0,t[8]=(r+n)*u,t[9]=(i+e)*c,t[10]=(a+o)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=a*o*2*s,t[15]=0}(this,r,e,i,o,a,u),this.check()}},{key:"lookAt",value:function(t,n,r){if(1===arguments.length){var e=t;t=e.eye,n=e.center,r=e.up}return m(this,t,n=n||[0,0,0],r=r||[0,1,0]),this.check()}},{key:"ortho",value:function(t){var n=t.left,r=t.right,e=t.bottom,i=t.top,o=t.near,a=void 0===o?.1:o,u=t.far;return function(t,n,r,e,i,o,a){var u=1/(n-r),c=1/(e-i),s=1/(o-a);t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(n+r)*u,t[13]=(i+e)*c,t[14]=(a+o)*s,t[15]=1}(this,n,r,e,i,a,void 0===u?500:u),this.check()}},{key:"orthographic",value:function(t){var r=t.fovy,e=void 0===r?45*Math.PI/180:r,i=t.aspect,o=void 0===i?1:i,a=t.focalDistance,u=void 0===a?1:a,c=t.near,s=void 0===c?.1:c,h=t.far,f=void 0===h?500:h;if(e>2*Math.PI)throw Error("radians");var l=e/2,v=u*Math.tan(l),d=v*o;return(new n).ortho({left:-d,right:d,bottom:-v,top:v,near:s,far:f})}},{key:"perspective",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.fovy,r=t.fov,e=void 0===r?45*Math.PI/180:r,i=t.aspect,o=void 0===i?1:i,a=t.near,u=void 0===a?.1:a,c=t.far,s=void 0===c?500:c;if((n=n||e)>2*Math.PI)throw Error("radians");return b(this,n,o,u,s),this.check()}},{key:"determinant",value:function(){return n=(t=this)[0],r=t[1],e=t[2],i=t[3],o=t[4],a=t[5],u=t[6],c=t[7],s=t[8],h=t[9],f=t[10],l=t[11],v=t[12],d=t[13],y=t[14],p=t[15],(n*a-r*o)*(f*p-l*y)-(n*u-e*o)*(h*p-l*d)+(n*c-i*o)*(h*y-f*d)+(r*u-e*a)*(s*p-l*v)-(r*c-i*a)*(s*y-f*v)+(e*c-i*u)*(s*d-h*v);var t,n,r,e,i,o,a,u,c,s,h,f,l,v,d,y,p}},{key:"getScale",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0];return t[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),t[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),t[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),t}},{key:"getTranslation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0];return t[0]=this[12],t[1]=this[13],t[2]=this[14],t}},{key:"getRotation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getScale(n||[-0,-0,-0]),e=1/r[0],i=1/r[1],o=1/r[2];return t[0]=this[0]*e,t[1]=this[1]*i,t[2]=this[2]*o,t[3]=0,t[4]=this[4]*e,t[5]=this[5]*i,t[6]=this[6]*o,t[7]=0,t[8]=this[8]*e,t[9]=this[9]*i,t[10]=this[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}},{key:"getRotationMatrix3",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0,-0,-0,-0,-0,-0,-0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getScale(n||[-0,-0,-0]),e=1/r[0],i=1/r[1],o=1/r[2];return t[0]=this[0]*e,t[1]=this[1]*i,t[2]=this[2]*o,t[3]=this[4]*e,t[4]=this[5]*i,t[5]=this[6]*o,t[6]=this[8]*e,t[7]=this[9]*i,t[8]=this[10]*o,t}},{key:"transpose",value:function(){return function(t,n){if(t===n){var r=n[1],e=n[2],i=n[3],o=n[6],a=n[7],u=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=e,t[9]=o,t[11]=n[14],t[12]=i,t[13]=a,t[14]=u}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15]}(this,this),this.check()}},{key:"invert",value:function(){return function(t,n){var r=n[0],e=n[1],i=n[2],o=n[3],a=n[4],u=n[5],c=n[6],s=n[7],h=n[8],f=n[9],l=n[10],v=n[11],d=n[12],y=n[13],p=n[14],b=n[15],m=r*u-e*a,O=r*c-i*a,g=r*s-o*a,k=e*c-i*u,M=e*s-o*u,E=i*s-o*c,w=h*y-f*d,j=h*p-l*d,A=h*b-v*d,S=f*p-l*y,R=f*b-v*y,T=l*b-v*p,N=m*T-O*R+g*S+k*A-M*j+E*w;N&&(N=1/N,t[0]=(u*T-c*R+s*S)*N,t[1]=(i*R-e*T-o*S)*N,t[2]=(y*E-p*M+b*k)*N,t[3]=(l*M-f*E-v*k)*N,t[4]=(c*A-a*T-s*j)*N,t[5]=(r*T-i*A+o*j)*N,t[6]=(p*g-d*E-b*O)*N,t[7]=(h*E-l*g+v*O)*N,t[8]=(a*R-u*A+s*w)*N,t[9]=(e*A-r*R-o*w)*N,t[10]=(d*M-y*g+b*m)*N,t[11]=(f*g-h*M-v*m)*N,t[12]=(u*j-a*S-c*w)*N,t[13]=(r*S-e*j+i*w)*N,t[14]=(y*O-d*k-p*m)*N,t[15]=(h*k-f*O+l*m)*N)}(this,this),this.check()}},{key:"multiplyLeft",value:function(t){return y(this,t,this),this.check()}},{key:"multiplyRight",value:function(t){return y(this,this,t),this.check()}},{key:"rotateX",value:function(t){return function(t,n,r){var e=Math.sin(r),i=Math.cos(r),o=n[4],a=n[5],u=n[6],c=n[7],s=n[8],h=n[9],f=n[10],l=n[11];n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=o*i+s*e,t[5]=a*i+h*e,t[6]=u*i+f*e,t[7]=c*i+l*e,t[8]=s*i-o*e,t[9]=h*i-a*e,t[10]=f*i-u*e,t[11]=l*i-c*e}(this,this,t),this.check()}},{key:"rotateY",value:function(t){return function(t,n,r){var e=Math.sin(r),i=Math.cos(r),o=n[0],a=n[1],u=n[2],c=n[3],s=n[8],h=n[9],f=n[10],l=n[11];n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=o*i-s*e,t[1]=a*i-h*e,t[2]=u*i-f*e,t[3]=c*i-l*e,t[8]=o*e+s*i,t[9]=a*e+h*i,t[10]=u*e+f*i,t[11]=c*e+l*i}(this,this,t),this.check()}},{key:"rotateZ",value:function(t){return function(t,n,r){var e=Math.sin(r),i=Math.cos(r),o=n[0],a=n[1],u=n[2],c=n[3],s=n[4],h=n[5],f=n[6],l=n[7];n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=o*i+s*e,t[1]=a*i+h*e,t[2]=u*i+f*e,t[3]=c*i+l*e,t[4]=s*i-o*e,t[5]=h*i-a*e,t[6]=f*i-u*e,t[7]=l*i-c*e}(this,this,t),this.check()}},{key:"rotateXYZ",value:function(t){var n=Object(e.a)(t,3),r=n[0],i=n[1],o=n[2];return this.rotateX(r).rotateY(i).rotateZ(o)}},{key:"rotateAxis",value:function(t,n){return function(t,n,r,e){var i,o,a,u,c,s,h,f,l,v,y,p,b,m,O,g,k,M,E,w,j,A,S,R,T=e[0],N=e[1],L=e[2],I=Math.sqrt(T*T+N*N+L*L);I<d.b||(T*=I=1/I,N*=I,L*=I,i=Math.sin(r),a=1-(o=Math.cos(r)),u=n[0],c=n[1],s=n[2],h=n[3],f=n[4],l=n[5],v=n[6],y=n[7],p=n[8],b=n[9],m=n[10],O=n[11],g=T*T*a+o,k=N*T*a+L*i,M=L*T*a-N*i,E=T*N*a-L*i,w=N*N*a+o,j=L*N*a+T*i,A=T*L*a+N*i,S=N*L*a-T*i,R=L*L*a+o,t[0]=u*g+f*k+p*M,t[1]=c*g+l*k+b*M,t[2]=s*g+v*k+m*M,t[3]=h*g+y*k+O*M,t[4]=u*E+f*w+p*j,t[5]=c*E+l*w+b*j,t[6]=s*E+v*w+m*j,t[7]=h*E+y*w+O*j,t[8]=u*A+f*S+p*R,t[9]=c*A+l*S+b*R,t[10]=s*A+v*S+m*R,t[11]=h*A+y*S+O*R,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]))}(this,this,t,n),this.check()}},{key:"scale",value:function(t){return Array.isArray(t)?p(this,this,t):p(this,this,[t,t,t]),this.check()}},{key:"translate",value:function(t){return function(t,n,r){var e,i,o,a,u,c,s,h,f,l,v,d,y=r[0],p=r[1],b=r[2];n===t?(t[12]=n[0]*y+n[4]*p+n[8]*b+n[12],t[13]=n[1]*y+n[5]*p+n[9]*b+n[13],t[14]=n[2]*y+n[6]*p+n[10]*b+n[14],t[15]=n[3]*y+n[7]*p+n[11]*b+n[15]):(e=n[0],i=n[1],o=n[2],a=n[3],u=n[4],c=n[5],s=n[6],h=n[7],f=n[8],l=n[9],v=n[10],d=n[11],t[0]=e,t[1]=i,t[2]=o,t[3]=a,t[4]=u,t[5]=c,t[6]=s,t[7]=h,t[8]=f,t[9]=l,t[10]=v,t[11]=d,t[12]=e*y+u*p+f*b+n[12],t[13]=i*y+c*p+l*b+n[13],t[14]=o*y+s*p+v*b+n[14],t[15]=a*y+h*p+d*b+n[15])}(this,this,t),this.check()}},{key:"transform",value:function(t,n){return 4===t.length?(n=M.n(n||[-0,-0,-0,-0],t,this),Object(s.b)(n,4),n):this.transformAsPoint(t,n)}},{key:"transformAsPoint",value:function(t,n){switch(t.length){case 2:n=function(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[4]*i+r[12],t[1]=r[1]*e+r[5]*i+r[13],t}(n||[-0,-0],t,this);break;case 3:n=k.l(n||[-0,-0,-0],t,this);break;default:throw new Error("Illegal vector")}return Object(s.b)(n,t.length),n}},{key:"transformAsVector",value:function(t,n){switch(t.length){case 2:n=Object(v.a)(n||[-0,-0],t,this);break;case 3:n=Object(v.c)(n||[-0,-0,-0],t,this);break;default:throw new Error("Illegal vector")}return Object(s.b)(n,t.length),n}},{key:"makeRotationX",value:function(t){return this.identity().rotateX(t)}},{key:"makeTranslation",value:function(t,n,r){return this.identity().translate([t,n,r])}},{key:"transformPoint",value:function(t,n){return Object(s.c)("Matrix4.transformPoint","3.0"),this.transformAsPoint(t,n)}},{key:"transformVector",value:function(t,n){return Object(s.c)("Matrix4.transformVector","3.0"),this.transformAsPoint(t,n)}},{key:"transformDirection",value:function(t,n){return Object(s.c)("Matrix4.transformDirection","3.0"),this.transformAsVector(t,n)}}],[{key:"_computeInfinitePerspectiveOffCenter",value:function(t,n,r,e,i,o){var a=2*o/(r-n),u=2*o/(i-e),c=(r+n)/(r-n),s=(i+e)/(i-e),h=-2*o;return t[0]=a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=c,t[9]=s,t[10]=-1,t[11]=-1,t[12]=0,t[13]=0,t[14]=h,t[15]=0,t}}]),n}(l)},aI42:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return i}));var e=function(){function t(){}t.getInfo=function(){return""};var n=t.prototype;return n.start=function(){},n.stop=function(){},n.delete=function(){},n.onFinalize=function(){},n._setDisplay=function(){},n._getCanvas=function(t){var n;if(void 0===t&&(t={}),t.canvas){n=document.getElementById(t.canvas);var r=window.devicePixelRatio||1;n.height=n.clientHeight*r,n.width=n.clientWidth*r}else(n=document.createElement("canvas")).width=800,n.height=600,document.body.appendChild(n);return n},n._getContainer=function(t){if(void 0===t&&(t={}),this.container)return this.container;var n,r;if(this.container=document.createElement("div"),t.canvas){var e=document.getElementById(t.canvas);this.parent=e.parentElement,n=e.clientWidth,r=e.clientHeight,this.container.style.position="relative",this.container.style.top="-"+r+"px"}else this.parent=document.body,n=800,r=800;return this.container.style.width=n+"px",this.container.style.height=r+"px",this.parent.appendChild(this.container),this.container},n._removeContainer=function(t){void 0===t&&(t={}),this.parent.removeChild(this.container)},t}();function i(){var t=1,n=1;return function(){return t=Math.sin(17.23*n),n=Math.cos(27.92*t),(r=1432.71*Math.abs(t*n))-Math.floor(r);var r}}},ewBo:function(t,n,r){"use strict";r.r(n);var e=r("q1tI"),i=r.n(e),o=r("z0FI"),a=(r("NO8f"),r("Y9lz"),r("91GP"),r("UD/Y")),u=r("bjw9"),c=r("3LCa"),s=r("viZF"),h=r("lHlH"),f=r("WUN0"),l=r("gmAo");function v(t,n,r){return t+r*(n-t)}function d(t,n){for(var r=[],e=t;e<=n;e++)r.push(e);return r}function y(t,n){for(var r,e=t.length,i=0;e;)r=Math.floor(n()*e),i=t[e-=1],t[e]=t[r],t[r]=i;return t}var p=function(t){return t*t*t*(t*(6*t-15)+10)},b=function(t,n,r,e){var i=15&t,o=i<8?n:r,a=i<4?r:12==i||14==i?n:e;return(1&i?-o:o)+(2&i?-a:a)};var m=r("aI42");var O=Object(m.b)(),g=function(t){var n,r;function e(n){var r;return void 0===n&&(n={}),(r=t.call(this,Object.assign(n,{useDevicePixels:!0}))||this).isDemoSupported=!0,r}r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,e.getInfo=function(){return"\n<p>\nVolumetric 3D noise visualized using a <b>3D texture</b>.\n<p>\nUses the luma.gl <code>Texture3D</code> class.\n"};var i=e.prototype;return i.onInitialize=function(t){var n=t.gl;if(this.isDemoSupported=Object(h.e)(n),!this.isDemoSupported)return{};var r=function(t){if("object"!=typeof t)throw new TypeError("params is not an object");if("function"!=typeof t.interpolation)throw new TypeError("params.interpolation is not a function");if(!Array.isArray(t.permutation))throw new TypeError("params.permutation is not an array");if(256!=t.permutation.length)throw new Error("params.permutation must have 256 items");for(var n=t.interpolation,r=t.permutation.slice(0),e=0;e<256;e++)r[256+e]=r[e];return function(t,e,i){var o=Math.floor(t),a=Math.floor(e),u=Math.floor(i),c=255&o,s=255&a,h=255&u;e-=a,i-=u;var f=p(t-=o),l=p(e),v=p(i),d=r[c]+s,y=r[d]+h,m=r[d+1]+h,O=r[c+1]+s,g=r[O]+h,k=r[O+1]+h;return n(n(n(b(r[y],t,e,i),b(r[g],t-1,e,i),f),n(b(r[m],t,e-1,i),b(r[k],t-1,e-1,i),f),l),n(n(b(r[y+1],t,e,i-1),b(r[g+1],t-1,e,i-1),f),n(b(r[m+1],t,e-1,i-1),b(r[k+1],t-1,e-1,i-1),f),l),v)}}({interpolation:v,permutation:y(d(0,255),O)});Object(h.j)(n,{clearColor:[0,0,0,1],blend:!0,blendFunc:[n.ONE,n.ONE_MINUS_SRC_ALPHA]});for(var e=new Float32Array(6291456),i=0,o=-.5,u=0;u<128;++u){for(var l=-.5,m=0;m<128;++m){for(var g=-.5,k=0;k<128;++k)e[i++]=o,e[i++]=l,e[i++]=g,g+=1/128;l+=1/128}o+=1/128}for(var M=new c.a(n,e),E=new Uint8Array(4096),w=0,j=0;j<16;++j)for(var A=0;A<16;++A)for(var S=0;S<16;++S)E[w++]=255*(.5+.5*r(j/1.12,A/1.12,S/1.12));var R=new f.a,T=(new f.a).lookAt({eye:[1,1,1]}),N=new s.a(n,{width:16,height:16,depth:16,data:E,format:n.RED,dataFormat:n.R8});return{cloud:new a.a(n,{vs:"#version 300 es\nin vec3 position;\n\nuniform mat4 uMVP;\n\nout vec3 vUV;\nvoid main() {\n  vUV = position.xyz + 0.5;\n  gl_Position = uMVP * vec4(position, 1.0);\n  gl_PointSize = 2.0;\n}",fs:"#version 300 es\nprecision highp float;\nprecision lowp sampler3D;\nin vec3 vUV;\nuniform sampler3D uTexture;\nuniform float uTime;\nout vec4 fragColor;\nvoid main() {\n  float alpha = texture(uTexture, vUV + vec3(0.0, 0.0, uTime)).r * 0.1;\n  fragColor = vec4(fract(vUV) * alpha, alpha);\n}",drawMode:n.POINTS,vertexCount:e.length/3,attributes:{position:M},uniforms:{uTexture:N,uView:T}}),mvpMat:R,viewMat:T}},i.onRender=function(t){var n=t.gl,r=t.cloud,e=t.mvpMat,i=t.viewMat,o=t.tick,a=t.aspect;this.isDemoSupported&&(e.perspective({fov:Object(l.e)(75),aspect:a,near:.1,far:10}).multiplyRight(i),n.clear(n.COLOR_BUFFER_BIT),r.draw({uniforms:{uTime:o/100,uMVP:e}}))},i.onFinalize=function(t){t.gl;var n=t.cloud;n&&n.delete()},i.isSupported=function(){return this.isDemoSupported},i.getAltText=function(){return"THIS DEMO REQUIRES WEBLG2, BUT YOUR BROWSER DOESN'T SUPPORT IT"},e}(u.a);"undefined"==typeof window||window.website||(new g).start();r.d(n,"default",(function(){return k}));var k=function(t){var n,r;function e(){return t.apply(this,arguments)||this}return r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,e.prototype.render=function(){return i.a.createElement(o.a,{AnimationLoop:g,exampleConfig:this.props.pageContext.exampleConfig})},e}(i.a.Component)},foSv:function(t,n,r){"use strict";function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(n,"a",(function(){return e}))},gmAo:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"c",(function(){return a})),r.d(n,"d",(function(){return u})),r.d(n,"e",(function(){return s})),r.d(n,"b",(function(){return h}));r("bWfx"),r("LK8F");var e=r("U8pU"),i=(r("RHh3"),r("KQm4"),r("5tna"),Math.PI,1/180*Math.PI),o={};function a(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).precision,r=void 0===n?o.precision||4:n;return t=function(t){return Math.round(t/o.EPSILON)*o.EPSILON}(t),"".concat(parseFloat(t.toPrecision(r)))}function u(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&void 0!==t.length}function c(t,n,r){if(u(t)){r=r||((i=t).clone?i.clone():new Array(i.length));for(var e=0;e<r.length&&e<t.length;++e)r[e]=n(t[e],e,r);return r}var i;return n(t)}function s(t,n){return c(t,(function(t){return t*i}),n)}function h(t,n,r){var i=o.EPSILON;r&&(o.EPSILON=r);try{if(t===n)return!0;if(u(t)&&u(n)){if(t.length!==n.length)return!1;for(var a=0;a<t.length;++a)if(!h(t[a],n[a]))return!1;return!0}return t&&"object"===Object(e.a)(t)&&t.equals?t.equals(n):n&&"object"===Object(e.a)(n)&&n.equals?n.equals(t):Math.abs(t-n)<=o.EPSILON*Math.max(1,Math.abs(t),Math.abs(n))}finally{o.EPSILON=i}}o.EPSILON=1e-12,o.debug=!1,o.precision=4,o.printTypes=!1,o.printDegrees=!1,o.printRowMajor=!0},md7G:function(t,n,r){"use strict";var e=r("U8pU");function i(t,n){return!n||"object"!==Object(e.a)(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}r.d(n,"a",(function(){return i}))},s4An:function(t,n,r){"use strict";function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}r.d(n,"a",(function(){return e}))},y1Qd:function(t,n,r){"use strict";function e(t,n,r){var e=n[0],i=n[1],o=r[3]*e+r[7]*i||1;return t[0]=(r[0]*e+r[4]*i)/o,t[1]=(r[1]*e+r[5]*i)/o,t}function i(t,n,r){var e=n[0],i=n[1],o=n[2],a=r[3]*e+r[7]*i+r[11]*o||1;return t[0]=(r[0]*e+r[4]*i+r[8]*o)/a,t[1]=(r[1]*e+r[5]*i+r[9]*o)/a,t[2]=(r[2]*e+r[6]*i+r[10]*o)/a,t}function o(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[2]*i,t[1]=r[1]*e+r[3]*i,t[2]=n[2],t}r.d(n,"a",(function(){return e})),r.d(n,"c",(function(){return i})),r.d(n,"b",(function(){return o}))},"yOd+":function(t,n,r){"use strict";r.d(n,"b",(function(){return e})),r.d(n,"a",(function(){return i})),r.d(n,"c",(function(){return o}));r("Y9lz");var e=1e-6,i="undefined"!=typeof Float32Array?Float32Array:Array,o=Math.random;Math.PI},"zgn+":function(t,n,r){"use strict";r("xfY5"),r("/KAi"),r("f3/d"),r("Y9lz"),r("LK8F");var e=r("1OyB"),i=r("vuIU"),o=r("md7G"),a=r("foSv"),u=r("Ji7U"),c=r("s4An");var s=r("RHh3");function h(t){var n="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return Object(s.a)(t,arguments,Object(a.a)(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object(c.a)(e,t)})(t)}var f=r("gmAo");r.d(n,"a",(function(){return l}));var l=function(t){function n(){return Object(e.a)(this,n),Object(o.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(i.a)(n,[{key:"clone",value:function(){return(new this.constructor).copy(this)}},{key:"from",value:function(t){return Array.isArray(t)?this.copy(t):this.fromObject(t)}},{key:"fromArray",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;r<this.ELEMENTS;++r)this[r]=t[r+n];return this.check()}},{key:"to",value:function(t){return t===this?this:Object(f.d)(t)?this.toArray(t):this.toObject(t)}},{key:"toTarget",value:function(t){return t?this.to(t):this}},{key:"toArray",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;r<this.ELEMENTS;++r)t[n+r]=this[r];return t}},{key:"toFloat32Array",value:function(){return new Float32Array(this)}},{key:"toString",value:function(){return this.formatString(f.a)}},{key:"formatString",value:function(t){for(var n="",r=0;r<this.ELEMENTS;++r)n+=(r>0?", ":"")+Object(f.c)(this[r],t);return"".concat(t.printTypes?this.constructor.name:"","[").concat(n,"]")}},{key:"equals",value:function(t){if(!t||this.length!==t.length)return!1;for(var n=0;n<this.ELEMENTS;++n)if(!Object(f.b)(this[n],t[n]))return!1;return!0}},{key:"exactEquals",value:function(t){if(!t||this.length!==t.length)return!1;for(var n=0;n<this.ELEMENTS;++n)if(this[n]!==t[n])return!1;return!0}},{key:"negate",value:function(){for(var t=0;t<this.ELEMENTS;++t)this[t]=-this[t];return this.check()}},{key:"lerp",value:function(t,n,r){void 0===r&&(r=n,n=t,t=this);for(var e=0;e<this.ELEMENTS;++e){var i=t[e];this[e]=i+r*(n[e]-i)}return this.check()}},{key:"min",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]=Math.min(t[n],this[n]);return this.check()}},{key:"max",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]=Math.max(t[n],this[n]);return this.check()}},{key:"clamp",value:function(t,n){for(var r=0;r<this.ELEMENTS;++r)this[r]=Math.min(Math.max(this[r],t[r]),n[r]);return this.check()}},{key:"add",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var e=0,i=n;e<i.length;e++)for(var o=i[e],a=0;a<this.ELEMENTS;++a)this[a]+=o[a];return this.check()}},{key:"subtract",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var e=0,i=n;e<i.length;e++)for(var o=i[e],a=0;a<this.ELEMENTS;++a)this[a]-=o[a];return this.check()}},{key:"scale",value:function(t){if(Array.isArray(t))return this.multiply(t);for(var n=0;n<this.ELEMENTS;++n)this[n]*=t;return this.check()}},{key:"sub",value:function(t){return this.subtract(t)}},{key:"setScalar",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]=t;return this.check()}},{key:"addScalar",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]+=t;return this.check()}},{key:"subScalar",value:function(t){return this.addScalar(-t)}},{key:"multiplyScalar",value:function(t){for(var n=0;n<this.ELEMENTS;++n)this[n]*=t;return this.check()}},{key:"divideScalar",value:function(t){return this.scale(1/t)}},{key:"clampScalar",value:function(t,n){for(var r=0;r<this.ELEMENTS;++r)this[r]=Math.min(Math.max(this[r],t),n);return this.check()}},{key:"multiplyByScalar",value:function(t){return this.scale(t)}},{key:"check",value:function(){if(f.a.debug&&!this.validate(this))throw new Error("math.gl: ".concat(this.constructor.name," some fields set to invalid numbers'"));return this}},{key:"validate",value:function(){for(var t=this.length===this.ELEMENTS,n=0;n<this.ELEMENTS;++n)t=t&&Number.isFinite(this[n]);return t}},{key:"elements",get:function(){return this}}]),n}(h(Array))}}]);
//# sourceMappingURL=component---templates-api-example-texture-3-d-jsx-c3cfc13bde2afc4a7f65.js.map