import { Router } from 'express'

// import {ItemsController} form '../controllers/items.js'

export const itemsRouter = Router()

export const createItemsRouter = ({ }) => {
  const itemsRouter = Router()
  itemsRouter.get('/', itemsController.getAll)
  itemsRouter.post('/', itemsController.create)

  itemsRouter.get('/:id', itemsController.getById)
  itemsRouter.delete('/:id', itemsController.delete)
  itemsRouter.patch('/:id', itemsController.update)

  return itemsRouter
}

// itemsRouter.get('/reset')
// (req, res) => {
//     arduinoPort.write('R')
//     res.json({ saludo: 'reseteado' })
//   }

// app.use((req, res) => {
//     res.status(404).send('<h1>404</h1>')
//   })
