from datetime import datetime
def solution(date1, date2):
    day1 = datetime(date1[0], date1[1], date1[2])
    day2 = datetime(date2[0], date2[1], date2[2])
    
    return 1 if day1 < day2 else 0