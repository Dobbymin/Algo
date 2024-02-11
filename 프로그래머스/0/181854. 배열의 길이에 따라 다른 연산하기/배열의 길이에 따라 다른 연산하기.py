def solution(arr, n):
    d = len(arr) % 2
    answer = []
    for idx, val in enumerate(arr):
        if idx % 2 == d:
            answer.append(val)
        else:
            answer.append(val + n)
    
    return answer
            