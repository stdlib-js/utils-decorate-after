<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# decorateAfter

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Decorate a provided function such that the function's return value is provided as an argument to another function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
decorateAfter = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-decorate-after@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-decorate-after/tags). For example,

```javascript
decorateAfter = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-decorate-after@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var decorateAfter = require( 'path/to/vendor/umd/utils-decorate-after/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-decorate-after@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.decorateAfter;
})();
</script>
```

#### decorateAfter( fcn, arity, after\[, thisArg] )

Decorates a provided function such that the function's return value is provided as an argument to another function.

```javascript
var abs = require( '@stdlib/math-base-special-abs' );

function negate( v ) {
    return -v;
}

var f = decorateAfter( abs, abs.length, negate );
// returns <Function>

var bool = ( abs.length === f.length );
// returns true

var v = f( -5 );
// returns -5

v = f( 5 );
// returns -5
```

Decorators are intended to be transparent, meaning that, when interfacing with an API, the decorated API should have the same signature (i.e., number of parameters) as the decorated function. Thus, a typical value for `arity` is `fcn.length`. This function does not require equality, however, and the `arity` argument is allowed to diverge from that of the decorated function. Specifying a differing `arity` does **not** affect function evaluation behavior, as the returned function passes all provided arguments to the decorated function.

```javascript
var abs = require( '@stdlib/math-base-special-abs' );

function negate( v ) {
    return -v;
}

var f = decorateAfter( abs, 0, negate );
// returns <Function>

var bool = ( abs.length === f.length );
// returns false

var v = f( -5 );
// returns -5

v = f( 5 );
// returns -5
```

To specify the function execution context for `after`, provide a `thisArg` argument.

<!-- eslint-disable no-invalid-this -->

```javascript
var abs = require( '@stdlib/math-base-special-abs' );

function counter() {
    this.count += 1;
}

var ctx = {
    'count': 0
};

var f = decorateAfter( abs, abs.length, counter, ctx );
// returns <Function>

var v = f( -5 );
// returns 5

v = f( 5 );
// returns 5

var count = ctx.count;
// returns 2
```

#### decorateAfter.factory( fcn, arity, after\[, thisArg] )

Uses code generation to decorate a provided function such that the function's return value is provided as an argument to another function.

```javascript
var abs = require( '@stdlib/math-base-special-abs' );

function negate( v ) {
    return -v;
}

var f = decorateAfter.factory( abs, abs.length, negate );
// returns <Function>

var bool = ( abs.length === f.length );
// returns true

var v = f( -5 );
// returns -5

v = f( 5 );
// returns -5
```

Argument behavior is the same as for `decorateAfter` above.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the `after` function returns `undefined`, the returned decorator returns the return value of the decorated function `fcn`; otherwise, the returned decorator returns the return value of `after`.
-   Code generation may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.
-   For non-native functions, the code generation API supports returning a decorator whose API exactly matches the API of the decorated function, including function length and parameter names. For native functions, due to how native functions serialize to strings, the code generation API generates placeholder parameter names, which are unlikely to match the canonical parameter names. Using placeholder parameter names ensures that the length of the decorator (i.e., number of parameters) matches the decorated function and, except in scenarios involving function source code inspection, will not affect runtime behavior.
-   For the non-code generation API, the returned decorator supports an `arity` less than or equal to `10` (i.e., the maximum arity of the returned function is `10`). For an arity greater than `10`, the returned function has an arity equal to `0`. While this violates strict notions of a decorator, for all practical purposes, this is unlikely to be an issue, as the vast majority of functions have fewer than `10` parameters and the need for explicitly checking function length is relatively uncommon.
-   The decorators returned by the code generation and non-code generation APIs should have the same performance characteristics, and, thus, neither API should have a performance advantage over the other. The main advantage of the code generation API is the ability to return a decorator whose signature exactly matches the signature of a non-native decorated function.
-   Common use cases for decorating a function with additional actions **after** invocation include logging, capturing invocation statistics, and validating return values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable no-invalid-this -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-format@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-decorate-after@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function count() {
    this.count += 1;
}

function greet() {
    return 'Hello!';
}

function randstr( f ) {
    var str;
    var i;

    str = [];
    for ( i = 0; i < discreteUniform( 1, 10 ); i++ ) {
        str.push( f() );
    }
    return str.join( ' ' );
}

// Create an evaluation context to allow tracking how many times a function is invoked:
var ctx = {
    'count': 0
};

// Decorate a function with a counter:
var f = decorateAfter( greet, greet.length, count, ctx );

// Generate a random greeting:
var str = randstr( f );
// returns <string>

// Check how many times the function was invoked:
var c = ctx.count;
// returns <number>

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-decorate-after.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-decorate-after

[test-image]: https://github.com/stdlib-js/utils-decorate-after/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-decorate-after/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-decorate-after/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-decorate-after?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-decorate-after.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-decorate-after/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-decorate-after/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-decorate-after/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-decorate-after/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-decorate-after/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-decorate-after/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-decorate-after/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-decorate-after/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-decorate-after/main/LICENSE

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
