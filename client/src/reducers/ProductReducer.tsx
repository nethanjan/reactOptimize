import { FAILED_GET_PRODUCTS, GET_PRODUCTS } from '../actions/Types'
import { DispatcherAction } from '../interfaces/actions/DispatcherAction'

const initialState = {
  name: '',
  articleCount: 0,
  categoryArticles: [],
  childrenCategories: [],
  loading: true,
}

export default function (state = initialState, action: DispatcherAction) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        name: action.payload.name,
        articleCount: action.payload.articleCount,
        categoryArticles: action.payload.categoryArticles.articles || [],
        childrenCategories: action.payload.childrenCategories.list
          ? action.payload.childrenCategories.list
          : [],
        loading: false,
      }
    case FAILED_GET_PRODUCTS:
      return {
        loading: false,
      }
    default:
      return state
  }
}
