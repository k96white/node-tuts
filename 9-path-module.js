const path = require("path");

console.log(path.sep);

// path.join() to join the parts of file path together.
const filePath = path.join("content", "subFolder", "test.txt");
console.log(filePath);

// path.baseName() returns the actual anme of the file
const baseName = path.basename(filePath);
console.log(baseName);

// path.reolve() returns absolute path of the file
const absolute = path.resolve("content", "subFolder", "test.txt");
console.log(absolute);
