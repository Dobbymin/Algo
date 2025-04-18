function solution(n)
{
    var answer = 0;
    
    for(let i = 0; i < String(n).length; i++) {
        answer += Number(String(n)[i]);
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}