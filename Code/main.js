"use strict";
const orderFood = (userList) => {
    let response = {};
    for (const user of userList) {
        response[user.meal] ? response[user.meal]++ : (response[user.meal] = 1);
    }
    return response;
};
