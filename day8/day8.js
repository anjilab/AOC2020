var fs = require('fs');
var data = fs.readFileSync('./day8.txt', 'utf-8');
var start = 0;
var accumulator = 0;
var arr = [];

var count = 0;

let input = data.split('\n');

//part 1
// for (let i = 0; (i < input.length); i++) {
//     let newFormatData = input[start].split(' ');
//     if (newFormatData[0] === 'acc') {
//         arr.push(start);
//     }
//     if([...new Set(arr)].length === arr.length){
//         instruction(newFormatData[0], newFormatData[1]);
//     }
// }

//part2

for (let i = 0; (i < input.length); i++) {
    let newFormatData = input[start].split(' ');
    if (newFormatData[0] === 'acc') {
        arr.push(start);
    }

    if(newFormatData[0] === 'jmp' || newFormatData[0] === 'nop'){
        console.log('----here---',newFormatData)
    }
    if([...new Set(arr)].length === arr.length){
        instruction(newFormatData[0], newFormatData[1]);
    }
}



function instruction(instruct, arg) {
    switch (instruct) {
        case 'nop':
            start = start + 1;
            break;
        case 'acc':
            start = start + 1;
            accumulator = accumulator + +arg;
            break;
        case 'jmp':
            start = start + +arg;
            break;
    }
}

console.log('accumulator ', accumulator);