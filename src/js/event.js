function scramble(str1, str2) {
	str1 = Array
		.from(str1)
		.reduce((acc, el) => {
			acc[el] = (acc[el] || 0) + 1;
			return acc;
		}, {});

	str2 = Array.from(str2);

	for (let i = 0; i < str2.length; i++) {
		if (str1[str2[i]] === 0 || str1[str2[i]] === undefined)
			return false;
		str1[str2[i]]--;
	}

	return true;
}

console.log(scramble('rkqodlw', 'world')); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble('katas', 'steak')); // false
console.log(scramble('scriptjavx', 'javascript')); // false
console.log(scramble('scriptingjava', 'javascript')); // true
console.log(scramble('scriptsjava', 'javascripts')); // true
console.log(scramble('javscripts', 'javascript')); // false
console.log(scramble('jscripts', 'javascript')); // false
console.log(scramble('aabbcamaomsccdd', 'commas')); // true
console.log(scramble('commas', 'commas')); // true
console.log(scramble('sammoc', 'commas')); // true