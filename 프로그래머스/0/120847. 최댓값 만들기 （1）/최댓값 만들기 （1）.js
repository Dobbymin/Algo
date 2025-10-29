function solution(numbers) {
    var answer = 0;
    const sortNumbers = numbers.sort((a, b) => a - b);
    
    answer = sortNumbers[sortNumbers.length-1] * sortNumbers[sortNumbers.length-2];
    return answer;
}