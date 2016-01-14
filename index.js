var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('connected');
	socket.on('chat', function(msg){
		io.emit('chat', msg);
		console.log('message: '+ msg);
	});
	socket.on('disconnect',function(){
		console.log('disconnect');
	});
});

http.listen(3000, function(){
	console.log('Listening on *:3000');
});