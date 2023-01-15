// Zadanie 1.
// Sprawdź czy "123" jest równe 123, wykorzystaj oba sposoby na porównanie (== vs ===)
let a = "123";
let b = 123;

console.log("ZADANIE 1");
// ==  porównuje obie wartości bez porównania ich typów
if (a == b) {
  console.log(true);
} else {
  console.log(false);
}

if (a === b) {
  console.log(true);
} else {
  console.log(false);
}
// === porównuje obie wartości i ich typ

// Zadanie 2.
// Sprawdź czy 0 jest równe wartości false przy użyciu obu sposobów porównania (== vs ===)

let c = 0;
console.log("ZADANIE 2");
if (c == false) {
  console.log(true);
} else {
  console.log(false);
}

if (c === false) {
  console.log(true);
} else {
  console.log(false);
}

// Zadanie 3.
// 1. Stwórz zmienną o nazwie userName i przypisz jej swoje imie.
// 2. Stwórz zmienną o nazwie age i przypisz jej dowolną wartość numeryczną
// 3. Stwórz zmienna o nazwie city i przypisz jej nazwę dowolnej miejscowości
// 4. Wydrukuj w konsoli taka informacje:
//    `Our user's name is: '' and is '' years old and lives in ''`

// Luki w powyższym zdaniu wypełnij wartościami ze zmiennych.
console.log("ZADANIE 3");
let userName = "Agata";
let age = 18;
let city = "Gdańsk";
console.log(
  `Our user name is ${userName} and is ${age} years old and lives in ${city}.`
);

// Zadanie 4.
// 1. Stwórz funkcję `sum` dodającą dwie liczby.
// 2. Przypisz wywołanie funkcji `sum(5, 5)` do zmiennej `ten`
// 3. Przypisz wywołanie funkcji `sum(2, 2)` do zmiennej `four`
// 4. Wykorzystaj funkcję `sum`, aby dodać wartości zmiennych `ten` i `four`.
// 5. Wynik przypisz do zmiennej `myAddedNumbers` i wydrukuj wartość tej zmiennej w konsoli.
console.log("ZADANIE 4");
function sum(a, b) {
  return a + b;
}
let ten = sum(5, 5);
console.log(ten);

let four = sum(2, 2);
console.log(four);

let addNumbers = sum(ten, four);
console.log(`addNumers: ${addNumbers}`);

// Zadanie 5.
// Wydrukuj w konsoli taką informacje:
// `Username: x have length: y.`

// Gdzie `x` to wartość zmiennej userName, a `y` to długość tej wartości
console.log("ZADANIE 5");

let userName1 = "Agata";
let userName1Length = userName1.length;

console.log(`Username: ${userName1} have length: ${userName1Length}.`);

// Zadanie 6.
// 1. Stwórz dwie zmienna `firstUser` i `secondUser`. Przypisz im dowolne imiona.
// 2. Napisz instrukcje warunkową `if`, która sprawdzi czy imiona są takie same:
//    1. Jesli Tak - wydrukuj w konsoli wiadomość: "O! The names are the same!"
//    2. Jesli Nie - wydrukuj w konsoli wiadomość: "Unfortunately the names are different :("

console.log("ZADANIE 6");
let firstUser = "Jan";
let secondUser = "Antoni";

if (firstUser === secondUser) {
  console.log(`"O! Names are the same"`);
} else console.log(`"Unfortunately the names are different :("`);

// Zadanie 7.
// 1. Stwórz zmienną o nazwie `age`. I przypisz jej dowolną wartość liczbową.
// 2. Napisz instrukcję warunkową, która sprawdzi czy wartość zmiennej `age` jest większa lub równa 18.
//    1. Jeśli Tak - wydrukuj w konsoli wiadomość: "User is adult"
//    2. W każdym innym przypadku - wydrukuj w konsoli wiadomość: "User is underage"
// 3. Zapisz tę funkcję na dwa sposoby
//    1. Za pomocą `if`
//    2. Za pomocą ternary operatora (trójargumentowego)

console.log("ZADANIE 7");
console.log("użycie operatora if:");
let age1 = 7;
if (age1 >= 18) {
  console.log(`User is adult`);
} else console.log(`User is underage`);

console.log("użycie ternary operator:");
let age2 = 20;
let adult = age2 >= 18 ? "User is adult" : "User is underage";
console.log(adult);

// Zadanie 8.
// Napisz funkcję `getBiggerNumber`, która z dwóch podanych liczb zwraca większą liczbę.

// Przykład:

// ```js
// getBiggerNumber(2, 4); // 4
// getBiggerNumber(2, 10); // 10
// getBiggerNumber(2000, 100); // 2000
// ```

console.log("ZADANIE 8");
function getBiggerNumber(x, y) {
  if (x > y) {
    return x;
  } else return y;
}
let getBiggerNumberExample = getBiggerNumber(2, 7);
console.log(getBiggerNumberExample);

// Zadanie 9.
// Napisz funkcję `itemsInCart()`, która zwróci odpowiednią gramatycznie liczbę przedmiotów w koszyku (item vs items).

// ```js
// itemsInCart(3); // You have 3 items in your cart.
// itemsInCart(1); // You have 1 item in your cart.
// ```
console.log("ZADANIE 9");
function itemsInCart(e) {
  if (e > 1) {
    return `items`;
  } else return `item`;
}
let e = 1;
// nie wiem, czt to let e jest potrzebne
let itemsInCartExample = itemsInCart(1);
console.log(`You have ${e} ${itemsInCartExample} in your cart.`);

// Zadanie 10.
// Pobierz wiek użytkownika za pomocą `prompt()`.

// 1. Jeśli użytkownik wpisał powyżej 125 lat lub poniżej 0, wyświetl w konsoli `You provided incorrect age.`
// 2. Jeśli użytkownik wpisał wiek powyżej 35 lat, wyświetl w konsoli `You could be a president!`
// 3. Jeśli użytkownik wpisał wiek powyżej 18 lat, wyświetl w konsoli `At least you can have a beer.`
// 4. W innym wypadku wyświetl w konsoli `You cannot be a president and can't even drink beer :(`

// Kolejność warunków ma znaczenie!
// console.log("ZADANIE 10");

// let ageOfPerson = prompt("Please enter your age");

// if (ageOfPerson > 125 && ageOfPerson < 0) {
//   alert("You provided incorrect age.");
// }

// Zadanie 11.
// Napisz funkcję `shouldTakeUmbrella`, ktore odpowie na pytanie czy wziąć ze sobą parasol.
// 2. Funkcja ma przyjąc kilka argumentów, które będą oznaczały
//    - isRaining: true/false
//    - hasJacket: true/false
//    - longTrip: true/false
//    - isSummer: true/false
// 3. Ustal swoje własne warunki, od jakich funkcja powinna nakazać wzięcie parasolki, a kiedy nie.
console.log("ZADANIE 11");
let weather = "isSummer";
function shouldTakeUmbrella(weather) {
  if ((weather = "isRaining" && "longTrip")) {
    return "take umbrella";
  } else return "dont take umbrella";
}

function shouldNotTakeUmbrella(weather) {
  if ((weather = "isSummer" && "hasJacket")) {
    return "dont take umbrella";
  } else return "take umbrella";
}

console.log(shouldTakeUmbrella(weather));
console.log(shouldNotTakeUmbrella(weather));

// Zadanie 12.
// Napisz funkcję `isEqual`, która sprawdza czy przekazane liczby są równe:

// Dla wywołania isEqual(2, 2) zwraca true
// Dla wywołania isEqual(2, 10) zwraca false
// Dla wywołania isEqual(2000, 100) zwraca liczbę false
// Dla wywołania isEqual(100, '100') zwraca liczbę false

console.log("ZADANIE 12");
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else if (a < b) {
    return false;
  } else if (a > b) {
    return false;
  } else return false;
}
console.log(isEqual(2, 2));
console.log(isEqual(2, 10));
console.log(isEqual(2000, 100));
console.log(isEqual(100, "100"));

// Zadanie 13.
// 1. Napisz funkcję `canRideRollerCoaster(age, height)`:
//    1. Jeśli ma więcej niż 18 lat oraz więcej niż 175 cm wzrostu wypisz w konsoli "Can ride!" i zwróć `true`
//    2. W przeciwnym razie wypisz "Sorry kiddo, no can do." i zwróć `false`
// 2. Napisz tę samą funkcję za pomocą `switch` statement

// ```js
// canRideRollerCoaster(17, 180); // false
// canRideRollerCoaster(19, 150); // false
// canRideRollerCoaster(13, 150); // false
// canRideRollerCoaster(19, 190); // true
// ```

console.log("ZADANIE 13");
let ageRide = 18;
let growth = 160;
function canRideRollerCoaster(ageRide, growth) {
  if (ageRide >= 18 && growth >= 175) {
    console.log("Can ride");
    return true;
  } else console.log("Sorry kiddo, no can do.");
  return false;
}

console.log(canRideRollerCoaster(17, 180));
console.log(canRideRollerCoaster(19, 150));
console.log(canRideRollerCoaster(13, 150));
console.log(canRideRollerCoaster(19, 190));

// Zadanie 14.
// Napisz funkcję `alphabeticalOrder`, która ustawia litery w podanym wyrazie w kolejności alfabetycznej.

// ```js
// alphabeticalOrder("javascript"); // 'aacijprstv'
// ```

console.log("ZADANIE 14");
function alphabeticalOrder
// Zadanie 15.

// Zadanie 16.

// Zadanie 17.

// Zadanie 18.
