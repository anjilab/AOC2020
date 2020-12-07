var fs = require('fs');
var data = fs.readFileSync("./inputday6.txt", "utf-8");

var newArr = data.split(/\n['\n']+/);
var sum = 0;
var noOfQuestionAnsweredYes = 0;


for (let i = 0; i < newArr.length; i++) {
    let newString = newArr[i].replace(/\n/g, '');
    let arrOfString = [];
    arrOfString = [...new Set(newString.split(''))];
    sum = sum + arrOfString.length;
}

for (let i = 0; i < newArr.length; i++) {
    let loop = 0;
    if (newArr[i].includes('\n')) {
        loop = newArr[i].split("\n").length - 1;
    }
    noOfQuestionAnsweredYes = noOfQuestionAnsweredYes + count(newArr[i], loop)

}

function count(str, iterateValue) {
    let newString = str.replace(/\n/g, '');
    let unique = [...new Set(newString.split(''))];
    let repeatedElement = [];
    for (let i = 0; i < unique.length; i++) {
        let count = checkRep(newString, unique.join('')[i]);
        if (count > 1 && iterateValue + 1 === count) {
            repeatedElement.push(unique.join('')[i])
        }
    }
    if (repeatedElement.length === 0 && iterateValue === 0) {
        return unique.length
    }
    return repeatedElement.length;
}

function checkRep(str, char) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count = count + 1;
        }
    }
    return count;
}

console.log(noOfQuestionAnsweredYes)



