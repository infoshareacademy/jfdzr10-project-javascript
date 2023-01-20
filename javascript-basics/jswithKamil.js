// function min(a, b) {
// let result = Math.min(a, b);
// return result;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));


// function pow(a, b) {
//     for (let i= ; i<b ; i++)
// result = result * b
// }

function evenOrOdd(n) {
    return n % 2 === 0 ? 'even' : 'odd';
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(31));

function repeat(b) {
    let laughter = " ";
    for ( let i = 0; i < b ; i++) {
        laughter += "ha";
    }
    return laughter;
}

console.log(repeat(3));

//Napisz program, który sprawdzi czy podane słowo jest dłuższe niż 5 znaków pomijając białe znaki na początku i końcu danego słowa. Wyświetl informacje w konsoli.

function isLongerThanFive(word) {
    let trimmedWord = word.trim();
    let checkedWord = trimmedWord.length;
    if (checkedWord > 5 ) {
        return 'Słowo ma więcej niż 5 snaków'
    } else {
        return 'Słowo ma mniej niż 5 zanków'
    }
}

console.log(isLongerThanFive(' Puzzelki'));
console.log(isLongerThanFive(' mama '));

// Napisz program, który sprawdzi podane niżej kody pocztowe i wyświetli informacje, czy dany kod jest polskim kodem pocztowym

function isPolishZipCode(code) {
    if (typeof code !== 'string') {
        return 'To nie jest polski kod pocztowy';
    }
        let codeLength = code.length;
    if ( codeLength == 6 && code.charAt(2)==  '-') {
        return 'To jest Polski kod pocztowy';
    } else {
        return 'To nie jest polski kod pocztowy';
    }
}

console.log(isPolishZipCode('02300'));
console.log(isPolishZipCode('80-690'));
console.log(isPolishZipCode('5JL23'));
console.log(isPolishZipCode('09-400'));
console.log(isPolishZipCode('0-9400'));
console.log(isPolishZipCode('094-00'));

// Napisz program, który będzie szyfrował podane słowo tak, by każda literka była zamieniona na literkę znajdującą się o 2 pozycje dalej w tabeli Unicode np. literka `a`, będzie literką `c`. Zwróć zaszyfrowane słowa w postaci nowego stringa.

function cipher(word){
    let result = '';
for (let i = 0; i < word.length; i++) {
    let number = word.charCodeAt(i);
    // console.log(word.charCodeAt(i));
    // console.log(word.charAt(i));
    let o = number + 2;
    // console.log(o);
    let newWord = String.fromCharCode(o);
    // console.log(newWord);
    result += newWord + '';
}
return result;
}

console.log(cipher('boa'));
console.log(cipher('gosia'));
console.log(cipher('panda'));

// Napisz program, który wyciągnie z podanego słowa tylko samogłoski i wyświetli je w formie nowego stringa)