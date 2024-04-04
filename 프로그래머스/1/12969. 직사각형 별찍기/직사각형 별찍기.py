import sys
input = sys.stdin.readline

a, b = map(int, input().split())

for i in range(b):
    print("*" * a)