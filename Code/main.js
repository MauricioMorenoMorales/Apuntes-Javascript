"use strict";
const initializeNames = (name, nameArray = name.split(' ')) => nameArray.length > 2
    ? `${nameArray[0]} ${nameArray
        .slice(1, -1)
        .map(element => `${element[0].toUpperCase()}. `)
        .join('')} ${nameArray[nameArray.length - 1]}`
    : name;
