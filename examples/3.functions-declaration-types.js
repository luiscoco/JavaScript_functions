'use strict';

{
	// adv 🕮 <ltc> 73de5d8b-1ab0-4df1-baef-4051b20d74a1.md
	// # Function Declaration
	// no error, because all functions declarations are pre-processed by JS beforehand,
	// as if they were declared at the beginning of the file
	// this 'bubbling up' is called 'hoisting'
	console.log(functionDeclaration);

	function functionDeclaration() {
		console.log('I am a function declaration');
	}

	// # Function Expression
	// behaves like const because is assigned to const

	// cannot access functionExpression before initialization - functionExpression exists, but is not initialized
	// console.log(functionExpression); // uncomment to see the error

	// adv 🕮 <ltc> 4e3b019a-d952-47f7-a90e-0dc1b358a3d0.md

	const functionExpression = function () {
		console.log('I an a function expression');
	};

	/* let fn;
	const phrase = 'hello';

	if (phrase === 'hello') {
		fn = function () {
			console.log('hello');
		};
	} else {
		fn = function () {
			console.log('goodbye');
		};
	} */

	console.log(functionExpression);
}

// adv NFE🕮 <ltc> cadee46d-a3f8-4ce9-a332-fae262729628.md

// @if level !== 'basic'
// # Function names, named function expression
// Function, declared as FE, needs a name to reliably address itself during resursive call, because variable can be re-assigned (though, using const can prevent it)
{
	// Named function expression (NFE);
	let namedFunctionExpression = function functionExpressionName() {
		console.log('I an a named function expression');
		console.log(functionExpressionName);
		console.log(namedFunctionExpression);
	};

	console.log(namedFunctionExpression.name);

	// this name is shown during debugging:
	console.log(namedFunctionExpression);

	/*
	we can address the function by its name only inside the function
  this guarantees that we don't accidentally overwrite it, like variable, to which it is assigned
  */
	// console.log(functionExpressionName); // not defined

	namedFunctionExpression();

	// if name is not set explicitly, it becomes equal to variable name ("context" name)
	const functionExpression = function () {
		console.log('I an a function expression');
	};
	console.log(functionExpression.name);

	function functionDeclaration2() {
		console.log('I an a function declaration');
	}
	console.log(functionDeclaration2.name);
}
// @endif

// # arrow functions
{
	const arrowFn = (arg1, arg2) => {
		return arg1 + arg2;
	};

	// prettier-ignore
	const arrowFn2 = arg1 => arg1++;

	// prettier-ignore
	const arrowFnShorthand = (arg1, arg2) => arg1 + arg2;

	console.log(arrowFnShorthand(1, 2));
}

// # anonymous functions and callbacks

// function is a value, that means that we can pass this value into another function.
// const onCancel = () => console.log('You canceled the request');

// function onCancel() {
// 	console.log('You canceled the request');
// }

const onCancel = function reliableFunctionName() {
	console.log('I an a function expression');
	reliableFunctionName();
};

// Anonymous functions - are declared 'in place'. Used for callbacks
function handleAnswer(answer, onConfirm, onRefuse, onCancel) {
	if (answer) onConfirm();
	else if (answer === null) onCancel();
	else onRefuse();

	console.log(onConfirm); // no name
	console.log(onRefuse);
	console.log(onCancel);
}

handleAnswer(
	true,
	// anonymous arrow function
	() => console.log('You have agreed'),
	() => console.log('You have disagreed'),
	// function myFunction() {
	// 	console.log('You have disagreed');
	// },
	// we can also pass the function, already declared elsewhere
	onCancel
);

// 🕮 <ltc> fe118c8e-087c-44cd-9b9f-073228bd9c4e.md
