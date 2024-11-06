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
console.log(konto_1);

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
console.log(konto_2);


// Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

let wert_3 = konto_2.inhaber.vorname;
console.log(wert_3);

//--------------------

console.log(`${konto_2.inhaber.vorname} ${konto_2.inhaber.nachname} hat ${konto_2.kontostand}€ auf ihrem Konto.`);

// Eigenschaften setzen (Dot_Notation)

konto_2.abhebelimit = 1500;
console.log(konto_2);
console.log(konto_2.abhebelimit);

// Werte setzen bzw. verändern (Dot-Notation)

konto_2.kontostand = 4000;
console.log(konto_2);

// Aufgabe

let auto = {
    marke: "Mercedes",
    modell: "G-Klasse",
    kraftstoffart: "Benzin",
    kilometerstand: 150,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: false
    },
    zustand: "neu Wagen",
    preis: 76300
};
console.log(auto);

auto.ps = 420;
auto.modell = "C63"
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps}PS.`);
