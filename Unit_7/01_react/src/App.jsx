import logo from './logo.svg';
import './App.css';

function App() {
	let displayText = `Here is my new ${13} information to be displayed`;

	//? Component is going to return a single JSX element
	//* JSX = JavaScript XML
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {displayText}
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
    </div>
  );
}

export default App;
