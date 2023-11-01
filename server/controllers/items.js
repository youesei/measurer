// import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class ItemController {
  constructor ({ itemModel }) {
    this.itemModel = itemModel
  }

  getAll = async (req, res) => {
    const items = await this.itemModel.getAll()
    res.json(items)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const item = await this.itemModel.getById({ id })
    if (item) return res.json(item)
    res.status(404).json({ message: 'Item not found' })
  }

  create = async (req, res) => {
    const result = req.body // validateItem(req.body)
    if (!result.success) {
      return res.status(404).json({ error: JSON.parese(result.error.message) })
    }
    const newItem = await this.itemModel.create({ input: result.data })
    res.status(201).json(newItem)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.itemModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Item not found' })
    }
    return res.json({ message: 'Movie deleted' })
  }

  update = async (req, res) => {
    const result = req.body // validatePartialMovie(req.body)
    if (!result.success) {
      return res.status(404).json({ error: JSON.parse(result.error.message) })
    }
    const { id } = req.params
    const updatedMovie = await this.movieModel.update({ id, input: result.data })

    return res.json(updatedMovie)
  }
}
