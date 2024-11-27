"use strict";

let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_klasse");
let test = document.createTextNode("Lorem ipsum dolor sit amet veni vidi vici")

// appendChild()-Methode: fügt eine Element als letztes Kindelement in ein Elternelement ein
// Syntax: elternelement.appendChild(kindelement);
// existiert das Kindelement im Elternelement bereits, wird es entfernt und als letztes Kindelement wieder angefügt

// Text zum div-element hinzufügen
div.appendChild(test);

// section im jumbotron selektieren
let jumbo = document.querySelector(".jumbotron > section")/*.appendChild(div)*/;
// div-element zur section als Kindelement hinzufügen
jumbo.appendChild(div);
// li-element aus dem Elternelement ul-element, selektieren
let li = document.querySelector("#navigation > ul > li");
// ul-element aus dem Elternelement mit der ID-navigation, selektieren
let ul = document.querySelector("#navigation > ul");
// li-element zum ul-element als Kindelement hinzufügen
ul.appendChild(li);

