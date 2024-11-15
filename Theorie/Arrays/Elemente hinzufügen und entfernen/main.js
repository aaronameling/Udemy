"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];
personen[3] = "Pia";
console.log(personen[3]);
console.log(personen);


console.log(personen.push("Dennis"));
console.log(personen);


console.log(personen.pop());
personen.pop();


console.log(personen.unshift("Max"));
console.log(personen);

console.log(personen.shift());
console.log(personen);