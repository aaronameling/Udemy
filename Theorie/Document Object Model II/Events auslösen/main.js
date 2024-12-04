"use strict";

let links = document.querySelector("a.active");
let inputs = document.querySelector("input[type=text]");
let formular = document.querySelector("form");


setTimeout(() => links.click(), 3000);
setTimeout(() => inputs.focus(), 6000);
setTimeout(() => inputs.blur(), 9000);
setTimeout(() => formular.reset(), 10000);
setTimeout(() => formular.submit(), 15000);