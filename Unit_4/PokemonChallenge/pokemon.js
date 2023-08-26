let form = document.querySelector('form');

function getPokemon(event) {
	event.preventDefault();
	console.log(event.name.value);
}

form.addEventListener('submit', getPokemon);