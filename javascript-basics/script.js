// Zadanie 1.
console.log("123" == 123);
console.log("123" === 123);
// Zadanie 2.
console.log(0 == false);
console.log(0 === false);
// Zadanie 3.
let userName = "Mariusz";
let age = 35;
let city = "Warsaw";

console.log(
	`Our user's name is: ${userName} and is ${age} years old and lives in ${city}`
);
// Zadanie 4.
function sum(a, b) {
	return a + b;
}

const ten = sum(5, 5);
const four = sum(2, 2);
const myAddedNumbers = sum(ten, four);

console.log(myAddedNumbers);
// Zadanie 5.
console.log(`Username: ${userName} have length: ${userName.length}.`);
// Zadanie 6.
const firstUser = "Adam";
const secondUser = "Maria";

if (firstUser === secondUser) {
	console.log("O! The names are the same!");
} else {
	console.log("Unfortunately the names are different :(");
}
// Zadanie 7.
const age2 = 12;

if (age2 > 18) {
	console.log("User is adult");
} else {
	console.log("User is underage");
}

age2 > 18 ? console.log("User is adult") : console.log("User is underage");
// Zadanie 8.
function getBiggerNumber(a, b) {
	if (a > b) {
		return a;
	} else if (a < b) {
		return b;
	} else {
		console.log("Numbers are equal");
	}
}
console.log(getBiggerNumber(2, 4));
console.log(getBiggerNumber(2, 10));
console.log(getBiggerNumber(2000, 100));
// Zadanie 9.
function itemsInCart(a) {
	if (a === 1) {
		return `You have ${a} item in your cart.`;
	} else if (a > 0) {
		return `You have ${a} items in your cart.`;
	} else {
		return `You cart is empty.`;
	}
}

console.log(itemsInCart(3));
console.log(itemsInCart(1));
// Zadanie 10.
let userAge = prompt("Please enter your age", "");
let userAgeAsNumber = parseInt(userAge);

if (userAgeAsNumber > 125 || userAgeAsNumber < 0) {
	console.log("You provided incorrect age.");
} else if (userAgeAsNumber > 35) {
	console.log("You could be a president!");
} else if (userAgeAsNumber > 18) {
	console.log("At least you can have a beer.");
} else {
	console.log("You cannot be a president and can't even drink beer :(");
}
// Zadanie 11.
const isRaining = true;
const hasJacket = true;
const longTrip = true;
const isSummer = false;

function shouldTakeUmbrella(rain, jacket, trip, season) {
	rain && jacket && trip && !season
		? console.log("Take an umbrella")
		: console.log("Your call");
}

shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer);
// Zadanie 12.
function isEqual(a, b) {
	if (a === b) {
		return true;
	} else {
		return false;
	}
}

console.log(isEqual(2, 2));
console.log(isEqual(2, 10));
console.log(isEqual(2000, 100));
console.log(isEqual(100, "100"));
// Zadanie 13.
function canRideRollerCoaster(age, height) {
	if (age > 18 && height > 175) {
		console.log("Can ride!");
		return true;
	} else {
		console.log("Sorry kiddo, no can do.");
		return false;
	}
}

canRideRollerCoaster(17, 180); // false
canRideRollerCoaster(19, 150); // false
canRideRollerCoaster(13, 150); // false
canRideRollerCoaster(19, 190); // true

function canRideRollerCoasterSwitch(age, height) {
	const condition = age > 18 && height > 175;
	switch (condition) {
		case true:
			console.log("Can ride!");
			return true;
			break;
		default:
			console.log("Sorry kiddo, no can do.");
			return false;
			break;
	}
}

canRideRollerCoasterSwitch(17, 180); // false
canRideRollerCoasterSwitch(19, 150); // false
canRideRollerCoasterSwitch(13, 150); // false
canRideRollerCoasterSwitch(19, 190); // true
// Zadanie 14.
function alphabeticalOrder(word) {
	const wordToArray = word.split("");
	const sortedLetters = wordToArray.sort();
	const outputWord = sortedLetters.join("");
	return outputWord;
}

console.log(alphabeticalOrder("javascript"));
// Zadanie 15.
function reverseText(text) {
	let reversedText = "";
	for (let i = text.length - 1; i >= 0; i--) {
		reversedText = reversedText + text[i];
	}
	return reversedText;
}

console.log(reverseText("javascript"));
// Zadanie 16.
function getInitials(string) {
	let splittedUserName = string.split(" ");
	let initials = "";

	for (i = 0; i < splittedUserName.length; i++) {
		let initialsArray = splittedUserName[i][0];
		initials = initials + initialsArray + ".";
	}
	return initials;
}

console.log(getInitials("Harry Potter"));
// Zadanie 17.
function slugify(string) {
	const stringToLowerCase = string.toLowerCase();
	const stringToSlug = stringToLowerCase.replaceAll(" ", "-");

	return stringToSlug;
}

console.log(slugify("Top 10 my favourite songs"));
console.log(slugify("Name of my blog article"));
// Zadanie 18.
function toUpperCase(sentence) {
	const words = sentence.split(" ");

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substring(1);
	}

	return words.join(" ");
}

console.log(toUpperCase("top 10 my favourite songs"));
console.log(toUpperCase("Name of my Blog article"));
