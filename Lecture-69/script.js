
let n = parseInt(prompt("Enter a number to find factorial :"));
console.log(n);

function factorial(number){
    let fact;
    if (number>0){
        let arr = Array.from(Array(number+1).keys());
        arr = arr.slice(1,);
        fact = arr.reduce((a,b) => a*b);
        
    }
    if(number==0){
        fact = 1;
    }
    return fact;
}

alert(`Factorial of ${n} is ${factorial(n)}`);
console.log(factorial(n));

function facFor(number){
    let fact = 1
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}
facFor(n);
console.log("Factorial from facFor", facFor(n))