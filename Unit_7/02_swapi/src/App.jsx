import logo from './logo.svg';
import './App.css';

function App() {
	let baseURL = "https://swapi.dev/api/";
	let endpoint = 'people';

	fetch(baseURL + endpoint)
	.then(response => response.json())
	.then(data => {
		console.log(data);
	});

	let numbers = [0, 1, 2, 3, 4, 5];

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>{baseURL + endpoint}</p>
			{
				numbers.map(num => <p>{num}</p>)
			}
			</header>
    </div>
  );
}

export default App;
