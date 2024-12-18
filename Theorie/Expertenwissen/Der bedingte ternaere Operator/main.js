"use strict";

// Syntax: Bedingung ? Ausdruck_1 : Ausdruck_2

// if (Bedingung) {
//     Ausdruck_1;
// } else {
//     Ausdruck_2;
// }

let meine_zahl = 10;
//
// if (meine_zahl > 10) {
//     console.log(`${meine_zahl} ist größer als 10!`);
// } else {
//     console.log(`${meine_zahl} ist kleiner oder gleich größer als 10!`);
// }
console.log(meine_zahl > 10 ? `${meine_zahl} ist größer als 10` : "Kleiner oder gleich 10");

let geschlecht = 0;
// if (geschlecht) {
//     console.log("Hallo Frau Musterfrau");
// } else {
//     console.log("Hallo Herr Mustermann");
// }
console.log(`Hallo ${geschlecht ? "Frau" : "Herr"} ${geschlecht ? "Musterfrau" : "Mustermann"}`);

let fuehrerschein = true;
// const fuehrerschein_kontrolle = function () {
//     if (fuehrerschein) {
//         return "Darf Auto fahren";
//     } else {
//         return "Darf nicht Auto fahren";
//     }
// };
const fuehrerschein_kontrolle = function () {
    return fuehrerschein ? "Darf Auto fahren" : "Darf nicht auto fahren";
}
console.log(fuehrerschein_kontrolle());

let erdbeschleunigung = 8.5;
let panik = false;

erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81) : (panik = false, erdbeschleunigung = 9.81);
console.log(erdbeschleunigung);
console.log(panik);

let farbe = "rot";
// if (farbe === "rot") {
//     console.log("Ich mag rot!");
// } else if (farbe === "blau") {
//     console.log("Blau finde ich auch gut!");
// } else if (farbe === "grün") {
//     console.log("Grün mag ich nicht!");
// } else {
//     console.log(`Zur ${farbe} habe ich keine Meinung!`);
// }
farbe === "rot" ? "Ich mag rot!" : farbe === "blau" ? "Blau finde ich auch gut!" : farbe === "grün" ? "Grün mag ich nicht!" : `Zur ${farbe} habe ich keine Meinung!`


