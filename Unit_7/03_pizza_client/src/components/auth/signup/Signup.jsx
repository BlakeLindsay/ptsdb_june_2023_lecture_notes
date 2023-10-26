// emmet abbreviation: rfce
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
	// this will give me a function that I can pass a string argument info, and the function will navigate me to that route within my BrowserRouter
	const navigate = useNavigate();

	let [email, setEmail] = useState('email');
	let [password, setPassword] = useState('password');
	let [lastName, setLastName] = useState('last name');
	let [firstName, setFirstName] = useState('first name');

	// this will get reset when the Signup component dismounts
	// const [token, setToken] = useState('');

	const signupRoute = 'http://127.0.0.1:4000/user/signup';

	// in order to interact with our API / the pizza server, we will need to fetch

	// fetch(signupRoute); //! not here because we do not want to fetch every time the page re-renders

	return (
		<div>
			<form id="form">
				<input name='firstName' placeholder='first name' onChange={(e) => {
					setFirstName(e.target.value);
				}}/>
				<br />
				<input name='lastName' placeholder='last name' onChange={(e) => setLastName(e.target.value)}/>
				<br />
				<input name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
				<br />
				<input name='password' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
				<br />

				<button type='submit' onClick={displayInputFields}>Submit</button>
			</form>
			{/* print on the screen whatever the current value of the 'username' is */}
			
			{
				// username !== ''
				// ?
				// <DisplayUser username={username} password={password}/>
				// :
				// null
			}
		</div>
	
	)

	async function displayInputFields(e) {
		e.preventDefault();
		console.log(firstName, lastName);
		console.log(email);
		console.log(password);
		try {
			// .then() is a promise resolver method
			// a promise is asynchronous code that either resolves or gives an error
			//? by default, fetch will assume we just want a GET method, we need to pass it an options object in order to tell it to perform a different action
			let res = await fetch(signupRoute, {
				headers: new Headers({
					'content-type': 'application/json'
				}),
				method: 'POST',
				//* this body property IS the request body that is sent to the server/API
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password
				})
			});
			let results = await res.json();
			console.log(results);
			props.setToken(results.token);
			if (res.status === 200) {
				navigate('/about');
			}
		} catch(error) {
			console.log(error);
		}
	};

	function DisplayUser(props) {
		return (
			<div>
				<h2>Username: {props.username}</h2>
				<h2>Password: {props.password}</h2>
			</div>
		)
	}
}


export default Signup;