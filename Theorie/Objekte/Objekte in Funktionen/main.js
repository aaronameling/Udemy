"use strict";

let konto_1 = {
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

let konto_2 = {
    iban: "DE34 4567 2345 3213 49",
    bic: "XXX23X6789",
    inhaber: {
        vorname: "Maria",
        nachname: "Musterfrau",
        geschlecht: "weiblich",
        alter: 31
    },
    kontostand: 5500,
    aktiv: true
};

const kontostand_ausgeben = function (a) {
    console.log(`${a.inhaber.vorname} ${a.inhaber.nachname} hat ${a.kontostand}€ auf dem Konto.`);
};
kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);
