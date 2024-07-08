console.log("Script.js intialising")
// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;
console.log(boxes)

// // Generate Random Color
// function getRandomColor(){
//     let val1 = Math.floor(Math.random()*256);
//     let val2 = Math.floor(Math.random()*256);
//     let val3 = Math.floor(Math.random()*256);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// // Assign Random color and background
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = getRandomColor();
// })

Array.from(boxes).forEach(e=>{
    // Generate Random Color
    let getRandomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    let getRandomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Assign Random color and background
    e.style.color = getRandomColor;
    e.style.backgroundColor = getRandomBackgroundColor;
})