// start by creating something called a router
// this will be used to help navigate and control endpoints
// const express = require('express'); // make sure I have access to express
// const router = express.Router(); // make a new instance of express' router
const router = require('express').Router();

// create some endpoints using this router
// basic GET route '/'
router.get('/', (request, response) =>{
	response.json({
		message: 'Practice Controller'
	});
});

// '/practice/something' endpoint
router.get('/something', (req, res) => {
	res.json({sample: "This is the something endpoint"});
});

/* 
	CHALLENGE
	create an endpoint which will, upon using the get method, send back a response containing an array. This array will be numbers from 1 - 100, with numbers that are a multiple of 5 saying "Buss", numbers that are a multiple of 3 saying "Fizz", and numbers that are a multiple of both saying "Fizz Buzz" in their place.

	Stretch Goal:
	instead of a new endpoint, make a new controller with a "fizz-buzz endpoint"
*/

router.get('/challenge', (req, res) => {
	let numArray = [];
	for(let i = 1; i <= 100; i++) {
		if (i % 15 === 0)
			numArray.push('FizzBuzz');
		else if (i % 3 === 0)
			numArray.push('Fizz');
		else if (i % 5 === 0)
			numArray.push('Buzz');
		else
			numArray.push(i);
	}
	res.send(numArray);
});

//make this router available outside of this file
module.exports = router;
//export the router variable from this module. This means if we were to 'require' this file, we would be giving the 'require' our router
// Whatever value is assigned to the module.exports is what we will export, if we have an object, it means we are sending out an object