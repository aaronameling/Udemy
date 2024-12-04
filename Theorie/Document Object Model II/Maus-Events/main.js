"use strict";

let jumbo = document.querySelector(".jumbotron")

jumbo.addEventListener("click", function (e) {
    // console.log(e);
});
jumbo.addEventListener("click", e => {
    // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.target);
});
jumbo.addEventListener("dblclick", e => {
    // console.log("DBLCLICK:");
    // console.log(`${e.target} ${e.target.textContent} wurde entfernt`);
    // e.target.remove();
});


jumbo.addEventListener("mousedown", e => {
    // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.target);
});
jumbo.addEventListener("mouseup", e => {
    // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.clear();
});
jumbo.addEventListener("dblclick", e => {
    console.log("DBLCLICK:");
    console.log(`${e.target} ${e.target.textContent} wurde entfernt`);
    // e.target.remove();
});

jumbo.addEventListener("mouseover", e => {
    // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    console.log(e.target);
});
jumbo.addEventListener("mouseout", e => {
    // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    console.clear();
});



// let alle = document.querySelectorAll(".jumbotron * *")
// alle.forEach(function (i) {
//     document.addEventListener("click", e => console.log(e.target))
//     document.addEventListener("dblclick", e => e.target.remove())
// });