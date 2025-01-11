import http from 'node:http'
import findAvailablePort from './free-port.mjs'

const disiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recived')
  res.end('Hola Mundo')
})

findAvailablePort(disiredPort).then(port => {
  server.listen(port, () => {
    console.log('Server activo en el purto ' + port)
    console.log('http://localhost:' + port)
  })
})
