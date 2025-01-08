const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('---------------------------------')

console.log('Nombre del OS: ', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('CPUs',os.cpus())// podremos escalar procesos de node
console.log('Memoria libre', os.freemem()/1024 /1024)
console.log('Memoria total', os.totalmem()/1024/1024)
console.log('uptime', os.uptime()/60/60)


