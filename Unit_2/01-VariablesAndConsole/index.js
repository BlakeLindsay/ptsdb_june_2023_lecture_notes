//Variables
// will make a single line comment in JavaScript

/*
	Make
	A
	Multi-
	Line
	Comment
*/

/*
	We can create variables using 3 different keywords provided to us:
	1. var
	2. let
	3. const

	var: an older keyword used to define variables. It does run into issues with "scope" and "hoisting", so it is not preferred however many older code bases will use it.

	let: is the same as var, however it does not run into issues with "scope" or "hoisting", which makes it a preferred keyword when defining variables.

	const: short for "constant". this functions the same as "let", however, the value of the variable cannot be changed after initialization

	we **can** make a variable without a keyword, however it will run in to FAR more "scope" and "hoisting" issues than our other variables. Please do not do this :)
*/

let a = 2;

		let     b     =    1;
	//  (1)    (2)   (3)  (4)
	/*
		1. JavaScript keyword to denote the creation of a variable
		2. The name of the variable, which is how we will refer to the value it is storing.
		3. Assignment Operator
		4. Initial value
	*/

	// Variable Declaration
	let x;

	// Variable Initialization
	let y = 10;

	let first = "John ";
	let last = "Doe";

	let full = first + last;
	console.log(full);

	//Examples
	let j;
	console.log("Declaration:",j); //Declaration: undefined - have not given it any value yet

	j = 10;
	console.log("Initialization:",j); // Initialization: 10 - I have now given it a value, which is being displayed

	j = 33;
	console.log("Re-Initialization:",j); // Re-Initialization: 33 - variables made using var or left can be re-initialized, or assigned new values

	let today = "Great!";
	const javaScript = "Wonderful!";
	console.log(today, javaScript); // Great! Wonderful!

	today = "Humid!";
	console.log(today, javaScript); // Humid! Wonderful!

	//javaScript = "Super!"; // Error: cannot re-assign a constant variable after initialization
	console.log(today, javaScript); // cannot change the value of a const


	// Console Object Notes
	console.log("This message is a string");

	let myName = "Jerome";
	console.log("log:", myName);

	console.warn("This is a warning!");

	let warning = "Uh oh";
	console.warn("warn:", warning);

	console.error("This is an error");

	let err = "This one looks real bad!";
	console.error("error:", err);