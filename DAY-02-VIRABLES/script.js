var name = "Md Zaid"; //Globle-scoped - we can access anyware
let age  = 20;        //bllock-scoped 
const phone = 6299979110;  //bllock-scoped

console.log(name);
console.log(age);
console.log(phone);


// scope of virables

//  Var :

if(true){
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x); // 10 because x is global-scoped and can be accessed outside the if block.
console.log(y); // ReferenceError: y is not defined because y is block-scoped and cannot be accessed outside the if block.
console.log(z); // ReferenceError: z is not defined because z is block-scoped and cannot be accessed outside the if block.

if(true){
    var x = 10;
    console.log(x); // 10 because x is global-scoped and can be accessed outside the if block.
    let y = 20;
    console.log(y); // 20 because y is block-scoped and can be accessed inside the if block.
    const z = 30;
    console.log(z); // 30 because z is block-scoped and can be accessed inside the if block.
}


// var can be redeclared and updated
var x = 10;
var x = 20; // Allowed

let y = 30;
let y = 40; // SyntaxError

const z = 50;
const z = 60; // SyntaxError


// virable naming rules
let fullName = "Md Zaid"; // camelCase allowed
let full_name = "Md Zaid"; // snake_case allowed
let FullName = "Md Zaid"; // PascalCase allowed
let full-name = "Md Zaid"; // kebab-case not allowed
let 1name = "Md Zaid"; // cannot start with a number
let name$ = "Md Zaid"; // $ allowed
let name_ = "Md Zaid"; // _ allowed
let name@ = "Md Zaid"; // @ not allowed
let $name = "Md Zaid"; // $ allowed
let _name = "Md Zaid"; // _ allowed