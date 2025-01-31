import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import productoldold from './productoldold'
import productold from './productold'

import productjan24v1 from './productjan24v1'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,productold,productoldold,productjan24v1],
}
