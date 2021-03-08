process.on('exit', () => {
  console.log('Termino el proceso');
});

process.on('beforeExit', () => {
  console.log('Esto es antes que termine el proceso');
})

process.on('uncaughtException', (error, origin) => {
  console.error('Se escapo un error');
  console.error(error);
})

functionNoOrigin();