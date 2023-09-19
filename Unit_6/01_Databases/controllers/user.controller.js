/*
! CHALLENGE:
- Add a boilerplate code for the controller
- Create a POST method route ('/signup')
- Make sure route is working
- simple response of "Connected"
-Test in Postman
- full URL is:
- localhost:4000/user/signup
*/

const router = require('express').Router();
// To add items to our database, we need to know which model we are using. The model will determine which table to add our data to.
const User = require('../models/user.model.js');
//? npm install bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const encryptPassword = (password) => {
	const encrypt = bcrypt.hashSync(password, 10);
	console.log('ENCRYPT:', encrypt);
};

/**
 * User Signup - Register a new account
 */
router.post('/signup', async (req, res) => {
	// res.json(req.body);
	encryptPassword('myPassword');
	encryptPassword('myPassword');
	encryptPassword('new_password');
	try {
	//* We can use a try/catch statement in an asynchronous function. As long as the code works normally without errors, we will always work in the "try" section. HOWEVER, once we get an error we will move to the "catch" section which will have access to the error.

	// Create the new user
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 13)
	}); // use values from our request body to create a new User

	// Add the new user to the database
	const newUser = await user.save(); //* user.save() will write our new user to the database AND asynchronously give us back that entry FROM the database.

	// run our code to create a new json web token
	const token = jwt.sign({ message: 'Hello World!'}, process.env.JWT, { expiresIn: "1 day"} );
	/* 
		- sign method is going to take in 3 arguments
			- 1. payload
				- the content held within the token
				- we will be giving this an object, though it can be a string
			- 2. encrypt/decrypt message
				- the message used to actually encrypt the payload
			- 3. options
				- typically going to use the expiration option, meaning it will stop working after a set amount of time. Options takes an object
	*/

	// send a response to the client
	res.status(200).json({
		user: newUser,
		message: 'Success! User Created!',
		token
	});
	} catch (err) {
		res.status(500).json({
			ERROR: err.message
		});
	}
});

/**
 * User Login - Gain credentials for an existing account
 */
router.post('/login', async function(req, res) {
	try {
		// 1 - we need access to the request body
		const { email, password } = req.body;

		// 2 - check if the email is in the database
		const user = await User.findOne({ email: email });
		//* this is a MongoDB method that will look for a single item that matches a given query. This will typically be used to find some matching information such as an email or id. If no match exists, we will not get a value
		// console.log(user); // don't
		// if there is not a user, make up an error
		// null is a falsey value
		if (!user) {
			throw new Error('Email or Password does not match');
		}

		// 3 - create a json web token [Monday]
		const token = jwt.sign({ message: 'user has logged in'}, process.env.JWT, { expiresIn: '1 day'});

		// 4 - check if the passwords are the same
		const passwordMatch = await bcrypt.compare(password, user.password);

		// console.log(passwordMatch); // do not do this
		if (!passwordMatch) throw new Error('Email or Password does not match');

		// 5 - send a response
		res.status(200).json({
			user,
			message: 'Successful Login!',
			token
	});
	} catch (e) {
		res.status(500).json({
			ERROR: e.message
		});
	}
});

module.exports = router;