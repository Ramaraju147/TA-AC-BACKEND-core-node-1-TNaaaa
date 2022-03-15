const http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.writeHead(201,{
        'Content-Type': 'text/html'
      })

    res.end('<h1>Hello World</h1>')
}

server.listen(4400,() => {
    console.log('Server running on port 4400');
})