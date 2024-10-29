"use strict";

let vorname = "Aaron";
let nachname = "Ameling";
let alter = 25;

// Konkatinierung
let name = vorname + " " + nachname;
console.log(name);

// Template Strings
let begruessung = `Hallo ${name}!`;
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`
console.log(zusammenfassung);

// Mehrzeilige Templatestrings
let mehrzeiliger_template_string = `Hallo ${name} 
Du bist ${alter} Jahre alt.
Wie geht es dir?`;
console.log(mehrzeiliger_template_string);

// Kankatinierte Templatestrings
let konkatinierte_template_string = `Hallo ${name}! ` +
`Du bist ${alter} Jahre alt. `+
`Wie geht es dir?`;
console.log(konkatinierte_template_string);