const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
	toppings: String,
	crust: String,
	slices: Number
});

module.exports = mongoose.model('Pizza', PizzaSchema);