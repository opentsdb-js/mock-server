var createApp = require( './../app' ),
	request = require( 'request' );

// Create a new mock OpenTSDB application:
var db = createApp();

// Get the mock version:
console.log( db.version );

// Get the mock URL:
console.log( db.url );

// Start the mock server:
var server = db.createServer( function onListen() {
	console.log( '...listening...' );

	request({
		'method': 'GET',
		'uri': db.query
	}, function onResponse( error, response, body ) {
		console.log( body );

		// Close the server:
		server.close();
	});
	
});