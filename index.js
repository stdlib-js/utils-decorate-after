// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).decorateAfter=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var l,a,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((a="value"in n)&&(f.call(r,t)||c.call(r,t)?(l=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=l):r[t]=n.value),_="get"in n,p="set"in n,a&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var l=t;function a(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var _=/./;function p(r){return"boolean"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return s&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var b=$()?function(r){var t,n,e,o,u;if(null==r)return y.call(r);n=r[h],u=h,t=null!=(o=r)&&v.call(o,u);try{r[h]=void 0}catch(t){return y.call(r)}return e=y.call(r),t?r[h]=n:delete r[h],e}:function(r){return y.call(r)},g=Boolean.prototype.toString;var d=$();function m(r){return"object"==typeof r&&(r instanceof Boolean||(d?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function w(r){return p(r)||m(r)}function j(){return new Function("return this;")()}a(w,"isPrimitive",p),a(w,"isObject",m);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,S="object"==typeof global?global:null;var O=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return j()}if(E)return E;if(T)return T;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),A=O.document&&O.document.childNodes,P=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;a(I,"REGEXP",F);var N=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};function x(r){return null!==r&&"object"==typeof r}function B(r){var t,n,e,o;if(("Object"===(n=b(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=F.exec(e.toString()))return t[1]}return x(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}a(x,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!N(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(x));var k="function"==typeof _||"object"==typeof P||"function"==typeof A?function(r){return B(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?B(r).toLowerCase():t};function V(r){return"function"===k(r)}function G(r){return"number"==typeof r}var R=Number,C=R.prototype.toString;var L=$();function M(r){return"object"==typeof r&&(r instanceof R||(L?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function U(r){return G(r)||M(r)}a(U,"isPrimitive",G),a(U,"isObject",M);var X=Number.POSITIVE_INFINITY,Y=R.NEGATIVE_INFINITY,Z=Math.floor;function q(r){return r<X&&r>Y&&Z(t=r)===t;var t}function z(r){return G(r)&&q(r)}function D(r){return M(r)&&q(r.valueOf())}function H(r){return z(r)||D(r)}function J(r){return z(r)&&r>=0}function K(r){return D(r)&&r.valueOf()>=0}function Q(r){return J(r)||K(r)}function W(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function rr(r,t,n,e){var o=r.apply(null,t),u=n.call(e,o);return void 0===u?o:u}function tr(r,t,n,e){var o;if(!V(r))throw new TypeError(W("null3p",r));if(!V(n))throw new TypeError(W("null3Z",n));if(o=[u,function(t){var o,u;for(o=[],u=0;u<arguments.length;u++)o.push(arguments[u]);return rr(r,o,n,e)},function(t,o){var u,i;for(u=[],i=0;i<arguments.length;i++)u.push(arguments[i]);return rr(r,u,n,e)},function(t,o,u){var i,f;for(i=[],f=0;f<arguments.length;f++)i.push(arguments[f]);return rr(r,i,n,e)},function(t,o,u,i){var f,c;for(f=[],c=0;c<arguments.length;c++)f.push(arguments[c]);return rr(r,f,n,e)},function(t,o,u,i,f){var c,l;for(c=[],l=0;l<arguments.length;l++)c.push(arguments[l]);return rr(r,c,n,e)},function(t,o,u,i,f,c){var l,a;for(l=[],a=0;a<arguments.length;a++)l.push(arguments[a]);return rr(r,l,n,e)},function(t,o,u,i,f,c,l){var a,_;for(a=[],_=0;_<arguments.length;_++)a.push(arguments[_]);return rr(r,a,n,e)},function(t,o,u,i,f,c,l,a){var _,p;for(_=[],p=0;p<arguments.length;p++)_.push(arguments[p]);return rr(r,_,n,e)},function(t,o,u,i,f,c,l,a,_){var p,s;for(p=[],s=0;s<arguments.length;s++)p.push(arguments[s]);return rr(r,p,n,e)},function(t,o,u,i,f,c,l,a,_,p){var s,$;for(s=[],$=0;$<arguments.length;$++)s.push(arguments[$]);return rr(r,s,n,e)}],!J(t))throw new TypeError(W("null3k",t));return t<o.length?o[t]:u;function u(){var t,o;for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);return rr(r,t,n,e)}}function nr(){var r="";return r="^"+(r=(r=(r+=Function.prototype.toString.call(Function)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(r)}a(H,"isPrimitive",z),a(H,"isObject",D),a(Q,"isPrimitive",J),a(Q,"isObject",K);var er=nr();a(nr,"REGEXP",er);var or=Function.prototype.toString;var ur=Function,ir=/^\s*function[^(]*\(([^)]*)/i;return a(tr,"factory",(function(r,t,n,e){var o,u,i,f,c;if(!V(r))throw new TypeError(W("null3p",r));if(!J(t))throw new TypeError(W("null3k",t));if(!V(n))throw new TypeError(W("null3Z",n));if(u=function(r){return or.call(r)}(r),f="return function make(__$$fcn$$__,__$$after$$__,__$$thisArg$$__){",f+='"use strict";',er.test(u))for(o=[],c=0;c<t;c++)o.push("x"+c);else if((i=(o=(o=u.match(ir)[1])?o.split(","):[]).length)<t)for(c=i;c<t;c++)o.push("__$$x"+c+"$$__");else i>t&&(o.length=t);return f+="return function decorator("+(o=o.join(","))+"){",f+="var __$$args$$__=[];",f+="for (var __$$i$$__=0;__$$i$$__<arguments.length;__$$i$$__++){__$$args$$__.push(arguments[__$$i$$__]);}",f+="var __$$r1$$__ = __$$fcn$$__.apply(null,__$$args$$__);",f+="var __$$r2$$__ = __$$after$$__.call(__$$thisArg$$__,__$$r1$$__);",f+="return (__$$r2$$__ === void 0) ? __$$r1$$__ : __$$r2$$__;",f+="}",f+="}",new ur(f+="//# sourceURL=decorateAfter.factory.js")()(r,n,e)})),tr}));
//# sourceMappingURL=index.js.map