/* 
DOM
	Document Object Model
	only available through the browser
document: HTML page
	it is used as a global variable (do not overwrite this!)
object: document is represented as an object containing each element (nodes)
	lists, divs, images, etc.
model: it represent the arrangement of these elements, or nodes, on the page

Basic Structure:
- Document
	- HTML
		- Head
			- Meta
			- Title
		- Body
			- Header
			- Div
				- Anything inside a div
*/
// console.log("Hello from dom.js!");

// document object
console.log(document);
console.log(document.URL); //print a string that shows my current URL
console.log(document.location); // an object containing information about my webpage
console.log(document.title); // "DOM Practice"
document.title = "DOM Lesson Updated";
console.log(document.title);

// Create new element(s)
/* 
	1. create the new empty element
	2. edit that new element
		- adding text
		- changing styling
	3. add the element to the webpage
*/

let h1 = document.createElement('h1');
console.log(h1);

// innerHTML: store and allow us to insert HTML into this element
// innerText: return or allow us to edit the text within this element
// textContent: return the full text
// ex: <p>Hellow <b>World</b></p>
// innerText would return 'Hello'
//textContent would return "Hello World"
h1.innerText = "Creating my first DOM element!";
console.log(h1);

console.log(document.body);
// document.body = h1; NO GO
document.body.appendChild(h1);
// .appendChild() method will add our new element to the bottom of the body tag

h1.innerText =  "Editing my first DOM element!";

// style an element
h1.style.color = "blue";
h1.style.textAlign = "center";

h1.style = "text-shadow: 2px 2px 2px yellow"; // this will override the styling with a text shadow // inline styling has higher priority

h1.className = 'blue-with-shadow';
h1.id = "first-element";

console.log(h1.classList);

let subHeading = document.createElement('h3'); // <h3></h3>

subHeading.innerText = 'What should I do before leaving town?';
subHeading.style.color = 'pink';

document.body.appendChild(subHeading); // parent.appendChild(newChild);

// Find Multiple Elements
/* 
	HTML Collection
		- an array-like object
		- allow access to index, properties, and methods to help us navigate and modify it
		- does NOT allow us to modify multiple elements at once
		- CAN loop through it
		- can use the .length property to get the number of items it contains

	Accessing multiple elements requires these methods:
		- getElementByTagName()
		- querySelectorAll()
		- get ElementsByClassName()
*/

let li = document.getElementsByTagName('li');
console.log(li);

console.log(li[0]);
let bathroom = li[0];
bathroom.style.color = "darkred";

// li.style.color = "darkblue"; // doesn't work

for (let item of li) {
	console.log(item);
	item.style.color = 'darkblue';
	item.style.textAlign = 'center';
}

/* 
	.querySelector()
		- grab the first instance of an element matching your selector, or null if nothing is found
		- you can target by either ID, Class (CSS Class NOT JS), or Element
			- will need # for ID
			- will need . for Class (CSS Class)
*/

let toDoList = document.querySelector('#list-title');
console.log(toDoList);

toDoList.style.textAlign = 'center';

// .querySelectorAll()
let nodeListLi = document.querySelectorAll('li');
console.log(nodeListLi); // return a NodeList: similar to an HTMLCollection, though it IS an array not an array-like object

// Event Listeners
/* 
	Allow us to execute a function when a specific event occurs

	These events may include:
		- pressing a key down
		- lifting a key up
		- clicking
		- submitting a form

	.addEventListener()
		- DOM node method
		- requires an event to "listen for" as well as a callback function, which will run when that event happens
*/

// first up, we need to know WHAT is listening for an event
let button = document.getElementById('submit'); // this does NOT want a # in it, the method already knows it is looking for an ID
// next, we are going to begin listening for some event, and have a callback function ready
// console.log(button);

button.addEventListener("click", (currentEvent) => {
	console.log(currentEvent);
	console.log('Someone clicked the button');
	// console.log(input.value);
});

/* 
	TODO Add an item input by the user to our todo list

*/