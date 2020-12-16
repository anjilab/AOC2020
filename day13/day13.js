var timestamp = [1015292]
var validIds = [19, 41, 743, 13, 17, 29, 643, 37, 23];

// part 1 example
// var timestamp = [939]
// var validIds = [7, 13, 59, 31, 19]


//part 1
function callMe(number) {
    let remainder = [];
    for (let i = 0; i < validIds.length; i++) {
        remainder.push(number % validIds[i]);
    }

    console.log(remainder.indexOf(0))
    if (remainder.indexOf(0) === -1) {
        let initialVal = timestamp[0];
        let newVal = initialVal + 1
        timestamp.shift()
        timestamp.push(newVal);
        console.log('------------', timestamp)
        callMe(newVal);
    }
    if (remainder.indexOf(0) !== -1) {
        console.log(timestamp[0])
        console.log('---here--', validIds[remainder.indexOf(0)] * (1015292 - timestamp[0]))
    }

}

callMe(1015292);




