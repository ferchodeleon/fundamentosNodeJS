const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición");
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('<h1>Hola que tal?</h1>');
      res.end();
      break;

    default:
      res.write('Erro: 404, no se lo que quieres');
      res.end();
      break;
  }

  // res.writeHead(201, {"content-Type": "text/plain"});
  // res.write('Primer escrito con NodeJS');
  // res.end();
};
