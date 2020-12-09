var fs = require('fs');

var data = fs.readFileSync('./day3data.txt', 'utf-8');

var input = data.split('\n');
let increment;
let index;

//for Right 3, down 1. 
setIndex(3); //207

// for Right 1, down 1.
// setIndex(1); // 72

// Right 5, down 1.
// setIndex(5) // 90

// Right 7, down 1.
// setIndex(7) // 60

// Right 1, down 2.
// setIndex(1) // 32


function setIndex(indices) {
    increment = indices;
    index = indices;
}


let sum = 0;

const tracker = function (index, dataIndex) {
    let itemArray = input[dataIndex].split('');
    let item = itemArray[index];
    if (index >= input[dataIndex].length) {
        item = itemArray[index % input[dataIndex].length]
    }
    if (item === '#') {
        sum = sum + 1;
    }

}


for (let i = 0; i < input.length; i++) {
    if (i !== 0) {
        tracker(index, i);
        index = index + increment;
    }
}

console.log('---sum--', sum, 60 * 207 * 72 * 33 * 90)

