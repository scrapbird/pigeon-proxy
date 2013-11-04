// Simple http routing proxy

// modules
var http = require('http');
var httpProxy = require('http-proxy');

// create an instance of the routing proxy
var proxy = new httpProxy.RoutingProxy();

// get configuration

http.createServer(function (req, res) {
	var targetHost = 'localhost';
	var targetPort = 0;

	// decide which server to route to
	if (req.headers.host.indexOf('devit.co') !== -1) {
		targetPort = 8081;
	} else if (req.headers.host.indexOf('pigeon.peerspeak.net') !== -1) {
		targetPort = 8080;
	}

	proxy.proxyRequest(req, res, {
		host: 'localhost',
		port: targetPort
	});

}).listen(80);
