import { DispatcherAction } from '../interfaces/actions/DispatcherAction'

const initialState = {
  title: '',
}

export default function (state = initialState, action: DispatcherAction) {
  switch (action.type) {
    case 'SEARCH_POSTS':
      return {
        title: action.payload,
      }
    default:
      return state
  }
}
