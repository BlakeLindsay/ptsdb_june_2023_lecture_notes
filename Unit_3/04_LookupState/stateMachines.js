// State Machine

// represent each current "state" as well as which "state" you may enter, given your current state
// this "state" is going to represent a traffic light
let state = {
	// current location: next valid location list
	green:['yellow'],
	yellow: ['red'],
	red: ['green', 'yield'],
	yield: ['red']
};

// starting state
let currentState = 'green';

// function will allow me to change between different light states
function enterState(newState) {
	// start by establishing which state we want to enter (parameter newState)
	// check where we are currently allowed to go
	let validTransitions = state[currentState];
	// console.log (validTransitions);
	
	// console.log where we are currently, along with where that current lccation can go

	// check if we are even allowed to move to our desired state
	// console.log(newState);
	// console.log(newState == validTransitions);
	// console.log(validTransitions.includes(newState)); // .includes() method to check whether our array contains a specific value
	//	if it is a new valid location, we want to move and make note of the change
	if (validTransitions.includes(newState)) {
		currentState = newState;
		console.log(currentState);
	}
	//	otherwise we will not move, and instead warn the user
	else {
		// console.log(`Invalid State: ${currentState} to ${newState}`);
		throw(`Invalid State: ${currentState} to ${newState}`); // throws error
	}
};

enterState('yellow');
enterState('red');
enterState('yield');
enterState('green'); // ERROR: see line 37

currentState = 'pizza party';
console.log(currentState);