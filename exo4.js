const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
  const url = new URL(`http://localhost:3000/${req.url}`);
  const params = url.searchParams;

  return res.end(`Your message: ${params.get('message')}`);
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));