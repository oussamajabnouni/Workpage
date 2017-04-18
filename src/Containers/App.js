import React, { Component } from 'react'

import './../index.css'

import LeftBar from './LeftBar.js'
import Top from './Top.js'




class App extends Component {
  
  render() {
    return (
      <div>
          <div className="left-side">
            <LeftBar />
          </div>
          <div className="right-side">
            <Top />
            {this.props.children}
          </div>
      </div>
    )
  }
  
}

export default App
