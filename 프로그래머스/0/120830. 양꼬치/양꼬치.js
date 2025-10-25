function service(n, k) {
    const TEN = 10;
    let bonus = 0;
    
    if (n >= TEN) {
        bonus = n / TEN;
    }
    k = k - Math.floor(bonus);
    return k;
}

function solution(n, k) {
    var answer = 0;
    const sheep = 12000;
    const drink = 2000;
    
    const free = service(n, k);
    
    answer = n * sheep + free * drink;
    return answer;
}