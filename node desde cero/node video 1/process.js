// argumentos de entrada
console.log(process.argv)

// podem controlar els events del process
process.on('exit', () => {
  // limpiar los recursos
  console.log('exit')
})

// current working directory, no torna on esta el fitxer sino a quin path s'esta executant
console.log(process.cwd())

// amb proces es poden veure altres dades com id del proces en cpu o l'us de memoria us de cpu etc...

// control del proceso y su salida
process.exit(0)
// 0 okey
// 1 tanquem perque pot haver algun error
