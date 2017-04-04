import React, { PropTypes } from 'react'
import Todoitem from '../TodoItem'

const Example = ({ todos, show }) => (
  <div>
    <ul>
      {todos
        .filter(todo => (todo.finish && show.showFinish) || (!todo.finish && show.showUnFinish))
        .map(todo => <Todoitem key={todo.id} {...todo} />,
        )}
    </ul>
  </div>
  )

Example.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    finish: PropTypes.bool.isRequired
  })
  ).isRequired,
  show: PropTypes.shape({
    showFinish: PropTypes.bool.isRequired,
    showUnFinish: PropTypes.bool.isRequired
  }).isRequired
}


export default Example