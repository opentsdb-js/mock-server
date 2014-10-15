/**
*
*	SERVER: routes
*
*
*	DESCRIPTION:
*		- Binds routes to the application.
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

	// MIDDLEWARE //

	var // Valid routes:
		query = require( './routes/api.query.js' ),
		aggregators = require( './routes/api.aggregators.js' ),
		suggest = require( './routes/api.suggest.js' ),
		config = require( './routes/api.config.js' ),
		version = require( './routes/api.version.js' ),
		dropcaches = require( './routes/api.dropcaches.js' ),

		// Misc routes:
		badBody = require( './routes/bad_body.js' ),
		badJSON = require( './routes/bad_json.js' ),
		noData = require( './routes/no_data.js' ),
		goodData = require( './routes/good_data.js' );


	// ROUTES //

	/**
	* FUNCTION: routes( app )
	*	Binds routes to an application.
	*
	* @param {Function} app - Express application
	*/
	function routes( app ) {

		// Valid routes:
		app.get( '/api/query', query );
		app.get( '/api/aggregators', aggregators );
		app.get( '/api/suggest', suggest );
		app.get( '/api/config', config );
		app.get( '/api/version', version );
		app.get( '/api/dropcaches', dropcaches );

		// Misc routes:
		app.get( '/bad_body', badBody );
		app.get( '/bad_json', badJSON );
		app.get( '/no_data', noData );
		app.get( '/good_data', goodData );

	} // end FUNCTION routes()


	// EXPORTS //

	module.exports = routes;

})();