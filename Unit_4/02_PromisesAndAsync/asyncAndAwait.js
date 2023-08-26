/* 
	Async and Await
		- Introduced in ES8 in 2017
			ES8 is a version of JavaScript, AKA ECMAScript
		- Can make any function asynchronous simply by denoting it
		- KEYWORDS:
			- async:
				denotes a function as asynchronous
			- await:
				tells our code to "wait" for something to finish before moving on
		- Can help us reduce the need for callback functions
		- Cannot be used in loops!
		- ALWAYS return a promise
*/

// funcction declaration
async function asyncFunctionDeclaration() {
	// some code
}

// function expression
let asyncFunctionExpression = async function() {
	// some code
}

// arrow function
let asyncArrowFunction = async () => {
	// some code
}


async function getName() {
	return "Gandalf";
}

getName().then(name => console.log(name));

/* 
	Await
		- Tell JS that a promise is being returned and to wait on that result
		- await can ONLY be use within an async function
*/

async function listenToMusic() {
	let name = await getName();
	return `${name} is listening to smooth jazz`;
}

listenToMusic().then(data => console.log(data));

// Fetch: Async vs Resolver Methods
const url = 'https://meowfacts.herokuapp.com/';

function getCatFact_Methods() {
	fetch(url)
		.then(response => response.json())
		.then(fact => console.log(fact.data[0]))
}

getCatFact_Methods();

async function getCatFact_Await() {
	let res = await fetch(url); // wait for our fetch to resolve before assigning "res" a value
	let results = await res.json(); // wait for our res to be formatted as a JSON
	console.log(results.data[0]);
}

getCatFact_Await();

/* 
	Challenge
		Using SWAPI (Star Wars API) [https://swapi.dev/api], display on the webpage information from one character of your choise
		Name
		Height
		Birth Year
		Do all of this using an asynchronous function and await
*/
async function getSwapi() {
	let swapi = await fetch('https://swapi.dev/api/people/51/');
	let swapiResults = await swapi.json();
	console.log(swapiResults);
}

console.log("swapi prom", getSwapi());