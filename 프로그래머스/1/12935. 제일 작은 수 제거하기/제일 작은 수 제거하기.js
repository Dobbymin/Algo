function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }
    const result = arr.filter((num) => num !== Math.min(...arr))
    return result;
}