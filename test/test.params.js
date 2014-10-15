
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	params = require( './../app/params.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'app/params', function tests() {
	'use strict';

	it( 'should export an object', function test() {
		expect( params ).to.be.an( 'object' );
	});

});