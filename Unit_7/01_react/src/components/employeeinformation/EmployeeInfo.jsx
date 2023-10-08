import React from 'react';
// this allows us to use the React object
import { Fragment } from 'react';
// this will deconstruct "Fragment" from the react export
// can also use React.Fragment

// our functional component can take in various "properties" (a.k.a. "props")
function EmployeeInfo(props) {
	// typically, we will use the argument name "props" to represent the props our component is being passed, though this name is not required or mandatory
	// when props are not being passed, this value will be an empty object
	console.log(props);
	return(
		<Fragment> {/**can also use <> */}
		{/** can't use if statement inline in jsx */}
			<h1>{!props.name ? "NAME PLACEHOLDER" : props.name}</h1>
			<ul>
				<li>Position: {!props.position ? "POSITION PLACEHOLDER" : props.position}</li>
				<li>Catch Phrase: {!props.catchphrase ? "CATCH PHRASE PLACEHOLDER" : props.catchphrase}</li>
				<li>Favorite Food: {!props.food ? "FOOD PLACEHOLDER" : props.food}</li>
			</ul>
		</Fragment>
	)
}

export default EmployeeInfo;