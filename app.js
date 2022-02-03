const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile", {
  highWaterMark: 90000,
  encoding: "utf-8",
});
//C:\Users\k96wh\Desktop\KiranFolder\NodeJsTutorial\content\bigFile
stream.on("data", (result) => {
  console.log(result);
});
