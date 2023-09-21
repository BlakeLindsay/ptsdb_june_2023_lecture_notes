const router = require('express').Router();

const Pizza = require('../models/pizza.model');

router.post('/order', async (req, res) => {
	try {
		const pizza = new Pizza({
			toppings: req.body.toppings,
			crust: req.body.crust,
			slices: req.body.slices
		});

		const newPizza = await pizza.save();

		res.status(200).json({
			pizza: newPizza,
			message: 'Success! Pizza Created!'
		});
	} catch (e) {
		res.status(500).json({
			ERROR: err.message
		});
	}
});

module.exports = router;