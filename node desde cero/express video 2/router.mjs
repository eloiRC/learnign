import http from 'node:http'

const processRequest = (req, res) => {

}

const server = http.createServer(processRequest)

server.listen(0, () => {
  console.log('Server activo en el puerto ' + server.address().port)
  console.log('http://localhost:' + server.address().port)
})
