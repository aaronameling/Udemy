"use strict";

// für Funktionen
let meine_zahlen = [44, 51, 36]
const addieren = function (a, b, c) {
    console.log(a + b + c)
};
// addieren(meine_zahlen[0], meine_zahlen[1], meine_zahlen[2]);
addieren(...meine_zahlen);

// für Arrays
let kleines_array = ["Apfel", "Banane", "Kiwi"];
let grosses_array = ["Orange", "Weintraube",...kleines_array];
console.log(grosses_array);
let sehr_grosses_array = [...kleines_array, "Möhren",...grosses_array, "Kartoffeln"];
console.log(sehr_grosses_array);

// für Objekte
let kleines_objekt = {
    name: "Ein Objekt",
    groesse: 2,
    objekt: true
};
let grosses_objekt = {
    ...kleines_objekt,
    betreff: "spread_Syntax",
    datum: new Date(),
};
console.log(grosses_objekt);

// für Instanzen von Objekten

let datumswerte = [2020, 5, 14];
// let datum = new Date(datumswerte[0], datumswerte[1], datumswerte[2]);
let datum = new Date(...datumswerte);
console.log(datum);