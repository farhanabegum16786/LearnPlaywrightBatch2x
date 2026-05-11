var a = 10;

//var is actually function-scoped.

console.log(a); //Global scope

function printHello() {
    console.log("Hello Testing Academy");
    var a = 20;
    console.log(a);  //Local scope
    if (true) {
        var a = 30;
        console.log(a);

    }
}


printHello();
var a = 50;
console.log(a);



