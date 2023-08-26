/* 
	API
	* Application
	* Program
	* Interface

	Client to communicate with the database
		- we can ask, or *request* something from an API, and it will search a database to give us back information
	
	Allow HTTP request and response lifecycle

	When receiving data from an API, it is typically formatted in JSON

	JSON
		* Java-
		* Script
		* Object
		* Notation
	JSON is a lightweight way to store and transfer data relatively easy to understand

	Syntax
	{
		"key": "value",
		"key": true,
		"key": 0
	}

	- all of my keys in a JSON format are going to be strings, my values do not change
	- data is separated by a comma, HOWEVER we are NOT allowed to have a trailing comma (no comma on our last property)
	- cannot hold comments OR functions
*/

let apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/jirachi';

/* 
	Fetch
		- IS an API
		- is what allows us to gather information from a api, and get back some results
		- function that takes in 1 argument, which will be the location we want to get information from
		- handle the request AND response
		- returns a promise
			- we have access to our resolvers (.then, .catch)
*/

fetch(apiEndpoint)
	.then(response => response.json())
	// .json() method will translate my response object into a readable JSON object which I can then treat as any other object within my code
	.then(data => {
			console.log(data)
			// create variable AND new element
			let pokeName = document.createElement("h1");
			// edit it
			pokeName.innerText = data.name;
			// append it
			document.body.appendChild(pokeName);

			/* 
				Challenge
				Display onto the webpage ONE of the pokemon's ability names as well as ONE of the images(sprites) of the pokemon
			*/
			let abilityName = document.createElement('h2');
			abilityName.innerText = data.abilities[0].ability.name;
			document.body.appendChild(abilityName);

			let sprite = document.createElement('img');
			sprite.src = data.sprites["front_default"];
			document.body.appendChild(sprite);

			/* 
				Challenge
				create an unordered list containing every "move" a pokemon will learn
				* "a pokemon" just means whichever one you have chosen
			*/

			let list = document.createElement('ul');
			for (move in data.moves) {
				let item = document.createElement('li');
				item.innerText = data.moves[move].move.name;
				list.appendChild(item);
			}
			document.body.appendChild(list);

			/* 
				Challenge
				Display all areas/locations where this pokemon can be encountered
				* location_area_encounter
					* use that url to get more information
			*/

			let locations = data.location_area_encounters;

			fetch(locations)
			.then(response => response.json())
			.then(data2 => {
				console.log('data2: ', data2);

				let list2 = document.createElement('ul');
				for (let location in data2) {
					let item2 = document.createElement('li');
					item2.innerText = data2[location].location_area.name;
					list2.appendChild(item2);
				}
				document.body.appendChild(list2);
			});
	})
	.catch(error => console.error("UhOh!", error));