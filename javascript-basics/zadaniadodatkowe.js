// Zadanie 1
function countAndReverse(word) {
    if (typeof word !== 'string') {
        return 'Podany argument nie jest stringiem';

    }
    else {
        let wordLength = word.length;
        let splittedWord = word.split('');
        let reversedArray = splittedWord.reverse();
        let reversedWord = reversedArray.join('');

        return 'Podany wyraz ma długość ' + wordLength + ' i odwrócony wygląda tak: ' + reversedWord;
        
    }
}

console.log(countAndReverse('Kaktuski'));
console.log(countAndReverse('Lampart'));
console.log(countAndReverse(1));

// 2 Zadanie

function LoremGosia(Gosia) {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur'
    return text.replaceAll('consectetur', 'Gosia');
}

console.log(LoremGosia());

// 3 zadanie

for (i = 1; i <= 10; i++) {
    if (i == 7) {
        console.log('Jest to 7 iteracja w mojej pętli'); 
    }
    else {
        console.log('iteracja ' + i);
    }
}

// 4 zadanie

function isEmail(email) {
    if(typeof email !== 'string') {
        return 'Argument nie jest stringiem';
    }
    if (email.includes('@')) {
        return 'Wyraz zawiera @';
    }
    else {
        return 'Wyraz nie zawiera @';
    }
}

console.log(isEmail('malnutelka@gmail.com'));
console.log(isEmail('mbanaszkiewicz.pl'));
console.log(isEmail(123));
