const fs = require("fs");
const text = fs.readFileSync("./content/subFolder/test.txt", "utf-8");
console.log(text);
fs.writeFileSync(
  "./content/resultFIle.txt",
  `\n Hey this is resultfile Buddy : ${text}`,
  { flag: "a" }
);
