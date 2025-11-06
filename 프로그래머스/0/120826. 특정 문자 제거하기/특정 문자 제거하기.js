function solution(my_string, letter) {
    var answer = '';
    const arr = [...my_string].filter((str) => str !== letter);
    return arr.join('');
}