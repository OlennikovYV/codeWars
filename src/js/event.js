function specialNumber(n) {
  return /^[0-5]+$/.test(String(n)) ? 'Special!!' : 'NOT!!';
}

console.log(specialNumber(2)); // 'Special!!'
console.log(specialNumber(3)); // 'Special!!'
console.log(specialNumber(6)); // 'NOT!!'
console.log(specialNumber(9)); // 'NOT!!'
console.log(specialNumber(11)); // 'Special!!'
console.log(specialNumber(55)); // 'Special!!'
console.log(specialNumber(26)); // 'NOT!!'
console.log(specialNumber(92)); // 'NOT!!'
console.log(specialNumber(25432)); // 'Special!!'
console.log(specialNumber(2783)); // 'NOT!!'
console.log(specialNumber(40243154225)); // 'Special!!'
