import React, { PropTypes } from 'react'
import './assets/style.css'

const TodoFilter = ({ filterTodo }) => (
  <div>
    <button onClick={() => filterTodo(true, true)}>All</button>
    <button onClick={() => filterTodo(true, false)}>Finish</button>
    <button onClick={() => filterTodo(false, true)}>UnFinish</button>
  </div>
)

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired
}


export default TodoFilter