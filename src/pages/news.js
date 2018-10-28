import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import NewsHeader from '../components/NewsHeader/news-header'
import NewsContent from '../components/NewsContent/news-content'

class NewsTemplate extends Component {
  render() {
    const post = this.props.data.allWordpressPost.edges[0].node
    console.log(this.props.data)
    return (
      <Layout>
        <NewsHeader title="News" backgroundText="News" />
        <NewsContent
          title={post.acf.newsTitle}
          content={post.acf.newsDescription}
        />
      </Layout>
    )
  }
}

export default NewsTemplate

export const pageQuery = graphql`
  query NewsQuery {
    allWordpressPost(
      filter: { acf: { isNews: { ne: null } } }
      sort: { fields: date }
    ) {
      edges {
        node {
          id
          wordpress_id
          acf {
            newsTitle
            newsDescription

            newsLinkAppearance
          }
        }
      }
    }
  }
`
