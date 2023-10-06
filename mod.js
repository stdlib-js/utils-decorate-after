// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,_=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,$=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,$,"$1e"),n=p.call(n,y,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,h,"e-0$1"),r.alternate&&(n=p.call(n,_,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function w(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function m(r,e,t){var n=e-r.length;return n<0?r:r=t?r+w(n):w(n)+r}var E=String.fromCharCode,j=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=m(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,n;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var V,N=Object.prototype,P=N.toString,R=N.__defineGetter__,C=N.__defineSetter__,G=N.__lookupGetter__,B=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var L=V;function D(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X=/./;function U(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=M()?function(r){var e,t,n,i,o;if(null==r)return W.call(r);t=r[z],o=z,e=null!=(i=r)&&J.call(i,o);try{r[z]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[z]=t:delete r[z],n}:function(r){return W.call(r)},H=Boolean,K=Boolean.prototype.toString;var Q=M();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function er(r){return U(r)||rr(r)}function tr(){return new Function("return this;")()}D(er,"isPrimitive",U),D(er,"isObject",rr);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,or="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ar="object"==typeof or?or:null,cr="object"==typeof globalThis?globalThis:null;var ur=function(r){if(arguments.length){if(!U(r))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tr()}if(cr)return cr;if(nr)return nr;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=ur.document&&ur.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;D(sr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function hr(r){return null!==r&&"object"==typeof r}function _r(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return hr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr));var dr="function"==typeof X||"object"==typeof lr||"function"==typeof fr?function(r){return _r(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?_r(r).toLowerCase():e};function vr(r){return"function"===dr(r)}function yr(r){return"number"==typeof r}var $r=Number,br=$r.prototype.toString;var wr=M();function mr(r){return"object"==typeof r&&(r instanceof $r||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Er(r){return yr(r)||mr(r)}D(Er,"isPrimitive",yr),D(Er,"isObject",mr);var jr=Number.POSITIVE_INFINITY,Sr=$r.NEGATIVE_INFINITY,Tr=Math.floor;function xr(r){return r<jr&&r>Sr&&Tr(e=r)===e;var e}function kr(r){return yr(r)&&xr(r)}function Ar(r){return mr(r)&&xr(r.valueOf())}function Ir(r){return kr(r)||Ar(r)}function Fr(r){return kr(r)&&r>=0}function Or(r){return Ar(r)&&r.valueOf()>=0}function Vr(r){return Fr(r)||Or(r)}function Nr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Pr(r,e,t,n){var i=r.apply(null,e),o=t.call(n,i);return void 0===o?i:o}function Rr(r,e,t,n){var i;if(!vr(r))throw new TypeError(Nr("1hD3c,J9",r));if(!vr(t))throw new TypeError(Nr("1hD3N,G4",t));if(i=[o,function(e){var i,o;for(i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);return Pr(r,i,t,n)},function(e,i){var o,a;for(o=[],a=0;a<arguments.length;a++)o.push(arguments[a]);return Pr(r,o,t,n)},function(e,i,o){var a,c;for(a=[],c=0;c<arguments.length;c++)a.push(arguments[c]);return Pr(r,a,t,n)},function(e,i,o,a){var c,u;for(c=[],u=0;u<arguments.length;u++)c.push(arguments[u]);return Pr(r,c,t,n)},function(e,i,o,a,c){var u,f;for(u=[],f=0;f<arguments.length;f++)u.push(arguments[f]);return Pr(r,u,t,n)},function(e,i,o,a,c,u){var f,l;for(f=[],l=0;l<arguments.length;l++)f.push(arguments[l]);return Pr(r,f,t,n)},function(e,i,o,a,c,u,f){var l,s;for(l=[],s=0;s<arguments.length;s++)l.push(arguments[s]);return Pr(r,l,t,n)},function(e,i,o,a,c,u,f,l){var s,p;for(s=[],p=0;p<arguments.length;p++)s.push(arguments[p]);return Pr(r,s,t,n)},function(e,i,o,a,c,u,f,l,s){var p,g;for(p=[],g=0;g<arguments.length;g++)p.push(arguments[g]);return Pr(r,p,t,n)},function(e,i,o,a,c,u,f,l,s,p){var g,h;for(g=[],h=0;h<arguments.length;h++)g.push(arguments[h]);return Pr(r,g,t,n)}],!Fr(e))throw new TypeError(Nr("1hD3X,F1",e));return e<i.length?i[e]:o;function o(){var e,i;for(e=[],i=0;i<arguments.length;i++)e.push(arguments[i]);return Pr(r,e,t,n)}}D(Ir,"isPrimitive",kr),D(Ir,"isObject",Ar),D(Vr,"isPrimitive",Fr),D(Vr,"isObject",Or);var Cr=Function,Gr=Function.prototype.toString;function Br(r){return Gr.call(r)}function Lr(){var r="";return r="^"+(r=(r=(r+=Br(Cr)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(r)}var Dr=Lr();D(Lr,"REGEXP",Dr);var Xr=/^\s*function[^(]*\(([^)]*)/i;function Ur(r,e,t,n){var i,o,a,c,u;if(!vr(r))throw new TypeError(Nr("1hD3c,J9",r));if(!Fr(e))throw new TypeError(Nr("1hD3X,F1",e));if(!vr(t))throw new TypeError(Nr("1hD3N,G4",t));if(o=Br(r),c="return function make(__$$fcn$$__,__$$after$$__,__$$thisArg$$__){",c+='"use strict";',Dr.test(o))for(i=[],u=0;u<e;u++)i.push("x"+u);else if((a=(i=(i=o.match(Xr)[1])?i.split(","):[]).length)<e)for(u=a;u<e;u++)i.push("__$$x"+u+"$$__");else a>e&&(i.length=e);return c+="return function decorator("+(i=i.join(","))+"){",c+="var __$$args$$__=[];",c+="for (var __$$i$$__=0;__$$i$$__<arguments.length;__$$i$$__++){__$$args$$__.push(arguments[__$$i$$__]);}",c+="var __$$r1$$__ = __$$fcn$$__.apply(null,__$$args$$__);",c+="var __$$r2$$__ = __$$after$$__.call(__$$thisArg$$__,__$$r1$$__);",c+="return (__$$r2$$__ === void 0) ? __$$r1$$__ : __$$r2$$__;",c+="}",c+="}",new Cr(c+="//# sourceURL=decorateAfter.factory.js")()(r,t,n)}D(Rr,"factory",Ur);export{Rr as default,Ur as factory};
//# sourceMappingURL=mod.js.map
