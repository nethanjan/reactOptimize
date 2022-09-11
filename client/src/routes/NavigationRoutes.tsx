import { Routes } from '../interfaces/routes/Routes'

import ProductList from '../screens/productList/ProductList'

const NavigationRoutes: Array<Routes> = [
  {
    id: 1,
    title: 'Product List',
    path: '/',
    component: ProductList,
  },
]

export default NavigationRoutes
