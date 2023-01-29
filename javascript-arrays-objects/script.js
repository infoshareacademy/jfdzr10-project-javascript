// ### Zadanie 1.

console.log("Zadanie 1")

const ticktacktoe = [
    ["x", "o", "x"],
    ["x", "x", "o"],
    ["o", "**", "o"],
  ];

  console.log(ticktacktoe[2][1]);
  console.log(ticktacktoe[0][0]);
  console.log(ticktacktoe[2][0]);

  
// ### Zadanie 2.
console.log("---------------")
console.log("Zadanie 2")

const myNumbers = [7, 4, 28, 11];

function multiplyBy2 (array) {
for (let i = 0; i < myNumbers.length; i++) {
    array[i] = array[i] * 2;
}
return array;
}

console.log(multiplyBy2(myNumbers));

// ### Zadanie 3.
console.log("---------------")
console.log("Zadanie 3")

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

//   function checkType () {
//     values.map((x) => console.log(Boolean(x)));
//   }

//   checkType();

function check () {
    for (let i = 0; i < values.length; i++) {
       if (values[i] == true) {
        console.log(values[i] + " is truthy");
       } 
       else {
        console.log(values[i] + " is falsy")
       }
    }
}

check();

// ### Zadanie 4.
console.log("---------------")
console.log("Zadanie 4")

const tab = ["AA", "BB", "CC"];

// const tes = (array) => {
//     let arrLength = array.length;
//     switch (arrLength) {
//         case 5:
//           console.log("yes");
//           return "yes"; 
//         default:
//             console.log("no");
//             return "black";
//     }
// };

const expr = tab.length;
switch (expr) {
    case 1:
        console.log("green");
        break;
    case 2:
        console.log("red");
        break;
    case 3:
        console.log("blue");
        break;
    default:
        console.log("black");
        break;
};

expr(tab);

// ### Zadanie 5.
console.log("---------------")
console.log("Zadanie 5")

let array1 = ["hello", "world", "dog", "sophisticated"];
console.log(array1[1]);





// Napisz funkcję `stringLength()` która jako parametr przyjmie tablicę stringów i zwróci tablicę ich długości.

// Przykład:

// ```js
// stringLength(["hello", "world", "dog", "sophisticated"]); // [5, 5, 3, 13]