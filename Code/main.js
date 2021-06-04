"use strict";
function calculate(str) {
    let numbers = str.split(/plus|minus/);
    let operations = str.match(/[a-z]+/g);
    let sum = parseInt(numbers[0]);
    for (let i = 0, len = operations.length; i < len; i++) {
        switch (operations[i]) {
            case "plus":
                sum += parseInt(numbers[i + 1]);
                break;
            case "minus":
                sum -= parseInt(numbers[i + 1]);
                break;
        }
    }
    return sum + "";
}
