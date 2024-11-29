"use strict";

const multiplizieren1 = function(a, b) {return a * b;};
const multiplizieren2 = (a, b) => {return a * b;};
const multiplizieren3 = (a, b) => a * b;
console.log(multiplizieren1(5, 10));
console.log(multiplizieren2(5, 10));
console.log(multiplizieren3(5, 10));

const begruessung1 = function(name) {return `Hallo ${name}`;};
const begruessung2 = name => `Hallo ${name}`;
console.log(begruessung2("Max"));

const sinnDesLebens1 = function() {return 42};
const sinnDesLebens2  = ()=> 42;
console.log(sinnDesLebens1());
console.log(sinnDesLebens2());


let einkaufsliste = [
    "Brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangensaft"
];

einkaufsliste.forEach(function(e) {console.log(e);});

einkaufsliste.forEach(e => console.log(e));


