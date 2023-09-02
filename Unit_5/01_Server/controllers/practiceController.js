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

router.get('/something', (req, res) => {
	res.json({sample: "This is the something endpoint"});
})

//make this router available outside of this file
module.exports = router;
//export the router variable from this module. This means if we were to 'require' this file, we would be giving the 'require' our router
// Whatever value is assigned to the module.exports is what we will export, if we have an object, it means we are sending out an object