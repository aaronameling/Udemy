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
// -------------------
// Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_2["inhaber"]["geschlecht"];
console.log(wert_2);

// Eigenschaften setzen (Bracket_Notation)

konto_2["abhebelimit"] = 1000;
console.log(konto_2["abhebelimit"]);

// Werte setzen bzw. verändern (Bracket-Notation)

konto_1["kontostand"] = 2391;
console.log(konto_1["kontostand"]);

// Warum sollten wir die Bracket_Notation jemals verwenden?

let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3);


// -------------------
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

auto["ps"] = 420;
auto["modell"] = "C63";

let leistung = "ps";

console.log(`Ein ${auto["marke"]} ${auto["modell"]} hat ${auto[leistung]}PS.`);





