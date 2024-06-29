let arr = [1, 3, 5, 7, 11, 13];

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }


let newArr = arr.map((e, index, array) => e**2);
// let newArr = arr.map((e, index, array) =>{
//      return e**2;
// })

console.log(newArr);

const greaterThanSeven = (e) =>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven))

// console.log(arr.filter((e) =>{
//     if(e>7){
//         return true
//     }
//     return false
// }))


let a = [1,2,3,4,5,6]

const prod = (a, b) => a*b;

console.log(a.reduce(prod));

a1 = Array.from("Harry");
console.log(a1);