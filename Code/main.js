"use strict";
const tribonacci = (signature, iterations) => {
    if (iterations <= 2)
        return signature.slice(0, iterations);
    let response = [...signature];
    for (let i = 2; i < iterations - 1; i++) {
        response.push(response[i] + response[i - 1] + response[i - 2]);
    }
    return response;
};
console.log(tribonacci([1, 1, 1], 10));
