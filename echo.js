var WebSocketServer = require('ws')
	.Server;

var port = 7000;
var wss = new WebSocketServer(
{
	port: port
});

console.log('ws echo server: ' + port);

wss.on('connection', function(ws)
{
	ws.on('message', function(message)
	{
		console.log('received: %s', message);


		ws.send(message);
	});
});
