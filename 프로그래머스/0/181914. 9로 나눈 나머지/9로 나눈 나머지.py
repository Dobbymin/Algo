def solution(number):
    num = 0
    
    for i in number:
        num += int(i)
    
    if num % 9 == int(number) % 9:
        return num % 9
