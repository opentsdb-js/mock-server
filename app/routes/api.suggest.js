/**
*
*	ROUTES: api/suggest
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

	var METRICS = require( './../params.js' ).METRICS;


	// ONREQUEST //

	/**
	* FUNCTION: onRequest( request, response )
	*	Suggest request handler.
	*
	* @param {Object} request - HTTP request object
	* @param {Object} response - HTTP response object
	*/
	function onRequest( request, response ) {
		var type = request.query.type,
			max = request.query.max;

		if ( type !== 'metrics' ) {
			response
				.status( 404 )
				.send( 'Resource not found' );
			return;
		}
		response
			.status( 200 )
			.send( JSON.stringify( METRICS ) );
	} // end FUNCTION onRequest()


	// EXPORTS //

	module.exports = onRequest;

})();