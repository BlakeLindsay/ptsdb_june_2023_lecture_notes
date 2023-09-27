const router = require("express").Router();
const Pizza = require("../models/pizza.model");

function errorResponse(res, err) {
	res.status(500).json({
		ERROR: err.message,
	});
};

//! Pizza Order - Add a new pizza to my Mongo Database
router.post("/order", async (req, res) => {
  // res.send('Order Post Works!');
  try {
    //? 1. check our model for what we need to order a pizza
    // we need toppings - string, crust - string, and slices - number
    const pizzaOrder = {
      // calories: req.body.calories, //* still no calories even from postman. this is because our model does not track calories
      crust: req.body.crust,
      slices: req.body.slices,
      toppings: req.body.toppings,
      //TODO tell my database who owns this pizza
      owner: req.user._id
    };

    //? 2. creating a new Pizza document using the information from my request body
    const pizza = new Pizza(pizzaOrder);

    //? 3. save this new Pizza document into my Mongo database
    const newPizza = await pizza.save(); // this needs to await since the .save() method gives me a Promise

    // newPizza.save().then(saved => {
    //   res.status(200).json({ saved });
    // });

    //? 4. assuming our pizza was added to the database successfully, we send a response
    res.status(200).json({
      message: "New Pizza Ordered!",
      order: newPizza,
    });
  } catch (err) {
    errorResponse(res, err);
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
router.get('/order/:id', async (req, res) => {
  // req.params.id
  try {
    const singlePizza = await Pizza.findOne({ _id: req.params.id });
    const user = await User.findById(singlePizza.owner);

    res.status(200).json({ found: singlePizza, owner: user });
  } catch (err) {
    errorResponse(res, err);
  }
});

// other solution
// router.get('/find', async (req, res) => {
// 	try {
// 		const { id } = req.body;

// 		const pizza = await Pizza.findOne({ _id: id });
// 		res.status(200).json({
// 			pizza
// 		});
// 	} catch (err) {
// 		errorResponse(res, err);
// 	}
// });

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

// TODO PATCH One (Update One)
router.patch('/:id', async (req, res) => {
	try {
		// grab the value of id
		// create a filter object
		const filter = {
			_id: req.params.id,
			owner: req.user.id,
		};
		const info = req.body;
		const returnOptions = { new: true };
		const updatedPizza = await Pizza.findOneAndUpdate(filter, info, returnOptions);
		res.status(200).json({
			message: 'Pizza Updated',
			updatedPizza
		})
	} catch (error) {
		errorResponse(res, error);
	}
});

// TODO DELETE One
router.delete('/:id', async (req, res) => {
	try{
		const { id } = req.params;
		const deletePizza = await Pizza. deleteOne({ _id: id });

		deletePizza.deletedCount ? 
		res.status(200).json({
			message: 'pizza deleted'
		}) :
		res.status(404).json({
			message: 'Pizza not deleted'
		});
	} catch (error) {
		errorResponse(res, error);
	}
});

module.exports = router;
