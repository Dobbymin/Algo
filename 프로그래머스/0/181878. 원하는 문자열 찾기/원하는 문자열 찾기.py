def solution(myString, pat):
    myString_low = myString.lower()
    pat_low = pat.lower()
    
    return 1 if pat_low in myString_low else 0
    
