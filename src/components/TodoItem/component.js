import React, { PropTypes } from 'react'
import './assets/style.css'

const Todoitem = ({ id, text, finish, toggleTodo, removeTodo }) => {
  const finishColor = finish ? 'finish' : 'unfinish'
  return (
    <li>
      <span className={finishColor} onClick={() => toggleTodo(id)}>{text}</span>
      <input className="buttonkey" onClick={() => removeTodo(id)} type="button" value="X" />
    </li>
  )
}

Todoitem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  finish: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}


export default Todoitem