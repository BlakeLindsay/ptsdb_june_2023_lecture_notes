// emmet abbreviation: rfce
import { useState } from 'react';

const Signup = () => {
	let [username, setUserName] = useState('username');

	return (
		<div>
			<form>
				<input placeholder='username' />
				<input placeholder='password' />

				<button type='submit' onClick={displayInputFields}>Submit</button>
			</form>
			{/* print on the screen whatever the current value of the 'username' is */}
		</div>
	)
}

function displayInputFields(e) {
	e.preventDefault();
};

export default Signup;