import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.div`
  display: flex
  justify-content: center
  align-items: center
  width: 30px
  height: 30px
  border-radius: 50%
  background: darkred
  padding: 0 0 0 5px
`
const Info = styled.div`
  height: 100%
  width: 120px
  margin: 0 0 0 15px
`
class Jukebox extends Component {
  render() {
    return (
      <div className="player">
        <Button>▶</Button>
        <Info>
          <span>Unholy Relics</span>
          <hr/>
          <span>00:00</span>
        </Info>
      </div>

    )
  }
}

export default Jukebox
