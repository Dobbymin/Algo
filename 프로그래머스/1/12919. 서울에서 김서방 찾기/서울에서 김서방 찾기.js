function solution(seoul) {
    let answer = '';
    let position = 0;
    
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            position = i;
        }
    }
    
    answer = `김서방은 ${position}에 있다`;
    return answer;
}