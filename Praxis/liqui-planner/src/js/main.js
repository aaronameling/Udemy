"use strict";

const haushaltsbuch = {

    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0,
    },

    neuereintrag: {
        titel:"",
        typ:"",
        betrag:"",
        datum:"",
    },

    eintrag_erfassen() {
        this.neuereintrag.titel = prompt("Titel:");
        this.neuereintrag.typ = prompt("Typ (Einnahme/Ausgabe):");
        this.neuereintrag.betrag = parseInt(prompt("Betrag (in Cent):"));
        this.neuereintrag.datum = prompt("Datum (jjjj-mm-tt):");
    },

    eintrag_ausgeben() {
        console.log(`Titel: ${this.neuereintrag.titel}
Typ: ${this.neuereintrag.typ}
Betrag: ${this.neuereintrag.betrag} ct
Datum: ${this.neuereintrag.datum}`
        );
    },

    eintrag_mit_gesamtbilanz_verrechnen() {
        if (this.neuereintrag.typ === "Einnahme") {
            this.gesamtbilanz.einnahmen += this.neuereintrag.betrag;
            this.gesamtbilanz.bilanz += this.neuereintrag.betrag;
        } else if (this.neuereintrag.typ === "Ausgabe") {
            this.gesamtbilanz.ausgaben += this.neuereintrag.betrag;
            this.gesamtbilanz.bilanz -= this.neuereintrag.betrag;
        } else {
            console.log(`Der Typ ${this.neuereintrag.typ} ist nicht bekannt!`)
        }
    },

    gesamtbilanz_augeben() {
        console.log(`
Einnahme: ${this.gesamtbilanz.einnahmen}
Ausgabe: ${this.gesamtbilanz.ausgaben}
Bilanz: ${this.gesamtbilanz.bilanz} ct
Bilanz ist positive: ${this.gesamtbilanz.bilanz >= 0}`
        );
    },

    eintrag_hinzufuegen() {
        this.eintrag_erfassen();
        this.eintrag_ausgeben();
        this.eintrag_mit_gesamtbilanz_verrechnen();
        this.gesamtbilanz_augeben();
    }
};
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();









