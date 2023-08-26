// Conditional are going to check a statement, and run code depending on whether that statement is true or false

/*
	Falsy Values: values that, when used in a boolean context, evaluate to "false"

	- false
	- 0
	- '', "", `` (any empty string)
	- null
	- undefined
	- NaN (Not a Number)
*/

let isOn = true;

// if statement
if (isOn == true) {
	// this block of code will run only IF the statement evaluates to true
	console.log('The light is on!');
}

/*
	Structure:
	if (statement to evaluate) {
		code that runs if the statement is true
	}
*/


if (isOn) {
	console.log('The light is on!');
}

isOn = false;

if(isOn == false) {
	console.log('The light has turned off...');
}




/*
	let weather = 85;
	if (weather <= 70) {
		console.log("it's a nice day");
	} else {
		console.log('Maybe not time for a walk.');
	}
*/

let weather = 85;
let rain = false;
if (weather <= 70 || rain) {
	console.log("Wear a jacket");
} else {
	console.log('No jacket required');
}

if (!rain) {
	console.log('Seems to be a clear day');
}

let yourName = 'Blake';

if (yourName == 'Blake'){
	console.log(yourName);
} else {
	console.log('Hello, what is your name?');
}

if (yourName == 'Blake') {
	console.log('Hello, my name is '+ yourName);
} else {
	console.log('Hello, is your name ' + yourName + '?');
}

let grade = 59;

if (grade >= 75) {
	console.log('passing');
} else if (grade >= 60) {
	console.log('please see the instructor or TAs');
} else {
	console.log('failing');
}

/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 35;

if (age >= 25) {
	console.log("You can rent a car!");
} else if (age >= 21) {
	console.log("You can drink!");
} else if (age >= 18) {
	console.log("You can vote!");
} else {
	console.log("Sorry, you're too young to do anything.");
}


// Ternary
let num = 6;

num > 0 ? console.log('Yes') : console.log('No');

// If Statement
if (num > 0) {
	console.log('Yes');
	console.log('Your Number is bigger than 0');
} else {
	console.log('No');
}

let newNum = 7;

newNum == 0 ?
console.log('Zero') :
newNum > 0 ?
console.log('Positive') :
console.log('Negative');

// Switch Statement
let officeCharacter = "Pam";

switch (officeCharacter) {
	// officeCharacter === "Michael" {}
	case "Michael":
		console.log("My minds is going a mile an hour");
		// }
		break;
	case "Dwight":
		console.log("Perfectenschlag");
		break;
	case "Jim":
		console.log("Bears. Beets. Battlestar Galactica.");
		break;
	default:
		console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}


/*
    Write a switch statement that checks a dessert order
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let order = "food";
switch (order) {
	case 'pie':
		console.log('Pie, pie, me oh my!');
		break;
	case 'cake':
		console.log('Cake is great!');
		break;
	case 'ice cream':
		console.log('I scream for ice cream!');
		break;
	default:
		console.log('Not on the menu.');
		break;
}