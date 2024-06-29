/* Create a buisness name generator by combining list of adjectives and shop name and another word

Adjectives: 
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

without using arrays

*/

let random1 = Math.random();
let random2 = Math.random();
let random3 = Math.random();

console.log(random1, random2, random3);

if (random1<=0.33){
    var first = "Crazy";
}

else if ((random1>0.33) && (random1<=0.66)){
    var first = "Amazing";
}

else {
    var first = "Fire"
}




if (random2<=0.33){
    var second = "Engine";
}

else if ((random2>0.33) && (random2<=0.66)){
    var second = "Foods";
}

else {
    var second = "Garments"
}




if (random3<=0.33){
    var third = "Bros";
}

else if ((random3>0.33) && (random3<=0.66)){
    var third = "Limited";
}

else {
    var third = "Hub"
}

let buisness_name = first.concat(" ",second," ", third);
console.log(buisness_name)
alert(`Our buisness name is ${buisness_name}`)