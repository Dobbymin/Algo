def solution(num_list):
    result = 1
    total = 0
    for i in num_list:
        result *= i
        total += i
    return 1 if result < total * total else 0
 
