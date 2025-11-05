function solution(my_string) {
    var answer = 0;
    const arr = [...my_string];
    arr.forEach((elm) => {
        if (!Number.isNaN(Number(elm))) {
            answer += Number(elm);
        }
    })
    return answer;
}