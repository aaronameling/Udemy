"use strict";
// Attribute setzen
document.querySelector(".jumbotron").setAttribute("lang", "de"); // setzt das Attribut "lang" mit der wert "de"

// Attribute entfernen
document.querySelector("head > meta:nth-of-type(3)").removeAttribute("content"); // entfernt das attribut mit dem namen "content"

// Attribute auslesen
console.log(document.querySelector("html").getAttribute("lang")); // gibt einem das attribut mit dem namen "lang"

// Attribut abfragen
console.log(document.querySelector("head > link").hasAttribute("rel")); // true
console.log(document.querySelector("head > link").hasAttribute("type")); // false
