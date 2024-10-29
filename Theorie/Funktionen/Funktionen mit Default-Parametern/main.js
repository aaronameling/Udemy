"use strict";

const plus_aufgabe = function(a = 20, b = 10) {
    console.log(a);
    console.log(b);
    console.log(a * b);
};

let z_1 = 42;
let z_2 = 20;

plus_aufgabe(z_1, z_2);

const begruessung = function(vorname = "Max", nachname = "Mustermann", alter = 18) {
    console.log(`Hallo, ${vorname} ${nachname}! Du bist ${alter} Jahre alt.`);
};

let mein_vorname = "Aaron";
let mein_nachname = "Ameling";
let mein_alter = 25;

begruessung(mein_vorname, mein_nachname, mein_alter);
begruessung();
begruessung(undefined, mein_nachname, mein_alter);