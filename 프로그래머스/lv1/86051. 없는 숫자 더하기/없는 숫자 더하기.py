def solution(numbers):
    no_num = 0
    for i in range(0, 10):
        if i not in numbers:
            no_num += i
    
    return no_num