import React from 'react'
import './news-content.scss'

const NewsContent = ({ title, content }) => {
  return (
    <section className="content page-content news-content">
      <span id="news-start" />
      <div className="center-column flex-content">
        <div className="headers">
          <div className="headers-wrapper">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="content-text">
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default NewsContent
