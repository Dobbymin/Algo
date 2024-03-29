def solution(x, n):
    answer = []
    arr = [i for i in range(1, n+1)]
    for i in arr:
        answer.append(i * x)
    return answer