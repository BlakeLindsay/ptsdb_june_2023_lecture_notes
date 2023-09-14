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

// Edit a pie using HTTP PUT method
// PUT - HTTP method to edit information
router.put('/single/:id', (request, response) => {
	//* I am allowed to use the same endpoing multiple times AS LONG AS the method is different (put vs get etc.). This can be spelled any way as long as I use it consistently AND do not overwrite a JS keyword.

	// how to edit my pie
	// 1. get the index of the pie to edit, or the pie itself
	// my id will NOT always match the position of the pie
	let pieFound = false;

	pies.forEach((pie) => {
		if (pie.id == request.params.id) {
			pie.filling = request.body.filling;
			pie.crust = request.body.crust;
			pie.size = request.body.size;
			response.status(200).json({ message: `Pie ${request.params.id} has been updated`, pie });
			pieFound = true;
		}
	});

	if(!pieFound) {
		response.status(404).json({message: 'pie not found'});
	}

	// 2. gather the information from postman

	// 3. set the old keys of our pie to the new values from postman
});

// DELETE method - remove an item(s)
router.delete('/single/:id', (request, response) => {
	let pieIndex = -1;
	// forEach to find our pie
	pies.forEach((pie, index) => {
		// keep track of the index when we find a matching id
		if (pie.id == request.params.id) {
			pieIndex = index;
		}
	});

	// we can remove a certain index from an array, as long as we know what index to remove
	//? how do I know my pieIndex has been updated?
	//* if I start my pieIndex at -1, whenever that value still reads '-1' I know it has not been changed, since arrays will never have an index lower than '0'
	if (pieIndex >= 0) {
		//remove my pie from the pies array
		pies.splice(pieIndex, 1);
		response.status(200).json({message: "pie deleted"});
	} else {
		response.status(404).json({error: "No pie deleted"});
	}
});

// STEP 3: export our router (make it available in other files)
module.exports = router;