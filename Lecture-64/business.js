/* Create a business name generator by combining list of adjectives and shop name and another word


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


*/

let obj1 = {
    1:"Crazy", 
    2:"Amazing",
    3:"Fire" 
}

let obj2 = {
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

let obj3 = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

var rand1 = Math.floor(Math.random()*3) + 1;
var rand2 = Math.floor(Math.random()*3) + 1;
var rand3 = Math.floor(Math.random()*3) + 1;

let business_name = obj1[rand1] + " " + obj2[rand2] + " " + obj3[rand3];

console.log(business_name)
alert(`Our business name is ${business_name}`)