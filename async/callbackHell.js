function hola(nombre, miCallback) {
  console.log(`Hola, ${nombre}`);
  setTimeout(() => {
    console.log('Proceso asincrono');
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function() {
    console.log('Bla bla bla....');
    callbackHablar();
  }, 1000)
}

function adios(nombre, adiosCallback){
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    adiosCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if ( veces > 0 ){
    hablar(() => {
      conversacion(nombre, --veces, () => {
        console.log('Proceso terminado');
      });
    });
  } else {
    adios(nombre, callback);
  }
}

// --

console.log('Iniciando el proceso');
  // hola('Fernando', (nombre) => { //Forma de hacerlo en callback hell
  //   hablar(function() {
  //     hablar( () => {
  //       hablar( () => {
  //         hablar( () => {
  //           adios(nombre, () => {
  //             console.log('Terminando proceso');
  //           })
  //         })
  //       });
  //     })
  //   })
  // })

  hola('Fernando', (nombre) => { //Forma de hacerlo correctamente
    conversacion(nombre, 3, adios);
  });