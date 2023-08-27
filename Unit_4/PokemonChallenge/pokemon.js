const form = document.querySelector('form');
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
		sprite.src = data.sprites["front_default"];
		type1.innerText = data.types[0].type.name;
		if (data.types[1] != undefined) {
			type2.innerText = data.types[1].type.name;
		} else {
			type2.innerText = '';
		}
		data.moves.forEach((move) => {
			let element = document.createElement('div');
			element.className = "row align-items-center";
			element.innerText = move.move.name;
			movesList.appendChild(element);
		});
	})
	.catch(error => console.error("pokemon problem", error))
}

form.addEventListener('submit', getPokemon);