function getGCD(num1, num2) {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numer3 = numer1 * denom2 + numer2 * denom1;
    let denom3 = denom1 * denom2;
    
    let gcd = getGCD(numer3, denom3);
    
    answer.push(numer3 / gcd);
    answer.push(denom3 / gcd);
    
    
    
    return answer;
}