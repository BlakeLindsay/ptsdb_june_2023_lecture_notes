import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import EmployeeInfo from './components/employeeinformation/EmployeeInfo';
import SalesCounter from './components/salescounter/SalesCounter';
//npm start to start
function App() {
	let displayText = `Here is my new ${13} information to be displayed`;

	//? Component is going to return a single JSX element
	//* JSX = JavaScript XML
  return (
    <div className="App">
      {/* I want to display the header component at the top of this page */}
      {/* in order to display the header, I must use the component as if it were a self-closing tag */}
			<Header />
			<SalesCounter />
			<AboutMe />
			{/**in order to pass props, we will add properties to the JSX tag, similar to how an HTML tag gets its own properties */}
		<EmployeeInfo 
			test={"Testing the props"} 
			name={'Michael Scott'} position={"The Boss"}
			catchphrase={"That's What She Said"}
			food={"Gabagool"}
		/>
			<EmployeeInfo 
			test={"Testing the props"} 
			name={'Dwight Schrute'} position={"Assistant to the Regional Manager"}
			catchphrase={"Perfectenshlag"}
			food={"Beets"}
		/>
			<Footer />
    </div>
  );
}

export default App;
