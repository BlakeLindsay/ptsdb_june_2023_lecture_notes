// This file will be my "homepage" for the server
// This is defined within my "package.json" file

console.log('This is my first server!');

// package.json can be modified, however the 'package-lock.json' will never be modified directly by us

// first run 'npm install express'
// giving myself access to the express package
const express = require('express');
// require my application to have the information from "express" in order to run. we can think of this like linking a file in HTML

// initialize a new express instance
const app = express();
// give me a new instance of an express application, stored within my "app" variable
// we will not make a new instance of every module, or package, that we install. This is something specific to express

// Create Endpoints
// app.use('/', (request, response) => {
// 	// response.send(578); // numbers cannot be sent
// 	// response.json will also send information back to our "client" (in this example we are using a web browser). This method will send back a JSON formatted object as the response body.
// 	response.json({
// 		message: 'Hello from the server!',
// 		randomNumber: 813,
// 		someBoolean: true,
// 		coolArray: ['This', 'Is', 'So', 'Cool', '!']
// 	});
// 	// response.send('<h1>My Header</h1>') // we can send HTML in our .send() method
// 	// I am only allowed to send back a single response from any given endpoint. thinkn of this similar to "return" in vanilla JS
// 	// response.send('This is a follow-up from the server?') // error
// });

// another endpoint

app.use(express.static(`${__dirname}/public`))

// Start our server
// in order to start out server, we need our application to "listen" on a specific part of our computer
app.listen(4000, () => console.log(`App is listening on port 4000`));
// start our server listening for any interaction (think of this like an "event listener" in HTML DOM), and will be located at 'localhost:4000'

