def solution(my_string):
    answer = ''
    vowel = 'iaeou'
    
    for i in my_string:
        if i not in vowel:
            answer += i
    return answer