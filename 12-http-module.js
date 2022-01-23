const http = require("http");
const fs = require("fs");
const port = 5000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    const data = fs.readFileSync("./htmlFile/index.html");

    res.end(data.toString());
  } else if (req.url === "/about") {
    res.end("<h1>This is my about page</h1>");
  }

  res.end();
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
