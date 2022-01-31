const fs = require("fs");
const util = require("util");
// This code shows how utility function's promisify of nodejs can be used instead of writing Promise.

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);
const start = async () => {
  const readF = await readFilePromise("./content/movies.txt", "utf-8");
  console.log(readF);
  writeFilePromise(
    "./content/newFile",
    "Arsenal will be better under Mikel Arteta \n",
    {
      flag: "a",
    }
  );
};
start();
