import http from 'node:http'

const disiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recived: ' + req.url)
  res.end('Hola Mundo')
})

server.listen(disiredPort, () => {
  console.log('Server activo en el purto ' + disiredPort)
  console.log('http://localhost:' + disiredPort)
})
