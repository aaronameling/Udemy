"use strict";

 let personen = [
    "Sebastian",
    "Anna",
    "Marcel",
    "Peter",
    "Anna",
    "Mia"
];


console.log(personen.includes("Marcel"));
console.log(personen.includes("Marcel", 3));


console.log(personen.indexOf("Anna"));
console.log(personen.indexOf("Anna", 2));

console.log(personen.lastIndexOf("Anna"));