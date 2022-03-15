const os = require('os');
const fs = require('fs');


console.log("Welcome to Nodejs");

console.log(os.cpus().length,os.freemem(),os.version,os.uptime())

fs.readFile('./content.md',(content) => {
    console.log(content);
})

fs.unlink('./content.md',(err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File got deleted");
    }
})



