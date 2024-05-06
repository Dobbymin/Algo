def solution(num_list):
    answer = 0
    sum_odd = 0
    sum_even = 0
    
    for i in range(0, len(num_list)):
        if i % 2 == 0:
            sum_even += num_list[i]
        else:
            sum_odd += num_list[i]
    
    if sum_even > sum_odd:
        answer = sum_even
    else:
        answer = sum_odd
    return answer