function solution(money) {
    var answer = [];
    const AMERICANO = 5500;
    answer.push(parseInt(money / AMERICANO));
    answer.push(money % AMERICANO);
    return answer;
}