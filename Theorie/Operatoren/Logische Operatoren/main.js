"use strict";

// logische "und" &&
// logische "oder" ||
// logisches "nicht" !

console.log(1 > 0 && 4 < 6);
console.log(1 > 0 && 6 < 4);
console.log("-------------");

console.log(1 > 0 || 4 < 6);
console.log(1 > 0 || 6 < 4);
console.log("-------------");

console.log(1 > 0 && !(6 < 4));
console.log("-------------");

console.log(1 > 0 && 4 < 6 && 10 < 20);
console.log(1 > 0 && 4 < 6 && 10 > 20);
console.log("-------------");

console.log(1 > 0 && 4 < 6 || 10 > 20);
console.log(1 > 0 && 4 > 6 || 10 < 20);
console.log("-------------");

console.log(1 > 0 && 4 > 6 || 10 > 20);
console.log("-------------");

console.log(1 < 0 && 10 < 20 || 6 > 4);
console.log(1 < 0 && (10 < 20 || 6 > 4));


