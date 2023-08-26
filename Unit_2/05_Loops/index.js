// Loops

// loops are a block of code that will be repeated a number of times
/*
	For
	For In
	For Of
*/

for (let i = 0; i < 10; i++) {
	console.log(i);
}

let result = 0;

for (let i = 1; i <= 50; i++) {
	result += i;
}

console.log(result);

//For In
/*
For In loops are great for iterating over values in an object. Properties in an object are what's called "enumerable"

"enumerable" just means "countable"
*/

let catDog = {
	name: "catdog",
	cat: true,
	dog: true,
	legs: 4
} 

for (let i in catDog) {
	console.log(i);
	console.log(catDog[i]);
	//console.log(catDog["name"]) - CatDog
	//console.log(catDog.i) - undefined
}

let week = ["monday", "tuesday", "wednesday", "thursday", "friday"];

for (let day in week) {
	console.log(day);
	console.log(week[day]);
}

let myName = "Jerome";

for (let c in myName) {
	//console.log(c);
	console.log(myName[c]);
}

// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name

let target = "aSKFHAKSJFH";
let first = true;
let newTarget = "";

for (let c in target) {
	console.log(typeof target[c]);
	console.log(target[c]);
	if (first) {
		newTarget = newTarget + target[c].toUpperCase();
		first = false;
	} else {
		newTarget = newTarget + target[c].toLowerCase();
	}
}

console.log(newTarget);



//For Of
/*
loop over the ITERABLE values of an object, this means the values we can access by using numbers
*/

//negative example
// let catDog_ = {
// 	name: "catdog",
// 	cat: true,
// 	dog: true,
// 	legs: 4
// } 

// for (let item of catDog_) {
// 	console.log(item);
// } Error: objects are not iterable

let week_ = ["monday", "tuesday", "wednesday", "thursday", "friday"];

for (let day of week_) {
	console.log(day);
}

let myName_ = "Jerome F";

for (let letter of myName_) {
	console.log(letter);
}

//While Loops

let city = ["building", "building", "building", "light pole", "tree", "empty street"];

let structure = city[0];
let position = 0;

while (structure != "empty street") {
	console.log(`Spider-Man swings from the ${structure}`);
	position++;
	structure = city[position];
}
console.log(`Spider-Man lands in the ${structure}`);

//Do While
//Like a while loop, it will repeat code as long as a condition is true, HOWEVER it will always run at least once

// let city_block = ["empty street", "building", "building", "light pole", "tree", "empty street"];

// do{
// 	console.log("sdf");
// } while (city_block[0] !== "empty-street");

let spideyHP = 20;
let badGuys = [
	{
		baddie: "Green Goblin",
		hp: 15
	},
	{
		baddie: "Venom",
		hp: 25
	},
	{
		baddie: "Stilt-Man",
		hp: 5
	}
];

let rand = Math.floor(Math.random() * badGuys.length);
let villain = badGuys[rand];

console.log(`${villain.baddie} has appeared`);

do {
	console.log(`${villain.baddie} hits Spider-Man`);
	spideyHP -= 1;
	console.log(`Spider-Man HP: ${spideyHP}`);

	let spideyHit = Math.floor(Math.random() * 3);
	console.log(`Spider-Man hits ${villain.baddie} for ${spideyHit} damage !!!`);
	villain.hp -= spideyHit;
	console.log(`Villain HP: ${villain.hp}`);

} while (villain.hp > 0 && spideyHP > 0);