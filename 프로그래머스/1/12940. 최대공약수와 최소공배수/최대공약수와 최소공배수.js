function solution(n, m) {
    let gcd_num = gcd(n, m);
    let lcm_num = lcm(n, m);
    let answer = [gcd_num, lcm_num];
    return answer;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}