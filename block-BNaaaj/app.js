const fs = require('fs');
const {circleArea,squareArea,rectArea} = require('./area')

console.log(squareArea(3),circleArea(4),rectArea(2,3));

const buff1 = Buffer.alloc(12);

buff1.write("hello darling");

console.log(buff1.toString())

/* blocking */

fs.readFileSync('./content.md',(err) => {
    console.log(err)
})

/* non blocking */

fs.readFile('./content.md',(err) => {
    console.log(err)
})

