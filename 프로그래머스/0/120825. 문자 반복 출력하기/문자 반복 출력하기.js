function solution(my_string, n) {
    var answer = [];
    const arr = [...my_string];
    
    arr.forEach((str) => {
        answer.push(str.repeat(n));
    })
    
    return answer.join('');
}