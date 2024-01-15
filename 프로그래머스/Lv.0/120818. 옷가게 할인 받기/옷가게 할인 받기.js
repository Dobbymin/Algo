function solution(price) {
    const TEN = 100000;
    let answer = 0;
    
    if (price >= TEN && price < 3 * TEN) {
        answer = price * 0.95;
    } else if (price >= 3 * TEN && price < 5 * TEN) {
        answer = price * 0.90;
    } else if (price >= 5 * TEN) {
        answer = price * 0.80;
    } else {
        answer = price;
    }
    
    return parseInt(answer);
}