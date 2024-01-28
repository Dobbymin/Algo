def solution(num_list):
    result = 1
    for i in num_list:
        result *= i
    return 1 if result < sum(num_list) ** 2 else 0
 
