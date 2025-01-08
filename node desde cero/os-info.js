import { platform, release, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('informacion del sistema operativo')
console.log('---------------------------------')

console.log('Nombre del OS: ', platform())
console.log('Version del sistema operativo', release())
console.log('CPUs',cpus())// podremos escalar procesos de node
console.log('Memoria libre', freemem()/1024 /1024)
console.log('Memoria total', totalmem()/1024/1024)
console.log('uptime', uptime()/60/60)


