"use strict";
const createPhoneNumber = (numbers, stringOfNumbers = numbers.map(String).join(''), lada = stringOfNumbers.substr(0, 3), regionNumber = stringOfNumbers.substr(3, 3), restOfNumbers = stringOfNumbers.substr(6, 4)) => `(${lada}) ${regionNumber}-${restOfNumbers}`;
const CreatePhoneNumber = (numbers) => {
    let format = '(xxx) xxx-xxxx';
    for (const number of numbers) {
        format = format.replace('x', String(number));
    }
    return format;
};
const createPhoneNumberRegex = (numbers) => numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
const duplicateCount = (parameter) => {
    let register = {};
    for (const letter of parameter.toLowerCase()) {
        letter in register ? register[letter]++ : (register[letter] = 1);
    }
    let repeatedWords = [];
    for (const key in register) {
        if (register[key] >= 2) {
            repeatedWords.push(key);
        }
    }
    return repeatedWords.length;
};
const duplicateCountRegex = (text) => (text
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/([^])\1+/g) || []).length;
const duplicateCountRegexFunctional = (text) => text
    .toLowerCase()
    .split('')
    .filter((value, index, array) => array.indexOf(value) !== index && array.lastIndexOf(value) === index).length;
const spinWords = (words) => words
    .split(' ')
    .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
    .join(' ');
const spinWordsRegex = (words) => words.replace(/\w{5,}/g, word => word.split('').reverse().join(''));
const duplicateEncode = (word, register = word
    .toLowerCase()
    .split('')
    .reduce((responseObject, letter) => {
    letter in responseObject
        ? responseObject[letter]++
        : (responseObject[letter] = 1);
    return responseObject;
}, {})) => word
    .toLowerCase()
    .split('')
    .map(letter => (register[letter] >= 2 ? ')' : '('))
    .join('');
const duplicateEncodeFunctional = (word) => word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
})
    .join('');
const alphabetPosition = (text) => text
    .toUpperCase()
    .replace(/[^a-z]/gi, '')
    .split('')
    .map(letter => letter.charCodeAt(0) - 64)
    .join(' ');
