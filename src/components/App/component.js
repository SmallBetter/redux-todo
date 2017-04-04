import React from 'react'
import logo from './assets/logo.svg'
import './assets/style.css'
import Example from '../TodoList'
import Todoinput from '../TodoInput'
import TodoFilter from '../TodoFilter'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <Todoinput />
      <TodoFilter />
      <Example />
    </div>
  </div>
)



export default App
