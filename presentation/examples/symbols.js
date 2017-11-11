let firstName = Symbol();
let person = {};

person[firstName] = "Nicholas";
console.log(person[firstName]);     // "Nicholas"

let firstName = Symbol("first name");
console.log(firstName); // Symbol("first name")