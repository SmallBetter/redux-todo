import TYPE from './types'

export const filterTodo = (showFinish, showUnFinish) => ({
  type: TYPE.FILTER.TODO,
  payload: { showFinish, showUnFinish }
})