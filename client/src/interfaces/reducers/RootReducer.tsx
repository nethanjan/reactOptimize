import { Product } from '../models/Product'
import { Search } from '../models/Search'

export interface RootReducer {
  products: Product
  search: Search
}
