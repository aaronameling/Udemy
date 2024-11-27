"use strict";

let nav = document.querySelector("#navigation");
nav.remove();

let jumbo = document.querySelectorAll(".jumbotron");
// jumbo.remove();
jumbo.forEach(function (i) {
    i.remove()
});
// for (let i = 0; i < jumbo.length; i++) {
//     document.querySelector(".jumbotron").remove();
// }


