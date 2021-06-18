"use strict";
const switcheroo = (input) => input.split('').map(letter => {
    if (letter === 'a')
        letter.replace(/a/g, 'b');
    console.log(switcheroo('abc'), switcheroo('aaabcccbaaa'));
});
