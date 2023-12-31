const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
	toppings: String,
	crust: {
		type: String,
		required: false // NOTE: not required, is false by default
	},
	slices: Number,
	owner: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Pizza', PizzaSchema);