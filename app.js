var http = require('http');
var fs = require('fs')

exports.serverstart = function(port) {
	http.createServer(function (request, response) {
		response.writeHeader(200);
	}).listen(port);
}
exports.htmlServer = function(file, port) {
	http.createServer(function (req, res) {
		res.writeHead(200, {"Content-Type": "text/plain"});
		var index = fs.readFileSync("./index.html");
		res.end(index);

	}).listen(port);
}