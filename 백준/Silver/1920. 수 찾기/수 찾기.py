def binary_search(arr, n):
    start = 0
    end = len(arr) -1
    
    while start <= end:
        mid = (start + end) // 2

        if n == arr[mid]:
            return mid
        elif n > arr[mid]:
            start = mid + 1
        else:
            end = mid - 1

    return -1

import sys
input = sys.stdin.readline

n = int(input())

n_list = sorted(list(map(int, input().split())))

m = int(input())

m_list = list(map(int, input().split()))

for i in m_list:
    if binary_search(n_list, i) == -1:
        print(0)
    else:
        print(1)