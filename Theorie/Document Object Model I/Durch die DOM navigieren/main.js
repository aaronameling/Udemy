"use strict";

let ul = document.querySelector("#navigation > ul");
// console.log(nav);

// Kindelemente

let child_nodes = ul.childNodes; // alle Kindelemente inkl. Text- und Kommentarknoten
let children = ul.children; // alle Kindelemente exkl. Text- und Kommentarknoten
let firstchild = ul.firstChild; // erste Kindelement inkl. Text- und Kommentarknoten
let lastchild = ul.lastChild; // lestes Kindelement inkl. Text- und Kommentarknoten
let first_element_child = ul.firstElementChild; // erste Kindelement exkl. Text- und Kommentarknoten
let last_element_child = ul.lastElementChild; // lestes Kindelement exkl. Text- und Kommentarknoten

// Geschwisterelemente

let next_sibling = ul.nextSibling; // nächstes Geschwisterelement inkl. Text- und Kommentarknoten
let previous_sibling = ul.previousSibling; // vorheriges Geschwisterelement inkl. Text- und Kommentarknoten
let next_element_sibling = ul.firstElementChild.nextElementSibling; // nächstes Geschwisterelement exkl. Text- und Kommentarknoten
let previous_element_sibling = ul.lastElementChild.previousElementSibling; // vorheriges Geschwisterelement exkl. Text- und Kommentarknoten

// Elternelement

let parent_element = ul.parentElement; // Elternelement eines Elements

// Allgemeines navigieren

let anker = ul.querySelectorAll("li > a")


console.log(child_nodes);
console.log(children);
console.log(firstchild);
console.log(lastchild);
console.log(first_element_child);
console.log(last_element_child);
console.log(next_sibling);
console.log(previous_sibling);
console.log(next_element_sibling);
console.log(previous_element_sibling);
console.log(parent_element);
console.log(anker);