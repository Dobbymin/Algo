function solution(array) {
    var answer = [];
    let max = 0;
    let idx = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
            idx = i;
        }
    }
    answer.push(max);
    answer.push(idx);
    return answer;
}