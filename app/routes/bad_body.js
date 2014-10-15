/**
*
*	ROUTES: /bad_body
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

	// ONREQUEST //

	/**
	* FUNCTION: onRequest( request, response )
	*	Bad body request handler.
	*
	* @param {Object} request - HTTP request object
	* @param {Object} response - HTTP response object
	*/
	function onRequest( request, response ) {
		response.writeHead( 200 );
		response.end();
	} // end FUNCTION onRequest()


	// EXPORTS //

	module.exports = onRequest;

})();