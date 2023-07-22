const express = require('express')
const path = require('path')

const server = express()

server.use(express.static('public'))
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

server.listen(3000, () => console.log('server up'))
