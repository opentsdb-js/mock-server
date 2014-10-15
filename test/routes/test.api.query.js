
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Mock server parameters:
	params = require( './../../app/params.js' ),

	// Module to be tested:
	handler = require( './../../app/routes/api.query.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'app/routes/api/query', function tests() {
	'use strict';

	// SETUP //

	var request, response;

	beforeEach( function() {
		request = {
			'query': {
				'm': 'avg:m=cpu.utilization{nid=1234|5678}'
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

	it( 'should return a 200 status', function test() {
		response.status = function( status ) {
			assert.strictEqual( status, 200 );
			return this;
		};
		handler( request, response );
	});

	it( 'should return mock data', function test() {
		response.send = function( body ) {
			expect( JSON.parse( body ) ).to.be.an( 'array' );
			return this;
		};
		handler( request, response );
	});

	it( 'should return mock data when no tags are specified', function test() {
		request.query.m = 'avg:cpu.utilization';
		response.send = function( body ) {
			expect( JSON.parse( body ) ).to.be.an( 'array' );
			return this;
		};
		handler( request, response );
	});

	it( 'should return mock data for all tags', function test() {
		request.query.m = 'avg:cpu.utilization{nid=*}';
		response.send = function( body ) {
			expect( JSON.parse( body ) ).to.be.an( 'array' );
			return this;
		};
		handler( request, response );
	});

});