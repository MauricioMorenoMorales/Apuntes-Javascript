"use strict";
const crap = (arrayParameter, bags, cap) => (arrayParameter + '').includes('D')
    ? 'Dog!!'
    : (arrayParameter + '').split('@').length - 1 <= bags * cap
        ? 'Clean'
        : 'Cr@p';
