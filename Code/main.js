"use strict";
const sumOfABeach = (parameter, beachFiltered = parameter.replace(/beach/gi, ''), waterFiltered = parameter.replace(/water/gi, ''), fishFiltered = parameter.replace(/fish/gi, ''), sunFiltered = parameter.replace(/sun/gi, ''), sandFiltered = parameter.replace(/sand/gi, '')) => {
    let counter = 0;
    counter = counter + Math.floor((parameter.length - waterFiltered.length) / 4);
    counter = counter + Math.floor((parameter.length - beachFiltered.length) / 5);
    counter = counter + Math.floor((parameter.length - fishFiltered.length) / 4);
    counter = counter + Math.floor((parameter.length - sunFiltered.length) / 3);
    counter = counter + Math.floor((parameter.length - sandFiltered.length) / 4);
    return counter;
};
console.log(sumOfABeach('saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater'));
