'use strict';
// # recursion

// = pow with while loop
function loopPow(x, n) {
	let result = 1;

	while (n > 0) {
		result *= x;
		n--;
	}
	return result;
}
console.log(loopPow(2, 3));

// = pow with for loop
function pow(x, n) {
	let result = 1;
	// multiply the result by x  n times in a loop
	for (let i = 1; i <= n; i++) {
		console.log(i, result);
		result *= x;
	}
	return result;
}
console.log(pow(2, 3));

// = pow with recursion
function recursivePow(x, n) {
	// x<sup>n</sup> = x * x<sup>n-1</sup>

	if (n === 1) {
		// recursion base
		return x;
	} else {
		// recursion step
		return x * recursivePow(x, --n);
		// to do the step, we decrease n by 1 with each call
		// ! otherwise we get endless recursion (base condition will never be met)
	}
}

console.log(recursivePow(2, 3));
