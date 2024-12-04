"use strict";

// document.addEventListener("keydown", function(e) {
//     console.log(e);
// });
document.addEventListener("keydown", e => {
    console.log(e);
    if (e.key === "@") {
        console.log("Das @-Zeichen wurde gedrückt");
    }
});

document.addEventListener("keyup", e => {
    if (e.key === "p") {
        console.log("Das P-Zeichen wurde gedrückt");
    }
})

// Wichtig keypress-Event hört nicht auf auf Shift, Fn und capsLock
document.addEventListener("keypress", e => {
    if (e.key === ":") {
        console.log("Das :-Zeichen wurde gedrückt");
    }
})
