/* 
	Arrays
	- Denoted with Square Brackets[]
	-indexed, with that index starting at 0
*/

const list = ["milk", "bread", "chicken", "coffee"];

console.log(list);
console.log(list[2]); // chicken
console.log(list.length); // 4

// list = []
console.log("before", list[0]);
list[0] = "chocolate milk";
console.log("after", list[0]);

// Storing Data Types
let kitchenDrawer = [
	"Scissors",
	12,
	true,
	"Batteries",
	["milk", "bread", "chicken", "coffee"],
];

/* let drawerList = kitchenDrawer[4];

console.log(drawerList[3]);*/

console.log(kitchenDrawer[4][3]);

console.log(typeof kitchenDrawer); // object
console.log(kitchenDrawer instanceof Array); // true -> this is how we can check if something's type is array

//Array Methods
let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// a method is a function that is part of an object, and is accessed using dot notation
// most familiar to us would be the log method on the console object console.log()
console.log(food);

// push - add item to the end of an array, returns new length
food.push("Pizza", "Hotdog");
// food.push('Hotdog');
console.log("push:", food);

// pop - remove information from the end of an array
let oldFood = food.pop();
console.log("pop:", food);
console.log("old food:", oldFood);

// shift - remove the first item in an array, returning the value of that item
let first = food.shift();
console.log(first);
console.log("shift:", food);

// unshift - add an item to the beginning of an array
food.unshift("Pumpkin pie");
console.log("unshift:", food);

// splice - allows us to insert or remove information as we desire, using 3 different arguments

food.splice(2, 1, "Tacos");
console.log("splice:", food);
// Just remove "Hotdog"
food.splice(food.length - 2, 1);
console.log("post-slice:", food);

food.splice(3, 0, "Jerome's Pizza Party");
console.log("party time:", food);

// toString - returns the array as a string
console.log(food.toString());

// filter and includes methods

let fruits = ["apple", "pear", "mango", "orange", "pineapple"];

// filter - allow us to only grab items from an array that match certain conditions, returning us a new array
const filteredFruit = fruits.filter((fruit) => {
	// if my fruit is not mango, this is true
	let result = fruit !== "mango";

	// only if my returned value is true, does the item get added to the new array
	return result;
});

// my origional array ahs not been changed
console.log(fruits);
console.log(filteredFruit);

let fruit1 = "pineapplepen";
// includes IS case-sensitive
console.log(fruit1.includes("apple"));

// only includes fruit that contain "apple"
const doubleFilteredFruit = fruits.filter((fruit) => fruit.includes("apple"));
console.log(doubleFilteredFruit);

//not contain ANY fruit that include "apple"
const tripleFilteredFruit = fruits.filter((fruit) => !fruit.includes("apple"));
console.log(tripleFilteredFruit, "\n");
// concise body

/*
  Given the current Array, add three new movies, with their category being either "Horror" or "Action". Then, create 2 new arrays, one which only contains the Horror movies, and one which only contains the Action movies. Lastly, print out each array on their own lines in the console.
*/

const movies = [
	{
		name: "Face/Off",
		category: "Action",
	},
	{
		name: "Get Out",
		category: "Horror",
	},
];

movies.unshift({
	name: "Saw",
	category: "Horror",
});

movies.splice(2, 0, {
	name: "Skinamarink",
	category: "Horror",
});

movies.push({
	name: "Spider-Man 2",
	category: "Action",
});

console.log("base movies:", movies);

const horrorMovies = movies.filter(
	(movie) =>
		// let result = movie["category"] === "Horror";
		// return result;
		movie["category"] === "Horror"
);

console.log("horror movies:", horrorMovies);

const actionMovies = movies.filter((movie) => {
	let result = movie["category"] === "Action";
	return result;
});

console.log("action movies:", actionMovies);

// Callback Functions
// a callback function is a function which is "called", or invoked, inside of another function. This is typically done by passing a function as an argument.

const newMovies = [
	{ name: "Face/Off", category: "Action" },
	{ name: "Get Out", category: "Horror" },
	{ name: "28 Days Later", category: "Horror" },
	{ name: "John Wick", category: "Action" },
	{ name: "Barbarian", category: "Horror" },
];

// function checkMovieCategory(movie) {
// 	if (movie.category == 'Action') {
// 		console.log(movie.name);
// 		return movie.name;
// 	}
// }

let checkMovieCategory = movie => {
	if (movie.category === 'Action') {
		console.log(movie.name);
		return movie.name;
	}
}

function filter(exampleCallback) {
	for (let i = 0; i < newMovies.length; i++) {
		// I might not want to just print out my movie object every time I run this function
		// console.log(newMovies[i]);
		// Maybe I just want the name sometimes
		exampleCallback(newMovies[i]);
	}
};

// filter(checkMovieCategory);

// filter(function(movie) {
// 	if (movie.category === 'Action') {
// 		console.log(movie.name);
// 		return movie.name;
// 	}
// });

filter(console.log);

// .find method

let tmnt = [
	'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'April'
];

let character = 'Leo';

function search(target) {
	return target === character;
};

// use the .find() method to search an array for a value.
// the .find method does take a callback function to run on each value. in this case, we are checking for the name 'Leo'
console.log('Find:', tmnt.find(search)); // Leo

character = 'Baxter';
// console.log('Baxter:', tmnt.find(search)); // undefined
console.log('Baxter:', tmnt.find(target => target ===character)); // undefined

//.forEach method
// for Each method is going to perform the same task on each element of an array. this will not modify the original array

let newFoodList = [
	'apple', 'pear', 'cheese', 'peach', 'pizza'
];

for(let i = 0; i < newFoodList.length; i++) {
	console.log(newFoodList[i]);
}

// forEach method
newFoodList.forEach(food => console.log('forEach:', food));
// .forEach() method does NOT return ANY values, it simply runs the function provided on each element of the array.
console.log('Double New Food:', doubleNewFood);


// .map method
// loop over an array, and perform a task on each item within it
let numbers = [1, 2, 3, 4, 5];

// numbers.map(num => console.log(num ** 2));
// UNLIKE .forEach() method, .map() method DOES return a value each time it runs the function. In this case, console.log does not return a value, so we get "undefined" as our information in a new array from the .map() method
// let exampleNumbers = numbers.map(num => console.log(num ** 2));
let exampleNumbers = numbers.map(num => num ** 2);
console.log('exampleNumbers:', exampleNumbers);

// DESTRUCTURING
/* 
	Array destructuring allows us to unpack values from arrays, or even properties from objects, into distinct variables
	
	Destructuring syntax looks very similar to array literals, but is on the LEFT side of the assignment operator (=)
*/

let fullName = ['Jerome', 'Flaherty'];
/* 
let firstName = fullName[0]; // assign the first index of fullName to firstName
let lastName = fullName[1];

console.log('first:', firstName);
console.log('last:', lastName); */

let [firstName, lastName] = fullName; // Destructuring an array
// let [firstName] = fullName; // just gets the first one
// let [,lastName] = fullName; // just gets the second one

console.log('first:', firstName);
console.log('last:', lastName);

// SPREAD OPERATOR
/* 
	the spread operator is going to take values from an array, and "spread" them out, giving us a list of each value individually. This is NOT given to us as an array, rather it is each value independently
*/

let characterName = ['Robert', 'Downey', 'Jr.'];

console.log(characterName);
console.log(...characterName); // spread operator
// console.log('Robert', 'Downey', 'Jr.'); // this is the result of that spread operator

// by wrapping the spread operator in squar brackets, we can create a new array containing each ssame value from an old array. This will avoid having duplicate reference issues
let ironMan = [...characterName];

characterName[0] = 'Tony';

console.log('iron man:', ironMan);

/* 
	Using this example 
	let numberTest = 112;
	let fullName = ['Jerome', 'flaherty'];
	let newFullName = fullName;
	
	let firstName = fullName[0];
	-----------------------------
	VARIABLES
	NAME VALUE
	firstName 'Jerome'
	numberTest 112
	fullName FIRST_BUFFER
	newFullName FIRST_BUFFER
	
	-------------------
	FIRST_BUFFER
	POSITION VALUE
	0 'jerome'
	1 'Flaherty'
*/

// REST SYNTAX
// when we destructure an array, sometimes we only want some information, and don't really mind keeping the rest in an array. This is where Rest Syntax comes in useful.

let uprightStaff = ['Jerome', 'Ian', 'Conor'];
const [instructor, ...learningAssistant] = uprightStaff;
// Rest Syntax will add the remaining items in the array ALL to the final variable as a new array. rest syntax MUST be the FINAL item within a destructuring.
// [...instructor] = uprightStaff; //makes a new array copy

console.log(instructor);
console.log(learningAssistant);

/* 
  ? Given the arrays `numArray` and `fizzBuzzArray`:
    * Add all numbers from 1 - 100 to the `numArray` programatically
      * (this means you should not be typing in each number into the array variable)
    * check each number, and:
        * Multiples of 3 will say "Fizz" in `fizzBuzzArray`
        * Multiples of 5 will say "Buzz" in `fizzBuzzArray`
        * Multiples of BOTH 3 and 5 will say "FizzBuzz" in `fizzBuzzArray
    
  ! Finally, print out the fizzBuzzArray value
*/

// let numArray = [];
// let fizzBuzzArray = [];

// // your code here

// for (let i = 1; i <= 100; i++) {
// 	numArray.push(i);
// 	let word = "";
// 	if (i % 3 == 0)
// 		word += "Fizz";
// 	if (i % 5 == 0)
// 		word +="Buzz";
// 	fizzBuzzArray.push(word);
// }

// console.log(numArray);
// console.log(fizzBuzzArray);

let numArray = [];
let fizzBuzzArray = [];

for (let x = 1; x <= 100; x++) numArray.push(x);

numArray.forEach(function (number) {
	if (number % 15 === 0)
		fizzBuzzArray.push('FizzBuzz');
	else if (number % 3 === 0) 
		fizzBuzzArray.push('Fizz');
	else if (number % 5 === 0) 
		fizzBuzzArray.push('Buzz');
	else
		fizzBuzzArray.push('');
});

console.log(numArray);
console.log(fizzBuzzArray);

// for (let i = 1; i <= 100; i++) {
// 	numArray.push(i);
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		fizzBuzzArray.push("FizzBuzz");
// 	} else if (i % 3 == 0) {
// 		fizzBuzzArray.push("Fizz");
// 	} else if (i % 5 == 0) {
// 		fizzBuzzArray.push("Buzz");
// 	} else
// 		fizzBuzzArray.push("");
// }

//not working
// for (let i = 1; i <= 100; i++) {
// 	numArray.push(i);
// 	fizzBuzzArray.push('');
// 	if (i % 3 === 0) {
// 	  fizzBuzzArray[i - 1].concat('Fizz');
// 	} else if (i % 5 === 0) {
// 	  fizzBuzzArray[i - 1].concat('Buzz');
// 	}
// }

