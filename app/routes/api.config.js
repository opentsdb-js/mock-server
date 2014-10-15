/**
*
*	ROUTES: api/config
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

	var CONFIG = require( './../params.js' ).CONFIG;


	// ONREQUEST //

	/**
	* FUNCTION: onRequest( request, response )
	*	Config request handler.
	*
	* @param {Object} request - HTTP request object
	* @param {Object} response - HTTP response object
	*/
	function onRequest( request, response ) {
		response
			.status( 200 )
			.send( JSON.stringify( CONFIG ) );
	} // end FUNCTION onRequest()


	// EXPORTS //

	module.exports = onRequest;

})();