function sumDigPow(a, b) {
    const result = [];
    const checkSumDigPow = num => {
        const arrayDigit = String(num).split('').map(dig => +dig);
        return num === arrayDigit.reduce((sum, dig, pow) => sum + dig ** ++pow, 0);
    }

    for (let i = a; i <= b; i++) {
        if (checkSumDigPow(i))
            result.push(i);
    }

    return result;
}

console.log(sumDigPow(1, 10)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)); //   [89]
console.log(sumDigPow(90, 100)); //  []
console.log(sumDigPow(90, 150)); //  [135]
console.log(sumDigPow(50, 150)); //  [89, 135]
console.log(sumDigPow(10, 150)); //  [89, 135]