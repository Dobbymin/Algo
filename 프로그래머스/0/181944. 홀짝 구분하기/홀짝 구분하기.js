const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const numberFn = (n) => {
    return (n % 2 == 0 ? console.log(n, 'is even') : console.log(n, 'is odd'))
    
}

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    numberFn(n);
});