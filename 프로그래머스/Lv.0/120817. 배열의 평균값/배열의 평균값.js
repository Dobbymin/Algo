function solution(numbers) {
    let sum = 0;
    let answer = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    
    return answer = sum / numbers.length;
}