function solution(num, k) {
    var answer = 0;
    let str_num = String(num);
    let str_k = String(k);
    let result = Number(str_num.indexOf(str_k))
    
    result < 0 ? answer = result : answer = result + 1;
    
    return answer;
}