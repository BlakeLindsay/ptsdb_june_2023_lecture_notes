import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
// import Signup from './components/auth/signup/Signup';
import Auth from './components/auth/Auth'

function App() {
	//* I want to track my user token in the App.jsx file so that any file which needs to access the token may do so regardless of wheter they have been mounted or dismounted from the page
	const [token, setToken] = useState('');
	// many of our useStates so far have been of the type "String", useState can track ANY data type within JavaScript
  return (
    <div className="App">
			{/* BrowserRouter is NOT self closing, we are going to place all of our webpage components inside the BrowserRouter */}
			<BrowserRouter>
				{/* Routes is not self closing, this will contain multiple different >Route> tags that will all be "siblings" */}
				<Navbar />
				<Routes>
					{/* This "Route" is going to load the "App" component when we go to the "/" path in our webpage */}
					<Route path="/" element={<Home />}/>
					<Route path="/about" element = {<h2>About Me Page</h2>} />
					{/* a prop will pass information from a parent component into a child component */}
					<Route path='/auth' element={<Auth setToken={setToken} />} />
				</Routes>
			</BrowserRouter>
			{token}
    </div>
  );
}

export default App;

function Home() {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
		)
}
