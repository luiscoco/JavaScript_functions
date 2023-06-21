'use strict';

// # functions basic syntax
{
	function showMessage() {
		console.log('Hello world!');
	}

	showMessage(); // we call our function using round brackets after the function name, this executes it

	showMessage(); // we can do it many times
}
// 🕮 <ltc> a72d6069-7358-4d75-b4d4-7ecccf84730f.md

{
	/* we can pass information into the function
	function can have parameters (listed in parentheses in function declaration)
	In fact parameters are declarations of function's local variables, that are automatically assigned the values, when function is called, depending on what values we pass during the call.
	when calling the function, we pass arguments inside the round brackets, this arguments (values) become the values of function parameters */
	function showMessage(message) {
		console.log(message);
	}

	showMessage('Hello World!');
}

// # variables visibility and side-effects
{
	// Variables, that are declared inside the function (local variables) are not visible from the outside
	function sayHello() {
		let message = 'Hello World!'; // local variable
		console.log(message);
	}

	sayHello();
	// console.log(message); // Error: message is not defined

	/* Variables declared outside of function, are visible inside it. Function can change them
	If function changes variables in 'outer' scope, is is called function's side-effect. It is not recommended to do so. */

	let userName = 'John';

	function greetUser(userName) {
		// userName = 'Peter'; // change external variable value
		console.log(`Hello ${userName}`);
	}

	console.log(userName);

	greetUser();

	console.log(userName);
}

{
	// In fact the assignment  parameter = argument  happens
	const arg = 1;

	function test(param, param1, param2) {
		console.log(param);
	}

	test(arg, 3, 5);
}

// # default parameters
{
	// we can assign default values to parameters, that will become their values if nothing was passed as an argrument
	function test(param = 2) {
		console.log(param);

		// const a = param ?? 2;
		// console.log(a);
	}

	test(null);
}

// mid 🕮 <ltc> 331efeac-fb8d-4bab-bb62-263d6bf1b548.md
