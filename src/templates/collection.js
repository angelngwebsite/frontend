import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CollectionContent from '../components/CollectionContent/collection-content'
import CollectionPhotos from '../components/CollectionPhotos/collection-photos'

class CollectionTemplate extends Component {
  render() {
    const post = this.props.data.allWordpressPost.edges[0].node
    console.log(this.props.data.allWordpressPost.edges[0].node)
    return (
      <Layout>
        <CollectionContent
          title={post.acf.collectionTitle}
          backgroundText={post.acf.collectionBackgroundText}
          content={post.acf.collectionDescription}
        />
        <CollectionPhotos photos={post.acf.collectionImages} />
      </Layout>
    )
  }
}

export default CollectionTemplate

export const pageQuery = graphql`
  query CollectionPageQuery($wordpress_id: Int!) {
    allWordpressPost(filter: { wordpress_id: { eq: $wordpress_id } }) {
      edges {
        node {
          id
          wordpress_id
          acf {
            collectionTitle
            collectionDescription
            collectionBackgroundText
            collectionImages {
              row {
                imageWrapper {
                  image {
                    source_url
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
