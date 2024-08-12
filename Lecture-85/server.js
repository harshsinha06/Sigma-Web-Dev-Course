// Further Readings: https:https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);


// if you prefer something other than '-' as separator
let b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b);

