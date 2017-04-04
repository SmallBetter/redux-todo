import { connect } from 'react-redux'
import Todoitem from './component'
import { toggleTodo, removeTodo } from '../../actions/todos'

const mapStateToProps = (state, props) => ({ ...props })
const mapDispatchToProps = { toggleTodo, removeTodo }


export default connect(mapStateToProps, mapDispatchToProps)(Todoitem)