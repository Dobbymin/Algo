def solution(myString):
    answer = []
    answer = myString.split('x')
    new_answer = [x for x in answer if x]
    new_answer.sort()
    return new_answer