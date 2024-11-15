"use strict";

let mein_objekt = {
    name: "Max",
    nachname: "Mustermann",
    alter: 18
};


// let eigenschaften = Object.keys(mein_objekt);
// console.log(eigenschaften);

// for (let e = 0; e < eigenschaften.length; e++) {
//     console.log(eigenschaften[e]);
// }

// eigenschaften.forEach(function(e) {
//     console.log(e);
// });

for (let e of Object.keys(mein_objekt)) {
    console.log(e);
}



// let werte = Object.values(mein_objekt);
// console.log(Object.values(mein_objekt));


// for (let w = 0; w < werte.length; w++) {
//     console.log(werte[w]);
// }

// werte.forEach(function(e) {
//     console.log(e);
// })

for (let w of Object.values(mein_objekt)) {
    console.log(w);
}