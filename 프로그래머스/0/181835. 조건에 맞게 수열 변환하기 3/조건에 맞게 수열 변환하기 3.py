def solution(arr, k):
    answer = []
    for num in arr:
        if k % 2 != 0:
            answer.append(num * k)
        elif k % 2 == 0:
            answer.append(num + k)
    return answer