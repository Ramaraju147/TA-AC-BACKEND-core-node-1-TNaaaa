const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.method,req.url);
    if(req.method == 'GET' && req.url == '/'){
        res.setHeader('Content-type','text/html')
        fs.createReadStream('../../index.html').pipe(res)
    }else if (req.method == 'GET' && req.url == '/about'){
        res.setHeader('Content-type','text/html')
        fs.createReadStream('../../about.html').pipe(res)
    }

    if(req.url.split(".").pop() === 'css'){
        res.setHeader('Conten-type','text/css')
        fs.readFile("../.."+req.url,(err,content) => {
            console.log("../.."+req.url,content)
            res.end(content)
        })
    }

    if(req.url.split(".").pop() === 'png'){
        res.setHeader('Conten-type','image/png')
        fs.readFile("../.."+req.url,(err,content) => {
            console.log("../.."+req.url,content)
            res.end(content)
        })
    }
}

server.listen('4000',() => {
    console.log('Server is listening on port 4000')
})