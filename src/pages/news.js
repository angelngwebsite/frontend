import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import NewsHeader from '../components/NewsHeader/news-header'
import NewsContent from '../components/NewsContent/news-content'

class NewsTemplate extends Component {
  render() {
    const posts = this.props.data.allWordpressPost.edges
    console.log(this.props.data)
    return (
      <Layout>
        <NewsHeader title="News" backgroundText="News" />

        {posts.reverse().map((post, i) => {
          console.log(post)
          return (
            <NewsContent
              key={i}
              title={post.node.acf.newsTitle}
              link={post.node.acf.newsLink}
              linkAppearance={post.node.acf.newsLinkAppearance}
              content={post.node.acf.newsDescription}
              embedLink={post.node.acf.newsEmbed.source_url}
              anchorSlug={post.node.wordpress_id}
            />
          )
        })}
      </Layout>
    )
  }
}

export default NewsTemplate

export const pageQuery = graphql`
  query NewsQuery {
    allWordpressPost(
      filter: { acf: { isNews: { ne: null } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          wordpress_id
          acf {
            newsTitle
            newsDescription
            newsLink
            newsEmbed {
              source_url
            }
            newsLinkAppearance
          }
        }
      }
    }
  }
`
