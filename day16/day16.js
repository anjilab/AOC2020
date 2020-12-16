var fs = require('fs');

var nearbyTicketsData = fs.readFileSync('./day16input.txt', 'utf-8');
var ticketInput = nearbyTicketsData.split('\n');


var test = [];
ticketInput.map((data) => {
    test.push(data.split(','))
})

var nearbyTickets = [].concat.apply([], test);

var classBus = [];
var row = [];
var seat = [];

var inValidTickets = [];


for (let i = 27; i <= 437; i++) {
    classBus.push(i)
}

function formArray(arrayName, from, to) {
    for (let i = from; i <= to; i++) {
        arrayName.push(i);
    }
}




formArray(classBus, 27, 437)
formArray(classBus, 452, 972)

formArray(row, 36  , 59)
formArray(row, 73, 974)

formArray(seat, 39, 423)
formArray(seat, 431, 974)

function checkingClass(ticket) {
    return classBus.indexOf(+ticket) !== -1
}

function checkingSeat(ticket) {
    return seat.indexOf(+ticket) !== -1
}

function checkingRow(ticket) {
    return row.indexOf(+ticket) !== -1
};



for (let i = 0; i < nearbyTickets.length; i++) {
    if (!checkingClass(nearbyTickets[i])) {
        if (!checkingSeat(nearbyTickets[i])) {
            if (!checkingRow(nearbyTickets[i])) {
                inValidTickets.push(nearbyTickets[i])
            }
        }
    }
}


var sum = 0;

inValidTickets.map((data) => {
    sum = sum + +data;
    
})
console.log('--------------', inValidTickets,sum)