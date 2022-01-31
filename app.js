const http = require("http");
const port = 3000;

/* Using Event emitter api */
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("This is demo event");
});
server.listen(port, () => {
  console.log("Listening on port g", port);
});
