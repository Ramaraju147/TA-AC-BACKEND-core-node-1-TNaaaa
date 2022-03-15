const http = require('http');

const server = http.createServer(handleRequests);

function handleRequests(req,res){
    return res.end('Welcome');
}

server.listen(3000,()=>{
    console.log('Server Listening on port 3000')
})