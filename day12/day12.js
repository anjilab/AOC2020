const fs = require('fs');

const data = fs.readFileSync('./day12.txt', 'utf-8');

const input = data.split('\n');

var east = 0
var west = 0
var north = 0
var south = 0
var shipDirect = 'E'




for (let i = 0; i < input.length; i++) {
    let direction = input[i].split('')[0];
    let units = input[i].split('').slice(1).join('')
    calculateDist(direction, units);
}

function calculateDist(direction, units) {
    console.log(units, direction);

    switch (direction) {
        case 'N':
            console.log('north by', units);
            break;
        case 'S':
            console.log('south by', units);
            break;
        case 'E':
            console.log('east by', units);
            break;
        case 'W':
            console.log('west by', units);
            break;
        case 'L':
            console.log('left by', units);
            break;
        case 'R':
            console.log('roght by', units);
            break;
            break;

        case 'F':
            console.log('forward by', units);
            break;
            break;



    }

}

