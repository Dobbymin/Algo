function solution(arr) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        for (let j = 0; j < number; j++) {
            answer.push(number);
        }
    }
    return answer;
}