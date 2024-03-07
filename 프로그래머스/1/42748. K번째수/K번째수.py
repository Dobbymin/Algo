def solution(array, commands):
    answer = []
    arr = []
    for command in commands:
        i,j,k = command
        
        arr = sorted(array[i-1:j])

        answer.append(arr[k-1])
        
    return answer