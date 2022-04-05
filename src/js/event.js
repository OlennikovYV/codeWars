function zeros(n) {
	let result = 0;

	while (n > 0) {
		n = Math.floor(n / 5);
		result += n;
	}

	return result;
}

console.log(zeros(0)); //  0, "Testing with n = 0"
console.log(zeros(5)); //  1, "Testing with n = 5"
console.log(zeros(6)); //  1, "Testing with n = 6"
console.log(zeros(30)); //  7, "Testing with n = 30"