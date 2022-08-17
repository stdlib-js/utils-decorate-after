// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).decorateAfter=t()}(this,(function(){"use strict";var r=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,a,p,s;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((a="value"in n)&&(c.call(r,t)||l.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),p="get"in n,s="set"in n,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,n.get),s&&f&&f.call(r,t,n.set),r};var a=n;function p(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){return"boolean"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=v()?function(r){var t,n,e,o,u;if(null==r)return b.call(r);n=r[d],u=d,t=null!=(o=r)&&h.call(o,u);try{r[d]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[d]=n:delete r[d],e}:function(r){return b.call(r)},m=Boolean.prototype.toString;var w=v();function j(r){return"object"==typeof r&&(r instanceof Boolean||(w?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function _(r){return s(r)||j(r)}function O(){return new Function("return this;")()}p(_,"isPrimitive",s),p(_,"isObject",j);var E="object"==typeof self?self:null,S="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var I=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(E)return E;if(S)return S;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),P=I.document&&I.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};function k(r){return null!==r&&"object"==typeof r}function C(r){var t,n,e,o;if(("Object"===(n=g(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return k(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}p(k,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(k));var F="function"==typeof r||"object"==typeof N||"function"==typeof P?function(r){return C(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?C(r).toLowerCase():t};function G(r){return"function"===F(r)}function L(r){return"number"==typeof r}var M=Number,R=M.prototype.toString;var U=v();function Y(r){return"object"==typeof r&&(r instanceof M||(U?function(r){try{return R.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function X(r){return L(r)||Y(r)}p(X,"isPrimitive",L),p(X,"isObject",Y);var Z=Number.POSITIVE_INFINITY,q=M.NEGATIVE_INFINITY,z=Math.floor;function D(r){return r<Z&&r>q&&z(t=r)===t;var t}function H(r){return L(r)&&D(r)}function J(r){return Y(r)&&D(r.valueOf())}function K(r){return H(r)||J(r)}function Q(r){return H(r)&&r>=0}function W(r){return J(r)&&r.valueOf()>=0}function $(r){return Q(r)||W(r)}function rr(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function tr(r,t,n,e){var o=r.apply(null,t),u=n.call(e,o);return void 0===u?o:u}return p(K,"isPrimitive",H),p(K,"isObject",J),p($,"isPrimitive",Q),p($,"isObject",W),function(r,t,n,e){var o;if(!G(r))throw new TypeError(rr("null3p",r));if(!G(n))throw new TypeError(rr("null3Z",n));if(o=[u,function(t){var o,u;for(o=[],u=0;u<arguments.length;u++)o.push(arguments[u]);return tr(r,o,n,e)},function(t,o){var u,i;for(u=[],i=0;i<arguments.length;i++)u.push(arguments[i]);return tr(r,u,n,e)},function(t,o,u){var i,f;for(i=[],f=0;f<arguments.length;f++)i.push(arguments[f]);return tr(r,i,n,e)},function(t,o,u,i){var f,c;for(f=[],c=0;c<arguments.length;c++)f.push(arguments[c]);return tr(r,f,n,e)},function(t,o,u,i,f){var c,l;for(c=[],l=0;l<arguments.length;l++)c.push(arguments[l]);return tr(r,c,n,e)},function(t,o,u,i,f,c){var l,a;for(l=[],a=0;a<arguments.length;a++)l.push(arguments[a]);return tr(r,l,n,e)},function(t,o,u,i,f,c,l){var a,p;for(a=[],p=0;p<arguments.length;p++)a.push(arguments[p]);return tr(r,a,n,e)},function(t,o,u,i,f,c,l,a){var p,s;for(p=[],s=0;s<arguments.length;s++)p.push(arguments[s]);return tr(r,p,n,e)},function(t,o,u,i,f,c,l,a,p){var s,y;for(s=[],y=0;y<arguments.length;y++)s.push(arguments[y]);return tr(r,s,n,e)},function(t,o,u,i,f,c,l,a,p,s){var y,v;for(y=[],v=0;v<arguments.length;v++)y.push(arguments[v]);return tr(r,y,n,e)}],!Q(t))throw new TypeError(rr("null3k",t));return t<o.length?o[t]:u;function u(){var t,o;for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);return tr(r,t,n,e)}}}));
//# sourceMappingURL=browser.js.map
