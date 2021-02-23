const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if(err) {
      console.error('No he podido escribirlo', err);
    }else {
      console.error('Se ha escrito correctamente', err);
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', console.log);

// leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);