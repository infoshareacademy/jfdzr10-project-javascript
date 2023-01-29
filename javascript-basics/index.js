// ### Zadanie 1.
// Sprawdź czy "123" jest równe 123, wykorzystaj oba sposoby na porównanie (== vs ===)

console.log("123" == 123);

// porównuje wartość 

console.log("123" === 123);

// porównuje typ

// ### Zadanie 2.
// Sprawdź czy 0 jest równe wartości false przy użyciu obu sposobów porównania (== vs ===)

console.log(0 == false);

console.log(0 === false);

// ### Zadanie 3.

// 1. Stwórz zmienną o nazwie userName i przypisz jej swoje imie.
// 2. Stwórz zmienną o nazwie age i przypisz jej dowolną wartość numeryczną
// 3. Stwórz zmienna o nazwie city i przypisz jej nazwę dowolnej miejscowości
// 4. Wydrukuj w konsoli taka informacje:
//    `Our user's name is: '' and is '' years old and lives in ''`

// Luki w powyższym zdaniu wypełnij wartościami ze zmiennych.

let userName = "Mateusz"; 
// let age = "30";
let city = "Gdańsk";

// console.log(`Our user's name is: ${userName} and is ${age} years old and lives in ${city}`);


// ### Zadanie 4.

// 1. Stwórz funkcję `sum` dodającą dwie liczby.
// 2. Przypisz wywołanie funkcji `sum(5, 5)` do zmiennej `ten`
// 3. Przypisz wywołanie funkcji `sum(2, 2)` do zmiennej `four`
// 4. Wykorzystaj funkcję `sum`, aby dodać wartości zmiennych `ten` i `four`.
// 5. Wynik przypisz do zmiennej `myAddedNumbers` i wydrukuj wartość tej zmiennej w konsoli.

function sum(a, b) {
    return a + b;
}

let ten = sum(5, 5);
let four = sum(2, 2);
let myAddedNumbers = ten + four; 
console.log(myAddedNumbers); 

// ### Zadanie 5.

// Wydrukuj w konsoli taką informacje:
// `Username: x have length: y.`

// Gdzie `x` to wartość zmiennej userName, a `y` to długość tej wartości

// let userName = "Mateusz";

let x = userName;
let y = x.length;

console.log(`Username: ${x} have length: ${y}.`);

// ### Zadanie 6.

// 1. Stwórz dwie zmienna `firstUser` i `secondUser`. Przypisz im dowolne imiona.
// 2. Napisz instrukcje warunkową `if`, która sprawdzi czy imiona są takie same:
//    1. Jesli Tak - wydrukuj w konsoli wiadomość: "O! The names are the same!"
//    2. Jesli Nie - wydrukuj w konsoli wiadomość: "Unfortunately the names are different :("

let firstUser = "Asia";
let secondUser = "Mateusz";

if (firstUser === secondUser) {
console.log("O! The names are the same!");
} else {
    console.log("Unfortunately the names are different :(");
}

// ### Zadanie 7.

// 1. Stwórz zmienną o nazwie `age`. I przypisz jej dowolną wartość liczbową.
// 2. Napisz instrukcję warunkową, która sprawdzi czy wartość zmiennej `age` jest większa lub równa 18.
//    1. Jeśli Tak - wydrukuj w konsoli wiadomość: "User is adult"
//    2. W każdym innym przypadku - wydrukuj w konsoli wiadomość: "User is underage"
// 3. Zapisz tę funkcję na dwa sposoby
//    1. Za pomocą `if`
//    2. Za pomocą ternary operatora (trójargumentowego)

let age = "17";

if(age>= 18) {
console.log("User is adult");
} else {
    console.log("User is underage");
};

let age2 = "50";

if(age2>= 18) {
console.log("User is adult");
} else {
    console.log("User is underage");
};

// ### Zadanie 8.

// Napisz funkcję `getBiggerNumber`, która z dwóch podanych liczb zwraca większą liczbę.

// Przykład:

// ```js
// getBiggerNumber(2, 4); // 4
// getBiggerNumber(2, 10); // 10
// getBiggerNumber(2000, 100); // 2000
// ```