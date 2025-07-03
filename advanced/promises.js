// Create a new promise with 2 callback fun as parameter 
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 1 is completed");
        resolve();
    }, 1000);
})

// Consume your promise 
promise1.then(function(){   // .then connects with resolve
    console.log("promise1 consumed");  
})

// new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("async 2 is completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "FA", contact: "fa@fa.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            reslove({username:"FA", id: 017})
        }
        else{
            reject('Error! something went wrong')
        }
    }, 1000)
})

promise4.then((user)=>{
    console.log("");
    return user.username;    
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Its finished!");
})


const promise5 = new Promise((reslove,reject)=>{
    setTimeout(function(){
        let error = false
        if (!error){
            reslove({username:"JS", tutorial: "promises"})
        }
        else{
            reject('Error! JS went wrong')
        }
    }, 1000)
})

async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }  
} 

consumePromise5()


async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data  = response.json()
    console.log(data)
}

getAllUsers()