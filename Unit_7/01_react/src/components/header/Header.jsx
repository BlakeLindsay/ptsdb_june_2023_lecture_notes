//* Components are typically named using PascalCasing
// Functional Component: a component which is a function

// To create a functional component, I start by making a function
function Header() {
	// All components should, if nothing else, return JSX which will be displayed when the component is called
let myName = 'Batman';

	return(
		<header>
			<h1>Welcome to React, {myName}</h1>
		</header>
	)
}

// In order to use this component in other files, we must export the function and make it available
export default Header;