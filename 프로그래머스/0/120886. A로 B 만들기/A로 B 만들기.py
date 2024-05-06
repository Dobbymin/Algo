def solution(before, after):
    before_num = 0
    after_num = 0
    answer = 0
    
    for s in before:
        before_num += ord(s)
    
    for s in after:
        after_num += ord(s)
    
    return int(before_num == after_num)