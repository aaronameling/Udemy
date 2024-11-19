"use strict";

let d = new Date();
console.log(d);

console.log(Date.now());

let e = new Date(1432017231965);
console.log(e);

let f = new Date(" Apr 03 1999 20:39:00 GMT+0200");
console.log(f);

// new Date(jahr, monats-idex[, tag[, stunde[, minute[, sekunde[, millisekunde]]]]])
let g = new Date(2012, 5, 23, 15, 15, 15, 155);
console.log(g);