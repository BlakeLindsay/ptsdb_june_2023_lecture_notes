// STEP 1: Create a router using
const express = require('express');
const router = express.Router();
// const router = require('express').Router(); // also works
const pies = [];

// STEP 2: Add endpoints to our new router
router.get('/', (req, res) => {
	// GET - get information from a link
	// perform some code
	res.json({message: "List of Pies", pies, orderStatus: 'pending'});
});

router.post('/new', (req, res) => {
	// POST - used to send information from a client to the server
	console.log(req.body); // main content of the request
	pies.push(req.body);
	res.status(202).json({message: "new pizza"});
})

// STEP 3: export our router (make it available in other files)
module.exports = router;