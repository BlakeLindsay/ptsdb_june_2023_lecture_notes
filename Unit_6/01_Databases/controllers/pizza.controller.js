const router = require("express").Router();
const Pizza = require("../models/pizza.model");

function errorResponse(res, err) {
	res.status(500).json({
		ERROR: err.message,
	});
};

router.post("/order", async (req, res) => {
	try {
		const pizzaOrder = {
			toppings: req.body.toppings,
			crust: req.body.crust,
			slices: req.body.slices,
		};

		const pizza = new Pizza(pizzaOrder);

		const newPizza = await pizza.save();

		res.status(200).json({
			pizza: newPizza,
			message: "Success! Pizza Created!",
		});
	} catch (e) {
		res.status(500).json({
			ERROR: err.message,
		});
	}
});

// TODO GET One
/* 
!   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
*/
router.get('/find', async (req, res) => {
	try {
		const { id } = req.body;

		const pizza = await Pizza.findOne({ _id: id });
		res.status(200).json({
			pizza
		});
	} catch (err) {
		errorResponse(res, err);
	}
});

// TODO GET All
router.get('/list', async (req, res) => {
	try {
		const getAllPizzas = await Pizza.find(); // should give everthing in the collection
		// Ternary to handle wheter or not we get pizzas
		getAllPizzas.length > 0 ?
		res.status(200).json({getAllPizzas})
		:
		res.status(404).json({message: "No Pizzas Found"});
	} catch (err) {
		errorResponse(res, err);
	}
});

// TODO Get All with a Specific Crust

// TODO PUT One (Update One)

// TODO DELETE One

module.exports = router;
