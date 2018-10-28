import React from 'react'
import './collection-content.scss'

const CollectionContent = ({ title, backgroundText, content }) => {
  return (
    <section className="content page-content collection-content">
      <span id="collection-start" />
      <div className="center-column flex-content">
        <div className="headers">
          <div className="headers-wrapper">
            <h2>{title}</h2>
            <div className="background-text">{backgroundText}</div>
          </div>
        </div>
        <div className="content-text">
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default CollectionContent
