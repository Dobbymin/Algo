function solution(my_string, is_suffix) {
    var answer = '';
    const myStringLength = my_string.length;
    const suffixLength = is_suffix.length;
    for (let i = 0; i < myStringLength; i++) {
        if (i >= (myStringLength - suffixLength)) {
            answer += my_string[i];
        }
    }
    
    if (answer === is_suffix) return 1;
    return 0;
}