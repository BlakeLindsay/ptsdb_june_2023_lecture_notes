import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
	let displayText = `Here is my new ${13} information to be displayed`;

	//? Component is going to return a single JSX element
	//* JSX = JavaScript XML
  return (
    <div className="App">
      {/* I want to display the header component at the top of this page */}
      {/* in order to display the header, I must use the component as if it were a self-closing tag */}
			<Header />
    </div>
  );
}

export default App;
