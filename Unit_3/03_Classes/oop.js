class Pet {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	speak() {
		return `${this.name} says "woof!"`;
	}
}

let coco = new Pet('Coco', 'brown');
//console.log(`${coco.name} says "woof!"`); // not be as flexible, I will also write the same code more
console.log(coco.speak());

let cammie = new Pet('Cammie', 'gray');
console.log(cammie.speak());

class Dog extends Pet {
	constructor(name, color, voice) {
		super(name, color);
		this.voice = voice;
	}

	speak() {
		return `${this.name} says ${this.voice}`;
	}

	wagTail() {
		return `${this.name} wags their ${this.color} tail :)`;
	}
}

class Cat extends Pet {
	constructor(name, color, voice) {
		super(name, color);
		this.voice = voice;
	}

	speak() {
		return `${this.name} says ${this.voice}`;
	}
}

let moose = new Dog('Moose', 'brown', 'BORK!');
console.log (moose.speak());
console.log(moose.wagTail());

let sylvester = new Cat('Sylvester', 'black and white', 'thufferin\' thuckatash');
console.log(sylvester.speak());
// console.log(sylvester.wagTail()); // not a function

// Challenge

class Tab {
	constructor(sub, tax) {
		this.subtotal = sub;
		this.tax = tax;
		this.tip;
	}

	tipAmount(x) {
		let total = this.subtotal + this.tax;

		this.tip = total * x;
		let final = total + this.tip;
		return final.toFixed(2);
	}
}

let salesTax = 0.075;
let tipPercent = 0.20;

let dinnerBill = new Tab(42.83, salesTax);

function calcTip(bill) {
	return bill.tipAmount(tipPercent);
}

console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of ${dinnerBill.tip.toFixed(2)}`);