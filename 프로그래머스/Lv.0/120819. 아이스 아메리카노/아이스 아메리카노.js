function solution(money) {
    const answer = [];
    let americano = 5500;
    
    answer.push(parseInt(money / americano));
    answer.push(parseInt(money % americano))
    return answer;
}