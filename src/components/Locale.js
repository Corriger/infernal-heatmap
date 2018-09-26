import React, { Component } from 'react'
import styled from 'styled-components'
import Test from './../img/dumary-island.jpg'
import music from './../audio/dumary_island.mp3'
import Jukebox from './../components/Jukebox.js'

const ImgBox = styled.figure`
  width: 100%
  height: 37.6%
  overflow: hidden

  ::before {
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    linear-gradient(180deg, rgba(0, 0, 0, 1) 20%, #000000 100%)
    z-index: 6
  }
`
const Img = styled.img`
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center
`
const Title = styled.h1`
  text-align: center;
  text-shadow: 0px 0px 15px white
  margin: 5px auto
`
class Locale extends Component {
  render() {
    return (
      <div class="half">
        <ImgBox>
          <Img src={ Test }/>
        </ImgBox>
        <Title>Dumary Island</Title>
        <Jukebox/>
      </div>
    );
  }
}

export default Locale
