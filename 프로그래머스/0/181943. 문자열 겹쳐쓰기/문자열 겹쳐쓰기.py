def solution(my_string, overwrite_string, s):
    str_length = len(my_string[0:s] + overwrite_string)
    answer = my_string[0:s] + overwrite_string + my_string[str_length:]
    return answer