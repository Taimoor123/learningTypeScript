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

/*
const a = 5;
const b : number = 33;
const c ="best";
*/


//I suggest use let instead of var everywhere, becuase let has blocked scope


/*
let a: number = 4;
if (true) {
	var b: number = 5;
	a++;
	b++;
console.log("let: " + b);// Error: a is not defined in this scope	
	//use a
}
else {
	let a = "string";
	//use a
}
console.log("let: " + a);// Error: a is not defined in this scope
*/

/*
let myType = <any>  { name: 456, id: 1 };
myType = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
console.log(myType.gender);
myType = { id: 3,  name: "Mike", gender: false };//can add a property
console.log(myType.gender);
myType = { name: "Mike", gender: false };//can even reduce the properties because of any type
console.log(myType.gender);
*/
/*
const enum Color {Red = 1, Green = 2, Blue = 4};
var c: Color = Color.Green;
console.log(c);
*/


//functions



//function functionName(parameterName: dataType, ): returnType {body of function}
/*
function myName(lastName: string, firstName?: string) : string {
		if(firstName)
			return firstName + " " + lastName;
		else
			return lastName; 
	
}

 var result = myName("Tariq");
 console.log(result);
*/

/*
var result : (firstName: string, lastName: string) => string = 
function(firstName: string, lastName: string) : string {
		if(lastName)
			return firstName + " " + lastName;
		else
			return firstName; 
}

var abc = result("taimoor", "tariq");
console.log(abc);
*/

//function nameOfFunction(parameter, ....)
/*
function Name(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
	
	
} 

var emp = Name("asd", "asd", "asd", "asd");
console.log(emp);
*/


/*
let myType = { name: "Zia", id: 1  };
myType = { id: 2,  name: "Tom", gender: true };// can only assign a type which has the atleast the same properties

console.log(myType.name);
*/


/*
var add = (a: number, y: number) => {
	return a + b;
	
}

var add1 = (x: number, y: number) => (x + y);

var myFunction = f => {
	this.x = "x";
	
}
*/

/*
function myCallBack(text: string) {
    console.log("inside myCallback " + text);
}

function callingFunction(initialText: string,
    callback: (text: string) => void)
{
    callback(initialText);
}

callingFunction("myText", myCallBack);
*/

//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3
function add(arg1: any, arg2: any): any {//this is not part of the overload list, so it only has three overloads
    return arg1 + arg2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));




