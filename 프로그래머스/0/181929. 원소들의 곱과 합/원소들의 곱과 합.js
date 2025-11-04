function multiple(num_list) {
    let result = 1;
    num_list.forEach((num) => {
        result *= num;
    })
    return result;
}

function add(num_list) {
    let result = 0;
    num_list.forEach((num) => {
        result += num;
    })
    return result;
}

function solution(num_list) {
    var answer = 0;
    return multiple(num_list) < add(num_list) ** 2 ? 1 : 0;
}