const express = require('express')
const cors = require('cors')

const router = express.Router()

router.all('*', cors())

router.get('/', (req, res) => {
  res.send({message: 'Hello World!'}).status(200)
})

router.post('/register', (req, res) => {
  res.send({
    message: `Your username is: ${req.body.username} -- Welcome!!`
  }).status(200)
})

module.exports = router
