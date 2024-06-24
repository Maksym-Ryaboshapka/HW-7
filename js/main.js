// Task 1

const numbers = [3, 8, 14];
numbers[1] = 10;

console.log(numbers);

// Task 2

const strings = ["string1", "string2", "string3"];
strings[3] = "strings4";

console.log(strings);

// Task 3

const arrNumbers1 = [8, -5, 2, 15, 9];
let sum = 0;

for (const number1 of arrNumbers1) {
	sum += number1;
}

console.log(sum);

// Task 4

const arrNumbers2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arrNumbers2.length; i++) {
	console.log(arrNumbers2[i]);
}

// Task 5

const arrStrings = ["Hello", "string", "test", "Maksym", "JavaScript"];

for (const string of arrStrings) {
	if (string.length > 5) {
		console.log(string);
	}
}

// Task 6

const arrNumbers3 = [3, 6, 7, 11, 48, 17, 24, 27, 31, 44];
let biggestNumber = arrNumbers3[0];

for (const number2 of arrNumbers3) {
  if (biggestNumber < number2) {
    biggestNumber = number2;
  }
}

console.log(biggestNumber);

// Task 7

const arrNumbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number3 of arrNumbers4) {
	if (number3 % 2 === 0) {
		console.log(number3);
	}
}