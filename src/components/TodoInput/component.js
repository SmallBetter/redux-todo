import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class Todoinput extends Component {

  state = {
    text: ''
  }

  handletext = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleEnter = event => {
    if (event.key === 'Enter' && this.state.text.length) {
      this.props.addTodo(this.state.text)
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <p><input type="text" onKeyPress={this.handleEnter} value={this.state.text} onChange={this.handletext} placeholder="List" /></p>
    )
  }
}

Todoinput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Todoinput