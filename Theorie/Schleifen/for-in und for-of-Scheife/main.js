"use strict";

let mein_array = [
    "Peter",
    "Mia",
    "Mark"
];

let mein_objekt = {
    name: "Max",
    nachname: "Mustermann",
    alter: 18
};



for (let e in  mein_array) {
    console.log(e);
}

for (let e in mein_objekt) {
    console.log(e);
    console.log(mein_objekt[e]);
}

for (let w of mein_array) {
    console.log(w);
}
// Geht nicht, da einfache Objekte nicht iterierbar sind
// for (let w of mein_objekt) {
//     console.log(w);^
// }