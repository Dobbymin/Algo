function solution(s){
    let answer = true;

    const lowerString = s.toLowerCase();
    
    const countP = lowerString.match(/p/g)?.length
    const countY = lowerString.match(/y/g)?.length
    
    if (countP !== countY) return answer = false

    return answer;
}