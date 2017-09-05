const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const socketIo = require('socket.io')

const index = require('./route/index')

const app = express()
const port = process.env.PORT || 8081

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(index)

const server = http.createServer(app)
const io = socketIo(server)

let interval

io.on('conection', socket => {
  console.log('New client connected')
  if (interval) {
    clearInterval()
  }
  interval = setInterval(() => checkFiles(socket), 10000)
  socket.on('disconect', () => console.log('Client disconnected'))
})

server.listen(port, () => {
  console.log(`Running on port ${port}...`)
})

function checkFiles (socket) {
  console.log('Checking files from function...', socket)
}
