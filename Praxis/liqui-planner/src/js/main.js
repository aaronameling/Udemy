"use strict";

const haushaltsbuch = {

    gesamtbilanz: new Map(),

     eintraege: [],

    eintrag_erfassen() {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", prompt("Titel:"));
        neuer_eintrag.set("typ", prompt("Typ (Einnahme/Ausgabe):"));
        neuer_eintrag.set("betrag", parseInt(prompt("Betrag (in Cent):")));
        neuer_eintrag.set("datum", prompt("Datum (jjjj-mm-tt):"));
        this.eintraege.push(neuer_eintrag);
    },

    eintraege_sortieren() {
        this.eintraege.sort(function (eintrag_a, eintrag_b) {
                if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
                    return -1;
                } else if (eintrag_a.get("datum") < eintrag_b.get("datum")) {
                    return 1;
                } else {
                    return 0
                }
        });
    },

    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag) { /* Es wird das Element übergeben, über welches drüber iteriert wird (name/parameter) kann man selber wählen */
            console.log(`Titel: ${eintrag.get("titel")}\n`
                + `Typ: ${eintrag.get("typ")}\n`
                + `Betrag: ${eintrag.get("betrag")} ct\n`
                + `Datum: ${eintrag.get("datum")}\n`
            );
        })
    },

    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);
        this.eintraege.forEach(function (eintrag) {
            switch (eintrag.get("typ")) {
                case "Einnahme":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                    break;
                default:
                    console.log(`Der Typ ${eintrag.get("typ")} ist nicht bekannt!`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },

    gesamtbilanz_augeben() {
        console.log(`Einnahmen: ${this.gesamtbilanz.get("einnahmen")} ct\n`
            + `Ausgaben: ${this.gesamtbilanz.get("ausgaben")} ct\n`
            + `Bilanz: ${this.gesamtbilanz.get("bilanz")} ct\n`
            + `Bilanz ist positive: ${this.gesamtbilanz.get("bilanz") >= 0}`
        );
    },

    eintrag_hinzufuegen() {
        let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_sortieren()
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_augeben();
            weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
        }
    }
};
haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);









