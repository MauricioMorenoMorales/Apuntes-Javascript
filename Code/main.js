"use strict";
const getMiddle = (parameter) => parameter.substr(Math.ceil(-1 + parameter.length / 2), parameter.length % 2 === 0 ? 2 : 1);
console.log(getMiddle('test'), getMiddle('middle'));
