// Part 1: The Core Concept & Creation

let emptyList = [];


let scores = [100,20,40,60];


let name = ["zaid", "sameer", "sachin"];


let mixedArray = ["Zaid", 22, true, null];



// B. The .length Property
// Every array has a .length property that tells you how many items are in it.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);

// **C. Accessing and Changing Elements (Zero-Based Indexing)**
// To read or change an item, you use its position number, called an **index**.

// **CRITICAL RULE:** Array indexing in JavaScript starts at **0**.

// - The 1st item is at index `0`.
// - The 2nd item is at index `1`.
// - ...and so on.

let fruits1 = ["apple", "banana", "cherry"];

console.log(fruits1[0]); //apple

fruits1[1] = "Blueberry";
console.log(fruits1);


console.log(fruits1[fruits1.length-1]); // "cherry"


// Part 2: Basic Array Modification (Mutating the Array)

let tasks = ["Wash dishes"];
tasks.push("Do laundry", "Buy groceries");

console.log(tasks); 


let completedTask = tasks.pop(); //it will return last element
console.log(completedTask);
console.log(tasks)




//B. Adding/Removing from the BEGINNING of the Array

//unshift -> adds one ort more items to the beginning of the list , 
// shift -> removes the first item and gives it back to you  

let queue = ["Person B", "Person C"];
queue.unshift("Person A");
console.log(queue);


let firstInLine = queue.shift();
console.log(firstInLine);
console.log(queue);



// Part 3: Looping Over an Array (Iteration)
let scores1 = [98, 85, 100];
let total = 0;

for(let i = 0; i<scores1.length; i++){
    console.log(`processing socroe at index ${i}: ${scores1[i]}`);
    total = total + scores1[i];
}

console.log(`The total score is : ${total}`); //283


//B. The for...of Loop (The Modern, Simpler Way)

let names = ["Alice", "Bob", "Charlie"];

for(const name of names){
    console.log(`Hello ${name}`);
}


/**
 ### **Part 4: Advanced Array Manipulation**

**A. The `splice()` Method (The "Surgery" Tool)**
This is a powerful **mutating** method that can add, remove, or replace elements anywhere in the array.

**Syntax:** `array.splice(startIndex, deleteCount, item1, item2, ...)`
 */


let months = ["Jan", "March", "April", "June"];

months.splice(1,1);
console.log(months);

months.splice(1,0,"Feb");
console.log(months);

months.splice(2,1,"May");
console.log(months);



/**
 
**B. The `slice()` Method (Making a Copy)**
This method creates a **new array** by copying a portion of an existing array. It does **not** change the original.

**Syntax:** `array.slice(startIndex, endIndex)` (end index is not included)
 */

let animals = ["ant", "bison", "camel", "duck", "elephant"];

let middleAnimals = animals.slice(2,4);
console.log(middleAnimals);

let allButfirstTwo = animals.slice(2);
console.log(allButfirstTwo);

let fullCopy = animals.slice();
console.log(animals);



/**
C. The Spread Operator (...) (The Modern Way to Copy/Combine)
This is the most popular way in modern JavaScript to create copies or merge arrays.
 */

const arr1 = ["a", "b"];
const arr2 = ["c", "d"];

//Make a copy
const copyOfArr1 = [...arr1]
console.log(copyOfArr1);

//cobnine tow arrays
const combined = [...arr1,...arr2];
console.log(combined);

//Add elements in the middle
const withMiddle= [...arr1,"x","y",...arr2];
console.log(withMiddle);