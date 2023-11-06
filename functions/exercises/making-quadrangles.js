function makeLine(length) {
    let theLine = '';

    for (let i=0; i<length; i++) {
        theLine += '#';
    }

    return theLine;
}
// console.log(makeLine(9));

function makeSquare(size) {
    return makeRectangle(size, size);
}
console.log(makeSquare(5));

function makeRectangle(width, height) {
    let theRectangle = '';

    for (let i=0; i<height; i++) {
        theRectangle += makeLine(width);
        if (i < height - 1) {
            theRectangle += '\n';
        }
    }

    return theRectangle;
}
// console.log(makeRectangle(7, 4));