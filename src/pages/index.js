import React, { Component } from 'react'
import Layout from '../components/layout'

import { Link } from 'gatsby'

export default class FrontPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}
