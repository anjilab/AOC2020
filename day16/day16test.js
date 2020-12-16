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
var depLocation = [];
var arrLocation = [];
var depStation = [];
var arrStation = [];
var depplatform = [];
var arrplatform = [];
var depTrack = [];
var arrTrack = [];
var depDate = [];
var depTime = [];
var duration = [];
var price = [];
var route = [];
var train = [];
var type = [];
var wagon = [];
var zone = [];




// var nearbyTickets = [7, 3, 47, 40, 4, 50, 55, 2, 20, 38, 6, 12];

var inValidTickets = [];


for (let i = 27; i <= 437; i++) {
    classBus.push(i)
}

for (let i = 452; i <= 972; i++) {
    classBus.push(i)
}

for (let i = 36; i <= 59; i++) {
    row.push(i)
}

for (let i = 73; i <= 974; i++) {
    row.push(i)
}

for (let i = 39; i <= 423; i++) {
    seat.push(i)
}

for (let i = 431; i <= 974; i++) {
    seat.push(i)
}


function formArray(arrayName, from, to) {
    for (let i = from; i <= to; i++) {
        arrayName.push(i);
    }
}




formArray(depLocation, 30, 828)
formArray(depLocation, 839, 971)

formArray(arrLocation, 28, 779)
formArray(arrLocation, 352, 958)

formArray(depDate, 48, 190)
formArray(depDate, 196, 957)
formArray(depplatform, 39, 905)
formArray(depplatform, 921, 968)

formArray(depTime, 29, 483)
formArray(depTime, 491, 963)

formArray(depStation, 38, 339)
formArray(depStation, 352, 958)

formArray(depTrack, 36, 570)
formArray(depTrack, 586, 972)


formArray(arrStation, 27, 221)
formArray(arrStation, 238, 966)

formArray(arrplatform, 28, 732)
formArray(arrplatform, 741, 963)

formArray(arrTrack, 41, 752)
formArray(arrTrack, 767, 967)

formArray(duration, 38, 393)
formArray(duration, 107, 958)

formArray(price, 36, 196)
formArray(price, 213, 974)

formArray(route, 48, 858)
formArray(route, 880, 956)

formArray(train, 38, 499)
formArray(train, 518, 958)

formArray(type, 45, 562)
formArray(type, 569, 961)

formArray(wagon, 28, 161)
formArray(wagon, 171, 959)

formArray(zone, 44, 75)
formArray(zone, 83, 964)



function checkingClass(ticket) {
    return classBus.indexOf(+ticket) !== -1
}

function checkingSeat(ticket) {
    return seat.indexOf(+ticket) !== -1
}

function checkingRow(ticket) {
    return row.indexOf(+ticket) !== -1
};



var fields = {
    depLocation,
    arrLocation,
    depStation,
    arrStation,
    depplatform,
    arrplatform,
    depTrack,
    arrTrack,
    depDate,
    depTime,
    duration,
    price,
    route,
    train,
    type,
    wagon,
    zone
}

function checkFields(ticket, arr) {
    return fields[arr].indexOf(+ticket) !== -1

}

for (let i = 0; i < nearbyTickets.length; i++) {
    if (!checkingClass(nearbyTickets[i])) {
        if (!checkingSeat(nearbyTickets[i])) {
            if (!checkingRow(nearbyTickets[i])) {
                console.log('for before other field', nearbyTickets[i])
                for (let d in fields) {
                    // console.log('for other feilds',d,checkFields(nearbyTickets[i], d))

                    //    if(checkFields(nearbyTickets[i], d)){
                    //        console.log('----here inisde--',checkFields(nearbyTickets[i], d),nearbyTickets[i])
                    //     //    continue;
                    //    }
                    //    console.log('-------------here-----')
                    // inValidTickets.push(nearbyTickets[i])
                }

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