import React from 'react'
import { Link } from 'gatsby'

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <p>React Redux React router is ES6</p>
        <Link to="about" className="btn">
          Learn more
        </Link>
      </div>
    )
  }
}

export default HomePage