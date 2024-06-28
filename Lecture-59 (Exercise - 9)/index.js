/* Create a faulty calculator using JavaScript.

This faulty calculator does following:
1. It takes two numbers as input form the user
2. It performs wrong opertations as follows;

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the times
*/



let random = Math.random();

let a = parseInt(prompt("Enter first number: "))
let b = parseInt(prompt("Enter second number: "))
let c = prompt("Enter operation (+, -, *, /): ")

console.log(random)

if (random > 0.1){
    if (c = "+"){
        var result = a + b;
    }
    else if (c = "-"){
        var result = a - b;
    }
    else if (c = "*"){
        var result = a * b;
    }
    else if (c = "/"){
        var result = a / b;
    }
}

else {
    if (c = "+"){
        var result = a - b;
    }
    else if (c = "-"){
        var result = a / b;
    }
    else if (c = "*"){
        var result = a + b;
    }
    else if (c = "/"){
        var result = a ** b;
    }
}

alert(`The result is ${result}`)
console.log("Result is ",result)