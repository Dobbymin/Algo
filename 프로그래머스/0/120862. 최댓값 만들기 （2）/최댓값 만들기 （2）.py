def solution(numbers):
    num = 0
    count = 0
    answer = 0
    neg_num = 0
    for i in numbers:
        if i < 0:
            count += 1
                       
    numbers.sort()
    num = numbers[-1] * numbers[-2]
    
    if count > 1:
        neg_num = numbers[0] * numbers[1]
        if neg_num > num:
            answer = neg_num
        else:
            answer = num
    else:
        answer = num
    return answer