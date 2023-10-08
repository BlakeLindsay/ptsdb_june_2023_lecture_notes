// React is by default imported now
import React from 'react'

function SalesCounter() {
	// we can create state variables that will re-render our page when they get updated. React gives us access to a constructor for state variables
	// let counter = 0;
	let [counter, setCounter] = React.useState(0);
	// React.useState will give us back an array with 2 items within it. One is a variable containing some value, the second is a function to update that value and re-render the component. Whatever is in the () of useState is the initial value of the variable.

	function countUp() {
		// counter++; // still changes the variable, but doesn't update
		setCounter(counter + 1);
		console.log(counter);
	}

	return(
		<div>
			<h1>SalesCounter</h1>
			<p># of sales: { counter }</p>
			<button onClick={countUp}>Add a Sale</button>
		</div>
	)
}

export default SalesCounter;