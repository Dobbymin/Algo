def solution(strArr):
    for i in range(len(strArr)):
        for k in strArr:
            if 'ad' in k:
                strArr.remove(k)
        # if 'ad' in strArr[i]:
        #     strArr.remove(strArr[i])
    
    return strArr