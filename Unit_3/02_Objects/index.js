/* 
	- Object Literal
		when our values are written within our keys. "Hard-Coded"

	* Structure:
		keyword objectName = {
			key: value,
		}
	
*/

let marvelHero = {
	fullName: "Peter Parker",
	codeName: "Spider-Man",
	age: 17,
	active: true,
};

// dot notation
console.log(marvelHero.codeName);

// The Simpsons
let theSimpsons = {
	id: 1,
	est: 1989,
	category: "animated",
	seasons: {
		"season one": [
			{
				episode_title: "Simpsons Roasting on an Open Fire",
				aired: "1989-12-17",
			},
			{
				episode_title: "Bart the Genius",
				aired: "1990-01-01",
			},
		],
		"season two": [],
		"season three": [],
	},
	currently_running: true,
};

// square bracket notation
// console.log(theSimpsons['seasons']);
// console.log(theSimpsons.seasons);
console.log(theSimpsons.seasons["season one"]);

// CHALLENGE: in the console, using theSimpsons object, print out "Simpsons Roasting on an Open Fire"

console.log(theSimpsons.seasons["season one"][0].episode_title);

console.log(theSimpsons.currently_running);

theSimpsons.currently_running = 'of course!';

console.log(theSimpsons.currently_running);

// add a new key to an existing object
// const or let doesn't matter
theSimpsons.characters = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];
console.log(theSimpsons.characters);

/* 
	- use an array method to add another character to the character array
	- print out ONLY the characters from theSimpsons object
*/

theSimpsons.characters.push("Milpool");
console.log(...theSimpsons.characters);

// Keys of an object
let keyList = Object.keys(theSimpsons);
console.log('keys:', keyList);

//Values of an object
let valList = Object.values(theSimpsons);
console.log('values:', valList);

// removing a key
console.log('BEFORE:', Object.keys(theSimpsons));
// delete keyword, then use dot notation on the key to remove
delete theSimpsons.currently_running;
console.log('AFTER:', Object.keys(theSimpsons));
console.log(theSimpsons);

// DESTRUCTURING
// let [homie, marge] = theSimpsons.characters;
// console.log(homie,marge);

// instead of going in order from top to bottom, we can choose specific keys we want from an object
const {characters, seasons} = theSimpsons; // only the name of the key can be used
console.log('destructured characters:', characters);
console.log('destructured seasons:', seasons);

// this syntax will allow us to "rename" our property into a new variable that does not require a shared name
const {est: established} = theSimpsons;

console.log('Established:', established);

// Spread Operator with Objects
const simpsonsCharacters = {
	simpsonsHouse: ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'],
	moesTavern: ['Moe', 'Barney'],
	showAge: 34
};

const locations = {
	// spread operator to copy information
	// spread operator copies the *value* at the time of use, reference types will act different than value types. so numbers and string will not change retroactively; however arrays and objects will.
	...simpsonsCharacters,
	dmv: ['Patty', 'Selma']
};

simpsonsCharacters.simpsonsHouse[0] = 'Flanders';

console.log(locations);

/*
! Challenge

TODO print out each key/value pair in a given object in one line, they should be formatted as:
  ? firstKey: firstValue, secondKey: secondValue, ... etc

*  ideal output is:
*  'father: Homer, mother: Marge, daugher: Lisa, son: Bart, baby: Maggie'
*/

let simpsonsFamily = {
	father: 'Homer',
	mother: 'Marge',
	daughter: 'Lisa',
	son: 'Bart',
	baby: 'Maggie'
}

let keys = Object.keys(simpsonsFamily);
let values = Object.values(simpsonsFamily);

let both = [];

for(let i = 0; i < keys.length; i++)
{
	both.push(keys[i] + ':');
	if (i === keys.length - 1) {
		both.push(values[i]);
	} else {
		both.push(values[i] + ',');
	}
}

console.log(...both);

/*

let output = [];

for (let keyName in simpsonsFamily) {
	console.log(simpsonsFamily['keyName']); // to look for our target
	let result = `${keyName}: ${simpsonsFamily[keyName]}`;
	console.log(result);
	output.push(result);
}

console.log(output.join(', '));

*/