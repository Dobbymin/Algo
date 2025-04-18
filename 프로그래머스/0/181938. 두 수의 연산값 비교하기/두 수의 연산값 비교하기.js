const mark = (a, b) => {
    return Number(String(a) + String(b));
}

const multiple = (a, b) => {
    return 2 * a * b;
}

const solution = (a, b) => {
    let markNumber = mark(a, b);
    let multipleNumber = multiple(a, b);
    
    if (markNumber === multipleNumber) {
        return markNumber;
    } else {
        return Math.max(markNumber, multipleNumber);
    }
}