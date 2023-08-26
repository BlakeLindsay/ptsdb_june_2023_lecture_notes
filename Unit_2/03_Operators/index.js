/*
	Operators
	 - Assignment =
	 - Dot .
	 - Plus +
	 - Subtraction -
	 - Times *
	 - Division /
	 - Power **
	 - Comparison ==
	 - Comparison ===
	 - Inequality !=
	 - Inequality !==
	 - Greater Than >
	 - GT or Equal >=
	 - Less Than <
	 - LT or Equal <=

	 Used for:
	 - Assign
	 - Compare
	 - Arithmetic
	 - Logic
	 - Conditions
	 */

// Assignment and Dot Operator
let myObject = { example: "text"};
console.log(myObject.example);

// Arithmetic Operators
let initial = 100;
console.log(initial);

// Addition
initial = initial + 5;
console.log(initial); // 105
initial += 5; // 105 + 5
console.log(initial); // 110

// Subtraction
initial = initial -3;
console.log(initial); //107
initial -= 7; // 107 -7
console.log(initial); // 100

// Division
initial = initial / 5;
console.log(initial); // 20
initial /= 4; // 20 / 4
console.log(initial); // 5

// Multiplication
initial = initial * 2;
console.log(initial); // 10
initial *= 10; // 10 * 10
console.log(initial); // 100

// Power
initial = initial ** 2; // 100^2
console.log(initial); // 10000
initial **= 2; // 10000^2
console.log(initial); // 100000000

// Modulo: gives us a remainder after division
initial = initial % 30;
console.log(initial); // 10
initial %= 2;
console.log(initial); // 0


// Comparison Operators

// Equality : cares about value NOT type
console.log(3 == 3); // true
console.log(2 == 3); // false
console.log('3' == 3); // true
console.log(2 == 3 - 1); // true
console.log('three' == 3); // false
console.log('rabbit' == 'raBbit'); // false

// Strict Equality
console.log(3 === 3); // true
console.log(2 === 3); // false
console.log('3' === 3); // false
console.log(15 - 13 === 3 - 1); // true

// Inequality
console.log(3 != 3); // false
console.log(2 != 3); // true
console.log('3' != 3); // false

// Strict Inequality
console.log(3 !== 3); // false
console.log(2 !== 3); // true
console.log('3' !== 3); // true

// Greater Than
console.log(3 > 3); // false
console.log(2 > 3); // false
console.log('3' > 2); // true

// Greater than or Equal
console.log(3 >= 3); // true

// Less Than
console.log(3 < 3); // false
console.log(2 < 3); // true
console.log('2' < 3); // true

// Less Than or Equal
console.log(3 <= 3); // true

// Logic Operators

// And
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(3 == '3' && 2 < 3); // true

// Or
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log (3 === '3' || 2 < 3); //true