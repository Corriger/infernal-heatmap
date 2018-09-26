import React, { Component } from 'react'
import devilMap from './../data.js'
import styled from 'styled-components'

const List = styled.li`
  font-size: 1.3em
`

class LocationList extends Component {
  render() {
    return (
        devilMap.map((object, i) =>
        <List>
          { object.name }
        </List>
      ));
  }
}

export default LocationList
