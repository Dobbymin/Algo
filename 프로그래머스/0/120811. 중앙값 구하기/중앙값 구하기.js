function solution(array) {
    var answer = 0;
    let newArray = array.sort((a,b) => a-b);
    let mid = Math.round(array.length / 2) - 1;
    return newArray[mid];
}