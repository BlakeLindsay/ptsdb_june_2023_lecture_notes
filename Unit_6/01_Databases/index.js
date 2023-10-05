// require the use of the 'dotenv' package and configure my app to use those values
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
//? const app = require('express')(); // immediately create a new express app while "importing" that information

const mongoose = require('mongoose');
//const MONGO = 'mongodb://localhost:27017'; // might give error
// const MONGO = process.env.MONGO; //* connection string - the link to our database
const { PORT, MONGO } = process.env; // destructure the PORT property from my env file

// use that link to actually connect with the database
mongoose.connect(`${process.env.MONGO}/PizzaPlace`);

const db = mongoose.connection; // this is going to store our connection

// this will run a single time when we successfully connect to our database
db.once('open', () => console.log(`Connected to: ${MONGO}`));

//! without this line, I cannot access JSON data from a request
app.use(express.json());

const users = require('./controllers/user.controller');
const pizzas = require('./controllers/pizza.controller');
// const validateSession = require('./middleware/validateSession');
app.use('/user', users);
// validate session middleware
// app.use(validateSession); // ALL endpoints and routes below this line will require the validateSession middleware to run successfully before the endpoint runs
app.use('/pizza', pizzas);


app.get('/test', (req, res) => {
	res.status(200).json({ message: "Server is accessible", port: process.env.PORT });
	//* process.env will access the ".env" file, and we can dot notation to get whatever specific value we want from that file
});

// app.listen(process.env.PORT); // technically this is enough
app.listen(PORT, () => console.log(`App is listening on port ${process.env.PORT}`));

/*
    ! Challenge
        - create a new model defining pizzas. this model should have
            - toppings (string)
            - crust (string)
            - slices (number)
        - create a pizza controller
            - this will have an endpoint to post a new order to the database
            - the link for this endpoint should be:
                `localhost:4000/pizza/order`
*/