// Create a script which has two methods that 
// return promises - One of the promises should 
// get reolved after 6 seconds timeout and the other 
// one after 3 seconds timeout. Call the promise 
// in such a way that the second promise is 
// invoked after the first promise is resolved.

// let myPromise1 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Fist task");
//     },6000)
// })

// let myPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second task");
//     },6000)
// })

// myPromise1.then(value => {
//     console.log(value + "done!");
//     myPromise2.then(value => {
//         console.log(value + "done!");
//     })
// })

// let myPromise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("Promise 1 resolved")
//     },6000)})

// let myPromise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("Promise 2 resolved")
//     },3000)})

//   myPromise1.then((successMessage) => {
//     console.log("From Callback " + successMessage)
//     myPromise2.then((successMessage) => {
//       console.log("From Callback " + successMessage)
//     })
//   })

let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})

let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },6000)})

  myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

  myPromise2.then((successMessage) => {
  console.log("From Callback " + successMessage)
})
