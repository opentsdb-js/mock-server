
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	routes = require( './../app/routes.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'app/routes', function tests() {
	'use strict';

	// SETUP //

	var app = {
			get: function( route, clbk ) {
				if ( arguments.length !== 2 ) {
					throw new Error( 'get()::must provide a route and a callback.' );
				}
			}
		};

	// TESTS //

	it( 'should export a function', function test() {
		expect( routes ).to.be.a( 'function' );
	});

	it( 'should not throw any errors', function test() {
		expect( foo ).to.not.throw( Error );
		function foo() {
			routes( app );
		}
	});

});