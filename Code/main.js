"use strict";
const duplicateEncode2 = (word, register = word
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
