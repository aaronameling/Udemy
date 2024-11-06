"use strict";

let person = {
    vorname: "John",
    nachname: "Mustermann",
    alter: 25
};

const person_verarbeiten = function (p) {
    return {
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachname}!`
    };
};
console.log(person_verarbeiten(person));

// -----------------------------------

const person_verarbeiten = function (p) {
    let name = `${p.vorname} ${p.nachname}`;
    let zusammenfassung = `${p.vorname} ${p.nachname} (${p.alter} Jahre)`;
    let begruessung = `Hallo ${p.vorname} ${p.nachname}!`;

    let rueckgabe_objekt = {
        n: name,
        z: zusammenfassung,
        b: begruessung
    };

    return rueckgabe_objekt
};
console.log(person_verarbeiten(person));
