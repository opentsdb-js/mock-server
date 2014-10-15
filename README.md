Mock Server
===========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Mock [OpenTSDB](http://opentsdb.net) server.

NOTE: this server is __not__ comprehensive and does __not__ mock all aspects of OpenTSDB. The server mainly mocks the REST API and provides some useful routes when testing response handlers.


### Install

For use in Node.js,

``` bash
$ npm install opentsdb-mock-server
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


### Usage

To use the module,

``` javascript
var createApp = require( 'opentsdb-mock-server' );
```

To create a new mock OpenTSDB,

``` javascript
var db = createServer();
```

The mock OpenTSDB has the following attributes and methods...


#### db.url

The mock OpenTSDB URL endpoint.

``` javascript
console.log( db.url );
```

#### db.query

A mock OpenTSDB HTTP request query URL.

``` javascript
console.log( db.query );
```


#### db.aggregators

Mock OpenTSDB aggregation functions.

``` javascript
console.log( db.aggregators );
// returns [...]
```


#### db.metrics

Mock OpenTSDB metrics.

``` javascript
console.log( db.metrics );
// returns [...]
```


#### db.config

Mock OpenTSDB configuration.

``` javascript
console.log( db.config );
// returns {...}
```


#### db.version

Mock OpenTSDB version information.

``` javascript
console.log( db.version );
// returns {...}
```


#### db.dropcaches

Mock OpenTSDB response to a dropcaches request.

``` javascript
console.log( db.dropcaches );
// returns {...}
```


#### db.createServer( clbk )

Creates a mock OpenTSDB application HTTP server. The provided `callback` is invoked once the server is listening and ready to receive HTTP requests.

``` javascript
var server = db.createServer( function onListen() {
	console.log( '...listening...' );
});
```


### Routes

The application has the following routes...


#### GET /api/query

Mocks the OpenTSDB query API.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.query
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /api/aggregators

Returns the list of `aggregators` supported by the mock OpenTSDB.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/api/aggregators'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /api/suggest

Returns a list of `metrics`.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/api/suggest'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /api/config

Returns a mock OpenTSDB configuration.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/api/config'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /api/version

Returns mock OpenTSDB version information.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/api/version'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /api/dropcaches

Returns a mock OpenTSDB response to a drop cache request.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/api/dropcaches'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /bad_body

Returns an empty body; useful when testing HTTP response handling.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/bad_body'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /bad_json

Returns improperly formatted JSON; useful when testing HTTP response handling.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/bad_json'
}, function onResponse( error, response, body ) {
	try {
		JSON.parse( body );
	} catch ( err ) {
		console.log( err );
	}
});
```



#### GET /no_data

Returns an empty `array`; useful when testing HTTP response handling in the event of no data.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/no_data'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```


#### GET /good_data

Returns a sample successful data response.

``` javascript
var request = require( 'request' );

request({
	'method': 'GET',
	'uri': db.url + '/good_data'
}, function onResponse( error, response, body ) {
	console.log( body );
});
```



## Examples

``` javascript
var createApp = require( 'opentsdb-mock-server' ),
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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/opentsdb-mock-server.svg
[npm-url]: https://npmjs.org/package/opentsdb-mock-server

[travis-image]: http://img.shields.io/travis/opentsdb-js/mock-server/master.svg
[travis-url]: https://travis-ci.org/opentsdb-js/mock-server

[coveralls-image]: https://img.shields.io/coveralls/opentsdb-js/mock-server/master.svg
[coveralls-url]: https://coveralls.io/r/opentsdb-js/mock-server?branch=master

[dependencies-image]: http://img.shields.io/david/opentsdb-js/mock-server.svg
[dependencies-url]: https://david-dm.org/opentsdb-js/mock-server

[dev-dependencies-image]: http://img.shields.io/david/dev/opentsdb-js/mock-server.svg
[dev-dependencies-url]: https://david-dm.org/dev/opentsdb-js/mock-server

[github-issues-image]: http://img.shields.io/github/issues/opentsdb-js/mock-server.svg
[github-issues-url]: https://github.com/opentsdb-js/mock-server/issues