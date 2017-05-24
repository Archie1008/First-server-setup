const http = require('http');

const PORT1 = 7000;

const PORT2 = 7500;

const server1 = http.createServer(function
(request , response) {
    response.end("I'm awesome " + request.url);
});

const server2 = http.createServer(function
(request , response) {
    response.end("You smell " + request.url);
});

server1.listen(PORT1, function(){
    console.log("Server is listening on HTTP://localhost:%s", PORT1);
});

server2.listen(PORT2,function(){
    console.log("Server is listening on HTTP://localhost:%s", PORT2);
});