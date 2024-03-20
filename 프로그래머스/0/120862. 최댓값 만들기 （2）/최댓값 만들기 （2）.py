def solution(numbers):
    pos = 0
    neg = 0
    numbers.sort()
    pos = numbers[0] * numbers[1]
    neg = numbers[-1] * numbers[-2]
    if pos > neg:
        return pos
    else:
        return neg
