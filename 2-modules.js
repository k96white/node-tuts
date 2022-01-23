// modules
const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternative-flavor");
// require("./6-mind-grenade")
console.log(names);
sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

console.log(data);
