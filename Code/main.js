"use strict";
const pipeFix = (numbers) => {
    const start = Math.min(...numbers), end = Math.max(...numbers);
    let response = [];
    for (let i = start; i <= end; i++) {
        response.push(i);
    }
    return response;
};
