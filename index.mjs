// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import{REGEXP as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-native-function@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/function-to-string@v0.2.1-esm/index.mjs";import $ from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.2.1-esm/index.mjs";function _(r,t,n,e){var s=r.apply(null,t),o=n.call(e,s);return void 0===o?s:o}function i(r,s,o,$){var i;if(!t(r))throw new TypeError(e("1hD3c",r));if(!t(o))throw new TypeError(e("1hD3N",o));if(i=[f,function(t){var n,e;for(n=[],e=0;e<arguments.length;e++)n.push(arguments[e]);return _(r,n,o,$)},function(t,n){var e,s;for(e=[],s=0;s<arguments.length;s++)e.push(arguments[s]);return _(r,e,o,$)},function(t,n,e){var s,i;for(s=[],i=0;i<arguments.length;i++)s.push(arguments[i]);return _(r,s,o,$)},function(t,n,e,s){var i,f;for(i=[],f=0;f<arguments.length;f++)i.push(arguments[f]);return _(r,i,o,$)},function(t,n,e,s,i){var f,u;for(f=[],u=0;u<arguments.length;u++)f.push(arguments[u]);return _(r,f,o,$)},function(t,n,e,s,i,f){var u,h;for(u=[],h=0;h<arguments.length;h++)u.push(arguments[h]);return _(r,u,o,$)},function(t,n,e,s,i,f,u){var h,l;for(h=[],l=0;l<arguments.length;l++)h.push(arguments[l]);return _(r,h,o,$)},function(t,n,e,s,i,f,u,h){var l,a;for(l=[],a=0;a<arguments.length;a++)l.push(arguments[a]);return _(r,l,o,$)},function(t,n,e,s,i,f,u,h,l){var a,p;for(a=[],p=0;p<arguments.length;p++)a.push(arguments[p]);return _(r,a,o,$)},function(t,n,e,s,i,f,u,h,l,a){var p,c;for(p=[],c=0;c<arguments.length;c++)p.push(arguments[c]);return _(r,p,o,$)}],!n(s))throw new TypeError(e("1hD3X",s));return s<i.length?i[s]:f;function f(){var t,n;for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return _(r,t,o,$)}}var f=/^\s*function[^(]*\(([^)]*)/i;function u(r,_,i,u){var h,l,a,p,c;if(!t(r))throw new TypeError(e("1hD3c",r));if(!n(_))throw new TypeError(e("1hD3X",_));if(!t(i))throw new TypeError(e("1hD3N",i));if(l=o(r),p="return function make(__$$fcn$$__,__$$after$$__,__$$thisArg$$__){",p+='"use strict";',s.test(l))for(h=[],c=0;c<_;c++)h.push("x"+c);else if((a=(h=(h=l.match(f)[1])?h.split(","):[]).length)<_)for(c=a;c<_;c++)h.push("__$$x"+c+"$$__");else a>_&&(h.length=_);return p+="return function decorator("+(h=h.join(","))+"){",p+="var __$$args$$__=[];",p+="for (var __$$i$$__=0;__$$i$$__<arguments.length;__$$i$$__++){__$$args$$__.push(arguments[__$$i$$__]);}",p+="var __$$r1$$__ = __$$fcn$$__.apply(null,__$$args$$__);",p+="var __$$r2$$__ = __$$after$$__.call(__$$thisArg$$__,__$$r1$$__);",p+="return (__$$r2$$__ === void 0) ? __$$r1$$__ : __$$r2$$__;",p+="}",p+="}",new $(p+="//# sourceURL=decorateAfter.factory.js")()(r,i,u)}r(i,"factory",u);export{i as default,u as factory};
//# sourceMappingURL=index.mjs.map
