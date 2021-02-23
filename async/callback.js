function hola(nombre, miCallback) {
  console.log(`Hola, ${nombre}`);
  setTimeout(() => {
    console.log('Proceso asincrono');
    miCallback();
  }, 1000);
}

function adios(nombre, adiosCallback){
  console.log(`Adios ${nombre}`);
  adiosCallback();
}

console.log('Iniciando el proceso');
  hola('Fernando', () => {
    adios('Fernando', () => {
      console.log('Terminando proceso');
    });
  }
);