const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/welcome') {
    return res.end('Hello World !');
  } else {
    return res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));