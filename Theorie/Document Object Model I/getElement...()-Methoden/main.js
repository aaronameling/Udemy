"use strict";


// Element ID auswählen
let el_by_iD_1 = document.getElementById("navigation");
console.log(el_by_iD_1);

let el_by_iD_2 = document.getElementById("test");
console.log(el_by_iD_2);


// Elemente nach klasse auswählen
let els_by_class_name_1 = document.getElementsByClassName("jumbotron");
console.log(els_by_class_name_1);

let els_by_class_name_2 = document.getElementsByClassName("test");
console.log(els_by_class_name_2);


// Elemente nach Element-Namen (bzw. Tag-Name) auswählen
let els_by_tag_name_1 = document.getElementsByTagName("p");
console.log(els_by_tag_name_1);

let els_by_tag_name_2 = document.getElementsByTagName("test");
console.log(els_by_tag_name_2.length === 0); // im kurs wurde der lose vergleich genutzt aber webstorm nimmt lieber den strickten vergleich