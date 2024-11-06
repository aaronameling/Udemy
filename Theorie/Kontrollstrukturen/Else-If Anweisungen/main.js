"use strict";

"use strict";

// if (Bedingung) {
//     Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
// } else {
//     Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
// }

// if (false) {
//     console.log("If wurde ausgeführt");
// } else {
//     console.log("Else wurde ausgeführt")
// }

// let benutzer_eingbe = prompt("gib dein Alter ein")
// const mindest_alter =  18;
//
// if (benutzer_eingbe >= mindest_alter) {
//     console.log("Du bist alt genug!")
// } else {
//     console.log("Du bist NICHT alt genug!")
// }

let benutzer_eingbe = prompt("gib dein Alter ein")
const mindest_alter =  18;

if (benutzer_eingbe > mindest_alter) {
    console.log("Du bist alt genug!")
} else if (benutzer_eingbe == mindest_alter) {
    console.log("Du bist gerade alt genug!")
} else {
    console.log("Du bist NICHT alt genug!")
}