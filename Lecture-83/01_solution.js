// The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// Method-I

// let students = ["Arjun", "Neha", "Shubham", "Shivangi",     "Jagannathan", "Annapurna", "Shubh", "Suryaprakash"]
// let house = []

// students.forEach((e) => {
//     if (e.length < 6){
//         house = 'Gryffindor';
//     }
//     else if (e.length >= 6 && e.length < 8){
//         house = 'Hufflepuff';
//     }

//     else if (e.length >= 8 && e.length < 12){
//         house = 'Ravenclaw';
//     }

//     else{
//         house = 'Slytherin';
//     }

//     console.log(`${e} is in ${house} house`);
// })

// console.log(``)

let students = ["Arjun", "Neha", "Shubham", "Shivangi",     "Jagannathan", "Annapurna", "Shubh", "Suryaprakash"]
let houses = [];

for(const e of students){
    if (e.length < 6){
        houses.push('Gryffindor');
    }
    else if (e.length >= 6 && e.length < 8){
        houses.push('Hufflepuff');
    }
        
    else if (e.length >= 8 && e.length < 12){
        houses.push('Ravenclaw');
    }
        
    else{
        houses.push('Slytherin');
    }
}

for(const i in students){
    console.log(`${students[i]} is in ${houses[i]} house`);
}
