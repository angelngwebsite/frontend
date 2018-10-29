import React, { Component } from 'react'
import Layout from '../components/layout'
import SAContent from '../components/SAContent/sa-content'
import SASliders from '../components/SASliders/sa-slider'
import AboutContent from '../components/AboutContent/about-content'
import AboutSlider from '../components/AboutSlider/about-slider'
import CollectionContent from '../components/CollectionContent/collection-content'
import CollectionSlider from '../components/CollectionSlider/collection-slider'

export default class FrontPage extends Component {
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
