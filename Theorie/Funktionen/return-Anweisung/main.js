"use strict";

const multiplizieren = function(a = 1, b = 1) {
  return a * b;
};

let z_1 = 13
let z_2 = 111

let ergebnis = multiplizieren(z_1, z_2);
console.log(ergebnis);

let ergebnis_2 = multiplizieren(multiplizieren(z_1, z_2), multiplizieren(z_1, z_2));
console.log(ergebnis_2);