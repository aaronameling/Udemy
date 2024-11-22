"use strict";

console.log(Math);

// Kreisfläche berechnen mit Radius

// A = Pi * r^2

let a = Math.PI * Math.pow(12, 2);
console.log(a);

// Runden
let a_gerundet = Math.round(a);
console.log(a_gerundet);


// ABrunden
let a_abgerundet = Math.floor(a);
console.log(a_abgerundet);

// AUFrunden
let a_aufgerundet = Math.ceil(a);
console.log(a_aufgerundet);

// Nachkommazahl (Aber als String)
let a_nachkommastelle = a.toFixed(2);
console.log(a_nachkommastelle);

// Keine Nachkommazahl, weil Int = Integer nur ganz Zahlen sind
let a_integer = parseInt(a.toFixed(2));
console.log(a_integer);

// Nachkommazahl, float = floatingpointnumber sind Kommazahlen
let a_float = parseFloat(a.toFixed(2));
console.log(a_float);