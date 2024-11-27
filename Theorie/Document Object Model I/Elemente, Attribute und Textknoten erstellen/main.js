"use strict";

// Element erstellen
let div = document.createElement("div");

// Attribut erstellen
let attr = document.createAttribute("id");
attr.value = "meine_id";

// Attribut einem Element hinzufügen
div.setAttributeNode(attr);

// Attribut erstellen und hinzufügen
div.setAttribute("class", "meine_klasse")

let test = document.createTextNode("Lorem ipsum dolor sit amet veni vidi vici")
console.log(test);
console.log(div);

