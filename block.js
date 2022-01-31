const http = require("http");

const server = http.createServer((req, res) => {
  try {
    if (req.url === "/") {
      res.end("Hello Hey This is home page");
      // res.end();
    } else if (req.url === "/about") {
      /* BLocking code which blocks other process also */
      for (let i = 0; i < 99; i++) {
        for (let j = 0; j < 99; j++) {
          console.log(i + " " + j);
        }
      }
      res.end("About Page");
      // res.end();
    }
    res.end();
  } catch (err) {
    console.log(err);
  }
});

server.listen(3000, () => {
  console.log("Listening on port");
});
