function whatday(num) {
  const days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };

  return 1 <= num && num <= 7
    ? days[num]
    : 'Wrong, please enter a number between 1 and 7';
}

console.log(whatday(1)); // 'Sunday'
console.log(whatday(2)); // 'Monday'
console.log(whatday(3)); // 'Tuesday'
console.log(whatday(8)); // 'Wrong, please enter a number between 1 and 7'
console.log(whatday(20)); // 'Wrong, please enter a number between 1 and 7'
