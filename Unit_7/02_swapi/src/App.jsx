import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let baseURL = "https://swapi.dev/api/";
  let endpoint = "people";
  
  // let info; //* by only updating a regular js variable, our page will not re-render, meaning the information being displayed does not get updated

  let [characters, setCharacters] = useState([]); // useState will return an array with 2 items, typically we want to destructure this return into 2 seperate variables. First is the value, second is the "setter" function
  // let newState = useState([]);
  // let information = newState[0];
  // let setInformation = newState[1];
  let [fullURL, setFullURL] = useState(baseURL + endpoint);
  let [nextURL, setNextURL] = useState('');
  let [prevURL, setPrevURL] = useState('');

  useEffect(function () {
    // This is going to be the function that runs when our useEffect runs
    fetch(fullURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // info = data;
        setCharacters(data.results);
        setNextURL(data.next);
        setPrevURL(data.previous);
        // data.previous;
        // console.log('INFO:', info);
      })
  }, [fullURL]); // 2nd argument is a dependancy array, which tells our useEffect WHEN to run. An empty dependancy array will only run when the component initially mounts / renders for the first time

  useEffect(function () {
    console.log('characters:', characters);
  }, [characters]); // "characters" in the dependancy array, meaning this function runs each time the "characters" state variable is updated. Even though this useEffect runs whenever the dependacies are updated, each useEffect will ALWAYS run once when the component is first rendered
  

  let numbers = [0, 1, 2, 3, 4, 5];
  // info = "Hello World";
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>{baseURL + endpoint}</p>
        {/* I want to display each number from the "numbers" array individually */}
        {
          // numbers.map(function (num) {
          //   console.log(num);
          //   return <p>{num}</p>;
          // })
          
          // Start displaying character information
          // start with just the name of the first character in results
          // info ? info.results[0].name : null // If the name does not exist, do not display anyhting onto the webpage
          // "This is a string";
          // I cannot end my single line of JS within { } with a ;
          /*
            If I use dot notation, I am using an object.
            If I have square bracket notation, I am either using an array OR an object
              Because Arrays are indexed using numbers, we cannot use dot notation
          */
        }
        {
          // the button only renders when we have a previous link
          prevURL ? 
          <button onClick={() => {setFullURL(prevURL)}}>Previous</button>
          :
          null
        }
        {/* button is disabled if we do not have a next link */}
        <button disabled={!nextURL} onClick={() => {setFullURL(nextURL)}}>Next</button>
        {
          //! Challenge
          //? Display each character within their own "card", this should be a container with a white background, and black text within with  slightly rounded corners. Each card should contain the following information, if available, labeled in a list:
          //* Name
          //* Height
          //* Mass
          //* Birth Year
          characters.map((character, index) => 
              <div key={index} className="card">
                <p>Name: {character.name}</p>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>Birth Year: {character.birth_year}</p>
              </div>
          )
        }
      </header>
    </div>
  );
}

export default App;