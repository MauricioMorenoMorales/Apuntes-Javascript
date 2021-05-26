"use strict";
const arrayFilterLastAndFirst = function (input) {
    if (input.split(',').length <= 2)
        return null;
    const array = input.split(',').filter(e => e);
    array.pop();
    array.shift();
    return array.join(' ');
};
