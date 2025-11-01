function solution(s1, s2) {
    var answer = 0;
    s2.forEach((str) => {
        if(s1.includes(str)) {
            answer += 1;
        }
    })
    return answer;
}