// // Zadanie 1.
// console.log(Boolean("123" == 123));
// console.log(Boolean("123" === 123));
// // Zadanie 2.
// console.log(Boolean(0 == false));
// console.log(Boolean(0 === false));
// // Zadanie 3.
// userName = `Gosia`;
// age = 30;
// city = `Torun`;
// console.log(`Our user's name is: ` + userName +` and is ` + age + ` years old and lives in ` + city);
// // Zadanie 4.
// function sum(a, b) {
// return a+b;
// }
// sum(2, 3);

// let ten = sum(5, 5);
// let four = sum(2, 2);
// let myAddedNumbers = sum(ten, four);
// console.log(myAddedNumbers);

// // Zadanie 5.

// let letters = userName.length;
// console.log(letters);
// console.log(`Username: ` + userName+ ` have length: ` +  letters + `.`);
// // Zadanie 6.
// let firstUser = 'Michał';
// let secondUser = 'Tadeusz';

// if (!!firstUser === secondUser) {
//     console.log("O! The names are the same!");
// } else {
//     console.log("Unfortunately the names are different :(");
// }

// // Zadanie 7.

// let ageofUser = 80;
// if (ageofUser >= 18) {
//     console.log("User is adult");
// } else {
//     console.log("User is underage");
// }

// let check = (ageofUser >= 18) ? "User is adult" : "User is underage";
// console.log(check);

// // Zadanie 8.

// function getBiggerNumber(a,b) {
//  console.log(result = Math.max(a, b)); 
//  return result;
// }

// getBiggerNumber(2, 4);
// getBiggerNumber(2, 10);
// getBiggerNumber(2000, 100);


// // Zadanie 9.

// function itemsInCart(n) {
// if (n === 1) {
//     console.log(`You have 1 item in your cart`);
// } else {
//     console.log('You have '+ n + ' items in your cart');
// }
// }
//  itemsInCart(2);
//  itemsInCart(1);
//  itemsInCart(299);
//  itemsInCart(-2);


// // Zadanie 10.

// let agePrompt = prompt('How old are you?');
// if(agePrompt > 125 || agePrompt < 0) {
//         console.log(`You provided incorrect age.`);
//     }
//     else if (agePrompt >= 35 && agePrompt <= 125) {
//         console.log(`You could be a president!`);
//     } 
//     else if (agePrompt >=18 && agePrompt < 35) {
//         console.log(`At least you can have a beer.`);
//     } 
//     else {
//         console.log(`You cannot be a president and can't even drink beer :(`);
//     } 
    

// // Zadanie 11.
// let isRaining = prompt('Yes or no question. Is it raining today?');
// let hasJacket = prompt('Yes or no question. Are you wearing a jacket?');
// let longTrip = prompt('Yes or no question. Are you on a long trip?');
// let isSummer = prompt('Yes or no question. Is it summer yet?');
// function shouldTakeUmbrella() {
//     if (isRaining === 'yes' && hasJacket === 'no' && isSummer === 'no') {
//         console.log('Please take an umbrella')
//     } else (
//         console.log('No real need for an umbrella today!')
//     )
// }
// console.log(shouldTakeUmbrella());
// Zadanie 12.

// function isEqual(a, b) {
//     return Boolean(a === b);
// }
// console.log(isEqual(2, 2));
// console.log(isEqual(2, 10));
// console.log(isEqual(2000, 100));
// console.log(isEqual(100, '100'));

// // Zadanie 13.

// let userAge = prompt('Type numbers. How old are you?');
// let userHeight = prompt('Type numbers. How tall are you?');

// function canRideRollerCoaster() {
//     if(userAge >= 18 && userHeight > 175) {
//         console.log("Can ride!");
//         return true
//     } else {
//         console.log("Sorry kiddo, no can do.");
//         return false
//     }

// }
// console.log(canRideRollerCoaster());

// //to samo za pomocą switch?

// // Zadanie 14.

function alphabeticalOrder(string) {
    let array = string.split("");
    array.sort();
    let sortedString = array.join("");
    return sortedString
}

console.log(alphabeticalOrder('boa'));
console.log(alphabeticalOrder('husky syberyjski'));
console.log(alphabeticalOrder('puzzle'));
console.log(alphabeticalOrder('labrador retriever'));


// Zadanie 15.

function reverseText(word) {
    let array = word.split("");
    array.reverse();
    let reversedWord = array.join("");
    return reversedWord
}

console.log(reverseText('boa'));
console.log(reverseText('husky syberyjski'));
console.log(reverseText('puzzle'));
console.log(reverseText('labrador retriever'));
console.log(reverseText('Gosia'));

// Zadanie 16.

function getInitials(name) {
    let splittedName = name.split(" ");
    if (splittedName.length > 2) {
        console.log('Please provide only first and last name')
    }
    else {
    let firstName = splittedName[0].split("");
    let lastName = splittedName[1].split("");
    return firstName[0] + lastName[0] }
    
}

console.log(getInitials('Malgorzata Banaszkiewicz'));
console.log(getInitials('Harry Potter'));
console.log(getInitials('Patrycja Agnieszka Maciąg'));

// Zadanie 17.

// Zadanie 18.
