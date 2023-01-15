// Zadanie 1.
console.log("Zadanie 1.");

console.log("123" == 123); // true
console.log("123" === 123); // false

// Zadanie 2.
console.log("Zadanie 2.");

console.log(0 == false); // true
console.log(0 === false); // false

// Zadanie 3.
console.log("Zadanie 3.");

const userName = "Mateusz";
const age = "23";
const city = "Wejherowo";
console.log(
  `Our user's name is: ${userName} and is ${age} years old and lives in ${city}`
);

// Zadanie 4.
console.log("Zadanie 4.");

const sum = (a, b) => a + b;
const ten = sum(5, 5);
const four = sum(2, 2);
const myAddedNumbers = sum(ten, four);
console.log(myAddedNumbers);

// Zadanie 5.
console.log("Zadanie 5.");

console.log(`Username: ${userName} have length: ${userName.length}`);

// Zadanie 6.
console.log("Zadanie 6.");

const firstUser = "Jan";
const secondUser = "Piotr";

if (firstUser === secondUser) {
  console.log("O! The names are the same!");
} else {
  console.log("Unfortunately the names are different :(");
}

// Zadanie 7.
console.log("Zadanie 7.");

if (age >= 18) {
  console.log("User is adult");
} else {
  console.log("User is underage");
}
age >= 18 ? console.log("User is adult") : console.log("User is underage");

// Zadanie 8.
console.log("Zadanie 8.");

const getBiggerNumber = (a, b) => (a > b ? a : b);

console.log(getBiggerNumber(2, 4));
console.log(getBiggerNumber(2, 10));
console.log(getBiggerNumber(2000, 100));

// Zadanie 9.
console.log("Zadanie 9.");

const itemsInCart = (a) => {
  if (a > 1) return `You have ${a} items in your cart.`;
  return `You have ${a} item in your cart.`;
};

console.log(itemsInCart(3));
console.log(itemsInCart(1));

// Zadanie 10.
console.log("Zadanie 10.");

// const userAge = Number(prompt("Enter age"));

// if (userAge > 125 || userAge < 0) {
//   console.log("You provided incorrect age.");
// } else if (userAge > 35) {
//   console.log("You could be a president!");
// } else if (userAge > 18) {
//   console.log("At least you can have a beer.");
// } else {
//   console.log("You cannot be a president and can't even drink beer :(");
// }

// Zadanie 11.
console.log("Zadanie 11.");

const shouldTakeUmbrella = (isRaining, hasJacket, longTrip, isSummer) => {
  if (!isRaining || isSummer) return "No";
  if (isRaining && hasJacket && !longTrip) return "No";
  return "Yes";
};

console.log(shouldTakeUmbrella(true, false, false, false));
console.log(shouldTakeUmbrella(true, false, false, true));
console.log(shouldTakeUmbrella(false, false, true, true));

// Zadanie 12.
console.log("Zadanie 12.");

const isEqual = (a, b) => a === b;

console.log(isEqual(2, 2));
console.log(isEqual(2, 10));
console.log(isEqual(2000, 100));
console.log(isEqual(100, "100"));

// Zadanie 13.
console.log("Zadanie 13.");

const canRideRollerCoaster = (age, height) => {
  if (age > 18 && height > 175) {
    console.log("Can Ride");
    return true;
  }
  console.log("Sorry kiddo, no can do");
  return false;
};

console.log(canRideRollerCoaster(17, 180));
console.log(canRideRollerCoaster(19, 150));
console.log(canRideRollerCoaster(13, 150));
console.log(canRideRollerCoaster(19, 190));

// Zadanie 14.
console.log("Zadanie 14.");

const alphabeticalOrder = (text) => {
  const trimedText = text.trim();
  let orderedText = "";
  const unicodesArray = [];
  for (const i in trimedText) {
    unicodesArray.push(trimedText.charCodeAt(i));
  }
  const sortedCodes = unicodesArray.sort((a, b) => a - b);
  for (const code of sortedCodes) {
    orderedText += String.fromCharCode(code);
  }
  return orderedText;
};

console.log(alphabeticalOrder("javascript"));

// Zadanie 15.
console.log("Zadanie 15.");

const reverseText = (text) => {
  const trimedText = text.trim();
  let reversedText = "";
  for (let i = trimedText.length - 1; i >= 0; i--) {
    reversedText += trimedText[i];
  }
  return reversedText;
};

console.log(reverseText("javascript"));

// Zadanie 16.
console.log("Zadanie 16.");

const getInitialsw = (text) => {
  const trimedText = text.trim();
  const wordsInArray = trimedText.split(" ");
  let initials = "";
  for (const word of wordsInArray) {
    initials += `${word[0]}.`;
  }
  return initials;
};

console.log(getInitialsw("Harry Potter"));

// Zadanie 17.
console.log("Zadanie 17.");

const slugify = (text) => {
  const trimedText = text.trim();
  const lowerCasedText = trimedText.toLowerCase();
  return lowerCasedText.split(" ").join("-");
};

console.log(slugify("Top 10 my favourite songs"));
console.log(slugify("Name of my blog article"));

// Zadanie 18.
console.log("Zadanie 18.");

const toUpperCase = (text) => {
  const trimedText = text.trim();
  const splitedText = trimedText.split(" ");
  const upperCasedWords = [];
  let firstChar = "";
  let restWord = "";
  for (const word of splitedText) {
    firstChar = word.slice(0, 1).toUpperCase();
    restWord = word.slice(1);
    upperCasedWords.push(`${firstChar + restWord.toLowerCase()}`);
  }
  return upperCasedWords.join(" ");
};

console.log(toUpperCase("Top 10 my favourite songs"));
console.log(toUpperCase("Name of my blog article"));

