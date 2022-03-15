const http = require('http');

const server = http.createServer(handleRequests);

function handleRequests(req,res){
console.log(req.headers,req.url);
res.end('Hello World');
}

server.listen(4000,()=>{
    console.log("server is listening on 4000")
})