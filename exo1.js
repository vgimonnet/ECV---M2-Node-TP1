const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(400);

  return res.end('Error');
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));