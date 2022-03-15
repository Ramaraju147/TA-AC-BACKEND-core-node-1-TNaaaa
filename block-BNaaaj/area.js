const pi = 3.14;

function squareArea(side){
    return side*side;
}

function rectArea(length,breadth){
    return length*breadth;
}

function circleArea(radius){
return pi*(radius*radius);
}

module.exports = {
    squareArea,
    rectArea,
    circleArea
}