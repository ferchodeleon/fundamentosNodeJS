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

function adios(nombre) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola('Fernando');
  await hablar();
  await adios(nombre);
}

main();