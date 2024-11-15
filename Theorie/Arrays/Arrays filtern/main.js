"use strict";

let zahlen = [12, 23, 34, 77, 2, 32, 9, 55, 43, 11, 1];
/* geht auch so */
let neues_array = [];
    for (let z = 0; z < zahlen.length; z++) {
        if (zahlen[z] >= 20) {
            neues_array.push(zahlen[z]);
        }
    }
console.log(neues_array);

/*----------------------*/

/* Aber besser so */
let result = zahlen.filter(function (e) {
    if (e <= 20) {
        return true;
    } else {
        return false;
    }
});
console.log(result);