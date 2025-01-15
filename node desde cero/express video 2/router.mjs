import http from 'node:http'
import ditto from './pokemon/ditto'

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case 'pokemon-ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(ditto))

        default:
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1> Error 404</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon':
          const body = ''
          break

        default:
          break
      }
  }
}
const server = http.createServer(processRequest)

server.listen(0, () => {
  console.log('Server activo en el puerto ' + server.address().port)
  console.log('http://localhost:' + server.address().port)
})
