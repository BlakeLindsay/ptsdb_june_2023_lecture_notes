let form = document.querySelector('form');

let apiTarget = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemon(event) {
	event.preventDefault();
	console.log(form.input.value);
	fetch(apiTarget + form.input.value)
	.then(response => response.json())
	.then(data => {
		console.log(data);
	})
	.catch(error => console.error("pokemon problem", error))
}

form.addEventListener('submit', getPokemon);