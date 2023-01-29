// Zadanie 1.
let a = "123";
let b = 123;
console.log(a == b);
console.log(a === b);
// Zadanie 2.
let value = 0;
let value2 = false;
console.log(value == value2);
console.log(value === value2);
// Zadanie 3.
let user = "Natalia";
console.log(user);

let age = 24;
console.log(age);

let city = "Lublin";
console.log(city);

let concatExample =
  "Our user name is:" +
  " " +
  user +
  " " +
  "and is" +
  " " +
  age +
  " " +
  "years old and lives in" +
  " " +
  city;
console.log(concatExample);
// Zadanie 4.

function sum(a, b) {
  return a + b;
}

let ten = sum(5, 5);

let four = sum(2, 2);

let myAddedNumbers = sum(ten, four);

console.log(myAddedNumbers);

// Zadanie 5.
let x = "userName";
let y = "8";
console.log(x);
console.log(y);

let concatxy = `Username:` + " " + x + " " + `have length:` + " " + y + ".";
console.log(concatxy);

// Zadanie 6.
let firstUser = "Natalka";
let secondUser = "Ola";

if (firstUser === secondUser) {
  console.log("O! The names are the same!");
} else {
  console.log("Unfortunately the names are different");
}

// Zadanie 7.
let age1 = 24;

if (age1 >= 18) {
  console.log("User is adult");
} else {
  console.log("User is underage");
}

let age2 = 26;
let adult = age2 >= 18 ? "User is adult" : "User is underage";
console.log(adult);
// Zadanie 8.

// Zadanie 9.

// Zadanie 10.

// Zadanie 11.

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.

// Zadanie 17.

// Zadanie 18.
// ---------------------------------------------
// ZAJĘCIA 2

//ZADANIE 1.


const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

console.log(ticktacktoe[2][1]);

//Zadanie 2


function multiplyBy2(array) {
  const output = [];
  for (let i=0; i < array.length; i++){
    output.push(array[i] * 2);
  }
  return output;
}
console.log(multiplyBy2([1, 5, 8, 21]));
console.log(multiplyBy2([17, 123124, 3]));
console.log(multiplyBy2([17, 123124, 3]));

//Zadanie 3
