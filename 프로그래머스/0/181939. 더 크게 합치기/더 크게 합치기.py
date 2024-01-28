def solution(a, b):
    A = int(str(a) + str(b))
    B = int(str(b) + str(a))
    return A if A > B else B