"use strict";

let d = new Date();
console.log(d);

let de_DE = d.toLocaleString("de-DE");
let en_US = d.toLocaleString("en-US");

console.log(en_US);
console.log(de_DE);


let de_DE_2 = d.toLocaleString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
});
console.log(de_DE_2);



let de_DE_Datum = d.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
});
console.log(de_DE_Datum);


let de_DE_Time = d.toLocaleTimeString("de-DE", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
});
console.log(de_DE_Time);