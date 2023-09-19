def solution(num_str):
    num = []
    sum = 0
    for i in range(len(num_str)):
        num.append(int(num_str[i]))
        sum += num[i]
    return sum