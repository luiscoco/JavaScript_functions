'use strict';

// # while
{
	let i = 0;

	while (i < 10) {
		// prints 0, then 1, then 2
		console.log(i);
		i++;
	}
	// while (true) will be an endless loop
	// loop without increasing i will also be endless
}

{
	let i = 3;
	while (i) {
		// when i will become equal to 0 (that is a falsy value) condition check will return false and the loop will stop
		console.log(i);
		i--;
	}
}

// # do while
{
	// if you want to ensure that body will be executed at least once (even if condition is false)
	let i = 0;
	do {
		console.log(i);
		i++;
	} while (i > 10);
}

// # For
/*

for([variables declaration]; [condition]; [step]) {
  body
}

start
→ condition ? body -> step
→ condition ? body -> step
*/

{
	for (let i = 0; i < 5; i += 2) {
		console.log(i);
	}
	// console.log(i);
}

// # For of
const alphabet = 'ABCDEFG';

// for... of loop works with specific types of values, e.g. strings and arrays
for (const letter of alphabet) {
	console.log(letter);
	if (letter === 'A') {
		break;
	}
}
