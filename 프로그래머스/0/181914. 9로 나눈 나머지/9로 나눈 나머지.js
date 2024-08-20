function solution(number) {
    let answer = 0;
    const numbers = number.split('');
    let sum_num = 0;
    for (let i = 0; i < number.length; i++) {
        sum_num += Number(numbers[i]);
    }
    answer = sum_num % 9;
    return answer;
}