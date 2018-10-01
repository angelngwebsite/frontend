import React from 'react'
import Home from '../components/home'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

const IndexPage = props => (
  <Layout>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
