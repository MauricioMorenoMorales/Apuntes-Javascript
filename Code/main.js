"use strict";
const solve = (firstParameter, secondParameter) => {
    const a = [...firstParameter].sort();
    const b = [...secondParameter].sort();
    let response = [];
    for (let i = 0; i < a.length || i < b.length; i++) {
        if (a[i] !== b[i]) {
            response.push(a[i]);
            response.push(b[i]);
        }
    }
    return response.join('');
};
