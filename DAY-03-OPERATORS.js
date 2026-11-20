// ### **1. Introduction: What is an Operator?**

// In JavaScript, an **operator** is a special symbol or keyword used to perform an operation on values. The values that the operator works on are called **operands**. The combination of operators and operands forms an **expression**, which evaluates to a single value.



let result = 10+10;

console.log(result);


let level = 10;
level += 5;
level *= 2;

console.log(level);



let postfix = 5;
let prefix = 5;

console.log(postfix++);
console.log(postfix);

console.log(++prefix);
console.log(prefix);


// ### **4. Comparison Operators**

// These operators compare two values and evaluate to a boolean (true or false).

// - > (Greater than)
// - < (Less than)
// - >= (Greater than or equal to)
// - <= (Less than or equal to)

// **The Most Critical Concept: Strict vs. Loose Equality**

// - **== (Loose Equality):** Compares two values for equality **after** performing type coercion (automatic type conversion). **AVOID THIS OPERATOR.** It has complex rules and can lead to very confusing bugs. code JavaScript


console.log(7 =="7");

console.log(0 == false);


console.log(7 === "7");

console.log(0 === false);


// ### **Logical Operators**

// Used to combine boolean expressions, typically in if statements.

// - **&& (Logical AND):** Evaluates to true only if **both** operands are true (or "truthy"). code JavaScript
//     - **Short-Circuiting:** If the left-hand operand is false, the right-hand operand is **never evaluated**. This is a powerful feature for preventing errors.

let user = null;
// This is safe. The code stops at `user` and never tries to access `user.name`.
if (user && user.name === "Admin") { /* ... */ }


// Conversion in JS
// Converting data from one type to another is a fundamental task in JavaScript. This process is called **Type Conversion** or **Type Casting**.

// There are two main ways this happens in JavaScript:

// 1. **Implicit Conversion (Coercion):** JavaScript does it automatically behind the scenes. This is what happens with the == operator. It can be convenient but is often a source of bugs because it's not obvious.
// 2. **Explicit Conversion:** You, the developer, intentionally write code to convert a value from one type to another. **This is the recommended, safe, and professional way to handle type conversions.**

let num = 123;
let strNum = String(num);

console.log(strNum);

let bool = true;
let strBool = String(bool);
console.log(strBool);

let value = null;
let strNull = String(value); // "null"
console.log(strNull);

let arr = [1, 2];
let strArr = String(arr); // "1,2"
console.log(strArr);



    let str = "99.5";
let num1 = Number(str); // 99.5
console.log(num1);

let invalidStr = "apple";
let notANumber = Number(invalidStr);
console.log(notANumber);


// ### Method 2: parseInt() and parseFloat()

// These functions are more specific. They parse a string from left to right and stop when they hit a non-numeric character.

// - parseInt(): Parses for an integer.
// - parseFloat(): Parses for a floating-point number.


let num2 = parseInt("100px");
console.log(num2)
