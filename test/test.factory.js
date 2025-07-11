/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var add = require( '@stdlib/number-float64-base-add' );
var decorateAfter = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof decorateAfter, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			decorateAfter( value, 0, noop );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a function (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			decorateAfter( value, 0, noop, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			decorateAfter( add, value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			decorateAfter( add, value, noop, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			decorateAfter( add, add.length, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a function (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			decorateAfter( add, add.length, value, {} );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a function (thisArg)', function test( t ) {
	var fcn = decorateAfter( add, add.length, noop, {} );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function decorates a function (nullary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( constant, constant.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn();
	t.strictEqual( v, 18, 'returns expected value' );

	v = fcn();
	t.strictEqual( v, 18, 'returns expected value' );

	t.end();

	function constant() {
		return 8;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (nullary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( constant, constant.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn();
	t.strictEqual( v, 8, 'returns expected value' );

	v = fcn();
	t.strictEqual( v, 8, 'returns expected value' );

	t.end();

	function constant() {
		return 8;
	}
});

tape( 'the function decorates a function (unary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( unary, unary.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 10 );
	t.strictEqual( v, 20, 'returns expected value' );

	v = fcn( 10 );
	t.strictEqual( v, 20, 'returns expected value' );

	t.end();

	function unary( x ) {
		return x;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (unary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( unary, unary.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 10 );
	t.strictEqual( v, 10, 'returns expected value' );

	v = fcn( 10 );
	t.strictEqual( v, 10, 'returns expected value' );

	t.end();

	function unary( x ) {
		return x;
	}
});

tape( 'the function decorates a function (binary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 5, 3 );
	t.strictEqual( v, 18, 'returns expected value' );

	v = fcn( 9, 7 );
	t.strictEqual( v, 26, 'returns expected value' );

	t.end();

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (binary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 5, 3 );
	t.strictEqual( v, 8, 'returns expected value' );

	v = fcn( 9, 7 );
	t.strictEqual( v, 16, 'returns expected value' );

	t.end();
});

tape( 'the function decorates a function (ternary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3 );
	t.strictEqual( v, 16, 'returns expected value' );

	t.end();

	function add( x0, x1, x2 ) {
		return x0 + x1 + x2;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (ternary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3 );
	t.strictEqual( v, 6, 'returns expected value' );

	t.end();

	function add( x0, x1, x2 ) {
		return x0 + x1 + x2;
	}
});

tape( 'the function decorates a function (quaternary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4 );
	t.strictEqual( v, 20, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3 ) {
		return x0 + x1 + x2 + x3;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (quaternary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4 );
	t.strictEqual( v, 10, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3 ) {
		return x0 + x1 + x2 + x3;
	}
});

tape( 'the function decorates a function (quinary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5 );
	t.strictEqual( v, 25, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4 ) {
		return x0 + x1 + x2 + x3 + x4;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (quinary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5 );
	t.strictEqual( v, 15, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4 ) {
		return x0 + x1 + x2 + x3 + x4;
	}
});

tape( 'the function decorates a function (senary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6 );
	t.strictEqual( v, 31, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5 ) {
		return x0 + x1 + x2 + x3 + x4 + x5;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (senary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6 );
	t.strictEqual( v, 21, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5 ) {
		return x0 + x1 + x2 + x3 + x4 + x5;
	}
});

tape( 'the function decorates a function (septenary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7 );
	t.strictEqual( v, 38, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (septenary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7 );
	t.strictEqual( v, 28, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6;
	}
});

tape( 'the function decorates a function (octonary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8 );
	t.strictEqual( v, 46, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (octonary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8 );
	t.strictEqual( v, 36, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7;
	}
});

tape( 'the function decorates a function (novenary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
	t.strictEqual( v, 55, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7, x8 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (novenary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
	t.strictEqual( v, 45, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7, x8 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8;
	}
});

tape( 'the function decorates a function (denary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
	t.strictEqual( v, 65, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7, x8, x9 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (denary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
	t.strictEqual( v, 55, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7, x8, x9 ) {
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9;
	}
});

tape( 'the function decorates a function (multary, transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 );
	t.strictEqual( v, 76, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10 ) { // eslint-disable-line max-params
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function decorates a function (multary, pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, add.length, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );

	v = fcn( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 );
	t.strictEqual( v, 66, 'returns expected value' );

	t.end();

	function add( x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10 ) { // eslint-disable-line max-params
		return x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10;
	}
});

tape( 'the function supports specifying function arity (transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, 3, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );
	t.strictEqual( fcn.length, 3, 'returns expected value' );

	v = fcn( 5, 3, 4 );
	t.strictEqual( v, 22, 'returns expected value' );

	v = fcn( 9, 7, 5 );
	t.strictEqual( v, 31, 'returns expected value' );

	t.end();

	function add() {
		return arguments[ 0 ] + arguments[ 1 ] + arguments[ 2 ];
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function supports specifying function arity (transform)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, 2, scale );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );
	t.strictEqual( fcn.length, 2, 'returns expected value' );

	v = fcn( 5, 3, 4 );
	t.strictEqual( v, 22, 'returns expected value' );

	v = fcn( 9, 7, 5 );
	t.strictEqual( v, 31, 'returns expected value' );

	t.end();

	function add( x, y, z ) {
		var nargs = arguments.length;
		if ( nargs === 2 ) {
			return x + y;
		}
		return x + y + z;
	}

	function scale( v ) {
		return v + 10;
	}
});

tape( 'the function supports specifying function arity (pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, 3, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );
	t.strictEqual( fcn.length, 3, 'returns expected value' );

	v = fcn( 5, 3, 4 );
	t.strictEqual( v, 12, 'returns expected value' );

	v = fcn( 9, 7, 5 );
	t.strictEqual( v, 21, 'returns expected value' );

	t.end();

	function add() {
		return arguments[ 0 ] + arguments[ 1 ] + arguments[ 2 ];
	}
});

tape( 'the function supports specifying function arity (pass through)', function test( t ) {
	var fcn;
	var v;

	fcn = decorateAfter( add, 2, noop );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );
	t.strictEqual( fcn.length, 2, 'returns expected value' );

	v = fcn( 5, 3, 4 );
	t.strictEqual( v, 12, 'returns expected value' );

	v = fcn( 9, 7, 5 );
	t.strictEqual( v, 21, 'returns expected value' );

	t.end();

	function add( x, y, z ) {
		var nargs = arguments.length;
		if ( nargs === 2 ) {
			return x + y;
		}
		return x + y + z;
	}
});

tape( 'the function supports specifying a function evaluation context', function test( t ) {
	var fcn;
	var ctx;
	var v;
	var i;

	ctx = {
		'count': 0
	};
	fcn = decorateAfter( add, add.length, count, ctx );

	for ( i = 0; i < 10; i++ ) {
		v = fcn( i, i+1 );
		t.strictEqual( v, i+i+1, 'returns expected value' );
	}
	t.strictEqual( ctx.count, 10, 'returns expected value' );

	t.end();

	function count() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});
