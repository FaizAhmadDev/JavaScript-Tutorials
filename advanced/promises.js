// Create a new promise with 2 callback fun as parameter 
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Async Task is completed");
        resolve();
    }, 1000);
})

// Consume your promise 
promise1.then(function(){   // then connects with resolve
    console.log("promise consumed");
    
})