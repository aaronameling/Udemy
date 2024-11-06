"use strict";

let benutzer_eingbe = prompt("gib dein Alter ein")
const mindest_alter =  18;

if (benutzer_eingbe >= mindest_alter) {
    console.log("Du bist alt genug!")
} else {
    console.log("Du bist NICHT alt genug!")
}