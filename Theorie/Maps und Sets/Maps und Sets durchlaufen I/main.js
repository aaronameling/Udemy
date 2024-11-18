"use strict";

let meine_map = new Map()
meine_map.set("Test", "Wert der Eigenschaft Test");
meine_map.set(13, "Wert der Eigenschaft 13");
meine_map.set([], "Wert der Eigenschaft []");
meine_map.set(function() {}, "Wert der Eigenschaft function() {}");
meine_map.set({}, "Wert der Eigenschaft {}");
console.log(meine_map);


let mein_set = new Set()
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function() {});
mein_set.add({});
console.log(mein_set);

meine_map.forEach(function (wert, eigenschaft, map) {
    console.log(wert);
    console.log(eigenschaft);
    // console.log(map);
});

console.log("-------------------------")

mein_set.forEach(function (wert, NULL, set) {
    console.log(wert);
    // console.log(set);
});

console.log("-------------------------")

for (let paar of meine_map) {
    console.log(paar);
}
// was wiedergegeben wird, [eigenschaft, wert]
for (let [eigenschaft, wert] of meine_map) {
    console.log(eigenschaft);
    console.log(wert);
}

console.log("-------------------------")

for (let wert of mein_set) {
    console.log(wert);
}