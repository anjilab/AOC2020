var input = [0, 3, 6];

var checkingNumber;
var arr = []

if (input.indexOf(input[input.length - 1]) === input.length - 1) {
    checkingNumber = 0;
    arr.push(0)
}

if (checkingNumber.length > 0) {
    checkRep()
}

function checkRep() {
    for(let i =0;i<input.length; i++){
        console.log('here',input.indexOf(checkingNumber));
    }


}