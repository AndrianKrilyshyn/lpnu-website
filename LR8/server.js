const http = require('http');
const hostname = '127.0.0.1';
const port = 5009;

const requestHandler = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    const responseText = "Крілишин Андріан ОІ-24";
    res.end(responseText);
  };
const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

