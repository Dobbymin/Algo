function solution(num_list) {
    var answer = 0;
    const arr = num_list.filter((num) => num < 0);
    if (arr.length === 0) {
        return -1;
    } else {
        console.log(arr);
        return num_list.indexOf(arr[0]);
    }
}