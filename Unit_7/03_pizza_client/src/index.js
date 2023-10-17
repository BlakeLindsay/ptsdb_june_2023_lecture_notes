import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Signup from './auth/signup/Signup';
// this will allow us to use "routes" within our react client, allowing us to "conditionally" display different views of components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		{/* BrowserRouter is NOT self closing, we are going to place all of our webpage components inside the BrowserRouter */}
		<BrowserRouter>
			{/* Routes is not self closing, this will contain multiple different >Route> tags that will all be "siblings" */}
			<Navbar />
			<Routes>
				{/* This "Route" is going to load the "App" component when we go to the "/" path in our webpage */}
				<Route path="/" element={<App />}/>
				<Route path="/about" element = {<h2>About Me Page</h2>} />
				<Route path='/signup' element={<Signup />} />
				{/* <App /> */}
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
