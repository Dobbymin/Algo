def solution(number):
    num_sum = sum(list(map(int, number))) 
    answer = num_sum % 9 
    return answer
