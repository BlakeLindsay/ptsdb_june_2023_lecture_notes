/* 
	Create a new row and display on my webpage in the given area

	1. create the div element for our new row
	2. start creating new columns for our row
	3. apply some classes to our columns/row
	4. add content to our columns
	5. add our row to our webpage
*/

let row = document.createElement('div');
let column1 = document.createElement('div');
let column2 = document.createElement('div');
let column3 = document.createElement('div');

row.className = 'row';
column1.classList.add('col'); // this affects our class as an array
column2.className = 'col';
column3.classList.add('col');

column1.innerText = 'DOM Elememnt Number 1';
column2.innerHTML = 'DOM Element Number 2';
column3.innerHTML = '<button type="button" class="btn btn-info">Info</button>';

// add my columns into my row, and my row onto the webpage
row.appendChild(column1);
row.appendChild(column2);
row.appendChild(column3);

let target = document.getElementById('target');
target.appendChild(row);