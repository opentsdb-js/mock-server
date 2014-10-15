
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	handler = require( './../../app/routes/no_data.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'app/routes/no_data', function tests() {
	'use strict';

	// SETUP //

	var response;

	beforeEach( function() {
		response = {
			status: function( status ) {
				return this;
			},
			send: function( body ) {
				return this;
			}
		};
	});
	

	// TESTS //

	it( 'should export a function', function test() {
		expect( handler ).to.be.a( 'function' );
	});

	it( 'should have an arity of 2', function test() {
		assert.strictEqual( handler.length, 2 );
	});

	it( 'should return a 200 status', function test() {
		response.status = function( status ) {
			assert.strictEqual( status, 200 );
			return this;
		};
		handler( {}, response );
	});

	it( 'should return an empty array', function test() {
		response.send = function( body ) {
			assert.deepEqual( [], foo() );
			return this;
			function foo() {
				return JSON.parse( body );
			}
		};
		handler( {}, response );
	});

});