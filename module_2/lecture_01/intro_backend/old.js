const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello from SkillSlash\n");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About us\n");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found\n");
    }
  }
});

server.listen(5000, () => {
  console.log("Node server created at port 5000");
});
