//JS Engine
// LINE BY EXECUTION, JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

//Behind the Scenes:

//var greeting;                   < ----- hoisted with undefined
//console.log(greeting);          < ------undefined
//greeting = "Hello";             < ------assignment stays in place
//console.log(greeting);          < ------"Hello"!


//var a;
console.log(a);
var a = "farhana";
console.log(a);




