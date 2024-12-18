"use strict";

// let konto = {
//     iban: "DE6206752564419854",
//     inhaber: ["Max Mustermann"],
//     saldo: 3500,
//     aktiv: true,
//     einzahlen(einzahlung) {
//         this.saldo += einzahlung;
//     },
//     abheben(auszahlung) {
//         this.saldo -= auszahlung;
//     },
//     kontostand_abfragen() {
//         return this.saldo;
//     }
// };

let k = new Konto("DE6206752564419854", "Max Mustermann", 5490);
let kk = new Kinderkonto("DE999675283419854", "Mona Mustermann", 250, 500)
// k.einzahlen = 1000;
// k.abheben = 500;
// console.log(k.kontostand_abfragen);
k.einzahlen(1000);
k.abheben(350);
console.log(k.kontostand_abfragen());
console.log(k);
kk.abheben(250);
console.log(kk);