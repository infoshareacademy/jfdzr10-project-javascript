// Zadanie 1.
console.log("Zadanie 1");
console.log("123" == 123);
console.log("123" === 123);

// Zadanie 2.
console.log("Zadanie 2");
console.log(0 == false);
console.log(0 === false);

// Zadanie 3.
console.log("Zadanie 3");
let userName = "Aldona";
let age = 27;
let city = "Gdańsk";

console.log(
  `Our user's name is: ${userName} and is ${age} years old and lives in ${city}`
);

// Zadanie 4.
console.log("Zadanie 4");
const sum = function (a, b) {
  return a + b;
};
// const sum = (a, b) => a + b;

let ten = sum(5, 5);
let four = sum(2, 2);

let myAddedNumbers = ten + four;
console.log(myAddedNumbers);

// Zadanie 5.
console.log("Zadanie 5");
let userName1 = "Nazwa";
console.log(`Username: ${userName1} have length: ${userName1.length}.`);
// Zadanie 6.
console.log("Zadanie 6");

let firstUser = "Maja";
let secondUser = "Mikołaj";

if (firstUser === secondUser) {
  console.log("O! The names are the same!");
} else {
  console.log("Unfortunately the names are different :(");
}

// Zadanie 7.
console.log("Zadanie 7");

let yourAge = 16;

if (yourAge >= 18) {
  console.log("User is adult");
} else {
  console.log("User is underage");
}

yourAge >= 18 ? console.log("User is adult") : console.log("User is underage");

// Zadanie 8.
console.log("Zadanie 8");

let getBiggerNumber = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(getBiggerNumber(2, 4));
console.log(getBiggerNumber(2, 10));
console.log(getBiggerNumber(2000, 100));

// Zadanie 9.
console.log("Zadanie 9");

let itemsInCart = function (x) {
  if (x === 1) {
    return `You have ${x} item in your cart`;
  } else {
    return `You have ${x} items in your cart`;
  }
};

console.log(itemsInCart(3));
console.log(itemsInCart(1));

// Zadanie 10.
console.log("Zadanie 10");

// let age2 = prompt("Please enter your age");
// {
//   if (age2 > 125 || age2 <= 0) {
//     console.log("You provided incorrect age.");
//   } else if (age2 > 35) {
//     console.log("You could be a president!");
//   } else if (age2 > 18 && age2 < 35) {
//     console.log("At least you can have a beer.");
//   } else {
//     console.log("You cannot be a president and can't even drink beer :(");
//   }
// }

// po wklejeniu do konsoli przeglądarki działa

// Zadanie 11.
console.log("Zadanie 11");

function shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer) {
  if (
    isRaining === "true" ||
    hasJacket === "false" ||
    longTrip === "true" ||
    isSummer === "false"
  ) {
    return "Take the umbrella";
  } else if (
    isRaining === "false" ||
    hasJacket === "true" ||
    longTrip === "false" ||
    isSummer === "true"
  ) {
    return "Don't take umbrella";
  }
}

console.log(shouldTakeUmbrella("false", "true", "false", "true"));

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.

// Zadanie 17.

// Zadanie 18.
