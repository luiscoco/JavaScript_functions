'use strict';

// # value return

{
	function sum(a, b) {
		return a + b;
	}

	let result = sum(1, 2);

	console.log(result);

	// if function does not have explicit return statement, it returns undefined.
	// empty return also returns undefined
	function doNothing() {
		return;
	}

	console.log(doNothing());

	console.log(doNothing() === undefined);
}

// # multiple returns and conditionals
{
	{
		function checkAge(age) {
			// if (age >= 18) {
			// 	return true;
			// } else {
			// 	return false;
			// }

			/* else in unnecessary in this case */
			if (age >= 18) {
				return true;
			}
			return false;
		}

		// we use value, returned by function, as a condition in if-else statement
		if (checkAge(12)) {
			console.log('Access granted');
		} else {
			console.log('Access denied');
		}
	}

	{
		function checkAge(age) {
			// if (age >= 18) {
			// 	return true;
			// } else {
			// 	return false;
			// }

			/* else in unnecessary in this case */
			if (age >= 18) {
				return true;
			}
			throw new Error('something went wrong');
		}

		checkAge(16);
		console.log('After the error');
	}

	// @if level !== 'basic'
	{
		// Return can be used to finish function execution;
		function getUserInput() {
			// return prompt('enter something');
			return 25;
		}

		function processInput() {
			const userInput = getUserInput();
			if (userInput === null) return;

			console.log(userInput);
		}

		processInput();
	}
	// @endif
}
