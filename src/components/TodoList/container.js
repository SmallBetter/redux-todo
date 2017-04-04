import { connect } from 'react-redux'
import Example from './component'

const mapStateToProps = state => ({
  todos: state.todos,
  show: state.show
})

export default connect(mapStateToProps)(Example)