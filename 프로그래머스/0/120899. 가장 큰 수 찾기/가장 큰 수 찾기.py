def solution(array):
    answer = []
    num = 0
    for i in array:
        if num < i:
            num = i
    answer.append(num)
    answer.append(array.index(num))
    return answer