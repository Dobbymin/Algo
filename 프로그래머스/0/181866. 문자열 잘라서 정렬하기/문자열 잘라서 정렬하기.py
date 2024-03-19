def solution(myString):
    answer = []
    answer = myString.split('x')
    new_answer = [x for x in answer if x]
    return sorted(new_answer)