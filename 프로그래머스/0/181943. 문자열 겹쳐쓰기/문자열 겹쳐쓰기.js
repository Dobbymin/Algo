function solution(my_string, overwrite_string, s) {
    let string_arr = [...my_string];
    string_arr.splice(s, overwrite_string.length, overwrite_string);
    return string_arr.join('');
}