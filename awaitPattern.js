const fs = require("fs");
const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
/* getText("./content/movies.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); */

const asyncMethod = async () => {
  try {
    const result = await getText("./content/movies.txt");
    console.log("Result is ", result);
  } catch (error) {
    console.log(error);
  }
};
asyncMethod();
