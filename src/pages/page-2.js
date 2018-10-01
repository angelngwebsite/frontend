import React, { Component } from 'react'
import { Link } from 'gatsby'
import Swiper from 'react-id-swiper'
import Layout from '../components/layout'
import 'swiper/dist/css/swiper.css'

export default class SecondPage extends Component {

  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
    return (
      <Swiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    )
  }
}
