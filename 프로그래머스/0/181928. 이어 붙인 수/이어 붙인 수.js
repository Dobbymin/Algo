function solution(num_list) {
    const odd_arr = num_list.filter((num) => num % 2 !== 0);
    const even_arr = num_list.filter((num) => num % 2 === 0);
    const odd_str = odd_arr.join('');
    const even_str = even_arr.join('');
    const answer = Number(odd_str) + Number(even_str); 
    return answer;
}