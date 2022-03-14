const fs = require('fs');

fs.readFile('./content.md',(err,content) => {
    console.log(err,content)
})

const buff1 = Buffer.alloc(10);

buff1.write("Hello World Alive!")

console.log(buff1);