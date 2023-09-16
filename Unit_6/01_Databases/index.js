// require the use of the 'dotenv' package and configure my app to use those values
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();
//? const app = require('express')(); // immediately create a new express app while "importing" that information

app.use(express.json());

app.get('/test', (req, res) => {
	res.status(200).json({ message: "Server is accessible", port: process.env.PORT });
	//* process.env will access the ".env" file, and we can dot notation to get whatever specific value we want from that file
});

// application.listen(4000); // technically this is enough
app.listen(process.env.PORT, () => console.log(`App is listening on port ${process.env.PORT}`));