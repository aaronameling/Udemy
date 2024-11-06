"use strict";

const person = {
    vorname: "Aaron",
    nachname: "Ameling",
    alter: 25
};

person.vorname = "Noah";
person.haarfarbe = "blond";
delete person.haarfarbe;
console.log(person);


