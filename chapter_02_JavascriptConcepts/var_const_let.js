var v = 10;
let l = 30;
const c = 30.3;


var browser = "chrome";
var browser = "firefox";  //redeclartion allowed
browser = "edge";  //reassignment allowed


var testCase = ["login", "Signup", "Logout"];

for (var i = 0; i < testCase.length; i++) {
    console.log("Running  test:", testCase[i]);
}


console.log("Loop counter leaked outside:" + i);



console.log("Hi farhana");
console.log("Hi farhana");
console.log("Hi farhana");
console.log("Hi farhana");
console.log("Hi farhana");

function say() {
    console.log("Hi from the Testing academy")
}

say();
say();


//boilerplate