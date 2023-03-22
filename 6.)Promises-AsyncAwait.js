// Synchronous and Asynchronous

// Sync
console.log("Start")
console.log("Finish")

// Async
console.log("Start")

setTimeout(() => {
    console.log("Testing Asynchronous Code")
}, 2000)

console.log("Finish")

////////////////////
console.log("Start")

function imp(name) {
    setTimeout(() => {
        return `My Name is ${name}`
    }, 1000)
}

const message = imp("Aditya")
console.log(message)
console.log("Finish")

// Solution
console.log("Start")
function impAns(name, cb) {
    setTimeout(() => {
        cb(`My Name is ${name}`)
    }, 1000)
}

const ans = impAns("Aditya", function (ans) {
    console.log(ans)
})
console.log("Finish")

// Promises
console.log("Start")

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if (result) resolve("Promise fulfilled")
        else reject(new Error("Task Unfulfilled"))
    }, 2000)
});

sub.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

console.log("Stop")


// Async Await
function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); 
}

f1();