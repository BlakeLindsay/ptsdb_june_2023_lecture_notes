const form = document.querySelector('form');
const pokeName = document.getElementById('pokeName');
const pokeNumber = document.getElementById('pokeNumber');
const sprite = document.getElementById('sprite');
const type1 = document.getElementById('type1');
const type2 = document.getElementById('type2');
const encounterAreas = document.getElementById('encounterAreas');
const movesList = document.getElementById('movesList');

let apiTarget = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemon(event) {
	event.preventDefault();
	console.log(form.input.value);
	fetch(apiTarget + form.input.value)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		pokeName.innerText = data.name;
		pokeNumber.innerText = data.id;
		sprite.src = data.sprites["front_default"];
		type1.innerText = data.types[0].type.name;
		if (data.types[1] != undefined) {
			type2.innerText = data.types[1].type.name;
		} else {
			type2.innerText = '';
		}
		movesList.innerHTML = '';
		data.moves.forEach((move) => {
			let element = document.createElement('div');
			element.className = "row align-items-center";
			element.innerText = dashesToSpaces(move.move.name);
			movesList.appendChild(element);
		});

		let locations = data.location_area_encounters;

		fetch(locations)
		.then(response => response.json())
		.then(data2 => {
			console.log('data2: ', data2);
			encounterAreas.innerHTML = '';
			data2.forEach((location) => {
				let element2 = document.createElement('div');
				element2.className = "row align-items-center";
				element2.innerText = location.location_area.name;
				encounterAreas.appendChild(element2);
			});
		})
	})
	.catch(error => console.error("pokemon problem", error))
}

form.addEventListener('submit', getPokemon);

function dashesToSpaces(input) {
	output = '';
	for (let i = 0; i < input.length; i++){
		if(input[i] !== '-') {
			output += input[i];
		} else {
			output += ' ';
		}
	}
	return output;
}
//or just use .replace()

/*

async function getPokemonData() {
	let result = await fetch('https://pokeapi.co/api/v2/pokemon/shuckle');
	let pokeData = await result.json();

	console.log(pokeData); // 
}

//getPokemonData();

// run this function when my webpage loads
window.onload = (event) => {
	getPokemonData();
}

*/