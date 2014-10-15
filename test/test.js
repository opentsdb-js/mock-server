
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	createApp = require( './../app' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'opentsdb-mock-server', function tests() {
	'use strict';

	// SETUP //

	var db;

	beforeEach( function() {
		db = createApp();
	});


	// TESTS //

	it( 'should export a function', function test() {
		expect( createApp ).to.be.a( 'function' );
	});

	it( 'should return an application', function test() {
		var App = createApp;
		assert.instanceOf( db, App );
	});

	it( 'should provide a means to get the base server URL', function test() {
		expect( db.url ).to.be.a( 'string' );
	});

	it( 'should provide a means to get a mock query string', function test() {
		expect( db.query ).to.be.a( 'string' );
	});

	it( 'should provide a means to get a list of aggregators', function test() {
		expect( db.aggregators ).to.be.an( 'array' );
	});

	it( 'should provide a means to get a list of metrics', function test() {
		expect( db.metrics ).to.be.an( 'array' );
	});

	it( 'should provide a means to get a mock configuration object', function test() {
		expect( db.config ).to.be.an( 'object' );
	});

	it( 'should provide a means to get mock version info', function test() {
		expect( db.version ).to.be.an( 'object' );
	});

	it( 'should provide a means to get a mock dropcaches response', function test() {
		expect( db.dropcaches ).to.be.an( 'object' );
	});

	it( 'should provide a method to create a mock server', function test() {
		expect( db.createServer ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a function', function test() {
		var values = [
				'5',
				5,
				null,
				undefined,
				NaN,
				[],
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				db.createServer( value );
			};
		}
	});

	it( 'should create a mock server', function test( done ) {
		var server = db.createServer( function onListen() {
			server.close();
			done();
		});
	});

});