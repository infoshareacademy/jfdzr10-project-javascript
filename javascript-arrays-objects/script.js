//Zadanie 1
const ticktacktoe = [
	["x", "o", "x"],
	["x", "x", "o"],
	["o", "**", "o"],
];

console.log(ticktacktoe[2][1]);

//Zadanie 2

function multiplyBy2(array) {
	array.forEach((element) => console.log(element * 2));
}

multiplyBy2([1, 5, 8, 21]);
multiplyBy2([17, 123124, 3]);

//Zadanie 3
const values = [
	[],
	{},
	-10,
	1,
	0,
	"",
	"full string",
	" ",
	undefined,
	NaN,
	null,
	"0️⃣",
	"💩",
];

console.log(values.map((element) => (element ? "truthy" : "false")));

//Zadanie 4
function check(array) {
	const arrayLength = array.length;

	switch (arrayLength) {
		case 1:
			console.log("#green");
			break;
		case 2:
			console.log("#red");
			break;
		case 3:
			console.log("#blue");
			break;
		default:
			console.log("#black");
	}
}

check([1, 3, 4, 6]);

//Zadanie 5
function stringLength(array) {
	return array.map((element) => element.length);
}

console.log(stringLength(["hello", "world", "dog", "sophisticated"]));

//Zadanie 7
const numbers = [
	11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
	-53, 17, -21,
];

const higherThan20 = numbers.filter((element) => {
	if (element >= 20) {
		return element;
	}
});
console.log(higherThan20);

const numbersSum = numbers.reduce((acc, currentValue) => acc + currentValue);
console.log(numbersSum);

const negativesSum = numbers
	.filter((element) => {
		if (element < 0) {
			return element;
		}
	})
	.reduce((acc, currentValue) => acc + currentValue);

console.log(negativesSum);
const initialValue = 0;
const positivesSum = numbers.reduce((acc, currentValue, currentIndex) => {
	return currentIndex % 2 === 0 ? acc + currentValue : acc;
});

console.log(positivesSum);

//Zadanie 8
function longestString(array) {
	array.sort((firstString, secondString) => {
		return secondString.length - firstString.length;
	});
	return array[0];
}

console.log(longestString(["earth", "vegetable", "cat"]));
console.log(longestString(["dog", "snake", "grasshopper"]));
console.log(longestString(["home", "born", "on"]));
console.log(longestString(["nice tasks", "could have been better"]));

//Zadanie 9
function flatArray(array) {
	console.log(array.flat());
}

flatArray([
	["a", "b"],
	[1, 2],
]);

flatArray([
	["red", "blue"],
	["green", "red", "yellow"],
	["black", "blue"],
	["pink", "black", "white"],
]);
