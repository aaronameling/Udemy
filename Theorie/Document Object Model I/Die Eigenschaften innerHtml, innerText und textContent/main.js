"use strict";

let jumbo = document.querySelector(".jumbotron");

// console.log(jumbo.innerHTML); // gibt uns die HTML-Struktur in einem Element (Dom String)
// console.log(jumbo.innerText); // gibt und den Text-Inhalt von Elementen inkl. aller Kindelemente und nachfahrenelemente die im Frontend angezeigt werden (Gerenderten Texte)
// console.log(jumbo.textContent); // gibt und den Text-Inhalt von Elementen inkl. aller Kindelemente und nachfahrenelemente
                                // die im innerHTML angezeigt werden (ohne Gerenderten Texte)

let string_1 = "";
let string_2 = "<header><h2>lorem ipsum dolor sit amt</h2></header>";
let string_3 = "<p>lorem ipsum dolor sit amet veni vidi vici</p>";
let string_4 = "lorem ipsum dolor sit amet veni vidi vici";

// jumbo.innerHTML = string_1;
// jumbo.innerHTML = string_2;
jumbo.innerHTML +=  string_3;


// jumbo.innerText = string_1;
// jumbo.innerText = string_2;
// jumbo.innerText +=  string_3;

// jumbo.textContent = string_1;
// jumbo.textContent = string_2;
// jumbo.textContent +=  string_3;