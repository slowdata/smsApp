const express = require('express')
const cors = require('cors')
const fs = require('fs')
const readLine = require('readline')

const router = express.Router()

router.all('*', cors())

router.get('/', (req, res) => {
  res.send({message: 'Hello World!'}).status(200)
})

router.post('/start', (req, res) => {
  let lines = []
  const rs = fs.createReadStream('./../alertas2017728.txt', { encoding: 'utf8' })
  let rl = readLine.createInterface({
    input: rs,
    output: process.stdout,
    terminal: false
  })

  rl.on('line', (line) => {
    if (line.toLowerCase().includes('erro')) {
      lines.push(line)
    }
  })

  rl.on('close', () => {
    rs.close()
    res.send({errors: lines})
  })

  // fs.readFile('./../alertas2017728.txt', 'utf8', (err, data) => {
  //   if (err) {
  //     res.send({message: err})
  //   }
  //   lines = data
  //   res.send({message: lines[0]})
  // })
  // res.send({
  //   message: `Your username is: ${req.body.username} -- Welcome!!`
  // }).status(200)
})

module.exports = router
