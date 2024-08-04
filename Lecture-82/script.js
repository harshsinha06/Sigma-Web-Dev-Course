

(async function main(){

    console.log(a1);  // undefined as is declared but no value given till now
    
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x,y, ...rest] = [1, 5, 7, 8, 9, 10]
    // console.log(x, y);
    // console.log(rest);
    
    let obj = {
        a: 1,
        b: 2,
        C: 3
    }

    let {a, b} = obj
    console.log(a, b)

    let arr = [1, 4, 6]
    // console.log(arr[0] + arr[1] + arr[2]);
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));  // ... -> spread operator
    
    let obj1 = {...arr}
    console.log(obj1);

    // let a1 = 6; 
    var a1 = 6;   //declarations at the top
    
})()

// const x = "the"
// const y = "no"
// const obj2 = {x, y}
// console.log(obj2);


async function sleep(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

const sum = async (a, b, c) => {
    return a+b+c
}