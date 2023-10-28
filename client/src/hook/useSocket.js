import { useState } from 'react'
import { io } from 'socket.io-client'
// import { useEffect } from 'react'

const socket = io('http://localhost:3001')

export const useSocket = () => {
  const [data, setData] = useState(0)

  const resetData = () => {
    setData(0)
  }

  socket.on('data', (data) => {
    setData(data)
  })

  return { data, resetData }
}
