"use strict";
const repeatIt = function (str, num) {
    if (typeof str != 'string')
        return 'Not a string';
    let response = '';
    for (let i = 0; i < num; i++) {
        response = response + str;
    }
    return response;
};
