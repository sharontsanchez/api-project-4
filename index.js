// imports

require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

const PORT = process.env.PORT || 9000

// middle ware 
server.use(express.json())
server.use(cors())

server.get('/api/hello', (req,res) => {
    res.json({ message: 'api is working'})
})

server.use('*', (req, res) => {
    res.send(`<h1> Hello, there! </h1>`)
})

// error handling 
server.use((err, req, res) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack:err.stack,
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})