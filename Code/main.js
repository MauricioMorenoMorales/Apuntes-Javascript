"use strict";
const Switcher = function (input) {
    const lettersPosition = ' zyxwvutsrqponmlkjihgfedcba!? ';
    return input.map(element => lettersPosition[Number(element)]).join('');
};
console.log(Switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
