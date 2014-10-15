
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Mock server parameters:
	params = require( './../../app/params.js' ),

	// Module to be tested:
	handler = require( './../../app/routes/api.config.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'app/routes/api/config', function tests() {
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

	it( 'should return a mock configuration', function test() {
		response.send = function( body ) {
			assert.deepEqual( JSON.parse( body ), params.CONFIG );
			return this;
		};
		handler( {}, response );
	});

});