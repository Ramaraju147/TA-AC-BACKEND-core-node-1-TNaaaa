const http = require('http');
const url = require('url');

const server = http.createServer(handleRequest);

function handleRequest(req,res){
    let parsedUrl = url.parse(req.url);
    if(req.method == "GET" && parsedUrl.path == '/'){
        res.end('Welcome to homepage')
    }else if(req.method == "GET" && parsedUrl.path == '/about'){
        res.setHeader('Content-type','text/html')
        res.end('<h1>this is all about NodeJS</h1>')
    }else if(req.method == "POST" && parsedUrl.path == '/about'){
        res.setHeader('Content-type','application/json')
        res.end('{message: this is a post request}')
    }else{
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1>')
    }
}

server.listen(4300, () => {
    console.log('Server stated Running')
})