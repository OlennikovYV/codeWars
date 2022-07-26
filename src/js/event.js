function solve(s) {
  return Math.max(...s.match(/[oeaiou]+/g).map(array => array.length));
}

console.log(solve('codewarriors')); // 2
console.log(solve('suoidea')); // 3
console.log(solve('ultrarevolutionariees')); // 3
console.log(solve('strengthlessnesses')); // 1
console.log(solve('cuboideonavicuare')); // 2
console.log(solve('chrononhotonthuooaos')); // 5
console.log(solve('iiihoovaeaaaoougjyaw')); // 8
