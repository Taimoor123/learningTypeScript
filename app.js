/*var a: string = "hello world";
console.log(a);
*/
/*
var a: number = 6.2222222;


var b: boolean = true;
var c: string = "hello";
var d: number[] = [1, 2, 3];
console.log(a,b,c,d);
*/
var a = 5;
var b = 33;
var c = "best";
//I suggest use let instead of var everywhere, becuase let has blocked scope
if (true) {
    var a_1 = 4;
    console.log("let: " + a_1); // Error: a is not defined in this scope	
}
else {
    var a_2 = "string";
}
console.log("let: " + a); // Error: a is not defined in this scope
//# sourceMappingURL=app.js.map