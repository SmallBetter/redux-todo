import { combineReducers } from 'redux'
import todos from './reducers/todos'
import show from './reducers/show'

export const initialStore = {
  show: {
    showFinish: true,
    showUnFinish: true
  },
  todos: []
}

const rootReducer = combineReducers({
  todos,
  show
})

export default rootReducer