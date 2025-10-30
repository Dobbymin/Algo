function solution(array, height) {
    
    const high = array.filter((elm) => elm > height);
    return high.length;
}