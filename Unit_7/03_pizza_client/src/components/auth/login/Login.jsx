//! Challenge
//* Create a login component that takes in the required information(can be found in our login endpoint within the express server). This will send a request to the login endpoint, and store the token if we get one back.

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
	// this will give me a function that I can pass a string argument info, and the function will navigate me to that route within my BrowserRouter
	const navigate = useNavigate();

	let [email, setEmail] = useState('email');
	let [password, setPassword] = useState('password');

	const loginRoute = 'http://127.0.0.1:4000/user/login';

	return (
		<div>
			<form>
				<input placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
				<br />
				<input placeholder="password" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
				<br />

				{/* button:s */}
				<button type="submit" onClick={displayInputFields}>Submit</button>
			</form>
		</div>
	)

	async function displayInputFields(e) {
		e.preventDefault();
		console.log(email);
		console.log(password);
		try {
			// .then() is a promise resolver method
			// a promise is asynchronous code that either resolves or gives an error
			//? by default, fetch will assume we just want a GET method, we need to pass it an options object in order to tell it to perform a different action
			let res = await fetch(loginRoute, {
				headers: new Headers({
					'content-type': 'application/json'
				}),
				method: 'POST',
				//* this body property IS the request body that is sent to the server/API
				body: JSON.stringify({
					email,
					password
				})
			});
			let results = await res.json();
			console.log(res);
			setToken(results.token);
			if (res.status === 200) {
				navigate('/about');
			}
		} catch(error) {
			console.log(error);
		}
	};
};

export default Login;