"use strict";
const defineSuit = function (card) {
    if (/♣/i.test(card))
        return 'clubs';
    if (/♠/i.test(card))
        return 'spades';
    if (/♦/i.test(card))
        return 'diamonds';
    if (/♥/i.test(card))
        return 'hearts';
    return 'Not defined';
};
