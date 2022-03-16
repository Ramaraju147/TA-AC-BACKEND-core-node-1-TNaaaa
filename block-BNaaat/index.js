const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req,res){
    let parsedUrl = url.parse(req.url);
    console.log(parsedUrl)
    if(parsedUrl.method = 'GET' && parsedUrl.path == '/about'){
        fs.createReadStream('./about.html').pipe(res)
    }
}

server.listen(5555,() => {
    console.log("Server is running on port 5555")
})
