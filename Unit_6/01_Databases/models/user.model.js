// Create a Schema for mongodb
const mongoose = require('mongoose');

// Create our own instance of a Schema and define it's features
const UserSchema = new mongoose.Schema({
	// We use a schema to define documents stored in a collection
	// This is where we define each column in the document
	//* columnName: DataType
	firstName: String,
	lastName: {
		// we can use {} to add "options" to our column
		type: String, //what data type do I use for this column
		required: true // default for required is false
	},
	email: {
		type: String,
		required: true,
		unique: true // duplicate email will send back an error
	},
	password: {
		type: String,
		required: true
	}
});

// A Schema is a "blueprint" used within the database to design our documents
// We need to export a model based on our schema
module.exports = mongoose.model('User', UserSchema);
// mongoose.model is a method that will create a model using a schema as reference