"use strict";

let x = 0;
while (x < 5) {
    console.log(x);
    x++;
}

// for (zählvariable; Bedingung; Anweisung für die zählvariable) {
//     code
// }

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    } else if (i == 7) {
        break;
    }
    console.log(i);
}