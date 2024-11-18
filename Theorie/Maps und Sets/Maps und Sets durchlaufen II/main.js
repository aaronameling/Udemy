"use strict";

let meine_map = new Map()
meine_map.set("Test", "Wert der Eigenschaft Test");
meine_map.set(13, "Wert der Eigenschaft 13");
meine_map.set([], "Wert der Eigenschaft []");
meine_map.set(function() {}, "Wert der Eigenschaft function() {}");
meine_map.set({}, "Wert der Eigenschaft {}");
// console.log(meine_map);


let mein_set = new Set()
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function() {});
mein_set.add({});
// console.log(mein_set);

// console.log(meine_map.entries());
// console.log(meine_map.values());
// console.log(meine_map.keys());

// for (let [eigenschaft, wert] of meine_map.entries()) {
//     console.log(eigenschaft);
//     console.log(wert);
// }

for (let eigenschaft of meine_map.keys()) {
    console.log(eigenschaft);
}

for (let [eigenschaft, wert] of meine_map.values()) {
    console.log(wert);
}

for (let wert of mein_set.values()) {
    console.log(wert);
}