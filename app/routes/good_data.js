/**
*
*	ROUTES: /good_data
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
	*	Good data request handler.
	*
	* @param {Object} request - HTTP request object
	* @param {Object} response - HTTP response object
	*/
	function onRequest( request, response ) {
		var data = [
			{
				'metric': 'cpu.utilization',
				'tags': {
					'nid': '1234'
				},
				'aggregateTags': [],
				'dps': []
			}
		];
		response
			.status( 200 )
			.send( JSON.stringify( data ) );
	} // end FUNCTION onRequest()


	// EXPORTS //

	module.exports = onRequest;

})();