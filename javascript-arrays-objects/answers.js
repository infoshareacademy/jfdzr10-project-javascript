// ### Zadanie 1.

// Wybierz element `**` z zagnieżdżonej tablicy

const ticktacktoe = [
    ["x", "o", "x"],
    ["x", "x", "o"],
    ["o", "**", "o"],
  ];

  console.log(ticktacktoe[2][1]);

  //### Zadanie 2.

// Stwórz funkcję `multiplyBy2()`, która mnoży elementy w tablicy razy 2.

function multiplyBy2(array) {
    if(typeof array === 'object'){
for (const element of array) {
    console.log(element * 2);
}}
}

multiplyBy2([2, 4, 6]);
multiplyBy2([17, 123124, 3]);


//### Zadanie 3.

// Sprawdź czy element w tablicy jest `truthy` lub `falsy`
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

  function isTruthy(array) {
    for (let i= 0; i < array.length; i++)
        if (Boolean(array[i]) == true) {
            console.log(array[i] + ' is truthy')
        } 
        else {
            console.log(array[i] + ' is falsy')
        }
    };


  isTruthy(values);

  // ### Zadanie 4.

// Napisz funkcję `check()`, która przyjmuje w parametrze tablicę - w zależności od długości tablicy - funkcja powinna zwrócić odpowiedni string z kolorem:

function check(array) {
let arrayLength = array.length;
if (typeof array == 'object' ){
switch (arrayLength){
case 1: {
    return '#green';
}
case 2: {
    return '#red';
}
case 3: {
    return '#blue';
}
default: {
    return '#black';
}
}
} else {
    return 'Not an array';
}
}

let arr1 = [1];
let arr2 = [1, 2];
let arr3 = [1, 2, 3];
let arr4 = [1, 2, 3, 4];

console.log(check(arr1));
console.log(check(arr2));
console.log(check(arr3));
console.log(check(arr4));

// ### Zadanie 5.

// Napisz funkcję `stringLength()` która jako parametr przyjmie tablicę stringów i zwróci tablicę ich długości.

function stringLength(array) {
    if(typeof array == 'object' ){
let stringLengths = [];
for (let i = 0; i < array.length; i++) {
let oneString = array[i].length;
stringLengths.push(oneString);
}
return stringLengths;
    }
}

let names = [
    'Aldona',
    'Natalia',
    'Mateusz',
    'Gosia'
]
console.log(stringLength(names));

//Posortuj osoby z tablicy `people` alfabetycznie według nazwiska.

let people = [
    'Brzęczyszczykiewicz Grzegorz',
    'Banaszkiewicz Małgorzata',
    'Potter Harry',
    'Rowling J.K.'
]

console.log(people.sort());


//### Zadanie 7.
const numbers = [
    11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
    -53, 17, -21,
  ];
//1. Wyświetl tylko elementy większe lub równe od 20:
let twentyOrMore = '';
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 20) {
        twentyOrMore += numbers[i] + ',';
    }
    console.log(twentyOrMore);
}

//2. Policz sumę wszytskich elementów tablicy
let sum0 = 0;
for (const element of numbers) {
sum0 += element
}

console.log(sum0);


let sum = 0;
for (let i = 0; i < numbers.length; i++ ) {
    sum += numbers[i]
}
console.log(sum);

let sumOfArray = numbers.reduce(function (previousValue, currentValue) {
return previousValue + currentValue;
} );

console.log(sumOfArray);


//3. Wyświetl sumę elementów tylko ujemnych:

    let sumOfNegatives = 0;
for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] < 0) {
    sumOfNegatives += numbers[i]
}}
console.log(sumOfNegatives);


//4. Wyświetl sumę elementów na indeksach parzystych:

let sumOfEvens = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sumOfEvens += numbers[i]
    }
}
console.log(sumOfEvens);

