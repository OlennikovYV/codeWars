function moveZeros(arr) {
    return [
        ...arr.filter(el => el !== 0),
        ...arr.filter(el => el === 0)
    ];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]