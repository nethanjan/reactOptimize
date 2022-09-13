import store from '../store'

export function SearchProduct(searchVal: string) {
  store.dispatch({
    type: 'SEARCH_POSTS',
    payload: searchVal,
  })
}
