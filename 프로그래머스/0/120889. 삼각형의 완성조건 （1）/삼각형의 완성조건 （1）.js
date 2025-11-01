function solution(sides) {
    var answer = 0;
    const arr = sides.sort((a, b) => (a - b));
    console.log(arr);
    if (arr[0] + arr[1] > arr[2]) {
        return 1;
    } else {
        return 2;
    }
}