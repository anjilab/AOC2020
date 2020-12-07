var fs = require('fs');
const { type } = require('os');
const { types } = require('util');
var data = fs.readFileSync("./day7eg.txt", "utf-8");

var typesOfBag = data.split('\n');
var count = 0;

var word = ['shiny gold bag'];
var recuringWord = [];


// for (let i = 0; i < typesOfBag.length; i++) {
//     if (typesOfBag[i].includes(word[0])) {
//         // checkNoOfShinyBag(typesOfBag[i]);
//         let returnedValue = checkNoOfShinyBag(typesOfBag[i])

//         if (returnedValue) {
//             console.log('------------------', returnedValue);
//             recuringWord.push(returnedValue)
//         }
//     }
// }

function checkNoOfShinyBag(text, checkingWord = 'shiny gold bags ') {
    let coloredArr = text.split('contain');

    if (coloredArr[0] !== checkingWord) {
        // console.log('----------------------',coloredArr[0])
        count = count + 1;
        return coloredArr[0];
    }
    return false;

}



function recursion() {
    let checkWord = recuringWord.length === 0 ? word[0] : '';
    for (let j = 0; j <= recuringWord.length; j++) {
        if (recuringWord.length > 0) {
            checkWord = recuringWord[j - 1]
        }
        for (let i = 0; i < typesOfBag.length; i++) {
            typesOfBag[i].includes(checkWord) && console.log('---heree--', i,checkWord, typesOfBag[i], typesOfBag[i].includes(checkWord))
            if (typesOfBag[i].includes(checkWord)) {
                // checkNoOfShinyBag(typesOfBag[i]);
                let returnedValue = checkNoOfShinyBag(typesOfBag[i])
                if (recuringWord.indexOf(returnedValue) === -1 && returnedValue) {
                    // console.log('here',returnedValue)
                    recuringWord.push(returnedValue)
                }
            }
        }
    }
}
recursion();

console.log('-----------', count);

