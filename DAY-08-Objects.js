// // Object literals
// const user = {
//     name: "Zaid",
//     age: 21,
//     greet: function(){
//         console.log("Hello" + name)
//     }
// };

// console.log(user);


// // Construction Function

// function Student(name, age){
//     this.name = name;
//     this.age = age;
// }
// Student.prototype.greet = function(){
//     console.log(`Hello, I am ${this.name}`);
// } 

// const st1 = new Student("Zaid", 22);
// const st2 = new Student("Iqbal", 23);

// console.log(st1.greet());   
// console.log(st2.greet());

// ES6 Classes (The Modern Standard)

// class User {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     };

//     greet(){ //automatically goes to user.prototype
//         console.log(`Hello, I am ${this.name}`);
//     }
// }

// const user1 = new User("Md Zaid",22);
// const user2 = new User("Md Iqbal",22);

// console.log(user1,user2)



// Factory Functions (Highly Recommended in Modern JS)

//A factory function is simply a regular function that returns a new object.
function createUser(name,age){
    return {
        name,
        age,
        greet(){
            console.log(`Hello, I am ${name}`); 
        }
    };
}

const user1 = createUser("Zaid", 22);
const user2 = createUser("John", 22);

console.log(user1.greet(),user2.greet())
