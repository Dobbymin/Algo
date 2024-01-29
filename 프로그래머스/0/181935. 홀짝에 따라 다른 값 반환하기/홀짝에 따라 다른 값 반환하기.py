def solution(n):
    odd = 0
    even = 0
    if n % 2 != 0:
        for i in range(0, n + 1):
            # odd += i
            if i % 2 != 0:
                odd += i
        return odd
    else:
        for i in range(0, n + 1):
            if i % 2 == 0:
                even += (i * i)
        return even
