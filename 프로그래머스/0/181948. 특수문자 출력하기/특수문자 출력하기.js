const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log('!@#$%^&*(\\\'\"<>?:;');
});