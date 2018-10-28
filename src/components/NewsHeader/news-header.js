import React from 'react'
import './news-header.scss'

const NewsHeader = ({ title, backgroundText }) => {
  return (
    <section className="content page-content news-header">
      <div className="center-column flex-content">
        <div className="headers">
          <div className="headers-wrapper">
            <h2>{title}</h2>
            <div className="background-text">{backgroundText}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsHeader
