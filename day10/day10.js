var fs = require('fs');

var data = fs.readFileSync('./day10.txt', 'utf-8');

var input = data.split('\n');

var sortedAdapter = input.sort((a, b) => +a - +b);

var deviceBuiltInAdapter = +sortedAdapter[sortedAdapter.length - 1] + 3;

var jolt = 0;
var diff = [3];
var countOf1 = 0;
var countOf3 = 0;

for (let i = 0; i < sortedAdapter.length; i++) {
    if (sortedAdapter[i] - jolt <= 3) {
        diff.push(sortedAdapter[i] - jolt);
        jolt = +sortedAdapter[i];
    }
}


diff.filter((data) => {
    // try this login in reduce function
    if (data === 1) {
        countOf1 = countOf1 + 1;
    }
    if(data === 3){
        countOf3 = countOf3 + 1;
    }
})
console.log(countOf1*countOf3)






