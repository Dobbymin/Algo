def solution(a, b, c):
    score1 = a + b + c
    score2 = score1 * (a ** 2 + b ** 2 + c ** 2)
    score3 = score2 * (a ** 3 + b ** 3 + c ** 3)
    
    if a != b and b != c and c != a:
        return score1
    if a == b and b == c and c == a:
        return score3
    if (a == b and a != c) or (a == c and b != c) or (b == c and a != c):
        return score2

