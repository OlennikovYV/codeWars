function disariumNumber(n) {
  let disram;

  disram = String(n)
    .split('')
    .reduce((sum, digit, index) => {
      return (sum += (+digit) ** (index + 1));
    }, 0);

  return disram === n ? 'Disarium !!' : 'Not !!';
}

console.log(disariumNumber(89)); // 'Disarium !!'
console.log(disariumNumber(564)); // 'Not !!'
console.log(disariumNumber(1024)); // 'Not !!'
console.log(disariumNumber(135)); // 'Disarium !!'
console.log(disariumNumber(136586)); // 'Not !!'
