// let n = parseInt(Math.random()*5);
// console.log(n);

// let boxes = document.getElementsByClassName("box");

// let color1 = "red"
// let color2 = "green"
// let color3 = "aqua"
// let color4 = "yellow"
// let color5 = "beige"

// boxes[n].style.color=color1
// boxes[n].style.backgroundColor=color2

console.log("Script.js intialising")
// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor(){
    let val1 = Math.floor(Math.random()*256);
    let val2 = Math.floor(Math.random()*256);
    let val3 = Math.floor(Math.random()*256);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    console.log(e)
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})