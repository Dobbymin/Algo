def solution(n):
    answer = ''
    pattern = '수박'
    if n % 2 == 0:
        return pattern * (n // 2)
    elif n % 2 != 0:
        return pattern * (n // 2) + pattern[:1]
