console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, random number is not supporting you");
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done")
            resolve("Harry")
        }, 2000)
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.4) {
        reject("No, random number is not supporting you 2");
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done 2")
            resolve("Harry 2")
        }, 1000)
    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.3) {
        reject("No, random number is not supporting you 3");
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done 3")
            resolve("Harry 3")
        }, 500)
    }
})

let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.2) {
        reject("No, random number is not supporting you 4");
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done 4")
            resolve("Harry 4")
        }, 250)
    }
})

let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.1) {
        reject("No, random number is not supporting you 5");
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done 5")
            resolve("Harry 5")
        }, 100)
    }
})

let p6 = Promise.reject([prom1, prom2, prom3, prom4, prom5])
p6.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})
