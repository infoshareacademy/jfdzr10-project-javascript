// Zadanie 1.
console.log({ '"123" == 123': "123" == 123 });
console.log({ '"123" === 123': "123" === 123 });

// Zadanie 2.
console.log({ "0 == false": 0 == false });
console.log({ "0 === false": 0 === false });
// Zadanie 3.
const userName = "Adrian";
const age = 34;
const city = "Gdańsk";
console.log(
  `Our user's name is: ${userName} and is ${age} years old and lives in ${city}`
);
// Zadanie 4.
const sum = (a, b) => a + b;
let ten = sum(5, 5);
let four = sum(2, 2);
let myAddedNumbers = sum(ten, four);
console.log(myAddedNumbers);
// Zadanie 5.
console.log(`Username: ${userName} have length: ${userName.length}`);
// Zadanie 6.
const firstUser = "Tom";
const secondUser = "Jerry";
if (firstUser === secondUser) {
  console.log("O! The names are the same!");
} else {
  console.log("Unfortunately the names are different :(");
}

// Zadanie 7.
function ternary(age) {
  return console.log(age >= 18 ? "User is adult" : "User is underage");
}
function classic(age) {
  if (age >= 18) {
    return console.log("User is adult");
  } else {
    return console.log("User is underage");
  }
}
ternary(age);
classic(age);
// Zadanie 8.
const getBiggerNumber = (a, b) => Math.max(a, b);
console.log(getBiggerNumber(4, 10));
// Zadanie 9.
function itemsInCart(numberOfItems) {
  if (numberOfItems == 0) return console.log("You have no items in your cart");
  if (numberOfItems == 1) return console.log("You have 1 item in your cart");
  if (numberOfItems > 1)
    return console.log("You have " + numberOfItems + " items in your cart");
}
itemsInCart(0);
itemsInCart(1);
itemsInCart(4);
// Zadanie 10.
const checkAge = () => {
  let number = prompt("What is your age");
  if (number > 125 || number < 0)
    return console.log("You provided incorrect age.");
  if (number > 35) return console.log("You could be a president!");
  if (number > 18) {
    return console.log("At least you can have a beer.");
  } else {
    return console.log(
      "You cannot be a president and can't even drink beer :("
    );
  }
};
checkAge();
// Zadanie 11.
const shouldTakeUmbrella = (isRaining, hasJacket, longTrip, isSummer) =>
  isRaining && !hasJacket && longTrip && isSummer
    ? console.log("Take umberla")
    : console.log("Don't need one");
shouldTakeUmbrella(true, false, true, true);
// Zadanie 12.
const isEqual = (a, b) => (a === b ? console.log(true) : console.log(false));
isEqual(3, 3);
// Zadanie 13.
function canRideRollerCoaster(age, height) {
  if (age > 18 && height > 175) {
    console.log("Can ride!");
    return true;
  } else {
    return false;
  }
}
canRideRollerCoaster(20, 200);
// Zadanie 14.
const alphabeticalOrder = (text) => {
  let temp = [...text];
  console.log(temp.sort().join(""));
};
alphabeticalOrder("javascript");
// Zadanie 15.
const reverseText = (text) => {
  let temp = [...text];
  console.log(temp.reverse().join(""));
};
reverseText("javascript");
// Zadanie 16.
function getInitials(name) {
  let temp =
    name
      .split(" ")
      .map((n) => n[0])
      .join(".") + ".";
  return console.log(temp);
}
getInitials("Adrian Baran");
// Zadanie 17.
const slugify = (text) => {
  let temp = text
    .split(" ")
    .map((m) => m.toLowerCase())
    .join("-");
  return console.log(temp);
};
slugify("Top 10 my favourite songs");
slugify("Name of my blog article");
// Zadanie 18.
const toUpperCase = (text) => {
  let temp = text
    .split(" ")
    .map((m) => {
      let tempArr = [...m];
      tempArr[0] = tempArr[0].toUpperCase();
      return tempArr.join("");
    })
    .join(" ");
  return console.log(temp);
};
toUpperCase("top 10 my favourite songs");
toUpperCase("Name of my Blog article");
