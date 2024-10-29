"use strict";

// Gesamtbilanz anlegen (Initialisieren/ Deklarieren)
let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel,
    typ,
    betrag,
    datum;


// Eingabedaten 1: holen
const eintrag_erfassen = function () {
    titel = prompt("Titel:");
    typ = prompt("Typ (Einnahme/Ausgabe):");
    betrag = parseInt(prompt("Betrag (in Cent):"));
    datum = prompt("Datum (jjjj-mm-tt):");
};


const eintrag_ausgeben = function (titel, typ, betrag, datum) {
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
    );
};


const eintrag_mit_gesamtbilanz_verrechnen = function (typ, betrag) {
    if (typ === "Einnahme") {
        einnahmen = einnahmen + betrag;
        bilanz = bilanz + betrag;
    } else if (typ === "Ausgabe") {
        ausgaben = ausgaben + betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log(`Der Typ ${typ} ist nicht bekannt!`)
    }
};


// Gesamtbilanz ausgeben
const gesamtbilanz_augeben = function (einnahmen, ausgaben, bilanz) {
    console.log(`
Einnahme: ${einnahmen}
Ausgabe: ${ausgaben}
Bilanz: ${bilanz} ct
Bilanz ist positive: ${bilanz >= 0}`
    );
};


const eintrag_hinzufuegen = function () {
    eintrag_erfassen();
    eintrag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_augeben(einnahmen, ausgaben, bilanz);
};
eintrag_hinzufuegen();
eintrag_hinzufuegen();








