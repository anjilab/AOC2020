var fs = require('fs');
var data = fs.readFileSync("./day4.txt", "utf-8");

var isValid = 0;
var finalIsValid = 0;

let newArr = data.split(/\n['\n']+/);
let input = [];

for (let i = 0; i < newArr.length; i++) {
    let newString = newArr[i].replace(/\n/g, ' ')
    input.push(newString);
}



const reqdField = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']

input.filter(data => {
    checkString(data)

})






function checkValidData(data) {
    let newFormat = data.split(' ');
    console.log('---for validation---', data);
    var newArr = [];
    for (let i = 0; i < newFormat.length; i++) {
        newArr.push(newFormat[i].split(':'));
        // switch (newFormat[i].split(':')[0]) {
        //     case 'ecl':
        //         console.log('ecl', newFormat[i].split(':')[1]);
        //     case 'pid':
        //         console.log('pid', newFormat[i].split(':')[1]);
        //     case 'eyr':
        //         console.log('eyr', newFormat[i].split(':')[1]);
        //     case 'hcl':
        //         console.log('hcl', newFormat[i].split(':')[1]);
        //     case 'byr':
        //         console.log('byr', newFormat[i].split(':')[1]);
        //     case 'iyr':
        //         console.log('iyr', newFormat[i].split(':')[1]);
        //     case 'hgt':
        //         console.log('hgt', newFormat[i].split(':')[1]);
        // }

    }

    var objectTest = Object.fromEntries(newArr);
    var checkFinalArray = [];
    for (let datas in objectTest) {
        switch (datas) {
            case 'ecl':
                checkFinalArray.push(checkeclValid(objectTest[datas]))
                break;
            case 'pid':
                checkFinalArray.push(checkpidValid(objectTest[datas]))
                break;
            case 'eyr':
                checkFinalArray.push(checkeyrValid(objectTest[datas]))
                break;

            case 'hcl':
                checkFinalArray.push(checkhclValid(objectTest[datas]))
                break;
            case 'byr':
                checkFinalArray.push(checkbyrValid(objectTest[datas]))
                break;
            case 'iyr':
                checkFinalArray.push(checkiyrValid(objectTest[datas]))
                break;
            case 'hgt':
                checkFinalArray.push(checkhgtValid(objectTest[datas]))
                break;
        }
    }
    console.log('-----checkFInal array--', checkFinalArray)



    if (checkFinalArray.every((item) => item === true)) {
        finalIsValid = finalIsValid + 1;
    }






}



function checkString(chunk) {
    let arr = [];
    for (let i = 0; i < reqdField.length; i++) {
        if (chunk.includes(reqdField[i]) || reqdField[i] === 'cid') {
            continue;
        }
        arr.push(chunk);
    }
    if (arr.length === 0) {
        isValid = isValid + 1;
        checkValidData(chunk);
    }
}

console.log('part1',isValid);
console.log('part2',finalIsValid);



function checkbyrValid(val) {
    return val >= 1920 && val <= 2002
}

function checkiyrValid(val) {
    return val >= 2010 && val <= 2020
}

function checkeyrValid(val) {
    return val >= 2020 && val <= 2030
}

function checkhgtValid(val) {
    let value = val.includes('cm') ? +val.split('cm')[0] : val.includes('in') ? +val.split('in')[0] : 0;
    if (val.includes('cm')) {
        return value >= 150 && value <= 193

    }
    if (val.includes('in')) {
        return value >= 58 && value <= 76
    }
    return false;
}

function checkhclValid(val) {
    let constraint = /^\#[a-f0-9]+$/
    if (val.charAt(0) === '#' && val.length === 7) {
        return constraint.test(val);
    }
    return false;
}

function checkeclValid(val) {
    if (val === 'amb' || val === 'blu' || val === 'brn' || val === 'brn' || val === 'gry' || val === 'grn' || val === 'hzl' || val === 'oth') {
        return true;
    }
}

function checkpidValid(val) {
    let constraint = /^\d+$/
    if (val.length === 9) {
        return constraint.test(val)
    }
    return false;
}



// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.


