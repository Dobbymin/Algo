function solution(n) {
    var answer = 0;
    const arr = [...String(n)];
    arr.forEach((num) => {
        answer += Number(num);
    })
    return answer;
}