// Zadanie 1 ✅
console.log("Zadanie 1");

const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

console.log(ticktacktoe[2][1]);

// Zadanie 2
console.log("Zadanie 2");

function multiplyBy2(array) {
  if (array.isArray == true) {
    return "Not an array";
  } else {
    const output = [];
    for (let i = 0; i < array.length; i++) {
      output.push(array[i] * 2);
    }
    return output;
  }
}
console.log(multiplyBy2([1, 5, 8, 21])); // [2, 10, 16, 42]
console.log(multiplyBy2([17, 123124, 3])); // [34, 246248, 6]
console.log(multiplyBy2("hej"));

// Zadanie 3
console.log("Zadanie 3");

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

function isValueTruthy(array) {
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) == true) {
      return array[i] + "is truthy";
    } else array[i] + "is falsy";
  }
}
console.log(1); // 1 is truthy
console.log("💩"); // 💩 is truthy
console.log(""); //  is falsy

// Zadanie 4 ✅
console.log("Zadanie 4");

function check(arr) {
  switch (arr.length) {
    case 1:
      return "#green";
    case 2:
      return "#red";
    case 3:
      return "#blue";
    default:
      return "#black";
  }
}
console.log(check([1, 2, 3, 4]));

// Zadanie 5
console.log("Zadanie 5");

function stringLength(arrString) {
  const output = [];
  for (let i = 0; i < arrString.length; i++) {
    output.push([i].length);
  }
  return output;
}

stringLength(["hello", "world", "dog", "sophisticated"]); // [5, 5, 3, 13]
console.log(stringLength(["hello", "world", "dog", "sophisticated"]));
// czemu wyświetla 1?

// Zadanie 6 ✅
console.log("Zadanie 6");

const people = ["Will", "Hanna", "Rose", "Mike"];

let sortedNames = people.sort();
console.log(sortedNames);

// Zadanie 7
console.log("Zadanie 7");

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];
// 1.
function pickNumbers(numbers) {
  let output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 20) {
      output.push(numbers[i]);
    }
  }
  return `Elementy większe lub równe od 20: ${output}`;
}
// 2.
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(pickNumbers(numbers));
console.log(sumNumbers(numbers));

// Zadanie 8 ✅
console.log("Zadanie 8");

function longestString(array) {
  let longestWord = "";
  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

console.log(longestString(["earth", "vegetable", "cat"])); // 'vegetable'
console.log(longestString(["dog", "snake", "grasshopper"])); // 'grasshopper'
console.log(longestString(["home", "born", "on"])); // 'home'
console.log(longestString(["nice tasks", "could have been better"])); //'could have been better'

// Zadanie 9
console.log("Zadanie 9");

function flatArray() {}
