
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	handler = require( './../../app/routes/bad_body.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'app/routes/bad_body', function tests() {
	'use strict';

	// SETUP //

	var response;

	beforeEach( function() {
		response = {
			writeHead: function( status ) {
				return this;
			},
			end: function() {
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

	it( 'should end the response', function test() {
		response.end = function() {
			assert.ok( true );
			return this;
		};
		handler( {}, response );
	});

});