def solution(s):
    answer = True
    s = s.lower()
    cnt_p, cnt_y = 0, 0
    
    for k in s:
        if k == 'p':
            cnt_p += 1
        elif k == 'y':
            cnt_y += 1
    if cnt_p != cnt_y:
        answer = False
    return answer