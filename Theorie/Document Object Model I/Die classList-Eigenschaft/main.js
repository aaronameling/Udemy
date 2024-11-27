"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

let class_list = jumbo.classList;
console.log(class_list);

jumbo.classList.add("meine-klasse");
jumbo.classList.remove("jumbotron");
jumbo.classList.replace("meine-klasse", "deine-klasse");
console.log(jumbo.classList.contains("deine-klasse"));
// Klassen toggeln (An-Aus-Schalter)
jumbo.classList.toggle("auch-eine-klasse");
jumbo.classList.toggle("auch-eine-klasse");

