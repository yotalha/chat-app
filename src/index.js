const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.get('/chat', (req, res) => {
//     res.send('Chat is working')
// })

io.on('connection', () => {
    console.log('New Web Socket connection')
})

server.listen(5000, () => {
    console.log('App is listening on port 5000')
})
