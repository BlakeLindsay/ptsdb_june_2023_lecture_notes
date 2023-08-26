/* 
	Promise

	Is an object that may produce a singular value in the future

	a promise is referred to as "asynchronous"


*/

function getData() {
	setTimeout(() => {
		return "some data";
	}, 3000);
	console.log("Look at me!");
	let areYouLooking = true;
	console.log(areYouLooking);
}

// when I do not have a return keyword in a function, it gives back the value "undefined"
let data = getData();
console.log(data); // undefined

setTimeout(() => {
	console.log('Timeout data:', data);
}, 3000);


function getMoreData(callback) {
	setTimeout(() => {
		callback("some data");
	}, 3000) // 3000 milliseconds
}

getMoreData(console.log);
// getMoreData("does this work?"); // Uncaught TypeError
console.log('Hello World!');

/* 
	A Promise is an object that may produce a singular value in the futre.

	3 states it can be in:
		- pending
		- fulfilled
		- rejected
*/

function returnData() {

	// a new promise take in a callback function with 2 parameters
	// first parameter is for "resolving" the promise (fulfilled)
	// second parameter is for "rejecting" the promise (rejected)
	function promiseCallback(resolve, reject) {
		setTimeout(() => {
			if(false) {
				// return my string when the promise resolves successfully
				resolve('Promise for the Pizza Party');
			} else {
				reject('Finances said no :(');
			}
		}, 3000);
	};

	return new Promise(promiseCallback);
	
}

// console.log(returnData());

// Use resolvers to access data AFTER the promise finishes running properly

/* 
	when we invoke the returnData() function, we get a promise instead of a string by using resolvers, we can wait for the promise to either resolve or reject, and read a value after one of those have happened

	resolvers are *methods* that we use with a promise
		- .then()
			- going to run if the resolve happens, meaning the promise was fulfilled 
			- we can chain multiple .then() methods after each other
		- .catch()
			- going to run if the reject happens, meaning the promise failed in some way
		Both .then() and .catch() take in callback functions as parameters
*/

returnData()
	.then(data => console.log('From Response:', data))
	.then(() => {
		let x = 10;
		let y = 5;
		return x + y;
	})
	.then(sum => console.log(sum))
	.catch(function (error) {
		console.warn(error);
	});

	