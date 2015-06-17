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



/*
let myType = { name: "Zia", id: 1  };
myType = { id: 2,  name: "Tom", gender: true };// can only assign a type which has the atleast the same properties

console.log(myType.name);
*/

