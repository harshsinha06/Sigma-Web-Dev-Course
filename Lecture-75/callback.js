console.log("Rohan is a hecker")
console.log("Harry is a hacker")


setTimeout(() => {
    console.log("I am inside setTimeout")
},0);


setTimeout(() => {
    console.log("I am inside setTimeout2")
},0);

console.log("The End");

const callback = (arg, fn) =>{
    console.log(arg);
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)