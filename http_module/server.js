const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> Welcome to my test website   </h1>");
    res.end();
  }

  if (req.url === "/source-code") {
    res.write(
"Here is the source code that you need "    );
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Contact now!");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});