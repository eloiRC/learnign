import http from 'node:http'
import fs from 'node:fs'
const disiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recived: ' + req.url)
  res.setHeader('content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // ok
    res.end('bienvenido a mi pagina de inicio')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // ok
    res.end('Contacto')
  } else if (req.url === '/imagen') {
    fs.readFile('./DSC06894-min.JPG', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('error 500 internal server error')
      } else {
        res.statusCode = 200 // ok
        res.setHeader('content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404 // not found
    res.end('404')
  }
})

server.listen(disiredPort, () => {
  console.log('Server activo en el purto ' + disiredPort)
  console.log('http://localhost:' + disiredPort)
})
