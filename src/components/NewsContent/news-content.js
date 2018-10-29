import React from 'react'
import './news-content.scss'
import ReactAudioPlayer from 'react-audio-player'


const NewsContent = ({
  title,
  content,
  link,
  linkAppearance,
  embedLink,
  anchorSlug,
}) => {
  console.log(embedLink)

  return (
    <section className="content page-content news-content">
      <span className="news-start" id={anchorSlug} />
      <div className="center-column flex-content">
        <div className="headers">
          <div className="headers-wrapper">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="content-text">
          <a href={link}>{linkAppearance}</a>
          <ReactAudioPlayer src={embedLink} controls />
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default NewsContent
