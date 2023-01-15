// Zadanie 1.
console.log(` 
Zadanie 1:
`);

let word = "123";
let number = 123;

console.log(word == number);
console.log(word === number);

// Zadanie 2.
console.log(` 
Zadanie 2:
`);

let zero = 0;

console.log(zero == false);
console.log(zero === false);

// Zadanie 3.
console.log(` 
Zadanie 3:
`);

let userName = "Adrian";
let age = 17;
let city = "Gdynia";

console.log(
  `Our user's name is ${userName} and is ${age} years old and lives in ${city}`
);

// Zadanie 4.
console.log(` 
Zadanie 4:
`);

let sum = (a, b) => a + b;

let ten = sum(5, 5);
let four = sum(2, 2);

let result = ten + four;

console.log(result);

// Zadanie 5.
console.log(` 
Zadanie 5:
`);

let userName2 = "someone";

console.log(`username: "${userName2}" have length: ${userName2.length}`);
// Zadanie 6.
console.log(` 
Zadanie 6:
`);

let firstUser = "Adrian";
let secondUser = "Adam";

if (firstUser == secondUser) {
  console.log("O! The names are the same!");
} else {
  console.log("Unfortunately the names are different :(");
}

// Zadanie 7.
console.log(` 
Zadanie 7:
`);

let age2 = 5;

if (age2 >= 18) {
  console.log("User is adult");
} else {
  console.log("User is underage");
}

console.log(`
Drugie rozwiazanie:`);

age2 >= 18 ? console.log("User is adult") : console.log("User is underage");

// Zadanie 8.
console.log(` 
Zadanie 8:
`);

console.log(Math.max(2, 4));
console.log(Math.max(2, 10));
console.log(Math.max(2000, 100));

// Zadanie 9.
console.log(` 
Zadanie 9:
`);

let itemsInCart = (a) => {
  if (a === 1) {
    return `You have "${a}" item in your cart.`;
  } else if (a > 1) {
    return `You have "${a}" items in your cart.`;
  }
};

console.log(itemsInCart(1));
console.log(itemsInCart(4));

// Zadanie 10.
console.log(` 
Zadanie 10:
`);

let age3 = prompt("What is your age?");

if (age3 < 0 || age3 > 125) {
  console.log("You provided incorrect age.");
} else if (age3 > 35) {
  console.log("You could be a president!");
} else if (age3 > 18) {
  console.log("At least you can have a beer.");
} else {
  console.log("You cannot be a president and can't even drink beer :(");
}

// Zadanie 11.
console.log(` 
Zadanie 11:
`);

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.

// Zadanie 17.

// Zadanie 18.
