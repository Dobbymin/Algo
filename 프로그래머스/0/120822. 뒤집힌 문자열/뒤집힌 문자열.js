function solution(my_string) {
    let arr = Array.from(my_string);
    let reverse = arr.reverse().join('');
    return reverse;
}