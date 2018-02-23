var http = require("http");

var PORT = 7000;

var PORT1=7500;

function handleRequest(request,response){
	response.end('hello good things about you'+request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT,function(){
	console.log('server started : ', PORT);
})

function handle(request,response){
	response.end('hello BAD things about you'+request.url);
}

var server1 = http.createServer(handle);

server1.listen(PORT1,function(){
	console.log('server started : ', PORT1);
});