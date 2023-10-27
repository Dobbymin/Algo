function solution(numbers) {
    numbers.sort((a, b) => a - b)
    //let answer = number[number.length - 2] * number[number.length - 1]
    
    return numbers[numbers.length - 2] * numbers[numbers.length - 1];
}