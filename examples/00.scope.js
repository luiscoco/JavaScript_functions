'use strict';

// If you try to use let/const variable before it' is declared, you'll get Reference error:  cannot access 'x' before initialization;
// Initialization happens automatically when code execution reaches variable declaration (first it is assigned an 'undefined' value, then you can assign your own value with =).
// So this error means that you can't access the variable before you declare it

// console.log(x); // uncomment to see the error
// const x = 'x';

// console.log(_var);
// var _var = 12;

// if you try to access the variable that is not declared at all, you'll get 'is not defined' error
// console.log(unexistingVariable); // uncomment to see the error

// visibility of 'let' and' const' variables is limited by { } blocks

{
	const a = 'a';
}

{
	const a = 'b';
}

// # const
{
	const outer = 'outer';

	{
		const inner = 'inner';

		console.log(outer);
		console.log(inner);
		// we have access to variables both from inner and outer blocks (scopes)
	}

	console.log(outer);
	// from outer scope, we cannot access variable, declared in inner scope. It's visibility is restricted to {}, or 'block-scoped'.
	// if you try to console.log it you'll have the syntax error and javascript execution will stop (see Quokka icons)
	// console.log(inner); // uncomment this line to see the error
}

// # let
{
	let outer;

	{
		let inner;

		console.log(outer);
		console.log(inner);
	}

	console.log(outer);
	// the same error will be for 'let' variables.
	// console.log(inner); // uncomment this line to see the error
}

// # shadowing
{
	const a = 'a';
	// const a = 'b'; // Error: You cannot re-declare variable in the same scope
	console.log(a);

	{
		// const a = 'b'; // but you can do it in the inner scope
		console.log(a);

		// variable from the inner scope will override ('shadow') the variable from the outer scope.
	}
	console.log(a); // in outer scope it's still 'a'
}

// adv var 🕮 <ltc> 1b36de62-1485-4440-ba30-809167ae70bf.md
