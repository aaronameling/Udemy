"use strict";
//
// while (Bedingung) {
//     //.... code erfüllen
// }

let x = 0;
while (x < 5) {
    x++;
    console.log(`while: ${x}`)
}

let y = 0;
while (y < 5) {
    console.log(`while: ${y}`)
    y++;
}

let z = 0;
while (z < 10) {
    z++;
    if (z == 5) {
        continue;
    } else if (z == 7) {
        break;
    }
    console.log(z)
}
console.log("Schleife Beendet")
