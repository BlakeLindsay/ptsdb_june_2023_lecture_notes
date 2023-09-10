// STEP 1: Create a router using
const express = require('express');
const router = express.Router();
// const router = require('express').Router(); // also works
const pies = [];
let currentId = 1;

/* 
	{
		id: 1,
		filling:'blueberry',
		crust: 'graham cracker',
		size: 14
	} 

	{
		id: 2,
		filling:'blueberry',
		crust: 'graham cracker',
		size: 14
	} 
*/

// STEP 2: Add endpoints to our new router
router.get('/', (req, res) => {
	// GET - get information from a link
	// perform some code
	res.json({message: "List of Pies", pies, orderStatus: 'pending'});
});

router.post('/new', (req, res) => {
	// POST - used to send information from a client to the server
	console.log(req.body); // main content of the request
	// pies.push(req.body);

	// TODO Validate that our filling is a string, our crust is a string, and our size is a number before adding the new pie to our array, if something is input with an improper type tell the client what is wrong.
	let newPie = {
		id: currentId,
		filling: req.body.filling,
		crust: req.body.crust,
		size: req.body.size
	};
	pies.push(newPie);
	currentId++;
	//the response is not a return, the function will keep running after a response is sent to the client
	res.status(202).json({message: "new pizza", newPie});
});

//			paremeter- id
router.get('/single/:id', (req, res) => {
	// can add multiple parameters by adding a '/:paramName'
	// console.log(req.body);
	//? URL Parameters
	console.log(req.params);
	// find my pie with a certain id in my pies array
	let pieFound = false;
	pies.forEach((pie) => {
		if(pie.id == req.params.id) {
			res.status(200).json({pie});
			pieFound = true;
		}
	});

	if(!pieFound) {
		res.status(404).json({message: 'pie not found'});
	}

	// res.send('single pie'); //temp response to avoid timeout
});

// STEP 3: export our router (make it available in other files)
module.exports = router;