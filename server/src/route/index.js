const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({message: 'Hello World!'}).status(200)
})

router.post('/register', (req, res) => {
  res.send(`Your username is: ${req.body.username} -- Welcome!!`)
})

module.exports = router
