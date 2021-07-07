"use strict";
const headSmash = ($) => {
    if ($ == [])
        return 'Gym is empty';
    return $.map(element => element.replace(/O/g, ' '));
};
