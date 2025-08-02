const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const swapCase = (str) => {
    let swap = '';
    
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (char === char.toUpperCase() && char !== char.toLowerCase()){
            swap += char.toLowerCase();
        } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            swap += char.toUpperCase();
        } 
    }
    return swap;
}

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    console.log(swapCase(str));
});