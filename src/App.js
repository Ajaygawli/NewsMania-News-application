import React, { Component } from 'react'
//import Card from './components/Card'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
       
      </div>
    )
  }
}

