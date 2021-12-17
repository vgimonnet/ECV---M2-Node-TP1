const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  return res.end(JSON.stringify({
    firstname: 'Valentin',
    lastname: 'Gimonnet',
    birthdate: '21/04/1998',
    color: 'bleu'
  }));
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));