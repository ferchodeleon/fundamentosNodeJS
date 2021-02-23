function hola(nombre) {
  return new Promise( (resolve, reject) => {
    console.log(`Hola, ${nombre}`);
    setTimeout(() => {
      console.log('Proceso asincrono');
      resolve()
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Bla bla bla....');
      resolve(nombre);
    }, 1000)
  })
}

function adios(nombre){
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1500);
  });
}

// --

console.log('Iniciando proceso');
let name = 'Fernando';
hola(name)
  .then(hablar)
  .then(adios)
  .then((name) => {
    console.log('Terminando el proceso');
  })
  .catch(error => {
    console.error('Ha habido un error');
    console.error(error);
  })