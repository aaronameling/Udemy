"use strict";

console.log("K" == "k");
console.log("K" > "k");
console.log("K" < "k");
console.log("K" < "L");
console.log("---------------");

console.log("Aaron" == "Aaron");
console.log("Aaron" == "Aaron Ameling");
console.log("Aaron" == "AARON");
console.log("---------------");

console.log("Aaron" != "Aaron");
console.log("Aaron" != "Aaron Ameling");
console.log("Aaron" != "AARON");
console.log("---------------");

console.log("Aaron" < "Aaron");
console.log("Aaron" < "Aaron Ameling");
console.log("Aaron" < "AARON");
console.log("---------------");

console.log("Aaron" > "Aaron");
console.log("Aaron" > "Aaron Ameling");
console.log("Aaron" > "AARON");
console.log("---------------");

console.log("Aaron" >= "Aaron");
console.log("Aaron" >= "Aaron Ameling");
console.log("Aaron" >= "AARON");
console.log("---------------");

console.log("Aaron" <= "Aaron");
console.log("Aaron" <= "Aaron Ameling");
console.log("Aaron" <= "AARON");
console.log("---------------");

console.log("42" === 42);
console.log("42" !== 42);
console.log("---------------");

console.log("42" == 42); // Lose Gleichheit ( == )
console.log("42" === 42); // Strickte Gleichheit ( === )
console.log("-------------");
console.log("42" != 42); // Lose Ungleichheit ( == ) ( console: false, weil der String "10" zur Number 10 Formatiert wird und 10 != 10 ist false. )
console.log("42" !== 42); // Strickte Ungleichheit ( === ) ( console: true, weil KEINE Formatierung vorgenommen wird, String & Number also ungleich TRUE. )





