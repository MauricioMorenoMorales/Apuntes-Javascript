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
const filterEmptyStrings = (parameter) => parameter.filter(Boolean);
const songDecoder = (song) => song.split('WUB').filter(Boolean).join(' ');
const isPangram = (sentence) => {
    const letterRegister = [...sentence.replace(/[^a-z]/gi, '')].reduce((counter, letter) => {
        letter in counter ? counter[letter]++ : (counter[letter] = 1);
        return counter;
    }, {});
    let letterCounter = 0;
    for (const key in letterRegister) {
        letterCounter++;
    }
    return letterCounter >= 26;
};
const isPangramClever = (sentence) => [...'abcdefghijklmnopqrstuvwxyz'].every(letter => sentence.toLowerCase().includes(letter));
const isPangramCleverRegex = (sentence) => (sentence.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
const twoFollowedLetters = (text) => (text + '_').match(/.{2}/g) || [];
const countSmileys = (faces) => faces
    .filter(face => !face.includes('o') || !face.includes('_'))
    .filter(face => face.length === 3)
    .filter(face => face.includes('D') || face.includes(')'))
    .filter(face => face.includes(':') || face.includes(';')).length;
const countSmileysRegex = (faces) => faces.filter(face => /[:;]{1}[-~]?[)D]{1}/.test(face)).length;
const towerBuilder = (floors) => [...Array(floors)].map((_, index) => ' '.repeat(floors - 1 - index) +
    '*'.repeat(index * 2 + 1) +
    ' '.repeat(floors - 1 - index));
const highestWordValue = (words, wordsValues = words
    .split(' ')
    .map(word => [...word].reduce((acc, curr) => (acc += Number(curr.charCodeAt(0) - 96)), 0))) => words.split(' ')[wordsValues.indexOf(Math.max(...wordsValues))];
const desCamelCaser = (text) => [...text]
    .map(letter => (letter === letter.toUpperCase() ? ` ${letter}` : letter))
    .join('');
const desCamelCaserRegex = (text) => text.replace(/[A-Z]/g, ' $1');
const waveMal = (word) => [...Array(word.length).fill(word)].map((word, index) => word.substring(0, index) +
    word[index].toUpperCase() +
    word.substring(index + 1, word.length));
const wave = (str) => {
    let result = [];
    str.split('').forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    return result;
};
const camelCaser = (text) => text.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase());
const diamond = (size) => {
    if (size % 2 === 0 || size < 1)
        return null;
    let iteration = 0;
    let add;
    let center = generateLine(iteration, size);
    while ((iteration += 2) < size) {
        add = generateLine(iteration / 2, size - iteration);
        center = add + center + add;
    }
    return center;
};
const generateLine = (spaces, stars) => ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
const isValidIP = (ip) => 4 ===
    ip
        .split('.')
        .filter(Boolean)
        .filter(number => !/[^0-9]/gi.test(number))
        .filter(number => !(number.length > 1 && number[0] === '0'))
        .map(Number)
        .filter(number => number <= 255).length;
const isValidIPRegex = (ip) => /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(ip);
console.log('probar este tipo de cosas');
const romanNumbers = (romanNumber, conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}) => romanNumber
    .match(/CM|CD|XC|XL|IX|IV|\w/g)
    .reduce((sum, current) => sum + (conversion[current] || 0), 0);
const romanNumbersImperative = (romanNumber, conversion = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}) => {
    let sum = 0;
    for (let i = 0; i < romanNumber.length; i++) {
        if (conversion[romanNumber[i]] < conversion[romanNumber[i + 1]]) {
            sum += conversion[romanNumber[i + 1]] - conversion[romanNumber[i]];
            i++;
        }
        else {
            sum += conversion[romanNumber[i]];
        }
    }
    return sum;
};
const validPhoneNumber = (phoneNumber) => {
    const hasParenthesis = phoneNumber[0] === '(' && phoneNumber[4] === ')', hasSpace = phoneNumber[5] === ' ', hasDash = phoneNumber[9] === '-', hasLength = phoneNumber.length === 14;
    return hasParenthesis && hasSpace && hasDash && hasLength;
};
const validPhoneNumberRegex = (phoneNumber) => /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
const ValidPhoneNumberRegex = (phoneNumber) => /^(\(...\))\s(...)-(....)$/.test(phoneNumber);
const $ValidPhoneNumberRegex = (phoneNumber) => /^\([1-9]\d{2}\)\s\d{3}[\s|-]\d{4}$/.test(phoneNumber);
const letterValues = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
};
const encode = (text) => text.replace(/./gi, letter => letterValues[letter] || letter);
const decode = (text) => text.replace(/./gi, letter => Object.keys(letterValues).find(key => letterValues[key] === letter) ||
    letter);
