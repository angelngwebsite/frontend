import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SAContent from '../components/SAContent/sa-content'
import SASliders from '../components/SASliders/sa-slider'
import AboutContent from '../components/AboutContent/about-content'
import AboutSlider from '../components/AboutSlider/about-slider'
import CollectionContent from '../components/CollectionContent/collection-content'
import CollectionSlider from '../components/CollectionSlider/collection-slider'

export default class FrontPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <SAContent />
        <SASliders />
        <AboutContent />
        <AboutSlider />
        <CollectionContent title="Collections" backgroundText="Collections" />
        <CollectionSlider />
      </Layout>
    )
  }
}
// 5eecf2d77ef463b835f169a30702673640dd933c

{
  /* <Link to="/page-2/">Go to page 2</Link> */
}
