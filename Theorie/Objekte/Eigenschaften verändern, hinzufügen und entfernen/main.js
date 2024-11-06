"use strict";

let auto = {
    marke: "BMW"
};

// Eigenschaft ändern
auto.marke = "Tesla";


// Eigenschaften hinzufügen
auto.modell = "Model 3";
auto.ps = 450;
auto["farbe"] = "rot";

// Eigenschaften entfernen
delete auto.farbe;

console.log(auto);