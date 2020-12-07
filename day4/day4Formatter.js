var fs = require('fs');
var data = fs.readFileSync("./day4.txt", "utf-8");
var readline = require('readline');

// const readInterface = readline.createInterface({
//     input: fs.createReadStream("./day4.txt"),
//     output: process.stdout,
//     console: false
// });

// readInterface.on('line', function(line) {
//     // console.log('here lines are',line);
// });

// console.log(data.split(/\n['\n']+/))

let newArr = data.split(/\n['\n']+/);
let formattedArr = [];

for(let i=0; i<newArr.length;i++){
    console.log('here',newArr[i])
    let newString = newArr[i].replace(/\n/g, ' ')
    formattedArr.push(newString);
}

console.log(formattedArr)


