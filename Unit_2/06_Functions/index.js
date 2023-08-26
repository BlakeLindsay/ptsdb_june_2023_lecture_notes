/* 
Functions:
	-a block of code that performs a particular task
	-simplified programs that run a task when *invoked*
*/

// 1     2
function hi() {
	//our block of code
	console.log("HI");
}

/*
Function declaration

1 - keyword, this tells javascript we are making a function
2 - a name for our function, this can be anything we want, followed by parenthesis for parameters
*/

let hey = function hi() {
	console.log("HI");
};

/* 
Function Expression

- the variable "hey" is now representing the function "hi"

Expression vs Declaration:
	expressions do NOT get "hoisted"
	declaration DO get "hoisted"
*/

function hi() {
	console.log("HI");
}

// Invoking the function / AKA "calling" the function
hi();

// Our function does not get invoked if we do not use ()
// hi;

let hello = function hi() {
	console.log("HI");
};

hello();

console.log(hello);
console.log(hello());

// Create a function that when invoked, lists out the numbers 1-10

function counting() {
	//list the numbers from 1 - 10
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

counting();

/* 
Naming Conventions/Naming Styles:

In JavaScript, we use camelCasing as our standard naming convention. However, there are some cases where it can be argued to use PascalCasing

	PascalCasing: the first letter of the first word is capital, and the first letter of each subsequent word is capital

	camelCasing: the first word is all lower case, and the first letter of subsequent words is capital

	kebab-casing: has a hyphen - or dash between each word, all lowercase

	snake_casing: has an underscore _ between each word, all lowercase
*/

let challengeObject = {
	first: "This",
	second: "is",
	third: "really",
	fourth: "cool!",
};

// Given the object print out each value individually using a function

function print(property) {
	console.log(property);
}

for (let i in challengeObject) {
	print(challengeObject[i]);
}

//Parameters & Arguments
function hi(nameInput) {
	console.log(`Hi, ${nameInput}`);
}

hi("Jamiroquai");
hi("Jack Black");
hi(347);

let register = function order(ticket) {
	console.log(`I exchanged my ticket for a ${ticket}`);
};

register("cheese pizza");
register("Taco Pack");

function myName(fName, lName) {
	let fullName = fName + " " + lName;
	console.log(`Hello, my name is ${fullName}`);
}

let firstname;
let lastName = "Wayne";

myName("Bruce", "Wayne");
myName("Wayne", "Bruce");
myName("Bruce");
myName(firstname, lastName);

//Return

function myName(fName, lName) {
	let fullName = fName + " " + lName;
	console.log(`Hello, my name is ${fullName}`);
	return fullName;
}

console.log("myName:", myName("Jerome", "Flaherty"));

function capitalize(word) {
	let capName = "";
	for (let letter in word) {
		if (letter == 0) {
			capName += word[letter].toUpperCase();
		} else {
			capName += word[letter].toLowerCase();
		}
	}

	return capName;
}

console.log(capitalize("pReTzEl"));

/*
  Challenge: Create a function that calculates tip on a bill, assuming a 20% tip. The function should take in a bill amount, and give back the amount of tip you should be paying based on the bill. 

  Stretch Goal: Change the function to take in not only the bill amount, but also what tip percentage you want to pay, then give you back how much money the tip should be
*/

function tip(cost) {
	// let tipNum = cost * 0.2;
	return cost * 0.2;
}

console.log(tip(123));

function tip2(cost, percent) {
	// let tipNum = cost * (percent / 100);
	// return tipNum;
	return cost * (percent / 100);
}

console.log(tip2(1, 15.555).toFixed(2));

// Arrow Function

//Function Expression
let hola = function hi() {
	console.log("HI");
};

// Block Body Arrow Function
let hallo = () => {
	console.log("HI");
};

hallo();

let tipCalculator = (bill, percent) => {
	return bill * (percent / 100);
};

console.log(tipCalculator(100, 20));

//if I have exactly one parameter, I do not NEED parentheses
let greeting = (yourName) => {
	console.log("Hello! " + yourName);
};

greeting("Jerome");

//Block Body
let fiveSquared = () => {
	//I must have {} in order to make a block body arrow function
	//this allows me to write as much code as I want
	let solution = 5 * 5;
	return solution;
};

console.log(fiveSquared());

//Concise Body
//has an *implied* return;
//you can only write one single line of code within a concise body arrow function
let sevenSquared = () => (solution = 7 * 7);

console.log(sevenSquared());

// IIFE
// Immediately Invoked Function Expression
// invoke a function as soon as it is read
() => {
	console.log("hi");
};
