import React from 'react'
import './collection-photos.scss'
import Img from 'gatsby-image'

function AutomateAspectratio(props) {
  const numberofImages = props.numberofImages
  const children = props.children
  if (numberofImages > 1) {
    return (
      <div className="inner-wrapper" style={{ paddingTop: '160%' }}>
        <div className="thumbnail">{children}</div>
      </div>
    )
  } else {
    return (
      <div className="inner-wrapper" style={{ paddingTop: '60%' }}>
        <div className="thumbnail">{children}</div>
      </div>
    )
  }
}

const CollectionPhotos = ({ photos }) => {
  return (
    <section id="collection-photos">
      <div className="center-column">
        {photos.map((photoRow, i) => {
          return (
            <div className="collection-row" key={i}>
              {photoRow.row.imageWrapper.map((photo, i) => {
                if (photo.image.localFile != null) {
                  return (
                    <article key={i} className="photo">
                      <AutomateAspectratio
                        numberofImages={photoRow.row.imageWrapper.length}
                      >
                        <Img
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                          fluid={photo.image.localFile.childImageSharp.fluid}
                        />
                      </AutomateAspectratio>
                    </article>
                  )
                } else {
                  console.log('Localfile is NULL cannnot load')
                }
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CollectionPhotos
