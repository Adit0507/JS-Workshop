// Synchronous and Asynchronous

// Sync
console.log("Start")
    console.log("Finish")

// Async
console.log("Start")

setTimeout(() =>{
    console.log("Testing Asynchronous Code")
}, 3000)

console.log("Finish")

////////////////////
console.log("Start")

function imp(name){
    setTimeout(() => {
        return `My Name is ${name}`
    }, 1000)
}

const message = imp("Aditya")
console.log(message)
console.log("Finish")

