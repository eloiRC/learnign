import http from 'node:http'
import ditto from './pokemon/ditto.js'

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          console.log('GET: ' + url)
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(ditto))

        default:
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1> Error 404</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon':{
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a la base de datos para guardar los datos
            res.writeHead(201, { 'Content-Type': 'application/json:charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
        // ????
        default:
          console.log('POST: ' + url)
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1> Error 404</h1>')
      }
  }
}
const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server activo en el puerto ' + server.address().port)
  console.log('http://localhost:' + server.address().port)
})
