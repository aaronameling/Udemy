"use strict";

let waren = [
    [
        [
            "Äpfel",
            "Birnen",
            "Bananen"
        ],
        [
            "Möhren",
            "Sellerie",
            "Kohl"
        ],
        [
            "Schwarzbrot",
            "Sauerteigbrot",
            "Vollkornbrot"
        ]
    ],
    [
        [
            "Äpfel",
            "Birnen",
            "Bananen"
        ],
        [
            "Möhren",
            "Sellerie",
            "Kohl"
        ],
        [
            "Sauerteigbrot",
            "Vollkornbrot",
            "Schwarzbrot"
        ]
    ],
    [
        [
            "Äpfel",
            "Birnen",
            "Bananen"
        ],
        [
            "Möhren",
            "Sellerie",
            "Kohl"
        ],
        [
            "Sauerteigbrot",
            "Vollkornbrot",
            "Schwarzbrot"
        ]
    ]
];

for (let i = 0; i < waren.length; i++) {

    for (let j = 0; j < waren[i].length; j++) {

        for (let k = 0; k < waren[i][j].length; k++) {
            console.log(`${waren[i][j][k]}`);
        }
    }
}

console.log(" ");
console.log(" // Drei Dimemsionales Array durchlaufen mit der for-Schleife // ");
console.log(" ");

let waren1 = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Sauerteigbrot",
        "Vollkornbrot",
        "Schwarzbrot"
    ]
];

for (let i = 0; i < waren1.length; i++) {

    for (let j = 0; j < waren1[i].length; j++) {
        console.log(`${waren1[i][j]}`);
    }
}

console.log(" ");
console.log(" // Zwei Dimemsionales Array durchlaufen mit der for-Schleife // ");
console.log(" ");


let waren2 = [

    "Äpfel",
    "Birnen",
    "Bananen",
    "Möhren",
    "Sellerie",
    "Kohl",
    "Sauerteigbrot",
    "Vollkornbrot",
    "Schwarzbrot"
];

for (let i = 0; i < waren2.length; i++) {
        console.log(`${waren2[i]}`);
}

console.log(" ");
console.log(" // Ein Dimemsionales Array durchlaufen mit der for-Schleife // ");
console.log(" ");