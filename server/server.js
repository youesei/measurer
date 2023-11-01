import express, { json } from 'express'

// import { SerialPort } from 'serialport'
// import { DelimiterParser } from '@serialport/parser-delimiter'
// import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { corsMiddleware } from './middlewares/cors'

const port = process.env.PORT ?? 3001

const app = express()
const server = createServer(app)

// const io = new Server(server, {
//   cors: {
//     origin: '*'
//   }
// })
app.use(corsMiddleware())

// const arduinoPort = new SerialPort({
//   path: 'COM3',
//   baudRate: 9600
// })

// const parser = arduinoPort.pipe(new DelimiterParser({ delimiter: '\r\n' }))

// parser.on('data', async (data) => {
//   const enc = new TextDecoder()
//   const arr = new Uint8Array(data)
//   const ready = enc.decode(arr)
//   console.log('This is the result -> ', ready)
//   io.emit('data', ready)
// })

// io.on('connection', async (socket) => {
//   console.log('a user has connected')
//   socket.on('reset', () => {
//     arduinoPort.write('R')
//   })
// })

app.use(json())
app.disable('x-powered-by')

server.listen(port, () => {
  console.log(`Server is runnig on port http://localhost:${port}`)
})
