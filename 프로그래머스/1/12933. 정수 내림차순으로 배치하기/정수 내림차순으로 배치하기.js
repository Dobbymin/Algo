function solution(n) {
    var answer = 0;
    const num = String(n);
    const arr = [...num];
    
    arr.sort((a, b) => b - a);
    return Number(arr.join(''));
}