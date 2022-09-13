import { Product } from '../models/Product'

export interface ApiResponse {
  data: {
    data: {
      categories: Product
    }
  }
}
