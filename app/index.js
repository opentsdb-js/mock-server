/**
*
*	OPENTSDB: mock server
*
*
*	DESCRIPTION:
*		- Mock OpenTSDB server application.
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

	var // Express middleware:
		express = require( 'express' ),

		// Mock server parameters:
		params = require( './params.js' ),

		// Routes:
		routes = require( './routes.js' );


	// APPLICATION //

	/**
	* FUNCTION: App()
	*	App constructor.
	*
	* @constructor
	* @returns {App} App instance
	*/
	function App() {
		if ( !( this instanceof App ) ) {
			return new App();
		}
		// Create an Express application:
		this._app = express();

		// Bind routes to the application:
		routes( this._app );

		return this;
	} // end FUNCTION App()

	/**
	* ATTRIBUTE: url
	*/
	App.prototype.url = params.URL;

	/**
	* ATTRIBUTE: query
	*/
	App.prototype.query = params.QUERY;

	/**
	* ATTRIBUTE: aggregators
	*/
	App.prototype.aggregators = params.AGGREGATORS;

	/**
	* ATTRIBUTE: metrics
	*/
	App.prototype.metrics = params.METRICS;

	/**
	* ATTRIBUTE: config
	*/
	App.prototype.config = params.CONFIG;

	/**
	* ATTRIBUTE: version
	*/
	App.prototype.version = params.VERSION;

	/**
	* ATTRIBUTE: dropcaches
	*/
	App.prototype.dropcaches = params.DROPCACHES;

	/**
	* METHOD: createServer( clbk )
	*	Creates an application server.
	*
	* @param {Function} clbk - callback to invoke once server is ready to receive HTTP requests.
	* @returns {Object} HTTP server
	*/
	App.prototype.createServer = function( clbk ) {
		if ( typeof clbk !== 'function' ) {
			throw new TypeError( 'createServer()::invalid input argument. Must provide a function.' );
		}
		return this._app.listen( params.PORT, clbk );
	}; // end METHOD createServer()

	
	// EXPORTS //

	module.exports = App;

})();