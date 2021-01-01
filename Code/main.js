"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayMadness = void 0;
const arrayMadness = (a, b) => a.map(e => e ** 2).reduce((previous, current) => previous + current) >
    b.map(e => e ** 3).reduce((previous, current) => previous + current);
exports.arrayMadness = arrayMadness;
