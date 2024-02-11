def solution(array, height):
    num = 0
    # arr = sorted(array)
    for i in array:
        if i > height:
            num += 1
    if num != 0:
        return num
    else:
        return 0
