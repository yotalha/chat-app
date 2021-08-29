const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0

// app.get('/chat', (req, res) => {
//     res.send('Chat is working')
// })

io.on('connection', (socket) => {
    console.log('New Web Socket connection')

    socket.emit('countUpdated', count)

    socket.on('increment', () => {
        count++
        io.emit('countUpdated', count)
    })
})

server.listen(5000, () => {
    console.log('App is listening on port 5000')
})
