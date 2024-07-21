document.querySelector(".child").addEventListener("contextmenu", (e)=>{
    e.stopPropagation()
    alert("child was clicked")
})

document.querySelector(".childContainer").addEventListener("contextmenu", ()=>{
    e.stopPropagation()
    alert("childConatainer was clicked")
})

document.querySelector(".container").addEventListener("contextmenu", ()=>{
    alert("container was clicked")
})

// Event Bubbling happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.


function getRandomColor(){
    let val1 = Math.floor(Math.random()*256);
    let val2 = Math.floor(Math.random()*256);
    let val3 = Math.floor(Math.random()*256);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// let a = setInterval(() => {
//     document.querySelector(".childContainer").style.backgroundColor = getRandomColor();
// }, 1000);

// console.log(a)

let a = setTimeout(() => {
    document.querySelector(".childContainer").style.backgroundColor = getRandomColor();
}, 5000);

console.log(a)