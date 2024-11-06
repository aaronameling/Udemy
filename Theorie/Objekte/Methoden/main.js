"use strict";

let konto = {
    iban: "DE34 4567 2345 3456 89",
    bic: "XXX23X6789",
    inhaber: {
        vorname: "Aaron",
        nachname: "Ameling",
        geschlecht: "männlich",
        alter: 25
    },
    kontostand: 3500,
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    },
    auszahlen(a) {
        this.kontostand -= a;
    }
};
konto.einzahlen(1500);
konto.auszahlen(400);
console.log(konto.kontostand);

// Challange: Methoden in Objekt einbauen

let person = {
    vorname: "John",
    nachname: "Mustermann",
    alter: 25,
    verarbeiten() {
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        };
    }
};
console.log(person.verarbeiten());



// const person_verarbeiten = function (p) {
//     return {
//         n: `${p.vorname} ${p.nachname}`,
//         z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
//         b: `Hallo ${p.vorname} ${p.nachname}!`
//     };
// };





