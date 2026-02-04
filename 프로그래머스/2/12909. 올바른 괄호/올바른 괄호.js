function solution(s){
    let stack = [];
    let arr = [...s];
    
    if (arr[0] === ')') return false;
        
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == '(') stack.push(arr[i]);
        if (arr[i] == ')') stack.pop();
    }
    if (stack.length === 0) return true;
    else if (stack.length !== 0) return false;
   
}