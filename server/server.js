import express from 'express'

import { SerialPort } from 'serialport'
import { DelimiterParser } from '@serialport/parser-delimiter'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

const port = process.env.PORT ?? 3001

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

const arduinoPort = new SerialPort({
  path: 'COM3',
  baudRate: 9600
})

const parser = arduinoPort.pipe(new DelimiterParser({ delimiter: '\r\n' }))

parser.on('data', async (data) => {
  const enc = new TextDecoder()
  const arr = new Uint8Array(data)
  const ready = enc.decode(arr)
  console.log('This is the result -> ', ready)
  io.emit('data', ready)
})

io.on('connection', async (socket) => {
  console.log('a user has connected')
  socket.on('reset', () => {
    arduinoPort.write('R')
  })
  // io.emit('data', { success: true })
})

app.disable('x-powered-by')
app.use(express.json())

app.get('/items', (req, res) => {
  // const query = 'SELECT * FROM items'
  res.json({ saludo: 'hola' })
})

app.get('/reset', (req, res) => {
  arduinoPort.write('R')

  res.json({ saludo: 'reseteado' })
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

server.listen(port, () => {
  console.log(`Server is runnig on port http://localhost:${port}`)
})
