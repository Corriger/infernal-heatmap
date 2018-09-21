import React, { Component } from 'react'
import devilMap from './../data.js'

const List = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100px;
  border: 1px solid black;
`

class LocationList extends Component {
  render() {
    return (
        devilMap.map((object, i) =>
        <List>
          { this.object.name }
        </List>
      ));
  }
}

export default LocationList;
