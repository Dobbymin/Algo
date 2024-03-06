def solution(my_string, indices):
    answer = ''
    str = []
    
    for i in range(len(my_string)):
        if i not in indices:
            str.append(i)
            
    for i in str:
        answer += my_string[i]
        
    return answer
    