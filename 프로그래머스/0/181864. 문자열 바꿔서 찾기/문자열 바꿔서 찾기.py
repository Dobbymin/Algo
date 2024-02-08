def solution(myString, pat):
    
    Pat = pat.replace('A', 'C').replace('B', 'A').replace('C', 'B')
    
    return int(Pat in myString)
