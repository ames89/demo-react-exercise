import React, { Component } from 'react'
import Popover from './popover'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='app-show_progress'>
          <Popover />
        </div>
      </div>
    )
  }
}

export default App
