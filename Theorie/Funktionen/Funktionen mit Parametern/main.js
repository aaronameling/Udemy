"use strict";

// const meine_funktion = function (parameter_1, parameter_2) {
//     ausgeführter Code
// };
//
// meine_funktion(p_1, p_2);

const log_die_zahl = function (a) {
    console.log(a);
};

log_die_zahl(42)

const begruessung = function (x, y) {
    console.log(`Hallo ${x} ${y}!`);
};

let vor = "Aaron";
let nach = "Ameling";

begruessung(vor, nach);

const rechnungen = function (a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
};

let zahl_1 = 23;
let zahl_2 = 54;
let zahl_3 = 99;
let zahl_4 = 77;
let zahl_5 = 5;

rechnungen(zahl_1, zahl_5);
rechnungen(zahl_4, zahl_2);
rechnungen(zahl_3, zahl_2);
rechnungen(zahl_5, zahl_2);
rechnungen(zahl_5, zahl_5);