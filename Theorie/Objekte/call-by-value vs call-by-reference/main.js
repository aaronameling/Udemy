"use strict";

let meine_variable = "Aaron"
let mein_objekt = {
    zahl: 5000
}
const meine_funtion = function (v, o) {
    v = "Dennis";
    o.zahl = 2500;
}
meine_funtion(meine_variable, mein_objekt);
console.log(meine_variable);
console.log(mein_objekt.zahl);

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
    aktiv: true
};

function einzahlen (k, eingezahlt) {
    return k.kontostand += eingezahlt;
}
console.log(einzahlen(600));

function auszahlen (k, ausgezahlt) {
    return k.kontostand -= ausgezahlt;
}
console.log(auszahlen(konto.kontostand, 450));