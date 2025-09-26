// Creating a promise method.

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved")
    },6000)
})


// Console log before calling the promise
console.log("Before calling the promise");

// Call the promise and wait for it to be resolved and print a message
myPromise.then(value => {
    console.log("From Callback " + value)
})

// Console log after calling the promises
console.log("After calling the promise");