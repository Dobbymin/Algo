def solution(myString, pat):
    answer = 0
    rvs_myString = ''
    
    for k in myString:
        if k == 'A':
            rvs_myString += 'B'
        elif k == 'B':
            rvs_myString += 'A'
    
    if pat in rvs_myString:
        return 1
    else:
        return 0
