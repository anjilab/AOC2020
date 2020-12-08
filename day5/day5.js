var fs = require('fs');

var data = fs.readFileSync('./day5.txt', 'utf-8');
var input = data.split('\n')

// var input = 'FBFBBFFRLR';



var highestSeat = [];
var seatArr = []


for (let i = 0; i < input.length; i++) {

    var rowData = input[i].split('').splice(0, 7).join('');
    var columnData = input[i].split('').splice(7, 3).join('');

    let rowVal = calculateRow(rowData)[0];
    let colVal = calculateColumn(columnData)[0];

    let seatId = rowVal * 8 + colVal;
    seatArr.push(seatId);
}

highestSeat = seatArr.sort((a, b) => a - b)[input.length - 1]
// console.dir(seatArr, { 'maxArrayLength': null });

let loopStart = Math.ceil((seatArr.length / 4))
let loopEnd = Math.ceil(seatArr.length / 2) + loopStart
var yourSeatId = []

for (let i = loopStart; i < loopEnd; i++) {
    if (seatArr[i + 1] !== seatArr[i] + 1) {
        yourSeatId.push(seatArr[i + 1], seatArr[i])
    }
}
console.log(yourSeatId);



function calculateRow(data) {
    //B upper half
    //F lower half
    let range = [];
    for (let i = 0; i < 128; i++) {
        range.push(i);
    }
    for (let j = 0; j <= 7; j++) {
        if (data[j] === 'F') {
            range.splice(range.length / 2,);
        }
        if (data[j] === 'B') {
            range = range.splice(range.length - range.length / 2,);
        }
    }
    return range;

}

function calculateColumn(data) {
    // R=Upper half;
    // L= lower half;
    let range = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i <= 2; i++) {
        if (data[i] === 'R') {
            range = range.splice(range.length - range.length / 2,);
        }
        if (data[i] === 'L') {
            range.splice(range.length / 2,);
        }
    }
    return range;
}
