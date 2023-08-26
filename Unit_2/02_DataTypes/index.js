// Our Variables will hold a variety of information within them, meaning we need a variety of "types" of information to store

// 7 Different Data Types

//Booleans: true or false
let on = true;
console.log(on);

let off = false;
console.log(off);


// Null: an empty value, this is our container, or variable, but it is empty.
let empty = null;
console.log(empty);


// Undefined: our value for a variable that has not yet been assigned
let undef = undefined;
console.log(undef);

let correct;
console.log(correct);


// Number: they are numbers within JavaScript
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //15 9's
console.log(precise); // 999999999999999

let precision_test = 9999999999999999; //16
console.log(precision_test); // 10000000000000000 rounded

let notQuite = 0.1 + 0.2;
console.log(notQuite); // 0.30000000000000004

let numberAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numberAreHard) // 0.3


// String: represent text, wrapped in either '', "", ``
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `back ticks`;

console.log(stringOne, stringTwo, stringThree);

//Numbers vs Strings
let first = 1234 + 567; //addition
let second = "1234" + '567'; //concatenation

console.log(first); // 1801
console.log(second); // 1234567

// typeof: will tell us what type a value is
console.log(typeof first); // number
console.log(typeof second); // string

// Objects: used to store many values instead of just one
let frodo = {
	// key-value paris
	// key: value
	race: "hobbit", 
	rings: 1,
	cloak: true
};

console.log(frodo);
console.log(typeof frodo);


// Arrays: are containers used to hold lists of values
let list = ["first value", 2, false];
//   1     2         3
/*
	1: the name of the array
	2: [] which denotes an array type
	3: values
*/

console.log(list);
console.log(typeof list); // object
/*
	let list = {
		0: "first value",
		1: 2,
		2: false
	}
*/



// DataType Literals

// String Literal
let car = 'Ford';

// Numer Literal
let december = 12;

// Boolean Literal
let tired = true;

//Object Literal
let soups = {
	a: 'Chicken Noodle',
	b: 'Tomato',
	c: 'Beef and Barley'
};

// Array Literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Special Values
let inf = 5 / 0;
console.log(inf); // Infinity

let notAN = "string" * 317;
console.log(notAN); // NaN