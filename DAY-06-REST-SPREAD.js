// const arr = [10,20,30];

// const newArray = [...arr,40,50];

// console.log(newArray);


// function sum(a,b,c){
//     return a+b+c;
// }

// const nums = [10,20,30];
// const result = sum(...nums);
// console.log(result);


console.log("----------------------------------");

//Rest Operator Use
// const arr = [1, 2, 3, 4, 5];

// const first = arr[0];
// const rest = arr.slice(1);

// console.log(first);
// console.log(rest);

// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log("First element:", first); // 1
// console.log("Rest of the elements:", rest);


// //use Case 

// //1. Handling Variable Length Function Arguments

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
// console.log("Sum:", sum(10, 20)); // Sum: 30


// 2. Array Destructuring

const [first, second, ...rest] = [10,20,30,40];
console.log("First element:", first); // First element: 1
console.log("Second element:", second); // Second element: 2
console.log("Rest of the elements:", rest); // Rest of the elements: [3, 4, 5]
