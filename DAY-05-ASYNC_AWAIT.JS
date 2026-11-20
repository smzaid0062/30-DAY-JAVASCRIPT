// function orderCoffee() {          // returns a Promise
//   return new Promise(resolve =>
//     setTimeout(() => resolve('☕ Latte ready'), 2000)
//   );
// }

// async function customer() {
//   console.log('Ordering...');
//   const coffee = await orderCoffee();  // wait, but don't block others
//   console.log(coffee);                 // after 2s
//   console.log('Drinking!');
// }
// customer();
// console.log('Browsing phone while waiting...'); // runs FIRST



// let checkEven = new Promise((resolve, reject)=>{
//     let num = 5;
//     if (num % 2 === 0){
//         resolve("The number is even");
//     }else{
//         reject("The number is odd");
//     }
// });

// checkEven
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// })



// let getData = new Promise((resolve, reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         return response.json();
//     })
//     .then((data)=>{
//         resolve(data);
//     })
//     .catch((error)=>{
//         reject(error);
//     }) 
// })   

// getData
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })


// function getData(){
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         if (!response.ok) throw new Error(`HTTP ${response.status}`);
//         return response.json();
//     })
// }

// getData()
//   .then(data => console.log(data))
//   .catch(error => console.log('Error:', error.message));



async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok){
        throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data;
}

getData();
console.log(data);

