"use strict";
const hasUniqueChars = (parameter) => {
    console.log(parameter);
    return parameter.replace(/[a-z]/g, '').length > 0;
};
