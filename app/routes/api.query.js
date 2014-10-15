/**
*
*	ROUTES: api/query
*
*
*	DESCRIPTION:
*		- 
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com.
*
*/

(function() {
	'use strict';

	// MODULES //

	var NIDS = require( './../params.js' ).NIDS;


	// ONREQUEST //

	/**
	* FUNCTION: onRequest( request, response )
	*	Query request handler.
	*
	* @param {Object} request - HTTP request object
	* @param {Object} response - HTTP response object
	*/
	function onRequest( request, response ) {
		var tag = '*',
			metric,
			match,
			nids,
			data,
			time;

		// Metric query string is comprised of an aggregator and associated tags...
		metric = request.query.m
			.split(':')[1]
			.match( /(.*?)({|$)/ )[1];
		
		// Get the nid tag:
		match = request.query.m.match( /nid=(.*?)(,|}|$)/ );
		if ( match ) {
			tag = match[ 1 ];
		}

		// Get the nids:
		nids = tag.split( '|' );

		if ( nids[ 0 ] === '*' ) {
			nids = NIDS;
		}

		// Initialize the data:
		data = new Array( nids.length );
		time = Date.now();

		for ( var i = 0; i < nids.length; i++ ) {
			data[ i ] = {
				'metric': metric,
				'tags': {
					'nid': nids[ i ]
				},
				'aggregateTags': [],
				'dps': [ time, Math.random() ]
			};
		}

		response
			.status( 200 )
			.send( JSON.stringify( data ) );
	} // end FUNCTION onRequest()


	// EXPORTS //

	module.exports = onRequest;

})();