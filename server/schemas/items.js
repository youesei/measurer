import z from 'zod'

const itemSchema = z.object({
  provider: z.string({
    invalid_type_error: 'Item provider must be a string',
    required_error: 'Movie title is required'
  }),
  caliber: z.number().int().min(0).max(1000),
  thickness: z.number().int().min(0).max(1000),
  topColor: z.string({
    invalid_type_error: 'Item top color must be a string',
    required_error: 'Item top color is required'
  }),
  backColor: z.string({
    invalid_type_error: 'Item back color must be a string',
    required_error: 'Item back color is required'
  }),
  weight: z.number().int().min(0).max(1000),
  footage: z.number().int().min(0).max(1000),
  discount: z.number().int().min(0)

})

// provider
// caliber
// thickness
// weight
