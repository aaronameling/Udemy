"use strict";

// let auto_objekt_1 = {
//     marke: "BMW",
//     modell: "i8",
//     farbe: "Schwarz"
// };
//
// let auto_objekt_2 = {
//     marke: "Tesla",
//     modell: "Model X",
//     farbe: "Weiß"
// };
//
// let auto_objekt_3 = {
//     marke: "VW",
//     modell: "Golf GTI",
//     farbe: "Blau"
// };
// let autos_arrays = [
//     auto_objekt_1,
//     auto_objekt_2,
//     auto_objekt_3
// ];

let autos_array = [
    {
        marke: "BMW",
        modell: "i8",
        farbe: "Schwarz"
    },
    {
        marke: "Tesla",
        modell: "Model X",
        farbe: "Weiß"
    },
    {
        marke: "VW",
        modell: "Golf GTI",
        farbe: "Blau"
    },
];
console.log(autos_array);

console.log(autos_array[0]);
console.log(autos_array[1]);
console.log(autos_array[2]);

console.log(autos_array[0]["marke"]);
console.log(autos_array[0].modell);
console.log(autos_array[0].farbe);

console.log(autos_array[1].marke);
console.log(autos_array[1].modell);
console.log(autos_array[1].farbe);

console.log(autos_array[2].marke);
console.log(autos_array[2].modell);
console.log(autos_array[2].farbe);


// let waren = [
//     [
//         "Äpfel",
//         "Birnen",
//         "Bananen"
//     ],
//     [
//         "Möhren",
//         "Sellerie",
//         "Köhl"
//     ],
//     [
//         "Sauerteigbrot",
//         "Vollkornbrot",
//         "Schwarzbrot"
//     ]
// ];

let waren_objekt = {
    obst: [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    gemuese: [
        "Möhren",
        "Sellerie",
        "Köhl"
    ],
    brot: [
        "Sauerteigbrot",
        "Vollkornbrot",
        "Schwarzbrot"
    ]
};
console.log(waren_objekt);

console.log(waren_objekt.obst);
console.log(waren_objekt.gemuese);
console.log(waren_objekt.brot);

console.log(waren_objekt.obst[0]);
console.log(waren_objekt.obst[1]);
console.log(waren_objekt.obst[2]);

console.log(waren_objekt.gemuese[0]);
console.log(waren_objekt.gemuese[1]);
console.log(waren_objekt.gemuese[2]);

console.log(waren_objekt.brot[0]);
console.log(waren_objekt.brot[1]);
console.log(waren_objekt.brot[2]);