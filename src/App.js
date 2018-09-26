import React, { Component } from 'react'
import reset from './App.css'
import styled from 'styled-components'
import LocationList from './components/LocationList.js'
import Locale from './components/Locale.js'

const Locations = styled.ul`
  list-style: none
  display: flex
  width: 16.46%
  height: 100%
  flex-flow: column wrap
  justify-content: space-between
  overflow-y: auto
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Locale/>
        <Locations>
          <LocationList/>
        </Locations>
      </div>

    );
  }
}

export default App;
