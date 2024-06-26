// // Q-1

// const obj = {harry:98, rohan:70, aakash:7}

// for(let i = 0; i < 3; i++){
//     const keys = Object.keys(obj);
//     const student = keys[i];
//     const marks = obj[student]
//     console.log(marks);
// }



// // Q-2

// for (const student in obj) {
//     const element = obj [student];
//     console.log(element);
// }



// Q-4

sum = 0;

for(let i = 10; i<15; i++){
    sum += i;
}

let mean = sum/5;
console.log("The mean of these 5 numbers is ", mean);