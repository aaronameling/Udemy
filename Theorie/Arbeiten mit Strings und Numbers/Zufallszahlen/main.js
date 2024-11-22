"use strict";

let minimum = 1;
let maximum = 50;

// console.log(
//     Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
//     );

const zufallszahlt = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};
console.log(zufallszahlt(maximum, minimum));