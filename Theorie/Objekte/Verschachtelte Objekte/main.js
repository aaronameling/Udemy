"use strict";


// let iban = "DE34 4567 2345 3456 89"
// let bic = "XXX23X6789"
// let kontostand = 3500;
// let aktiv = true;

// ---------------------

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



