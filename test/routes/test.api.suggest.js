
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Mock server parameters:
	params = require( './../../app/params.js' ),

	// Module to be tested:
	handler = require( './../../app/routes/api.suggest.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'app/routes/api/suggest', function tests() {
	'use strict';

	// SETUP //

	var request, response;

	beforeEach( function() {
		request = {
			'query': {
				'type': 'metrics',
				'max': 10000
			}
		};
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

	it( 'should return a 200 status if the type is supported', function test() {
		response.status = function( status ) {
			assert.strictEqual( status, 200 );
			return this;
		};
		handler( request, response );
	});

	it( 'should return a list of metrics', function test() {
		response.send = function( body ) {
			assert.deepEqual( JSON.parse( body ), params.METRICS );
			return this;
		};
		handler( request, response );
	});

	it( 'should return a 404 status if the type is not supported', function test() {
		var req = {
			'query': {
				'type': 'beep',
				'max': 10000
			}
		};
		response.status = function( status ) {
			assert.strictEqual( status, 404 );
			return this;
		};
		handler( req, response );
	});

});