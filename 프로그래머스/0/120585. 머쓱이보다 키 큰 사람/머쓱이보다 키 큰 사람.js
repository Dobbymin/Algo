function solution(array, height) {
    var answer = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] > height) answer += 1;
    }
    if (answer !== 0) return answer;
    else return 0;
}

