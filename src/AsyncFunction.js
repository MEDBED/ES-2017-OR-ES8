// // What is Async/Await?
// //  - The newest way to write asynchronous code in JavaScript.
// //  - It is non blocking (just like promises and callbacks).
// //  - Async/Await was created to simplify the process of working with and writing chained promises.
// //  - Async functions return a Promise. If the function throws an error, the Promise will be rejected.
// //  - If the function returns a value, the Promise will be resolved.
// // Normal Function
// function add(x,y){
//   return x + y;
// }
// // Async Function
// async function add(x,y){
//   return x + y;
// }

// // Await
// //     Async functions can make use of the await expression. 
// //     This will pause the async function and wait for the Promise to resolve prior to moving on.

// function doubleAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x * 2);
//       }, 2000);
//     });
//   }

// // In this code we have a function called doubleAfter2Seconds.
// // This function will take a number as input and will resolve two seconds later with the number doubled.

// doubleAfter2Seconds(10).then((r) => {
//     console.log(r);
//   });

//   function addPromise(x){
//     return new Promise(resolve => {
//       // Code goes here...   
//       // resolve()
//     });
//   }

// ES 2017 introduced Asynchronous functions. 
// Async functions are essentially a cleaner way to work with asynchronous code in JavaScript.
// In order to understand exactly what these are, and how they work, we first need to understand Promises.



function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
  }
  
  
  addAsync(10).then((sum) => {
    console.log(sum);
  });