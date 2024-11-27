"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein_listen_element")

let a = document.createElement("a");
a.setAttribute("id", "mein_a _element");
a.setAttribute("href", "#")

let text = document.createTextNode("Element");

a.appendChild(text);
li.appendChild(a);

let  liste = document.querySelector("#navigation > ul");
//  liste.appendChild(li);
//  liste.insertAdjacentElement("beforebegin", li);
liste.insertAdjacentElement("afterbegin", li);
//  liste.insertAdjacentElement("beforeend", li);
//  liste.insertAdjacentElement("afterend", li);

let dom_string = "<li id='mein-listenelement'><a id='mein_anker_element' href='#'>Element</a></li>";
// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML ("afterbegin", dom_string);
liste.insertAdjacentHTML ("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);

let text_1 = "lorem ipsum dolor sit amet veni vidi vici";
// liste. insertAdjacentText ("beforebegin", text);
// liste.insertAdjacentText("afterbegin", text);
// liste. insertAdjacentText ("beforeend", text);
liste.insertAdjacentText("afterend", text_1)
