//importing needed packages
const express = require('express')
const socket = require('socket.io')

//creates an instance of the Express web framework
const app = express()
const server = app.listen(3000)

app.use(express.static('public'))

const io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })
})