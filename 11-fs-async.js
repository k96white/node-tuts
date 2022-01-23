const { readFile, writeFile } = require("fs");

// read file works asynchronously which means callback will be called later once execution stack gets empty
/* The callback hell handles the way callbacks can be called */
readFile("./content/movies.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstData = data;
  readFile("./content/subFolder/test.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondData = data;
    writeFile(
      "./content/resultFileAsync.txt",
      `The Result file is ${firstData} \n ${secondData}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    );
  });
});
console.log("This line is working asynchronously");
